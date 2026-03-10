import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Brain,
  Code2,
  Cloud,
  Server,
  Database,
  Briefcase,
  Target,
  Building2,
  Award,
  Globe,
  Handshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Technology Staffing | Cloud Resources",
  description:
    "Cloud Resources has placed elite technology talent since 2016. AI/ML engineers, Java developers, cloud architects, DevOps specialists, data engineers, and business analysts across financial services, healthcare, insurance, defense, and retail. C2C, W2, 1099, contract-to-hire, and direct placement nationwide.",
};

const verticals = [
  "Financial Services",
  "Healthcare",
  "Insurance",
  "Defense",
  "Retail",
  "Energy",
];

const engagementModels = [
  "C2C",
  "W2",
  "1099",
  "Contract-to-Hire",
  "Direct Placement",
];

const problems = [
  {
    problem: "Critical Talent Gaps in AI/ML, Cloud, and Emerging Technologies",
    description:
      "Your engineering leadership has approved the AI initiative, the cloud migration budget is secured, and the project timeline is aggressive. But the roles have been open for four months. Your internal recruiting team is sourcing from the same LinkedIn pools as every other company competing for the same scarce talent — GPT-4 fine-tuning specialists, Kubernetes platform engineers, and data scientists with production ML experience. The candidates who do respond are fielding five competing offers, and the ones you interview lack the specific combination of skills your project requires. Every week the positions remain unfilled, the project timeline slips further, technical debt accumulates as existing engineers cover the gaps, and the competitive window narrows.",
    solution:
      "We maintain a continuously cultivated network of pre-vetted technology professionals across AI/ML, cloud, DevOps, data engineering, and enterprise development — built over a decade of placement relationships, not scraped from job boards. Our technical screening process goes beyond resume keyword matching: candidates are evaluated through architecture discussions, code walkthroughs, and scenario-based assessments that validate they can deliver in your specific technology stack and organizational context. When you need a PyTorch engineer who has deployed production ML pipelines on Kubernetes, we don't start a search — we call three people we've already placed and verified.",
  },
  {
    problem: "High Recruiter Turnover Losing Institutional Knowledge",
    description:
      "Your staffing vendor assigned a recruiter who spent three months learning your technology stack, understanding your team culture, and building relationships with your hiring managers. Then that recruiter left for a competitor, and you're starting over with someone new who asks the same questions, makes the same mistakes, and takes another three months to become effective. The vendor treats recruiters as interchangeable — but the institutional knowledge of what makes a candidate successful in your specific environment is irreplaceable. You've essentially been paying for recruiter onboarding cycles instead of productive placement outcomes, and the quality variance between your best and worst placements directly correlates with whether the assigned recruiter actually understood your organization.",
    solution:
      "Cloud Resources is a founder-led staffing organization where relationships and institutional knowledge are retained at the leadership level, not dependent on individual recruiter tenure. Our account management approach ensures that the understanding of your technology stack, team dynamics, cultural preferences, and success patterns is documented, systematized, and retained across every engagement — not stored in a single recruiter's head. When team changes occur, the transition is seamless because the knowledge lives in our operational systems, not in tribal memory. Clients who've worked with us for five or more years report that our understanding of their needs deepens continuously, compounding in value rather than resetting with every personnel change.",
  },
  {
    problem: "Slow Time-to-Fill for Critical Engineering Positions",
    description:
      "The industry average time-to-fill for a senior software engineer is 45–60 days. For specialized roles — machine learning engineers, cloud security architects, SRE leads — it stretches to 90 days or more. Every day those positions remain open, your existing team absorbs the workload, your project timelines slip, and the opportunity cost compounds. You've tried multiple staffing agencies, and they all follow the same playbook: blast the job description to their database, send over a stack of marginally relevant resumes, and hope that volume compensates for precision. You spend more time reviewing unqualified candidates than you would have spent just recruiting directly, and the 'time savings' of using a staffing partner evaporate when you're rejecting 80% of submittals at the resume screening stage.",
    solution:
      "Our average time-to-fill is under 15 days because we've inverted the traditional staffing model. Instead of starting with a job description and searching for candidates, we maintain ongoing relationships with technology professionals across every specialization — understanding their current roles, career aspirations, technology preferences, and availability windows before your position even opens. When a role comes in, we match against professionals we already know, not databases we're searching for the first time. Our submittal-to-interview ratio exceeds 80% because every candidate we present has been technically vetted, culturally assessed, and confirmed interested before their resume reaches your hiring manager's inbox.",
  },
  {
    problem: "Cultural Misalignment Between Placed Resources and Client Teams",
    description:
      "The candidate's resume was impressive — ten years of Java experience, AWS certifications, strong references. But three weeks into the engagement, it's clear something isn't working. They're technically competent but can't operate in your team's collaborative, sprint-driven workflow. They push back on code reviews, resist pair programming, and communicate in a style that creates friction with your existing engineers. The staffing vendor matched on technical keywords but completely missed the cultural, communication, and work-style factors that determine whether a placement actually succeeds in your specific environment. Now you're facing the disruption of ending the engagement, the sunk cost of onboarding, and the timeline impact of restarting the search — a worse outcome than if the position had simply remained open.",
    solution:
      "Technical skills get candidates through our screening process, but cultural and work-style alignment determines whether we present them to your team. Our assessment methodology evaluates communication patterns, collaboration preferences, learning orientation, autonomy comfort level, and work-style flexibility — matching not just what a candidate can do, but how they work. We invest significant time understanding your team's operating rhythm, communication norms, and cultural values before we present a single candidate. The result is a 95% client satisfaction rate and engagement renewal rates that demonstrate our placements don't just fill seats — they integrate into teams and deliver sustained productivity from the first sprint.",
  },
];

const serviceOfferings = [
  {
    title: "AI/ML & Data Science Talent",
    description:
      "The AI talent market is the most competitive in technology — every company wants machine learning engineers, but the supply of professionals with production ML experience (not just Kaggle competitions and research papers) is vanishingly small. We specialize in placing AI/ML engineers who have deployed models to production, built training pipelines that retrain automatically, implemented monitoring that catches drift before it degrades performance, and worked within the organizational constraints of regulated industries. These aren't researchers who need six months of engineering mentorship before they're productive — they're ML engineers who ship production systems.",
    includes: [
      {
        keyword: "LLM & Generative AI Engineers",
        detail:
          "specialists in GPT-4, Claude, and open-source LLM fine-tuning, prompt engineering, RAG architecture, and production deployment of generative AI applications — engineers who have built conversational AI, document processing, and code generation systems that serve real users at enterprise scale.",
      },
      {
        keyword: "ML Platform Engineers",
        detail:
          "professionals who build the infrastructure that production ML runs on — feature stores, model serving APIs, training pipeline orchestration, experiment tracking with MLflow, and automated retraining workflows that keep models current without manual intervention.",
      },
      {
        keyword: "Computer Vision & NLP Specialists",
        detail:
          "PyTorch and TensorFlow engineers with domain expertise in image classification, object detection, document understanding, named entity recognition, and sentiment analysis — experienced in building inference pipelines that process millions of inputs daily with sub-second latency.",
      },
      {
        keyword: "Data Scientists & Analytics Engineers",
        detail:
          "scikit-learn, pandas, and statistical modeling professionals who bridge the gap between business questions and quantitative answers — building dashboards, forecasting models, A/B test frameworks, and decision support systems that drive measurable business outcomes.",
      },
      {
        keyword: "MLOps & Model Lifecycle Specialists",
        detail:
          "engineers who own the operational side of machine learning — drift detection, model monitoring, automated retraining, deployment strategies, and governance frameworks that keep ML systems reliable, compliant, and continuously improving in production.",
      },
    ],
    outcomes:
      "Our AI/ML placements have deployed production models serving thousands of predictions per day, built multi-agent ML systems with Bayesian weight updating, and implemented MLOps pipelines that maintain model accuracy within 2% of peak performance continuously. These are engineers who ship ML that works — not prototypes that impress in demos and stall in production.",
  },
  {
    title: "Java & Enterprise Development",
    description:
      "Java remains the backbone of enterprise software — powering the financial transaction systems, healthcare platforms, insurance processing engines, and e-commerce backends that run the largest organizations in the world. But the Java ecosystem has evolved dramatically, and the difference between a developer who writes Java 8 code in a monolithic application and one who builds reactive microservices with Spring Boot 3, virtual threads, and cloud-native patterns is the difference between maintaining legacy systems and building the next generation. We place Java engineers who understand both worlds — capable of modernizing existing codebases while building new services with modern patterns.",
    includes: [
      {
        keyword: "Spring Boot & Microservices Architects",
        detail:
          "senior engineers who design and build microservices architectures with Spring Boot, Spring Cloud, and Spring Security — handling service discovery, circuit breaking, distributed tracing, and API gateway patterns for systems serving millions of requests per day.",
      },
      {
        keyword: "Full-Stack Java/React Engineers",
        detail:
          "developers proficient in both server-side Java and modern frontend frameworks (React, Angular, TypeScript) — building end-to-end features from database schema through REST API to responsive UI without requiring separate frontend and backend specialists.",
      },
      {
        keyword: "API & Integration Specialists",
        detail:
          "engineers experienced in RESTful API design, GraphQL, gRPC, event-driven integration patterns, and enterprise service bus architectures — connecting internal systems, third-party services, and partner APIs with production-grade reliability, security, and documentation.",
      },
      {
        keyword: "Legacy Modernization Engineers",
        detail:
          "specialists in migrating monolithic Java applications to microservices — strangler fig patterns, database decomposition, shared-nothing architectures, and incremental migration strategies that modernize systems without the risk of big-bang rewrites.",
      },
      {
        keyword: "Performance & Scalability Engineers",
        detail:
          "JVM tuning, connection pool optimization, caching strategy, database query optimization, and load testing professionals who ensure Java applications perform reliably under production traffic patterns — from steady-state operations through peak load events.",
      },
    ],
    outcomes:
      "Our Java placements integrate into enterprise engineering teams within the first week and contribute production-ready code by sprint two. Clients consistently report that our Java developers bring not just technical proficiency, but the enterprise software engineering discipline — code reviews, testing practices, documentation habits, and production readiness standards — that distinguishes senior engineers from developers who simply know the language.",
  },
  {
    title: "Cloud Architecture & Engineering",
    description:
      "Cloud migration and platform engineering require a rare combination of deep provider-specific expertise and broad architectural judgment. Your cloud architect needs to know not just that AWS offers 200+ services, but which five services are the right answer for your specific workload, compliance requirements, cost constraints, and operational maturity. We place AWS, Azure, and GCP certified professionals who have designed and operated cloud platforms at enterprise scale — not professionals who passed a certification exam but haven't built anything beyond tutorial projects. These are architects who have migrated production workloads, optimized six-figure monthly cloud bills, and designed disaster recovery strategies that have been tested under real failure conditions.",
    includes: [
      {
        keyword: "Solutions Architects",
        detail:
          "AWS Solutions Architect Professional, Azure Solutions Architect Expert, and GCP Professional Cloud Architect certified professionals who design scalable, secure, cost-optimized cloud environments — with production experience across multi-account strategies, landing zones, and enterprise governance frameworks.",
      },
      {
        keyword: "Cloud Infrastructure Engineers",
        detail:
          "Terraform, CloudFormation, and Pulumi specialists who implement infrastructure-as-code for production cloud environments — VPC design, security group management, IAM policy architecture, and automated provisioning pipelines that eliminate manual console operations.",
      },
      {
        keyword: "Cloud Security Specialists",
        detail:
          "professionals focused on cloud security posture management, identity and access management, encryption strategy, compliance automation (SOC 2, HIPAA, PCI), and incident response — ensuring cloud environments meet enterprise security requirements without sacrificing development velocity.",
      },
      {
        keyword: "Migration & Modernization Leads",
        detail:
          "engineers experienced in planning and executing large-scale cloud migrations — application assessment, dependency mapping, migration sequencing, data replication strategies, and cutover procedures for moving hundreds of workloads from on-premise data centers to cloud providers with minimal downtime.",
      },
      {
        keyword: "FinOps & Cost Optimization Engineers",
        detail:
          "specialists who analyze cloud spending patterns, implement tagging strategies, optimize reserved instance portfolios, identify waste, and build chargeback reporting — reducing cloud costs by 30–40% while maintaining performance SLAs and giving finance teams the visibility they need.",
      },
    ],
    outcomes:
      "Our cloud architecture placements have designed and operated platforms processing billions of transactions annually, managed cloud environments exceeding $10M in annual spend, and executed zero-downtime migrations of mission-critical workloads across all three major cloud providers. These are professionals who treat cloud architecture as an engineering discipline, not a checkbox exercise.",
  },
  {
    title: "DevOps & Site Reliability Engineering",
    description:
      "The demand for DevOps and SRE talent has outpaced supply for a decade, and the skills gap continues to widen as infrastructure complexity grows. Your organization needs engineers who don't just know Kubernetes — they've operated multi-cluster environments at scale, debugged networking issues under production pressure, designed auto-scaling strategies that handle 10x traffic spikes, and built CI/CD pipelines that deploy fifty times a day without breaking production. We place DevOps and SRE professionals who have earned their expertise through years of on-call rotations, incident response, and the hard-won operational judgment that only comes from keeping production running at 99.99%.",
    includes: [
      {
        keyword: "Kubernetes Platform Engineers",
        detail:
          "EKS, GKE, and AKS specialists who build and operate production Kubernetes platforms — cluster architecture, namespace governance, resource quotas, network policies, auto-scaling, security hardening, and the operational runbooks that keep containerized workloads running reliably at scale.",
      },
      {
        keyword: "CI/CD Pipeline Engineers",
        detail:
          "GitHub Actions, GitLab CI, Jenkins, and ArgoCD specialists who build deployment pipelines with automated testing, security scanning, canary deployments, and rollback automation — enabling development teams to ship code confidently at any frequency.",
      },
      {
        keyword: "Infrastructure-as-Code Specialists",
        detail:
          "Terraform, Ansible, and Pulumi engineers who codify entire infrastructure stacks — from network topology through application deployment — with modular, tested, version-controlled configurations that make infrastructure changes as reviewable as application code.",
      },
      {
        keyword: "Observability & Monitoring Engineers",
        detail:
          "Prometheus, Grafana, Datadog, and OpenTelemetry specialists who build comprehensive observability stacks — metrics collection, log aggregation, distributed tracing, alerting strategies, and dashboards that give engineering teams real-time visibility into system health and performance.",
      },
      {
        keyword: "Site Reliability Engineers",
        detail:
          "SRE professionals experienced in SLO/SLI frameworks, error budget policies, capacity planning, incident response automation, and blameless postmortem processes — building the operational practices that make reliability a measurable, improvable engineering discipline.",
      },
    ],
    outcomes:
      "Our DevOps and SRE placements have built platforms achieving 99.99% uptime, reduced deployment lead times from weeks to hours, implemented observability stacks that cut MTTR by 70%, and established SRE practices that resolved the tension between shipping speed and production stability. These engineers bring not just tool proficiency, but the operational maturity that comes from years of keeping mission-critical systems running.",
  },
  {
    title: "Data Engineering & Analytics",
    description:
      "Data engineering is where raw information becomes business intelligence — and the difference between a data engineer who can write SQL and one who can architect a production data platform serving petabytes of data to hundreds of downstream consumers is enormous. We place data engineers and analytics professionals who have built the pipelines, warehouses, and analytics platforms that power data-driven decision making at enterprise scale. From dbt transformation layers and Airflow orchestration to Snowflake optimization and real-time streaming — professionals who build data infrastructure that is reliable, scalable, and maintainable.",
    includes: [
      {
        keyword: "Data Platform Architects",
        detail:
          "senior engineers who design end-to-end data platform architectures — ingestion strategies, transformation layers, warehouse modeling, serving patterns, and governance frameworks — with experience across Snowflake, Databricks, BigQuery, and Redshift environments at enterprise scale.",
      },
      {
        keyword: "Pipeline Engineers",
        detail:
          "Python, SQL, dbt, and Apache Airflow specialists who build production data pipelines with idempotent transformations, automated testing, lineage tracking, and SLA monitoring — engineers who treat data pipelines with the same engineering rigor as application code.",
      },
      {
        keyword: "Analytics Engineers",
        detail:
          "dbt and SQL specialists who bridge data engineering and analytics — building semantic layers, metric definitions, and transformation models that ensure business stakeholders access consistent, trustworthy data through self-service tools without requiring engineering support for every query.",
      },
      {
        keyword: "Streaming & Real-Time Engineers",
        detail:
          "Kafka, Spark Streaming, and Flink specialists who build event-driven data architectures — real-time ingestion, stream processing, materialized views, and change data capture pipelines that deliver data to consumers within seconds of occurrence.",
      },
      {
        keyword: "BI & Visualization Specialists",
        detail:
          "Tableau, Looker, Power BI, and Streamlit professionals who design interactive dashboards and analytical applications — translating complex data models into intuitive visualizations that enable non-technical stakeholders to explore data and discover insights independently.",
      },
    ],
    outcomes:
      "Our data engineering placements have built platforms processing terabytes of data daily, reduced warehouse query costs by 60% through optimization and modeling improvements, and implemented real-time streaming architectures that transformed batch-dependent organizations into data-driven enterprises with sub-minute data freshness. These are engineers who understand that data infrastructure is only valuable when it's reliable enough for people to trust the numbers it produces.",
  },
  {
    title: "Business Analysis & Program Management",
    description:
      "Technology projects fail more often from requirements misunderstanding than from technical complexity. The gap between what business stakeholders need and what engineering teams build is where projects go off track — and bridging that gap requires professionals who speak both languages fluently. We place business analysts, product owners, scrum masters, and program managers who have managed complex technology programs across regulated industries — professionals who can facilitate requirements workshops with business executives in the morning and participate meaningfully in sprint planning with engineers in the afternoon. They don't just document requirements; they ensure that what gets built is what the business actually needs.",
    includes: [
      {
        keyword: "Senior Business Analysts",
        detail:
          "experienced BAs who conduct stakeholder interviews, facilitate requirements workshops, create process maps and data flow diagrams, write user stories with acceptance criteria, and manage requirements traceability throughout the project lifecycle — with domain expertise across financial services, healthcare, insurance, and defense.",
      },
      {
        keyword: "Product Owners & Managers",
        detail:
          "Certified Scrum Product Owners who manage product backlogs, prioritize features based on business value, define release plans, and make the daily trade-off decisions that keep development teams focused on delivering the highest-impact work first — balancing stakeholder demands, technical debt, and market timing.",
      },
      {
        keyword: "Scrum Masters & Agile Coaches",
        detail:
          "Certified Scrum Masters and SAFe Agilists who facilitate Scrum ceremonies, remove impediments, coach teams on Agile practices, and drive continuous improvement — with experience scaling Agile across multi-team programs in enterprise environments where organizational complexity is the primary challenge.",
      },
      {
        keyword: "Program & Portfolio Managers",
        detail:
          "PMP-certified program managers who coordinate multi-team technology initiatives — managing dependencies, risks, budgets, timelines, and stakeholder communications across programs with dozens of workstreams and hundreds of team members.",
      },
      {
        keyword: "QA & Test Engineering Leads",
        detail:
          "quality assurance professionals who design test strategies, build automation frameworks, establish quality gates, and ensure that delivered software meets functional, performance, and security requirements — with experience in both Agile testing practices and enterprise-scale quality management.",
      },
    ],
    outcomes:
      "Our BA and PM placements have managed technology programs with budgets exceeding $50M, facilitated requirements for regulatory compliance initiatives across financial services and healthcare, and implemented Agile transformations that doubled development team velocity within six months. These are professionals who deliver clarity in complex environments — ensuring technology investments produce the business outcomes they were funded to achieve.",
  },
];

const capabilities = [
  {
    icon: Brain,
    title: "AI/ML Engineers & Data Scientists",
    description:
      "GPT-4, PyTorch, scikit-learn, and TensorFlow specialists who build production ML pipelines, train models, and deploy AI systems. From LLM fine-tuning and RAG architecture to computer vision and reinforcement learning — engineers who ship ML that works.",
  },
  {
    icon: Code2,
    title: "Java & Full-Stack Developers",
    description:
      "Java, Spring Boot, React, Angular, and Node.js developers with enterprise experience. Microservices architectures, REST APIs, legacy modernization, and full-stack engineering — production-quality code from day one with enterprise engineering discipline.",
  },
  {
    icon: Cloud,
    title: "Cloud Architects & Engineers",
    description:
      "AWS, Azure, and GCP certified professionals who design scalable, secure, cost-optimized cloud environments. Solutions architects, infrastructure engineers, migration leads, and cloud security specialists across all major providers.",
  },
  {
    icon: Server,
    title: "DevOps & SRE Specialists",
    description:
      "Kubernetes, Terraform, CI/CD, and observability experts who build the platforms that keep production running at 99.99%. Site reliability engineers and DevOps professionals skilled in the modern infrastructure stack with operational maturity.",
  },
  {
    icon: Database,
    title: "Data Engineers & Analysts",
    description:
      "SQL, Python, Spark, dbt, Snowflake, and Databricks specialists who architect data pipelines, build analytics platforms, and deliver insights. From batch ETL to real-time streaming — data professionals who build infrastructure you can trust.",
  },
  {
    icon: Briefcase,
    title: "Business Analysts & Program Managers",
    description:
      "Agile, Scrum, and JIRA-certified professionals who bridge business and technology. Requirements gathering, sprint planning, stakeholder management, and enterprise program delivery across complex, regulated organizations.",
  },
];

const technologies = [
  "Java",
  "Python",
  "TypeScript",
  "AWS",
  "Azure",
  "GCP",
  "Kubernetes",
  "React",
  "Angular",
  "Spring Boot",
  ".NET",
  "Salesforce",
  "Snowflake",
  "Databricks",
];

const metrics = [
  { value: "500+", label: "Consultants Placed" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "<15", label: "Days Avg Placement" },
  { value: "10+", label: "Years Heritage" },
];

const heritageHighlights = [
  {
    icon: Building2,
    title: "Founded in 2016",
    description:
      "Technology staffing isn't a recent addition — it's the business Cloud Resources was founded on. A decade of placing elite technology talent has built the relationships, processes, and institutional knowledge that large staffing agencies simply cannot replicate.",
  },
  {
    icon: Award,
    title: "Fortune 500 to Startups",
    description:
      "Our client base spans Fortune 500 financial institutions requiring rigorous compliance and security clearances to growth-stage startups where every hire needs to wear multiple hats and ship product on day one. We calibrate our approach to your scale.",
  },
  {
    icon: Globe,
    title: "Nationwide Placement",
    description:
      "Placement capabilities across the entire United States — remote, hybrid, and on-site engagements in every major technology market. Our network extends beyond coastal tech hubs to the growing technology centers across the Southeast, Midwest, and Southwest.",
  },
  {
    icon: Handshake,
    title: "Flexible Engagement Models",
    description:
      "C2C, W2, 1099, Contract-to-Hire, and Direct Placement — every engagement model your organization requires, with compliance, payroll, and benefits administration handled seamlessly so you focus on the work, not the paperwork.",
  },
];

const enterpriseTechGroups = [
  {
    category: "Languages & Frameworks",
    description:
      "Core programming languages and application frameworks our talent specializes in.",
    techs: ["Java", "Python", "TypeScript", "React", "Angular", "Spring Boot", ".NET"],
  },
  {
    category: "Cloud Platforms",
    description:
      "Enterprise cloud infrastructure across all major providers.",
    techs: ["AWS", "Azure", "GCP", "Kubernetes"],
  },
  {
    category: "Data & Analytics",
    description:
      "Data platform technologies from warehouse to visualization.",
    techs: ["Snowflake", "Databricks", "Spark", "dbt", "Tableau"],
  },
  {
    category: "DevOps & Infrastructure",
    description:
      "Modern infrastructure tooling and site reliability engineering.",
    techs: ["Terraform", "Docker", "CI/CD", "Prometheus", "Grafana"],
  },
];

export default function TechnologyStaffingPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="hero-dark relative pt-32 pb-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0a1628 0%, #0d2847 50%, #0f3460 100%)",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
                SERVICES
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Technology Staffing
              </h1>
              <p className="mt-6 text-lg leading-relaxed max-w-2xl text-slate-300">
                Cloud Resources has been placing elite technology talent since
                2016 — and staffing remains the foundation of everything we
                build. A decade of IT staffing expertise, combined with the
                technical depth of a firm that builds production AI/ML systems,
                data platforms, and cloud-native infrastructure, means we
                don&apos;t just match resumes to job descriptions. We understand
                the technologies your candidates will work with because we build
                with them every day. AI/ML engineers, Java developers, cloud
                architects, DevOps specialists, data engineers, full-stack
                developers, and business analysts — placed nationwide across
                financial services, healthcare, insurance, defense, retail, and
                energy with engagement models that fit every organizational
                structure.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cyan text-white font-semibold hover:bg-blue transition-colors"
                >
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 18%, black 75%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 82%, transparent 100%)', maskComposite: 'intersect', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 18%, black 75%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 82%, transparent 100%)', WebkitMaskComposite: 'source-in' }}>
              <img src="/images/service-technology-staffing.png" alt="" className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative py-12 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((m) => (
              <div key={m.label} className="border-l-4 border-cyan pl-6">
                <div className="text-3xl sm:text-4xl font-extrabold text-cyan">
                  {m.value}
                </div>
                <div className="text-sm text-text-secondary mt-1">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Division Heritage */}
      <section className="relative py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
              Our Foundation
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
              Core Division{" "}
              <span className="gradient-text">Heritage</span>
            </h2>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
              Technology staffing isn&apos;t a side offering — it&apos;s where
              Cloud Resources started and remains the cornerstone of our
              business. A decade of placing elite talent has built the
              relationships, operational discipline, and deep technology
              understanding that define who we are.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {heritageHighlights.map((item) => (
              <div key={item.title} className="gradient-border p-8 hover-lift">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue/20 to-cyan/20 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-cyan" />
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 gradient-border p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-2xl">
                <p className="text-text-secondary leading-relaxed">
                  What makes Cloud Resources different from every other staffing
                  firm is that we are also a technology company. We build
                  production AI/ML systems, architect data platforms, and deploy
                  cloud-native infrastructure. When we evaluate a candidate&apos;s
                  Kubernetes experience or assess whether an ML engineer can
                  deploy models to production, we&apos;re drawing on the same
                  expertise we use to build those systems for our own clients.
                  This dual identity — staffing firm and technology
                  consultancy — gives us a technical screening depth that
                  traditional staffing agencies fundamentally cannot match.
                </p>
              </div>
              <div className="flex flex-col gap-4 shrink-0">
                <div>
                  <span className="text-xs font-semibold text-text-muted tracking-wider uppercase">
                    Industry Verticals
                  </span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {verticals.map((v) => (
                      <span
                        key={v}
                        className="inline-flex items-center gap-1.5 text-sm text-text-secondary"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan flex-shrink-0" />
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-xs font-semibold text-text-muted tracking-wider uppercase">
                    Engagement Models
                  </span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {engagementModels.map((em) => (
                      <span
                        key={em}
                        className="px-3 py-1 text-xs font-medium text-text-secondary border border-border rounded-full bg-navy"
                      >
                        {em}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="relative py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-cyan/10 text-cyan text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Challenges
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Problems We <span className="gradient-text">Solve</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl">
            Staffing failures are rarely about candidate availability — they&apos;re
            about process, knowledge, speed, and cultural understanding. These
            are the patterns we see breaking down at organizations of every
            size — and the approaches we&apos;ve refined over a decade to
            eliminate them.
          </p>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {problems.map((p) => (
              <div key={p.problem} className="gradient-border p-8 hover-lift">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-red-500" />
                </div>
                <span className="text-xs font-semibold text-red-500 uppercase tracking-wider mt-4 inline-block">
                  CHALLENGE
                </span>
                <h3 className="text-lg font-bold text-text-primary mt-1">
                  {p.problem}
                </h3>
                <p className="text-text-secondary leading-relaxed mt-3">
                  {p.description}
                </p>
                <div className="bg-emerald-500/5 rounded-lg p-4 mt-4">
                  <span className="text-xs font-semibold text-emerald-500 uppercase tracking-wider">
                    OUR SOLUTION
                  </span>
                  <p className="text-text-secondary leading-relaxed mt-2">
                    {p.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions & Service Offerings */}
      <section className="relative py-24 bg-navy border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-cyan/10 text-cyan text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            What We Deliver
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Solutions &{" "}
            <span className="gradient-text">Service Offerings</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl">
            From AI/ML specialists and cloud architects to enterprise Java
            developers and program managers — we place elite technology talent
            across every layer of the modern engineering stack. Each practice
            area is backed by technical screening expertise that comes from
            building these systems ourselves, not just reading about them on
            resumes.
          </p>
          <div className="mt-12 space-y-12">
            {serviceOfferings.map((offering, idx) => (
              <div
                key={offering.title}
                className="relative pl-8 border-l-[3px] border-cyan"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan to-blue text-white flex items-center justify-center text-sm font-bold">
                    {idx + 1}
                  </span>
                  <h3 className="text-xl font-bold text-text-primary">
                    {offering.title}
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {offering.description}
                </p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan uppercase tracking-wider mb-4">
                    What This Includes
                  </h4>
                  <ul className="space-y-3">
                    {offering.includes.map((item) => (
                      <li
                        key={item.keyword}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                        <span className="text-text-secondary leading-relaxed">
                          <span className="font-semibold text-text-primary">
                            {item.keyword}:
                          </span>{" "}
                          {item.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-border pt-4">
                  <h4 className="text-sm font-semibold text-cyan uppercase tracking-wider mb-2">
                    Outcomes
                  </h4>
                  <p className="text-text-secondary leading-relaxed italic">
                    {offering.outcomes}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="relative py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
            Capabilities
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Key <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl">
            Contract (C2C, W2, 1099), contract-to-hire, and direct placement
            across every layer of the modern engineering stack — from AI research
            and cloud infrastructure to enterprise application development and
            program management. Technical screening by engineers who build these
            systems, not recruiters who read about them.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="gradient-border p-8 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue/20 to-cyan/20 flex items-center justify-center mb-5">
                  <cap.icon className="w-6 h-6 text-cyan" />
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-3">
                  {cap.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="relative py-24 bg-navy border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
            Expertise
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Technologies We <span className="gradient-text">Staff</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl">
            Our placement expertise spans the complete modern technology
            landscape — from enterprise Java and .NET through cloud-native
            infrastructure and cutting-edge AI/ML frameworks. We staff the
            technologies that power production systems, not yesterday&apos;s
            trends.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2.5 text-sm font-medium text-text-secondary border border-border rounded-full bg-navy hover:border-cyan/30 hover:text-cyan transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Technology Expertise */}
      <section className="relative py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-cyan/10 text-cyan text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            FEATURED
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Enterprise Technology{" "}
            <span className="gradient-text">Expertise</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl">
            Deep specialization across the full technology landscape — from
            languages and frameworks to cloud platforms, data infrastructure, and
            DevOps tooling.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseTechGroups.map((group) => (
              <div
                key={group.category}
                className="gradient-border p-6 hover-lift"
              >
                <h3 className="text-lg font-bold text-text-primary">
                  {group.category}
                </h3>
                <p className="text-text-secondary text-sm mt-2 leading-relaxed">
                  {group.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {group.techs.map((tech) => (
                    <li
                      key={tech}
                      className="flex items-center gap-2 text-sm text-text-secondary"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan flex-shrink-0" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Case Study */}
      <section className="relative py-24 bg-navy border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
            Case Study
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Related <span className="gradient-text">Work</span>
          </h2>
          <div className="mt-8 gradient-border p-8 hover-lift">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan bg-cyan/10 rounded-full mb-4">
                  AI-Powered Staffing Operations
                </span>
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  AI-RUN SOS: Intelligent Staffing Operations System
                </h3>
                <p className="text-text-secondary max-w-2xl">
                  The ultimate proof that Cloud Resources understands technology
                  staffing at a level traditional firms cannot match — we built
                  AI to automate our own staffing operations. AI-RUN SOS is an
                  intelligent staffing operations platform that uses AI agents
                  to parse job requirements, match candidate profiles against
                  technical and cultural criteria, generate submittal
                  documentation, and coordinate the end-to-end placement
                  workflow. Built with the same AI/ML engineering expertise we
                  use for client projects, SOS demonstrates our deep domain
                  knowledge: we didn&apos;t just build an AI system, we built one
                  that solves the specific operational challenges of technology
                  staffing because we&apos;ve lived those challenges for a
                  decade. The result is faster placements, better matches, and
                  operational efficiency that allows our team to focus on
                  relationship building and candidate development instead of
                  administrative processing.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {[
                    "AI-Powered Matching",
                    "Automated Workflows",
                    "Domain-Expert AI",
                    "10+ Years Ops Data",
                  ].map((badge) => (
                    <li
                      key={badge}
                      className="inline-flex items-center gap-1.5 text-sm text-text-muted"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan flex-shrink-0" />
                      {badge}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan/30 text-cyan font-semibold hover:bg-cyan/10 transition-colors shrink-0"
              >
                View Case Studies
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-dark relative py-24 sm:py-32 border-t border-border">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
            Ready to Scale Your{" "}
            <span className="gradient-text">Engineering Team</span>?
          </h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto mb-8">
            Let&apos;s find the elite engineers, architects, and data scientists
            your team needs — placed in under 15 days with 95% client
            satisfaction and flexible engagement models. No resume blasting. No
            unqualified submittals. We&apos;ll understand your technology stack,
            team culture, and hiring goals before we present a single candidate.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue to-cyan text-white font-semibold hover:shadow-lg hover:shadow-cyan/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
