import BlogLayout from "@/components/BlogLayout";

export default function BlogPost() {
  return (
    <BlogLayout
      tag="Machine Learning"
      title="From Isolation Forest to XGBoost: Deploying ML Anomaly Detection in Production"
      author="Cloud Resources Engineering"
      date="February 28, 2026"
      readTime="12 min read"
    >
      <p>
        Most enterprise monitoring is backward-looking. Something breaks, an alert fires,
        and a human scrambles to figure out what happened. In storage environments where
        outages cost <strong>$100K-$500K per hour</strong>, this reactive approach is
        financially irresponsible.
      </p>

      <p>
        We built a production ML pipeline that flips this model. Our system detects
        anomalies, predicts capacity exhaustion, and scores risk — <em>before</em>{" "}
        problems become incidents. Here&apos;s the technical deep dive.
      </p>

      <h2>The Three-Model Architecture</h2>

      <p>
        We deploy three complementary ML models, each purpose-built for a different
        prediction task. Together, they provide a comprehensive risk and anomaly
        picture of the entire SAN environment.
      </p>

      <h3>Model 1: Isolation Forest for Anomaly Detection</h3>

      <p>
        Isolation Forest is elegant in its simplicity: anomalies are &ldquo;few and different,&rdquo;
        so they&apos;re easier to isolate. We train on 2M+ historical data points, extracting
        statistical features (mean, max, standard deviation) for each entity type.
      </p>

      <p>
        For <strong>ports</strong>, we track utilization, BB credit zeros, CRC errors, and discards.
        For <strong>arrays</strong>, we monitor CPU, latency, IOPS, and cache hit rates.
        For <strong>pools</strong>, we watch utilization, subscription ratios, and days-to-full.
      </p>

      <p>
        The output is an anomaly score from 0-100 for every entity. A port with a score
        of 95 means it&apos;s behaving radically differently from its peers — and that
        difference warrants immediate investigation.
      </p>

      <h3>Model 2: Holt-Winters for Capacity Forecasting</h3>

      <p>
        Linear regression for capacity forecasting is a rookie mistake. Real storage
        environments have <strong>seasonality</strong> — backup windows spike utilization
        nightly, month-end processing creates weekly peaks, and quarterly archiving
        creates longer cycles.
      </p>

      <p>
        Holt-Winters Exponential Smoothing captures all three components: level, trend,
        and seasonality. We produce 30/60/90-day forecasts with <strong>95% confidence
        intervals</strong>, giving capacity planners both the prediction and the
        uncertainty band.
      </p>

      <p>
        When a pool is forecast to hit 85% utilization in 42 days with 95% confidence,
        that&apos;s not a guess — it&apos;s a statistically grounded procurement trigger.
      </p>

      <h3>Model 3: XGBoost for Risk Scoring</h3>

      <p>
        Rule-based risk scoring assigns static weights: &ldquo;slow drain = high risk,&rdquo;
        &ldquo;BB credit zeros = medium risk.&rdquo; But risk interactions are non-linear.
        A slow drain issue on a port that&apos;s also showing BB credit starvation on
        a critical ISL is exponentially more dangerous than either alone.
      </p>

      <p>
        XGBoost learns these non-linear interactions from <strong>150 labeled fault
        events</strong>. The gradient boosted decision trees capture complex feature
        interactions that no human-written rule set could match. And the feature
        importance output tells us <em>why</em> each entity is risky.
      </p>

      <h2>The Training Pipeline</h2>

      <p>
        Our models train automatically on startup, processing the full historical
        dataset in approximately 53 seconds:
      </p>

      <ul>
        <li>Isolation Forest: ~28 seconds (2M+ data points, statistical feature extraction)</li>
        <li>Holt-Winters: ~5 seconds (per-pool time series fitting)</li>
        <li>XGBoost: ~20 seconds (150 labeled faults + metric features)</li>
      </ul>

      <p>
        For our trading systems, we go further with <strong>nightly retraining</strong>{" "}
        — models update every 24 hours with the latest market data, using Bayesian
        weight updating to balance historical patterns with recent signals.
      </p>

      <h2>ML vs. Rule-Based: The Comparison</h2>

      <p>
        After running both approaches in parallel, the differences were stark:
      </p>

      <ul>
        <li><strong>Anomaly detection:</strong> ML caught 47 anomalies that threshold-based rules missed entirely (5.1% anomaly rate across 919 entities)</li>
        <li><strong>Capacity forecasting:</strong> ML predictions were 3x more accurate than linear regression, especially around seasonal transitions</li>
        <li><strong>Risk scoring:</strong> XGBoost identified 23% more critical risks than static rules, with zero false positives on the top-10 list</li>
      </ul>

      <h2>Lessons from Production</h2>

      <ul>
        <li><strong>Start with rule-based, augment with ML.</strong> Rules are explainable and fast to deploy. ML adds the pattern recognition that rules can&apos;t match.</li>
        <li><strong>Feature engineering is 80% of the work.</strong> The ML models are simple; the canonical metrics and statistical features are where the value lives.</li>
        <li><strong>Anomaly scores need context.</strong> A score of 95 on a test port is noise. A score of 95 on a production ISL is a potential major incident. Combine ML scores with business context.</li>
        <li><strong>Retrain or decay.</strong> Models that don&apos;t retrain become stale. Build retraining into the pipeline from day one.</li>
      </ul>

      <p>
        Production ML isn&apos;t about complex algorithms. It&apos;s about the right model for
        the right problem, trained on the right data, deployed with the right context.
        When you get that combination right, you go from reactive firefighting to
        predictive intelligence — and that transformation is worth millions.
      </p>
    </BlogLayout>
  );
}
