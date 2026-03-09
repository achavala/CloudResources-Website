"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  Brain,
  Database,
  Cloud,
  Bot,
  Users,
  Cpu,
} from "lucide-react";

const services = [
  { name: "Data & AI Solutions", href: "/services/data-ai", icon: Brain },
  { name: "ML Engineering", href: "/services/ml-engineering", icon: Cpu },
  { name: "Intelligent Automation", href: "/services/intelligent-automation", icon: Bot },
  { name: "Cloud & DevOps", href: "/services/cloud-devops", icon: Cloud },
  { name: "Data Engineering", href: "/services/data-engineering", icon: Database },
  { name: "Technology Staffing", href: "/services/technology-staffing", icon: Users },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 20);
      setAtTop(window.scrollY <= 20);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-200/60 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="Cloud Resources"
              width={200}
              height={19}
              priority
              className={`h-5 w-auto transition-all duration-300 ${
                atTop ? "brightness-0 invert" : ""
              }`}
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                atTop ? "text-white/80 hover:text-white" : "text-text-secondary hover:text-text-primary"
              }`}
            >
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                onClick={() => setServicesOpen((v) => !v)}
                className={`px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                  atTop ? "text-white/80 hover:text-white" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                Services
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {servicesOpen && (
                <>
                  <div className="absolute top-full left-0 h-3 w-72" />
                  <div className="absolute top-full left-0 mt-3 w-72 bg-white rounded-xl border border-gray-200 shadow-xl p-2 animate-fade-in">
                    <Link
                      href="/services"
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-cyan hover:bg-navy transition-all font-semibold border-b border-border mb-1"
                    >
                      <span className="text-sm">All Services Overview</span>
                    </Link>
                    {services.map((s) => (
                      <Link
                        key={s.name}
                        href={s.href}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary hover:text-cyan hover:bg-navy transition-all group"
                      >
                        <s.icon className="w-4 h-4 text-cyan" />
                        <span className="text-sm font-medium">{s.name}</span>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>

            <Link
              href="/case-studies"
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                atTop ? "text-white/80 hover:text-white" : "text-text-secondary hover:text-text-primary"
              }`}
            >
              Case Studies
            </Link>
            <Link
              href="/about"
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                atTop ? "text-white/80 hover:text-white" : "text-text-secondary hover:text-text-primary"
              }`}
            >
              Company
            </Link>
            <Link
              href="/blog"
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                atTop ? "text-white/80 hover:text-white" : "text-text-secondary hover:text-text-primary"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/careers"
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                atTop ? "text-white/80 hover:text-white" : "text-text-secondary hover:text-text-primary"
              }`}
            >
              Careers
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-2.5 text-sm font-semibold rounded-full bg-cyan text-white hover:bg-blue hover:shadow-lg hover:shadow-cyan/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>

          <button
            className={`lg:hidden p-2 ${atTop ? "text-white" : "text-text-secondary"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 mt-3 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            <Link href="/" className="px-4 py-3 text-sm font-medium text-text-secondary hover:text-cyan rounded-lg hover:bg-navy" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link href="/services" className="px-4 py-3 text-sm font-medium text-text-secondary hover:text-cyan rounded-lg hover:bg-navy" onClick={() => setMobileOpen(false)}>Services</Link>
            {services.map((s) => (
              <Link key={s.name} href={s.href} className="px-8 py-2 text-sm text-text-muted hover:text-cyan rounded-lg hover:bg-navy flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                <s.icon className="w-3.5 h-3.5" /> {s.name}
              </Link>
            ))}
            <Link href="/case-studies" className="px-4 py-3 text-sm font-medium text-text-secondary hover:text-cyan rounded-lg hover:bg-navy" onClick={() => setMobileOpen(false)}>Case Studies</Link>
            <Link href="/about" className="px-4 py-3 text-sm font-medium text-text-secondary hover:text-cyan rounded-lg hover:bg-navy" onClick={() => setMobileOpen(false)}>Company</Link>
            <Link href="/blog" className="px-4 py-3 text-sm font-medium text-text-secondary hover:text-cyan rounded-lg hover:bg-navy" onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link href="/careers" className="px-4 py-3 text-sm font-medium text-text-secondary hover:text-cyan rounded-lg hover:bg-navy" onClick={() => setMobileOpen(false)}>Careers</Link>
            <Link href="/contact" className="mt-2 px-6 py-3 text-sm font-semibold rounded-full bg-cyan text-white text-center" onClick={() => setMobileOpen(false)}>Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
