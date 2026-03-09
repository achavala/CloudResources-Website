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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Intelligent Automation | Cloud Resources",
  description:
    "Autonomous AI agent systems that execute complex business workflows end-to-end with multi-agent orchestration, policy governance, and immutable audit trails.",
};

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
      "Microsoft Graph API integration with NLP classification, entity extraction, and intent recognition that processes thousands of emails daily — auto-routing, prioritizing, and resolving routine communications.",
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
      "Playbook-based detection, diagnosis, and execution that resolves operational incidents autonomously. Progressive escalation from advisory to semi-autonomous to fully autonomous as trust scores build.",
  },
  {
    icon: ShieldCheck,
    title: "Policy-Governed Execution",
    description:
      "Configurable approval gates, rate limits, budget constraints, and escalation thresholds that bound agent behavior. Every high-stakes decision routes through human reviewers before committing.",
  },
  {
    icon: ScrollText,
    title: "Immutable Audit Trails",
    description:
      "Compliance-grade logging that captures every agent decision with full provenance — who triggered it, what data informed it, and what outcome resulted. Built for regulated industries that demand forensic traceability.",
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
];

const metrics = [
  { value: "90%", label: "Process Automation" },
  { value: "61M+", label: "Signals Processed" },
  { value: "12", label: "AI Agents" },
];

export default function IntelligentAutomationPage() {
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
              Autonomous AI agent systems that execute complex business workflows
              end-to-end. 12-agent staffing system processing 61M+ signals.
              Self-improving trading systems. Playbook-based remediation.
              Policy-governed execution with immutable audit trails.
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
            From multi-agent orchestration and email intelligence to
            policy-governed execution and compliance-grade audit trails —
            automation that scales operations while maintaining full governance.
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
            Ready to Deploy{" "}
            <span className="gradient-text">Autonomous Agents</span>?
          </h2>
          <p className="text-lg text-text-secondary max-w-xl mx-auto mb-8">
            Let&apos;s build an intelligent automation system that scales your
            operations with policy governance, closed-loop feedback, and full
            compliance audit trails.
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
