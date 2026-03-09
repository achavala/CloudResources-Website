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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Data & AI Solutions | Cloud Resources",
  description:
    "Enterprise AI platforms with tool-backed LLMs, conversational interfaces, and zero-hallucination architectures.",
};

const capabilities = [
  {
    icon: MessageSquare,
    title: "Conversational AI Platforms",
    description:
      "Build ChatGPT-like interfaces for enterprise ops with 50+ tools backing every response. Natural language queries that return data-backed answers in seconds — no more switching between dashboards or running manual reports.",
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
    title: "Executive Dashboards",
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
];

export default function DataAIPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-cyan transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          <div className="max-w-3xl">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan to-blue flex items-center justify-center mb-6">
              <Brain className="w-7 h-7 text-white" />
            </div>
            <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
              INTELLIGENCE. Delivered.
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary">
              Data & AI Solutions
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-2xl">
              We build enterprise AI platforms that combine conversational
              interfaces with tool-backed LLM architectures. GPT-4o function
              calling with zero-hallucination guarantees. RAG pipelines.
              Multi-vendor data unification. Natural language to operational
              insights — every response grounded in real data, never fabricated.
            </p>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="relative py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
            Capabilities
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Key <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl">
            From conversational interfaces to autonomous remediation — we deliver
            AI platforms that transform operations from reactive firefighting to
            predictive, data-driven intelligence.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="gradient-border p-8 hover-lift"
              >
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

      {/* Technologies */}
      <section className="relative py-24 bg-navy/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
            Stack
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Technologies We <span className="gradient-text">Build With</span>
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2.5 text-sm font-medium text-text-secondary border border-white/10 rounded-full bg-white/[0.03] hover:border-cyan/30 hover:text-cyan transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="relative py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
            Impact
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Measurable <span className="gradient-text">Results</span>
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
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
      <section className="relative py-24 bg-navy/30 border-t border-white/5">
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
                  AI Platform
                </span>
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  SanGPT: Enterprise SAN Intelligence Platform
                </h3>
                <p className="text-text-secondary max-w-2xl">
                  The single pane of glass for enterprise SAN — powered by AI.
                  Built an AI-powered Storage Area Network intelligence platform
                  that replaces fragmented, vendor-specific management tools with
                  a single, unified system. Storage administrators ask questions
                  in plain English and get tool-backed, data-driven answers about
                  their entire SAN environment — spanning multiple vendors,
                  fabrics, and data centers.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {["70% Faster MTTR", "50+ AI Tools", "Zero Hallucination"].map(
                    (badge) => (
                      <li
                        key={badge}
                        className="inline-flex items-center gap-1.5 text-sm text-text-muted"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan flex-shrink-0" />
                        {badge}
                      </li>
                    )
                  )}
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
      <section className="relative py-24 sm:py-32 border-t border-white/5">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-text-primary">
            Discuss Your <span className="gradient-text">AI Strategy</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-xl mx-auto mb-8">
            Let&apos;s explore how a tool-backed AI platform can transform your
            operations — from conversational interfaces to zero-hallucination
            architectures that scale across the enterprise.
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
