<?php
session_start();

$configFile = '/home/okrxvcpeqc7k/cr_data/config.php';
if (file_exists($configFile)) {
    include $configFile;
}
$adminPass = defined('ADMIN_PASSWORD') ? ADMIN_PASSWORD : 'CloudRes2026!';

if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: admin.php');
    exit;
}

if (isset($_POST['password'])) {
    if ($_POST['password'] === $adminPass) {
        $_SESSION['admin_auth'] = true;
    } else {
        $loginError = 'Invalid password';
    }
}

if (empty($_SESSION['admin_auth'])) {
    ?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Admin Login | Cloud Resources</title>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
        <style>
            * { margin:0; padding:0; box-sizing:border-box; }
            body { font-family:'DM Sans',sans-serif; background:#f4f6fb; min-height:100vh; display:flex; align-items:center; justify-content:center; }
            .card { background:#fff; border-radius:16px; padding:40px; width:100%; max-width:400px; box-shadow:0 4px 24px rgba(0,0,0,.08); }
            h1 { font-size:24px; font-weight:700; color:#0f172a; margin-bottom:8px; }
            p { color:#475569; font-size:14px; margin-bottom:24px; }
            label { display:block; font-size:14px; font-weight:500; color:#0f172a; margin-bottom:8px; }
            input { width:100%; padding:12px 16px; border:1px solid #e2e8f0; border-radius:12px; font-size:14px; outline:none; }
            input:focus { border-color:#0052ff; box-shadow:0 0 0 3px rgba(0,82,255,.1); }
            button { width:100%; padding:14px; background:#0052ff; color:#fff; border:none; border-radius:12px; font-size:14px; font-weight:600; cursor:pointer; margin-top:16px; }
            button:hover { background:#003dd6; }
            .err { color:#ef4444; font-size:13px; margin-top:8px; }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>Admin Access</h1>
            <p>Enter the admin password to view submissions and applications.</p>
            <form method="POST">
                <label>Password</label>
                <input type="password" name="password" autofocus required>
                <?php if (!empty($loginError)): ?><div class="err"><?= htmlspecialchars($loginError) ?></div><?php endif; ?>
                <button type="submit">Sign In</button>
            </form>
        </div>
    </body>
    </html>
    <?php
    exit;
}

// --- AUTHENTICATED ---
$dbFile = '/home/okrxvcpeqc7k/cr_data/contacts.db';
$submissions = [];
$applications = [];
$stats = ['total' => 0, 'today' => 0, 'week' => 0, 'emails' => 0];
$appStats = ['total' => 0, 'today' => 0, 'week' => 0, 'emails' => 0];

$tab = $_GET['tab'] ?? 'leads';

if (file_exists($dbFile)) {
    try {
        $db = new SQLite3($dbFile);

        // Ensure applications table exists
        $db->exec('CREATE TABLE IF NOT EXISTS applications (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            job_title TEXT NOT NULL,
            job_slug TEXT,
            department TEXT,
            first_name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT,
            linkedin TEXT,
            cover_letter TEXT,
            resume_path TEXT,
            resume_name TEXT,
            resume_mime TEXT,
            resume_size INTEGER,
            ip_address TEXT,
            user_agent TEXT,
            email_sent INTEGER DEFAULT 0,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )');

        // Export CSV
        if (isset($_GET['export'])) {
            if ($_GET['export'] === 'applications') {
                header('Content-Type: text/csv');
                header('Content-Disposition: attachment; filename="cloudresources_applications_' . date('Y-m-d') . '.csv"');
                $out = fopen('php://output', 'w');
                fputcsv($out, ['ID','Job Title','Department','First Name','Last Name','Email','Phone','LinkedIn','Cover Letter','Resume','Email Sent','Applied At']);
                $r = $db->query('SELECT * FROM applications ORDER BY id DESC');
                while ($row = $r->fetchArray(SQLITE3_ASSOC)) {
                    fputcsv($out, [
                        $row['id'], $row['job_title'], $row['department'],
                        $row['first_name'], $row['last_name'], $row['email'],
                        $row['phone'], $row['linkedin'], $row['cover_letter'],
                        $row['resume_name'],
                        $row['email_sent'] ? 'Yes' : 'No',
                        $row['created_at']
                    ]);
                }
                fclose($out);
                $db->close();
                exit;
            } else {
                header('Content-Type: text/csv');
                header('Content-Disposition: attachment; filename="cloudresources_leads_' . date('Y-m-d') . '.csv"');
                $out = fopen('php://output', 'w');
                fputcsv($out, ['ID','First Name','Last Name','Email','Company','Service','Message','Email Sent','SMS Sent','Submitted At']);
                $r = $db->query('SELECT * FROM submissions ORDER BY id DESC');
                while ($row = $r->fetchArray(SQLITE3_ASSOC)) {
                    fputcsv($out, [
                        $row['id'], $row['first_name'], $row['last_name'], $row['email'],
                        $row['company'], $row['service_label'], $row['message'],
                        $row['email_sent'] ? 'Yes' : 'No', $row['sms_sent'] ? 'Yes' : 'No',
                        $row['created_at']
                    ]);
                }
                fclose($out);
                $db->close();
                exit;
            }
        }

        // Resume download
        if (isset($_GET['download']) && is_numeric($_GET['download'])) {
            $stmt = $db->prepare('SELECT resume_path, resume_name, resume_mime FROM applications WHERE id = :id');
            $stmt->bindValue(':id', (int)$_GET['download'], SQLITE3_INTEGER);
            $row = $stmt->execute()->fetchArray(SQLITE3_ASSOC);
            if ($row && !empty($row['resume_path']) && file_exists($row['resume_path'])) {
                header('Content-Type: ' . $row['resume_mime']);
                header('Content-Disposition: attachment; filename="' . basename($row['resume_name']) . '"');
                header('Content-Length: ' . filesize($row['resume_path']));
                readfile($row['resume_path']);
                $db->close();
                exit;
            }
        }

        // Contact leads stats
        $stats['total']  = $db->querySingle("SELECT COUNT(*) FROM submissions") ?: 0;
        $stats['today']  = $db->querySingle("SELECT COUNT(*) FROM submissions WHERE date(created_at) = date('now')") ?: 0;
        $stats['week']   = $db->querySingle("SELECT COUNT(*) FROM submissions WHERE created_at >= datetime('now', '-7 days')") ?: 0;
        $stats['emails'] = $db->querySingle("SELECT COUNT(*) FROM submissions WHERE email_sent = 1") ?: 0;

        // Applications stats
        $appStats['total']  = $db->querySingle("SELECT COUNT(*) FROM applications") ?: 0;
        $appStats['today']  = $db->querySingle("SELECT COUNT(*) FROM applications WHERE date(created_at) = date('now')") ?: 0;
        $appStats['week']   = $db->querySingle("SELECT COUNT(*) FROM applications WHERE created_at >= datetime('now', '-7 days')") ?: 0;
        $appStats['emails'] = $db->querySingle("SELECT COUNT(*) FROM applications WHERE email_sent = 1") ?: 0;

        // Fetch data for active tab
        $r = $db->query('SELECT * FROM submissions ORDER BY id DESC LIMIT 100');
        while ($row = $r->fetchArray(SQLITE3_ASSOC)) {
            $submissions[] = $row;
        }

        $r = $db->query('SELECT * FROM applications ORDER BY id DESC LIMIT 100');
        while ($row = $r->fetchArray(SQLITE3_ASSOC)) {
            $applications[] = $row;
        }

        $db->close();
    } catch (Exception $e) {
        $dbError = $e->getMessage();
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard | Cloud Resources</title>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * { margin:0; padding:0; box-sizing:border-box; }
        body { font-family:'DM Sans',sans-serif; background:#f4f6fb; color:#0f172a; }
        .nav { background:#0a1628; padding:16px 32px; display:flex; align-items:center; justify-content:space-between; }
        .nav h1 { color:#fff; font-size:18px; }
        .nav-right { display:flex; gap:16px; align-items:center; }
        .nav a { color:#94a3b8; font-size:13px; text-decoration:none; }
        .nav a:hover { color:#fff; }
        .container { max-width:1300px; margin:0 auto; padding:24px; }
        .tabs { display:flex; gap:4px; margin-bottom:24px; background:#fff; border-radius:12px; padding:4px; box-shadow:0 1px 4px rgba(0,0,0,.06); }
        .tab { flex:1; padding:14px 20px; text-align:center; border-radius:10px; font-size:14px; font-weight:600; color:#64748b; cursor:pointer; text-decoration:none; transition:all .15s; display:flex; align-items:center; justify-content:center; gap:8px; }
        .tab:hover { color:#0f172a; background:#f8fafc; }
        .tab.active { background:#0052ff; color:#fff; }
        .tab .count { background:rgba(255,255,255,.2); padding:2px 8px; border-radius:10px; font-size:12px; }
        .tab:not(.active) .count { background:#e2e8f0; color:#64748b; }
        .stats { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; margin-bottom:24px; }
        .stat { background:#fff; border-radius:12px; padding:20px; box-shadow:0 1px 4px rgba(0,0,0,.06); }
        .stat .num { font-size:32px; font-weight:700; color:#0052ff; }
        .stat .lbl { font-size:13px; color:#64748b; margin-top:4px; }
        .toolbar { display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; }
        .toolbar h2 { font-size:20px; font-weight:700; }
        .btn { display:inline-flex; align-items:center; gap:6px; padding:10px 20px; background:#0052ff; color:#fff; border:none; border-radius:10px; font-size:13px; font-weight:600; cursor:pointer; text-decoration:none; }
        .btn:hover { background:#003dd6; }
        table { width:100%; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 1px 4px rgba(0,0,0,.06); border-collapse:collapse; }
        th { background:#f8fafc; text-align:left; padding:12px 16px; font-size:12px; font-weight:600; color:#64748b; text-transform:uppercase; letter-spacing:.5px; border-bottom:1px solid #e2e8f0; }
        td { padding:14px 16px; font-size:13px; color:#334155; border-bottom:1px solid #f1f5f9; vertical-align:top; }
        tr:hover td { background:#f8faff; }
        .badge { display:inline-block; padding:3px 10px; border-radius:99px; font-size:11px; font-weight:600; }
        .badge-green { background:#dcfce7; color:#16a34a; }
        .badge-red { background:#fef2f2; color:#ef4444; }
        .badge-blue { background:#eff6ff; color:#2563eb; }
        .badge-purple { background:#f3e8ff; color:#7c3aed; }
        .msg { max-width:200px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .empty { text-align:center; padding:60px 20px; color:#94a3b8; }
        .resume-link { color:#0052ff; text-decoration:none; font-weight:500; }
        .resume-link:hover { text-decoration:underline; }
        .section { display:none; }
        .section.active { display:block; }
        @media(max-width:768px) { .stats { grid-template-columns:repeat(2,1fr); } .container { padding:16px; } table { display:block; overflow-x:auto; } }
    </style>
</head>
<body>
    <div class="nav">
        <h1>Cloud Resources — Admin Dashboard</h1>
        <div class="nav-right">
            <a href="admin.php?logout=1">Logout</a>
        </div>
    </div>
    <div class="container">
        <div class="tabs">
            <a href="#" class="tab <?= $tab === 'leads' ? 'active' : '' ?>" onclick="switchTab('leads'); return false;">
                Contact Leads <span class="count"><?= $stats['total'] ?></span>
            </a>
            <a href="#" class="tab <?= $tab === 'applications' ? 'active' : '' ?>" onclick="switchTab('applications'); return false;">
                Job Applications <span class="count"><?= $appStats['total'] ?></span>
            </a>
        </div>

        <!-- CONTACT LEADS -->
        <div id="section-leads" class="section <?= $tab === 'leads' ? 'active' : '' ?>">
            <div class="stats">
                <div class="stat"><div class="num"><?= $stats['total'] ?></div><div class="lbl">Total Submissions</div></div>
                <div class="stat"><div class="num"><?= $stats['today'] ?></div><div class="lbl">Today</div></div>
                <div class="stat"><div class="num"><?= $stats['week'] ?></div><div class="lbl">This Week</div></div>
                <div class="stat"><div class="num"><?= $stats['emails'] ?></div><div class="lbl">Emails Delivered</div></div>
            </div>
            <div class="toolbar">
                <h2>Recent Submissions</h2>
                <a href="admin.php?export=leads" class="btn">Export CSV</a>
            </div>
            <?php if (empty($submissions)): ?>
                <div class="empty">No contact submissions yet.</div>
            <?php else: ?>
            <table>
                <thead>
                    <tr>
                        <th>#</th><th>Name</th><th>Email</th><th>Company</th><th>Service</th><th>Message</th><th>Email</th><th>SMS</th><th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($submissions as $s): ?>
                    <tr>
                        <td><?= $s['id'] ?></td>
                        <td><strong><?= htmlspecialchars($s['first_name'] . ' ' . $s['last_name']) ?></strong></td>
                        <td><a href="mailto:<?= htmlspecialchars($s['email']) ?>" style="color:#0052ff;"><?= htmlspecialchars($s['email']) ?></a></td>
                        <td><?= htmlspecialchars($s['company'] ?: '—') ?></td>
                        <td><span class="badge badge-blue"><?= htmlspecialchars($s['service_label'] ?: '—') ?></span></td>
                        <td class="msg" title="<?= htmlspecialchars($s['message']) ?>"><?= htmlspecialchars($s['message'] ?: '—') ?></td>
                        <td><span class="badge <?= $s['email_sent'] ? 'badge-green' : 'badge-red' ?>"><?= $s['email_sent'] ? 'Sent' : 'Failed' ?></span></td>
                        <td><span class="badge <?= $s['sms_sent'] ? 'badge-green' : 'badge-red' ?>"><?= $s['sms_sent'] ? 'Sent' : 'Failed' ?></span></td>
                        <td style="white-space:nowrap;"><?= htmlspecialchars($s['created_at']) ?></td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
            <?php endif; ?>
        </div>

        <!-- JOB APPLICATIONS -->
        <div id="section-applications" class="section <?= $tab === 'applications' ? 'active' : '' ?>">
            <div class="stats">
                <div class="stat"><div class="num"><?= $appStats['total'] ?></div><div class="lbl">Total Applications</div></div>
                <div class="stat"><div class="num"><?= $appStats['today'] ?></div><div class="lbl">Today</div></div>
                <div class="stat"><div class="num"><?= $appStats['week'] ?></div><div class="lbl">This Week</div></div>
                <div class="stat"><div class="num"><?= $appStats['emails'] ?></div><div class="lbl">Emails Delivered</div></div>
            </div>
            <div class="toolbar">
                <h2>Recent Applications</h2>
                <a href="admin.php?export=applications" class="btn">Export CSV</a>
            </div>
            <?php if (empty($applications)): ?>
                <div class="empty">No job applications yet. They will appear here when candidates apply through the careers page.</div>
            <?php else: ?>
            <table>
                <thead>
                    <tr>
                        <th>#</th><th>Candidate</th><th>Position</th><th>Contact</th><th>Resume</th><th>Cover Letter</th><th>Email</th><th>Applied</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($applications as $a): ?>
                    <tr>
                        <td><?= $a['id'] ?></td>
                        <td>
                            <strong><?= htmlspecialchars($a['first_name'] . ' ' . $a['last_name']) ?></strong>
                            <?php if (!empty($a['linkedin'])): ?>
                            <br><a href="<?= htmlspecialchars($a['linkedin']) ?>" target="_blank" style="color:#0052ff;font-size:12px;">LinkedIn &nearr;</a>
                            <?php endif; ?>
                        </td>
                        <td>
                            <span class="badge badge-purple"><?= htmlspecialchars($a['job_title']) ?></span>
                            <div style="font-size:12px;color:#94a3b8;margin-top:4px;"><?= htmlspecialchars($a['department']) ?></div>
                        </td>
                        <td>
                            <a href="mailto:<?= htmlspecialchars($a['email']) ?>" style="color:#0052ff;"><?= htmlspecialchars($a['email']) ?></a>
                            <?php if (!empty($a['phone'])): ?>
                            <div style="font-size:12px;color:#64748b;margin-top:2px;"><?= htmlspecialchars($a['phone']) ?></div>
                            <?php endif; ?>
                        </td>
                        <td>
                            <?php if (!empty($a['resume_name'])): ?>
                            <a href="admin.php?download=<?= $a['id'] ?>" class="resume-link">&#128196; <?= htmlspecialchars($a['resume_name']) ?></a>
                            <div style="font-size:11px;color:#94a3b8;margin-top:2px;"><?= round(($a['resume_size'] ?? 0) / 1024) ?> KB</div>
                            <?php else: ?>
                            <span style="color:#94a3b8;">—</span>
                            <?php endif; ?>
                        </td>
                        <td class="msg" title="<?= htmlspecialchars($a['cover_letter'] ?? '') ?>"><?= htmlspecialchars($a['cover_letter'] ?: '—') ?></td>
                        <td><span class="badge <?= $a['email_sent'] ? 'badge-green' : 'badge-red' ?>"><?= $a['email_sent'] ? 'Sent' : 'Failed' ?></span></td>
                        <td style="white-space:nowrap;">
                            <?= date('M j, Y', strtotime($a['created_at'])) ?>
                            <div style="font-size:11px;color:#94a3b8;"><?= date('g:i A', strtotime($a['created_at'])) ?></div>
                        </td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
            <?php endif; ?>
        </div>
    </div>

    <script>
    function switchTab(tab) {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        document.getElementById('section-' + tab).classList.add('active');
        event.target.closest('.tab').classList.add('active');
        history.replaceState(null, '', 'admin.php?tab=' + tab);
    }
    </script>
</body>
</html>
