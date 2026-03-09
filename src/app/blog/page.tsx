import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, User, Tag } from "lucide-react";

const blogs = [
  {
    slug: "zero-hallucination-enterprise-ai",
    tag: "AI Engineering",
    title: "Building Zero-Hallucination Enterprise AI: How Tool-Backed LLMs Change Everything",
    excerpt:
      "Why enterprise AI demands grounded, tool-backed architectures that never fabricate data — and how we built 50+ AI tools that ensure every response is backed by real operational data.",
    author: "Cloud Resources Engineering",
    date: "March 5, 2026",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "ml-anomaly-detection-production",
    tag: "Machine Learning",
    title: "From Isolation Forest to XGBoost: Deploying ML Anomaly Detection in Production",
    excerpt:
      "A deep dive into building production ML pipelines that detect infrastructure anomalies, predict capacity exhaustion, and score risks — processing millions of metrics in real-time.",
    author: "Cloud Resources Engineering",
    date: "February 28, 2026",
    readTime: "12 min read",
    featured: true,
  },
  {
    slug: "autonomous-ai-agents-enterprise",
    tag: "AI Agents",
    title: "12 AI Agents, 61 Million Signals: Building Autonomous Systems That Run Enterprises",
    excerpt:
      "How we designed a multi-agent AI system with 12 coordinated agents that automates 90-95% of IT staffing operations, processing 61M+ signals with full governance and audit trails.",
    author: "Cloud Resources Engineering",
    date: "February 20, 2026",
    readTime: "10 min read",
    featured: true,
  },
  {
    slug: "data-pipeline-reliability-ai",
    tag: "Data Engineering",
    title: "AI-Driven Data Reliability: Reducing Pipeline Triage from Hours to Minutes",
    excerpt:
      "How our Data Reliability Agent uses LLM reasoning and lineage analysis to triage dbt pipeline failures in under 2 minutes — achieving 95% reduction in mean-time-to-triage.",
    author: "Cloud Resources Engineering",
    date: "February 12, 2026",
    readTime: "9 min read",
  },
  {
    slug: "multi-agent-ml-trading",
    tag: "ML Systems",
    title: "Multi-Agent ML Systems: Reinforcement Learning Meets Production Trading",
    excerpt:
      "Architectural lessons from building a 5-agent trading system with reinforcement learning, Bayesian weight updating, and nightly model retraining on AWS EKS.",
    author: "Cloud Resources Engineering",
    date: "February 5, 2026",
    readTime: "11 min read",
  },
  {
    slug: "operational-intelligence-devops",
    tag: "DevOps & SRE",
    title: "The Future of DevOps: Natural Language Operational Intelligence",
    excerpt:
      "Why the next evolution of DevOps isn't more dashboards — it's AI that answers reliability, cost, and risk questions in natural language using real telemetry data.",
    author: "Cloud Resources Engineering",
    date: "January 28, 2026",
    readTime: "7 min read",
  },
];

export const metadata: Metadata = {
  title: "Blog | Cloud Resources — AI & ML Engineering Insights",
  description:
    "Deep technical insights on building enterprise AI platforms, production ML systems, autonomous agents, and data engineering.",
};

export default function BlogPage() {
  const featured = blogs.filter((b) => b.featured);
  const rest = blogs.filter((b) => !b.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
              Blog & Insights
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Thinking at the{" "}
              <span className="gradient-text">Edge of AI</span>
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-2xl">
              Deep technical insights from our team on building enterprise AI
              platforms, production ML systems, and autonomous automation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="relative py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Featured</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featured.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="gradient-border p-8 hover-lift group block"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-semibold text-cyan bg-cyan/10 px-2.5 py-1 rounded-full">
                    {post.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-text-primary group-hover:text-cyan transition-colors mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-text-muted">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="relative py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">All Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="gradient-border p-8 hover-lift group block"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-semibold text-cyan bg-cyan/10 px-2.5 py-1 rounded-full">
                    {post.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-text-primary group-hover:text-cyan transition-colors mb-3">
                  {post.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-text-muted">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                  <span>{post.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
