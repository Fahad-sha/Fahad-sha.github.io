import AVJepaMiniCover from "../images/AVJepaMiniCover.jsx";

export const avJepaMini = {
  slug: "av-jepa-mini",
  title: "Audio-Visual JEPA-mini (Colab Free Tier)",
  subtitle:
    "Learn joint audio–visual representations by predicting one modality’s embedding from the other (JEPA-style, no negatives)",
  category: "Advanced Research",

  repoUrl: "https://github.com/Fahad-sha/Audio-Visual-JEPA-mini-",
  liveUrl: "https://<your-live-link>/", // optional

  // Replace this JPEG later with your exported architecture diagram
  archImage: "/images/av-jepa-mini-arch.jpg",

  tags: [
    "Audio-Visual",
    "JEPA",
    "BYOL/EMA Targets",
    "VGGSound (subset)",
    "Retrieval R@K",
    "Colab"
  ],
  Cover: AVJepaMiniCover,

  report: {
    context:
      "Goal: train a tiny, stable cross-modal predictive model that learns aligned audio and video embeddings without contrastive negatives, then demonstrate transfer on audio↔video retrieval (Recall@K). Optional extensions include linear-probe classification and robustness to missing modality.",

    implementation: [
      "Dataset: VGGSound subset (10–20 classes, ~2k–10k clips) with a simple manifest (clip id, label, audio path, frame path).",
      "Inputs: video uses 1 frame (or 4-frame sample) at 160×160; audio uses a 2–3s log-mel spectrogram (64 mels × ~200 steps).",
      "Encoders (tiny): ResNet18 (vision) + small CNN over mel-spectrogram (audio).",
      "Projectors: MLPs mapping encoder outputs to 256-d embeddings (z_v, z_a).",
      "Predictors (JEPA): two heads predict the other modality’s target embedding: p_v→a(z_v) and p_a→v(z_a).",
      "Stability: EMA target networks (BYOL-style) for both encoders + projectors; stop-gradient on target outputs.",
      "Colab practicality: checkpoint to Drive, train in chunks, and keep I/O light (1 frame + 2s audio initially)."
    ],

    methodology: [
      "Loss: symmetric cosine-regression with no negatives: L = (2−2cos(p_v→a, sg(z_a^t)) + 2−2cos(p_a→v, sg(z_v^t)))/2.",
      "Optimizer: AdamW (lr=1e-3) with batch size 64 (fallback 32) and 256-d embeddings.",
      "EMA schedule: momentum 0.99 ramping toward 0.999 for stable targets.",
      "Training budget: 20k–60k steps (run across multiple Colab sessions with checkpoint resume).",
      "Evaluation A (primary): audio↔video retrieval on held-out set; report Recall@1/5/10 in both directions.",
      "Evaluation B (optional): linear probe on frozen embeddings (z_v, z_a) for class labels.",
      "Ablations (paper-like): EMA vs no-EMA; one-way vs symmetric loss; 1 frame vs 4 frames; embedding dim 128 vs 256."
    ],

    challenges: [
      "Data wrangling: curating a small, clean subset and keeping downloads/storage Colab-friendly.",
      "I/O + compute limits: minimizing decoding overhead (few frames, short audio) and checkpointing reliably.",
      "Training stability: preventing representation collapse (EMA targets + predictors + sensible augmentations).",
      "Evaluation correctness: careful split management and leakage avoidance when building retrieval benchmarks."
    ],

    outcome: [
      "A reproducible Colab-ready AV-JEPA baseline that learns aligned audio/video embeddings without negatives.",
      "Demonstrated cross-modal retrieval lift above random baselines (R@K) with clear ablations.",
      "A clean notebook/repo structure (setup, data prep, train, retrieval eval) suitable for portfolio + research iteration."
    ]
  }
};
