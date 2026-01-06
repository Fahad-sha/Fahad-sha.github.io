import DashPilotCover from "../images/DashPilotCover.jsx";

export const dashpilot = {
  slug: "dashpilot-ai-agent",
  title: "DashPilot AI Agent",
  subtitle: "React + Vite local CSV dashboard + Supabase + Gemini agentic analyst",
  category: "Applied AI & Development",

  // Update these anytime
  repoUrl: "https://github.com/Fahad-sha/DashPilot-AI-Agent-Citibike-SupaBase-Gemini-",
  liveUrl: "https://dashing-agent.github.io/", // optional

  // Replace this file later with a real JPEG
  archImage: "/images/dashpilot-arch.jpg",

  tags: ["React", "Vite", "Supabase", "Gemini", "Local CSV", "Widgets"],
  Cover: DashPilotCover,

  report: {
    context:
      "DashPilot is a fast, local-first analytics UI designed for exploratory analysis on CSV exports. It emphasizes deterministic aggregates + tool-constrained GenAI so users get helpful explanations without losing trust.",

    implementation: [
      "Client ingestion: fetch CSV → parse/clean → compute aggregates and derived metrics in-browser.",
      "Widget system: chart/table primitives with preview and pin-to-dashboard state.",
      "AI Analyst: constrained to approved tools (read aggregates, propose widgets, explain trends).",
      "Optional persistence: Supabase tables for saved sessions and pinned widget layouts."
    ],

    methodology: [
      "Separation of concerns: analytics layer is deterministic; AI layer only consumes approved aggregates.",
      "Extensibility: widget catalog is data-driven; adding a new visualization does not require refactoring the AI agent.",
      "Guardrails: agent outputs are grounded to available aggregates; no free-form claims without supporting data.",
      "Performance: lightweight charts and memoized aggregates; suitable for common export sizes."
    ],

    challenges: [
      "Handling messy CSVs (missing timestamps, bad durations, mixed formats) while keeping the UI responsive.",
      "Avoiding AI hallucinations: enforced tool-calls + restricted context, and clear UI separation between facts and suggestions.",
      "Keeping page-load fast on GitHub Pages: minimal dependencies and precomputed UI defaults."
    ],

    outcome: [
      "A single-command local dashboard that produces repeatable insights from CSV exports.",
      "AI Analyst that recommends/pins widgets and drafts narrative summaries grounded in aggregates.",
      "An optional path to persistence/collaboration using Supabase."
    ]
  }
};
