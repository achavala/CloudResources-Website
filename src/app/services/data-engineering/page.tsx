import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Database,
  Layers,
  Workflow,
  Sparkles,
  Network,
  Search,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Data Engineering | Cloud Resources",
  description:
    "Polyglot data platform architectures with purpose-built databases, AI-driven pipeline triage, real-time streaming, graph databases, vector stores, and automated data quality monitoring.",
};

const capabilities = [
  {
    icon: Layers,
    title: "Polyglot Persistence",
    description:
      "Purpose-built database selection across PostgreSQL, TimescaleDB, Neo4j, OpenSearch, and Qdrant — matching each data workload to its optimal storage engine for performance, cost, and query patterns.",
  },
  {
    icon: Workflow,
    title: "Real-Time Data Pipelines",
    description:
      "Streaming, ETL, and event-driven architectures with Apache Airflow orchestration, dbt transformations, and automated lineage tracking. SLA monitoring and freshness alerts at every pipeline stage.",
  },
  {
    icon: Sparkles,
    title: "AI-Driven Pipeline Triage",
    description:
      "DRA agent with LLM-powered diagnostics that automatically classifies pipeline failures, identifies root causes, and recommends fixes — reducing manual triage by 95% and resolution time to under 2 minutes.",
  },
  {
    icon: Network,
    title: "Graph & Topology Analysis",
    description:
      "Neo4j and networkx-powered topology mapping for infrastructure dependencies, service relationships, data lineage tracing, and blast radius analysis that identifies impact paths in seconds.",
  },
  {
    icon: Search,
    title: "Vector Store & RAG",
    description:
      "pgvector and Qdrant embedding pipelines that power semantic search, retrieval-augmented generation, and similarity matching — enabling AI systems to retrieve contextually relevant data with sub-millisecond latency.",
  },
  {
    icon: ShieldCheck,
    title: "Data Quality & Observability",
    description:
      "Automated monitoring with anomaly detection, schema drift alerts, and freshness validation. Every pipeline run is checked against configurable quality thresholds before downstream systems consume the data.",
  },
];

const technologies = [
  "PostgreSQL",
  "TimescaleDB",
  "Neo4j",
  "OpenSearch",
  "Qdrant",
  "dbt",
  "Apache Airflow",
  "pgvector",
  "Redis",
  "Python",
];

const metrics = [
  { value: "95%", label: "Triage Reduction" },
  { value: "6+", label: "Database Types" },
  { value: "<2min", label: "Pipeline Triage" },
];

export default function DataEngineeringPage() {
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
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan to-emerald flex items-center justify-center mb-6">
              <Database className="w-7 h-7 text-white" />
            </div>
            <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
              RELIABILITY. Delivered.
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary">
              Data Engineering
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-2xl">
              Polyglot data platform architectures with purpose-built databases
              for every workload. AI-driven data reliability agents that
              automatically detect, diagnose, and fix pipeline failures.
              Time-series analytics, graph databases, vector stores.
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
            From polyglot persistence and real-time pipelines to AI-driven
            triage and vector stores — full-spectrum data engineering that
            matches every workload to its optimal engine.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="gradient-border p-8 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-emerald/20 flex items-center justify-center mb-5">
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

      {/* CTA */}
      <section className="relative py-24 sm:py-32 border-t border-white/5">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-text-primary">
            Ready to Build Your{" "}
            <span className="gradient-text">Data Platform</span>?
          </h2>
          <p className="text-lg text-text-secondary max-w-xl mx-auto mb-8">
            Let&apos;s architect a polyglot data platform with AI-driven
            pipeline triage, purpose-built databases, and automated quality
            monitoring that scales with your data.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan to-emerald text-white font-semibold hover:shadow-lg hover:shadow-cyan/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Discuss Your Data Strategy
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
