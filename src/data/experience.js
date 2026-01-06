// Centralized experience data for home + experience pages

export const roles = [
  {
    logo: "/logos/endeavor.png",
    title: "Data Scientist (ML Engineering / People Analytics) — Endeavor Group (IMG Media)",
    meta: "Nov 2023 – Aug 2024",
    location: "New York City",
    tags: ["LLMs", "GenAI", "RAG", "AWS", "MLOps", "People Analytics"],
    bullets: [
      "Built an HR knowledge RAG system for unstructured documents using Amazon S3 (document store) + Amazon Bedrock (embeddings + LLM) + Amazon OpenSearch Service (vector index), enabling semantic search and grounded Q&A with citations.",
      "Implemented automated batch scoring on Amazon SageMaker with scheduled runs (EventBridge), adding schema/data-quality validation checks to reduce pipeline failures and improve reliability.",
      "Delivered self-serve workforce BI dashboards in Amazon QuickSight backed by Redshift/Athena, translating complex HR KPIs into decision-ready views for stakeholders."
    ]
  },
  {
    logo: "/logos/microsoft.png",
    title: "Data Scientist (Contract / Client Engagement) — Microsoft",
    meta: "Apr 2021 – Jun 2022",
    location: "Bengaluru",
    tags: ["Analytics", "Segmentation", "Clustering", "Experimentation", "Stakeholder Delivery"],
    bullets: [
      "Built customer segmentation models (K-means, GMM) to identify behavioral cohorts and support product strategy; improved interpretability through clear cluster profiling and narratives.",
      "Produced stakeholder-ready analysis packs (cohort definitions, drivers, recommendations) to support roadmap prioritization and measurable outcomes.",
      "Implemented scalable data preparation and feature computation patterns for large datasets with repeatable runs and consistent outputs."
    ]
  },
  {
    logo: "/logos/lseg.png",
    title: "Data Scientist (Contract / Client Engagement) — Refinitiv (an LSEG business)",
    meta: "Apr 2020 – Mar 2021",
    location: "Bengaluru",
    tags: ["Time Series", "Forecasting", "Model Risk", "Evaluation"],
    bullets: [
      "Delivered time-series forecasting (ARIMA, Prophet) for planning use cases, including backtesting and error analysis to support model selection and deployment readiness.",
      "Redesigned and validated revenue-risk workflows; increased rigor via clear evaluation protocols, explicit assumptions, and documentation for handoff.",
      "Partnered cross-functionally to translate business objectives into measurable modeling targets and deliverables."
    ]
  },
  {
    logo: "/logos/citigroup.png",
    title: "Data Scientist (Contract / Client Engagement) — Citigroup",
    meta: "Apr 2019 – Mar 2020",
    location: "Bengaluru",
    tags: ["Anomaly Detection", "Fraud/Risk", "Feature Engineering", "Model Validation"],
    bullets: [
      "Developed anomaly detection solutions (Isolation Forest, One-Class SVM) for risk/fraud monitoring; partnered with stakeholders to define thresholds and validation strategy.",
      "Built robust feature engineering and validation steps to reduce false positives and improve interpretability for risk reviewers.",
      "Delivered repeatable training/evaluation workflows with clear documentation and reproducible results."
    ]
  },
  {
    logo: "/logos/kpit.png",
    title: "Trainee (Automotive Engineering) — KPIT",
    meta: "Aug 2018 – Mar 2019",
    location: "Pune",
    tags: ["Embedded C", "Controls", "Requirements", "Systems"],
    bullets: [
      "Developed control logic for Adaptive Cruise Control using embedded C and PID controllers; validated behavior against system requirements.",
      "Managed ECU requirements and system specifications using IBM DOORS, ensuring traceability and compliance with engineering standards."
    ]
  }
];

export const skills = [
  "Python",
  "SQL",
  "R",
  "PyTorch",
  "TensorFlow/Keras",
  "scikit-learn",
  "XGBoost",
  "LLMs / GenAI",
  "RAG pipelines",
  "Embeddings",
  "Vector search",
  "AWS (S3, Bedrock, OpenSearch, SageMaker, Redshift, Athena, EventBridge, QuickSight)",
  "Docker",
  "Kubernetes",
  "CI/CD",
  "Data quality checks",
  "Evaluation & monitoring",
  "LangChain"
];
