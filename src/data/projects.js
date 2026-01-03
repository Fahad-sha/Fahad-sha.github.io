import { dashpilot } from "../projects/dashpilot-ai-agent.js";
import { hrKnowledgeRag } from "../projects/hr-knowledge-rag.js";
import { earningsCallRag } from "../projects/earnings-call-rag.js";
import { earningsCallSummarizer } from "../projects/earnings-call-summarizer.js";
import { avJepaMini } from "../projects/av-jepa-mini.js";
import { coreArchitecturesLab } from "../projects/core-architectures-lab.js";
import { gptFromScratch } from "../projects/gpt-from-scratch.js";
import { backpropZeroToHero } from "../projects/backpropagation-zero-to-hero.js";

export const projects = [
  dashpilot,
  hrKnowledgeRag,
  earningsCallRag,
  earningsCallSummarizer,
  avJepaMini,
  coreArchitecturesLab,
  gptFromScratch,
  backpropZeroToHero
];

export const projectGroups = [
  {
    title: "Applied AI & Development",
    description:
      "Production-oriented ML/GenAI systems: dashboards, RAG pipelines, and developer tooling with evaluation-first engineering.",
    slugs: ["dashpilot-ai-agent", "hr-knowledge-rag", "earnings-call-rag", "earnings-call-summarizer"]
  },
  {
    title: "Advanced Research",
    description:
      "Audio–visual self-supervised learning (JEPA-style) with a Colab-friendly training/evaluation plan.",
    slugs: ["av-jepa-mini"]
  },
  {
    title: "Foundational Deep Learning",
    description:
      "From-scratch fundamentals: Transformers/GPT, backpropagation via computational graphs, and core training pipelines.",
    slugs: ["core-architectures-lab", "gpt-from-scratch", "backpropagation-zero-to-hero"]
  }
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
