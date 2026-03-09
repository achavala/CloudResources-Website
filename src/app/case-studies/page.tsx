import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Brain,
  Bot,
  Database,
  Cloud,
  LineChart,
  Cpu,
  Target,
  Shield,
  Zap,
  BarChart3,
} from "lucide-react";

const caseStudies = [
  {
    slug: "ai-run-sos",
    tag: "Intelligent Automation",
    title: "AI-RUN SOS: Staffing Operating System",
    subtitle: "AI-native platform automating 90-95% of IT staffing operations",
    description:
      "Designed and built an AI-native staffing platform with 12 autonomous agents that process 61M+ vendor requirement signals extracted from 812K emails. The system executes closed-loop workflows — from email triage to follow-up to trust scoring — replacing 10 recruiters with 1 operator + AI.",
    problem:
      "IT staffing firms lose millions to manual email triage, inconsistent follow-ups, tribal vendor knowledge, and recruiter turnover. Industry-average conversion is only 2-5%.",
    solution:
      "12 policy-bound AI agents with immutable audit trails, outcome-based vendor Trust Graph, Microsoft Graph API email intelligence, and a 47 DB model architecture with 160+ API endpoints. Full closed-loop execution.",
    icon: Bot,
    color: "from-purple to-pink-500",
    technologies: [
      "TypeScript", "NestJS", "Prisma", "Next.js", "PostgreSQL", "Redis",
      "Microsoft Graph API", "Turborepo", "PgBoss", "Zod",
    ],
    metrics: [
      { value: "61M+", label: "Signals Processed" },
      { value: "12", label: "AI Agents" },
      { value: "812K", label: "Emails Analyzed" },
      { value: "90%", label: "Automation Rate" },
      { value: "160+", label: "API Endpoints" },
      { value: "$5M/yr", label: "Projected Value" },
    ],
    outcomes: [
      "Replaces 10 recruiters with 1 operator + 12 AI agents",
      "Extracts 61M+ vendor requirement signals from email data",
      "Outcome-based Trust Graph scores vendor reliability",
      "Full immutable audit trail for compliance",
      "Target: 1 closure/day = $5M/year gross margin",
    ],
  },
  {
    slug: "dra",
    tag: "Data Reliability",
    title: "DRA: Data Reliability Agent",
    subtitle: "AI agent that triages failed data pipelines in under 2 minutes",
    description:
      "Built an AI agent that automatically triages failed dbt pipelines and proposes safe, human-approved SQL fixes using lineage analysis and past incidents. Reduces mean-time-to-triage from 30-120 minutes to under 2 minutes.",
    problem:
      "Data pipeline failures cost enterprises ~$15M/year. Manual triage takes 2-8 hours per incident with high MTTR and risk of human error. On-call engineers face alert fatigue.",
    solution:
      "End-to-end loop: Ingest → Triage → Propose → Validate → Approve → PR. dbt-native agent with lineage-first blast radius analysis, dual-mode (heuristic + LLM) reasoning, and approval-gated execution. Auto-creates GitHub PRs.",
    icon: Database,
    color: "from-emerald to-cyan",
    technologies: [
      "Python", "FastAPI", "PostgreSQL", "Qdrant", "Claude Opus 4.6",
      "OpenAI Embeddings", "networkx", "dbt-core", "Docker",
    ],
    metrics: [
      { value: "95%", label: "Triage Reduction" },
      { value: "<2min", label: "Triage Time" },
      { value: "80x", label: "ROI Potential" },
      { value: "90%", label: "MTTR Reduction" },
      { value: "Zero", label: "Auto-Apply Risk" },
      { value: "$200K", label: "Annual Savings" },
    ],
    outcomes: [
      "Reduced triage time from 30-120 minutes to under 2 minutes",
      "90% reduction in MTTR (2-8 hours to <15 minutes)",
      "8x-80x ROI ($50K-$200K annual savings per team)",
      "Approval-gated execution ensures zero auto-apply risk",
      "Auto-generated GitHub PRs with full context and lineage",
    ],
  },
  {
    slug: "sangpt",
    tag: "AI Platform",
    title: "SanGPT: Enterprise SAN Intelligence Platform",
    subtitle: "The single pane of glass for enterprise SAN — powered by AI",
    description:
      "Built an AI-powered Storage Area Network intelligence platform that replaces fragmented, vendor-specific management tools with a single, unified system. Storage administrators can ask questions in plain English and get tool-backed, data-driven answers about their entire SAN environment — spanning multiple vendors, fabrics, and data centers.",
    problem:
      "Fortune 500 companies manage 20+ storage arrays across 3-4 vendors with separate tools. Storage teams spend 60-70% of their time on manual data gathering. Outages cost $100K-$500K per hour.",
    solution:
      "Conversational AI interface backed by 50+ tools with zero-hallucination guarantees, ML-driven anomaly detection, capacity forecasting, and autonomous remediation. Multi-vendor connectors unify Pure Storage, Dell, HPE, NetApp, Brocade, and Cisco under one canonical data model.",
    icon: Brain,
    color: "from-cyan to-blue",
    technologies: [
      "GPT-4o", "LangChain", "FastAPI", "Next.js", "PostgreSQL", "TimescaleDB",
      "Neo4j", "OpenSearch", "Redis", "XGBoost", "scikit-learn", "ReactFlow",
    ],
    metrics: [
      { value: "70%", label: "Faster MTTR" },
      { value: "$600K", label: "Value Per Deployment" },
      { value: "7", label: "Vendor Connectors" },
      { value: "50+", label: "AI-Backed Tools" },
      { value: "3", label: "Trained ML Models" },
      { value: "Zero", label: "Hallucination Rate" },
    ],
    outcomes: [
      "4x ROI achieved in the first year of deployment",
      "Reduced incident MTTR from 4-8 hours to under 1 hour",
      "Prevented capacity exhaustion with 95% confidence forecasting",
      "Unified 7 vendor platforms into a single AI-powered interface",
      "Automated chargeback reporting saving 15+ hours per week",
    ],
  },
  {
    slug: "devopssregpt",
    tag: "DevOps Intelligence",
    title: "DevopsSREGPT: Operational Intelligence Platform",
    subtitle: "Natural language answers for reliability, delivery, cost, and risk",
    description:
      "Built an operational intelligence platform for engineering and finance teams that answers reliability, DORA metrics, cost, and risk questions in natural language using real telemetry data from Prometheus, Grafana, and OpenTelemetry.",
    problem:
      "Fragmented tools (metrics, cost, incidents in separate systems). Slow root cause analysis. Reactive firefighting. Finance and engineering misaligned on cost and reliability.",
    solution:
      "Tool-using AI copilot that runs real PromQL/LogQL/TraceQL queries — never hallucinating data. Unified reliability + DORA + cost + risk view. Vendor-neutral OpenTelemetry-based architecture with risk-based early warning.",
    icon: Cloud,
    color: "from-blue to-emerald",
    technologies: [
      "Python", "FastAPI", "GPT-4o", "PostgreSQL", "ChromaDB", "Next.js",
      "Prometheus", "Grafana Loki", "Grafana Tempo", "OpenCost", "ArgoCD",
    ],
    metrics: [
      { value: "20+", label: "Query Types" },
      { value: "Real", label: "Telemetry Data" },
      { value: "Unified", label: "Reliability View" },
      { value: "Zero", label: "Hallucination" },
      { value: "DORA", label: "Metrics Built-in" },
      { value: "FinOps", label: "Cost Intelligence" },
    ],
    outcomes: [
      "Unified reliability, delivery, cost, and risk in one platform",
      "Real PromQL/LogQL/TraceQL queries — never hallucinated data",
      "Vendor-neutral architecture based on OpenTelemetry",
      "Change-to-incident causality for proactive risk management",
      "RBAC, audit logs, and explainability for enterprise compliance",
    ],
  },
  {
    slug: "putsengine",
    tag: "ML Trading Systems",
    title: "PutsEngine: Institutional-Grade Options Intelligence",
    subtitle: "Automated detection of asymmetric PUT opportunities using ML",
    description:
      "Designed an institutional-grade automated PUT options trading engine that detects stocks likely to decline 5-20% within 1-10 days using dark pool analysis, Gamma Exposure (GEX), distribution detection, and multi-model ML convergence.",
    problem:
      "Identifying asymmetric put option opportunities requires analyzing institutional footprints across multiple data sources in real-time. Manual analysis misses time-critical signals.",
    solution:
      "9-step detection pipeline with 4-system convergence engine (EWS, Gamma Drain, Weather, Direction). 144-ticker universe across 15 sectors. 10 institutional footprints tracked. Early Warning System detects positions 1-3 days before breakdown.",
    icon: LineChart,
    color: "from-amber-400 to-orange-500",
    technologies: [
      "Python", "Streamlit", "XGBoost", "LightGBM", "scikit-learn",
      "Polygon.io API", "Unusual Whales", "Alpaca Markets",
    ],
    metrics: [
      { value: "144", label: "Ticker Universe" },
      { value: "990", label: "Opportunities/Mo" },
      { value: "15", label: "Sector Coverage" },
      { value: "10", label: "Institutional Signals" },
      { value: "12", label: "Daily Scans" },
      { value: "9-Step", label: "Detection Pipeline" },
    ],
    outcomes: [
      "990 opportunities detected in a single month",
      "Early Warning System detects positions 1-3 days before breakdown",
      "4-system convergence eliminates false positives",
      "Vega Gate for IV regime management and risk control",
      "Capital Ramp protocol for position sizing optimization",
    ],
  },
  {
    slug: "tradenova",
    tag: "AI Trading Platform",
    title: "TradeNova: Multi-Agent Options Trading Platform",
    subtitle: "5-agent system with reinforcement learning on AWS EKS",
    description:
      "Built an institutional-grade automated options trading platform on AWS EKS combining 10+ detection layers, a 5-agent multi-agent system, and reinforcement learning. Master Picks unified scoring aggregates signals across all agents for optimal trade selection.",
    problem:
      "Detecting institutional mechanical pressure 1-2 days before major price moves while managing risk across multiple positions requires computational intelligence beyond human capability.",
    solution:
      "5-agent orchestrator (Trend, MeanReversion, Volatility, EMA, Options) with Master Picks scoring (0-350+ points). 7-layer Market Weather System. Moonshot engine scanning for 5x-30x opportunities. Self-improving ML with nightly retraining.",
    icon: Cpu,
    color: "from-violet-500 to-purple",
    technologies: [
      "Python", "AWS EKS", "Terraform", "PostgreSQL", "Redis", "PyTorch",
      "stable-baselines3", "LightGBM", "Streamlit", "FastAPI",
    ],
    metrics: [
      { value: "5", label: "Trading Agents" },
      { value: "10+", label: "Detection Layers" },
      { value: "124", label: "Ticker Universe" },
      { value: "7-Layer", label: "Market Weather" },
      { value: "$280/mo", label: "Infrastructure" },
      { value: "34", label: "Daily Scans" },
    ],
    outcomes: [
      "5-agent multi-agent system with unified scoring",
      "10+ detection engines for signal diversity",
      "Self-improving ML with nightly Bayesian weight updating",
      "5-tier profit cascade (TP1 +40% through TP5 +200%)",
      "Total AWS infrastructure cost under $280/month",
    ],
  },
];

export const metadata: Metadata = {
  title: "Case Studies | Cloud Resources — AI & ML Solutions",
  description:
    "Explore real-world AI platforms, ML pipelines, and autonomous systems we've built for enterprise clients. SanGPT, AI-RUN SOS, DRA, and more.",
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
              Case Studies
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Real AI Solutions.{" "}
              <span className="gradient-text">Real Results.</span>
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-2xl">
              Explore how we&apos;ve built AI platforms, ML pipelines, and autonomous
              systems that deliver measurable enterprise value across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {caseStudies.map((study, index) => (
        <section
          key={study.slug}
          className={`relative py-24 ${
            index % 2 === 0 ? "" : "bg-navy"
          } border-t border-border`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center`}
              >
                <study.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xs font-semibold text-cyan bg-cyan/10 px-3 py-1 rounded-full">
                  {study.tag}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
              <div className="lg:col-span-3">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
                  {study.title}
                </h2>
                <p className="text-lg text-cyan font-medium mb-6">
                  {study.subtitle}
                </p>
                <p className="text-text-secondary leading-relaxed mb-8">
                  {study.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="gradient-border p-6">
                    <h3 className="text-sm font-semibold text-red-400 tracking-wider uppercase mb-3 flex items-center gap-2">
                      <Target className="w-4 h-4" /> The Challenge
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {study.problem}
                    </p>
                  </div>
                  <div className="gradient-border p-6">
                    <h3 className="text-sm font-semibold text-emerald tracking-wider uppercase mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4" /> Our Solution
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-text-primary tracking-wider uppercase mb-3">
                    Key Outcomes
                  </h3>
                  <ul className="space-y-2">
                    {study.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald mt-0.5 shrink-0" />
                        <span className="text-sm text-text-secondary">{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-text-primary tracking-wider uppercase mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-medium text-text-secondary border border-border rounded-full bg-navy"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="gradient-border p-8 sticky top-28">
                  <h3 className="text-sm font-semibold text-text-primary tracking-wider uppercase mb-6">
                    Impact Metrics
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {study.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-2xl font-extrabold gradient-text">
                          {m.value}
                        </div>
                        <div className="text-xs text-text-muted font-medium mt-1">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="relative py-24 sm:py-32 border-t border-border hero-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
            Ready to Be Our{" "}
            <span className="gradient-text">Next Success Story?</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto mb-8">
            Every project starts with a conversation. Let&apos;s explore what AI can do
            for your enterprise.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan to-blue text-white font-semibold hover:shadow-lg hover:shadow-cyan/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Discuss Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
