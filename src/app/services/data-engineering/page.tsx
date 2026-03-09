import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  Layers,
  Workflow,
  Sparkles,
  Network,
  Search,
  ShieldCheck,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Data Engineering | Cloud Resources",
  description:
    "Polyglot data platform architectures with purpose-built databases, AI-driven pipeline triage, real-time streaming, graph databases, vector stores, and automated data quality monitoring.",
};

const problems = [
  {
    problem: "Data Pipeline Failures Costing Enterprises ~$15M Per Year",
    description:
      "Your data pipelines break in the middle of the night, and nobody knows until a downstream dashboard goes stale or a critical report delivers yesterday's numbers to this morning's board meeting. The root cause is buried somewhere across hundreds of dbt models, dozens of data sources, and a tangle of dependencies that no single engineer fully understands. Your on-call data engineer spends the first hour just figuring out which pipeline failed, then another hour tracing upstream to find the actual breaking change — a schema modification in a source system that nobody communicated, a partition that didn't land on time, or a silent data quality regression that passed every existing check. Meanwhile, every downstream consumer of that data is making decisions on stale or incorrect information.",
    solution:
      "We architect data platforms with failure isolation, automated lineage tracking, and AI-driven triage agents that detect pipeline failures within seconds of occurrence, trace the blast radius across every downstream dependency, identify the root cause with LLM-powered log analysis, and deliver a prioritized remediation plan to your on-call engineer — reducing manual triage from 2–8 hours to under 2 minutes. Self-healing capabilities automatically retry transient failures, reroute around known bad sources, and notify stakeholders of data freshness impacts before they discover them in their reports.",
  },
  {
    problem: "Fragmented Data Platforms With Inconsistent Schemas and Quality",
    description:
      "Your organization has accumulated data infrastructure organically over years — a PostgreSQL database here, a Snowflake warehouse there, a Redis cache for real-time features, CSV files on shared drives that somehow became mission-critical, and an ever-growing collection of Python scripts that move data between systems with no schema validation, no contracts, and no documentation. Every team has its own definition of 'customer,' its own revenue calculation logic, and its own interpretation of what 'active user' means. When the CEO asks a seemingly simple question — 'how many customers do we have?' — three different teams produce three different numbers, and the ensuing reconciliation exercise consumes a week of engineering time that should have been spent building product.",
    solution:
      "We implement polyglot data architectures with centralized schema registries, data contracts between producers and consumers, and automated quality validation at every ingestion point. Purpose-built databases are selected for each workload — relational for transactional integrity, time-series for temporal analytics, graph for relationship mapping, vector for semantic search, full-text for document retrieval — unified by a semantic layer that enforces consistent business logic definitions across every consumer. The result is a platform where 'customer count' means exactly one thing, calculated exactly one way, regardless of which team queries it.",
  },
  {
    problem: "Manual Pipeline Triage Taking 2–8 Hours Per Incident",
    description:
      "When a dbt pipeline fails at 3 AM, your on-call data engineer opens their laptop to a wall of red in Airflow. The error message says 'relation does not exist' or 'division by zero' or simply 'timeout' — none of which tells them whether this is a source system issue, a transformation bug, an infrastructure problem, or a data quality regression. They start the manual investigation: check the Airflow logs, trace the DAG dependencies, query the source tables, compare row counts against yesterday, inspect schema changes, check if any upstream jobs ran late, and review recent code changes that might have introduced the regression. Two to eight hours later, they've found the root cause, applied a fix, and triggered a backfill — but the downstream analytics team has already spent their morning working around stale data.",
    solution:
      "Our Data Reliability Agent (DRA) automates the entire triage workflow that your engineers currently perform manually. Within seconds of a pipeline failure, DRA ingests the error logs, queries the data lineage graph to identify all affected upstream and downstream nodes, executes diagnostic queries against source and target tables, analyzes schema drift and row count anomalies, correlates the failure with recent code changes and infrastructure events, and produces a structured incident report with root cause classification, blast radius assessment, and recommended remediation steps — all in under two minutes, with citations to the specific evidence that supports each conclusion.",
  },
  {
    problem: "Legacy Batch Architectures Unable to Support Real-Time AI/ML",
    description:
      "Your data warehouse refreshes once a day at 2 AM. Your machine learning models retrain weekly on data that's already stale by the time training begins. Your product team wants real-time personalization, fraud detection, and recommendation features, but your data architecture was designed for an era when 'near real-time' meant T+1 and 'analytics' meant a monthly board report. Every request for streaming data gets the same answer: 'we'd need to rebuild the entire pipeline' — and the cost, risk, and timeline estimates are so daunting that the project never gets prioritized. Meanwhile, your competitors are serving recommendations in milliseconds and detecting fraud in real time because they invested in streaming architecture three years ago.",
    solution:
      "We design and implement hybrid batch-streaming architectures that incrementally modernize your data platform without a risky big-bang migration. Event-driven ingestion pipelines capture changes as they occur, streaming transformations maintain real-time materialized views for latency-sensitive consumers, while batch pipelines continue to serve use cases where freshness isn't critical. The architecture supports both paradigms simultaneously, allowing you to migrate workloads from batch to streaming one at a time, validating real-time outputs against batch baselines before cutting over — a pragmatic path from legacy batch to real-time that manages risk at every step.",
  },
];

const serviceOfferings = [
  {
    title: "Data Architecture & Platform Strategy",
    description:
      "Not every data problem requires the same database, and not every workload benefits from the same storage engine. We design polyglot data architectures that match each workload to its optimal storage technology — relational databases for transactional consistency, time-series engines for temporal analytics, graph databases for relationship-heavy queries, vector stores for semantic similarity, and search indices for full-text retrieval. The result is a coherent platform strategy where every data consumer gets sub-second query performance because their data lives in a storage engine purpose-built for their access patterns, not a one-size-fits-all warehouse that compromises on everything.",
    includes: [
      {
        keyword: "Polyglot Persistence Design",
        detail:
          "systematic evaluation of every data workload against storage engine characteristics — query patterns, write throughput, consistency requirements, latency targets, and cost profiles — producing a database selection matrix that maps each workload to PostgreSQL, TimescaleDB, Neo4j, OpenSearch, Qdrant, or Redis with quantified justification for every choice.",
      },
      {
        keyword: "Data Platform Blueprint",
        detail:
          "end-to-end architecture documentation covering ingestion patterns, transformation layers, storage tiers, serving interfaces, and governance frameworks — with capacity projections, scaling triggers, and cost models that let you plan infrastructure investments with confidence.",
      },
      {
        keyword: "Schema Registry & Data Contracts",
        detail:
          "centralized schema management with versioning, backward/forward compatibility enforcement, and producer-consumer contracts that prevent breaking changes from propagating through the platform — catching schema drift at the boundary before it corrupts downstream systems.",
      },
      {
        keyword: "Migration & Modernization Roadmap",
        detail:
          "phased migration plans that sequence database consolidations, schema standardizations, and platform transitions by dependency order and business risk — with rollback procedures, data validation gates, and parallel-run strategies that protect data integrity at every step.",
      },
      {
        keyword: "Cost & Performance Modeling",
        detail:
          "workload-specific benchmarking that compares candidate storage engines on actual data volumes and query patterns — producing cost-per-query, throughput-at-scale, and storage efficiency metrics that inform architecture decisions with empirical data rather than vendor marketing.",
      },
    ],
    outcomes:
      "Organizations adopting our polyglot architecture strategy typically reduce query latency by 10x for workloads previously running on general-purpose databases — time-series queries that took 30 seconds on PostgreSQL complete in under 3 seconds on TimescaleDB, graph traversals that timed out on relational joins return in milliseconds from Neo4j, and semantic search that required brute-force scanning achieves sub-millisecond retrieval from Qdrant.",
  },
  {
    title: "Real-Time Data Pipeline Engineering",
    description:
      "We build production-grade data pipelines that move, transform, and deliver data at the speed your business requires — from traditional batch ETL that refreshes warehouses overnight to real-time streaming architectures that deliver events to consumers within milliseconds of occurrence. Every pipeline is built with observability, idempotency, and failure recovery as first-class concerns — not afterthoughts bolted on when the first production incident hits. This is data engineering that runs reliably at 3 AM on Saturday without waking anyone up.",
    includes: [
      {
        keyword: "Streaming ETL Architecture",
        detail:
          "event-driven ingestion and transformation pipelines using Kafka, Kafka Connect, and stream processing frameworks that capture changes from source systems in real time — with exactly-once semantics, schema evolution handling, and dead letter queues for records that fail validation.",
      },
      {
        keyword: "dbt Transformation Pipelines",
        detail:
          "modular, tested, documented dbt models that implement business logic as version-controlled SQL — with incremental materialization strategies that process only changed data, automated testing at every layer, and lineage graphs that make data flow transparent to every stakeholder.",
      },
      {
        keyword: "Apache Airflow Orchestration",
        detail:
          "DAG-based workflow orchestration with dependency management, retry policies, SLA monitoring, and alerting — scheduling and coordinating complex multi-step pipelines with clear visibility into execution status, duration trends, and resource consumption across every pipeline run.",
      },
      {
        keyword: "Batch-to-Streaming Migration",
        detail:
          "incremental migration strategies that transition individual pipelines from batch to streaming without disrupting downstream consumers — running parallel pipelines to validate real-time outputs against batch baselines before cutting over, with automated reconciliation that catches discrepancies before they impact business decisions.",
      },
      {
        keyword: "Pipeline SLA Monitoring",
        detail:
          "freshness tracking, row count validation, and delivery time monitoring for every pipeline stage — with configurable alerting thresholds that distinguish between normal variance and genuine failures, reducing alert fatigue while ensuring no real incident goes unnoticed.",
      },
    ],
    outcomes:
      "Clients migrating to our pipeline architecture achieve data freshness improvements from T+24 hours to T+5 minutes for their most latency-sensitive workloads, while batch pipeline reliability improves from 85% to 99.5% first-run success rates. The observability layer eliminates 'silent failures' — the pipelines that complete successfully but deliver wrong data — which are often more damaging than the ones that fail loudly.",
  },
  {
    title: "AI-Driven Pipeline Reliability",
    description:
      "Manual pipeline triage is the hidden tax on every data engineering team. When a pipeline fails, an experienced engineer performs a predictable investigation sequence: read the error logs, trace the lineage, check upstream sources, compare row counts, inspect schema changes, review recent commits, and synthesize a root cause hypothesis. Our Data Reliability Agent (DRA) automates this entire workflow — executing the same diagnostic steps an expert would, but completing them in under two minutes instead of two to eight hours. Built on LLM-powered analysis with structured access to your pipeline metadata, lineage graphs, and execution logs, DRA doesn't replace your engineers' judgment — it gives them a comprehensive incident report with root cause hypotheses and blast radius assessment so they can skip the investigation and go straight to resolution.",
    includes: [
      {
        keyword: "Automated Triage Agent",
        detail:
          "LLM-powered diagnostic agent that ingests pipeline failure alerts, queries execution logs and error messages, correlates with historical failure patterns, and produces structured incident reports with root cause classification, confidence scores, and recommended remediation actions — all within two minutes of failure detection.",
      },
      {
        keyword: "Lineage-Aware Blast Radius Detection",
        detail:
          "graph-based dependency analysis that traces every failed pipeline node's downstream impact — identifying every dashboard, report, ML feature, and operational workflow affected by the failure, ranked by business criticality, so your team prioritizes fixes based on actual impact rather than alphabetical order.",
      },
      {
        keyword: "Self-Healing Pipeline Capabilities",
        detail:
          "automated remediation for common failure patterns — retrying transient errors with exponential backoff, rerouting around known-bad source partitions, automatically adjusting resource allocation for memory-related failures, and triggering targeted backfills when upstream data arrives late — resolving 40% of incidents without human intervention.",
      },
      {
        keyword: "Historical Pattern Learning",
        detail:
          "continuous analysis of resolved incidents to build an institutional knowledge base of failure patterns, root causes, and effective remediations — enabling DRA to recognize recurring issues instantly and apply proven fixes automatically, getting smarter with every incident your team resolves.",
      },
    ],
    outcomes:
      "DRA reduces manual pipeline triage time by 95% — from an average of 3.5 hours per incident to under 2 minutes. For a team handling 200+ pipeline incidents per month, that's over 700 engineering hours recovered annually. The self-healing capabilities resolve 40% of incidents automatically, and the blast radius analysis ensures that when engineers do intervene, they fix the highest-impact issues first.",
  },
  {
    title: "Graph & Topology Data Systems",
    description:
      "Some data relationships are fundamentally graph-shaped — infrastructure dependencies, organizational hierarchies, supply chain networks, fraud rings, social connections, and data lineage flows. Trying to model these relationships in relational databases produces queries with twelve self-joins that take minutes to execute and are impossible to maintain. We build purpose-built graph data systems using Neo4j and networkx that make relationship-heavy queries natural, fast, and scalable — enabling topology analysis, path finding, community detection, and impact assessment that would be impractical or impossible with relational approaches.",
    includes: [
      {
        keyword: "Neo4j Graph Database Architecture",
        detail:
          "schema design, index optimization, and query tuning for production Neo4j deployments — modeling entities and relationships to support your specific traversal patterns with consistent sub-second response times even as the graph grows to millions of nodes and billions of relationships.",
      },
      {
        keyword: "Infrastructure Topology Mapping",
        detail:
          "automated discovery and graph modeling of your infrastructure dependency landscape — services, databases, queues, APIs, and their interconnections — enabling real-time impact analysis that answers 'if this component fails, what breaks?' in seconds instead of requiring tribal knowledge from senior engineers.",
      },
      {
        keyword: "Data Lineage Graph Construction",
        detail:
          "end-to-end lineage tracking from source systems through transformations to consumer applications — built as a queryable graph that supports forward and backward lineage traversal, impact analysis for proposed changes, and regulatory compliance reporting for data provenance requirements.",
      },
      {
        keyword: "Network Analysis & Community Detection",
        detail:
          "networkx and graph algorithm implementations for detecting clusters, identifying central nodes, finding shortest paths, and measuring connectivity — applied to fraud detection, influence mapping, supply chain risk analysis, and organizational network optimization.",
      },
    ],
    outcomes:
      "Graph-based infrastructure topology mapping reduces blast radius analysis from 45 minutes of manual investigation to 3-second automated queries. Data lineage graphs enable impact assessment for schema changes that previously required cross-team meetings and spreadsheet analysis. Organizations with graph-based fraud detection identify 3x more fraudulent patterns than rule-based approaches because graph analysis surfaces relationship patterns that tabular analysis cannot detect.",
  },
  {
    title: "Vector Store & Embedding Pipelines",
    description:
      "The rise of large language models and retrieval-augmented generation has created an urgent need for vector storage and similarity search infrastructure that most data platforms weren't designed to provide. We build production-grade embedding pipelines and vector store architectures using pgvector and Qdrant that transform your unstructured data — documents, code, support tickets, knowledge base articles, product descriptions — into searchable vector embeddings that power semantic search, RAG applications, recommendation engines, and similarity-based deduplication at enterprise scale.",
    includes: [
      {
        keyword: "Embedding Generation Pipelines",
        detail:
          "automated pipelines that transform unstructured content into high-dimensional vector representations using state-of-the-art embedding models — with chunking strategies optimized for your content types, incremental processing for new and updated documents, and versioned embedding storage that supports model upgrades without full reprocessing.",
      },
      {
        keyword: "pgvector & Qdrant Deployment",
        detail:
          "production vector store architecture with index optimization, query tuning, and scaling strategies — pgvector for teams already invested in PostgreSQL who want vector search without additional infrastructure, and Qdrant for workloads requiring dedicated vector search performance with advanced filtering and multi-tenancy.",
      },
      {
        keyword: "RAG Infrastructure",
        detail:
          "end-to-end retrieval-augmented generation pipelines that combine vector similarity search with LLM generation — including context window optimization, re-ranking strategies, citation tracking, and answer quality evaluation frameworks that ensure generated responses are grounded in your actual data.",
      },
      {
        keyword: "Semantic Search & Similarity Matching",
        detail:
          "hybrid search architectures that combine vector similarity with keyword matching, metadata filtering, and business rule boosting — delivering search experiences that understand intent and meaning, not just keyword overlap, with sub-100ms query latency at million-document scale.",
      },
    ],
    outcomes:
      "Organizations deploying our vector store infrastructure achieve 85%+ relevance improvement over keyword-based search for knowledge retrieval use cases. RAG applications built on our embedding pipelines deliver grounded, citation-backed responses with 90%+ factual accuracy, and the incremental embedding pipeline processes new documents within minutes of creation — keeping the vector index perpetually current without batch reprocessing.",
  },
  {
    title: "Data Quality & Observability",
    description:
      "Data quality failures are more expensive than data pipeline failures because they're silent — the pipeline completes successfully, the dashboard updates on schedule, and everyone trusts the numbers until someone notices that revenue is off by 20% or a machine learning model's predictions have degraded because a feature column silently changed from dollars to cents. We build comprehensive data quality monitoring that catches anomalies, schema drift, freshness violations, and distribution shifts before they propagate to downstream consumers — turning data quality from an assumption into a continuously validated guarantee with SLA tracking and automated enforcement.",
    includes: [
      {
        keyword: "Automated Quality Monitoring",
        detail:
          "continuous validation rules that check every data asset against configurable quality dimensions — completeness, uniqueness, validity, consistency, timeliness, and accuracy — with statistical anomaly detection that adapts thresholds based on historical patterns rather than requiring manual threshold configuration for every metric.",
      },
      {
        keyword: "Schema Drift Detection",
        detail:
          "real-time monitoring of source system schemas with automated alerting when columns are added, removed, renamed, or change data types — catching breaking changes at the ingestion boundary before they silently corrupt transformation logic and propagate incorrect data to every downstream consumer.",
      },
      {
        keyword: "Data Contracts & SLA Tracking",
        detail:
          "formalized agreements between data producers and consumers that specify freshness requirements, quality thresholds, schema stability guarantees, and escalation procedures — tracked through automated SLA dashboards that make data reliability visible and accountable across organizational boundaries.",
      },
      {
        keyword: "Distribution Monitoring & Alerting",
        detail:
          "statistical distribution tracking for critical data columns using Kolmogorov-Smirnov tests, population stability indices, and custom distribution metrics — detecting meaningful shifts in data patterns that indicate upstream changes, data quality regressions, or business events that require investigation.",
      },
      {
        keyword: "Quarantine & Circuit Breaker Patterns",
        detail:
          "automated isolation of data that fails quality checks into quarantine zones for investigation — with circuit breaker patterns that halt pipeline processing when quality violations exceed severity thresholds, preventing bad data from reaching production consumers while maintaining overall platform availability.",
      },
    ],
    outcomes:
      "Organizations implementing our data quality framework eliminate silent data failures entirely — every quality violation is detected, classified, and either auto-remediated or escalated within minutes of occurrence. The average time from quality incident to stakeholder notification drops from 'whenever someone notices' to under 5 minutes, and the data contracts framework reduces cross-team data disputes by 80% because quality expectations are explicit, measurable, and automatically enforced.",
  },
];

const capabilities = [
  {
    icon: Layers,
    title: "Polyglot Persistence",
    description:
      "Purpose-built database selection across PostgreSQL, TimescaleDB, Neo4j, OpenSearch, and Qdrant — matching each data workload to its optimal storage engine for performance, cost, and query patterns. Six-plus database technologies orchestrated as a coherent platform.",
  },
  {
    icon: Workflow,
    title: "Real-Time Data Pipelines",
    description:
      "Streaming ETL and event-driven architectures with Apache Airflow orchestration, dbt transformations, Kafka ingestion, and automated lineage tracking. SLA monitoring and freshness alerts at every pipeline stage, from source to serving layer.",
  },
  {
    icon: Sparkles,
    title: "AI-Driven Pipeline Triage",
    description:
      "DRA agent with LLM-powered diagnostics that automatically classifies pipeline failures, identifies root causes through lineage graph analysis, and recommends fixes — reducing manual triage by 95% and resolution time to under 2 minutes per incident.",
  },
  {
    icon: Network,
    title: "Graph & Topology Analysis",
    description:
      "Neo4j and networkx-powered topology mapping for infrastructure dependencies, service relationships, data lineage tracing, and blast radius analysis. Graph traversals that identify impact paths in seconds across millions of nodes and relationships.",
  },
  {
    icon: Search,
    title: "Vector Store & RAG",
    description:
      "pgvector and Qdrant embedding pipelines powering semantic search, retrieval-augmented generation, and similarity matching — enabling AI systems to retrieve contextually relevant data with sub-100ms latency at million-document scale.",
  },
  {
    icon: ShieldCheck,
    title: "Data Quality & Observability",
    description:
      "Automated monitoring with statistical anomaly detection, schema drift alerts, distribution tracking, and freshness validation. Data contracts and SLA enforcement that turn data quality from an assumption into a continuously validated guarantee.",
  },
];

const technologies = [
  "PostgreSQL",
  "TimescaleDB",
  "Neo4j",
  "OpenSearch",
  "Qdrant",
  "dbt",
  "Apache Airflow",
  "pgvector",
  "Redis",
  "Python",
  "Docker",
  "Kafka",
];

const metrics = [
  { value: "95%", label: "Triage Reduction" },
  { value: "6+", label: "Database Types" },
  { value: "<2min", label: "Pipeline Triage" },
  { value: "$200K", label: "Annual Savings" },
];

const enterpriseTechGroups = [
  {
    category: "Relational & Time-Series",
    description:
      "Transactional integrity and temporal analytics engines for structured data workloads.",
    techs: ["PostgreSQL", "TimescaleDB", "MySQL"],
  },
  {
    category: "Graph & Search",
    description:
      "Relationship traversal, semantic similarity, and full-text retrieval infrastructure.",
    techs: ["Neo4j", "OpenSearch", "Qdrant", "pgvector"],
  },
  {
    category: "Pipeline & ETL",
    description:
      "Transformation, orchestration, and workflow management for production data pipelines.",
    techs: ["dbt", "Apache Airflow", "Python", "SQL"],
  },
  {
    category: "Streaming & Cache",
    description:
      "Real-time event processing, message brokering, and low-latency data serving.",
    techs: ["Kafka", "Redis", "Docker"],
  },
];

export default function DataEngineeringPage() {
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
                SERVICES
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Data Engineering
              </h1>
              <p className="mt-6 text-lg leading-relaxed max-w-2xl text-slate-300">
                We build polyglot data platform architectures that match every
                workload to its purpose-built database — relational for
                transactions, time-series for temporal analytics, graph for
                relationship mapping, vector for semantic search, and full-text
                for document retrieval. Our AI-driven Data Reliability Agent
                automatically detects, diagnoses, and triages pipeline failures
                in under two minutes — replacing the 2–8 hour manual
                investigation cycle that silently drains your data engineering
                team&apos;s capacity. Real-time streaming pipelines, dbt
                transformation layers, automated data quality monitoring, and
                the infrastructure-level observability that ensures your data
                platform operates with the reliability your business decisions
                depend on.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cyan text-white font-semibold hover:bg-blue transition-colors"
                >
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <svg
                className="w-full h-full"
                viewBox="0 0 500 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="120"
                  cy="80"
                  rx="55"
                  ry="18"
                  fill="#06b6d4"
                  fillOpacity="0.3"
                />
                <rect
                  x="65"
                  y="80"
                  width="110"
                  height="55"
                  fill="#06b6d4"
                  fillOpacity="0.15"
                />
                <ellipse
                  cx="120"
                  cy="135"
                  rx="55"
                  ry="18"
                  fill="#06b6d4"
                  fillOpacity="0.2"
                />
                <ellipse
                  cx="120"
                  cy="107"
                  rx="55"
                  ry="18"
                  fill="none"
                  stroke="#06b6d4"
                  strokeOpacity="0.25"
                  strokeWidth="1"
                />

                <ellipse
                  cx="380"
                  cy="80"
                  rx="55"
                  ry="18"
                  fill="#3b82f6"
                  fillOpacity="0.3"
                />
                <rect
                  x="325"
                  y="80"
                  width="110"
                  height="55"
                  fill="#3b82f6"
                  fillOpacity="0.15"
                />
                <ellipse
                  cx="380"
                  cy="135"
                  rx="55"
                  ry="18"
                  fill="#3b82f6"
                  fillOpacity="0.2"
                />
                <ellipse
                  cx="380"
                  cy="107"
                  rx="55"
                  ry="18"
                  fill="none"
                  stroke="#3b82f6"
                  strokeOpacity="0.25"
                  strokeWidth="1"
                />

                <path
                  d="M175 107 L210 107 L230 190"
                  stroke="#06b6d4"
                  strokeOpacity="0.4"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                />
                <path
                  d="M325 107 L290 107 L270 190"
                  stroke="#3b82f6"
                  strokeOpacity="0.4"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                />

                <rect
                  x="220"
                  y="185"
                  width="60"
                  height="40"
                  rx="8"
                  fill="#06b6d4"
                  fillOpacity="0.2"
                  stroke="#06b6d4"
                  strokeOpacity="0.4"
                  strokeWidth="1.5"
                />
                <path
                  d="M238 200 L250 210 L262 200"
                  stroke="#06b6d4"
                  strokeOpacity="0.6"
                  strokeWidth="1.5"
                  fill="none"
                />

                <path
                  d="M250 225 L250 280"
                  stroke="#06b6d4"
                  strokeOpacity="0.4"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                />
                <polygon
                  points="250,285 244,275 256,275"
                  fill="#06b6d4"
                  fillOpacity="0.5"
                />

                <ellipse
                  cx="250"
                  cy="300"
                  rx="65"
                  ry="20"
                  fill="#06b6d4"
                  fillOpacity="0.25"
                />
                <rect
                  x="185"
                  y="300"
                  width="130"
                  height="45"
                  fill="#06b6d4"
                  fillOpacity="0.12"
                />
                <ellipse
                  cx="250"
                  cy="345"
                  rx="65"
                  ry="20"
                  fill="#06b6d4"
                  fillOpacity="0.18"
                />

                <circle
                  cx="50"
                  cy="50"
                  r="3"
                  fill="#06b6d4"
                  fillOpacity="0.4"
                />
                <circle
                  cx="450"
                  cy="50"
                  r="3"
                  fill="#3b82f6"
                  fillOpacity="0.4"
                />
                <circle
                  cx="50"
                  cy="350"
                  r="3"
                  fill="#06b6d4"
                  fillOpacity="0.3"
                />
                <circle
                  cx="450"
                  cy="350"
                  r="3"
                  fill="#3b82f6"
                  fillOpacity="0.3"
                />
                <rect
                  x="25"
                  y="190"
                  width="35"
                  height="35"
                  rx="4"
                  fill="none"
                  stroke="#06b6d4"
                  strokeOpacity="0.15"
                  strokeWidth="1"
                  transform="rotate(45 42.5 207.5)"
                />
                <rect
                  x="440"
                  y="240"
                  width="28"
                  height="28"
                  rx="4"
                  fill="none"
                  stroke="#3b82f6"
                  strokeOpacity="0.15"
                  strokeWidth="1"
                  transform="rotate(45 454 254)"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative py-12 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((m) => (
              <div key={m.label} className="border-l-4 border-cyan pl-6">
                <div className="text-3xl sm:text-4xl font-extrabold text-cyan">
                  {m.value}
                </div>
                <div className="text-sm text-text-secondary mt-1">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="relative py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-cyan/10 text-cyan text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Challenges
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Problems We <span className="gradient-text">Solve</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl">
            Data engineering failures are rarely technical mysteries — they&apos;re
            architectural debt, missing observability, and manual processes that
            should have been automated years ago. These are the patterns we
            see — and eliminate — in every engagement.
          </p>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {problems.map((p) => (
              <div key={p.problem} className="gradient-border p-8 hover-lift">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-red-500" />
                </div>
                <span className="text-xs font-semibold text-red-500 uppercase tracking-wider mt-4 inline-block">
                  CHALLENGE
                </span>
                <h3 className="text-lg font-bold text-text-primary mt-1">
                  {p.problem}
                </h3>
                <p className="text-text-secondary leading-relaxed mt-3">
                  {p.description}
                </p>
                <div className="bg-emerald-500/5 rounded-lg p-4 mt-4">
                  <span className="text-xs font-semibold text-emerald-500 uppercase tracking-wider">
                    OUR SOLUTION
                  </span>
                  <p className="text-text-secondary leading-relaxed mt-2">
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
          <span className="inline-block bg-cyan/10 text-cyan text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            What We Deliver
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Solutions &{" "}
            <span className="gradient-text">Service Offerings</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl">
            From platform architecture and database selection through pipeline
            engineering, AI-driven reliability, and data quality
            governance — we cover the complete data engineering lifecycle. Each
            engagement is scoped to your data maturity, team capabilities, and
            the specific reliability, performance, and cost outcomes that justify
            the investment.
          </p>
          <div className="mt-12 space-y-12">
            {serviceOfferings.map((offering, idx) => (
              <div
                key={offering.title}
                className="relative pl-8 border-l-[3px] border-cyan"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan to-blue text-white flex items-center justify-center text-sm font-bold">
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
          <span className="text-sm font-semibold text-cyan tracking-wider uppercase">
            Capabilities
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Key <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl">
            From polyglot persistence and real-time pipelines to AI-driven
            triage, graph databases, and vector stores — full-spectrum data
            engineering that matches every workload to its optimal engine and
            monitors reliability at every layer.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="gradient-border p-8 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-emerald/20 flex items-center justify-center mb-5">
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
            Every database and tool in our data engineering stack is selected for
            production maturity, operational reliability, and workload fit — not
            novelty. These are the technologies we trust for data platforms that
            run 24/7 at enterprise scale.
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

      {/* Enterprise Technology Expertise */}
      <section className="relative py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-cyan/10 text-cyan text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            FEATURED
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
            Enterprise Technology{" "}
            <span className="gradient-text">Expertise</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl">
            Deep specialization across the full data technology landscape — from
            relational and time-series engines to graph databases, streaming
            platforms, and caching infrastructure.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseTechGroups.map((group) => (
              <div
                key={group.category}
                className="gradient-border p-6 hover-lift"
              >
                <h3 className="text-lg font-bold text-text-primary">
                  {group.category}
                </h3>
                <p className="text-text-secondary text-sm mt-2 leading-relaxed">
                  {group.description}
                </p>
                <ul className="mt-4 space-y-1.5">
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
                  AI-Driven Pipeline Reliability
                </span>
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  DRA: Data Reliability Agent
                </h3>
                <p className="text-text-secondary max-w-2xl">
                  The AI agent that transformed how our data engineering team
                  handles pipeline failures. DRA ingests dbt pipeline failure
                  alerts, automatically queries execution logs and data lineage
                  graphs, performs root cause analysis using LLM-powered
                  diagnostics, maps blast radius across every downstream
                  dependency, and delivers structured incident reports with
                  remediation recommendations — all in under two minutes. Built
                  with Python, Neo4j for lineage graph traversal, and GPT-4 for
                  diagnostic reasoning, DRA reduced manual triage time by 95%
                  and recovers over 700 engineering hours annually. Self-healing
                  capabilities automatically resolve 40% of incidents without
                  human intervention, and the system continuously learns from
                  resolved incidents to improve future triage accuracy.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {[
                    "95% Triage Reduction",
                    "<2min Resolution",
                    "40% Auto-Healed",
                    "700+ Hours Recovered",
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
            Ready to Build Your{" "}
            <span className="gradient-text">Data Platform</span>?
          </h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto mb-8">
            Let&apos;s architect a polyglot data platform with AI-driven
            pipeline triage, purpose-built databases for every workload, and
            automated quality monitoring that scales with your data. No generic
            data warehouse pitches. We&apos;ll assess your data landscape and
            map the fastest path to reliable, observable, production-grade data
            infrastructure.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan to-emerald text-white font-semibold hover:shadow-lg hover:shadow-cyan/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Discuss Your Data Strategy
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
