import GPTFromScratchCover from "../images/GPTFromScratchCover.jsx";

export const gptFromScratch = {
  slug: "gpt-from-scratch",
  title: "GPT from Scratch — Karpathy Reimplementation",
  subtitle:
    "Step-by-step miniature GPT build in PyTorch: tokenization → attention → training → generation",
  category: "Foundational Deep Learning",

  repoUrl: "https://github.com/Fahad-sha/GPT-Shakespeare-Karpathy-inspired-",
  liveUrl: "",

  archImage: "/images/gpt-from-scratch-arch.jpg",

  tags: ["PyTorch", "Transformers", "Attention", "Training Loop", "Text Generation"],
  Cover: GPTFromScratchCover,

  report: {
    context:
      "This project reimplements Andrej Karpathy’s “Let’s Build GPT: from Scratch” end-to-end to remove black boxes. The focus is clarity: every tensor shape, operation, and gradient path is explicit so you can reason about how modern LLMs work.",

    implementation: [
      "Character-level tokenization: map raw text to integer IDs; build datasets of fixed-length sequences.",
      "Baselines: bigram language model as a sanity check before adding transformer blocks.",
      "Transformer stack: embeddings, multi-head self-attention, residual connections, layer norm, MLP/FFN.",
      "Training: manual forward pass, cross-entropy loss, optimizer step, checkpointing, and reproducibility.",
      "Generation: autoregressive sampling loop to generate Shakespearean-style text."
    ],

    methodology: [
      "Incremental complexity: start from a trivial baseline → add attention → add depth → tune training stability.",
      "Inspectability: log loss curves, validate shapes, and test small batches to catch silent bugs early.",
      "Stability defaults: sensible init, gradient clipping, and regular evaluation sampling during training.",
      "Explainability: code comments and notebook-style narrative to make the architecture approachable."
    ],

    challenges: [
      "Getting masking and attention math correct (causal masking, softmax scaling, head splitting/merging).",
      "Training stability at small scale (overfitting, learning rate sensitivity, sampling artifacts).",
      "Balancing pedagogy vs. performance: keep code simple while still producing coherent generations."
    ],

    outcome: [
      "A clean, educational implementation that demonstrates the full GPT training loop from scratch.",
      "Reusable templates for attention blocks and training harnesses for future research experiments.",
      "Improved intuition for how tokenization, attention, and optimization interact in LLMs."
    ]
  }
};
