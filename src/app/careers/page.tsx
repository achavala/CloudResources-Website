"use client";
import { useState, useRef } from "react";
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
  X,
  Upload,
  Loader2,
  CheckCircle2,
  AlertCircle,
  FileText,
} from "lucide-react";

const positions = [
  {
    slug: "senior-ai-ml-engineer",
    title: "Senior AI/ML Engineer",
    department: "AI Engineering",
    location: "Irving, TX / Remote",
    type: "Full-time",
    description:
      "Build production AI platforms with GPT-4o, LangChain, and tool-backed LLM architectures. Work on conversational AI systems processing 50+ tools with zero-hallucination guarantees.",
    skills: [
      "Python",
      "GPT-4o/LLMs",
      "LangChain",
      "FastAPI",
      "PostgreSQL",
      "Docker",
    ],
    icon: Brain,
  },
  {
    slug: "ml-operations-engineer",
    title: "ML Operations Engineer",
    department: "ML Engineering",
    location: "Irving, TX / Remote",
    type: "Full-time",
    description:
      "Deploy and maintain production ML pipelines — anomaly detection, capacity forecasting, and risk scoring models. Build automated retraining pipelines and model monitoring.",
    skills: [
      "scikit-learn",
      "XGBoost",
      "PyTorch",
      "MLflow",
      "Kubernetes",
      "Python",
    ],
    icon: Sparkles,
  },
  {
    slug: "full-stack-engineer-nextjs",
    title: "Full-Stack Engineer (Next.js)",
    department: "Product Engineering",
    location: "Irving, TX / Hyderabad / Remote",
    type: "Full-time",
    description:
      "Build enterprise dashboards and AI-powered interfaces with Next.js 14, TypeScript, and Tailwind CSS. Work on real-time visualization, chat interfaces, and topology rendering.",
    skills: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Zustand",
      "REST APIs",
    ],
    icon: Code2,
  },
  {
    slug: "data-engineer",
    title: "Data Engineer",
    department: "Data Engineering",
    location: "Irving, TX / Remote",
    type: "Full-time",
    description:
      "Build polyglot data architectures with TimescaleDB, Neo4j, OpenSearch, and vector stores. Design real-time pipelines and automated data quality systems.",
    skills: [
      "PostgreSQL",
      "TimescaleDB",
      "dbt",
      "Python",
      "Apache Airflow",
      "SQL",
    ],
    icon: Database,
  },
  {
    slug: "cloud-devops-architect",
    title: "Cloud/DevOps Architect",
    department: "Cloud Engineering",
    location: "Irving, TX / Remote",
    type: "Full-time",
    description:
      "Design and deploy cloud-native architectures on AWS EKS. Build infrastructure-as-code with Terraform, manage Kubernetes clusters, and implement CI/CD pipelines.",
    skills: [
      "AWS",
      "Terraform",
      "Kubernetes",
      "Docker",
      "ArgoCD",
      "Prometheus",
    ],
    icon: Cloud,
  },
  {
    slug: "ai-solutions-architect",
    title: "AI Solutions Architect",
    department: "Solutions",
    location: "Irving, TX / Remote",
    type: "Full-time",
    description:
      "Work with enterprise clients to design AI/ML solutions. Translate business challenges into technical architectures spanning AI agents, ML pipelines, and data platforms.",
    skills: [
      "Enterprise Architecture",
      "AI/ML",
      "Client Engagement",
      "Python",
      "Cloud",
      "Presales",
    ],
    icon: Rocket,
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description:
      "Comprehensive medical, dental, and vision coverage for you and your family.",
  },
  {
    icon: GraduationCap,
    title: "Learning Budget",
    description:
      "Annual budget for conferences, courses, certifications, and books.",
  },
  {
    icon: Globe,
    title: "Remote Flexibility",
    description:
      "Work from anywhere with flexible hours. We focus on outcomes, not hours.",
  },
  {
    icon: Rocket,
    title: "Cutting-Edge Work",
    description:
      "Work with GPT-4o, reinforcement learning, multi-agent systems, and enterprise AI.",
  },
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<
    (typeof positions)[0] | null
  >(null);
  const [formState, setFormState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fileName, setFileName] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedin: "",
    coverLetter: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const openModal = (pos: (typeof positions)[0]) => {
    setSelectedJob(pos);
    setFormState("idle");
    setErrorMsg("");
    setFileName("");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      linkedin: "",
      coverLetter: "",
    });
    if (fileRef.current) fileRef.current.value = "";
  };

  const closeModal = () => setSelectedJob(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setErrorMsg("File size must be under 10MB");
        e.target.value = "";
        setFileName("");
        return;
      }
      setFileName(file.name);
      setErrorMsg("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJob) return;

    setFormState("loading");
    setErrorMsg("");

    const fd = new FormData();
    fd.append("jobTitle", selectedJob.title);
    fd.append("jobSlug", selectedJob.slug);
    fd.append("department", selectedJob.department);
    fd.append("firstName", formData.firstName);
    fd.append("lastName", formData.lastName);
    fd.append("email", formData.email);
    fd.append("phone", formData.phone);
    fd.append("linkedin", formData.linkedin);
    fd.append("coverLetter", formData.coverLetter);

    const file = fileRef.current?.files?.[0];
    if (file) fd.append("resume", file);

    try {
      const res = await fetch("/api/apply.php", {
        method: "POST",
        body: fd,
      });
      const data = await res.json();
      if (data.success) {
        setFormState("success");
      } else {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setFormState("error");
      }
    } catch {
      setErrorMsg(
        "Unable to submit your application. Please email your resume to info@cloudresources.net"
      );
      setFormState("error");
    }
  };

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
                className="gradient-border p-8 hover-lift group cursor-pointer"
                onClick={() => openModal(pos)}
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
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {pos.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-[10px] font-medium text-text-muted border border-border rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan group-hover:gap-2.5 transition-all">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </span>
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

      {/* Application Modal */}
      {selectedJob && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-10 sm:pt-20 px-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 sm:px-8 py-5 flex items-center justify-between rounded-t-2xl z-10">
              <div>
                <p className="text-xs font-semibold text-cyan uppercase tracking-wider">
                  Apply for Position
                </p>
                <h2 className="text-xl font-bold text-text-primary mt-1">
                  {selectedJob.title}
                </h2>
                <p className="text-xs text-text-muted mt-0.5">
                  {selectedJob.department} · {selectedJob.location}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-text-muted hover:text-text-primary hover:border-gray-300 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="px-6 sm:px-8 py-6">
              {formState === "success" ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-text-primary mb-3">
                    Application Submitted
                  </h3>
                  <p className="text-text-secondary max-w-sm mx-auto mb-6">
                    Thank you for applying to{" "}
                    <strong>{selectedJob.title}</strong>. We&apos;ll review your
                    application and get back to you within 5 business days.
                  </p>
                  <button
                    onClick={closeModal}
                    className="px-6 py-3 rounded-full bg-cyan text-white font-semibold hover:bg-blue transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {formState === "error" && errorMsg && (
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200">
                      <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-red-700">{errorMsg}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-text-primary text-sm focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-text-primary text-sm focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-text-primary text-sm focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-text-primary text-sm focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-text-primary text-sm focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      Resume / CV *
                    </label>
                    <div
                      className="relative border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-cyan/40 transition-colors cursor-pointer"
                      onClick={() => fileRef.current?.click()}
                    >
                      <input
                        ref={fileRef}
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        required
                        className="hidden"
                      />
                      {fileName ? (
                        <div className="flex items-center justify-center gap-3">
                          <FileText className="w-8 h-8 text-cyan" />
                          <div className="text-left">
                            <p className="text-sm font-medium text-text-primary">
                              {fileName}
                            </p>
                            <p className="text-xs text-text-muted">
                              Click to change file
                            </p>
                          </div>
                        </div>
                      ) : (
                        <>
                          <Upload className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                          <p className="text-sm text-text-secondary">
                            <span className="font-semibold text-cyan">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-text-muted mt-1">
                            PDF, DOC, or DOCX (max 10MB)
                          </p>
                        </>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      Cover Letter / Message
                    </label>
                    <textarea
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-text-primary text-sm focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all resize-none"
                      placeholder="Tell us why you're excited about this role and what you'd bring to the team..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="w-full px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan to-blue text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan/25 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState === "loading" ? (
                      <>
                        Submitting Application...
                        <Loader2 className="w-4 h-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
