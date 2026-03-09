"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

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
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 grid-bg" />
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl animate-float"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div
          key={current}
          className="max-w-4xl animate-slide-up"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan/20 bg-cyan/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse-glow" />
            <span className="text-sm font-medium text-cyan">
              {slide.badge}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
            {slide.headline}
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl leading-relaxed mb-10">
            {slide.subtext}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href={slide.cta.href}
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-cyan to-blue text-white font-semibold text-base flex items-center gap-2 hover:shadow-lg hover:shadow-cyan/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              {slide.cta.text}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={slide.secondary.href}
              className="px-8 py-4 rounded-full border border-white/10 text-text-primary font-semibold text-base hover:bg-white/5 hover:border-white/20 transition-all duration-300"
            >
              {slide.secondary.text}
            </Link>
          </div>
        </div>

        {/* Slide indicators + nav */}
        <div className="flex items-center gap-4 mt-16">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-text-primary hover:border-white/20 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === current
                    ? "w-10 bg-gradient-to-r from-cyan to-blue"
                    : "w-4 bg-white/15 hover:bg-white/25"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-text-primary hover:border-white/20 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <span className="text-xs text-text-muted ml-2 font-mono">
            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
