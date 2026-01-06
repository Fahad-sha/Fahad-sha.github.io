import CoreDLTripleCover from "../images/CoreDLTripleCover.jsx";

export const coreArchitecturesLab = {
  slug: "core-architectures-lab",
  title: "Core Architectures Lab",
  subtitle: "Foundational deep learning implementations: Transformers, CNNs, training pipelines",
  category: "Foundational Deep Learning",

  repoUrl: "https://github.com/<your-username>/core-architectures-lab",
  liveUrl: "https://<your-live-link>/", // optional

  archImage: "/images/core-architectures-lab-arch.jpg",

  tags: ["Transformers", "CNNs", "Training", "PyTorch", "Evaluation"],
  Cover: CoreDLTripleCover,

  report: {
    context:
      "A foundational repo that re-implements core architectures with strong engineering defaults: reproducible training loops, metrics, and evaluation patterns that mirror production standards.",

    implementation: [
      "Transformer from scratch: attention, positional encodings, residual blocks, masking, and FFN.",
      "CNN baselines: ResNet-style backbones with augmentation and regularization strategies.",
      "Training pipeline: configs, seeding, checkpointing, metrics logging, and experiment tracking.",
      "Evaluation suite: confusion matrix, calibration checks, error slices, and ablation reporting."
    ],

    methodology: [
      "Build-for-understanding: implement each component explicitly rather than relying solely on high-level wrappers.",
      "Reproducibility: fixed seeds, deterministic options, and run artifacts for comparisons.",
      "Evaluation-first: error analysis and calibration to avoid misleading accuracy-only results.",
      "Maintainability: modular code structure for fast iteration."
    ],

    challenges: [
      "Stability and performance: balancing clarity with training efficiency (e.g., mixed precision, profiling).",
      "Correctness: validating from-scratch Transformer against reference implementations.",
      "Generalization: designing a structure that supports multiple tasks and datasets."
    ],

    outcome: [
      "A clean foundation that demonstrates deep understanding and strong ML engineering habits.",
      "Reusable templates for new projects and interview-ready explanations.",
      "A baseline suite that supports fair comparisons across models and datasets."
    ]
  }
};
