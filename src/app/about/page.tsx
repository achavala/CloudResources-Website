import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Target,
  Lightbulb,
  Handshake,
  Rocket,
  Shield,
  Heart,
  Award,
  Users,
  Globe,
  Building2,
} from "lucide-react";

const values = [
  {
    icon: Rocket,
    title: "Relentless Innovation",
    description:
      "We don't follow technology trends — we build the platforms that define them. From GPT-4o integrations to multi-agent AI systems, we push boundaries.",
  },
  {
    icon: Shield,
    title: "Engineering Integrity",
    description:
      "Zero-hallucination AI, approval-gated automation, immutable audit trails. We build systems that enterprises can trust with their most critical operations.",
  },
  {
    icon: Target,
    title: "Outcome Obsession",
    description:
      "4x ROI. 70% MTTR reduction. 95% triage elimination. We measure everything and deliver results, not slide decks.",
  },
  {
    icon: Handshake,
    title: "Partnership, Not Vendor",
    description:
      "We embed with your teams, understand your constraints, and co-own the outcomes. Your success is our success.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Our ML models retrain nightly. Our agents self-improve. Our team stays at the cutting edge of AI research and engineering practices.",
  },
  {
    icon: Heart,
    title: "People First",
    description:
      "Behind every AI platform is a team of brilliant engineers. We invest in our people because they are the intelligence behind the intelligence.",
  },
];

const milestones = [
  { year: "2015", event: "Founded as Cloud Resources, IT staffing and consulting" },
  { year: "2018", event: "Expanded to professional services and DevOps consulting" },
  { year: "2020", event: "Pivoted to AI-first strategy, started ML engineering practice" },
  { year: "2022", event: "Built first enterprise AI platform (DevopsSREGPT)" },
  { year: "2024", event: "Launched SanGPT, AI-RUN SOS, and DRA platforms" },
  { year: "2025", event: "6 AI/ML products in portfolio, expanded to 50+ enterprise clients" },
  { year: "2026", event: "Scaling to $100M+ with AI-native solutions across industries" },
];

const leadership = [
  {
    name: "Leadership Team",
    role: "Executive Leadership",
    description:
      "Our leadership team combines deep enterprise IT experience with cutting-edge AI/ML expertise. With backgrounds spanning Fortune 500 infrastructure management, fintech, and SaaS startups, we bring a unique perspective to building AI-native enterprise solutions.",
  },
];

export const metadata: Metadata = {
  title: "About Us | Cloud Resources — AI-Native Technology Company",
  description:
    "Learn about Cloud Resources, an AI-native technology company building enterprise AI platforms, ML systems, and autonomous automation solutions.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
                About Us
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                We Build the{" "}
                <span className="gradient-text">Intelligence</span> That Runs
                Enterprises
              </h1>
              <p className="mt-6 text-lg text-text-secondary leading-relaxed">
                Cloud Resources is an AI-native technology company that transforms
                enterprise operations through conversational AI platforms, production
                ML systems, and autonomous automation. We don&apos;t just talk about
                AI — we build it, deploy it, and prove it works.
              </p>
            </div>
            <div className="gradient-border p-10">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { value: "10+", label: "Years of Excellence", icon: Award },
                  { value: "6", label: "AI/ML Products", icon: Brain },
                  { value: "50+", label: "Enterprise Clients", icon: Building2 },
                  { value: "2", label: "Global Offices", icon: Globe },
                ].map((stat) => (
                  <div key={stat.label}>
                    <stat.icon className="w-5 h-5 text-cyan mb-3" />
                    <div className="text-3xl font-extrabold gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-xs text-text-muted font-medium mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="relative py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
              Our Story
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
              From IT Staffing to AI Intelligence
            </h2>
            <p className="mt-6 text-text-secondary leading-relaxed">
              Cloud Resources started as an IT staffing and consulting firm serving the
              United States technology marketplace. Over the years, we saw a fundamental
              shift: enterprises didn&apos;t just need people — they needed intelligence.
              They needed systems that could predict failures before they happened,
              automate complex workflows at scale, and make enterprise data accessible
              through natural language.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              So we transformed. We built our own AI platforms — SanGPT for storage
              intelligence, AI-RUN SOS for staffing automation, DRA for data reliability,
              DevopsSREGPT for operational intelligence. Each platform proved our thesis:
              AI-native solutions deliver 4-80x ROI when they&apos;re built right.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Today, we are an AI-first technology company with 6 production platforms,
              50+ enterprise AI tools, 10+ ML models, and a team of engineers who live
              at the intersection of enterprise operations and artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Approach */}
      <section className="relative py-24 border-t border-white/5 bg-navy/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="gradient-border p-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan to-blue flex items-center justify-center mb-6">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                To be the leading AI-native technology company that enterprises trust
                to build the intelligent systems that run their most critical
                operations — from infrastructure to staffing to data pipelines.
              </p>
            </div>
            <div className="gradient-border p-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue to-purple flex items-center justify-center mb-6">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Deliver 100% on our commitments through AI-native solutions that
                produce measurable outcomes. We combine deep AI/ML expertise with
                enterprise operational knowledge to build platforms that scale.
              </p>
            </div>
            <div className="gradient-border p-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple to-pink-500 flex items-center justify-center mb-6">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Approach</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Define clear success metrics. Architect for scale and security.
                Deliver in live environments with full accountability. Demonstrate
                value with measured outcomes. Results, not rhetoric.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
              Our Journey
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
              A Decade of Growth
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan to-blue flex items-center justify-center text-sm font-bold text-white shrink-0">
                    {m.year.slice(2)}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-px h-full bg-gradient-to-b from-cyan/30 to-transparent mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="text-sm font-bold text-cyan mb-1">{m.year}</div>
                  <p className="text-text-secondary">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 border-t border-white/5 bg-navy/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
              Our Values
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="gradient-border p-8 hover-lift">
                <value.icon className="w-6 h-6 text-cyan mb-4" />
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="relative py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
              Global Presence
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Where We Operate
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="gradient-border p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-cyan" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">USA Headquarters</h3>
                  <span className="text-xs text-cyan font-medium">Primary Office</span>
                </div>
              </div>
              <p className="text-sm text-text-secondary">
                5005 W Royal Ln #200<br />
                Irving, TX 75063<br />
                United States
              </p>
              <p className="text-sm text-text-muted mt-3">
                (469) 458-7222 &bull; info@cloudresources.net
              </p>
            </div>
            <div className="gradient-border p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">India Office</h3>
                  <span className="text-xs text-purple font-medium">Development Center</span>
                </div>
              </div>
              <p className="text-sm text-text-secondary">
                Gowra Fountain Head, 6th Floor<br />
                Suite #610, Patrika Nagar, Madhapur<br />
                Hyderabad, Telangana 500081
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32 border-t border-white/5">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Join the <span className="gradient-text">AI Revolution</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-xl mx-auto mb-8">
            Whether you&apos;re looking to build AI solutions or join our team,
            we&apos;d love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-cyan to-blue text-white font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-cyan/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/careers"
              className="px-8 py-4 rounded-full border border-white/10 text-text-primary font-semibold hover:bg-white/5 hover:border-white/20 transition-all duration-300"
            >
              View Careers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
