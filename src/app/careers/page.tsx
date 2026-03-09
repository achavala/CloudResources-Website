import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Code2,
  Database,
  Cloud,
  MapPin,
  Briefcase,
  Sparkles,
  Heart,
  Rocket,
  GraduationCap,
  Globe,
} from "lucide-react";

const positions = [
  {
    title: "Senior AI/ML Engineer",
    department: "AI Engineering",
    location: "Irving, TX / Remote",
    type: "Full-time",
    description:
      "Build production AI platforms with GPT-4o, LangChain, and tool-backed LLM architectures. Work on conversational AI systems processing 50+ tools with zero-hallucination guarantees.",
    skills: ["Python", "GPT-4o/LLMs", "LangChain", "FastAPI", "PostgreSQL", "Docker"],
    icon: Brain,
  },
  {
    title: "ML Operations Engineer",
    department: "ML Engineering",
    location: "Irving, TX / Remote",
    type: "Full-time",
    description:
      "Deploy and maintain production ML pipelines — anomaly detection, capacity forecasting, and risk scoring models. Build automated retraining pipelines and model monitoring.",
    skills: ["scikit-learn", "XGBoost", "PyTorch", "MLflow", "Kubernetes", "Python"],
    icon: Sparkles,
  },
  {
    title: "Full-Stack Engineer (Next.js)",
    department: "Product Engineering",
    location: "Irving, TX / Hyderabad / Remote",
    type: "Full-time",
    description:
      "Build enterprise dashboards and AI-powered interfaces with Next.js 14, TypeScript, and Tailwind CSS. Work on real-time visualization, chat interfaces, and topology rendering.",
    skills: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Zustand", "REST APIs"],
    icon: Code2,
  },
  {
    title: "Data Engineer",
    department: "Data Engineering",
    location: "Irving, TX / Remote",
    type: "Full-time",
    description:
      "Build polyglot data architectures with TimescaleDB, Neo4j, OpenSearch, and vector stores. Design real-time pipelines and automated data quality systems.",
    skills: ["PostgreSQL", "TimescaleDB", "dbt", "Python", "Apache Airflow", "SQL"],
    icon: Database,
  },
  {
    title: "Cloud/DevOps Architect",
    department: "Cloud Engineering",
    location: "Irving, TX / Remote",
    type: "Full-time",
    description:
      "Design and deploy cloud-native architectures on AWS EKS. Build infrastructure-as-code with Terraform, manage Kubernetes clusters, and implement CI/CD pipelines.",
    skills: ["AWS", "Terraform", "Kubernetes", "Docker", "ArgoCD", "Prometheus"],
    icon: Cloud,
  },
  {
    title: "AI Solutions Architect",
    department: "Solutions",
    location: "Irving, TX / Remote",
    type: "Full-time",
    description:
      "Work with enterprise clients to design AI/ML solutions. Translate business challenges into technical architectures spanning AI agents, ML pipelines, and data platforms.",
    skills: ["Enterprise Architecture", "AI/ML", "Client Engagement", "Python", "Cloud", "Presales"],
    icon: Rocket,
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive medical, dental, and vision coverage for you and your family.",
  },
  {
    icon: GraduationCap,
    title: "Learning Budget",
    description: "Annual budget for conferences, courses, certifications, and books.",
  },
  {
    icon: Globe,
    title: "Remote Flexibility",
    description: "Work from anywhere with flexible hours. We focus on outcomes, not hours.",
  },
  {
    icon: Rocket,
    title: "Cutting-Edge Work",
    description: "Work with GPT-4o, reinforcement learning, multi-agent systems, and enterprise AI.",
  },
];

export const metadata: Metadata = {
  title: "Careers | Cloud Resources — Build the Future of Enterprise AI",
  description:
    "Join Cloud Resources and work on cutting-edge AI platforms, ML systems, and autonomous automation. Open positions in AI/ML, data engineering, and cloud.",
};

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
              Careers
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Build the{" "}
              <span className="gradient-text">Future of Enterprise AI</span>
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-2xl">
              Join a team that builds production AI platforms, deploys ML models
              at scale, and creates autonomous systems that transform how
              enterprises operate.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="relative py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Why Cloud Resources
            </h2>
            <p className="mt-3 text-text-secondary max-w-xl mx-auto">
              We&apos;re not just another consulting firm. We build products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="gradient-border p-6 text-center">
                <b.icon className="w-8 h-8 text-cyan mx-auto mb-4" />
                <h3 className="text-sm font-bold mb-2">{b.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="relative py-20 border-t border-border bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
              Open Positions
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
              Join Our Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {positions.map((pos) => (
              <div
                key={pos.title}
                className="gradient-border p-8 hover-lift group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-blue/20 flex items-center justify-center">
                    <pos.icon className="w-5 h-5 text-cyan" />
                  </div>
                  <span className="text-xs font-medium text-cyan bg-cyan/10 px-3 py-1 rounded-full">
                    {pos.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-1 group-hover:text-cyan transition-colors">
                  {pos.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-text-muted mb-4">
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-3 h-3" />
                    {pos.department}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {pos.location}
                  </span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {pos.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {pos.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-[10px] font-medium text-text-muted border border-border rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-dark relative py-24 sm:py-32 border-t border-border">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
            Don&apos;t See Your Role?
          </h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto mb-8">
            We&apos;re always looking for exceptional talent. Send us your resume
            and tell us how you&apos;d like to contribute.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan to-blue text-white font-semibold hover:shadow-lg hover:shadow-cyan/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
