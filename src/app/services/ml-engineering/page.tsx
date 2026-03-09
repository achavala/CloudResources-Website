import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Cpu,
  Shield,
  TrendingUp,
  BarChart3,
  Zap,
  Network,
  Settings,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ML Engineering & Operations | Cloud Resources",
  description:
    "Production ML pipelines for anomaly detection, predictive forecasting, risk scoring, reinforcement learning, and multi-agent ML systems with Bayesian weight updating.",
};

const capabilities = [
  {
    icon: Shield,
    title: "Anomaly Detection",
    description:
      "Isolation Forest and autoencoder models that surface infrastructure anomalies, security threats, and data drift across millions of data points in real time — catching outliers before they cascade into outages.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Forecasting",
    description:
      "Holt-Winters, Prophet, and ARIMA models with seasonal decomposition and confidence intervals that forecast capacity, demand, and resource utilization weeks in advance with 95%+ accuracy.",
  },
  {
    icon: BarChart3,
    title: "Risk Scoring",
    description:
      "XGBoost gradient-boosted trees and LightGBM models that score and prioritize risks — from trade exposure and infrastructure failure probability to compliance violations — using learned historical patterns.",
  },
  {
    icon: Zap,
    title: "Reinforcement Learning",
    description:
      "stable-baselines3 and PPO agents that learn optimal strategies through simulated environments. Multi-objective optimization for trading, resource allocation, and dynamic pricing scenarios.",
  },
  {
    icon: Network,
    title: "Multi-Agent ML Systems",
    description:
      "5-agent orchestration architectures where specialized ML models collaborate on complex decisions. Bayesian weight updating continuously recalibrates ensemble confidence as new outcome data accumulates.",
  },
  {
    icon: Settings,
    title: "ML Operations Pipeline",
    description:
      "Automated nightly retraining, model versioning with MLflow, drift detection with Prometheus, and A/B deployment strategies that keep production models current without manual intervention.",
  },
];

const technologies = [
  "scikit-learn",
  "XGBoost",
  "LightGBM",
  "PyTorch",
  "stable-baselines3",
  "MLflow",
  "pandas",
  "NumPy",
  "statsmodels",
  "Streamlit",
  "FastAPI",
];

const metrics = [
  { value: "10+", label: "ML Models Deployed" },
  { value: "95%", label: "Prediction Confidence" },
  { value: "4x", label: "ROI First Year" },
];

export default function MLEngineeringPage() {
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
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue to-purple flex items-center justify-center mb-6">
              <Cpu className="w-7 h-7 text-white" />
            </div>
            <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
              PREDICTION. Delivered.
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary">
              ML Engineering & Operations
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-2xl">
              Production ML pipelines for anomaly detection (Isolation Forest),
              predictive forecasting (Holt-Winters, Prophet), risk scoring
              (XGBoost, LightGBM), reinforcement learning, and multi-agent ML
              systems with Bayesian weight updating.
            </p>
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
            From anomaly detection and predictive forecasting to reinforcement
            learning and multi-agent orchestration — production ML that learns,
            adapts, and delivers measurable ROI.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="gradient-border p-8 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue/20 to-purple/20 flex items-center justify-center mb-5">
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
            Stack
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Technologies We <span className="gradient-text">Build With</span>
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
            Ready to Deploy{" "}
            <span className="gradient-text">Production ML</span>?
          </h2>
          <p className="text-lg text-text-secondary max-w-xl mx-auto mb-8">
            Let&apos;s discuss how ML models can predict failures, detect
            anomalies, and score risks in your environment — with automated
            retraining that keeps models current.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue to-purple text-white font-semibold hover:shadow-lg hover:shadow-cyan/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Discuss Your ML Strategy
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
