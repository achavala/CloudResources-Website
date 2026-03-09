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
  AlertTriangle,
  Clock,
  Eye,
  GitBranch,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ML Engineering & Operations | Cloud Resources",
  description:
    "Production ML pipelines for anomaly detection, predictive forecasting, risk scoring, reinforcement learning, and multi-agent ML systems with Bayesian weight updating.",
};

const problems = [
  {
    icon: AlertTriangle,
    problem: "ML Models Trapped in Notebooks, Never Reaching Production",
    description:
      "Your data science team has built dozens of promising models in Jupyter notebooks. They perform well on historical data and look great in presentations. But they've never served a single prediction in production — blocked by missing infrastructure, no serving layer, unclear ownership between data science and engineering, and the ever-growing gap between 'it works on my laptop' and 'it runs reliably at scale under real-world conditions.'",
    solution:
      "We bridge the notebook-to-production gap with battle-tested ML pipeline architecture. Feature stores, model serving APIs, automated testing, canary deployments, and rollback mechanisms — everything needed to take a validated model from .pkl file to production endpoint serving thousands of predictions per second with 99.9% uptime. Our pipeline templates have taken models from notebook to production in as little as two weeks.",
  },
  {
    icon: Eye,
    problem: "No Monitoring for Model Drift, Bias, or Performance Degradation",
    description:
      "Your models were accurate when they were trained six months ago. But the world has changed — customer behavior shifted, market conditions evolved, data distributions drifted — and nobody noticed because there's no monitoring in place. By the time someone realizes predictions are wrong, the damage is already done: bad trades executed, incorrect risk scores assigned, anomalies missed, and stakeholder trust eroded.",
    solution:
      "We deploy comprehensive model observability that tracks prediction distributions, feature drift, accuracy decay, and fairness metrics in real time. Automated alerts fire when statistical tests detect meaningful drift — triggering retraining pipelines that update models with fresh data before performance degrades to the point of business impact. Your models stay current without manual intervention.",
  },
  {
    icon: Clock,
    problem: "Manual Feature Engineering Slowing Time-to-Value",
    description:
      "Every new model starts with weeks of manual feature engineering — extracting signals from raw data, computing rolling averages, encoding categorical variables, handling missing values — all written as ad-hoc scripts that aren't reusable across projects. Your data scientists spend 70% of their time on data plumbing and 30% on the actual modeling work they were hired to do.",
    solution:
      "We build centralized feature stores and automated feature pipelines that compute, version, and serve features consistently across training and inference. Common transformations become reusable building blocks. Feature validation catches data quality issues before they poison model training. New models go from concept to training in days, not weeks, because the feature infrastructure already exists.",
  },
  {
    icon: GitBranch,
    problem: "Siloed ML Experiments Without Reproducibility",
    description:
      "Different team members train models on different data snapshots, with different hyperparameters, using different library versions — and there's no way to reproduce last month's winning experiment because nobody tracked the exact configuration. When a model breaks in production, you can't trace back to the training run that produced it, the data it was trained on, or the decisions that shaped its architecture.",
    solution:
      "MLflow experiment tracking captures every training run — parameters, metrics, artifacts, data versions, and environment specifications — in a searchable registry that serves as the definitive record of your ML history. Model lineage connects every production deployment to its training run, enabling instant root cause analysis and confident rollbacks when production issues arise.",
  },
];

const serviceOfferings = [
  {
    title: "ML Strategy & Use Case Identification",
    description:
      "Not every problem needs machine learning, and not every ML approach fits every problem. We start with a rigorous assessment of your data assets, business objectives, and operational workflows to identify where ML delivers genuine competitive advantage — and where simpler approaches are the right answer. The goal is a prioritized roadmap that produces measurable results, not a science project that impresses in demos but never ships.",
    includes: [
      {
        keyword: "Data Asset Inventory",
        detail:
          "Comprehensive audit of available data sources, quality levels, labeling status, and accessibility — identifying which datasets are ML-ready and which need investment before they can support model training.",
      },
      {
        keyword: "Use Case Feasibility Scoring",
        detail:
          "Evaluation framework that scores potential ML applications against data availability, prediction value, model complexity, maintenance burden, and organizational adoption readiness — eliminating low-ROI initiatives before they consume resources.",
      },
      {
        keyword: "Algorithm Selection Analysis",
        detail:
          "Technical evaluation of candidate approaches — gradient boosting vs. deep learning, supervised vs. reinforcement, single-model vs. ensemble — matched to your specific data characteristics, latency requirements, and interpretability needs.",
      },
      {
        keyword: "MLOps Maturity Assessment",
        detail:
          "Gap analysis of your current ML infrastructure against production requirements — covering experiment tracking, model serving, monitoring, retraining automation, and the team skills needed to operate ML systems reliably at scale.",
      },
      {
        keyword: "Implementation Roadmap",
        detail:
          "Phased delivery plan with clear milestones, resource requirements, and success metrics — structured so each phase delivers standalone value while building toward the complete ML capability vision.",
      },
    ],
    outcomes:
      "Clients typically narrow from 15+ potential use cases to the 3–4 that will deliver the most business value in the shortest timeframe. The strategy engagement pays for itself by preventing wasted investment in models that would never reach production or deliver meaningful impact.",
  },
  {
    title: "Production ML Pipeline Engineering",
    description:
      "We build the infrastructure that takes ML models from validated notebooks to production-grade services — feature pipelines, training automation, model serving APIs, canary deployments, and automated rollback. This isn't a one-time deployment; it's a reusable platform that accelerates every subsequent model from months to days by providing standardized building blocks for the entire ML lifecycle.",
    includes: [
      {
        keyword: "Feature Store Architecture",
        detail:
          "Centralized feature computation and serving layer that ensures training-serving consistency, eliminates redundant feature engineering across teams, and provides point-in-time correctness for historical training data.",
      },
      {
        keyword: "Training Pipeline Automation",
        detail:
          "Scheduled and event-driven training workflows with hyperparameter optimization, cross-validation, and automated model selection — producing versioned artifacts ready for deployment without manual intervention.",
      },
      {
        keyword: "Model Serving Infrastructure",
        detail:
          "Low-latency prediction APIs with batching, caching, and auto-scaling — supporting real-time inference (<50ms p99), batch scoring for offline use cases, and streaming predictions for event-driven architectures.",
      },
      {
        keyword: "Deployment Strategies",
        detail:
          "Shadow mode, canary, blue-green, and A/B deployment patterns that validate new model versions against production traffic before full rollout — with automated rollback triggers based on prediction quality metrics.",
      },
      {
        keyword: "Data Validation Gates",
        detail:
          "Schema enforcement, distribution checks, and anomaly detection at every pipeline stage — catching data quality issues, upstream changes, and silent failures before they corrupt model training or serve bad predictions.",
      },
    ],
    outcomes:
      "Organizations adopting our pipeline architecture reduce model deployment time from 3–6 months to under 2 weeks. The reusable infrastructure means the second model deploys in days, not months, and every subsequent model benefits from the same battle-tested serving, monitoring, and rollback infrastructure.",
  },
  {
    title: "Anomaly Detection & Forecasting Systems",
    description:
      "We build production anomaly detection and time-series forecasting systems that operate continuously across millions of data points — catching infrastructure failures, security threats, and business anomalies before they escalate, while projecting future capacity, demand, and resource requirements with statistical confidence intervals your planning team can act on.",
    includes: [
      {
        keyword: "Isolation Forest Pipelines",
        detail:
          "Unsupervised anomaly detection models that learn normal behavioral patterns from historical data and flag deviations in real time — requiring no labeled training data and adapting automatically as baseline patterns evolve.",
      },
      {
        keyword: "Holt-Winters & Prophet Forecasting",
        detail:
          "Seasonal decomposition models with trend, seasonality, and holiday effect modeling that produce probabilistic forecasts with configurable confidence intervals — supporting capacity planning, demand prediction, and budget forecasting.",
      },
      {
        keyword: "Autoencoder-Based Detection",
        detail:
          "Deep learning autoencoders for high-dimensional anomaly detection in network traffic, log patterns, and telemetry streams — capturing complex non-linear relationships that statistical methods miss.",
      },
      {
        keyword: "Multi-Signal Correlation",
        detail:
          "Ensemble approaches that correlate anomaly signals across multiple data streams — reducing false positives by requiring agreement across independent detectors before raising alerts to human operators.",
      },
      {
        keyword: "Adaptive Threshold Management",
        detail:
          "Dynamic thresholds that adjust automatically based on time-of-day, day-of-week, and seasonal patterns — eliminating the brittle static thresholds that generate alert fatigue during normal operational variance.",
      },
    ],
    outcomes:
      "Clients deploying our anomaly detection systems report 80% reduction in false positive alerts while catching 95%+ of true anomalies before they impact production. Forecasting models achieve 95%+ accuracy on 4-week horizons, giving infrastructure and capacity teams the lead time they need for proactive planning instead of reactive scrambling.",
  },
  {
    title: "Risk Scoring & Decision Intelligence",
    description:
      "We build gradient-boosted scoring models and decision frameworks that quantify risk across financial, operational, and compliance domains — turning subjective assessments into calibrated probability scores that drive automated workflows, prioritization engines, and executive dashboards. These aren't black boxes; every score comes with feature importance explanations that satisfy both technical teams and regulatory auditors.",
    includes: [
      {
        keyword: "XGBoost & LightGBM Scoring Models",
        detail:
          "Gradient-boosted ensemble models trained on historical outcome data with rigorous cross-validation, hyperparameter tuning, and holdout testing — achieving production-grade accuracy while maintaining interpretability through SHAP value explanations.",
      },
      {
        keyword: "Feature Importance & Explainability",
        detail:
          "SHAP (SHapley Additive exPlanations) integration that decomposes every prediction into individual feature contributions — enabling stakeholders to understand not just the score, but exactly which factors drove it and by how much.",
      },
      {
        keyword: "Calibrated Probability Outputs",
        detail:
          "Post-training calibration using Platt scaling and isotonic regression that ensures model output probabilities are well-calibrated — so when the model says 80% risk, events actually occur 80% of the time, enabling reliable threshold-based decision automation.",
      },
      {
        keyword: "Decision Automation Frameworks",
        detail:
          "Configurable decision engines that translate risk scores into automated actions — routing, escalation, approval workflows, and alert triggering — with human-in-the-loop checkpoints for high-stakes decisions and full audit trails for compliance.",
      },
    ],
    outcomes:
      "Risk scoring models deployed through our pipeline consistently outperform rule-based systems by 30–50% on precision-recall metrics while reducing manual review workload by 60%. The explainability layer satisfies regulatory requirements and builds trust with business stakeholders who need to understand why a decision was made, not just what the decision was.",
  },
  {
    title: "Reinforcement Learning & Multi-Agent Systems",
    description:
      "For problems where the optimal strategy evolves with changing conditions — trading, resource allocation, dynamic pricing, adaptive scheduling — we build reinforcement learning agents that learn through simulated interaction and multi-agent architectures where specialized models collaborate on complex decisions. Bayesian weight updating continuously recalibrates ensemble confidence as new outcome data accumulates.",
    includes: [
      {
        keyword: "PPO & Policy Gradient Agents",
        detail:
          "Proximal Policy Optimization agents built with stable-baselines3 that learn optimal action policies through millions of simulated episodes — with reward shaping, curriculum learning, and safety constraints that prevent catastrophic actions during exploration.",
      },
      {
        keyword: "Custom Simulation Environments",
        detail:
          "Gymnasium-compatible simulation environments that faithfully model your domain dynamics — market microstructure for trading, infrastructure topology for resource allocation, customer behavior for pricing — enabling safe offline training before live deployment.",
      },
      {
        keyword: "Multi-Agent Orchestration",
        detail:
          "5-agent ensemble architectures where specialized models handle different aspects of complex decisions — momentum detection, risk assessment, regime classification, execution timing, and portfolio management — with Bayesian weight updating that adjusts ensemble composition based on recent performance.",
      },
      {
        keyword: "Safe Deployment Protocols",
        detail:
          "Shadow mode deployment, action space constraints, and position limit safeguards that allow RL agents to operate alongside human decision-makers — demonstrating value in paper trading or simulation before transitioning to live execution with graduated autonomy.",
      },
    ],
    outcomes:
      "RL-based systems have delivered 15–30% improvement over static rule-based strategies in domains with dynamic, adversarial, or multi-objective optimization requirements. The multi-agent architecture provides natural diversification — when one agent's strategy loses edge, others compensate, creating more robust overall performance than any single model approach.",
  },
  {
    title: "MLOps & Model Lifecycle Management",
    description:
      "Production ML is a continuous process, not a one-time deployment. We build the operational infrastructure that keeps your models accurate, current, and reliable over time — automated retraining, drift detection, performance monitoring, versioned rollbacks, and governance frameworks that satisfy both engineering teams and compliance auditors. Your models improve automatically while you sleep.",
    includes: [
      {
        keyword: "Automated Retraining Pipelines",
        detail:
          "Scheduled nightly and event-triggered retraining workflows that pull fresh data, retrain models, validate against quality gates, and deploy automatically when performance thresholds are met — keeping models current without manual intervention.",
      },
      {
        keyword: "Drift Detection & Alerting",
        detail:
          "Statistical monitoring with Kolmogorov-Smirnov tests, Population Stability Index, and custom distribution metrics that detect meaningful drift in input features and prediction distributions — triggering retraining before accuracy degrades visibly.",
      },
      {
        keyword: "Model Registry & Versioning",
        detail:
          "MLflow-backed model registry with full lineage tracking — connecting every production model to its training run, dataset version, hyperparameters, and evaluation metrics — enabling instant rollback and complete audit trails.",
      },
      {
        keyword: "A/B Testing Infrastructure",
        detail:
          "Traffic splitting and statistical significance testing that compares new model versions against incumbents on live data — ensuring deployments improve real-world performance, not just offline metrics, before full rollout.",
      },
      {
        keyword: "Governance & Compliance",
        detail:
          "Model cards, fairness audits, bias detection, and decision logging that satisfy SOC 2, regulatory, and internal compliance requirements — with automated reporting that generates audit-ready documentation on demand.",
      },
    ],
    outcomes:
      "Organizations with our MLOps infrastructure maintain model accuracy within 2% of peak performance continuously, with retraining cycles completing in under 30 minutes. Teams that previously spent 60% of their time on model maintenance redirect that effort to developing new capabilities, creating a compounding advantage as the ML portfolio grows.",
  },
];

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
    title: "Risk Scoring & Explainability",
    description:
      "XGBoost and LightGBM models that score and prioritize risks with SHAP-based explanations — from trade exposure and infrastructure failure probability to compliance violations — using learned historical patterns.",
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
  "Docker",
];

const metrics = [
  { value: "10+", label: "ML Models Deployed" },
  { value: "95%", label: "Prediction Confidence" },
  { value: "4x", label: "ROI First Year" },
  { value: "<30min", label: "Retraining Cycles" },
];

export default function MLEngineeringPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
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
              We build production ML systems that go far beyond notebook
              prototypes. Anomaly detection with Isolation Forest that catches
              infrastructure failures before they cascade. Predictive
              forecasting with Holt-Winters and Prophet that gives your planning
              team weeks of lead time. Risk scoring with XGBoost and LightGBM
              that quantifies uncertainty with SHAP-based explanations.
              Reinforcement learning agents that optimize trading, allocation,
              and pricing through simulated experience. Multi-agent architectures
              with Bayesian weight updating that get smarter with every decision.
              And the MLOps infrastructure that keeps it all running — automated
              retraining, drift detection, and model governance that ensures your
              ML portfolio stays accurate, compliant, and continuously improving.
            </p>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="relative py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
            Challenges
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Problems We <span className="gradient-text">Solve</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl">
            Most ML initiatives fail not because the models are bad, but because
            the engineering, infrastructure, and operations around them
            don&apos;t exist. These are the patterns we see — and fix — in every
            engagement.
          </p>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {problems.map((p) => (
              <div key={p.problem} className="gradient-border p-8 hover-lift">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue/20 to-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <p.icon className="w-5 h-5 text-cyan" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary">
                    {p.problem}
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed mb-4">
                  {p.description}
                </p>
                <div className="border-t border-border pt-4">
                  <span className="text-sm font-semibold text-cyan uppercase tracking-wider">
                    How We Solve It
                  </span>
                  <p className="mt-2 text-text-secondary leading-relaxed">
                    {p.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions & Service Offerings */}
      <section className="relative py-24 bg-navy border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
            What We Deliver
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Solutions &{" "}
            <span className="gradient-text">Service Offerings</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl">
            From strategy through production deployment and ongoing model
            operations — we cover the complete ML lifecycle. Each engagement is
            scoped to your data maturity, team capabilities, and the specific
            business outcomes that justify the investment.
          </p>
          <div className="mt-12 space-y-12">
            {serviceOfferings.map((offering, idx) => (
              <div key={offering.title} className="gradient-border p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue to-purple text-white text-sm font-bold">
                    {idx + 1}
                  </span>
                  <h3 className="text-xl font-bold text-text-primary">
                    {offering.title}
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {offering.description}
                </p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan uppercase tracking-wider mb-4">
                    What This Includes
                  </h4>
                  <ul className="space-y-3">
                    {offering.includes.map((item) => (
                      <li
                        key={item.keyword}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                        <span className="text-text-secondary leading-relaxed">
                          <span className="font-semibold text-text-primary">
                            {item.keyword}:
                          </span>{" "}
                          {item.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-border pt-4">
                  <h4 className="text-sm font-semibold text-cyan uppercase tracking-wider mb-2">
                    Outcomes
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    {offering.outcomes}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="relative py-24 border-t border-border">
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
              <div key={cap.title} className="gradient-border p-8 hover-lift">
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
      <section className="relative py-24 bg-navy border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
            Stack
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Technologies We <span className="gradient-text">Build With</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl">
            Every tool in our ML stack is selected for production reliability,
            community support, and integration depth — not novelty. These are
            the libraries and frameworks we trust for systems that run 24/7.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2.5 text-sm font-medium text-text-secondary border border-border rounded-full bg-navy hover:border-cyan/30 hover:text-cyan transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="relative py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
            Impact
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Measurable <span className="gradient-text">Results</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            These metrics come from real production deployments — not
            backtesting, not simulations, not cherry-picked demo results.
            Production ML that delivers quantifiable business value.
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-12">
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

      {/* Related Case Study */}
      <section className="relative py-24 bg-navy border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
            Case Study
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Related <span className="gradient-text">Work</span>
          </h2>
          <div className="mt-8 gradient-border p-8 hover-lift">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan bg-cyan/10 rounded-full mb-4">
                  ML Trading Systems
                </span>
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  PutsEngine & TradeNova: ML-Powered Trading Platforms
                </h3>
                <p className="text-text-secondary max-w-2xl">
                  Production ML systems for options and futures trading — built
                  from research to live execution. Multi-agent architectures with
                  5 specialized ML models (Isolation Forest anomaly detection,
                  XGBoost risk scoring, Holt-Winters forecasting, PPO
                  reinforcement learning, LightGBM signal classification)
                  collaborating through Bayesian weight updating. Automated
                  nightly retraining keeps models current with market regime
                  changes. Full MLOps pipeline with MLflow tracking, drift
                  detection, and canary deployments — handling thousands of
                  predictions per day with sub-second latency.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {[
                    "5-Agent Ensemble",
                    "95% Prediction Confidence",
                    "Nightly Retraining",
                    "Live Production",
                  ].map((badge) => (
                    <li
                      key={badge}
                      className="inline-flex items-center gap-1.5 text-sm text-text-muted"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan flex-shrink-0" />
                      {badge}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan/30 text-cyan font-semibold hover:bg-cyan/10 transition-colors shrink-0"
              >
                View Case Studies
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-dark relative py-24 sm:py-32 border-t border-border">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
            Ready to Deploy{" "}
            <span className="gradient-text">Production ML</span>?
          </h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto mb-8">
            Let&apos;s discuss how production ML can predict failures, detect
            anomalies, score risks, and optimize decisions in your environment —
            with the MLOps infrastructure that keeps models accurate, compliant,
            and continuously improving. No generic demos. We&apos;ll assess your
            data and map the fastest path to deployed, monitored, production
            models.
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
