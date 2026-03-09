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
            <p>Enter the admin password to view contact submissions.</p>
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
$stats = ['total' => 0, 'today' => 0, 'week' => 0, 'emails' => 0];

if (file_exists($dbFile)) {
    try {
        $db = new SQLite3($dbFile);

        // Export CSV
        if (isset($_GET['export'])) {
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

        $stats['total']  = $db->querySingle("SELECT COUNT(*) FROM submissions");
        $stats['today']  = $db->querySingle("SELECT COUNT(*) FROM submissions WHERE date(created_at) = date('now')");
        $stats['week']   = $db->querySingle("SELECT COUNT(*) FROM submissions WHERE created_at >= datetime('now', '-7 days')");
        $stats['emails'] = $db->querySingle("SELECT COUNT(*) FROM submissions WHERE email_sent = 1");

        $r = $db->query('SELECT * FROM submissions ORDER BY id DESC LIMIT 100');
        while ($row = $r->fetchArray(SQLITE3_ASSOC)) {
            $submissions[] = $row;
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
    <title>Contact Submissions | Cloud Resources Admin</title>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * { margin:0; padding:0; box-sizing:border-box; }
        body { font-family:'DM Sans',sans-serif; background:#f4f6fb; color:#0f172a; }
        .nav { background:#0a1628; padding:16px 32px; display:flex; align-items:center; justify-content:space-between; }
        .nav h1 { color:#fff; font-size:18px; }
        .nav a { color:#94a3b8; font-size:13px; text-decoration:none; }
        .nav a:hover { color:#fff; }
        .container { max-width:1200px; margin:0 auto; padding:24px; }
        .stats { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; margin-bottom:24px; }
        .stat { background:#fff; border-radius:12px; padding:20px; box-shadow:0 1px 4px rgba(0,0,0,.06); }
        .stat .num { font-size:32px; font-weight:700; color:#0052ff; }
        .stat .lbl { font-size:13px; color:#64748b; margin-top:4px; }
        .toolbar { display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; }
        .toolbar h2 { font-size:20px; font-weight:700; }
        .btn { display:inline-flex; align-items:center; gap:6px; padding:10px 20px; background:#0052ff; color:#fff; border:none; border-radius:10px; font-size:13px; font-weight:600; cursor:pointer; text-decoration:none; }
        .btn:hover { background:#003dd6; }
        .btn-outline { background:transparent; border:1px solid #e2e8f0; color:#0f172a; }
        .btn-outline:hover { border-color:#0052ff; color:#0052ff; background:#f8faff; }
        table { width:100%; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 1px 4px rgba(0,0,0,.06); border-collapse:collapse; }
        th { background:#f8fafc; text-align:left; padding:12px 16px; font-size:12px; font-weight:600; color:#64748b; text-transform:uppercase; letter-spacing:.5px; border-bottom:1px solid #e2e8f0; }
        td { padding:14px 16px; font-size:13px; color:#334155; border-bottom:1px solid #f1f5f9; vertical-align:top; }
        tr:hover td { background:#f8faff; }
        .badge { display:inline-block; padding:3px 10px; border-radius:99px; font-size:11px; font-weight:600; }
        .badge-green { background:#dcfce7; color:#16a34a; }
        .badge-red { background:#fef2f2; color:#ef4444; }
        .badge-blue { background:#eff6ff; color:#2563eb; }
        .msg { max-width:200px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .empty { text-align:center; padding:60px 20px; color:#94a3b8; }
        @media(max-width:768px) { .stats { grid-template-columns:repeat(2,1fr); } }
    </style>
</head>
<body>
    <div class="nav">
        <h1>Cloud Resources — Lead Management</h1>
        <div style="display:flex;gap:16px;align-items:center;">
            <a href="admin.php?export=1">Export CSV</a>
            <a href="admin.php?logout=1">Logout</a>
        </div>
    </div>
    <div class="container">
        <div class="stats">
            <div class="stat"><div class="num"><?= $stats['total'] ?></div><div class="lbl">Total Submissions</div></div>
            <div class="stat"><div class="num"><?= $stats['today'] ?></div><div class="lbl">Today</div></div>
            <div class="stat"><div class="num"><?= $stats['week'] ?></div><div class="lbl">This Week</div></div>
            <div class="stat"><div class="num"><?= $stats['emails'] ?></div><div class="lbl">Emails Delivered</div></div>
        </div>

        <div class="toolbar">
            <h2>Recent Submissions</h2>
            <a href="admin.php?export=1" class="btn">Export CSV</a>
        </div>

        <?php if (empty($submissions)): ?>
            <div class="empty">No submissions yet. They will appear here when someone fills the contact form.</div>
        <?php else: ?>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Company</th>
                    <th>Service</th>
                    <th>Message</th>
                    <th>Email</th>
                    <th>SMS</th>
                    <th>Date</th>
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
</body>
</html>
