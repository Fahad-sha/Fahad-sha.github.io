import HRRagCover from "../images/HRRagCover.jsx";

export const hrKnowledgeRag = {
  slug: "hr-knowledge-rag",
  title: "HR Knowledge RAG",
  subtitle: "AWS S3 + Bedrock + OpenSearch RAG for HR policies/SOPs with citations",
  category: "Applied AI & Development",

  // Update these anytime
  repoUrl: "https://github.com/<your-username>/hr-knowledge-rag",
  liveUrl: "https://<your-live-link>/", // optional

  // Replace this file later with a real JPEG
  archImage: "/images/hr-knowledge-rag-arch.jpg",

  tags: ["AWS S3", "Bedrock", "OpenSearch", "Embeddings", "Citations", "Grounded QA"],
  Cover: HRRagCover,

  metricsPlaceholder: {
    note: "Replace placeholders with real numbers from logs/telemetry.",
    rows: [
      ["Latency (p50)", "___ ms"],
      ["Latency (p95)", "___ ms"],
      ["Monthly active users (MAU)", "___"],
      ["Adoption (queries/day)", "___"],
      ["Citation coverage", "___%"],
      ["Citation precision (spot-check)", "___%"],
      ["Top-1 retrieval hit-rate", "___%"]
    ]
  },

  report: {
    context:
      "HR Knowledge RAG is a governed retrieval system for policies and SOPs. The primary requirement is auditability: every answer must be traceable to source documents with citations.",

    implementation: [
      "Document store: policies/SOPs versioned in S3 with metadata (effective date, region, department).",
      "Ingestion pipeline: normalize → section-aware chunking → metadata tagging → embeddings.",
      "Vector index: OpenSearch k-NN index storing vectors + metadata for filtering and versioning.",
      "Retrieval: semantic top-k with optional reranking and context assembly.",
      "Answering: Bedrock LLM generates grounded QA output with explicit citations to chunk ids and source links.",
      "Observability: hooks for latency, retrieval hit-rate, citation coverage, and user adoption metrics."
    ],

    methodology: [
      "Chunking strategy optimized for policy structure (headings, bullets, tables), preserving citation fidelity.",
      "Mandatory citation formatting enforced in the prompt and response schema.",
      "Metadata filters reduce cross-region policy leakage (e.g., US vs international policies).",
      "Evaluation plan: retrieval hit-rate, citation precision, and faithfulness spot-checking."
    ],

    challenges: [
      "Policy drift over time: required versioned ingestion and effective-date constraints.",
      "Citations must be correct, not just present: necessitated tighter chunk ids + stable source URLs.",
      "Handling heterogeneous formats (PDF, DOCX, wiki exports) without losing section context."
    ],

    outcome: [
      "Grounded answers with citations suitable for compliance workflows.",
      "Incremental updates: only re-embed changed documents; maintain traceable history.",
      "A production-oriented foundation for HR self-serve knowledge systems."
    ]
  }
};
