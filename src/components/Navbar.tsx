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

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-white/5 py-3"
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
              className="h-5 w-auto brightness-0 invert"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1"
              >
                Services
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-72 glass rounded-xl border border-white/10 p-2 animate-fade-in">
                  {services.map((s) => (
                    <Link
                      key={s.name}
                      href={s.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all group"
                    >
                      <s.icon className="w-4 h-4 text-cyan group-hover:text-cyan" />
                      <span className="text-sm font-medium">{s.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/case-studies"
              className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              Case Studies
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              Company
            </Link>
            <Link
              href="/blog"
              className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/careers"
              className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              Careers
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-cyan to-blue text-white hover:shadow-lg hover:shadow-cyan/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-text-secondary"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden glass border-t border-white/5 mt-3">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            <Link href="/" className="px-4 py-3 text-sm font-medium text-text-secondary hover:text-text-primary rounded-lg hover:bg-white/5" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link href="/services" className="px-4 py-3 text-sm font-medium text-text-secondary hover:text-text-primary rounded-lg hover:bg-white/5" onClick={() => setMobileOpen(false)}>Services</Link>
            {services.map((s) => (
              <Link key={s.name} href={s.href} className="px-8 py-2 text-sm text-text-muted hover:text-text-primary rounded-lg hover:bg-white/5 flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                <s.icon className="w-3.5 h-3.5" /> {s.name}
              </Link>
            ))}
            <Link href="/case-studies" className="px-4 py-3 text-sm font-medium text-text-secondary hover:text-text-primary rounded-lg hover:bg-white/5" onClick={() => setMobileOpen(false)}>Case Studies</Link>
            <Link href="/about" className="px-4 py-3 text-sm font-medium text-text-secondary hover:text-text-primary rounded-lg hover:bg-white/5" onClick={() => setMobileOpen(false)}>Company</Link>
            <Link href="/blog" className="px-4 py-3 text-sm font-medium text-text-secondary hover:text-text-primary rounded-lg hover:bg-white/5" onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link href="/careers" className="px-4 py-3 text-sm font-medium text-text-secondary hover:text-text-primary rounded-lg hover:bg-white/5" onClick={() => setMobileOpen(false)}>Careers</Link>
            <Link href="/contact" className="mt-2 px-6 py-3 text-sm font-semibold rounded-full bg-gradient-to-r from-cyan to-blue text-white text-center" onClick={() => setMobileOpen(false)}>Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
