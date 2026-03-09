import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Cloud,
  Server,
  Code2,
  Brain,
  Gauge,
  DollarSign,
  GitMerge,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cloud & DevOps | Cloud Resources",
  description:
    "Cloud-native operational intelligence platforms with Kubernetes orchestration, Infrastructure-as-Code, AI-powered observability, DORA metrics, FinOps optimization, and CI/CD pipeline engineering.",
};

const capabilities = [
  {
    icon: Server,
    title: "Kubernetes Orchestration",
    description:
      "Production EKS, GKE, and AKS cluster management with auto-scaling node pools, namespace governance, resource quotas, and zero-downtime rolling deployments across multi-cloud environments.",
  },
  {
    icon: Code2,
    title: "Infrastructure-as-Code",
    description:
      "Terraform and CloudFormation modules with modular composition, state management, and drift detection. Every infrastructure resource version-controlled, peer-reviewed, and reproducible across environments.",
  },
  {
    icon: Brain,
    title: "Operational Intelligence",
    description:
      "AI-powered PromQL, LogQL, and TraceQL queries executed against live telemetry from Prometheus, Grafana, and OpenTelemetry. Natural language questions that return data-backed reliability and cost insights.",
  },
  {
    icon: Gauge,
    title: "DORA Metrics & SRE",
    description:
      "Deployment frequency, lead time for changes, change failure rate, and MTTR tracking that quantifies engineering velocity. SRE practices with error budgets, SLOs, and incident response automation.",
  },
  {
    icon: DollarSign,
    title: "FinOps & Cost Optimization",
    description:
      "Cloud spend analytics with OpenCost, resource right-sizing recommendations, spot instance strategies, and chargeback reporting that reduces infrastructure costs by 40% while maintaining SLA targets.",
  },
  {
    icon: GitMerge,
    title: "CI/CD Pipeline Engineering",
    description:
      "ArgoCD GitOps workflows, GitHub Actions pipelines, and automated deployment strategies with canary releases, blue-green deployments, and rollback automation across all environments.",
  },
];

const technologies = [
  "AWS EKS",
  "Terraform",
  "Kubernetes",
  "Docker",
  "Prometheus",
  "Grafana",
  "ArgoCD",
  "OpenTelemetry",
  "OpenCost",
  "Grafana Loki",
];

const metrics = [
  { value: "99.99%", label: "Uptime" },
  { value: "70%", label: "MTTR Reduction" },
  { value: "40%", label: "Cost Savings" },
];

export default function CloudDevOpsPage() {
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
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald to-cyan flex items-center justify-center mb-6">
              <Cloud className="w-7 h-7 text-white" />
            </div>
            <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
              RESILIENCE. Delivered.
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary">
              Cloud & DevOps
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-2xl">
              Cloud-native operational intelligence platforms that unify metrics,
              logs, traces, costs, and incidents into an AI-powered view. DevOps
              platforms that answer reliability, delivery, cost, and risk
              questions in natural language using real telemetry from Prometheus,
              Grafana, and OpenTelemetry.
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
            From Kubernetes orchestration and Infrastructure-as-Code to
            AI-powered observability and FinOps — we build platforms that deliver
            99.99% uptime at a fraction of traditional costs.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="gradient-border p-8 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald/20 to-cyan/20 flex items-center justify-center mb-5">
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
            Ready to Build{" "}
            <span className="gradient-text">Resilient Infrastructure</span>?
          </h2>
          <p className="text-lg text-text-secondary max-w-xl mx-auto mb-8">
            Let&apos;s architect a cloud-native platform that delivers 99.99%
            uptime with AI-powered observability, GitOps automation, and FinOps
            cost optimization.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-emerald to-cyan text-white font-semibold hover:shadow-lg hover:shadow-cyan/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Discuss Your Cloud Strategy
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
