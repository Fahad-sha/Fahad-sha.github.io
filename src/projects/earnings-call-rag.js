import EarningsRagCover from "../images/EarningsRagCover.jsx";

export const earningsCallRag = {
  slug: "earnings-call-rag",
  title: "Earnings Call RAG",
  subtitle: "Financial analysis tool for earnings transcripts using RAG + structured outputs",
  category: "Applied AI & Development",

  repoUrl: "https://github.com/Fahad-sha/Earnings-call-summerizer-RAG",
  liveUrl: "https://<your-live-link>/", // optional

  archImage: "/images/earnings-call-rag-arch.jpg",

  tags: ["RAG", "Finance", "Transcripts", "Embeddings", "Summaries", "Risk"],
  Cover: EarningsRagCover,

  report: {
    context:
      "Earnings Call RAG accelerates investor-style analysis by grounding summaries, claims, and quotes in transcript spans. Outputs are structured and consistent, reducing manual time-to-insight.",

    implementation: [
      "Ingest: parse transcripts, segment by speaker, and preserve section boundaries (prepared remarks vs Q&A).",
      "Index: chunk and embed spans with metadata (company, quarter, speaker, section, timestamp).",
      "Retrieve: top-k semantic retrieval with metadata filters and optional reranking.",
      "Generate: grounded responses with citations that point to exact transcript segments.",
      "Produce a structured report (Guidance, Drivers, Risks, KPIs, Notable Quotes) to support repeatable workflows."
    ],

    methodology: [
      "Schema-first reporting: require a stable JSON-like structure to make outputs usable downstream (dashboards, comparisons).",
      "Citations for every claim: answers must reference the retrieved transcript spans.",
      "Quarter-over-quarter compatibility: consistent metadata allows diffing and trend analysis.",
      "Evaluation plan: citation correctness, topic coverage against a benchmark summary, and extraction accuracy for KPIs."
    ],

    challenges: [
      "Transcripts vary widely in formatting; robust parsing and speaker detection is required.",
      "Avoiding overconfident summaries: enforced citation requirement and section-aware context selection.",
      "Balancing recall vs precision: retrieval tuning so answers stay focused and avoid unrelated spans."
    ],

    outcome: [
      "Investor-ready structured summaries with traceable quotes.",
      "Reusable pipeline pattern for other finance documents (10-K, investor decks).",
      "Clear roadmap for automated benchmarking and quality scoring."
    ]
  }
};
