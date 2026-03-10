import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Server,
  Code2,
  Brain,
  Gauge,
  DollarSign,
  GitMerge,
  Eye,
  Timer,
  TrendingDown,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cloud & DevOps | Cloud Resources",
  description:
    "Cloud-native operational intelligence platforms with Kubernetes orchestration, Infrastructure-as-Code, AI-powered observability, DORA metrics, FinOps optimization, and CI/CD pipeline engineering.",
};

const problems = [
  {
    icon: Eye,
    problem: "Fragmented Observability Across Metrics, Logs, Traces, and Cost Data",
    description:
      "Your monitoring stack is a patchwork of disconnected tools — Prometheus for metrics, a separate log aggregator, an APM vendor for traces, and a spreadsheet for cost tracking. When a production incident fires at 2 AM, your on-call engineer spends the first 45 minutes just correlating data across four different dashboards before they even begin root cause analysis. Critical signals that would be obvious in a unified view remain invisible when scattered across isolated observability silos. The result: longer outages, frustrated engineers, and an ever-growing tool sprawl that compounds the very problem it was supposed to solve.",
    solution:
      "We build unified observability platforms that federate metrics (Prometheus/PromQL), logs (Grafana Loki/LogQL), traces (Grafana Tempo/TraceQL), and cost data (OpenCost) into a single correlated view. AI-powered natural language queries replace manual dashboard switching — your engineer asks 'what changed in the payment service in the last 30 minutes?' and gets a correlated answer spanning metrics, logs, traces, and recent deployments in seconds, not minutes.",
  },
  {
    icon: Timer,
    problem: "Slow Root Cause Analysis Extending MTTR by Hours",
    description:
      "Your mean time to resolution has been creeping upward for the past year. Not because your engineers are less capable, but because your infrastructure has grown more complex while your diagnostic tooling hasn't kept pace. A P1 incident that would have taken 20 minutes to diagnose two years ago now takes 2 hours — tracing through microservice call chains, checking deployment histories, correlating with infrastructure changes, and ruling out dozens of false leads across an increasingly distributed architecture. Every additional minute of downtime costs money, erodes customer trust, and burns out your best engineers.",
    solution:
      "We deploy AI-powered operational intelligence that accelerates root cause identification from hours to minutes. PromQL, LogQL, and TraceQL queries executed by AI against live telemetry — correlating metric anomalies with log errors, trace latency spikes, recent deployments, and infrastructure changes. The system generates root cause hypotheses ranked by probability, complete with supporting evidence, so your engineers spend their time confirming and fixing rather than hunting and guessing.",
  },
  {
    icon: TrendingDown,
    problem: "Cloud Spend Growing Unchecked Without Visibility or Chargeback",
    description:
      "Your monthly AWS bill has tripled in 18 months, but nobody can explain exactly why. Development environments run 24/7 when they're only used 8 hours a day. Orphaned resources from decommissioned projects accumulate silently. Over-provisioned instances run at 12% average utilization because nobody wants to be responsible for the next performance incident. And when finance asks engineering to break down costs by team, product, or customer, the best answer they get is an educated guess based on tagging that's 60% complete.",
    solution:
      "We implement comprehensive FinOps frameworks with OpenCost integration, resource right-sizing automation, and chargeback reporting that gives every team visibility into their actual cloud consumption. Automated policies enforce environment scheduling, identify orphaned resources, and flag over-provisioned workloads with right-sizing recommendations that include confidence intervals. Teams see their spend in real time, finance gets accurate cost allocation, and engineering leadership can make informed trade-offs between cost and performance.",
  },
  {
    icon: AlertTriangle,
    problem: "Manual Deployments and Configuration Drift Creating Reliability Risks",
    description:
      "Your production environment doesn't match what's in version control — and nobody knows exactly how it diverged. Hotfixes applied directly to production servers, security patches manually installed on some nodes but not others, environment variables changed through the console instead of through code. Every manual change is a ticking time bomb: it works today, but the next automated deployment will overwrite it, the next scaling event will create inconsistent nodes, and the next disaster recovery test will reveal that your recovery procedures restore to a state that no longer matches production.",
    solution:
      "We implement GitOps workflows with Terraform-managed infrastructure and ArgoCD-driven application delivery where the Git repository is the single source of truth for everything. Every infrastructure change goes through pull request review, automated validation, and reconciliation. Drift detection alerts fire when any resource deviates from its declared state. Recovery becomes deterministic — you don't restore from backups, you re-apply from code — and every environment is a reproducible artifact, not a snowflake.",
  },
];

const serviceOfferings = [
  {
    title: "Cloud Architecture & Migration Strategy",
    description:
      "We design cloud-native architectures and migration pathways that transform legacy infrastructure into scalable, resilient, cost-optimized platforms. This isn't a lift-and-shift exercise — it's a deliberate rearchitecture that takes advantage of managed services, container orchestration, and infrastructure-as-code to deliver the reliability, performance, and operational efficiency that justify the migration investment. Every design decision is backed by load testing, cost modeling, and failure mode analysis.",
    includes: [
      {
        keyword: "Infrastructure Assessment & TCO Modeling",
        detail:
          "comprehensive audit of your current infrastructure footprint — compute, storage, networking, licensing, and operational overhead — with detailed total cost of ownership projections comparing current state against cloud-native alternatives across AWS, GCP, and Azure.",
      },
      {
        keyword: "Cloud-Native Architecture Design",
        detail:
          "designing target-state architectures using managed services (RDS, ElastiCache, SQS, S3), container orchestration (EKS/GKE/AKS), serverless where appropriate, and event-driven patterns that eliminate single points of failure and scale automatically with demand.",
      },
      {
        keyword: "Migration Sequencing & Risk Mitigation",
        detail:
          "building phased migration plans that sequence workload moves by dependency, risk, and business criticality — with rollback procedures, data synchronization strategies, and cutover runbooks that minimize downtime and protect data integrity at every step.",
      },
      {
        keyword: "Network Architecture & Security Design",
        detail:
          "designing VPC topologies, subnet strategies, security group policies, and connectivity patterns (Transit Gateway, PrivateLink, VPN) that enforce defense-in-depth while enabling the service-to-service communication your applications require.",
      },
      {
        keyword: "Performance Baseline & Validation",
        detail:
          "establishing quantitative performance baselines before migration and validating that every migrated workload meets or exceeds pre-migration benchmarks — using load testing, latency profiling, and throughput measurement to ensure the new architecture delivers on its promises.",
      },
    ],
    outcomes:
      "Clients executing our migration strategies typically achieve 40–60% infrastructure cost reduction while improving availability from 99.9% to 99.99%. The phased approach ensures zero-downtime migrations for business-critical workloads, with every cutover backed by tested rollback procedures that have been exercised in staging before touching production.",
  },
  {
    title: "Kubernetes Platform Engineering",
    description:
      "We build production-grade Kubernetes platforms on EKS, GKE, and AKS that go far beyond cluster provisioning. Namespace governance, resource quotas, network policies, RBAC, auto-scaling node pools, pod disruption budgets, and zero-downtime deployment strategies — the complete platform engineering required to run hundreds of microservices reliably across multi-cloud environments. This is the infrastructure layer that lets your development teams ship independently without stepping on each other or compromising cluster stability.",
    includes: [
      {
        keyword: "Multi-Cluster Architecture",
        detail:
          "designing cluster topologies for production, staging, and development workloads with appropriate isolation — including cross-cluster service mesh, federated monitoring, and disaster recovery strategies that protect against cluster-level failures without over-provisioning.",
      },
      {
        keyword: "Namespace Governance & Resource Quotas",
        detail:
          "implementing multi-tenant namespace strategies with resource quotas, limit ranges, and network policies that prevent any single team or workload from monopolizing cluster resources — enforcing fair sharing while maintaining performance isolation between tenants.",
      },
      {
        keyword: "Auto-Scaling Configuration",
        detail:
          "tuning Horizontal Pod Autoscaler, Vertical Pod Autoscaler, and Cluster Autoscaler with custom metrics, scaling thresholds, and node pool strategies that balance responsiveness against cost — scaling up fast enough for traffic spikes and scaling down aggressively during quiet periods.",
      },
      {
        keyword: "Zero-Downtime Deployment Strategies",
        detail:
          "implementing rolling updates, blue-green deployments, and canary releases with automated rollback triggers based on error rates, latency percentiles, and custom health checks — ensuring every deployment is a non-event for your users.",
      },
      {
        keyword: "Security Hardening & Compliance",
        detail:
          "applying CIS Kubernetes benchmarks, pod security standards, image scanning, admission controllers, and secrets management (Vault/External Secrets) — producing a hardened platform that satisfies SOC 2, HIPAA, and PCI compliance requirements.",
      },
    ],
    outcomes:
      "Organizations running on our Kubernetes platforms achieve 99.99% application availability with deployment frequencies exceeding 50 per day. The platform engineering layer eliminates 'it works on my machine' entirely — every environment from development through production runs identical configurations, validated through automated compliance checks on every pull request.",
  },
  {
    title: "Infrastructure-as-Code & GitOps",
    description:
      "We implement comprehensive Infrastructure-as-Code strategies with Terraform for cloud resources and ArgoCD for application delivery — creating a fully declarative, version-controlled, peer-reviewed infrastructure pipeline. Every resource is codified, every change is auditable, and every environment is reproducible. No more snowflake servers, manual console changes, or undocumented hotfixes that create configuration drift you don't discover until the next disaster recovery test.",
    includes: [
      {
        keyword: "Terraform Module Architecture",
        detail:
          "building composable, versioned Terraform modules for every infrastructure pattern your organization uses — VPCs, EKS clusters, RDS instances, IAM policies, monitoring stacks — with input validation, output contracts, and documentation that enables self-service provisioning by development teams.",
      },
      {
        keyword: "State Management & Collaboration",
        detail:
          "configuring remote state backends with locking, workspace strategies, and state segmentation that enable multiple teams to manage infrastructure concurrently without conflicts — with state import procedures for brownfield environments and migration paths for legacy configurations.",
      },
      {
        keyword: "ArgoCD GitOps Workflows",
        detail:
          "deploying ArgoCD application definitions, sync policies, and health checks that reconcile Kubernetes cluster state against Git repository declarations — automatically detecting and correcting drift, with configurable sync windows and manual approval gates for production changes.",
      },
      {
        keyword: "Drift Detection & Automated Remediation",
        detail:
          "continuous comparison of actual infrastructure state against declared state, with automated alerting on unauthorized changes and optional auto-remediation that reverts drift to the declared configuration — ensuring production always matches what's in version control.",
      },
      {
        keyword: "Policy-as-Code Enforcement",
        detail:
          "implementing OPA/Gatekeeper and Sentinel policies that validate every infrastructure change against organizational standards — preventing non-compliant resources from being provisioned, enforcing tagging requirements, and blocking security anti-patterns before they reach production.",
      },
    ],
    outcomes:
      "Teams adopting our IaC frameworks eliminate configuration drift entirely and reduce infrastructure provisioning time from days to minutes. Disaster recovery becomes a deterministic process — rebuilding entire environments from code in under 30 minutes — and every infrastructure change carries a full audit trail linking the change to a pull request, reviewer, and business justification.",
  },
  {
    title: "Operational Intelligence & AI-Powered Observability",
    description:
      "We build AI-powered operational intelligence platforms that transform raw telemetry from Prometheus, Grafana Loki, and OpenTelemetry into actionable insights accessible through natural language queries. Beyond traditional dashboards, these platforms enable engineers to ask questions in plain English — 'which services had the highest error rate increase after yesterday's deployment?' — and receive data-backed answers with supporting evidence from live metrics, logs, and traces. This is observability that thinks, not just displays.",
    includes: [
      {
        keyword: "Unified Telemetry Pipeline",
        detail:
          "federating metrics (Prometheus), logs (Grafana Loki), traces (Grafana Tempo), and cost data (OpenCost) into a correlated data layer — enabling cross-signal queries that connect metric anomalies to log errors, trace latency spikes, and infrastructure cost impact in a single investigation flow.",
      },
      {
        keyword: "AI-Powered Query Engine",
        detail:
          "natural language to PromQL/LogQL/TraceQL translation that enables engineers to query live telemetry conversationally — handling complex compound queries, follow-up questions, and investigative workflows without requiring memorization of query language syntax.",
      },
      {
        keyword: "Intelligent Alert Correlation",
        detail:
          "ML-based alert grouping that correlates related signals across services and infrastructure layers, suppresses noise during known maintenance windows, and surfaces root-cause hypotheses — reducing alert volume by 80%+ while improving signal quality and time-to-resolution.",
      },
      {
        keyword: "Deployment Impact Analysis",
        detail:
          "automated correlation of deployment events with downstream metric changes, error rate shifts, and latency impacts — giving engineering teams immediate visibility into whether a deployment improved, degraded, or had no effect on system reliability.",
      },
    ],
    outcomes:
      "Engineering teams using our operational intelligence platforms reduce mean time to resolution by 70%, with junior engineers resolving complex incidents that previously required senior-level expertise. The AI query engine becomes the default starting point for any operational question — replacing the manual workflow of writing PromQL, switching between dashboards, and correlating data across disconnected tools.",
  },
  {
    title: "FinOps & Cloud Cost Optimization",
    description:
      "We implement comprehensive FinOps frameworks that transform cloud cost management from a monthly bill review exercise into a real-time, team-level discipline. OpenCost integration, automated right-sizing, reservation strategy, environment scheduling, and chargeback reporting that gives every engineering team and finance stakeholder visibility into their actual cloud consumption — with actionable optimization recommendations that include risk-adjusted savings projections.",
    includes: [
      {
        keyword: "OpenCost Integration & Cost Allocation",
        detail:
          "deploying OpenCost for real-time Kubernetes cost attribution at the namespace, deployment, and pod level — with custom cost models that account for shared infrastructure, data transfer, and managed service consumption beyond compute and storage.",
      },
      {
        keyword: "Resource Right-Sizing Automation",
        detail:
          "analyzing historical utilization patterns to identify over-provisioned instances, memory-heavy pods with low CPU usage, and storage volumes with capacity to spare — generating right-sizing recommendations with confidence intervals and projected savings that engineers can review and approve.",
      },
      {
        keyword: "Reservation & Savings Plan Strategy",
        detail:
          "analyzing workload stability and growth projections to optimize the mix of on-demand, reserved, and spot instances — with commitment strategies that maximize savings without over-committing to capacity that might not be needed as architecture evolves.",
      },
      {
        keyword: "Environment Scheduling & Waste Elimination",
        detail:
          "automating development and staging environment lifecycles — shutting down non-production workloads outside business hours, detecting orphaned resources from decommissioned projects, and enforcing TTL policies on temporary environments that would otherwise accumulate indefinitely.",
      },
      {
        keyword: "Chargeback & Showback Reporting",
        detail:
          "building team-level and product-level cost dashboards that allocate shared infrastructure costs fairly, track spending against budgets, and provide trend analysis that enables proactive cost management rather than reactive bill shock.",
      },
    ],
    outcomes:
      "Organizations implementing our FinOps frameworks consistently achieve 30–40% cloud cost reduction in the first quarter, with ongoing optimization maintaining savings as infrastructure evolves. The cultural shift is equally valuable — engineering teams that see their cloud costs in real time make fundamentally different architecture and provisioning decisions than teams that only encounter costs as a monthly aggregate.",
  },
  {
    title: "SRE & Reliability Engineering",
    description:
      "We implement Site Reliability Engineering practices that quantify, measure, and continuously improve your organization's delivery velocity and operational reliability. DORA metrics (deployment frequency, lead time, change failure rate, MTTR), error budgets, SLO/SLI frameworks, incident response automation, and blameless postmortem processes — the complete SRE toolkit that transforms reliability from an aspiration into a measurable, improvable engineering discipline.",
    includes: [
      {
        keyword: "DORA Metrics Implementation",
        detail:
          "instrumenting your CI/CD pipelines and incident management workflows to automatically calculate deployment frequency, lead time for changes, change failure rate, and mean time to recovery — with trend dashboards that track improvement over time and benchmark against industry standards.",
      },
      {
        keyword: "SLO/SLI Framework Design",
        detail:
          "defining Service Level Objectives and Indicators that align technical reliability targets with business requirements — specifying exactly how much unreliability is acceptable, measured in error budgets that inform deployment velocity and risk-taking decisions.",
      },
      {
        keyword: "Error Budget Policies",
        detail:
          "establishing organizational policies that link error budget consumption to deployment velocity — accelerating releases when reliability is healthy and automatically throttling changes when error budgets are exhausted, creating a self-regulating balance between velocity and stability.",
      },
      {
        keyword: "Incident Response Automation",
        detail:
          "building automated incident detection, alerting, escalation, and communication workflows — from PagerDuty/Opsgenie integration to automated status page updates and stakeholder notifications — reducing the manual overhead of incident management while improving response consistency.",
      },
      {
        keyword: "Blameless Postmortem Framework",
        detail:
          "establishing structured postmortem processes with templates, facilitator guides, and action item tracking that focus on systemic improvements rather than individual blame — creating a learning culture where incidents drive measurable reliability improvements instead of blame cycles.",
      },
    ],
    outcomes:
      "Organizations adopting our SRE framework achieve 4x improvement in DORA metrics within six months — moving from monthly deployments to daily releases, reducing lead time from weeks to hours, cutting change failure rates by 60%, and reducing MTTR from hours to minutes. The error budget framework resolves the eternal tension between 'ship faster' and 'don't break things' by making it a quantified, data-driven conversation instead of an opinion-based argument.",
  },
];

const capabilities = [
  {
    icon: Server,
    title: "Kubernetes Orchestration",
    description:
      "Production EKS, GKE, and AKS cluster management with auto-scaling node pools, namespace governance, resource quotas, and zero-downtime rolling deployments across multi-cloud environments.",
  },
  {
    icon: Code2,
    title: "Infrastructure-as-Code",
    description:
      "Terraform and CloudFormation modules with modular composition, state management, and drift detection. Every infrastructure resource version-controlled, peer-reviewed, and reproducible across environments.",
  },
  {
    icon: Brain,
    title: "Operational Intelligence",
    description:
      "AI-powered PromQL, LogQL, and TraceQL queries executed against live telemetry from Prometheus, Grafana, and OpenTelemetry. Natural language questions that return data-backed reliability and cost insights.",
  },
  {
    icon: Gauge,
    title: "DORA Metrics & SRE",
    description:
      "Deployment frequency, lead time for changes, change failure rate, and MTTR tracking that quantifies engineering velocity. SRE practices with error budgets, SLOs, and incident response automation.",
  },
  {
    icon: DollarSign,
    title: "FinOps & Cost Optimization",
    description:
      "Cloud spend analytics with OpenCost, resource right-sizing recommendations, spot instance strategies, and chargeback reporting that reduces infrastructure costs by 40% while maintaining SLA targets.",
  },
  {
    icon: GitMerge,
    title: "CI/CD Pipeline Engineering",
    description:
      "ArgoCD GitOps workflows, GitHub Actions pipelines, and automated deployment strategies with canary releases, blue-green deployments, and rollback automation across all environments.",
  },
];

const technologies = [
  "AWS EKS",
  "Terraform",
  "Kubernetes",
  "Docker",
  "Prometheus",
  "Grafana",
  "ArgoCD",
  "OpenTelemetry",
  "OpenCost",
  "Grafana Loki",
  "Grafana Tempo",
  "GitHub Actions",
];

const metrics = [
  { value: "99.99%", label: "Uptime Achieved" },
  { value: "70%", label: "MTTR Reduction" },
  { value: "40%", label: "Cloud Cost Savings" },
  { value: "4x", label: "DORA Metric Improvement" },
];

const enterpriseTech = [
  {
    name: "Cloud Platforms",
    description: "Multi-cloud infrastructure and provisioning",
    techs: ["AWS EKS", "Terraform"],
  },
  {
    name: "Container & Orchestration",
    description: "Container runtime and cluster management",
    techs: ["Kubernetes", "Docker"],
  },
  {
    name: "Observability",
    description: "Unified metrics, logs, traces, and cost telemetry",
    techs: ["Prometheus", "Grafana", "Grafana Loki", "Grafana Tempo", "OpenTelemetry", "OpenCost"],
  },
  {
    name: "CI/CD & GitOps",
    description: "Declarative delivery and deployment automation",
    techs: ["ArgoCD", "GitHub Actions"],
  },
];

export default function CloudDevOpsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="hero-dark relative pt-32 pb-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0a1628 0%, #0d2847 50%, #0f3460 100%)",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
                SERVICES
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Cloud &amp; DevOps
              </h1>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl">
                We build cloud-native operational intelligence platforms that
                unify metrics, logs, traces, costs, and incidents into a single
                AI-powered view. Kubernetes orchestration on EKS, GKE, and AKS
                with Infrastructure-as-Code that eliminates configuration drift.
                FinOps frameworks that have reduced cloud spend by 40% while
                improving availability to 99.99%. DORA metrics that quantify
                engineering velocity and SRE practices that make reliability a
                measurable discipline. And AI-powered observability that answers
                reliability, delivery, cost, and risk questions in natural language
                using real telemetry from Prometheus, Grafana, and OpenTelemetry —
                not dashboards your team has to interpret, but intelligence that
                interprets itself.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cyan text-white font-semibold hover:shadow-lg hover:shadow-cyan/25 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 18%, black 75%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 82%, transparent 100%)', maskComposite: 'intersect', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 18%, black 75%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 82%, transparent 100%)', WebkitMaskComposite: 'source-in' }}>
              <img src="/images/service-cloud-devops.png" alt="" className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section
        className="relative bg-white py-12"
        style={{ boxShadow: "0 -4px 20px rgba(0,0,0,0.05)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((m) => (
              <div key={m.label} className="border-l-4 border-cyan pl-6">
                <div className="text-3xl sm:text-4xl font-extrabold text-cyan">
                  {m.value}
                </div>
                <div className="text-sm text-slate-600 mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems Solved */}
      <section className="relative py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-cyan/10 text-cyan text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            PROBLEMS SOLVED
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            From Infrastructure Challenges to{" "}
            <span className="gradient-text">Business Outcomes</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl">
            Cloud and DevOps maturity stalls when organizations collect
            telemetry without intelligence, adopt Kubernetes without platform
            engineering, and deploy infrastructure without codification. These
            are the patterns we see — and eliminate — in every engagement.
          </p>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {problems.map((p) => (
              <div key={p.problem} className="gradient-border p-8 hover-lift">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <p.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">
                      CHALLENGE
                    </span>
                    <h3 className="text-lg font-bold text-text-primary mt-1">
                      {p.problem}
                    </h3>
                  </div>
                </div>
                <p className="text-text-secondary leading-relaxed mb-4">
                  {p.description}
                </p>
                <div className="bg-emerald-500/5 rounded-lg p-4">
                  <span className="text-xs font-semibold text-emerald-500 uppercase tracking-wider">
                    OUR SOLUTION
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

      {/* Service Offerings */}
      <section className="relative py-24 bg-navy border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-cyan/10 text-cyan text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            WHAT WE DELIVER
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Solutions &{" "}
            <span className="gradient-text">Service Offerings</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl">
            From cloud architecture and migration through Kubernetes platform
            engineering, GitOps automation, and SRE practice implementation — we
            cover the complete cloud-native lifecycle. Each engagement is scoped
            to your infrastructure maturity and the specific reliability, cost,
            and velocity outcomes that justify the investment.
          </p>
          <div className="mt-12 space-y-12">
            {serviceOfferings.map((offering, idx) => (
              <div
                key={offering.title}
                className="relative pl-8 border-l-[3px] border-cyan"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan to-blue flex items-center justify-center text-white text-sm font-bold">
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
                            {item.keyword}
                          </span>{" "}
                          for {item.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-border pt-4">
                  <h4 className="text-sm font-semibold text-cyan uppercase tracking-wider mb-2">
                    Outcomes
                  </h4>
                  <p className="text-text-secondary leading-relaxed italic">
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
          <span className="inline-block bg-cyan/10 text-cyan text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Key <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl">
            From Kubernetes orchestration and Infrastructure-as-Code to
            AI-powered observability and FinOps — we build platforms that deliver
            99.99% uptime at a fraction of traditional operational costs.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="gradient-border p-8 hover-lift">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald/20 to-cyan/20 flex items-center justify-center mb-5">
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

      {/* Enterprise Technology Expertise */}
      <section className="relative py-24 bg-navy border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-cyan/10 text-cyan text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            FEATURED
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Enterprise Technology{" "}
            <span className="gradient-text">Expertise</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl">
            We select cloud-native technologies for production maturity,
            ecosystem support, and operational scalability — not vendor lock-in.
            Every tool in our stack is open-source or open-standard, battle-tested
            across enterprise deployments at scale.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseTech.map((group) => (
              <div key={group.name} className="gradient-border p-6 hover-lift">
                <h3 className="text-lg font-bold text-text-primary mb-1">
                  {group.name}
                </h3>
                <p className="text-sm text-text-muted mb-4">
                  {group.description}
                </p>
                <ul className="space-y-2">
                  {group.techs.map((tech) => (
                    <li
                      key={tech}
                      className="flex items-center gap-2 text-sm text-text-secondary"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan flex-shrink-0" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="relative py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-cyan/10 text-cyan text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            STACK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Technologies We <span className="gradient-text">Build With</span>
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2.5 text-sm font-medium text-text-secondary border border-border rounded-full hover:border-cyan/30 hover:text-cyan transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Case Study */}
      <section className="relative py-24 bg-navy border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-cyan/10 text-cyan text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            CASE STUDY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Related <span className="gradient-text">Work</span>
          </h2>
          <div className="mt-8 gradient-border p-8 hover-lift">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan bg-cyan/10 rounded-full mb-4">
                  Operational Intelligence
                </span>
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  DevopsSREGPT: AI-Powered Operational Intelligence Platform
                </h3>
                <p className="text-text-secondary max-w-2xl">
                  The operational intelligence platform that made infrastructure
                  queryable in natural language. We built an AI-powered system
                  that executes PromQL, LogQL, and TraceQL queries against live
                  Prometheus, Grafana Loki, and Grafana Tempo telemetry — enabling
                  engineers to ask operational questions in plain English and
                  receive data-backed answers with source attribution. Unified
                  metrics, logs, traces, and cost data into a single correlated
                  view that reduces MTTR by 70% and makes junior engineers as
                  effective as senior SREs for routine incident investigation.
                  Integrated DORA metrics tracking, deployment impact analysis,
                  and FinOps cost attribution powered by OpenCost.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {[
                    "70% MTTR Reduction",
                    "99.99% Uptime",
                    "AI-Powered Queries",
                    "Unified Observability",
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
            Ready to Build{" "}
            <span className="gradient-text">Resilient Infrastructure</span>?
          </h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto mb-8">
            Let&apos;s architect a cloud-native platform that delivers 99.99%
            uptime with AI-powered observability, GitOps automation, FinOps cost
            optimization, and SRE practices that make reliability a measurable
            engineering discipline. No generic cloud pitches. We&apos;ll assess
            your infrastructure and map the fastest path to operational
            excellence.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-emerald to-cyan text-white font-semibold hover:shadow-lg hover:shadow-cyan/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Discuss Your Cloud Strategy
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
