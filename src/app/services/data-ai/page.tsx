import type { Metadata } from "next";
import Link from "next/link";
import {
  Brain,
  ArrowRight,
  CheckCircle2,
  ArrowLeft,
  MessageSquare,
  Layers,
  BarChart3,
  Gauge,
  AlertTriangle,
  Clock,
  Database,
  BellRing,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Data & AI Solutions | Cloud Resources",
  description:
    "Enterprise AI platforms with tool-backed LLMs, conversational interfaces, and zero-hallucination architectures.",
};

const problems = [
  {
    icon: Database,
    problem: "Fragmented Vendor Tools & Siloed Data",
    description:
      "Your operations team juggles six different dashboards across Pure Storage, Dell, HPE, and NetApp — each with its own login, its own data format, and its own blind spots. Critical correlations between storage performance, network health, and application behavior are invisible because the data lives in isolated silos that were never designed to talk to each other.",
    solution:
      "We build canonical data models that normalize every vendor API into a single, unified schema. One conversational interface queries across your entire infrastructure — so a storage admin can ask 'show me all arrays above 80% utilization with active alerts' and get a cross-vendor answer in seconds, not hours.",
  },
  {
    icon: AlertTriangle,
    problem: "AI Initiatives Stuck in POC Without Production Adoption",
    description:
      "Your data science team built a promising proof-of-concept six months ago. It impressed the executive team in a demo. But it never made it past the pilot — blocked by hallucination concerns, lack of tool integration, missing guardrails, and no clear path from Jupyter notebook to production-grade API that the operations team actually trusts.",
    solution:
      "Our tool-backed LLM architecture ensures every AI response is grounded in real-time data from verified sources. GPT-4o function calling with structured output validation, source attribution on every response, and a composable tool registry that scales from 10 tools to 500+ without architectural changes. POC to production in 8–12 weeks, not 8–12 months.",
  },
  {
    icon: Clock,
    problem: "Manual Data Gathering Consuming 60–70% of Engineering Time",
    description:
      "Your senior engineers — the people you hired to solve hard problems — spend most of their week copying data between spreadsheets, running the same CLI commands across dozens of devices, and compiling reports that are outdated by the time they reach the executive inbox. The cost isn't just salary — it's the opportunity cost of innovation that never happens.",
    solution:
      "We deploy AI-powered tools that automate data collection, normalization, and report generation across your entire stack. Natural language queries replace repetitive CLI workflows. Engineers reclaim 25+ hours per week to focus on architecture, optimization, and the strategic work that actually moves the business forward.",
  },
  {
    icon: BellRing,
    problem: "Alert Fatigue & Reactive Firefighting",
    description:
      "Your monitoring stack generates thousands of alerts per day. Most are noise. The critical ones get buried in the deluge, and by the time someone notices a real problem, it's already cascaded into a P1 incident affecting production. Your team is exhausted from constant firefighting with no time for proactive improvements.",
    solution:
      "AI-driven operational intelligence correlates alerts across systems, suppresses noise, and surfaces only the signals that matter — with recommended remediation actions attached. From advisory mode to fully autonomous playbook execution, we move your operations from reactive to predictive with immutable audit trails for compliance.",
  },
];

const serviceOfferings = [
  {
    title: "AI Strategy & Readiness Assessment",
    description:
      "Before writing a single line of code, we conduct a rigorous assessment of your data landscape, team capabilities, and operational workflows to identify the highest-impact AI use cases and build a phased roadmap that delivers quick wins while establishing the foundation for enterprise-scale AI adoption.",
    includes: [
      {
        keyword: "Data Landscape Audit",
        detail:
          "Comprehensive inventory of every data source, API endpoint, vendor tool, and manual workflow — mapping data quality, freshness, accessibility, and gaps that would block AI initiatives.",
      },
      {
        keyword: "Use Case Prioritization Matrix",
        detail:
          "Scoring framework that evaluates 20+ potential AI use cases against business impact, data readiness, technical feasibility, and organizational adoption likelihood — ensuring you invest in the right problems first.",
      },
      {
        keyword: "Architecture Blueprint",
        detail:
          "Detailed technical design covering LLM selection, tool registry architecture, vector database strategy, security model, and integration patterns — tailored to your existing infrastructure and compliance requirements.",
      },
      {
        keyword: "ROI Projection Model",
        detail:
          "Quantified business case with conservative, expected, and optimistic scenarios — mapping engineering hours saved, MTTR reduction, and operational efficiency gains to hard dollar figures your CFO can approve.",
      },
      {
        keyword: "Organizational Readiness Plan",
        detail:
          "Assessment of team skills, change management requirements, and a training roadmap that ensures your engineers can own, extend, and maintain the AI platform long after our engagement ends.",
      },
    ],
    outcomes:
      "Clients typically identify 3–5 high-impact use cases in the first two weeks and have executive alignment on a funded roadmap within 30 days. The strategy phase alone has saved organizations months of wasted effort by eliminating low-value initiatives before they consume engineering bandwidth.",
  },
  {
    title: "Conversational AI Platform Engineering",
    description:
      "We design and build ChatGPT-class conversational interfaces purpose-built for enterprise operations. These aren't chatbot wrappers — they're tool-backed AI platforms where every response is grounded in real-time data from your actual infrastructure, with source attribution and zero hallucination guarantees that operations teams trust for production decisions.",
    includes: [
      {
        keyword: "Tool-Backed LLM Architecture",
        detail:
          "GPT-4o function calling with structured output validation, composable tool registries, and dynamic tool selection that routes queries to the right data sources — supporting 50+ tools across storage, networking, compute, ITSM, and cost management.",
      },
      {
        keyword: "Natural Language Query Engine",
        detail:
          "Intent classification, entity extraction, and query planning that converts conversational English into precise multi-step data retrieval workflows — handling ambiguity, follow-up questions, and complex compound queries.",
      },
      {
        keyword: "Source Attribution System",
        detail:
          "Every AI response includes verifiable citations showing exactly which API calls, data points, and calculations produced the answer — so users can audit any response and build trust through transparency, not blind faith.",
      },
      {
        keyword: "Multi-Turn Context Management",
        detail:
          "Conversation memory, context windowing, and reference resolution that maintains coherent dialogue across complex investigation flows — allowing users to drill down, pivot, and explore without re-explaining context.",
      },
      {
        keyword: "Role-Based Access Control",
        detail:
          "Fine-grained permissions that control which tools, data sources, and actions are available to each user role — ensuring a junior analyst sees different capabilities than a senior architect or an executive.",
      },
    ],
    outcomes:
      "Organizations deploying our conversational AI platforms report 70% faster issue resolution, with storage administrators resolving complex cross-vendor investigations in minutes instead of hours. The platform becomes the default starting point for any operational question — replacing the workflow of SSHing into devices, running CLIs, and correlating data manually across six different dashboards.",
  },
  {
    title: "RAG & Knowledge Pipeline Development",
    description:
      "We build retrieval-augmented generation pipelines that transform your institutional knowledge — runbooks, architecture documents, vendor manuals, incident postmortems — into a queryable knowledge base that makes every team member as effective as your most experienced engineer. Semantic search with full source attribution, not keyword matching.",
    includes: [
      {
        keyword: "Document Ingestion Pipeline",
        detail:
          "Automated processing of PDFs, Confluence pages, Markdown docs, and unstructured text through chunking, embedding, and indexing pipelines — with incremental updates that keep the knowledge base current as documentation evolves.",
      },
      {
        keyword: "Vector Database Architecture",
        detail:
          "pgvector and ChromaDB deployments optimized for your scale and query patterns — with hybrid search combining dense vector similarity and sparse keyword matching for maximum recall on technical queries.",
      },
      {
        keyword: "Embedding Strategy",
        detail:
          "Domain-specific embedding models fine-tuned on your technical vocabulary, with chunk sizing and overlap strategies that preserve context boundaries across paragraphs, code blocks, and structured data.",
      },
      {
        keyword: "Citation & Provenance Tracking",
        detail:
          "Every retrieved passage carries metadata linking back to its source document, version, author, and last-updated timestamp — so users can verify answers and identify stale documentation that needs updating.",
      },
    ],
    outcomes:
      "RAG pipelines typically reduce onboarding time for new engineers by 40–60%, while making senior engineers more productive by eliminating the 'I know we documented this somewhere' problem. Incident response teams report faster root cause identification when tribal knowledge is accessible through natural language queries instead of buried in forgotten wiki pages.",
  },
  {
    title: "Multi-Vendor Data Unification",
    description:
      "Enterprise infrastructure spans dozens of vendors, each with proprietary APIs, data formats, and management interfaces. We build canonical data models and unified integration layers that normalize this chaos into a single, coherent data fabric — enabling cross-vendor analytics, AI-powered insights, and a single source of truth that eliminates vendor-specific blind spots.",
    includes: [
      {
        keyword: "Canonical Data Modeling",
        detail:
          "Vendor-agnostic schemas that normalize storage arrays, switches, hosts, and virtual machines into unified entities — so 'Pure FlashArray' and 'Dell PowerStore' are both queryable as 'storage arrays' with consistent attribute names and units.",
      },
      {
        keyword: "API Integration Framework",
        detail:
          "Resilient collector architecture with retry logic, rate limiting, credential rotation, and circuit breakers — supporting REST, GraphQL, SNMP, and SSH-based data sources with sub-minute polling intervals.",
      },
      {
        keyword: "Time-Series Data Pipeline",
        detail:
          "TimescaleDB-backed performance metrics pipeline that ingests, compresses, and retains months of granular telemetry — enabling trend analysis, capacity forecasting, and anomaly detection across your entire fleet.",
      },
      {
        keyword: "Graph Relationship Mapping",
        detail:
          "Neo4j knowledge graphs that model the relationships between infrastructure components — mapping which hosts connect to which switches through which zones to which arrays — enabling topology-aware querying and impact analysis.",
      },
      {
        keyword: "Change Detection & Drift Tracking",
        detail:
          "Continuous comparison of current infrastructure state against known-good baselines, with automated alerting on unauthorized changes, configuration drift, and compliance deviations.",
      },
    ],
    outcomes:
      "Clients with 5+ vendor environments typically see a 60% reduction in mean time to correlate cross-platform issues. The unified data layer becomes the foundation for every downstream initiative — from AI chat interfaces to executive dashboards to automated compliance reporting.",
  },
  {
    title: "AI-Driven Operational Intelligence",
    description:
      "We build intelligent monitoring and decision-support systems that transform raw telemetry into actionable insights. Beyond traditional dashboards, these platforms use AI to detect patterns, predict failures, and recommend remediations — giving your operations team superhuman situational awareness across the entire infrastructure landscape.",
    includes: [
      {
        keyword: "Executive Dashboard Suite",
        detail:
          "Real-time KPI dashboards built with Recharts and interactive topology views with ReactFlow — featuring AI-generated summaries that explain what changed, why it matters, and what action to take, not just what the numbers say.",
      },
      {
        keyword: "Intelligent Alert Correlation",
        detail:
          "ML-based alert grouping that correlates related signals across systems, suppresses noise during known maintenance windows, and surfaces root-cause hypotheses — reducing alert volume by 80%+ while improving signal quality.",
      },
      {
        keyword: "Predictive Capacity Planning",
        detail:
          "Time-series forecasting models that project storage consumption, compute utilization, and network bandwidth weeks in advance — triggering procurement workflows before capacity constraints impact performance.",
      },
      {
        keyword: "Automated Remediation Engine",
        detail:
          "Playbook-based detection, diagnosis, and execution with configurable autonomy levels — from advisory recommendations to one-click remediation to fully autonomous resolution, with immutable audit trails at every step.",
      },
    ],
    outcomes:
      "Operations teams using our intelligence platforms shift from reactive firefighting to proactive optimization. P1 incidents drop by 40–60% as predictive alerts catch problems before they cascade. Executive teams get real-time visibility into infrastructure health without requesting custom reports.",
  },
  {
    title: "Managed AI Operations",
    description:
      "Deploying an AI platform is the beginning, not the end. We provide ongoing operational support that keeps your AI systems performing at peak effectiveness — monitoring model accuracy, updating tool integrations as APIs evolve, expanding capabilities as new use cases emerge, and ensuring the platform scales with your business without requiring a dedicated AI operations team on your payroll.",
    includes: [
      {
        keyword: "Model Performance Monitoring",
        detail:
          "Continuous tracking of response quality, tool call success rates, latency percentiles, and user satisfaction scores — with automated alerting when performance degrades below defined thresholds.",
      },
      {
        keyword: "Tool Registry Maintenance",
        detail:
          "Proactive updates to the composable tool registry as vendor APIs change, new data sources come online, and infrastructure evolves — ensuring the AI platform always has access to current, accurate data.",
      },
      {
        keyword: "Prompt Engineering & Optimization",
        detail:
          "Ongoing refinement of system prompts, few-shot examples, and output formatting based on real-world usage patterns — improving response quality and reducing token consumption over time.",
      },
      {
        keyword: "Capability Expansion",
        detail:
          "Quarterly planning and delivery of new AI capabilities — additional tool integrations, new visualization types, expanded natural language understanding, and advanced features like automated report generation and scheduled insights.",
      },
      {
        keyword: "Security & Compliance Updates",
        detail:
          "Regular security audits, dependency updates, credential rotation, and compliance reviews — ensuring the AI platform meets evolving regulatory requirements without disrupting operations.",
      },
    ],
    outcomes:
      "Managed AI operations ensure your platform improves continuously rather than degrading over time. Clients on managed plans see 15–20% improvement in AI response quality quarter-over-quarter, with zero unplanned downtime and a steady cadence of new capabilities that keep the platform ahead of operational needs.",
  },
];

const capabilities = [
  {
    icon: MessageSquare,
    title: "Conversational AI Platforms",
    description:
      "ChatGPT-class interfaces for enterprise operations with 50+ tools backing every response. Natural language queries that return data-backed answers in seconds — no more switching between dashboards or running manual reports.",
  },
  {
    icon: Layers,
    title: "RAG & Vector Search",
    description:
      "pgvector and ChromaDB pipelines for retrieval-augmented generation with domain-specific knowledge. Semantic search across policies, runbooks, and operational documentation with full source attribution.",
  },
  {
    icon: CheckCircle2,
    title: "Tool-Backed LLM Architecture",
    description:
      "GPT-4o function calling ensures every AI response is grounded in real data, never hallucinated. Composable tool registries that query Prometheus, Jira, cost APIs, and any system with a REST or GraphQL interface.",
  },
  {
    icon: Brain,
    title: "Multi-Vendor Data Unification",
    description:
      "Canonical data models that normalize disparate vendor APIs into unified queryable schemas. One conversational interface across Pure Storage, Dell, HPE, NetApp, cloud providers, and ITSM tools.",
  },
  {
    icon: BarChart3,
    title: "Executive Dashboards & Visualization",
    description:
      "Real-time KPI dashboards with Recharts, interactive topology with ReactFlow, and Mermaid diagrams. AI-generated summaries and trend analysis that turn raw metrics into actionable intelligence.",
  },
  {
    icon: Gauge,
    title: "AI-Driven Remediation",
    description:
      "Playbook-based detection, diagnosis, and execution with advisory to fully autonomous modes. From recommended actions to one-click remediation — with immutable audit trails for compliance.",
  },
];

const technologies = [
  "OpenAI GPT-4o",
  "LangChain",
  "pgvector",
  "ChromaDB",
  "FastAPI",
  "Next.js",
  "PostgreSQL",
  "TimescaleDB",
  "Neo4j",
  "OpenSearch",
  "Redis",
  "ReactFlow",
  "Recharts",
];

const metrics = [
  { value: "70%", label: "Faster Issue Resolution" },
  { value: "50+", label: "AI-Backed Tools" },
  { value: "Zero", label: "Hallucination Rate" },
  { value: "4x", label: "ROI First Year" },
];

const enterpriseTech = [
  {
    category: "AI & Language Models",
    description: "Foundation models and orchestration frameworks for enterprise AI",
    items: ["OpenAI GPT-4o", "LangChain"],
  },
  {
    category: "Vector & Graph Databases",
    description: "Semantic search, RAG pipelines, and knowledge graph infrastructure",
    items: ["pgvector", "ChromaDB", "Neo4j"],
  },
  {
    category: "Data Infrastructure",
    description: "Production-grade storage, time-series, caching, and search",
    items: ["PostgreSQL", "TimescaleDB", "Redis", "OpenSearch"],
  },
  {
    category: "Application Frameworks",
    description: "APIs, interfaces, and interactive visualization platforms",
    items: ["FastAPI", "Next.js", "ReactFlow", "Recharts"],
  },
];

export default function DataAIPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-dark relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f2140] to-[#0a1628]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-cyan bg-cyan/10 rounded-full mb-6">
                Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Data & AI Solutions
              </h1>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl">
                We build enterprise AI platforms that don&apos;t just answer
                questions — they transform how your organization operates.
                Tool-backed LLM architectures with zero-hallucination guarantees,
                RAG pipelines, and multi-vendor data unification.
                Production-grade AI your operations team trusts for critical
                decisions.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-cyan text-white font-semibold hover:bg-cyan/90 transition-colors"
              >
                Schedule a Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="hidden lg:flex items-center justify-center" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 18%, black 75%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 82%, transparent 100%)', maskComposite: 'intersect', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 18%, black 75%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 82%, transparent 100%)', WebkitMaskComposite: 'source-in' }}>
              <img src="/images/service-data-ai.png" alt="" className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative bg-white shadow-[0_-1px_15px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((m) => (
              <div key={m.label} className="flex items-start gap-4">
                <div className="w-1 h-14 rounded-full bg-gradient-to-b from-cyan to-blue flex-shrink-0" />
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-cyan">
                    {m.value}
                  </div>
                  <div className="mt-1 text-sm text-text-secondary font-medium">
                    {m.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems Solved */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-cyan bg-cyan/10 rounded-full mb-4">
            Problems Solved
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Challenges We <span className="gradient-text">Eliminate</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl">
            Enterprise AI adoption fails when organizations treat it as a
            technology initiative instead of an operational transformation. These
            are the patterns we see — and break — in every engagement.
          </p>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {problems.map((p, i) => (
              <div
                key={p.problem}
                className={`rounded-2xl p-8 ${i % 2 === 0 ? "bg-white" : "bg-navy"} border border-border hover-lift`}
              >
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-blue/20 flex items-center justify-center flex-shrink-0">
                    <p.icon className="w-6 h-6 text-cyan" />
                  </div>
                  <div>
                    <span className="inline-block text-xs font-bold tracking-widest uppercase text-red-500 mb-1">
                      Challenge
                    </span>
                    <h3 className="text-lg font-bold text-text-primary">
                      {p.problem}
                    </h3>
                  </div>
                </div>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {p.description}
                </p>
                <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-5">
                  <span className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-500 mb-2">
                    Our Solution
                  </span>
                  <p className="text-text-secondary leading-relaxed">
                    {p.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="relative py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-cyan bg-cyan/10 rounded-full mb-4">
            What We Deliver
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Solutions &{" "}
            <span className="gradient-text">Service Offerings</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl">
            Each engagement is tailored to your data maturity, infrastructure
            complexity, and organizational readiness. From strategy through
            production deployment and ongoing managed operations — we meet you
            where you are and take you where you need to be.
          </p>
          <div className="mt-12 space-y-10">
            {serviceOfferings.map((offering, idx) => (
              <div
                key={offering.title}
                className="relative bg-white rounded-2xl border border-border overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan to-blue rounded-l-2xl" />
                <div className="p-8 md:p-10 pl-10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-cyan to-blue text-white text-sm font-bold">
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
                    <p className="text-text-secondary leading-relaxed">
                      {offering.outcomes}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-cyan bg-cyan/10 rounded-full mb-4">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Key <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl">
            From conversational interfaces to autonomous remediation — we
            deliver AI platforms that transform operations from reactive
            firefighting to predictive, data-driven intelligence.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="gradient-border p-8 hover-lift">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-blue/20 flex items-center justify-center mb-5">
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

      {/* Enterprise Technology Expertise */}
      <section className="relative py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-cyan bg-cyan/10 rounded-full mb-4">
            Featured
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Enterprise Technology{" "}
            <span className="gradient-text">Expertise</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl">
            Battle-tested technologies selected for production readiness, team
            maintainability, and long-term viability.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {enterpriseTech.map((group) => (
              <div
                key={group.category}
                className="relative bg-white rounded-2xl border border-border p-6 overflow-hidden hover-lift"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan/5 to-transparent rounded-bl-[80px]" />
                <h3 className="text-lg font-bold text-text-primary mb-1">
                  {group.category}
                </h3>
                <p className="text-sm text-text-muted mb-4">
                  {group.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm font-medium text-cyan bg-cyan/10 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-cyan bg-cyan/10 rounded-full mb-4">
            Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Technologies We <span className="gradient-text">Build With</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl">
            We select technologies based on production readiness, team
            maintainability, and long-term viability — not hype cycles. Every
            tool in our stack has been battle-tested across enterprise
            deployments.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2.5 text-sm font-medium text-text-secondary border border-border rounded-full hover:border-cyan/30 hover:text-cyan transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Case Study */}
      <section className="relative py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-cyan bg-cyan/10 rounded-full mb-4">
            Case Study
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Related <span className="gradient-text">Work</span>
          </h2>
          <div className="mt-8 gradient-border p-8 hover-lift">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan bg-cyan/10 rounded-full mb-4">
                  AI Platform
                </span>
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  SanGPT: Enterprise SAN Intelligence Platform
                </h3>
                <p className="text-text-secondary max-w-2xl">
                  The single pane of glass for enterprise SAN — powered by AI.
                  We built an AI-powered Storage Area Network intelligence
                  platform that replaces fragmented, vendor-specific management
                  tools with a single, unified system. Storage administrators
                  ask questions in plain English and get tool-backed, data-driven
                  answers about their entire SAN environment — spanning multiple
                  vendors, fabrics, and data centers. 50+ AI-backed tools,
                  zero-hallucination architecture, and 70% faster issue
                  resolution from day one.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {[
                    "70% Faster MTTR",
                    "50+ AI Tools",
                    "Zero Hallucination",
                    "Multi-Vendor Unified",
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
            Discuss Your <span className="gradient-text">AI Strategy</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto mb-8">
            Let&apos;s explore how a tool-backed AI platform can transform your
            operations — from conversational interfaces to zero-hallucination
            architectures that scale across the enterprise. No generic pitches.
            We&apos;ll review your data landscape and map the fastest path to
            measurable ROI.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue to-cyan text-white font-semibold hover:shadow-lg hover:shadow-cyan/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Discuss Your AI Strategy
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
