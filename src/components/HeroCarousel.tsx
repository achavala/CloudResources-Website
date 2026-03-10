"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    badge: "AI-Native Solutions for the Enterprise",
    headline: (
      <>
        Intelligence <span className="gradient-text">Engineered.</span>
        <br />
        Outcomes <span className="gradient-text">Delivered.</span>
      </>
    ),
    subtext:
      "We build AI platforms, ML pipelines, and autonomous systems that transform enterprise operations — from predictive infrastructure intelligence to self-improving automation that scales.",
    cta: { text: "Start a Conversation", href: "/contact" },
    secondary: { text: "View Our Work", href: "/case-studies" },
    image: "/images/hero-ai-solutions.png",
  },
  {
    badge: "Trusted IT Staffing & Consulting Partner",
    headline: (
      <>
        Elite <span className="gradient-text">Talent.</span>
        <br />
        Proven <span className="gradient-text">Results.</span>
      </>
    ),
    subtext:
      "From AI/ML engineers to Java developers, cloud architects to DevOps specialists — our staffing division places elite technology resources that understand your business and deliver from day one.",
    cta: { text: "Hire Top Talent", href: "/services/technology-staffing" },
    secondary: { text: "Explore Services", href: "/services" },
    image: "/images/hero-staffing.png",
  },
  {
    badge: "Data & AI Transformation",
    headline: (
      <>
        Your Data. <span className="gradient-text">Our AI.</span>
        <br />
        Real <span className="gradient-text">Impact.</span>
      </>
    ),
    subtext:
      "From zero-hallucination AI platforms to production ML pipelines processing millions of signals — we help enterprises harness data and artificial intelligence for measurable competitive advantage.",
    cta: { text: "Explore AI Solutions", href: "/services/data-ai" },
    secondary: { text: "Read Case Studies", href: "/case-studies" },
    image: "/images/hero-data-ai.png",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden hero-dark">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div key={current} className="flex items-center gap-12 animate-slide-up">
          <div className="flex-1 min-w-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/20 bg-blue-500/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse-glow" />
              <span className="text-sm font-medium text-blue-300">
                {slide.badge}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 text-white">
              {slide.headline}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10">
              {slide.subtext}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={slide.cta.href}
                className="group px-8 py-4 rounded-full bg-cyan text-white font-semibold text-base flex items-center gap-2 hover:bg-blue hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                {slide.cta.text}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={slide.secondary.href}
                className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-base hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                {slide.secondary.text}
              </Link>
            </div>
          </div>

          <div className="hidden lg:block flex-shrink-0 w-[480px] xl:w-[540px]" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 75%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 80%, transparent 100%)', maskComposite: 'intersect', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 75%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 80%, transparent 100%)', WebkitMaskComposite: 'source-in' }}>
            <img
              src={slide.image}
              alt=""
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
