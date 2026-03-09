"use client";
import { useState } from "react";
import {
  Mail,
  Phone,
  Send,
  Building2,
  Globe,
  Clock,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError(
        "Unable to send your message. Please email us directly at info@cloudresources.net"
      );
    } finally {
      setLoading(false);
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
              Contact Us
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Let&apos;s Build{" "}
              <span className="gradient-text">Something Great</span>
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-2xl">
              Whether you&apos;re exploring AI solutions, need ML engineering expertise,
              or want to discuss technology staffing — we&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="gradient-border p-12 text-center">
                  <CheckCircle2 className="w-16 h-16 text-emerald mx-auto mb-6" />
                  <h2 className="text-2xl font-bold mb-3">
                    Thank You for Reaching Out
                  </h2>
                  <p className="text-text-secondary">
                    We&apos;ve received your message and will get back to you within
                    24 hours. Our team is excited to learn about your project.
                  </p>
                </div>
              ) : (
                <div className="gradient-border p-8 sm:p-10">
                  <h2 className="text-2xl font-bold mb-2">Start a Conversation</h2>
                  <p className="text-sm text-text-secondary mb-8">
                    Tell us about your project and we&apos;ll schedule a consultation
                    with the right expert.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200">
                        <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-red-700">{error}</p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white border border-border text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white border border-border text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          Work Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white border border-border text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-border text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        What are you interested in?
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-border text-text-secondary text-sm focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all"
                      >
                        <option value="">Select a service</option>
                        <option value="data-ai">Data & AI Solutions</option>
                        <option value="ml">ML Engineering</option>
                        <option value="automation">Intelligent Automation</option>
                        <option value="cloud">Cloud & DevOps</option>
                        <option value="data-eng">Data Engineering</option>
                        <option value="staffing">Technology Staffing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        Tell us about your project
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-border text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all resize-none"
                        placeholder="Describe your challenge, timeline, and what success looks like..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="group w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cyan to-blue text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan/25 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          Sending...
                          <Loader2 className="w-4 h-4 animate-spin" />
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="gradient-border p-8">
                <h3 className="text-lg font-bold mb-6">Get in Touch</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-cyan" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-primary">Email</div>
                      <a
                        href="mailto:info@cloudresources.net"
                        className="text-sm text-cyan hover:underline"
                      >
                        info@cloudresources.net
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-cyan" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-primary">Phone</div>
                      <a
                        href="tel:+14694587222"
                        className="text-sm text-cyan hover:underline"
                      >
                        (469) 458-7222 x101
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-cyan" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-primary">Business Hours</div>
                      <div className="text-sm text-text-secondary">
                        Mon-Fri: 9:00 AM - 6:00 PM CST
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-5 h-5 text-cyan" />
                  <h3 className="text-lg font-bold">USA Headquarters</h3>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  5005 W Royal Ln #200
                  <br />
                  Irving, TX 75063
                  <br />
                  United States
                </p>
              </div>

              <div className="gradient-border p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-5 h-5 text-purple" />
                  <h3 className="text-lg font-bold">India Office</h3>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Gowra Fountain Head, 6th Floor
                  <br />
                  Suite #610, Patrika Nagar, Madhapur
                  <br />
                  Hyderabad, Telangana 500081
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
