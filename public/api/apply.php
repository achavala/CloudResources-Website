<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://cloudresources.net');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

$firstName   = trim($_POST['firstName'] ?? '');
$lastName    = trim($_POST['lastName'] ?? '');
$email       = trim($_POST['email'] ?? '');
$phone       = trim($_POST['phone'] ?? '');
$linkedin    = trim($_POST['linkedin'] ?? '');
$coverLetter = trim($_POST['coverLetter'] ?? '');
$jobTitle    = trim($_POST['jobTitle'] ?? '');
$jobSlug     = trim($_POST['jobSlug'] ?? '');
$department  = trim($_POST['department'] ?? '');

if (empty($firstName) || empty($lastName) || empty($email)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'First name, last name, and email are required']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid email address']);
    exit;
}

$homeDir    = '/home/okrxvcpeqc7k';
$dataDir    = $homeDir . '/cr_data';
$resumeDir  = $dataDir . '/resumes';
$dbFile     = $dataDir . '/contacts.db';

if (!is_dir($dataDir)) {
    mkdir($dataDir, 0750, true);
    file_put_contents($dataDir . '/.htaccess', "Deny from all\n");
}

if (!is_dir($resumeDir)) {
    mkdir($resumeDir, 0750, true);
}

// --- HANDLE RESUME UPLOAD ---
$resumePath  = '';
$resumeName  = '';
$resumeMime  = '';
$resumeSize  = 0;

if (isset($_FILES['resume']) && $_FILES['resume']['error'] === UPLOAD_ERR_OK) {
    $allowed = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    $finfo = new finfo(FILEINFO_MIME_TYPE);
    $mime  = $finfo->file($_FILES['resume']['tmp_name']);

    if (!in_array($mime, $allowed)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Only PDF, DOC, and DOCX files are allowed']);
        exit;
    }

    if ($_FILES['resume']['size'] > 10 * 1024 * 1024) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'File size must be under 10MB']);
        exit;
    }

    $ext = pathinfo($_FILES['resume']['name'], PATHINFO_EXTENSION);
    $safeSlug = preg_replace('/[^a-z0-9\-]/', '', strtolower($jobSlug ?: 'general'));
    $safeName = preg_replace('/[^a-z0-9]/', '', strtolower($firstName . $lastName));
    $uniqueFile = $safeName . '_' . $safeSlug . '_' . date('Ymd_His') . '_' . bin2hex(random_bytes(4)) . '.' . $ext;
    $destPath = $resumeDir . '/' . $uniqueFile;

    if (!move_uploaded_file($_FILES['resume']['tmp_name'], $destPath)) {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => 'Failed to save resume. Please try again.']);
        exit;
    }

    $resumePath = $destPath;
    $resumeName = $_FILES['resume']['name'];
    $resumeMime = $mime;
    $resumeSize = $_FILES['resume']['size'];
} else {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Resume is required']);
    exit;
}

// --- DATABASE ---
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

    $stmt = $db->prepare('INSERT INTO applications (job_title, job_slug, department, first_name, last_name, email, phone, linkedin, cover_letter, resume_path, resume_name, resume_mime, resume_size, ip_address, user_agent) VALUES (:jt, :js, :dp, :fn, :ln, :em, :ph, :li, :cl, :rp, :rn, :rm, :rs, :ip, :ua)');
    $stmt->bindValue(':jt', $jobTitle, SQLITE3_TEXT);
    $stmt->bindValue(':js', $jobSlug, SQLITE3_TEXT);
    $stmt->bindValue(':dp', $department, SQLITE3_TEXT);
    $stmt->bindValue(':fn', $firstName, SQLITE3_TEXT);
    $stmt->bindValue(':ln', $lastName, SQLITE3_TEXT);
    $stmt->bindValue(':em', $email, SQLITE3_TEXT);
    $stmt->bindValue(':ph', $phone, SQLITE3_TEXT);
    $stmt->bindValue(':li', $linkedin, SQLITE3_TEXT);
    $stmt->bindValue(':cl', $coverLetter, SQLITE3_TEXT);
    $stmt->bindValue(':rp', $resumePath, SQLITE3_TEXT);
    $stmt->bindValue(':rn', $resumeName, SQLITE3_TEXT);
    $stmt->bindValue(':rm', $resumeMime, SQLITE3_TEXT);
    $stmt->bindValue(':rs', $resumeSize, SQLITE3_INTEGER);
    $stmt->bindValue(':ip', $_SERVER['REMOTE_ADDR'] ?? '', SQLITE3_TEXT);
    $stmt->bindValue(':ua', $_SERVER['HTTP_USER_AGENT'] ?? '', SQLITE3_TEXT);
    $stmt->execute();
    $recordId = $db->lastInsertRowID();
    $dbSaved = true;
} catch (Exception $e) {
    $dbSaved = false;
    $recordId = 0;
    error_log('CloudResources Apply DB Error: ' . $e->getMessage());
}

// --- EMAIL WITH RESUME ATTACHMENT ---
$emailSent = false;
$toEmail   = 'info@cloudresources.net';
$subject   = "Job Application: {$jobTitle} — {$firstName} {$lastName}";
$timestamp = date('F j, Y \a\t g:i A T');

$boundary = md5(uniqid(time()));

$textBody = <<<EOT
═══════════════════════════════════════
  NEW JOB APPLICATION
  Cloud Resources Careers
═══════════════════════════════════════

Submitted: {$timestamp}

POSITION
───────────────────────────────────────
Title:       {$jobTitle}
Department:  {$department}

CANDIDATE DETAILS
───────────────────────────────────────
Name:        {$firstName} {$lastName}
Email:       {$email}
Phone:       {$phone}
LinkedIn:    {$linkedin}

COVER LETTER / MESSAGE
───────────────────────────────────────
{$coverLetter}

RESUME
───────────────────────────────────────
Filename:    {$resumeName}
Size:        {$resumeSize} bytes

───────────────────────────────────────
Application ID: #{$recordId}
IP Address: {$_SERVER['REMOTE_ADDR']}
═══════════════════════════════════════
EOT;

$headers  = "From: Cloud Resources Careers <noreply@cloudresources.net>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n";
$headers .= "X-Mailer: CloudResources-Careers/1.0\r\n";

$emailBody  = "--{$boundary}\r\n";
$emailBody .= "Content-Type: text/plain; charset=UTF-8\r\n";
$emailBody .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
$emailBody .= $textBody . "\r\n\r\n";

if (!empty($resumePath) && file_exists($resumePath)) {
    $fileContent = file_get_contents($resumePath);
    $fileEncoded = chunk_split(base64_encode($fileContent));

    $emailBody .= "--{$boundary}\r\n";
    $emailBody .= "Content-Type: {$resumeMime}; name=\"{$resumeName}\"\r\n";
    $emailBody .= "Content-Disposition: attachment; filename=\"{$resumeName}\"\r\n";
    $emailBody .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $emailBody .= $fileEncoded . "\r\n";
}

$emailBody .= "--{$boundary}--\r\n";

try {
    $emailSent = mail($toEmail, $subject, $emailBody, $headers);
} catch (Exception $e) {
    error_log('CloudResources Apply Email Error: ' . $e->getMessage());
}

// --- UPDATE DB ---
if ($dbSaved && $recordId > 0) {
    try {
        $update = $db->prepare('UPDATE applications SET email_sent = :es WHERE id = :id');
        $update->bindValue(':es', $emailSent ? 1 : 0, SQLITE3_INTEGER);
        $update->bindValue(':id', $recordId, SQLITE3_INTEGER);
        $update->execute();
    } catch (Exception $e) {
        error_log('CloudResources Apply DB Update Error: ' . $e->getMessage());
    }
    $db->close();
}

echo json_encode([
    'success'   => true,
    'id'        => $recordId,
    'emailSent' => $emailSent,
    'message'   => 'Your application has been submitted successfully.',
]);
