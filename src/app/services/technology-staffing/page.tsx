import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Users,
  Brain,
  Code2,
  Cloud,
  Server,
  Database,
  Briefcase,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Technology Staffing | Cloud Resources",
  description:
    "Cloud Resources has placed elite technology talent for over a decade. AI/ML engineers, Java developers, cloud architects, DevOps specialists, data engineers, and business analysts across financial services, healthcare, insurance, defense, and retail.",
};

const capabilities = [
  {
    icon: Brain,
    title: "AI/ML Engineers & Data Scientists",
    description:
      "GPT-4, PyTorch, scikit-learn, and TensorFlow specialists who build production ML pipelines, train models, and deploy AI systems. From research prototypes to enterprise-scale inference — engineers who ship ML that works.",
  },
  {
    icon: Code2,
    title: "Java & Full-Stack Developers",
    description:
      "Java, Spring Boot, React, Angular, and Node.js developers with enterprise experience. From microservices architectures and REST APIs to modern frontends — full-stack engineers who deliver production-quality code.",
  },
  {
    icon: Cloud,
    title: "Cloud Architects",
    description:
      "AWS, Azure, and GCP certified professionals who design scalable, secure, and cost-optimized cloud environments. Solutions architects, infrastructure engineers, and cloud security specialists across all major providers.",
  },
  {
    icon: Server,
    title: "DevOps & SRE Specialists",
    description:
      "Kubernetes, Terraform, CI/CD, and observability experts who build the platforms that keep production running at 99.99%. Site reliability engineers and DevOps professionals skilled in the modern infrastructure stack.",
  },
  {
    icon: Database,
    title: "Data Engineers & Analysts",
    description:
      "SQL, Python, Spark, dbt, and Snowflake specialists who architect data pipelines, build analytics platforms, and deliver insights. From ETL pipelines to real-time streaming — data professionals who scale.",
  },
  {
    icon: Briefcase,
    title: "Business Analysts & PMs",
    description:
      "Agile, Scrum, and JIRA-certified professionals who bridge business and technology. Requirements gathering, sprint planning, stakeholder management, and enterprise program delivery across complex organizations.",
  },
];

const technologies = [
  "Java",
  "Python",
  "TypeScript",
  "AWS",
  "Azure",
  "GCP",
  "Kubernetes",
  "React",
  "Angular",
  "Spring Boot",
  ".NET",
  "Salesforce",
];

const metrics = [
  { value: "500+", label: "Consultants Placed" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "<15", label: "Days Avg Placement" },
];

const verticals = [
  "Financial Services",
  "Healthcare",
  "Insurance",
  "Defense",
  "Retail",
];

const engagementModels = ["C2C", "W2", "1099", "Contract-to-Hire", "Direct Placement"];

export default function TechnologyStaffingPage() {
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
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue to-cyan flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-white" />
            </div>
            <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
              TALENT. Delivered.
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary">
              Technology Staffing
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-2xl">
              Cloud Resources has been placing elite technology talent for over a
              decade. Our staffing division is a cornerstone of our business.
              From AI/ML engineers to Java developers, cloud architects to DevOps
              specialists, business analysts to data engineers — we place
              resources that understand your business and deliver from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Core Division Heritage */}
      <section className="relative py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-border p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-2xl">
                <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
                  A Core Division — 10+ Years Strong
                </span>
                <p className="mt-4 text-text-secondary leading-relaxed">
                  Technology staffing isn&apos;t a side offering — it&apos;s
                  where Cloud Resources started and remains the foundation of
                  everything we do. For over a decade, we have been the trusted
                  IT staffing partner serving the United States IT marketplace.
                  We serve multiple verticals including financial services,
                  healthcare, insurance, defense, and retail.
                </p>
              </div>
              <div className="flex flex-col gap-4 shrink-0">
                <div>
                  <span className="text-xs font-semibold text-text-muted tracking-wider uppercase">
                    Industry Verticals
                  </span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {verticals.map((v) => (
                      <span
                        key={v}
                        className="inline-flex items-center gap-1.5 text-sm text-text-secondary"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan flex-shrink-0" />
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-xs font-semibold text-text-muted tracking-wider uppercase">
                    Engagement Models
                  </span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {engagementModels.map((em) => (
                      <span
                        key={em}
                        className="px-3 py-1 text-xs font-medium text-text-secondary border border-white/10 rounded-full bg-white/[0.03]"
                      >
                        {em}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
            Contract (C2C, W2), contract-to-hire, and direct placement across
            every layer of the modern engineering stack — from AI research and
            cloud infrastructure to enterprise application development.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="gradient-border p-8 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue/20 to-cyan/20 flex items-center justify-center mb-5">
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
            Expertise
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Technologies We <span className="gradient-text">Staff</span>
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
            Ready to Scale Your{" "}
            <span className="gradient-text">Engineering Team</span>?
          </h2>
          <p className="text-lg text-text-secondary max-w-xl mx-auto mb-8">
            Let&apos;s find the elite engineers, architects, and data scientists
            your team needs — placed in under 15 days with 95% client
            satisfaction and flexible engagement models.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue to-cyan text-white font-semibold hover:shadow-lg hover:shadow-cyan/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
