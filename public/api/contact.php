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

$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    $input = $_POST;
}

$firstName = trim($input['firstName'] ?? '');
$lastName  = trim($input['lastName'] ?? '');
$email     = trim($input['email'] ?? '');
$company   = trim($input['company'] ?? '');
$service   = trim($input['service'] ?? '');
$message   = trim($input['message'] ?? '');

if (empty($firstName) || empty($email)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'First name and email are required']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid email address']);
    exit;
}

$serviceLabels = [
    'data-ai'    => 'Data & AI Solutions',
    'ml'         => 'ML Engineering',
    'automation' => 'Intelligent Automation',
    'cloud'      => 'Cloud & DevOps',
    'data-eng'   => 'Data Engineering',
    'staffing'   => 'Technology Staffing',
    'other'      => 'Other',
];
$serviceLabel = $serviceLabels[$service] ?? $service;

// --- DATABASE ---
$homeDir = '/home/okrxvcpeqc7k';
$dbDir   = $homeDir . '/cr_data';
$dbFile  = $dbDir . '/contacts.db';

if (!is_dir($dbDir)) {
    mkdir($dbDir, 0750, true);
    file_put_contents($dbDir . '/.htaccess', "Deny from all\n");
}

try {
    $db = new SQLite3($dbFile);
    $db->exec('CREATE TABLE IF NOT EXISTS submissions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        first_name TEXT NOT NULL,
        last_name TEXT,
        email TEXT NOT NULL,
        company TEXT,
        service TEXT,
        service_label TEXT,
        message TEXT,
        ip_address TEXT,
        user_agent TEXT,
        email_sent INTEGER DEFAULT 0,
        sms_sent INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )');

    $stmt = $db->prepare('INSERT INTO submissions (first_name, last_name, email, company, service, service_label, message, ip_address, user_agent) VALUES (:fn, :ln, :em, :co, :sv, :sl, :msg, :ip, :ua)');
    $stmt->bindValue(':fn', $firstName, SQLITE3_TEXT);
    $stmt->bindValue(':ln', $lastName, SQLITE3_TEXT);
    $stmt->bindValue(':em', $email, SQLITE3_TEXT);
    $stmt->bindValue(':co', $company, SQLITE3_TEXT);
    $stmt->bindValue(':sv', $service, SQLITE3_TEXT);
    $stmt->bindValue(':sl', $serviceLabel, SQLITE3_TEXT);
    $stmt->bindValue(':msg', $message, SQLITE3_TEXT);
    $stmt->bindValue(':ip', $_SERVER['REMOTE_ADDR'] ?? '', SQLITE3_TEXT);
    $stmt->bindValue(':ua', $_SERVER['HTTP_USER_AGENT'] ?? '', SQLITE3_TEXT);
    $stmt->execute();
    $recordId = $db->lastInsertRowID();
    $dbSaved = true;
} catch (Exception $e) {
    $dbSaved = false;
    $recordId = 0;
    error_log('CloudResources DB Error: ' . $e->getMessage());
}

// --- EMAIL NOTIFICATION ---
$emailSent = false;
$toEmail   = 'info@cloudresources.net';
$subject   = "New Contact Form Submission from {$firstName} {$lastName}";

$timestamp = date('F j, Y \a\t g:i A T');
$emailBody = <<<EOT
═══════════════════════════════════════
  NEW CONTACT FORM SUBMISSION
  Cloud Resources Website
═══════════════════════════════════════

Submitted: {$timestamp}

CONTACT DETAILS
───────────────────────────────────────
Name:      {$firstName} {$lastName}
Email:     {$email}
Company:   {$company}
Service:   {$serviceLabel}

MESSAGE
───────────────────────────────────────
{$message}

───────────────────────────────────────
Submission ID: #{$recordId}
IP Address: {$_SERVER['REMOTE_ADDR']}
═══════════════════════════════════════
EOT;

$headers  = "From: Cloud Resources <noreply@cloudresources.net>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: CloudResources-ContactForm/1.0\r\n";

try {
    $emailSent = mail($toEmail, $subject, $emailBody, $headers);
} catch (Exception $e) {
    error_log('CloudResources Email Error: ' . $e->getMessage());
}

// --- SMS NOTIFICATION ---
$smsSent = false;
$smsPhone = '+12012149984';

$smsBody = "New Lead @ CloudResources.net\n"
         . "Name: {$firstName} {$lastName}\n"
         . "Email: {$email}\n"
         . "Company: {$company}\n"
         . "Service: {$serviceLabel}\n"
         . "ID: #{$recordId}";

$configFile = '/home/okrxvcpeqc7k/cr_data/config.php';
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
        } else {
            error_log("CloudResources SMS Error: HTTP {$httpCode} - {$response}");
        }
    } catch (Exception $e) {
        error_log('CloudResources SMS Error: ' . $e->getMessage());
    }
} else {
    // Fallback: send SMS notification via email to carrier gateway
    $fallbackSmsEmail = '2012149984@tmomail.net'; // T-Mobile
    $fallbackSubject  = 'CR Lead';
    $fallbackBody     = "{$firstName} {$lastName} - {$email} - {$serviceLabel}";
    $fallbackHeaders  = "From: noreply@cloudresources.net\r\n";

    // Try multiple carrier gateways
    $carriers = [
        '2012149984@tmomail.net',
        '2012149984@vtext.com',
        '2012149984@txt.att.net',
        '2012149984@messaging.sprintpcs.com',
    ];
    foreach ($carriers as $gateway) {
        try {
            if (mail($gateway, $fallbackSubject, $fallbackBody, $fallbackHeaders)) {
                $smsSent = true;
                break;
            }
        } catch (Exception $e) {
            // continue to next carrier
        }
    }
}

// --- UPDATE DB WITH NOTIFICATION STATUS ---
if ($dbSaved && $recordId > 0) {
    try {
        $update = $db->prepare('UPDATE submissions SET email_sent = :es, sms_sent = :ss WHERE id = :id');
        $update->bindValue(':es', $emailSent ? 1 : 0, SQLITE3_INTEGER);
        $update->bindValue(':ss', $smsSent ? 1 : 0, SQLITE3_INTEGER);
        $update->bindValue(':id', $recordId, SQLITE3_INTEGER);
        $update->execute();
    } catch (Exception $e) {
        error_log('CloudResources DB Update Error: ' . $e->getMessage());
    }
    $db->close();
}

echo json_encode([
    'success'    => true,
    'id'         => $recordId,
    'emailSent'  => $emailSent,
    'smsSent'    => $smsSent,
    'message'    => 'Your message has been received. We will get back to you shortly.',
]);
