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

if (isset($_POST['password']) && !isset($_POST['action'])) {
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
$jobs = [];
$stats = ['total' => 0, 'today' => 0, 'week' => 0, 'emails' => 0];
$appStats = ['total' => 0, 'today' => 0, 'week' => 0, 'emails' => 0];
$jobStats = ['total' => 0, 'active' => 0, 'inactive' => 0, 'applicants' => 0];
$jobMsg = '';
$editJob = null;

$tab = $_GET['tab'] ?? 'leads';

try {
    $db = new SQLite3($dbFile);

    // Ensure tables exist
    $db->exec('CREATE TABLE IF NOT EXISTS applications (
        id INTEGER PRIMARY KEY AUTOINCREMENT, job_title TEXT NOT NULL, job_slug TEXT, department TEXT,
        first_name TEXT NOT NULL, last_name TEXT NOT NULL, email TEXT NOT NULL, phone TEXT, linkedin TEXT,
        cover_letter TEXT, resume_path TEXT, resume_name TEXT, resume_mime TEXT, resume_size INTEGER,
        ip_address TEXT, user_agent TEXT, email_sent INTEGER DEFAULT 0, created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )');

    $db->exec('CREATE TABLE IF NOT EXISTS jobs (
        id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, slug TEXT NOT NULL UNIQUE,
        department TEXT NOT NULL, location TEXT NOT NULL, type TEXT NOT NULL DEFAULT "Full-time",
        description TEXT NOT NULL, skills TEXT, icon TEXT DEFAULT "Briefcase",
        is_active INTEGER DEFAULT 1, sort_order INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP, updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )');

    // Seed defaults if empty
    $jcount = $db->querySingle('SELECT COUNT(*) FROM jobs');
    if ($jcount == 0) {
        $defaults = [
            ['Senior AI/ML Engineer','senior-ai-ml-engineer','AI Engineering','Irving, TX / Remote','Full-time','Build production AI platforms with GPT-4o, LangChain, and tool-backed LLM architectures. Work on conversational AI systems processing 50+ tools with zero-hallucination guarantees.','Python,GPT-4o/LLMs,LangChain,FastAPI,PostgreSQL,Docker','Brain'],
            ['ML Operations Engineer','ml-operations-engineer','ML Engineering','Irving, TX / Remote','Full-time','Deploy and maintain production ML pipelines — anomaly detection, capacity forecasting, and risk scoring models. Build automated retraining pipelines and model monitoring.','scikit-learn,XGBoost,PyTorch,MLflow,Kubernetes,Python','Sparkles'],
            ['Full-Stack Engineer (Next.js)','full-stack-engineer-nextjs','Product Engineering','Irving, TX / Hyderabad / Remote','Full-time','Build enterprise dashboards and AI-powered interfaces with Next.js 14, TypeScript, and Tailwind CSS. Work on real-time visualization, chat interfaces, and topology rendering.','Next.js,TypeScript,React,Tailwind CSS,Zustand,REST APIs','Code2'],
            ['Data Engineer','data-engineer','Data Engineering','Irving, TX / Remote','Full-time','Build polyglot data architectures with TimescaleDB, Neo4j, OpenSearch, and vector stores. Design real-time pipelines and automated data quality systems.','PostgreSQL,TimescaleDB,dbt,Python,Apache Airflow,SQL','Database'],
            ['Cloud/DevOps Architect','cloud-devops-architect','Cloud Engineering','Irving, TX / Remote','Full-time','Design and deploy cloud-native architectures on AWS EKS. Build infrastructure-as-code with Terraform, manage Kubernetes clusters, and implement CI/CD pipelines.','AWS,Terraform,Kubernetes,Docker,ArgoCD,Prometheus','Cloud'],
            ['AI Solutions Architect','ai-solutions-architect','Solutions','Irving, TX / Remote','Full-time','Work with enterprise clients to design AI/ML solutions. Translate business challenges into technical architectures spanning AI agents, ML pipelines, and data platforms.','Enterprise Architecture,AI/ML,Client Engagement,Python,Cloud,Presales','Rocket'],
        ];
        $ins = $db->prepare('INSERT INTO jobs (title,slug,department,location,type,description,skills,icon,sort_order) VALUES (?,?,?,?,?,?,?,?,?)');
        foreach ($defaults as $i => $d) {
            $ins->bindValue(1, $d[0]); $ins->bindValue(2, $d[1]); $ins->bindValue(3, $d[2]);
            $ins->bindValue(4, $d[3]); $ins->bindValue(5, $d[4]); $ins->bindValue(6, $d[5]);
            $ins->bindValue(7, $d[6]); $ins->bindValue(8, $d[7]); $ins->bindValue(9, $i);
            $ins->execute(); $ins->reset();
        }
    }

    // --- HANDLE JOB ACTIONS ---
    if (isset($_POST['action']) && !empty($_SESSION['admin_auth'])) {
        $action = $_POST['action'];

        if ($action === 'save_job') {
            $jid        = (int)($_POST['job_id'] ?? 0);
            $jtitle     = trim($_POST['job_title'] ?? '');
            $jslug      = trim($_POST['job_slug'] ?? '');
            $jdept      = trim($_POST['job_department'] ?? '');
            $jloc       = trim($_POST['job_location'] ?? '');
            $jtype      = trim($_POST['job_type'] ?? 'Full-time');
            $jdesc      = trim($_POST['job_description'] ?? '');
            $jskills    = trim($_POST['job_skills'] ?? '');
            $jicon      = trim($_POST['job_icon'] ?? 'Briefcase');
            $jactive    = isset($_POST['job_active']) ? 1 : 0;
            $jsort      = (int)($_POST['job_sort_order'] ?? 0);

            if (empty($jslug) && !empty($jtitle)) {
                $jslug = preg_replace('/[^a-z0-9]+/', '-', strtolower($jtitle));
                $jslug = trim($jslug, '-');
            }

            if (!empty($jtitle) && !empty($jdept) && !empty($jloc) && !empty($jdesc)) {
                if ($jid > 0) {
                    $stmt = $db->prepare('UPDATE jobs SET title=:t, slug=:s, department=:d, location=:l, type=:tp, description=:desc, skills=:sk, icon=:ic, is_active=:a, sort_order=:so, updated_at=CURRENT_TIMESTAMP WHERE id=:id');
                    $stmt->bindValue(':id', $jid, SQLITE3_INTEGER);
                } else {
                    $stmt = $db->prepare('INSERT INTO jobs (title,slug,department,location,type,description,skills,icon,is_active,sort_order) VALUES (:t,:s,:d,:l,:tp,:desc,:sk,:ic,:a,:so)');
                }
                $stmt->bindValue(':t', $jtitle, SQLITE3_TEXT);
                $stmt->bindValue(':s', $jslug, SQLITE3_TEXT);
                $stmt->bindValue(':d', $jdept, SQLITE3_TEXT);
                $stmt->bindValue(':l', $jloc, SQLITE3_TEXT);
                $stmt->bindValue(':tp', $jtype, SQLITE3_TEXT);
                $stmt->bindValue(':desc', $jdesc, SQLITE3_TEXT);
                $stmt->bindValue(':sk', $jskills, SQLITE3_TEXT);
                $stmt->bindValue(':ic', $jicon, SQLITE3_TEXT);
                $stmt->bindValue(':a', $jactive, SQLITE3_INTEGER);
                $stmt->bindValue(':so', $jsort, SQLITE3_INTEGER);
                $stmt->execute();
                $jobMsg = $jid > 0 ? 'Job updated successfully.' : 'Job posted successfully.';
                $tab = 'jobs';
            }
        }

        if ($action === 'toggle_job' && isset($_POST['job_id'])) {
            $jid = (int)$_POST['job_id'];
            $db->exec("UPDATE jobs SET is_active = CASE WHEN is_active=1 THEN 0 ELSE 1 END, updated_at=CURRENT_TIMESTAMP WHERE id={$jid}");
            $jobMsg = 'Job status updated.';
            $tab = 'jobs';
        }

        if ($action === 'delete_job' && isset($_POST['job_id'])) {
            $jid = (int)$_POST['job_id'];
            $db->exec("DELETE FROM jobs WHERE id={$jid}");
            $jobMsg = 'Job deleted.';
            $tab = 'jobs';
        }
    }

    if (isset($_GET['edit_job']) && is_numeric($_GET['edit_job'])) {
        $estmt = $db->prepare('SELECT * FROM jobs WHERE id=:id');
        $estmt->bindValue(':id', (int)$_GET['edit_job'], SQLITE3_INTEGER);
        $editJob = $estmt->execute()->fetchArray(SQLITE3_ASSOC);
        $tab = 'jobs';
    }

    // --- EXPORTS ---
    if (isset($_GET['export'])) {
        if ($_GET['export'] === 'applications') {
            header('Content-Type: text/csv');
            header('Content-Disposition: attachment; filename="cloudresources_applications_' . date('Y-m-d') . '.csv"');
            $out = fopen('php://output', 'w');
            fputcsv($out, ['ID','Job Title','Department','First Name','Last Name','Email','Phone','LinkedIn','Cover Letter','Resume','Email Sent','Applied At']);
            $r = $db->query('SELECT * FROM applications ORDER BY id DESC');
            while ($row = $r->fetchArray(SQLITE3_ASSOC)) {
                fputcsv($out, [$row['id'],$row['job_title'],$row['department'],$row['first_name'],$row['last_name'],$row['email'],$row['phone'],$row['linkedin'],$row['cover_letter'],$row['resume_name'],$row['email_sent']?'Yes':'No',$row['created_at']]);
            }
            fclose($out); $db->close(); exit;
        } else {
            header('Content-Type: text/csv');
            header('Content-Disposition: attachment; filename="cloudresources_leads_' . date('Y-m-d') . '.csv"');
            $out = fopen('php://output', 'w');
            fputcsv($out, ['ID','First Name','Last Name','Email','Company','Service','Message','Email Sent','SMS Sent','Submitted At']);
            $r = $db->query('SELECT * FROM submissions ORDER BY id DESC');
            while ($row = $r->fetchArray(SQLITE3_ASSOC)) {
                fputcsv($out, [$row['id'],$row['first_name'],$row['last_name'],$row['email'],$row['company'],$row['service_label'],$row['message'],$row['email_sent']?'Yes':'No',$row['sms_sent']?'Yes':'No',$row['created_at']]);
            }
            fclose($out); $db->close(); exit;
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
            $db->close(); exit;
        }
    }

    // Stats
    $stats['total']  = $db->querySingle("SELECT COUNT(*) FROM submissions") ?: 0;
    $stats['today']  = $db->querySingle("SELECT COUNT(*) FROM submissions WHERE date(created_at) = date('now')") ?: 0;
    $stats['week']   = $db->querySingle("SELECT COUNT(*) FROM submissions WHERE created_at >= datetime('now', '-7 days')") ?: 0;
    $stats['emails'] = $db->querySingle("SELECT COUNT(*) FROM submissions WHERE email_sent = 1") ?: 0;

    $appStats['total']  = $db->querySingle("SELECT COUNT(*) FROM applications") ?: 0;
    $appStats['today']  = $db->querySingle("SELECT COUNT(*) FROM applications WHERE date(created_at) = date('now')") ?: 0;
    $appStats['week']   = $db->querySingle("SELECT COUNT(*) FROM applications WHERE created_at >= datetime('now', '-7 days')") ?: 0;
    $appStats['emails'] = $db->querySingle("SELECT COUNT(*) FROM applications WHERE email_sent = 1") ?: 0;

    $jobStats['total']    = $db->querySingle("SELECT COUNT(*) FROM jobs") ?: 0;
    $jobStats['active']   = $db->querySingle("SELECT COUNT(*) FROM jobs WHERE is_active=1") ?: 0;
    $jobStats['inactive'] = $db->querySingle("SELECT COUNT(*) FROM jobs WHERE is_active=0") ?: 0;
    $jobStats['applicants'] = $appStats['total'];

    $r = $db->query('SELECT * FROM submissions ORDER BY id DESC LIMIT 100');
    while ($row = $r->fetchArray(SQLITE3_ASSOC)) { $submissions[] = $row; }

    $r = $db->query('SELECT * FROM applications ORDER BY id DESC LIMIT 100');
    while ($row = $r->fetchArray(SQLITE3_ASSOC)) { $applications[] = $row; }

    $r = $db->query('SELECT j.*, (SELECT COUNT(*) FROM applications a WHERE a.job_slug = j.slug) as app_count FROM jobs j ORDER BY j.sort_order ASC, j.id ASC');
    while ($row = $r->fetchArray(SQLITE3_ASSOC)) { $jobs[] = $row; }

    $db->close();
} catch (Exception $e) {
    $dbError = $e->getMessage();
}

$iconOptions = ['Brain','Sparkles','Code2','Database','Cloud','Rocket','Briefcase','Globe','Heart','GraduationCap','Shield','Cpu','Zap','BarChart3','Users','Layers'];
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
        .toolbar-actions { display:flex; gap:8px; }
        .btn { display:inline-flex; align-items:center; gap:6px; padding:10px 20px; background:#0052ff; color:#fff; border:none; border-radius:10px; font-size:13px; font-weight:600; cursor:pointer; text-decoration:none; transition:all .15s; }
        .btn:hover { background:#003dd6; }
        .btn-sm { padding:6px 14px; font-size:12px; border-radius:8px; }
        .btn-green { background:#16a34a; }
        .btn-green:hover { background:#15803d; }
        .btn-red { background:#ef4444; }
        .btn-red:hover { background:#dc2626; }
        .btn-outline { background:transparent; border:1px solid #e2e8f0; color:#64748b; }
        .btn-outline:hover { border-color:#0052ff; color:#0052ff; }
        .btn-amber { background:#f59e0b; }
        .btn-amber:hover { background:#d97706; }
        table { width:100%; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 1px 4px rgba(0,0,0,.06); border-collapse:collapse; }
        th { background:#f8fafc; text-align:left; padding:12px 16px; font-size:12px; font-weight:600; color:#64748b; text-transform:uppercase; letter-spacing:.5px; border-bottom:1px solid #e2e8f0; }
        td { padding:14px 16px; font-size:13px; color:#334155; border-bottom:1px solid #f1f5f9; vertical-align:top; }
        tr:hover td { background:#f8faff; }
        .badge { display:inline-block; padding:3px 10px; border-radius:99px; font-size:11px; font-weight:600; }
        .badge-green { background:#dcfce7; color:#16a34a; }
        .badge-red { background:#fef2f2; color:#ef4444; }
        .badge-blue { background:#eff6ff; color:#2563eb; }
        .badge-purple { background:#f3e8ff; color:#7c3aed; }
        .badge-gray { background:#f1f5f9; color:#94a3b8; }
        .msg { max-width:200px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .empty { text-align:center; padding:60px 20px; color:#94a3b8; }
        .resume-link { color:#0052ff; text-decoration:none; font-weight:500; }
        .resume-link:hover { text-decoration:underline; }
        .section { display:none; }
        .section.active { display:block; }
        .alert { padding:12px 20px; border-radius:10px; font-size:13px; font-weight:500; margin-bottom:16px; }
        .alert-success { background:#dcfce7; color:#16a34a; }
        .form-card { background:#fff; border-radius:14px; padding:28px; box-shadow:0 1px 4px rgba(0,0,0,.06); margin-bottom:24px; }
        .form-card h3 { font-size:18px; font-weight:700; margin-bottom:20px; }
        .form-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
        .form-group { margin-bottom:16px; }
        .form-group.full { grid-column:1/-1; }
        .form-group label { display:block; font-size:13px; font-weight:600; color:#475569; margin-bottom:6px; }
        .form-group input, .form-group select, .form-group textarea { width:100%; padding:10px 14px; border:1px solid #e2e8f0; border-radius:10px; font-size:13px; font-family:inherit; outline:none; background:#fff; }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color:#0052ff; box-shadow:0 0 0 3px rgba(0,82,255,.08); }
        .form-group textarea { resize:vertical; min-height:80px; }
        .form-actions { display:flex; gap:8px; justify-content:flex-end; margin-top:8px; }
        .check-label { display:flex; align-items:center; gap:8px; font-size:13px; cursor:pointer; }
        .check-label input[type="checkbox"] { width:18px; height:18px; accent-color:#0052ff; }
        .skills-hint { font-size:11px; color:#94a3b8; margin-top:4px; }
        .job-desc-cell { max-width:280px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .action-forms { display:inline-flex; gap:4px; }
        .action-forms form { display:inline; }
        @media(max-width:768px) { .stats { grid-template-columns:repeat(2,1fr); } .container { padding:16px; } table { display:block; overflow-x:auto; } .form-grid { grid-template-columns:1fr; } }
    </style>
</head>
<body>
    <div class="nav">
        <h1>Cloud Resources — Admin Dashboard</h1>
        <div class="nav-right">
            <a href="linkedin.php" style="color:#60a5fa;">LinkedIn Content</a>
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
            <a href="#" class="tab <?= $tab === 'jobs' ? 'active' : '' ?>" onclick="switchTab('jobs'); return false;">
                Manage Jobs <span class="count"><?= $jobStats['active'] ?></span>
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
                <thead><tr><th>#</th><th>Name</th><th>Email</th><th>Company</th><th>Service</th><th>Message</th><th>Email</th><th>SMS</th><th>Date</th></tr></thead>
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
                <div class="empty">No job applications yet.</div>
            <?php else: ?>
            <table>
                <thead><tr><th>#</th><th>Candidate</th><th>Position</th><th>Contact</th><th>Resume</th><th>Cover Letter</th><th>Email</th><th>Applied</th></tr></thead>
                <tbody>
                <?php foreach ($applications as $a): ?>
                    <tr>
                        <td><?= $a['id'] ?></td>
                        <td>
                            <strong><?= htmlspecialchars($a['first_name'] . ' ' . $a['last_name']) ?></strong>
                            <?php if (!empty($a['linkedin'])): ?><br><a href="<?= htmlspecialchars($a['linkedin']) ?>" target="_blank" style="color:#0052ff;font-size:12px;">LinkedIn &nearr;</a><?php endif; ?>
                        </td>
                        <td>
                            <span class="badge badge-purple"><?= htmlspecialchars($a['job_title']) ?></span>
                            <div style="font-size:12px;color:#94a3b8;margin-top:4px;"><?= htmlspecialchars($a['department']) ?></div>
                        </td>
                        <td>
                            <a href="mailto:<?= htmlspecialchars($a['email']) ?>" style="color:#0052ff;"><?= htmlspecialchars($a['email']) ?></a>
                            <?php if (!empty($a['phone'])): ?><div style="font-size:12px;color:#64748b;margin-top:2px;"><?= htmlspecialchars($a['phone']) ?></div><?php endif; ?>
                        </td>
                        <td>
                            <?php if (!empty($a['resume_name'])): ?>
                            <a href="admin.php?download=<?= $a['id'] ?>" class="resume-link">&#128196; <?= htmlspecialchars($a['resume_name']) ?></a>
                            <div style="font-size:11px;color:#94a3b8;margin-top:2px;"><?= round(($a['resume_size'] ?? 0) / 1024) ?> KB</div>
                            <?php else: ?><span style="color:#94a3b8;">—</span><?php endif; ?>
                        </td>
                        <td class="msg" title="<?= htmlspecialchars($a['cover_letter'] ?? '') ?>"><?= htmlspecialchars($a['cover_letter'] ?: '—') ?></td>
                        <td><span class="badge <?= $a['email_sent'] ? 'badge-green' : 'badge-red' ?>"><?= $a['email_sent'] ? 'Sent' : 'Failed' ?></span></td>
                        <td style="white-space:nowrap;"><?= date('M j, Y', strtotime($a['created_at'])) ?><div style="font-size:11px;color:#94a3b8;"><?= date('g:i A', strtotime($a['created_at'])) ?></div></td>
                    </tr>
                <?php endforeach; ?>
                </tbody>
            </table>
            <?php endif; ?>
        </div>

        <!-- MANAGE JOBS -->
        <div id="section-jobs" class="section <?= $tab === 'jobs' ? 'active' : '' ?>">
            <?php if (!empty($jobMsg)): ?>
                <div class="alert alert-success"><?= htmlspecialchars($jobMsg) ?></div>
            <?php endif; ?>

            <div class="stats">
                <div class="stat"><div class="num"><?= $jobStats['total'] ?></div><div class="lbl">Total Jobs</div></div>
                <div class="stat"><div class="num"><?= $jobStats['active'] ?></div><div class="lbl">Active</div></div>
                <div class="stat"><div class="num"><?= $jobStats['inactive'] ?></div><div class="lbl">Inactive</div></div>
                <div class="stat"><div class="num"><?= $jobStats['applicants'] ?></div><div class="lbl">Total Applicants</div></div>
            </div>

            <!-- Job Form -->
            <div class="form-card" id="job-form-card" style="<?= ($editJob || isset($_GET['new_job'])) ? '' : 'display:none;' ?>">
                <h3><?= $editJob ? 'Edit Job Posting' : 'Post New Job' ?></h3>
                <form method="POST" action="admin.php?tab=jobs">
                    <input type="hidden" name="action" value="save_job">
                    <input type="hidden" name="job_id" value="<?= $editJob['id'] ?? 0 ?>">
                    <div class="form-grid">
                        <div class="form-group">
                            <label>Job Title *</label>
                            <input type="text" name="job_title" value="<?= htmlspecialchars($editJob['title'] ?? '') ?>" required placeholder="e.g., Senior Data Scientist">
                        </div>
                        <div class="form-group">
                            <label>URL Slug</label>
                            <input type="text" name="job_slug" value="<?= htmlspecialchars($editJob['slug'] ?? '') ?>" placeholder="auto-generated from title">
                        </div>
                        <div class="form-group">
                            <label>Department *</label>
                            <input type="text" name="job_department" value="<?= htmlspecialchars($editJob['department'] ?? '') ?>" required placeholder="e.g., Data Science">
                        </div>
                        <div class="form-group">
                            <label>Location *</label>
                            <input type="text" name="job_location" value="<?= htmlspecialchars($editJob['location'] ?? '') ?>" required placeholder="e.g., Irving, TX / Remote">
                        </div>
                        <div class="form-group">
                            <label>Job Type</label>
                            <select name="job_type">
                                <?php foreach (['Full-time','Part-time','Contract','Internship'] as $t): ?>
                                <option value="<?= $t ?>" <?= ($editJob['type'] ?? 'Full-time') === $t ? 'selected' : '' ?>><?= $t ?></option>
                                <?php endforeach; ?>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Icon</label>
                            <select name="job_icon">
                                <?php foreach ($iconOptions as $ico): ?>
                                <option value="<?= $ico ?>" <?= ($editJob['icon'] ?? 'Briefcase') === $ico ? 'selected' : '' ?>><?= $ico ?></option>
                                <?php endforeach; ?>
                            </select>
                        </div>
                        <div class="form-group full">
                            <label>Description *</label>
                            <textarea name="job_description" rows="3" required placeholder="Brief description of the role and responsibilities..."><?= htmlspecialchars($editJob['description'] ?? '') ?></textarea>
                        </div>
                        <div class="form-group full">
                            <label>Skills / Tags</label>
                            <input type="text" name="job_skills" value="<?= htmlspecialchars($editJob['skills'] ?? '') ?>" placeholder="Python, AWS, Docker, Kubernetes">
                            <div class="skills-hint">Comma-separated list of skills that will show as tags on the job card</div>
                        </div>
                        <div class="form-group">
                            <label>Sort Order</label>
                            <input type="number" name="job_sort_order" value="<?= $editJob['sort_order'] ?? 0 ?>" min="0">
                        </div>
                        <div class="form-group" style="display:flex;align-items:flex-end;">
                            <label class="check-label">
                                <input type="checkbox" name="job_active" <?= ($editJob['is_active'] ?? 1) ? 'checked' : '' ?>>
                                Active (visible on careers page)
                            </label>
                        </div>
                    </div>
                    <div class="form-actions">
                        <a href="admin.php?tab=jobs" class="btn btn-outline">Cancel</a>
                        <button type="submit" class="btn"><?= $editJob ? 'Update Job' : 'Post Job' ?></button>
                    </div>
                </form>
            </div>

            <div class="toolbar">
                <h2>Job Postings</h2>
                <div class="toolbar-actions">
                    <a href="admin.php?tab=jobs&new_job=1" class="btn btn-green">+ Post New Job</a>
                </div>
            </div>

            <?php if (empty($jobs)): ?>
                <div class="empty">No jobs posted yet.</div>
            <?php else: ?>
            <table>
                <thead><tr><th>#</th><th>Title</th><th>Department</th><th>Location</th><th>Type</th><th>Applicants</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>
                <?php foreach ($jobs as $j): ?>
                    <tr>
                        <td><?= $j['id'] ?></td>
                        <td>
                            <strong><?= htmlspecialchars($j['title']) ?></strong>
                            <div style="font-size:11px;color:#94a3b8;margin-top:2px;"><?= htmlspecialchars($j['slug']) ?></div>
                        </td>
                        <td><?= htmlspecialchars($j['department']) ?></td>
                        <td style="white-space:nowrap;"><?= htmlspecialchars($j['location']) ?></td>
                        <td><span class="badge badge-blue"><?= htmlspecialchars($j['type']) ?></span></td>
                        <td><strong><?= $j['app_count'] ?></strong></td>
                        <td>
                            <?php if ($j['is_active']): ?>
                                <span class="badge badge-green">Active</span>
                            <?php else: ?>
                                <span class="badge badge-gray">Inactive</span>
                            <?php endif; ?>
                        </td>
                        <td>
                            <div class="action-forms">
                                <a href="admin.php?tab=jobs&edit_job=<?= $j['id'] ?>" class="btn btn-sm btn-outline">Edit</a>
                                <form method="POST" action="admin.php?tab=jobs" style="display:inline;">
                                    <input type="hidden" name="action" value="toggle_job">
                                    <input type="hidden" name="job_id" value="<?= $j['id'] ?>">
                                    <button type="submit" class="btn btn-sm <?= $j['is_active'] ? 'btn-amber' : 'btn-green' ?>"><?= $j['is_active'] ? 'Deactivate' : 'Activate' ?></button>
                                </form>
                                <form method="POST" action="admin.php?tab=jobs" onsubmit="return confirm('Delete this job posting?');" style="display:inline;">
                                    <input type="hidden" name="action" value="delete_job">
                                    <input type="hidden" name="job_id" value="<?= $j['id'] ?>">
                                    <button type="submit" class="btn btn-sm btn-red">Delete</button>
                                </form>
                            </div>
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
