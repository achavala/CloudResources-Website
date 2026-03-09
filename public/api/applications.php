<?php
session_start();

$configFile = '/home/okrxvcpeqc7k/cr_data/config.php';
if (file_exists($configFile)) {
    include $configFile;
}
$adminPass = defined('ADMIN_PASSWORD') ? ADMIN_PASSWORD : 'CloudRes2026!';

if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: applications.php');
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
        <title>Applications Admin | Cloud Resources</title>
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
            <h1>Applications Admin</h1>
            <p>Enter the admin password to view job applications.</p>
            <form method="POST">
                <label>Password</label>
                <input type="password" name="password" autofocus required>
                <?php if (isset($loginError)): ?><p class="err"><?php echo htmlspecialchars($loginError); ?></p><?php endif; ?>
                <button type="submit">Login</button>
            </form>
        </div>
    </body>
    </html>
    <?php
    exit;
}

$dbFile = '/home/okrxvcpeqc7k/cr_data/contacts.db';

// --- RESUME DOWNLOAD ---
if (isset($_GET['download']) && is_numeric($_GET['download'])) {
    try {
        $db = new SQLite3($dbFile);
        $stmt = $db->prepare('SELECT resume_path, resume_name, resume_mime FROM applications WHERE id = :id');
        $stmt->bindValue(':id', (int)$_GET['download'], SQLITE3_INTEGER);
        $row = $stmt->execute()->fetchArray(SQLITE3_ASSOC);
        $db->close();

        if ($row && !empty($row['resume_path']) && file_exists($row['resume_path'])) {
            header('Content-Type: ' . $row['resume_mime']);
            header('Content-Disposition: attachment; filename="' . basename($row['resume_name']) . '"');
            header('Content-Length: ' . filesize($row['resume_path']));
            readfile($row['resume_path']);
            exit;
        }
    } catch (Exception $e) {
        // Fall through to dashboard
    }
}

// --- CSV EXPORT ---
if (isset($_GET['export']) && $_GET['export'] === 'csv') {
    try {
        $db = new SQLite3($dbFile);
        $results = $db->query('SELECT id, job_title, department, first_name, last_name, email, phone, linkedin, cover_letter, resume_name, email_sent, created_at FROM applications ORDER BY id DESC');

        header('Content-Type: text/csv');
        header('Content-Disposition: attachment; filename="applications_' . date('Y-m-d') . '.csv"');

        $out = fopen('php://output', 'w');
        fputcsv($out, ['ID', 'Job Title', 'Department', 'First Name', 'Last Name', 'Email', 'Phone', 'LinkedIn', 'Cover Letter', 'Resume', 'Email Sent', 'Applied At']);

        while ($row = $results->fetchArray(SQLITE3_ASSOC)) {
            fputcsv($out, $row);
        }

        fclose($out);
        $db->close();
        exit;
    } catch (Exception $e) {
        // Fall through to dashboard
    }
}

// --- DASHBOARD ---
try {
    $db = new SQLite3($dbFile);
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

    $total     = $db->querySingle('SELECT COUNT(*) FROM applications');
    $today     = $db->querySingle("SELECT COUNT(*) FROM applications WHERE date(created_at) = date('now')");
    $thisWeek  = $db->querySingle("SELECT COUNT(*) FROM applications WHERE created_at >= date('now', '-7 days')");
    $emailed   = $db->querySingle("SELECT COUNT(*) FROM applications WHERE email_sent = 1");

    $filter = '';
    $filterJob = '';
    if (!empty($_GET['job'])) {
        $filterJob = $_GET['job'];
        $stmt = $db->prepare('SELECT * FROM applications WHERE job_slug = :js ORDER BY id DESC LIMIT 200');
        $stmt->bindValue(':js', $filterJob, SQLITE3_TEXT);
        $results = $stmt->execute();
    } else {
        $results = $db->query('SELECT * FROM applications ORDER BY id DESC LIMIT 200');
    }

    $rows = [];
    while ($row = $results->fetchArray(SQLITE3_ASSOC)) {
        $rows[] = $row;
    }

    $jobCounts = [];
    $jcResult = $db->query('SELECT job_title, job_slug, COUNT(*) as cnt FROM applications GROUP BY job_slug ORDER BY cnt DESC');
    while ($jc = $jcResult->fetchArray(SQLITE3_ASSOC)) {
        $jobCounts[] = $jc;
    }

    $db->close();
} catch (Exception $e) {
    $rows = [];
    $total = $today = $thisWeek = $emailed = 0;
    $jobCounts = [];
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job Applications | Cloud Resources Admin</title>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * { margin:0; padding:0; box-sizing:border-box; }
        body { font-family:'DM Sans',sans-serif; background:#f4f6fb; color:#0f172a; }
        .header { background:#fff; border-bottom:1px solid #e2e8f0; padding:20px 32px; display:flex; justify-content:space-between; align-items:center; position:sticky; top:0; z-index:10; }
        .header h1 { font-size:20px; font-weight:700; }
        .header-actions { display:flex; gap:12px; align-items:center; }
        .btn { padding:8px 16px; border-radius:10px; font-size:13px; font-weight:600; text-decoration:none; border:none; cursor:pointer; transition:all .15s; }
        .btn-primary { background:#0052ff; color:#fff; }
        .btn-primary:hover { background:#003dd6; }
        .btn-outline { border:1px solid #e2e8f0; background:#fff; color:#475569; }
        .btn-outline:hover { border-color:#0052ff; color:#0052ff; }
        .container { max-width:1400px; margin:0 auto; padding:24px 32px; }
        .stats { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; margin-bottom:24px; }
        .stat { background:#fff; border-radius:14px; padding:20px 24px; box-shadow:0 1px 3px rgba(0,0,0,.04); }
        .stat .value { font-size:32px; font-weight:700; color:#0052ff; }
        .stat .label { font-size:13px; color:#64748b; margin-top:4px; }
        .filters { display:flex; gap:8px; flex-wrap:wrap; margin-bottom:20px; }
        .filter-chip { padding:6px 14px; border-radius:20px; font-size:12px; font-weight:600; text-decoration:none; border:1px solid #e2e8f0; background:#fff; color:#475569; transition:all .15s; }
        .filter-chip:hover, .filter-chip.active { background:#0052ff; color:#fff; border-color:#0052ff; }
        .filter-chip .count { background:rgba(255,255,255,.2); padding:1px 6px; border-radius:10px; margin-left:4px; font-size:11px; }
        .filter-chip.active .count { background:rgba(255,255,255,.3); }
        table { width:100%; border-collapse:collapse; background:#fff; border-radius:14px; overflow:hidden; box-shadow:0 1px 3px rgba(0,0,0,.04); }
        th { background:#f8fafc; padding:14px 16px; text-align:left; font-size:12px; font-weight:600; color:#64748b; text-transform:uppercase; letter-spacing:.05em; border-bottom:1px solid #e2e8f0; }
        td { padding:14px 16px; font-size:13px; color:#334155; border-bottom:1px solid #f1f5f9; vertical-align:top; }
        tr:hover td { background:#f8fafc; }
        .badge { display:inline-block; padding:3px 10px; border-radius:20px; font-size:11px; font-weight:600; }
        .badge-green { background:#dcfce7; color:#16a34a; }
        .badge-red { background:#fee2e2; color:#dc2626; }
        .badge-blue { background:#dbeafe; color:#2563eb; }
        .candidate-name { font-weight:600; color:#0f172a; }
        .candidate-meta { font-size:12px; color:#94a3b8; margin-top:2px; }
        .resume-link { color:#0052ff; text-decoration:none; font-weight:500; font-size:12px; }
        .resume-link:hover { text-decoration:underline; }
        .empty { text-align:center; padding:60px 20px; color:#94a3b8; }
        .empty h3 { font-size:18px; margin-bottom:8px; color:#64748b; }
        @media (max-width:768px) {
            .stats { grid-template-columns:repeat(2,1fr); }
            .container { padding:16px; }
            table { display:block; overflow-x:auto; }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Job Applications</h1>
        <div class="header-actions">
            <a href="applications.php?export=csv" class="btn btn-outline">Export CSV</a>
            <a href="admin.php" class="btn btn-outline">Contact Submissions</a>
            <a href="applications.php?logout=1" class="btn btn-outline">Logout</a>
        </div>
    </div>

    <div class="container">
        <div class="stats">
            <div class="stat"><div class="value"><?php echo $total; ?></div><div class="label">Total Applications</div></div>
            <div class="stat"><div class="value"><?php echo $today; ?></div><div class="label">Today</div></div>
            <div class="stat"><div class="value"><?php echo $thisWeek; ?></div><div class="label">This Week</div></div>
            <div class="stat"><div class="value"><?php echo $emailed; ?></div><div class="label">Emails Delivered</div></div>
        </div>

        <?php if (!empty($jobCounts)): ?>
        <div class="filters">
            <a href="applications.php" class="filter-chip <?php echo empty($filterJob) ? 'active' : ''; ?>">All</a>
            <?php foreach ($jobCounts as $jc): ?>
            <a href="applications.php?job=<?php echo urlencode($jc['job_slug']); ?>" class="filter-chip <?php echo $filterJob === $jc['job_slug'] ? 'active' : ''; ?>">
                <?php echo htmlspecialchars($jc['job_title']); ?>
                <span class="count"><?php echo $jc['cnt']; ?></span>
            </a>
            <?php endforeach; ?>
        </div>
        <?php endif; ?>

        <?php if (empty($rows)): ?>
        <div class="empty">
            <h3>No Applications Yet</h3>
            <p>Applications will appear here when candidates apply through the careers page.</p>
        </div>
        <?php else: ?>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Candidate</th>
                    <th>Position</th>
                    <th>Contact</th>
                    <th>Resume</th>
                    <th>Email</th>
                    <th>Applied</th>
                </tr>
            </thead>
            <tbody>
            <?php foreach ($rows as $r): ?>
                <tr>
                    <td><?php echo $r['id']; ?></td>
                    <td>
                        <div class="candidate-name"><?php echo htmlspecialchars($r['first_name'] . ' ' . $r['last_name']); ?></div>
                        <?php if (!empty($r['linkedin'])): ?>
                        <div class="candidate-meta"><a href="<?php echo htmlspecialchars($r['linkedin']); ?>" target="_blank" style="color:#0052ff;text-decoration:none;">LinkedIn ↗</a></div>
                        <?php endif; ?>
                    </td>
                    <td>
                        <span class="badge badge-blue"><?php echo htmlspecialchars($r['job_title']); ?></span>
                        <div class="candidate-meta" style="margin-top:4px;"><?php echo htmlspecialchars($r['department']); ?></div>
                    </td>
                    <td>
                        <div><?php echo htmlspecialchars($r['email']); ?></div>
                        <?php if (!empty($r['phone'])): ?>
                        <div class="candidate-meta"><?php echo htmlspecialchars($r['phone']); ?></div>
                        <?php endif; ?>
                    </td>
                    <td>
                        <?php if (!empty($r['resume_name'])): ?>
                        <a href="applications.php?download=<?php echo $r['id']; ?>" class="resume-link">
                            📄 <?php echo htmlspecialchars($r['resume_name']); ?>
                        </a>
                        <div class="candidate-meta"><?php echo round(($r['resume_size'] ?? 0) / 1024); ?> KB</div>
                        <?php else: ?>
                        <span style="color:#94a3b8">—</span>
                        <?php endif; ?>
                    </td>
                    <td>
                        <?php if ($r['email_sent']): ?>
                            <span class="badge badge-green">Sent</span>
                        <?php else: ?>
                            <span class="badge badge-red">Failed</span>
                        <?php endif; ?>
                    </td>
                    <td>
                        <div><?php echo date('M j, Y', strtotime($r['created_at'])); ?></div>
                        <div class="candidate-meta"><?php echo date('g:i A', strtotime($r['created_at'])); ?></div>
                    </td>
                </tr>
            <?php endforeach; ?>
            </tbody>
        </table>
        <?php endif; ?>
    </div>
</body>
</html>
