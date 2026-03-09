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
$dbSaved = false;
$recordId = 0;
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
    error_log('CloudResources Apply DB Error: ' . $e->getMessage());
}

// --- EMAIL NOTIFICATION ---
// Strategy: Send a plain-text notification FIRST (reliable, same as contact.php).
// Then attempt a second email with the resume attachment (best effort).
$emailSent = false;
$attachEmailSent = false;
$toEmail   = 'info@cloudresources.net';
$timestamp = date('F j, Y \a\t g:i A T');
$ipAddr    = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$sizeKB    = round($resumeSize / 1024);

// 1) Plain-text notification (same pattern as working contact.php)
$plainSubject = "New Job Application: {$jobTitle} - {$firstName} {$lastName}";
$plainBody  = "NEW JOB APPLICATION\n";
$plainBody .= "Cloud Resources Careers\n";
$plainBody .= "-------------------------------------------\n\n";
$plainBody .= "Submitted: {$timestamp}\n\n";
$plainBody .= "POSITION\n";
$plainBody .= "Title:       {$jobTitle}\n";
$plainBody .= "Department:  {$department}\n\n";
$plainBody .= "CANDIDATE DETAILS\n";
$plainBody .= "Name:        {$firstName} {$lastName}\n";
$plainBody .= "Email:       {$email}\n";
$plainBody .= "Phone:       {$phone}\n";
$plainBody .= "LinkedIn:    {$linkedin}\n\n";
$plainBody .= "COVER LETTER / MESSAGE\n";
$plainBody .= "-------------------------------------------\n";
$plainBody .= "{$coverLetter}\n\n";
$plainBody .= "RESUME: {$resumeName} ({$sizeKB} KB)\n";
$plainBody .= "Download from admin panel: https://cloudresources.net/api/applications.php\n\n";
$plainBody .= "-------------------------------------------\n";
$plainBody .= "Application ID: #{$recordId}\n";
$plainBody .= "IP Address: {$ipAddr}\n";

$plainHeaders  = "From: Cloud Resources <noreply@cloudresources.net>\r\n";
$plainHeaders .= "Reply-To: {$email}\r\n";
$plainHeaders .= "X-Mailer: CloudResources-Careers/1.0\r\n";

try {
    $emailSent = @mail($toEmail, $plainSubject, $plainBody, $plainHeaders);
} catch (Exception $e) {
    error_log('CloudResources Apply Email Error (plain): ' . $e->getMessage());
}

// 2) Email with resume attachment (best effort)
if (!empty($resumePath) && file_exists($resumePath)) {
    $boundary = 'CR_' . md5(uniqid(microtime(true)));

    $attachSubject = "Resume Attached: {$jobTitle} - {$firstName} {$lastName}";

    $attachHeaders  = "From: Cloud Resources <noreply@cloudresources.net>\r\n";
    $attachHeaders .= "Reply-To: {$email}\r\n";
    $attachHeaders .= "MIME-Version: 1.0\r\n";
    $attachHeaders .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n";

    $attachBody  = "--{$boundary}\r\n";
    $attachBody .= "Content-Type: text/plain; charset=\"UTF-8\"\r\n";
    $attachBody .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
    $attachBody .= "Resume attached for {$firstName} {$lastName} - {$jobTitle}\r\n";
    $attachBody .= "Application ID: #{$recordId}\r\n\r\n";

    $fileContent = file_get_contents($resumePath);
    $fileEncoded = chunk_split(base64_encode($fileContent));
    $safeResumeName = preg_replace('/[^a-zA-Z0-9._\-]/', '_', $resumeName);

    $attachBody .= "--{$boundary}\r\n";
    $attachBody .= "Content-Type: {$resumeMime}; name=\"{$safeResumeName}\"\r\n";
    $attachBody .= "Content-Disposition: attachment; filename=\"{$safeResumeName}\"\r\n";
    $attachBody .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $attachBody .= $fileEncoded . "\r\n";
    $attachBody .= "--{$boundary}--\r\n";

    try {
        $attachEmailSent = @mail($toEmail, $attachSubject, $attachBody, $attachHeaders);
    } catch (Exception $e) {
        error_log('CloudResources Apply Email Error (attach): ' . $e->getMessage());
    }
}

// --- SMS NOTIFICATION ---
$smsSent = false;
$smsPhone = '+12012149984';
$smsBody = "New Applicant: {$firstName} {$lastName}\nRole: {$jobTitle}\nEmail: {$email}\nResume: {$resumeName}\nID: #{$recordId}";

$configFile = $dataDir . '/config.php';
if (file_exists($configFile)) {
    include $configFile;
}

$twilioSid   = defined('TWILIO_SID')   ? TWILIO_SID   : '';
$twilioToken  = defined('TWILIO_TOKEN') ? TWILIO_TOKEN  : '';
$twilioFrom   = defined('TWILIO_FROM')  ? TWILIO_FROM   : '';

if (!empty($twilioSid) && !empty($twilioToken) && !empty($twilioFrom)) {
    try {
        $ch = curl_init();
        curl_setopt_array($ch, [
            CURLOPT_URL            => "https://api.twilio.com/2010-04-01/Accounts/{$twilioSid}/Messages.json",
            CURLOPT_POST           => true,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT        => 10,
            CURLOPT_USERPWD        => "{$twilioSid}:{$twilioToken}",
            CURLOPT_POSTFIELDS     => http_build_query([
                'To'   => $smsPhone,
                'From' => $twilioFrom,
                'Body' => $smsBody,
            ]),
        ]);
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        if ($httpCode >= 200 && $httpCode < 300) {
            $smsSent = true;
        }
    } catch (Exception $e) {
        error_log('CloudResources SMS Error: ' . $e->getMessage());
    }
} else {
    $carriers = [
        '2012149984@tmomail.net',
        '2012149984@vtext.com',
        '2012149984@txt.att.net',
    ];
    $smsHeaders = "From: noreply@cloudresources.net\r\n";
    foreach ($carriers as $gateway) {
        try {
            if (@mail($gateway, 'CR Applicant', "{$firstName} {$lastName} - {$jobTitle} - {$email}", $smsHeaders)) {
                $smsSent = true;
                break;
            }
        } catch (Exception $e) {}
    }
}

// --- UPDATE DB WITH STATUS ---
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
    'success'         => true,
    'id'              => $recordId,
    'emailSent'       => $emailSent,
    'attachEmailSent' => $attachEmailSent,
    'smsSent'         => $smsSent,
    'message'         => 'Your application has been submitted successfully.',
]);
