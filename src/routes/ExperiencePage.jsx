import { motion } from "framer-motion";
import { asset } from "../lib/asset.js";

function Logo({ src, alt }) {
  if (!src) return null;
  return (
    <img
      src={asset(src)}
      alt={alt || ""}
      className="h-10 w-10 rounded-xl object-contain border border-zinc-200 bg-white"
      loading="lazy"
      onError={(e) => (e.currentTarget.style.display = "none")}
    />
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700">
      {children}
    </span>
  );
}

function TimelineItem({ logo, title, meta, location, bullets, tags, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.35, ease: "easeOut", delay }}
      className="relative pl-10"
    >
      {/* Line + dot */}
      <div className="absolute left-3 top-0 h-full w-px bg-zinc-200" />
      <div className="absolute left-[7px] top-6 h-3.5 w-3.5 rounded-full border-2 border-zinc-300 bg-white" />

      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <Logo src={logo} />
          <div className="min-w-0">
            <div className="text-lg font-semibold tracking-tight text-zinc-900">{title}</div>
            <div className="mt-1 text-sm text-zinc-600">
              {meta}
              {location ? ` • ${location}` : ""}
            </div>
            {tags?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-700">
          {bullets.map((b) => (
            <li key={b}>• {b}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function ExperiencePage() {
  const roles = [
    {
      logo: "/logos/endeavor.png",
      title: "Data Scientist (ML Engineering / People Analytics) — Endeavor Group (IMG Media)",
      meta: "Nov 2023 – Aug 2024",
      location: "New York City",
      tags: ["AWS", "RAG", "MLOps", "People Analytics"],
      bullets: [
        "Built an HR knowledge RAG pipeline using Amazon S3 (document store) + Amazon Bedrock (embeddings + LLM) + Amazon OpenSearch Service (vector index), enabling semantic search and grounded QA with citations.",
        "Implemented automated batch scoring using Amazon SageMaker with scheduled runs (EventBridge triggers), adding schema/quality validation checks to reduce pipeline failures.",
        "Delivered BI dashboards using Amazon QuickSight backed by Amazon Redshift/Athena, translating workforce KPIs into self-serve views for HR stakeholders."
      ]
    },
    {
      logo: "/logos/microsoft.png",
      title: "Data Scientist (Contract / Client Engagement) — Microsoft",
      meta: "Apr 2021 – Jun 2022",
      location: "Bengaluru",
      tags: ["Segmentation", "Clustering", "Stakeholder Delivery"],
      bullets: [
        "Built segmentation models (K-means, GMM) to identify behavioral cohorts and support product strategy; improved interpretability through clear cluster profiling.",
        "Produced stakeholder-ready analysis packs (cohort definitions, drivers, recommendations) to support roadmap prioritization.",
        "Implemented scalable data prep and feature computation patterns for large datasets with reliable, repeatable runs."
      ]
    },
    {
      logo: "/logos/lseg.png",
      title: "Data Scientist (Contract / Client Engagement) — Refinitiv (an LSEG business)",
      meta: "Apr 2020 – Mar 2021",
      location: "Bengaluru",
      tags: ["Time Series", "Forecasting", "Model Risk"],
      bullets: [
        "Delivered time series forecasting (ARIMA, Prophet) for planning, including backtesting and error analysis to support model selection and deployment readiness.",
        "Redesigned and validated revenue-risk modeling workflows; improved rigor via evaluation protocols and explicit assumptions documentation.",
        "Partnered cross-functionally to translate business objectives into measurable modeling targets and deliverables."
      ]
    },
    {
      logo: "/logos/citigroup.png",
      title: "Data Scientist (Contract / Client Engagement) — Citigroup",
      meta: "Apr 2019 – Mar 2020",
      location: "Bengaluru",
      tags: ["Anomaly Detection", "Fraud/Risk", "Feature Engineering"],
      bullets: [
        "Developed anomaly detection solutions (Isolation Forest, One-Class SVM) for risk/fraud use cases; partnered with stakeholders to define thresholds and validation strategy.",
        "Built robust feature engineering and validation steps to reduce false positives and improve interpretability for risk reviewers.",
        "Delivered repeatable model training/evaluation workflows with clear documentation for handoff."
      ]
    },
    {
      logo: "/logos/kpit.png",
      title: "Trainee (Automotive Engineering) — KPIT",
      meta: "Aug 2018 – Mar 2019",
      location: "Pune",
      tags: ["Embedded C", "Controls", "Requirements"],
      bullets: [
        "Developed autonomous control logic for Adaptive Cruise Control using embedded C and PID controllers; validated behavior against system requirements.",
        "Managed ECU requirements and system specifications using IBM DOORS, ensuring traceability and compliance with engineering standards."
      ]
    }
  ];

  const skills = [
    "Python",
    "SQL",
    "R",
    "PyTorch",
    "TensorFlow/Keras",
    "scikit-learn",
    "XGBoost",
    "AWS (S3, Bedrock, OpenSearch, SageMaker, Redshift, Athena)",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Data quality checks",
    "RAG pipelines",
    "LangChain",
    "Vector search"
  ];

  return (
    <section className="py-12" id="experience">
      <div className="text-xs font-semibold tracking-widest text-zinc-500">EXPERIENCE</div>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Work Experience</h1>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-700">
        6+ years across ML engineering, GenAI (RAG), forecasting, and risk analytics. Each role below highlights the most relevant engineering and modeling outcomes.
      </p>

      <div className="mt-8 space-y-6">
        {roles.map((r, i) => (
          <TimelineItem key={r.title} {...r} delay={i * 0.03} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-90px" }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="mt-12 grid gap-6 lg:grid-cols-2"
      >
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="text-xs font-semibold tracking-widest text-zinc-500">EDUCATION</div>
          <div className="mt-3 text-lg font-semibold tracking-tight">Pace University</div>
          <div className="mt-1 text-sm text-zinc-600">MS in Data Science • GPA 4.0 • Sept 2024 – Dec 2025 • New York City</div>
          <div className="mt-4 text-sm text-zinc-700">
            Relevant coursework: Deep Learning, Data Mining, Scalable Databases, Generative AI, Autonomous Systems.
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="text-xs font-semibold tracking-widest text-zinc-500">ACCOMPLISHMENTS</div>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-700">
            <li>• Impact Award (Refinitiv / LSEG engagement): redesigned revenue-risk model, resulting in $400K annual savings.</li>
            <li>• Spot Awards (consulting/vendor engagements): recognized for delivering critical ML solutions supporting Microsoft and Citigroup stakeholders.</li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-90px" }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
      >
        <div className="text-xs font-semibold tracking-widest text-zinc-500">TOOLS & STACK</div>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
