import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";
import {
  Brain,
  Database,
  Cloud,
  Bot,
  Cpu,
  Users,
  ArrowRight,
  Zap,
  Shield,
  BarChart3,
  Sparkles,
  CircuitBoard,
  Target,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Data & AI Solutions",
    href: "/services/data-ai",
    description:
      "Enterprise AI platforms with tool-backed LLMs, conversational interfaces, and zero-hallucination architectures that transform operations from reactive to predictive.",
    color: "from-cyan to-blue",
    stats: "50+ AI Tools",
  },
  {
    icon: Cpu,
    title: "ML Engineering",
    href: "/services/ml-engineering",
    description:
      "Production ML pipelines with anomaly detection, predictive forecasting, and risk scoring models. From Isolation Forest to XGBoost to Reinforcement Learning.",
    color: "from-blue to-purple",
    stats: "10+ ML Models",
  },
  {
    icon: Bot,
    title: "Intelligent Automation",
    href: "/services/intelligent-automation",
    description:
      "Autonomous AI agents that execute complex workflows — from multi-agent orchestration to self-improving systems with closed-loop feedback.",
    color: "from-purple to-pink-500",
    stats: "12+ AI Agents",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    href: "/services/cloud-devops",
    description:
      "Cloud-native architectures on AWS, Azure, and GCP. Kubernetes orchestration, infrastructure-as-code, and operational intelligence platforms.",
    color: "from-emerald to-cyan",
    stats: "100% Cloud",
  },
  {
    icon: Database,
    title: "Data Engineering",
    href: "/services/data-engineering",
    description:
      "Polyglot data architectures with real-time pipelines, time-series analytics, graph databases, vector stores, and automated data quality monitoring.",
    color: "from-cyan to-emerald",
    stats: "6+ DB Types",
  },
  {
    icon: Users,
    title: "Technology Staffing",
    href: "/services/technology-staffing",
    description:
      "Elite AI/ML engineers, data scientists, Java developers, cloud architects and DevOps specialists placed with precision. Contract, C2C, W2, and direct hire.",
    color: "from-blue to-cyan",
    stats: "500+ Placed",
  },
];

const stats = [
  { value: "10+", label: "Years in IT Industry", icon: Target },
  { value: "6", label: "AI/ML Products Built", icon: CircuitBoard },
  { value: "95%", label: "Client Retention Rate", icon: Shield },
  { value: "50+", label: "Enterprise AI Tools", icon: Sparkles },
];

const caseStudies = [
  {
    tag: "Intelligent Automation",
    title: "AI-RUN SOS: Staffing Operating System",
    description:
      "AI-native platform automating 90-95% of IT staffing operations with 12 autonomous agents, email intelligence, and outcome-based trust scoring.",
    metrics: ["61M+ signals processed", "12 AI agents", "$5M/yr value"],
  },
  {
    tag: "Data Reliability",
    title: "DRA: Data Reliability Agent",
    description:
      "AI agent that triages failed data pipelines and proposes safe SQL fixes using lineage analysis and past incidents. From 2-hour triage to under 2 minutes.",
    metrics: ["95% triage reduction", "8x-80x ROI", "<2 min MTTR"],
  },
  {
    tag: "AI Platform",
    title: "SanGPT: Enterprise SAN Intelligence",
    description:
      "AI-powered platform replacing fragmented vendor tools with conversational AI, ML predictions, and autonomous remediation for Fortune 500 storage environments.",
    metrics: ["70% faster MTTR", "$600K value per deployment", "7 vendor connectors"],
  },
];

const testimonials = [
  {
    quote:
      "Cloud Resources transformed our SAN operations with AI-driven intelligence. We went from reactive firefighting to predictive operations, saving us millions annually.",
    name: "VP of Infrastructure",
    company: "Fortune 500 Financial Services",
  },
  {
    quote:
      "Their ML engineering team built predictive models that detect infrastructure anomalies before they become incidents. MTTR dropped by 70% in the first quarter.",
    name: "Director of Platform Engineering",
    company: "Enterprise Healthcare System",
  },
  {
    quote:
      "The staffing team placed elite Java and DevOps talent that integrated seamlessly with our teams. Now their AI solutions are transforming how we operate entirely.",
    name: "Chief Technology Officer",
    company: "Insurance Technology Firm",
  },
];

const clientImages = [1, 2, 3, 4, 5, 7, 8, 9];

export default function Home() {
  return (
    <>
      <HeroCarousel />

      {/* Stats Bar */}
      <section className="relative bg-navy border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan/10 mb-4">
                  <stat.icon className="w-5 h-5 text-cyan" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-text-muted font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-24 sm:py-32">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
              What We Deliver
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Results. Not Rhetoric.
            </h2>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
              From AI-native platforms to elite staffing — we combine deep technology
              expertise with enterprise operational knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="gradient-border p-8 hover-lift group block"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 opacity-80 group-hover:opacity-100 transition-opacity`}
                >
                  <service.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-text-primary group-hover:text-cyan transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-xs font-semibold text-cyan bg-cyan/10 px-2.5 py-1 rounded-full">
                    {service.stats}
                  </span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="text-sm font-semibold text-cyan flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="relative py-24 sm:py-32 bg-navy border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
              How We Work
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Disciplined Execution.
              <br />
              Measurable Impact.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Define the Outcome",
                description:
                  "Establish clear success metrics and KPIs. We align on what success looks like before writing a single line of code.",
                icon: Target,
              },
              {
                step: "02",
                title: "Architect the Solution",
                description:
                  "Engineer for scale, security, and reliability by design. Multi-tenant, cloud-native, and AI-native from day one.",
                icon: CircuitBoard,
              },
              {
                step: "03",
                title: "Deliver at Scale",
                description:
                  "Execute in live environments with real constraints and full accountability. Continuous integration and deployment.",
                icon: Zap,
              },
              {
                step: "04",
                title: "Demonstrate Value",
                description:
                  "Evidence impact with measured outcomes. 4x ROI, 70% MTTR reduction, 95% efficiency gains — not just promises.",
                icon: BarChart3,
              },
            ].map((item) => (
              <div key={item.step} className="relative group">
                <div className="text-6xl font-extrabold text-cyan/8 group-hover:text-cyan/15 transition-colors mb-4">
                  {item.step}
                </div>
                <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-cyan" />
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="relative py-24 sm:py-32 hero-dark">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-400 tracking-wider uppercase">
              Proven Impact
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Case Studies
            </h2>
            <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
              Real-world AI and ML solutions delivering measurable enterprise value.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Link
                key={study.title}
                href="/case-studies"
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover-lift group block"
              >
                <span className="inline-block text-xs font-semibold text-blue-300 bg-blue-400/15 px-3 py-1 rounded-full mb-5">
                  {study.tag}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {study.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {study.description}
                </p>
                <div className="flex flex-col gap-2">
                  {study.metrics.map((metric) => (
                    <div key={metric} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="text-sm font-medium text-white">
                        {metric}
                      </span>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-2 text-blue-300 font-semibold hover:text-white hover:gap-3 transition-all"
            >
              View All Case Studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 sm:py-32 bg-navy border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
              What Our Clients Say
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Partnerships That Drive
              <br />
              Measurable Outcomes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="gradient-border p-8">
                <div className="text-3xl text-cyan/20 mb-4">&ldquo;</div>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {t.quote}
                </p>
                <div>
                  <div className="text-sm font-semibold text-text-primary">
                    {t.name}
                  </div>
                  <div className="text-xs text-text-muted">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="relative py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-text-muted tracking-wider uppercase">
              Our Clients
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {clientImages.map((n) => (
              <div
                key={n}
                className="flex items-center justify-center py-4 px-4 rounded-xl border border-border bg-navy/50 hover:border-cyan/30 transition-all"
              >
                <Image
                  src={`/clients/client${n}.png`}
                  alt={`Client ${n}`}
                  width={80}
                  height={40}
                  className="h-8 w-auto object-contain opacity-40 hover:opacity-70 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32 hero-dark">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Ready to Build{" "}
            <span className="gradient-text">Intelligence?</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto mb-8">
            Whether you need AI solutions, ML engineering, or elite technology
            talent — let&apos;s discuss how we can help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group px-8 py-4 rounded-full bg-cyan text-white font-semibold flex items-center gap-2 hover:bg-blue hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
