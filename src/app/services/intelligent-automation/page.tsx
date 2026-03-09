import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Bot,
  Network,
  Mail,
  RefreshCw,
  Wrench,
  ShieldCheck,
  ScrollText,
  Cog,
  Users,
  Timer,
  FileWarning,
  Unplug,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Intelligent Automation | Cloud Resources",
  description:
    "Autonomous AI agent systems that execute complex business workflows end-to-end with multi-agent orchestration, closed-loop feedback, policy governance, and immutable audit trails.",
};

const problems = [
  {
    icon: Timer,
    problem: "Manual Processes Consuming Thousands of Hours Across Operations",
    description:
      "Your operations team processes hundreds of emails daily, manually screens candidates, updates spreadsheets, and routes requests between departments — all by hand. These aren't edge cases; they're core workflows that consume 60–70% of your team's productive hours. Every manual touchpoint introduces latency, variability, and the ever-present risk of human error in high-volume, time-sensitive operations. The cost isn't just salary — it's the compounding opportunity cost of strategic work that never gets done because your best people are stuck executing repetitive tasks.",
    solution:
      "We deploy autonomous AI agents that execute end-to-end workflows without human intervention for routine operations. From email triage and candidate screening to vendor scoring and placement matching — 12+ coordinated agents handle the full lifecycle with sub-second response times. Human operators shift from executing tasks to reviewing outcomes, managing exceptions, and focusing on relationship-driven work that actually requires human judgment.",
  },
  {
    icon: Users,
    problem: "Inconsistent Execution and Tribal Knowledge Dependency",
    description:
      "Your best recruiter handles candidate scoring differently than your newest hire. Your most experienced operations manager knows which vendors are reliable — but that knowledge lives in their head, not in your systems. When key employees are on vacation, sick, or leave the company, critical institutional knowledge walks out the door. Process quality fluctuates wildly based on who's working that day, and training new team members takes months because there's no codified standard for how decisions should be made.",
    solution:
      "We encode operational expertise into trust-scored decision models and policy-governed execution rules. Every vendor, candidate, client, and workflow gets a quantified score based on historical outcomes — not gut feelings. A vendor trust graph with 15+ weighted signals replaces subjective assessments. New team members operate at senior-level consistency from day one because the system embodies the organization's accumulated intelligence, continuously refined by outcome feedback loops.",
  },
  {
    icon: FileWarning,
    problem: "Compliance Gaps from Lack of Audit Trails in Automated Workflows",
    description:
      "Your current automation — a patchwork of scripts, macros, and RPA bots — moves fast but leaves no trace. When an auditor asks why a specific candidate was placed, why a particular vendor was selected, or how a rate was determined, your team spends hours reconstructing decisions from email threads and memory. In regulated industries, this isn't just inconvenient — it's a compliance liability that puts contracts, certifications, and client relationships at risk.",
    solution:
      "Every agent decision is captured in an immutable audit log with full provenance — who triggered it, what data informed it, which policy rules governed it, and what outcome resulted. RBAC controls ensure the right people can review the right decisions. The system is architected for SOC 2 readiness from the ground up, with structured logging, role-based access, and retention policies that satisfy the most demanding compliance frameworks without slowing down operations.",
  },
  {
    icon: Unplug,
    problem: "Disconnected Systems Requiring Human Glue Between Processes",
    description:
      "Your ATS doesn't talk to your email. Your email doesn't talk to your CRM. Your CRM doesn't talk to your invoicing system. Between every pair of systems, there's a human being copying data, reformatting fields, and manually triggering the next step in the workflow. These integration gaps create delays measured in hours or days, introduce data entry errors at every handoff, and make it impossible to get a real-time view of where any given process stands across the operational pipeline.",
    solution:
      "We architect event-driven orchestration layers that connect every system in your operational stack through a unified workflow engine. Microsoft Graph API for email intelligence, PostgreSQL for transactional state, Redis for real-time coordination, PgBoss for reliable job scheduling — all orchestrated through NestJS services with Zod-validated contracts at every boundary. The result is a single, continuous pipeline where data flows automatically from intake through execution to completion without human intermediation.",
  },
];

const serviceOfferings = [
  {
    title: "Automation Strategy & Process Assessment",
    description:
      "Before deploying a single agent, we conduct a rigorous operational audit that maps every manual workflow, quantifies the time and cost burden of each process, and identifies the highest-ROI automation targets. This isn't a generic maturity assessment — it's a deep, hands-on investigation of how your operations actually work, where the bottlenecks hide, and which processes are ripe for autonomous execution versus those that require human judgment as a permanent fixture.",
    includes: [
      {
        keyword: "Process Discovery & Mapping",
        detail:
          "documenting end-to-end operational workflows across departments, capturing every manual touchpoint, decision gate, exception path, and system handoff — creating a comprehensive operational blueprint that reveals automation opportunities invisible at the surface level.",
      },
      {
        keyword: "Volume & Cost Analysis",
        detail:
          "quantifying the hourly burden of each manual process with transaction volumes, error rates, rework frequency, and fully-loaded labor costs — producing a ranked backlog of automation candidates sorted by ROI potential and implementation complexity.",
      },
      {
        keyword: "Agent Architecture Blueprint",
        detail:
          "designing the multi-agent topology — which agents handle which workflows, how they coordinate, what data they share, and where human oversight checkpoints belong — tailored to your specific operational patterns and compliance requirements.",
      },
      {
        keyword: "Integration Landscape Assessment",
        detail:
          "auditing every system, API, database, and communication channel your operations touch — identifying integration readiness, API maturity, authentication mechanisms, and data format compatibility for seamless agent connectivity.",
      },
      {
        keyword: "Phased Implementation Roadmap",
        detail:
          "delivering a sequenced deployment plan that starts with high-confidence, low-risk automations to build organizational trust, then progressively expands agent autonomy as outcome data validates system reliability.",
      },
    ],
    outcomes:
      "Clients typically identify 8–12 automation targets in the first two weeks, with the top 3–4 representing 70%+ of the total operational time savings. The strategy phase alone has prevented organizations from over-investing in low-value automations, redirecting budget toward the workflows where autonomous agents deliver transformative — not incremental — impact.",
  },
  {
    title: "Multi-Agent AI System Design & Engineering",
    description:
      "We architect and build autonomous agent ecosystems where 12+ specialized AI agents divide complex operational workflows into focused, coordinated tasks. Each agent owns a specific domain — sourcing, screening, scoring, routing, scheduling, matching, communication, compliance — with shared context and orchestrated handoffs that maintain coherence across the entire pipeline. This isn't a single chatbot answering questions; it's an operating system where every agent has a defined responsibility, clear boundaries, and measurable performance metrics.",
    includes: [
      {
        keyword: "Agent Specialization Architecture",
        detail:
          "designing purpose-built agents for each operational domain — intake agents that parse and classify incoming work, analysis agents that score and rank candidates, routing agents that match supply to demand, and execution agents that manage communications and placements — each with defined inputs, outputs, and performance contracts.",
      },
      {
        keyword: "Inter-Agent Orchestration Layer",
        detail:
          "building the coordination fabric that manages agent-to-agent communication, shared state management, priority queuing, and conflict resolution — ensuring 12+ agents operate as a coherent system rather than a collection of independent scripts racing for the same resources.",
      },
      {
        keyword: "Shared Context & Memory Systems",
        detail:
          "implementing persistent context stores that give every agent access to the full operational history — candidate interactions, vendor performance, client preferences, placement outcomes — so each agent's decisions are informed by the collective intelligence of the entire system.",
      },
      {
        keyword: "Progressive Autonomy Framework",
        detail:
          "deploying agents in advisory mode first (recommending actions for human approval), then semi-autonomous mode (executing with review), then fully autonomous for high-confidence scenarios — building organizational trust through demonstrated reliability, not blind faith in AI.",
      },
      {
        keyword: "Agent Performance Monitoring",
        detail:
          "tracking individual agent accuracy, throughput, error rates, and outcome quality with real-time dashboards — enabling rapid identification of underperforming agents and continuous optimization of the overall system efficiency.",
      },
    ],
    outcomes:
      "The AI-RUN staffing platform deployed 12 specialized agents that collectively process 61M+ signals and handle 812K+ emails. Tasks that previously required teams of coordinators working full shifts now execute autonomously in seconds, with human operators focusing exclusively on exception handling and relationship management.",
  },
  {
    title: "Email & Communication Intelligence",
    description:
      "We build NLP-driven email processing systems that transform your inbox from a bottleneck into an automated intake engine. Using Microsoft Graph API integration with advanced classification, entity extraction, and intent recognition, these systems process thousands of emails daily — auto-routing to the right agent, extracting structured data from unstructured messages, prioritizing time-sensitive communications, and resolving routine inquiries without human involvement. This is the front door to your automation pipeline.",
    includes: [
      {
        keyword: "Microsoft Graph API Integration",
        detail:
          "deep integration with Exchange Online that goes beyond basic read/send — leveraging mailbox subscriptions, change notifications, category management, and folder routing to process email at scale with sub-minute latency from receipt to agent handoff.",
      },
      {
        keyword: "NLP Classification & Intent Recognition",
        detail:
          "multi-label classification models that categorize incoming emails by type (job order, candidate submission, rate negotiation, compliance request), urgency level, sender reputation, and required action — routing each message to the appropriate agent pipeline with 95%+ accuracy.",
      },
      {
        keyword: "Entity Extraction & Data Normalization",
        detail:
          "structured data extraction from unstructured email bodies — pulling candidate names, skills, rates, availability, locations, client names, and job requirements into normalized fields that feed directly into scoring and matching workflows.",
      },
      {
        keyword: "Automated Response Generation",
        detail:
          "template-driven and context-aware response generation for routine communications — acknowledgments, status updates, information requests, and scheduling confirmations — that maintain professional tone while eliminating the 15–30 minutes humans spend on each email exchange.",
      },
    ],
    outcomes:
      "The AI-RUN platform processes 812K+ emails through its intelligence pipeline, automatically classifying, extracting, routing, and in many cases resolving communications that previously required dedicated coordinator teams. Email response latency dropped from hours to minutes, and the operations team eliminated email triage as a dedicated function entirely.",
  },
  {
    title: "Workflow Orchestration & Execution Engine",
    description:
      "We build closed-loop workflow engines that manage the complete lifecycle of operational processes — from intake through execution to outcome tracking and feedback incorporation. These aren't simple linear pipelines; they're sophisticated state machines with conditional branching, parallel execution paths, policy gates, rate limits, escalation triggers, and retry logic that handle the full complexity of real-world business operations while maintaining deterministic, auditable execution.",
    includes: [
      {
        keyword: "Event-Driven State Machine Architecture",
        detail:
          "modeling complex operational workflows as explicit state machines with defined transitions, guard conditions, and compensation logic — ensuring every process follows a predictable path while handling exceptions, timeouts, and edge cases gracefully.",
      },
      {
        keyword: "Policy Gates & Approval Workflows",
        detail:
          "configurable checkpoints that enforce business rules at critical junctures — rate limit validations, budget threshold checks, compliance verifications, and human approval requirements — preventing agents from committing to high-stakes decisions without appropriate oversight.",
      },
      {
        keyword: "PgBoss Job Scheduling & Queue Management",
        detail:
          "PostgreSQL-backed job scheduling with priority queuing, retry policies, dead-letter handling, and rate limiting — ensuring reliable execution of millions of workflow steps with exactly-once semantics and full observability into queue depth, processing latency, and failure rates.",
      },
      {
        keyword: "Parallel Execution & Fan-Out Patterns",
        detail:
          "orchestrating workflows that spawn multiple parallel work streams — scoring 50 candidates simultaneously, querying 10 vendor databases in parallel, sending batch communications — then collecting and merging results for downstream decision-making.",
      },
      {
        keyword: "Outcome Tracking & Feedback Loops",
        detail:
          "closing the loop by tracking real-world outcomes of every automated action — placement success, vendor delivery quality, client satisfaction, response rates — and feeding this data back into scoring models and policy rules for continuous system improvement.",
      },
    ],
    outcomes:
      "Workflow orchestration engines reduce end-to-end process cycle times by 80–90%, transforming multi-day manual workflows into automated pipelines that complete in minutes. The closed-loop architecture ensures the system gets measurably better over time — every completed workflow contributes outcome data that refines future decisions.",
  },
  {
    title: "Trust Scoring & Decision Intelligence",
    description:
      "We build outcome-based scoring systems that replace subjective assessments with quantified, continuously-calibrated trust metrics. Vendor trust graphs, candidate quality scores, client reliability ratings, and match confidence levels — all computed from real-world outcome data with weighted signal aggregation, temporal decay, and domain-specific scoring algorithms. Every score is explainable, every weight is tunable, and every prediction is validated against actual results.",
    includes: [
      {
        keyword: "Multi-Signal Trust Graph Architecture",
        detail:
          "scoring entities across 15+ weighted signals — delivery history, response timeliness, quality ratings, compliance adherence, payment reliability, communication patterns, and outcome feedback — with configurable weights that reflect your organization's specific priorities and risk tolerance.",
      },
      {
        keyword: "Temporal Decay & Recency Weighting",
        detail:
          "scoring models that weight recent performance more heavily than historical data — recognizing that a vendor's quality last month is more predictive than their performance two years ago — with configurable decay curves that balance recency sensitivity against statistical stability.",
      },
      {
        keyword: "Confidence Calibration",
        detail:
          "ensuring that when the system says 85% confidence, it's right 85% of the time — using calibration techniques that align predicted probabilities with observed frequencies, so downstream automation can make reliable threshold-based decisions.",
      },
      {
        keyword: "Explainable Score Decomposition",
        detail:
          "breaking every composite score into its contributing signals with individual weights, so stakeholders can understand exactly why a vendor scored 4.2 or a candidate ranked in the top 10% — building trust through transparency, not opaque algorithms.",
      },
    ],
    outcomes:
      "Trust scoring systems have enabled fully autonomous vendor selection and candidate matching with 90%+ accuracy, validated against human expert decisions. Organizations that previously relied on a handful of senior team members for critical judgment calls can now scale that decision quality across the entire operation — consistently, 24/7, without bottlenecks.",
  },
  {
    title: "Compliance & Audit Trail Engineering",
    description:
      "We architect compliance-grade logging and governance frameworks that capture every automated decision with forensic-level detail. In regulated industries and enterprise environments where every action must be traceable, explainable, and defensible, our audit trail systems provide the immutable record that satisfies internal compliance teams, external auditors, and client due diligence requirements — without slowing down the automation pipeline by a single millisecond.",
    includes: [
      {
        keyword: "Immutable Decision Logging",
        detail:
          "structured, append-only audit records that capture the complete provenance of every agent decision — the triggering event, input data, policy rules evaluated, alternative options considered, confidence scores, and final action taken — stored in tamper-evident formats that satisfy SOC 2 and regulatory requirements.",
      },
      {
        keyword: "Role-Based Access Control (RBAC)",
        detail:
          "fine-grained permission models that control who can view audit trails, who can modify policy rules, who can override agent decisions, and who can access sensitive operational data — ensuring separation of duties and least-privilege access across the automation platform.",
      },
      {
        keyword: "Compliance Reporting & Export",
        detail:
          "automated generation of compliance reports, audit summaries, and decision logs in formats required by your specific regulatory frameworks — with scheduled delivery and on-demand export capabilities that eliminate the manual report compilation burden.",
      },
      {
        keyword: "SOC 2 Readiness Architecture",
        detail:
          "designing the entire automation platform with SOC 2 Trust Service Criteria in mind — security controls, availability monitoring, processing integrity validation, confidentiality protections, and privacy safeguards built into the architecture from the foundation, not bolted on after deployment.",
      },
      {
        keyword: "Data Retention & Lifecycle Management",
        detail:
          "configurable retention policies that balance compliance requirements against storage costs — with automated archival, purge schedules, and legal hold capabilities that keep you compliant without accumulating infinite storage obligations.",
      },
    ],
    outcomes:
      "Organizations deploying our compliance frameworks pass audit reviews with zero findings related to automated decision traceability. The immutable logging infrastructure has satisfied SOC 2 auditors, client security questionnaires, and regulatory inquiries — while the automation team operates at full speed without compliance-related delays or manual documentation overhead.",
  },
];

const capabilities = [
  {
    icon: Network,
    title: "Multi-Agent AI Systems",
    description:
      "12+ coordinated AI agents that divide complex workflows into specialized tasks — sourcing, screening, scoring, routing, and placement — with shared context and orchestrated handoffs across the entire pipeline.",
  },
  {
    icon: Mail,
    title: "Email Intelligence & NLP",
    description:
      "Microsoft Graph API integration with NLP classification, entity extraction, and intent recognition that processes thousands of emails daily — auto-routing, prioritizing, and resolving routine communications autonomously.",
  },
  {
    icon: RefreshCw,
    title: "Closed-Loop Automation",
    description:
      "Outcome-based trust scoring that tracks every automated decision against real-world results. The system continuously recalibrates confidence thresholds, getting smarter and more accurate with every execution cycle.",
  },
  {
    icon: Wrench,
    title: "Autonomous Remediation",
    description:
      "Playbook-based detection, diagnosis, and execution that resolves operational incidents autonomously. Progressive escalation from advisory to semi-autonomous to fully autonomous as trust scores build over time.",
  },
  {
    icon: ShieldCheck,
    title: "Policy-Governed Execution",
    description:
      "Configurable approval gates, rate limits, budget constraints, and escalation thresholds that bound agent behavior. Every high-stakes decision routes through human reviewers before committing resources.",
  },
  {
    icon: ScrollText,
    title: "Immutable Audit Trails",
    description:
      "Compliance-grade logging that captures every agent decision with full provenance — who triggered it, what data informed it, and what outcome resulted. Built for regulated industries demanding forensic traceability.",
  },
];

const technologies = [
  "TypeScript",
  "NestJS",
  "Prisma",
  "Next.js",
  "PostgreSQL",
  "Redis",
  "Microsoft Graph API",
  "PgBoss",
  "Turborepo",
  "Zod",
  "Docker",
];

const metrics = [
  { value: "90%", label: "Process Automation" },
  { value: "61M+", label: "Signals Processed" },
  { value: "12", label: "AI Agents Deployed" },
  { value: "$5M/yr", label: "Projected Value" },
];

export default function IntelligentAutomationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-cyan transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          <div className="max-w-3xl">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple to-pink-500 flex items-center justify-center mb-6">
              <Bot className="w-7 h-7 text-white" />
            </div>
            <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
              AUTONOMY. Delivered.
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary">
              Intelligent Automation
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-2xl">
              We build autonomous AI agent systems that execute complex business
              workflows end-to-end — not simple task automations, but
              full-lifecycle operational intelligence. Our flagship deployment
              orchestrates 12 specialized agents processing 61M+ signals across
              812K+ emails, managing everything from intake classification to
              vendor scoring to placement execution with closed-loop feedback
              that makes the system smarter with every cycle. Policy-governed
              execution with immutable audit trails ensures every automated
              decision is traceable, explainable, and compliant. This is the
              difference between automating a task and automating an entire
              operating system.
            </p>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="relative py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
            Challenges
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Problems We <span className="gradient-text">Solve</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl">
            Intelligent automation fails when organizations apply RPA thinking
            to problems that require autonomous reasoning. These are the
            operational patterns we see — and transform — in every engagement.
          </p>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {problems.map((p) => (
              <div key={p.problem} className="gradient-border p-8 hover-lift">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple/20 to-pink-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <p.icon className="w-5 h-5 text-cyan" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-red-400 tracking-wider uppercase">
                      CHALLENGE
                    </span>
                    <h3 className="text-lg font-bold text-text-primary mt-1">
                      {p.problem}
                    </h3>
                  </div>
                </div>
                <p className="text-text-secondary leading-relaxed mb-4">
                  {p.description}
                </p>
                <div className="border-t border-border pt-4">
                  <span className="text-xs font-bold text-emerald-500 tracking-wider uppercase">
                    SOLUTION
                  </span>
                  <p className="mt-2 text-text-secondary leading-relaxed">
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
          <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
            What We Deliver
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Solutions &{" "}
            <span className="gradient-text">Service Offerings</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl">
            Each engagement is tailored to your operational complexity, system
            landscape, and compliance requirements. From strategy assessment
            through multi-agent deployment and ongoing optimization — we meet
            you where you are and build the autonomous operations platform you
            need.
          </p>
          <div className="mt-12 space-y-12">
            {serviceOfferings.map((offering, idx) => (
              <div key={offering.title} className="gradient-border p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-purple to-pink-500 text-white text-sm font-bold">
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
                            {item.keyword}
                          </span>{" "}
                          for {item.detail}
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
            From multi-agent orchestration and email intelligence to
            policy-governed execution and compliance-grade audit trails —
            automation that scales operations while maintaining full governance
            and continuous self-improvement.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="gradient-border p-8 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple/20 to-pink-500/20 flex items-center justify-center mb-5">
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
            Stack
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Technologies We <span className="gradient-text">Build With</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl">
            We select technologies for production reliability, type safety, and
            operational scalability — not novelty. Every tool in our automation
            stack has been battle-tested across enterprise deployments processing
            millions of events daily.
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

      {/* Impact Metrics */}
      <section className="relative py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
            Impact
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Measurable <span className="gradient-text">Results</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            These aren&apos;t projections or benchmarks — they&apos;re outcomes
            from a production autonomous operating system running 24/7 across
            real business operations.
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-12">
            {metrics.map((m) => (
              <div key={m.label}>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold gradient-text">
                  {m.value}
                </div>
                <div className="mt-3 text-base text-text-muted font-medium">
                  {m.label}
                </div>
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
                  Autonomous Operating System
                </span>
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  AI-RUN SOS: Staffing Operating System
                </h3>
                <p className="text-text-secondary max-w-2xl">
                  The autonomous staffing platform that redefined operational
                  scale. We designed and built a 12-agent AI operating system
                  for a national staffing organization — processing 61M+
                  signals across 812K+ emails with closed-loop feedback,
                  vendor trust scoring, policy-governed execution, and
                  immutable compliance audit trails. Agents handle the full
                  staffing lifecycle — from job order intake and candidate
                  sourcing through screening, scoring, matching, placement,
                  and outcome tracking — with progressive autonomy that earned
                  organizational trust through demonstrated reliability.
                  Projected annual value: $5M+.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {[
                    "12 AI Agents",
                    "61M+ Signals",
                    "812K+ Emails",
                    "$5M/yr Value",
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
            Ready to Deploy{" "}
            <span className="gradient-text">Autonomous Agents</span>?
          </h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto mb-8">
            Let&apos;s architect an intelligent automation system that scales
            your operations with multi-agent AI, policy governance, closed-loop
            feedback, and enterprise-grade compliance audit trails. No generic
            RPA pitches. We&apos;ll assess your workflows and map the fastest
            path to autonomous operations.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Discuss Your Automation Strategy
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
