import type { Metadata } from "next";
import Link from "next/link";
import {
  Brain,
  Database,
  Cloud,
  Bot,
  Cpu,
  Users,
  ArrowRight,
  CheckCircle2,
  Layers,
  GitBranch,
  BarChart3,
  Shield,
  Workflow,
  MessageSquare,
  LineChart,
  Server,
  Container,
  Globe,
  Code2,
  Gauge,
} from "lucide-react";

const services = [
  {
    id: "data-ai",
    icon: Brain,
    title: "Data & AI Solutions",
    subtitle: "INTELLIGENCE. Delivered.",
    description:
      "We build enterprise AI platforms that combine conversational interfaces with tool-backed LLM architectures, ensuring every AI response is grounded in real data — never hallucinated. Our platforms integrate GPT-4o function calling, RAG pipelines, and multi-agent orchestration to transform how enterprises interact with complex operational data.",
    capabilities: [
      "Conversational AI with tool-backed architectures (50+ tools)",
      "GPT-4o function calling with zero-hallucination guarantees",
      "RAG pipelines with pgvector and ChromaDB",
      "Multi-vendor data unification and canonical models",
      "Natural language to operational insights",
      "Executive dashboards with real-time KPIs",
    ],
    technologies: ["OpenAI GPT-4o", "LangChain", "pgvector", "ChromaDB", "FastAPI", "Next.js"],
    metrics: [
      { value: "70%", label: "Faster Issue Resolution" },
      { value: "50+", label: "AI Tools per Platform" },
      { value: "Zero", label: "Hallucination Rate" },
    ],
    color: "from-cyan to-blue",
  },
  {
    id: "ml-engineering",
    icon: Cpu,
    title: "ML Engineering & Operations",
    subtitle: "PREDICTION. Delivered.",
    description:
      "Our ML engineering practice builds production-grade machine learning pipelines that detect anomalies, predict failures, score risks, and forecast capacity. From Isolation Forest anomaly detection to XGBoost risk scoring to reinforcement learning — we deploy models that learn and improve continuously.",
    capabilities: [
      "Anomaly detection (Isolation Forest, autoencoders)",
      "Predictive forecasting (Holt-Winters, Prophet, ARIMA)",
      "Risk scoring models (XGBoost, LightGBM)",
      "Reinforcement learning for adaptive optimization",
      "Multi-agent ML systems with Bayesian weight updating",
      "Automated model retraining and monitoring pipelines",
    ],
    technologies: ["scikit-learn", "XGBoost", "LightGBM", "PyTorch", "stable-baselines3", "MLflow"],
    metrics: [
      { value: "10+", label: "ML Models Deployed" },
      { value: "95%", label: "Prediction Confidence" },
      { value: "4x", label: "ROI First Year" },
    ],
    color: "from-blue to-purple",
  },
  {
    id: "automation",
    icon: Bot,
    title: "Intelligent Automation",
    subtitle: "AUTONOMY. Delivered.",
    description:
      "We design and deploy autonomous AI agent systems that execute complex business workflows end-to-end. From 12-agent staffing operations systems processing 61M+ signals to self-improving trading systems — our automation platforms operate with policy governance, immutable audit trails, and human-in-the-loop safety.",
    capabilities: [
      "Multi-agent AI systems (up to 12+ coordinated agents)",
      "Autonomous workflow execution with policy bounds",
      "Email intelligence and NLP classification",
      "Closed-loop feedback with outcome-based scoring",
      "Playbook-based remediation (advisory → autonomous)",
      "Immutable audit trails and compliance logging",
    ],
    technologies: ["NestJS", "Prisma", "Microsoft Graph API", "OpenAI", "PgBoss", "Redis"],
    metrics: [
      { value: "90%", label: "Process Automation" },
      { value: "61M+", label: "Signals Processed" },
      { value: "12", label: "AI Agents Deployed" },
    ],
    color: "from-purple to-pink-500",
  },
  {
    id: "cloud-devops",
    icon: Cloud,
    title: "Cloud & DevOps",
    subtitle: "RESILIENCE. Delivered.",
    description:
      "We build cloud-native operational intelligence platforms that unify metrics, logs, traces, costs, and incidents into a single AI-powered view. Our DevOps platforms answer reliability, delivery, cost, and risk questions in natural language using real telemetry data from Prometheus, Grafana, and OpenTelemetry.",
    capabilities: [
      "Kubernetes orchestration (EKS, GKE, AKS)",
      "Infrastructure-as-Code (Terraform, CloudFormation)",
      "Operational intelligence with PromQL/LogQL/TraceQL",
      "DORA metrics and SRE automation",
      "Cost optimization and FinOps dashboards",
      "Multi-cloud deployment and management",
    ],
    technologies: ["AWS EKS", "Terraform", "Prometheus", "Grafana", "ArgoCD", "Docker"],
    metrics: [
      { value: "99.99%", label: "Uptime Achieved" },
      { value: "70%", label: "MTTR Reduction" },
      { value: "40%", label: "Cost Savings" },
    ],
    color: "from-emerald to-cyan",
  },
  {
    id: "data-engineering",
    icon: Database,
    title: "Data Engineering",
    subtitle: "RELIABILITY. Delivered.",
    description:
      "We architect polyglot data platforms with purpose-built databases for every workload — time-series for metrics, graph for topology, vector stores for AI, and search engines for events. Our data reliability agents automatically detect, diagnose, and fix pipeline failures using AI-driven triage.",
    capabilities: [
      "Polyglot persistence (PostgreSQL, TimescaleDB, Neo4j, OpenSearch)",
      "Real-time data pipeline architecture",
      "dbt pipeline reliability with AI-driven triage",
      "Time-series analytics and capacity forecasting",
      "Graph database topology and lineage analysis",
      "Automated data quality monitoring and alerting",
    ],
    technologies: ["PostgreSQL", "TimescaleDB", "Neo4j", "OpenSearch", "dbt", "Qdrant"],
    metrics: [
      { value: "95%", label: "Triage Time Reduction" },
      { value: "6+", label: "Database Technologies" },
      { value: "<2min", label: "Pipeline Triage Time" },
    ],
    color: "from-cyan to-emerald",
  },
  {
    id: "staffing",
    icon: Users,
    title: "Technology Staffing",
    subtitle: "TALENT. Delivered.",
    description:
      "Our AI-enhanced staffing practice places elite technology talent — from AI/ML engineers to cloud architects to DevOps specialists. Backed by our proprietary AI staffing platform that processes millions of data points to match the right talent with the right opportunity.",
    capabilities: [
      "AI/ML engineers and data scientists",
      "Cloud architects (AWS, Azure, GCP certified)",
      "DevOps and SRE specialists",
      "Full-stack developers (Python, TypeScript, Java)",
      "Data engineers and analytics experts",
      "Contract, contract-to-hire, and direct placement",
    ],
    technologies: ["Python", "TypeScript", "Java", "AWS", "Azure", "Kubernetes"],
    metrics: [
      { value: "500+", label: "Consultants Placed" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "<15 days", label: "Average Placement" },
    ],
    color: "from-blue to-cyan",
  },
];

const iconMap: Record<string, React.ElementType> = {
  "Data & AI Solutions": MessageSquare,
  "ML Engineering & Operations": LineChart,
  "Intelligent Automation": Workflow,
  "Cloud & DevOps": Server,
  "Data Engineering": GitBranch,
  "Technology Staffing": Code2,
};

export const metadata: Metadata = {
  title: "Services | Cloud Resources — AI, ML & Data Solutions",
  description: "Enterprise AI platforms, ML engineering, intelligent automation, cloud & DevOps, data engineering, and technology staffing services.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
              Our Services
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Engineering <span className="gradient-text">Intelligence</span>{" "}
              That Scales
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-2xl">
              From conversational AI platforms to autonomous ML systems, we deliver
              end-to-end solutions that transform enterprise operations and create
              measurable business value.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`relative py-24 ${
            index % 2 === 0 ? "" : "bg-navy/30"
          } border-t border-white/5`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-bold text-cyan tracking-wider uppercase">
                  {service.subtitle}
                </span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
                  {service.title}
                </h2>
                <p className="mt-4 text-text-secondary leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-8">
                  <h3 className="text-sm font-semibold text-text-primary tracking-wider uppercase mb-4">
                    Core Capabilities
                  </h3>
                  <ul className="space-y-3">
                    {service.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald mt-0.5 shrink-0" />
                        <span className="text-sm text-text-secondary">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <h3 className="text-sm font-semibold text-text-primary tracking-wider uppercase mb-3">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-medium text-text-secondary border border-white/10 rounded-full bg-white/[0.02]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="gradient-border p-8">
                  <h3 className="text-sm font-semibold text-text-primary tracking-wider uppercase mb-6">
                    Impact Metrics
                  </h3>
                  <div className="grid grid-cols-3 gap-6">
                    {service.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <div className="text-2xl sm:text-3xl font-extrabold gradient-text">
                          {m.value}
                        </div>
                        <div className="mt-1 text-xs text-text-muted font-medium">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="gradient-border p-8">
                  <h3 className="text-sm font-semibold text-text-primary tracking-wider uppercase mb-4">
                    How This Creates Value
                  </h3>
                  <div className="space-y-4">
                    {index === 0 && (
                      <>
                        <ValuePoint icon={Gauge} text="Transform operations from reactive firefighting to predictive, AI-driven management" />
                        <ValuePoint icon={Layers} text="Unify fragmented vendor tools into a single AI-powered intelligence platform" />
                        <ValuePoint icon={BarChart3} text="Enable anyone to query complex systems in natural language with data-backed answers" />
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <ValuePoint icon={Gauge} text="Detect anomalies and predict failures before they cause outages" />
                        <ValuePoint icon={Layers} text="Forecast capacity with seasonal awareness and confidence intervals" />
                        <ValuePoint icon={BarChart3} text="Score and prioritize risks using ML-learned patterns from historical data" />
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <ValuePoint icon={Gauge} text="Replace 10 manual operators with 1 operator + 12 AI agents" />
                        <ValuePoint icon={Layers} text="Process millions of signals with closed-loop intelligence and trust scoring" />
                        <ValuePoint icon={BarChart3} text="Achieve 90-95% automation with full audit trails and compliance" />
                      </>
                    )}
                    {index === 3 && (
                      <>
                        <ValuePoint icon={Gauge} text="Unify metrics, logs, traces, and costs into AI-queryable platform" />
                        <ValuePoint icon={Layers} text="Reduce MTTR by 70% with real-time root cause analysis" />
                        <ValuePoint icon={BarChart3} text="Optimize cloud costs by 40% with FinOps intelligence" />
                      </>
                    )}
                    {index === 4 && (
                      <>
                        <ValuePoint icon={Gauge} text="Reduce pipeline triage from 2 hours to under 2 minutes with AI agents" />
                        <ValuePoint icon={Layers} text="Ensure data reliability with automated quality monitoring across all pipelines" />
                        <ValuePoint icon={BarChart3} text="Deliver 8x-80x ROI through eliminated manual data incident response" />
                      </>
                    )}
                    {index === 5 && (
                      <>
                        <ValuePoint icon={Gauge} text="AI-matched talent placement in under 15 business days" />
                        <ValuePoint icon={Layers} text="Access elite AI/ML specialists, cloud architects, and data engineers" />
                        <ValuePoint icon={BarChart3} text="95% client satisfaction with dedicated account management" />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="relative py-24 sm:py-32 border-t border-white/5">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Let&apos;s Build Your <span className="gradient-text">AI Advantage</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-xl mx-auto mb-8">
            Every enterprise challenge has an AI-native solution. Let&apos;s discuss yours.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan to-blue text-white font-semibold hover:shadow-lg hover:shadow-cyan/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}

function ValuePoint({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-lg bg-cyan/10 flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-cyan" />
      </div>
      <p className="text-sm text-text-secondary leading-relaxed">{text}</p>
    </div>
  );
}
