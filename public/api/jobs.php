<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

$dbFile = '/home/okrxvcpeqc7k/cr_data/contacts.db';

$defaultJobs = [
    [
        'title' => 'Senior AI/ML Engineer',
        'slug' => 'senior-ai-ml-engineer',
        'department' => 'AI Engineering',
        'location' => 'Irving, TX / Remote',
        'type' => 'Full-time',
        'description' => 'Build production AI platforms with GPT-4o, LangChain, and tool-backed LLM architectures. Work on conversational AI systems processing 50+ tools with zero-hallucination guarantees.',
        'skills' => 'Python,GPT-4o/LLMs,LangChain,FastAPI,PostgreSQL,Docker',
        'icon' => 'Brain',
    ],
    [
        'title' => 'ML Operations Engineer',
        'slug' => 'ml-operations-engineer',
        'department' => 'ML Engineering',
        'location' => 'Irving, TX / Remote',
        'type' => 'Full-time',
        'description' => 'Deploy and maintain production ML pipelines — anomaly detection, capacity forecasting, and risk scoring models. Build automated retraining pipelines and model monitoring.',
        'skills' => 'scikit-learn,XGBoost,PyTorch,MLflow,Kubernetes,Python',
        'icon' => 'Sparkles',
    ],
    [
        'title' => 'Full-Stack Engineer (Next.js)',
        'slug' => 'full-stack-engineer-nextjs',
        'department' => 'Product Engineering',
        'location' => 'Irving, TX / Hyderabad / Remote',
        'type' => 'Full-time',
        'description' => 'Build enterprise dashboards and AI-powered interfaces with Next.js 14, TypeScript, and Tailwind CSS. Work on real-time visualization, chat interfaces, and topology rendering.',
        'skills' => 'Next.js,TypeScript,React,Tailwind CSS,Zustand,REST APIs',
        'icon' => 'Code2',
    ],
    [
        'title' => 'Data Engineer',
        'slug' => 'data-engineer',
        'department' => 'Data Engineering',
        'location' => 'Irving, TX / Remote',
        'type' => 'Full-time',
        'description' => 'Build polyglot data architectures with TimescaleDB, Neo4j, OpenSearch, and vector stores. Design real-time pipelines and automated data quality systems.',
        'skills' => 'PostgreSQL,TimescaleDB,dbt,Python,Apache Airflow,SQL',
        'icon' => 'Database',
    ],
    [
        'title' => 'Cloud/DevOps Architect',
        'slug' => 'cloud-devops-architect',
        'department' => 'Cloud Engineering',
        'location' => 'Irving, TX / Remote',
        'type' => 'Full-time',
        'description' => 'Design and deploy cloud-native architectures on AWS EKS. Build infrastructure-as-code with Terraform, manage Kubernetes clusters, and implement CI/CD pipelines.',
        'skills' => 'AWS,Terraform,Kubernetes,Docker,ArgoCD,Prometheus',
        'icon' => 'Cloud',
    ],
    [
        'title' => 'AI Solutions Architect',
        'slug' => 'ai-solutions-architect',
        'department' => 'Solutions',
        'location' => 'Irving, TX / Remote',
        'type' => 'Full-time',
        'description' => 'Work with enterprise clients to design AI/ML solutions. Translate business challenges into technical architectures spanning AI agents, ML pipelines, and data platforms.',
        'skills' => 'Enterprise Architecture,AI/ML,Client Engagement,Python,Cloud,Presales',
        'icon' => 'Rocket',
    ],
];

try {
    $db = new SQLite3($dbFile);
    $db->exec('CREATE TABLE IF NOT EXISTS jobs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        slug TEXT NOT NULL UNIQUE,
        department TEXT NOT NULL,
        location TEXT NOT NULL,
        type TEXT NOT NULL DEFAULT "Full-time",
        description TEXT NOT NULL,
        skills TEXT,
        icon TEXT DEFAULT "Briefcase",
        is_active INTEGER DEFAULT 1,
        sort_order INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )');

    $count = $db->querySingle('SELECT COUNT(*) FROM jobs');
    if ($count == 0) {
        $stmt = $db->prepare('INSERT INTO jobs (title, slug, department, location, type, description, skills, icon, is_active, sort_order) VALUES (:t, :s, :d, :l, :tp, :desc, :sk, :ic, 1, :so)');
        foreach ($defaultJobs as $i => $job) {
            $stmt->bindValue(':t', $job['title'], SQLITE3_TEXT);
            $stmt->bindValue(':s', $job['slug'], SQLITE3_TEXT);
            $stmt->bindValue(':d', $job['department'], SQLITE3_TEXT);
            $stmt->bindValue(':l', $job['location'], SQLITE3_TEXT);
            $stmt->bindValue(':tp', $job['type'], SQLITE3_TEXT);
            $stmt->bindValue(':desc', $job['description'], SQLITE3_TEXT);
            $stmt->bindValue(':sk', $job['skills'], SQLITE3_TEXT);
            $stmt->bindValue(':ic', $job['icon'], SQLITE3_TEXT);
            $stmt->bindValue(':so', $i, SQLITE3_INTEGER);
            $stmt->execute();
            $stmt->reset();
        }
    }

    $results = $db->query('SELECT id, title, slug, department, location, type, description, skills, icon FROM jobs WHERE is_active = 1 ORDER BY sort_order ASC, id ASC');
    $jobs = [];
    while ($row = $results->fetchArray(SQLITE3_ASSOC)) {
        $row['skills'] = array_map('trim', explode(',', $row['skills'] ?? ''));
        $jobs[] = $row;
    }
    $db->close();

    echo json_encode(['success' => true, 'jobs' => $jobs]);
} catch (Exception $e) {
    error_log('CloudResources Jobs API Error: ' . $e->getMessage());
    echo json_encode(['success' => false, 'error' => 'Failed to load jobs', 'jobs' => []]);
}
