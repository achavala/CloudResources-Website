<?php
session_start();

$configFile = '/home/okrxvcpeqc7k/cr_data/config.php';
if (file_exists($configFile)) { include $configFile; }
$adminPass = defined('ADMIN_PASSWORD') ? ADMIN_PASSWORD : 'CloudRes2026!';

if (isset($_GET['logout'])) { session_destroy(); header('Location: admin.php'); exit; }
if (isset($_POST['password']) && !isset($_POST['action'])) {
    if ($_POST['password'] === $adminPass) { $_SESSION['admin_auth'] = true; } else { $loginError = 'Invalid password'; }
}
if (empty($_SESSION['admin_auth'])) {
    ?><!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Admin Login | Cloud Resources</title><link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet"><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'DM Sans',sans-serif;background:#f4f6fb;min-height:100vh;display:flex;align-items:center;justify-content:center}.card{background:#fff;border-radius:16px;padding:40px;width:100%;max-width:400px;box-shadow:0 4px 24px rgba(0,0,0,.08)}h1{font-size:24px;font-weight:700;color:#0f172a;margin-bottom:8px}p{color:#475569;font-size:14px;margin-bottom:24px}label{display:block;font-size:14px;font-weight:500;color:#0f172a;margin-bottom:8px}input{width:100%;padding:12px 16px;border:1px solid #e2e8f0;border-radius:12px;font-size:14px;outline:none}input:focus{border-color:#0052ff;box-shadow:0 0 0 3px rgba(0,82,255,.1)}button{width:100%;padding:14px;background:#0052ff;color:#fff;border:none;border-radius:12px;font-size:14px;font-weight:600;cursor:pointer;margin-top:16px}button:hover{background:#003dd6}.err{color:#ef4444;font-size:13px;margin-top:8px}</style></head><body><div class="card"><h1>Admin Access</h1><p>Enter password to access LinkedIn content calendar.</p><form method="POST"><label>Password</label><input type="password" name="password" autofocus required><?php if(!empty($loginError)):?><div class="err"><?=htmlspecialchars($loginError)?></div><?php endif;?><button type="submit">Sign In</button></form></div></body></html><?php exit;
}

// --- AUTHENTICATED ---
$dbFile = '/home/okrxvcpeqc7k/cr_data/contacts.db';

try {
    $db = new SQLite3($dbFile);
    $db->exec('CREATE TABLE IF NOT EXISTS linkedin_posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        post_date DATE NOT NULL,
        day_name TEXT NOT NULL,
        post_type TEXT NOT NULL,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        hashtags TEXT,
        poll_options TEXT,
        category TEXT,
        status TEXT DEFAULT "draft",
        posted_at DATETIME,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )');
} catch (Exception $e) {
    die('Database error: ' . $e->getMessage());
}

// --- CONTENT LIBRARY ---
// Based on Cloud Resources services, projects, and market positioning

$articleTemplates = [
    // AI & ML thought leadership
    ['cat' => 'AI/ML', 'titles' => [
        "Why Zero-Hallucination AI Is the New Enterprise Standard",
        "From GPT Wrapper to Production AI: What Most Companies Get Wrong",
        "The Hidden Cost of AI Experimentation Without Architecture",
        "Multi-Agent AI Systems: Beyond Single-Model Thinking",
        "Why Your AI Strategy Needs a Data Strategy First",
        "Enterprise AI in 2026: Moving from Pilots to Production",
        "Tool-Backed LLM Architectures: The Future of Reliable AI",
        "How Conversational AI Is Replacing Traditional Enterprise Dashboards",
        "The Difference Between AI-Curious and AI-Native Organizations",
        "Building AI Systems That Actually Scale: Lessons from 50+ Deployments",
        "Why RAG Alone Won't Save Your Enterprise AI Implementation",
        "The Architecture Behind Zero-Hallucination AI Agents",
        "LangChain in Production: What the Tutorials Don't Tell You",
        "AI Governance: Why Enterprise AI Needs Guardrails, Not Just Models",
        "From ChatGPT to Enterprise: Why Production AI Is a Different Game",
    ]],
    // Data Engineering & Analytics
    ['cat' => 'Data Engineering', 'titles' => [
        "Polyglot Data Architecture: Why One Database Isn't Enough",
        "Real-Time Data Pipelines: From Batch to Stream in Production",
        "Data Quality Is Not a Feature — It's the Foundation",
        "Vector Databases in Enterprise: Beyond the Hype",
        "TimescaleDB + Neo4j: Building Multi-Model Data Architectures",
        "Why Data Engineers Are the Unsung Heroes of AI Transformation",
        "The True Cost of Bad Data: $12.9M Per Year Per Company",
        "Apache Airflow vs. Modern Orchestrators: A Practitioner's View",
        "Building Data Platforms That Serve Both Analysts and AI Models",
        "Data Mesh vs Data Fabric: Which Architecture Fits Your Enterprise?",
    ]],
    // Cloud & DevOps
    ['cat' => 'Cloud/DevOps', 'titles' => [
        "Infrastructure as Code: The Foundation of Scalable AI Platforms",
        "Kubernetes at Scale: What We Learned Running 200+ Microservices",
        "GitOps with ArgoCD: Why Your Deployment Pipeline Needs a Rethink",
        "Cloud Cost Optimization: How We Cut AWS Spend by 40%",
        "SRE Practices for AI/ML Workloads: It's Not the Same as Web Apps",
        "Platform Engineering: Building Internal Developer Platforms That Stick",
        "Multi-Cloud Strategy in 2026: Reality Check for Enterprise",
        "Observability for AI Systems: Beyond Traditional APM",
    ]],
    // Technology Staffing & Industry
    ['cat' => 'Staffing/Industry', 'titles' => [
        "The AI Talent Gap: Why Hiring Is Only Half the Solution",
        "Staff Augmentation vs Managed Services: Choosing the Right Model",
        "Why the Best AI Engineers Are Also Great Communicators",
        "Building High-Performance Technical Teams in a Remote-First World",
        "The Rise of the AI Solutions Architect: A New Enterprise Role",
        "From IT Staffing to AI Transformation: Our Evolution at Cloud Resources",
        "Why Cultural Fit Matters More Than Technical Skills in AI Teams",
        "The Future of Work: How AI Is Reshaping Technical Consulting",
        "Hybrid Teams: Blending Onshore Strategy with Offshore Scale",
        "What Enterprise CTOs Really Want from Technology Partners in 2026",
    ]],
    // Case study inspired
    ['cat' => 'Case Studies', 'titles' => [
        "How We Built an AI Agent That Processes 50+ Tools with Zero Hallucinations",
        "Anomaly Detection at Scale: ML Models That Save Millions in Downtime",
        "Building a Healthcare AI Platform: Lessons from SanGPT",
        "Operational Intelligence: When AI Meets DevOps Monitoring",
        "From Manual Processes to AI-Driven Automation: A 73% Efficiency Gain",
        "Multi-Agent Trading Systems: How ML Models Outperform Rule-Based Strategies",
        "Real-World RAG Implementation: Search Accuracy from 60% to 95%",
        "Building Enterprise Chatbots That Don't Hallucinate",
    ]],
];

$pollTemplates = [
    ['q' => "What's the biggest barrier to enterprise AI adoption in 2026?", 'opts' => ['Data quality & governance','Talent shortage','Leadership buy-in','Integration with legacy systems'], 'cat' => 'AI/ML'],
    ['q' => "Which AI architecture pattern will dominate enterprise in 2026?", 'opts' => ['Multi-agent systems','RAG pipelines','Fine-tuned models','Agentic workflows'], 'cat' => 'AI/ML'],
    ['q' => "How is your organization handling AI governance?", 'opts' => ['Formal AI governance board','Ad hoc policies','No governance yet','Evaluating frameworks'], 'cat' => 'AI/ML'],
    ['q' => "What's your primary cloud strategy for AI workloads?", 'opts' => ['AWS','Azure','GCP','Multi-cloud'], 'cat' => 'Cloud/DevOps'],
    ['q' => "Which data architecture trend are you most excited about?", 'opts' => ['Data mesh','Real-time streaming','Vector databases','Data lakehouse'], 'cat' => 'Data Engineering'],
    ['q' => "What's the hardest part of hiring AI/ML engineers?", 'opts' => ['Finding production experience','Budget constraints','Competition from Big Tech','Assessing real skills vs hype'], 'cat' => 'Staffing/Industry'],
    ['q' => "How long does it take your org to move AI from POC to production?", 'opts' => ['< 3 months','3-6 months','6-12 months','> 12 months or never'], 'cat' => 'AI/ML'],
    ['q' => "Which LLM provider does your enterprise rely on most?", 'opts' => ['OpenAI (GPT-4o/o1)','Anthropic (Claude)','Google (Gemini)','Open source (Llama/Mistral)'], 'cat' => 'AI/ML'],
    ['q' => "What's the #1 skill gap in your data engineering team?", 'opts' => ['ML pipeline ops','Real-time streaming','Data governance','Cloud-native architecture'], 'cat' => 'Data Engineering'],
    ['q' => "How do you measure ROI on AI investments?", 'opts' => ['Revenue impact','Cost savings','Productivity metrics','We don\'t measure yet'], 'cat' => 'AI/ML'],
    ['q' => "What's your biggest DevOps challenge in 2026?", 'opts' => ['Kubernetes complexity','Security/compliance','Cost management','AI workload scaling'], 'cat' => 'Cloud/DevOps'],
    ['q' => "Remote, hybrid, or on-site: What works best for AI teams?", 'opts' => ['Fully remote','Hybrid (2-3 days office)','On-site','Depends on the role'], 'cat' => 'Staffing/Industry'],
    ['q' => "Which automation trend will have the biggest enterprise impact?", 'opts' => ['AI-powered code generation','Autonomous IT operations','Intelligent document processing','Self-healing infrastructure'], 'cat' => 'AI/ML'],
    ['q' => "What percentage of your data pipeline is automated?", 'opts' => ['< 25%','25-50%','50-75%','> 75%'], 'cat' => 'Data Engineering'],
    ['q' => "What's your top priority for tech staffing in 2026?", 'opts' => ['AI/ML engineers','Data engineers','Cloud architects','Full-stack developers'], 'cat' => 'Staffing/Industry'],
    ['q' => "How mature is your organization's MLOps practice?", 'opts' => ['No MLOps yet','Basic CI/CD for models','Automated retraining','Full ML platform'], 'cat' => 'AI/ML'],
];

$articleBodies = [];
// Pre-written article bodies keyed by title
$articleBodies = [
    "Why Zero-Hallucination AI Is the New Enterprise Standard" => "In enterprise AI, \"close enough\" isn't good enough.\n\nWhen an AI system manages financial transactions, healthcare decisions, or operational workflows, hallucinated outputs don't just look bad — they cost millions and erode trust.\n\nAt Cloud Resources, we've architected AI systems processing 50+ tools with zero-hallucination guarantees. Here's what we've learned:\n\n𝟏. 𝐓𝐨𝐨𝐥-𝐛𝐚𝐜𝐤𝐞𝐝 𝐚𝐫𝐜𝐡𝐢𝐭𝐞𝐜𝐭𝐮𝐫𝐞𝐬 > 𝐩𝐫𝐨𝐦𝐩𝐭 𝐞𝐧𝐠𝐢𝐧𝐞𝐞𝐫𝐢𝐧𝐠\nInstead of hoping the model \"knows\" the answer, we route every factual query through verified tools and databases. The LLM orchestrates — it doesn't guess.\n\n𝟐. 𝐄𝐯𝐞𝐫𝐲 𝐨𝐮𝐭𝐩𝐮𝐭 𝐧𝐞𝐞𝐝𝐬 𝐚 𝐬𝐨𝐮𝐫𝐜𝐞\nIf the system can't trace an answer to a verified data source, it says \"I don't know.\" That's not a failure — that's reliability.\n\n𝟑. 𝐆𝐮𝐚𝐫𝐝𝐫𝐚𝐢𝐥𝐬 𝐚𝐫𝐞 𝐚𝐫𝐜𝐡𝐢𝐭𝐞𝐜𝐭𝐮𝐫𝐚𝐥, 𝐧𝐨𝐭 𝐚𝐟𝐭𝐞𝐫𝐭𝐡𝐨𝐮𝐠𝐡𝐭𝐬\nYou don't add safety checks after building. You design the system around constraints from day one.\n\nThe enterprises winning with AI aren't the ones moving fastest — they're the ones moving most reliably.\n\nWhat's your experience with AI hallucinations in production systems?",

    "From GPT Wrapper to Production AI: What Most Companies Get Wrong" => "I've seen it dozens of times:\n\nA company builds a ChatGPT wrapper, demos it to leadership, gets excited... then spends 18 months trying to make it production-ready.\n\nThe gap between a demo and a production AI system is enormous. Here's what most companies miss:\n\n❌ 𝐃𝐞𝐦𝐨: Single API call to GPT-4o\n✅ 𝐏𝐫𝐨𝐝𝐮𝐜𝐭𝐢𝐨𝐧: Multi-agent orchestration with fallbacks, caching, rate limiting, and monitoring\n\n❌ 𝐃𝐞𝐦𝐨: \"It works on my data\"\n✅ 𝐏𝐫𝐨𝐝𝐮𝐜𝐭𝐢𝐨𝐧: Handles edge cases, adversarial inputs, and data drift\n\n❌ 𝐃𝐞𝐦𝐨: Costs $20/month for API calls\n✅ 𝐏𝐫𝐨𝐝𝐮𝐜𝐭𝐢𝐨𝐧: Requires cost optimization, token management, and model routing\n\nAt Cloud Resources, we've helped enterprises bridge this gap by:\n\n→ Building tool-backed architectures that guarantee accuracy\n→ Implementing MLOps pipelines for continuous model evaluation\n→ Designing for scale from day one, not as an afterthought\n\nThe question isn't \"Can AI do this?\" — it's \"Can AI do this reliably, at scale, every time?\"\n\nWhat stage is your organization at in the AI journey?",

    "The Hidden Cost of AI Experimentation Without Architecture" => "Here's a pattern I see repeatedly in enterprise AI:\n\n→ Team A builds a chatbot with OpenAI\n→ Team B builds a recommendation engine with a different stack\n→ Team C experiments with computer vision\n→ None of them can share data, models, or infrastructure\n\nThe result? An \"AI zoo\" — dozens of disconnected experiments burning budget with no path to production.\n\nThe hidden costs:\n\n💰 𝐃𝐮𝐩𝐥𝐢𝐜𝐚𝐭𝐞𝐝 𝐢𝐧𝐟𝐫𝐚𝐬𝐭𝐫𝐮𝐜𝐭𝐮𝐫𝐞 — Every team spins up its own compute, storage, and pipelines\n💰 𝐍𝐨 𝐫𝐞𝐮𝐬𝐚𝐛𝐢𝐥𝐢𝐭𝐲 — Learnings from one project don't transfer to the next\n💰 𝐆𝐨𝐯𝐞𝐫𝐧𝐚𝐧𝐜𝐞 𝐠𝐚𝐩𝐬 — No unified view of what AI is doing across the org\n💰 𝐓𝐚𝐥𝐞𝐧𝐭 𝐛𝐮𝐫𝐧𝐨𝐮𝐭 — Engineers spend 80% of time on plumbing, 20% on AI\n\nThe solution? An AI platform strategy before AI experiments.\n\nAt Cloud Resources, we build enterprise AI platforms that provide:\n✅ Shared model registry and feature stores\n✅ Unified data pipelines serving all AI workloads\n✅ Governance and observability built in\n✅ Reusable components that accelerate every subsequent project\n\nArchitecture first. Experiments second. Production always.",

    "Polyglot Data Architecture: Why One Database Isn't Enough" => "The era of \"one database to rule them all\" is over.\n\nModern enterprise AI requires:\n→ Time-series data for anomaly detection (TimescaleDB)\n→ Graph data for relationship mapping (Neo4j)\n→ Vector data for semantic search (OpenSearch/Pinecone)\n→ Relational data for transactions (PostgreSQL)\n→ Document data for unstructured content (MongoDB)\n\nTrying to force all of these into a single database is like using a hammer for every job. It technically works — but the results suffer.\n\nWhat we've learned building polyglot architectures at Cloud Resources:\n\n𝟏. 𝐒𝐭𝐚𝐫𝐭 𝐰𝐢𝐭𝐡 𝐭𝐡𝐞 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧, 𝐧𝐨𝐭 𝐭𝐡𝐞 𝐝𝐚𝐭𝐚𝐛𝐚𝐬𝐞\nWhat questions does your AI need to answer? That determines your storage layer.\n\n𝟐. 𝐔𝐧𝐢𝐟𝐢𝐞𝐝 𝐩𝐢𝐩𝐞𝐥𝐢𝐧𝐞𝐬, 𝐬𝐩𝐞𝐜𝐢𝐚𝐥𝐢𝐳𝐞𝐝 𝐬𝐭𝐨𝐫𝐚𝐠𝐞\nOne ingestion pipeline can feed multiple specialized databases. Complexity in routing, simplicity in querying.\n\n𝟑. 𝐃𝐚𝐭𝐚 𝐪𝐮𝐚𝐥𝐢𝐭𝐲 𝐚𝐜𝐫𝐨𝐬𝐬 𝐬𝐲𝐬𝐭𝐞𝐦𝐬\nThe biggest risk in polyglot architectures is data inconsistency. Automated quality checks at every boundary.\n\nThe enterprises with the best AI are the ones with the best data architecture underneath.",

    "The AI Talent Gap: Why Hiring Is Only Half the Solution" => "Every enterprise wants AI engineers.\nNot every enterprise can attract them.\n\nBut here's what most companies miss: the AI talent gap isn't just about hiring. It's about:\n\n𝟏. 𝐑𝐞𝐭𝐞𝐧𝐭𝐢𝐨𝐧\nAI engineers leave when they spend 80% of their time on data cleaning and infrastructure instead of actual AI work. Give them a platform, not just a laptop.\n\n𝟐. 𝐔𝐩𝐬𝐤𝐢𝐥𝐥𝐢𝐧𝐠\nYour existing engineers know your business better than any new hire. Invest in training programs that bridge the gap between traditional software engineering and AI/ML.\n\n𝟑. 𝐒𝐭𝐫𝐚𝐭𝐞𝐠𝐢𝐜 𝐩𝐚𝐫𝐭𝐧𝐞𝐫𝐬𝐡𝐢𝐩𝐬\nYou don't need to hire 50 AI engineers. A lean internal team + a specialized partner like Cloud Resources can move faster than a large, unfocused team.\n\nAt Cloud Resources, we've placed 200+ AI/ML engineers and data scientists with enterprise clients. The pattern is clear:\n\n→ Companies that combine staff augmentation with knowledge transfer outperform those that just \"rent bodies\"\n→ The best outcomes come from blended teams: your domain experts + our technical specialists\n\nHow is your organization approaching the AI talent challenge?",

    "Multi-Agent AI Systems: Beyond Single-Model Thinking" => "Single-model AI is hitting a wall.\n\nHere's why the smartest enterprise teams are moving to multi-agent architectures:\n\nImagine you have a complex business process — say, analyzing a customer support ticket. A single LLM call might generate an okay response. But a multi-agent system?\n\n🤖 Agent 1: Classifies the intent and urgency\n🤖 Agent 2: Pulls relevant customer history from your CRM\n🤖 Agent 3: Searches your knowledge base for solutions\n🤖 Agent 4: Drafts a response using all the context\n🤖 Agent 5: Reviews for accuracy and compliance\n\nEach agent is specialized. Each has access to specific tools. Together, they deliver results that no single model call can match.\n\nAt Cloud Resources, we've built multi-agent systems processing 50+ tools for enterprise clients. Key lessons:\n\n→ 𝐎𝐫𝐜𝐡𝐞𝐬𝐭𝐫𝐚𝐭𝐢𝐨𝐧 > 𝐈𝐧𝐝𝐢𝐯𝐢𝐝𝐮𝐚𝐥 𝐚𝐠𝐞𝐧𝐭 𝐩𝐨𝐰𝐞𝐫\nThe routing logic between agents matters more than the model powering each one.\n\n→ 𝐅𝐚𝐢𝐥𝐮𝐫𝐞 𝐢𝐬𝐨𝐥𝐚𝐭𝐢𝐨𝐧 𝐢𝐬 𝐜𝐫𝐢𝐭𝐢𝐜𝐚𝐥\nIf one agent fails, the system should degrade gracefully — not crash entirely.\n\n→ 𝐎𝐛𝐬𝐞𝐫𝐯𝐚𝐛𝐢𝐥𝐢𝐭𝐲 𝐢𝐬 𝐧𝐨𝐧-𝐧𝐞𝐠𝐨𝐭𝐢𝐚𝐛𝐥𝐞\nYou need to trace every decision through every agent. No black boxes.\n\nThe future of enterprise AI isn't one model doing everything. It's specialized agents working together.",

    "Real-Time Data Pipelines: From Batch to Stream in Production" => "Most enterprises are still running batch data pipelines.\n\nHere's the problem: your business operates in real-time. Your data should too.\n\nThink about it:\n→ A fraud detection system that processes transactions once per hour?\n→ An inventory system that syncs overnight?\n→ An anomaly detector that runs once daily?\n\nBy the time batch processing catches the issue, the damage is done.\n\n𝐖𝐡𝐚𝐭 𝐫𝐞𝐚𝐥-𝐭𝐢𝐦𝐞 𝐩𝐢𝐩𝐞𝐥𝐢𝐧𝐞𝐬 𝐞𝐧𝐚𝐛𝐥𝐞:\n\n✅ Sub-second anomaly detection in operational systems\n✅ Real-time feature computation for ML models\n✅ Live dashboards reflecting the actual state of your business\n✅ Event-driven architectures that respond, not react\n\nAt Cloud Resources, we've helped enterprises transition from batch-first to stream-first architectures using:\n\n• Apache Kafka + Flink for stream processing\n• TimescaleDB for time-series analytics\n• Custom CDC pipelines for database synchronization\n• Real-time feature stores feeding ML models\n\nThe shift from batch to streaming isn't just technical — it's a fundamental change in how your organization makes decisions.\n\nIs your data fast enough for your business?",

    "Infrastructure as Code: The Foundation of Scalable AI Platforms" => "You can't scale AI on manually configured infrastructure.\n\nFull stop.\n\nI've seen teams spend months building sophisticated ML models, only to have deployment fail because the infrastructure was a snowflake environment that one person understands.\n\n𝐈𝐧𝐟𝐫𝐚𝐬𝐭𝐫𝐮𝐜𝐭𝐮𝐫𝐞 𝐚𝐬 𝐂𝐨𝐝𝐞 (𝐈𝐚𝐂) 𝐟𝐨𝐫 𝐀𝐈 𝐩𝐥𝐚𝐭𝐟𝐨𝐫𝐦𝐬 𝐦𝐞𝐚𝐧𝐬:\n\n1️⃣ 𝐑𝐞𝐩𝐫𝐨𝐝𝐮𝐜𝐢𝐛𝐥𝐞 𝐞𝐧𝐯𝐢𝐫𝐨𝐧𝐦𝐞𝐧𝐭𝐬\nEvery ML training run, every inference endpoint, every data pipeline — defined in code, version controlled, reproducible.\n\n2️⃣ 𝐒𝐜𝐚𝐥𝐞 𝐨𝐧 𝐝𝐞𝐦𝐚𝐧𝐝\nGPU clusters that spin up for training and shut down when done. Inference endpoints that auto-scale with traffic.\n\n3️⃣ 𝐃𝐢𝐬𝐚𝐬𝐭𝐞𝐫 𝐫𝐞𝐜𝐨𝐯𝐞𝐫𝐲\nYour entire platform, recoverable from a Git repo. Not from someone's memory.\n\nOur stack at Cloud Resources:\n→ Terraform for cloud provisioning\n→ Kubernetes + Helm for container orchestration\n→ ArgoCD for GitOps-driven deployments\n→ Ansible for configuration management\n\nThe best AI teams treat infrastructure with the same rigor as their models. Your IaC maturity determines your AI maturity.",

    "Building a Healthcare AI Platform: Lessons from SanGPT" => "Healthcare AI is unlike any other domain.\n\nThe stakes are higher. The regulations are stricter. The data is more sensitive. And the consequences of getting it wrong are measured in lives, not dollars.\n\nWhen we built SanGPT — a healthcare-focused AI platform — we learned lessons that apply to every regulated industry:\n\n𝟏. 𝐏𝐫𝐢𝐯𝐚𝐜𝐲 𝐛𝐲 𝐝𝐞𝐬𝐢𝐠𝐧, 𝐧𝐨𝐭 𝐛𝐲 𝐩𝐚𝐭𝐜𝐡\nHIPAA compliance can't be an afterthought. We designed the entire data flow — from ingestion to inference — with privacy constraints as architectural requirements.\n\n𝟐. 𝐄𝐱𝐩𝐥𝐚𝐢𝐧𝐚𝐛𝐢𝐥𝐢𝐭𝐲 𝐢𝐬 𝐦𝐚𝐧𝐝𝐚𝐭𝐨𝐫𝐲\nDoctors won't trust a black box. Every AI recommendation needs a clear, traceable reasoning chain that clinicians can verify.\n\n𝟑. 𝐇𝐮𝐦𝐚𝐧-𝐢𝐧-𝐭𝐡𝐞-𝐥𝐨𝐨𝐩 𝐢𝐬 𝐧𝐨𝐧-𝐧𝐞𝐠𝐨𝐭𝐢𝐚𝐛𝐥𝐞\nAI assists. Humans decide. The system suggests differential diagnoses; the physician makes the call.\n\n𝟒. 𝐃𝐨𝐦𝐚𝐢𝐧 𝐞𝐱𝐩𝐞𝐫𝐭𝐢𝐬𝐞 > 𝐦𝐨𝐝𝐞𝐥 𝐬𝐢𝐳𝐞\nA smaller model trained on curated medical data outperforms a general-purpose LLM every time in clinical contexts.\n\nThe future of healthcare AI isn't about replacing doctors. It's about giving them superpowers.",

    "How We Built an AI Agent That Processes 50+ Tools with Zero Hallucinations" => "When we set out to build AI-RUN SOS, the goal was ambitious:\n\nAn AI agent that could process 50+ enterprise tools — databases, APIs, monitoring systems, knowledge bases — with zero hallucinations.\n\nNot \"low\" hallucination. Zero.\n\nHere's how we achieved it:\n\n𝐀𝐫𝐜𝐡𝐢𝐭𝐞𝐜𝐭𝐮𝐫𝐞 𝐃𝐞𝐜𝐢𝐬𝐢𝐨𝐧 #𝟏: 𝐓𝐨𝐨𝐥-𝐛𝐚𝐜𝐤𝐞𝐝 𝐫𝐞𝐬𝐩𝐨𝐧𝐬𝐞𝐬\nThe AI never generates factual claims from its training data. Every data point comes from a verified tool call. If no tool can answer the question, the system says \"I don't have that information.\"\n\n𝐀𝐫𝐜𝐡𝐢𝐭𝐞𝐜𝐭𝐮𝐫𝐞 𝐃𝐞𝐜𝐢𝐬𝐢𝐨𝐧 #𝟐: 𝐌𝐮𝐥𝐭𝐢-𝐥𝐚𝐲𝐞𝐫 𝐯𝐚𝐥𝐢𝐝𝐚𝐭𝐢𝐨𝐧\nEvery response passes through validation layers that cross-reference tool outputs with known constraints. Contradictions trigger re-evaluation, not confident wrong answers.\n\n𝐀𝐫𝐜𝐡𝐢𝐭𝐞𝐜𝐭𝐮𝐫𝐞 𝐃𝐞𝐜𝐢𝐬𝐢𝐨𝐧 #𝟑: 𝐎𝐛𝐬𝐞𝐫𝐯𝐚𝐛𝐢𝐥𝐢𝐭𝐲-𝐟𝐢𝐫𝐬𝐭\nEvery tool call, every reasoning step, every output is logged and traceable. When something looks wrong, you can replay the entire decision chain.\n\nThe result: Enterprise-grade reliability that CTOs trust with production workloads.\n\nZero hallucination isn't a marketing claim. It's an architectural guarantee.",

    "Anomaly Detection at Scale: ML Models That Save Millions in Downtime" => "A 1-hour outage at a Fortune 500 costs an average of $300,000.\n\nNow multiply that by the number of incidents that could have been predicted — but weren't.\n\nThat's the business case for ML-powered anomaly detection.\n\nWhen we built DRA (Dynamic Risk Analyzer), we designed it to catch anomalies before they become incidents:\n\n📊 𝐑𝐞𝐚𝐥-𝐭𝐢𝐦𝐞 𝐦𝐞𝐭𝐫𝐢𝐜 𝐢𝐧𝐠𝐞𝐬𝐭𝐢𝐨𝐧\nThousands of metrics per second from infrastructure, applications, and business KPIs. All flowing through streaming pipelines.\n\n🧠 𝐌𝐮𝐥𝐭𝐢-𝐦𝐨𝐝𝐞𝐥 𝐝𝐞𝐭𝐞𝐜𝐭𝐢𝐨𝐧\nNo single algorithm catches every anomaly type. We use ensemble approaches: statistical baselines + ML classifiers + pattern matching.\n\n🎯 𝐂𝐨𝐧𝐭𝐞𝐱𝐭-𝐚𝐰𝐚𝐫𝐞 𝐚𝐥𝐞𝐫𝐭𝐢𝐧𝐠\nNot just \"this metric is high.\" Our system explains why it matters, what's correlated, and what the likely root cause is.\n\n⚡ 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐞𝐝 𝐫𝐞𝐦𝐞𝐝𝐢𝐚𝐭𝐢𝐨𝐧\nFor known patterns, the system can take corrective action automatically — scaling resources, rerouting traffic, or triggering failover.\n\nThe ROI? One client saw a 73% reduction in unplanned downtime within the first quarter.\n\nPredictive operations isn't the future. It's the present.",

    "Staff Augmentation vs Managed Services: Choosing the Right Model" => "\"Should we hire contractors or outsource the whole project?\"\n\nThis is the wrong question. The right one is:\n\"What does my team need to succeed?\"\n\nAfter a decade of technology staffing at Cloud Resources, here's our framework:\n\n𝐒𝐭𝐚𝐟𝐟 𝐀𝐮𝐠𝐦𝐞𝐧𝐭𝐚𝐭𝐢𝐨𝐧 𝐰𝐨𝐫𝐤𝐬 𝐰𝐡𝐞𝐧:\n✅ You have strong technical leadership\n✅ You need specific skills for a defined period\n✅ Your team knows the domain but needs extra hands\n✅ You want to maintain full control of the project\n\n𝐌𝐚𝐧𝐚𝐠𝐞𝐝 𝐒𝐞𝐫𝐯𝐢𝐜𝐞𝐬 𝐰𝐨𝐫𝐤𝐬 𝐰𝐡𝐞𝐧:\n✅ You need end-to-end delivery accountability\n✅ The project requires specialized expertise your team lacks\n✅ You want predictable costs and timelines\n✅ You need a partner who owns the outcome, not just hours\n\n𝐓𝐡𝐞 𝐛𝐞𝐬𝐭 𝐦𝐨𝐝𝐞𝐥? 𝐎𝐟𝐭𝐞𝐧 𝐚 𝐡𝐲𝐛𝐫𝐢𝐝.\n\nAt Cloud Resources, our most successful engagements blend embedded engineers (who learn your systems and culture) with managed delivery teams (who bring proven playbooks and architecture expertise).\n\nThe result: speed of augmentation + accountability of managed services.\n\nWhat model has worked best for your organization?",

    "Why Your AI Strategy Needs a Data Strategy First" => "I've seen it too many times:\n\nA CTO presents an AI strategy to the board. Ambitious timelines. Exciting use cases. Massive ROI projections.\n\nThen the data team gets involved and everything grinds to a halt.\n\nWhy? Because without a data strategy, your AI strategy is built on sand.\n\n𝐓𝐡𝐞 𝐫𝐞𝐚𝐥𝐢𝐭𝐲:\n→ 80% of AI project time is spent on data preparation\n→ Most enterprises have data scattered across 50+ systems\n→ Quality issues in training data amplify into model failures\n→ Governance gaps create compliance risks that kill projects\n\n𝐖𝐡𝐚𝐭 𝐚 𝐝𝐚𝐭𝐚 𝐬𝐭𝐫𝐚𝐭𝐞𝐠𝐲 𝐟𝐨𝐫 𝐀𝐈 𝐥𝐨𝐨𝐤𝐬 𝐥𝐢𝐤𝐞:\n\n1️⃣ 𝐃𝐚𝐭𝐚 𝐢𝐧𝐯𝐞𝐧𝐭𝐨𝐫𝐲 — What data do you have? Where is it? Who owns it?\n2️⃣ 𝐐𝐮𝐚𝐥𝐢𝐭𝐲 𝐛𝐚𝐬𝐞𝐥𝐢𝐧𝐞 — How complete, accurate, and fresh is each data source?\n3️⃣ 𝐀𝐜𝐜𝐞𝐬𝐬 𝐩𝐚𝐭𝐭𝐞𝐫𝐧𝐬 — How will AI models consume this data? Batch? Streaming? API?\n4️⃣ 𝐆𝐨𝐯𝐞𝐫𝐧𝐚𝐧𝐜𝐞 𝐟𝐫𝐚𝐦𝐞𝐰𝐨𝐫𝐤 — Who can access what? How is PII handled?\n\nAt Cloud Resources, we always start AI engagements with a data readiness assessment. It's not glamorous, but it's what separates AI success from AI theater.",

    "Enterprise AI in 2026: Moving from Pilots to Production" => "Here's the uncomfortable truth about enterprise AI in 2026:\n\nMost companies have run AI pilots. Few have AI in production at scale.\n\nAccording to Gartner, only 54% of AI projects make it from pilot to production. The rest? Stuck in what I call the \"pilot purgatory.\"\n\n𝐖𝐡𝐲 𝐩𝐢𝐥𝐨𝐭𝐬 𝐟𝐚𝐢𝐥 𝐭𝐨 𝐬𝐜𝐚𝐥𝐞:\n\n❌ Built on demo infrastructure, not production infrastructure\n❌ No MLOps pipeline for continuous retraining and monitoring\n❌ Data access was hand-crafted for the pilot, not sustainable\n❌ Success metrics were vanity metrics, not business metrics\n❌ No change management plan for the humans using the AI\n\n𝐖𝐡𝐚𝐭 𝐩𝐫𝐨𝐝𝐮𝐜𝐭𝐢𝐨𝐧-𝐫𝐞𝐚𝐝𝐲 𝐀𝐈 𝐥𝐨𝐨𝐤𝐬 𝐥𝐢𝐤𝐞:\n\n✅ Automated data pipelines with quality monitoring\n✅ CI/CD for models — versioned, tested, deployed like software\n✅ Real-time monitoring for model drift and performance degradation\n✅ Clear business KPIs tied to AI system outputs\n✅ User training and change management from day one\n\nAt Cloud Resources, we don't build pilots. We build production AI systems. Because a demo that impresses the board is worthless if it can't run reliably at 3 AM on a Saturday.",
];

// --- GENERATE CONTENT FOR A WEEK ---
function generateWeekContent($db, $weekStart, $articleTemplates, $pollTemplates, $articleBodies) {
    $weekEnd = date('Y-m-d', strtotime($weekStart . ' +6 days'));

    $existing = $db->querySingle("SELECT COUNT(*) FROM linkedin_posts WHERE post_date >= '{$weekStart}' AND post_date <= '{$weekEnd}'");
    if ($existing > 0) return "Content already exists for week of {$weekStart}. Delete existing posts first to regenerate.";

    $days = [];
    for ($i = 0; $i < 7; $i++) {
        $d = date('Y-m-d', strtotime($weekStart . " +{$i} days"));
        $dayName = date('l', strtotime($d));
        $days[] = ['date' => $d, 'day' => $dayName];
    }

    $allTitles = [];
    foreach ($articleTemplates as $group) {
        foreach ($group['titles'] as $t) {
            $allTitles[] = ['title' => $t, 'cat' => $group['cat']];
        }
    }
    shuffle($allTitles);
    shuffle($pollTemplates);

    $articleIdx = 0;
    $pollIdx = 0;
    $generated = 0;

    foreach ($days as $dayInfo) {
        $d = $dayInfo['date'];
        $dayName = $dayInfo['day'];

        // Monday: Article + Poll
        if ($dayName === 'Monday') {
            if (isset($allTitles[$articleIdx])) {
                $art = $allTitles[$articleIdx++];
                $body = $articleBodies[$art['title']] ?? generateArticleBody($art['title'], $art['cat']);
                $tags = generateHashtags($art['cat']);
                insertPost($db, $d, $dayName, 'article', $art['title'], $body, $tags, null, $art['cat']);
                $generated++;
            }
            if (isset($pollTemplates[$pollIdx])) {
                $poll = $pollTemplates[$pollIdx++];
                $pollBody = "🗳️ Quick poll for my network:\n\n" . $poll['q'] . "\n\nDrop your thoughts in the comments — I'd love to hear the reasoning behind your vote.\n\n" . generateHashtags($poll['cat']);
                insertPost($db, $d, $dayName, 'poll', $poll['q'], $pollBody, generateHashtags($poll['cat']), json_encode($poll['opts']), $poll['cat']);
                $generated++;
            }
        }
        // Tuesday, Wednesday, Thursday: Article
        elseif (in_array($dayName, ['Tuesday', 'Wednesday', 'Thursday'])) {
            if (isset($allTitles[$articleIdx])) {
                $art = $allTitles[$articleIdx++];
                $body = $articleBodies[$art['title']] ?? generateArticleBody($art['title'], $art['cat']);
                $tags = generateHashtags($art['cat']);
                insertPost($db, $d, $dayName, 'article', $art['title'], $body, $tags, null, $art['cat']);
                $generated++;
            }
        }
        // Friday: Poll
        elseif ($dayName === 'Friday') {
            if (isset($pollTemplates[$pollIdx])) {
                $poll = $pollTemplates[$pollIdx++];
                $pollBody = "🗳️ Friday poll — let's hear from the community:\n\n" . $poll['q'] . "\n\nVote and share your perspective in the comments!\n\n" . generateHashtags($poll['cat']);
                insertPost($db, $d, $dayName, 'poll', $poll['q'], $pollBody, generateHashtags($poll['cat']), json_encode($poll['opts']), $poll['cat']);
                $generated++;
            }
        }
    }

    return "Generated {$generated} posts for week of {$weekStart}.";
}

function generateArticleBody($title, $cat) {
    $intros = [
        "AI/ML" => ["Enterprise AI is evolving rapidly.", "The AI landscape is shifting from experimentation to production.", "Here's what separates AI leaders from AI followers."],
        "Data Engineering" => ["Data is the foundation of every AI initiative.", "Modern data architecture requires a fundamentally different approach.", "The best AI is only as good as the data behind it."],
        "Cloud/DevOps" => ["Cloud-native infrastructure isn't optional for AI workloads.", "The platform engineering revolution is real.", "Scalability doesn't happen by accident."],
        "Staffing/Industry" => ["The technology talent landscape is evolving.", "Building great teams requires more than just hiring.", "The future of work is being reshaped by AI."],
        "Case Studies" => ["Let me share a real-world example.", "Theory is great. Results are better.", "Here's what we learned from a recent engagement."],
    ];

    $intro = $intros[$cat][array_rand($intros[$cat])] ?? "Here's an important trend to watch.";

    $body = "{$intro}\n\n";
    $body .= "𝐓𝐨𝐩𝐢𝐜: {$title}\n\n";
    $body .= "Three key insights from our work at Cloud Resources:\n\n";
    $body .= "1️⃣ The companies winning aren't moving fastest — they're building the strongest foundations.\n\n";
    $body .= "2️⃣ Technology choices matter less than architecture decisions. The right design pattern with any modern tool beats the wrong pattern with the \"best\" tool.\n\n";
    $body .= "3️⃣ The gap between POC and production is where most AI initiatives fail. That's exactly where we help enterprises succeed.\n\n";
    $body .= "At Cloud Resources, we've seen this pattern across dozens of enterprise engagements. The organizations that invest in architecture, governance, and talent — not just tools — are the ones delivering measurable AI ROI.\n\n";
    $body .= "What's your perspective? I'd love to hear from leaders navigating this space.\n\n";
    $body .= generateHashtags($cat);

    return $body;
}

function generateHashtags($cat) {
    $base = ['#CloudResources', '#EnterpriseAI'];
    $catTags = [
        'AI/ML' => ['#ArtificialIntelligence', '#MachineLearning', '#LLM', '#AIStrategy', '#GenerativeAI'],
        'Data Engineering' => ['#DataEngineering', '#DataArchitecture', '#BigData', '#DataPipelines', '#Analytics'],
        'Cloud/DevOps' => ['#CloudComputing', '#DevOps', '#Kubernetes', '#AWS', '#PlatformEngineering'],
        'Staffing/Industry' => ['#TechTalent', '#AIHiring', '#StaffAugmentation', '#FutureOfWork', '#TechLeadership'],
        'Case Studies' => ['#CaseStudy', '#AIinProduction', '#DigitalTransformation', '#Innovation'],
    ];
    $tags = array_merge($base, $catTags[$cat] ?? ['#Technology', '#Innovation']);
    shuffle($tags);
    return implode(' ', array_slice($tags, 0, 6));
}

function insertPost($db, $date, $dayName, $type, $title, $content, $hashtags, $pollOpts, $cat) {
    $stmt = $db->prepare('INSERT INTO linkedin_posts (post_date, day_name, post_type, title, content, hashtags, poll_options, category, status) VALUES (?,?,?,?,?,?,?,?,?)');
    $stmt->bindValue(1, $date); $stmt->bindValue(2, $dayName); $stmt->bindValue(3, $type);
    $stmt->bindValue(4, $title); $stmt->bindValue(5, $content); $stmt->bindValue(6, $hashtags);
    $stmt->bindValue(7, $pollOpts); $stmt->bindValue(8, $cat); $stmt->bindValue(9, 'draft');
    $stmt->execute();
}

// --- HANDLE ACTIONS ---
$message = '';

if (isset($_POST['action'])) {
    $action = $_POST['action'];

    if ($action === 'generate_week') {
        $weekStart = $_POST['week_start'] ?? date('Y-m-d', strtotime('monday this week'));
        $message = generateWeekContent($db, $weekStart, $articleTemplates, $pollTemplates, $articleBodies);
    }

    if ($action === 'mark_posted' && isset($_POST['post_id'])) {
        $db->exec("UPDATE linkedin_posts SET status='posted', posted_at=CURRENT_TIMESTAMP WHERE id=" . (int)$_POST['post_id']);
        $message = 'Post marked as posted.';
    }

    if ($action === 'delete_post' && isset($_POST['post_id'])) {
        $db->exec("DELETE FROM linkedin_posts WHERE id=" . (int)$_POST['post_id']);
        $message = 'Post deleted.';
    }

    if ($action === 'delete_week' && isset($_POST['week_start'])) {
        $ws = $_POST['week_start'];
        $we = date('Y-m-d', strtotime($ws . ' +6 days'));
        $db->exec("DELETE FROM linkedin_posts WHERE post_date >= '{$ws}' AND post_date <= '{$we}'");
        $message = "All posts for week of {$ws} deleted.";
    }

    if ($action === 'update_post' && isset($_POST['post_id'])) {
        $stmt = $db->prepare('UPDATE linkedin_posts SET content=:c, title=:t WHERE id=:id');
        $stmt->bindValue(':c', $_POST['post_content'], SQLITE3_TEXT);
        $stmt->bindValue(':t', $_POST['post_title'], SQLITE3_TEXT);
        $stmt->bindValue(':id', (int)$_POST['post_id'], SQLITE3_INTEGER);
        $stmt->execute();
        $message = 'Post updated.';
    }
}

// --- FETCH DATA ---
$currentWeek = $_GET['week'] ?? date('Y-m-d', strtotime('monday this week'));
$weekEnd = date('Y-m-d', strtotime($currentWeek . ' +6 days'));
$prevWeek = date('Y-m-d', strtotime($currentWeek . ' -7 days'));
$nextWeek = date('Y-m-d', strtotime($currentWeek . ' +7 days'));

$posts = [];
$r = $db->query("SELECT * FROM linkedin_posts WHERE post_date >= '{$currentWeek}' AND post_date <= '{$weekEnd}' ORDER BY post_date ASC, id ASC");
while ($row = $r->fetchArray(SQLITE3_ASSOC)) { $posts[] = $row; }

$totalPosts = $db->querySingle("SELECT COUNT(*) FROM linkedin_posts") ?: 0;
$totalPosted = $db->querySingle("SELECT COUNT(*) FROM linkedin_posts WHERE status='posted'") ?: 0;
$weekCount = $db->querySingle("SELECT COUNT(*) FROM linkedin_posts WHERE post_date >= '{$currentWeek}' AND post_date <= '{$weekEnd}'") ?: 0;

$editPost = null;
if (isset($_GET['edit']) && is_numeric($_GET['edit'])) {
    $estmt = $db->prepare('SELECT * FROM linkedin_posts WHERE id=:id');
    $estmt->bindValue(':id', (int)$_GET['edit'], SQLITE3_INTEGER);
    $editPost = $estmt->execute()->fetchArray(SQLITE3_ASSOC);
}

$db->close();

$weekLabel = date('M j', strtotime($currentWeek)) . ' — ' . date('M j, Y', strtotime($weekEnd));
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LinkedIn Content Calendar | Cloud Resources</title>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        *{margin:0;padding:0;box-sizing:border-box}
        body{font-family:'DM Sans',sans-serif;background:#f4f6fb;color:#0f172a}
        .nav{background:#0a1628;padding:16px 32px;display:flex;align-items:center;justify-content:space-between}
        .nav h1{color:#fff;font-size:18px}
        .nav-links{display:flex;gap:16px;align-items:center}
        .nav a{color:#94a3b8;font-size:13px;text-decoration:none}
        .nav a:hover{color:#fff}
        .nav a.active{color:#60a5fa}
        .container{max-width:1100px;margin:0 auto;padding:24px}
        .stats{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:24px}
        .stat{background:#fff;border-radius:12px;padding:20px;box-shadow:0 1px 4px rgba(0,0,0,.06)}
        .stat .num{font-size:32px;font-weight:700;color:#0052ff}
        .stat .lbl{font-size:13px;color:#64748b;margin-top:4px}
        .week-nav{display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;background:#fff;border-radius:12px;padding:16px 24px;box-shadow:0 1px 4px rgba(0,0,0,.06)}
        .week-nav h2{font-size:18px;font-weight:700}
        .week-nav-btns{display:flex;gap:8px;align-items:center}
        .btn{display:inline-flex;align-items:center;gap:6px;padding:10px 20px;background:#0052ff;color:#fff;border:none;border-radius:10px;font-size:13px;font-weight:600;cursor:pointer;text-decoration:none;transition:all .15s}
        .btn:hover{background:#003dd6}
        .btn-sm{padding:6px 14px;font-size:12px;border-radius:8px}
        .btn-outline{background:transparent;border:1px solid #e2e8f0;color:#64748b}
        .btn-outline:hover{border-color:#0052ff;color:#0052ff}
        .btn-green{background:#16a34a}.btn-green:hover{background:#15803d}
        .btn-red{background:#ef4444}.btn-red:hover{background:#dc2626}
        .btn-amber{background:#f59e0b}.btn-amber:hover{background:#d97706}
        .alert{padding:12px 20px;border-radius:10px;font-size:13px;font-weight:500;margin-bottom:16px}
        .alert-success{background:#dcfce7;color:#16a34a}
        .alert-blue{background:#dbeafe;color:#1d4ed8}
        .day-group{margin-bottom:24px}
        .day-header{font-size:15px;font-weight:700;color:#475569;margin-bottom:12px;display:flex;align-items:center;gap:8px}
        .day-header .date{font-weight:400;color:#94a3b8;font-size:13px}
        .post-card{background:#fff;border-radius:14px;padding:24px;box-shadow:0 1px 4px rgba(0,0,0,.06);margin-bottom:12px;border-left:4px solid #0052ff}
        .post-card.poll{border-left-color:#8b5cf6}
        .post-card.posted{border-left-color:#16a34a;opacity:.75}
        .post-meta{display:flex;align-items:center;gap:8px;margin-bottom:12px}
        .badge{display:inline-block;padding:3px 10px;border-radius:99px;font-size:11px;font-weight:600}
        .badge-blue{background:#dbeafe;color:#2563eb}
        .badge-purple{background:#f3e8ff;color:#7c3aed}
        .badge-green{background:#dcfce7;color:#16a34a}
        .badge-gray{background:#f1f5f9;color:#94a3b8}
        .badge-amber{background:#fef3c7;color:#d97706}
        .post-title{font-size:16px;font-weight:700;margin-bottom:10px}
        .post-content{font-size:13px;color:#475569;line-height:1.7;white-space:pre-wrap;max-height:200px;overflow:hidden;position:relative}
        .post-content.expanded{max-height:none}
        .post-content .fade{position:absolute;bottom:0;left:0;right:0;height:40px;background:linear-gradient(transparent,#fff)}
        .expand-btn{font-size:12px;color:#0052ff;cursor:pointer;margin-top:4px;font-weight:600;border:none;background:none}
        .poll-options{margin:12px 0;padding:0;list-style:none}
        .poll-options li{padding:10px 16px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;margin-bottom:6px;font-size:13px;font-weight:500}
        .post-actions{display:flex;gap:6px;margin-top:16px;flex-wrap:wrap}
        .copy-btn{position:relative}
        .copy-btn .tooltip{display:none;position:absolute;top:-30px;left:50%;transform:translateX(-50%);background:#0f172a;color:#fff;padding:4px 10px;border-radius:6px;font-size:11px;white-space:nowrap}
        .edit-card{background:#fff;border-radius:14px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,.1);margin-bottom:24px;border:2px solid #0052ff}
        .edit-card h3{font-size:16px;font-weight:700;margin-bottom:16px}
        .form-group{margin-bottom:12px}
        .form-group label{display:block;font-size:13px;font-weight:600;color:#475569;margin-bottom:6px}
        .form-group input,.form-group textarea{width:100%;padding:10px 14px;border:1px solid #e2e8f0;border-radius:10px;font-size:13px;font-family:inherit;outline:none}
        .form-group textarea{min-height:200px;resize:vertical;line-height:1.7}
        .form-group input:focus,.form-group textarea:focus{border-color:#0052ff;box-shadow:0 0 0 3px rgba(0,82,255,.08)}
        .form-actions{display:flex;gap:8px;justify-content:flex-end}
        .empty{text-align:center;padding:60px 20px;color:#94a3b8}
        .empty h3{font-size:18px;color:#64748b;margin-bottom:8px}
        @media(max-width:768px){.container{padding:16px}.stats{grid-template-columns:1fr}.post-actions{flex-direction:column}}
    </style>
</head>
<body>
    <div class="nav">
        <h1>Cloud Resources — LinkedIn Content</h1>
        <div class="nav-links">
            <a href="admin.php">Dashboard</a>
            <a href="admin.php?tab=jobs">Manage Jobs</a>
            <a href="linkedin.php" class="active">LinkedIn Content</a>
            <a href="admin.php?logout=1">Logout</a>
        </div>
    </div>
    <div class="container">
        <?php if(!empty($message)):?><div class="alert alert-success"><?=htmlspecialchars($message)?></div><?php endif;?>

        <div class="stats">
            <div class="stat"><div class="num"><?=$totalPosts?></div><div class="lbl">Total Posts Created</div></div>
            <div class="stat"><div class="num"><?=$totalPosted?></div><div class="lbl">Posted to LinkedIn</div></div>
            <div class="stat"><div class="num"><?=$weekCount?></div><div class="lbl">This Week's Posts</div></div>
        </div>

        <div class="week-nav">
            <a href="linkedin.php?week=<?=$prevWeek?>" class="btn btn-outline btn-sm">&larr; Previous</a>
            <h2>Week of <?=$weekLabel?></h2>
            <div class="week-nav-btns">
                <?php if($weekCount == 0):?>
                <form method="POST" style="display:inline"><input type="hidden" name="action" value="generate_week"><input type="hidden" name="week_start" value="<?=$currentWeek?>"><button type="submit" class="btn btn-green">Generate Content for This Week</button></form>
                <?php else:?>
                <form method="POST" style="display:inline" onsubmit="return confirm('Delete all posts for this week?')"><input type="hidden" name="action" value="delete_week"><input type="hidden" name="week_start" value="<?=$currentWeek?>"><button type="submit" class="btn btn-sm btn-red">Clear Week</button></form>
                <?php endif;?>
                <a href="linkedin.php?week=<?=$nextWeek?>" class="btn btn-outline btn-sm">Next &rarr;</a>
            </div>
        </div>

        <?php if($editPost):?>
        <div class="edit-card">
            <h3>Edit Post — <?=htmlspecialchars($editPost['title'])?></h3>
            <form method="POST">
                <input type="hidden" name="action" value="update_post">
                <input type="hidden" name="post_id" value="<?=$editPost['id']?>">
                <div class="form-group"><label>Title</label><input type="text" name="post_title" value="<?=htmlspecialchars($editPost['title'])?>"></div>
                <div class="form-group"><label>Content</label><textarea name="post_content"><?=htmlspecialchars($editPost['content'])?></textarea></div>
                <div class="form-actions"><a href="linkedin.php?week=<?=$currentWeek?>" class="btn btn-outline">Cancel</a><button type="submit" class="btn">Save Changes</button></div>
            </form>
        </div>
        <?php endif;?>

        <?php if(empty($posts)):?>
            <div class="empty">
                <h3>No Content for This Week</h3>
                <p>Click "Generate Content for This Week" to create articles and polls.</p>
            </div>
        <?php else:
            $byDay = [];
            foreach($posts as $p) { $byDay[$p['post_date']][] = $p; }
            foreach($byDay as $date => $dayPosts):
                $dayLabel = date('l, M j', strtotime($date));
        ?>
            <div class="day-group">
                <div class="day-header"><?=$dayLabel?> <span class="date">(<?=count($dayPosts)?> post<?=count($dayPosts)>1?'s':''?>)</span></div>
                <?php foreach($dayPosts as $p):
                    $isPosted = $p['status'] === 'posted';
                    $isPoll = $p['post_type'] === 'poll';
                ?>
                <div class="post-card <?=$isPoll?'poll':''?> <?=$isPosted?'posted':''?>">
                    <div class="post-meta">
                        <span class="badge <?=$isPoll?'badge-purple':'badge-blue'?>"><?=$isPoll?'Poll':'Article'?></span>
                        <span class="badge badge-amber"><?=htmlspecialchars($p['category'])?></span>
                        <?php if($isPosted):?><span class="badge badge-green">Posted ✓</span><?php else:?><span class="badge badge-gray">Draft</span><?php endif;?>
                    </div>
                    <div class="post-title"><?=htmlspecialchars($p['title'])?></div>
                    <div class="post-content" id="content-<?=$p['id']?>"><?=htmlspecialchars($p['content'])?><div class="fade" id="fade-<?=$p['id']?>"></div></div>
                    <button class="expand-btn" onclick="toggleContent(<?=$p['id']?>)" id="expand-<?=$p['id']?>">Show more</button>

                    <?php if($isPoll && !empty($p['poll_options'])):
                        $opts = json_decode($p['poll_options'], true);
                        if($opts):?>
                    <ul class="poll-options">
                        <?php foreach($opts as $opt):?><li>○ <?=htmlspecialchars($opt)?></li><?php endforeach;?>
                    </ul>
                    <?php endif;endif;?>

                    <div class="post-actions">
                        <button class="btn btn-sm copy-btn" onclick="copyPost(<?=$p['id']?>)">
                            📋 Copy to Clipboard
                            <span class="tooltip" id="tooltip-<?=$p['id']?>">Copied!</span>
                        </button>
                        <a href="linkedin.php?week=<?=$currentWeek?>&edit=<?=$p['id']?>" class="btn btn-sm btn-outline">Edit</a>
                        <?php if(!$isPosted):?>
                        <form method="POST" style="display:inline"><input type="hidden" name="action" value="mark_posted"><input type="hidden" name="post_id" value="<?=$p['id']?>"><button type="submit" class="btn btn-sm btn-green">Mark as Posted</button></form>
                        <?php endif;?>
                        <form method="POST" style="display:inline" onsubmit="return confirm('Delete this post?')"><input type="hidden" name="action" value="delete_post"><input type="hidden" name="post_id" value="<?=$p['id']?>"><button type="submit" class="btn btn-sm btn-red">Delete</button></form>
                    </div>
                </div>
                <?php endforeach;?>
            </div>
        <?php endforeach;endif;?>
    </div>

    <script>
    function toggleContent(id) {
        const el = document.getElementById('content-' + id);
        const fade = document.getElementById('fade-' + id);
        const btn = document.getElementById('expand-' + id);
        if (el.classList.contains('expanded')) {
            el.classList.remove('expanded');
            fade.style.display = '';
            btn.textContent = 'Show more';
        } else {
            el.classList.add('expanded');
            fade.style.display = 'none';
            btn.textContent = 'Show less';
        }
    }

    function copyPost(id) {
        const el = document.getElementById('content-' + id);
        const text = el.innerText.replace('Show more', '').replace('Show less', '').trim();
        navigator.clipboard.writeText(text).then(() => {
            const tip = document.getElementById('tooltip-' + id);
            tip.style.display = 'block';
            setTimeout(() => { tip.style.display = 'none'; }, 2000);
        });
    }
    </script>
</body>
</html>
