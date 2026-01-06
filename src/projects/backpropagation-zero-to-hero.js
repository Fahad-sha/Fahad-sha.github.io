import BackpropCover from "../images/BackpropCover.jsx";

export const backpropZeroToHero = {
  slug: "backpropagation-zero-to-hero",
  title: "Backpropagation (Inspired by Karpathy — Zero to Hero)",
  subtitle:
    "From-scratch gradients via computational graphs: forward pass, chain rule, and parameter updates",
  category: "Foundational Deep Learning",

  repoUrl: "https://github.com/Fahad-sha/Backpropagation-From-Scratch-based-on-andrej-karapathy",
  liveUrl: "",

  archImage: "/images/backpropagation-arch.jpg",

  tags: ["Backpropagation", "Computational Graphs", "Micrograd-style", "Autograd", "SGD"],
  Cover: BackpropCover,

  report: {
    context:
      "Backpropagation is the core algorithm behind neural network training. This project follows the “build it yourself” approach: represent computation as a graph, run a forward pass to compute loss, then walk backward to compute gradients using the chain rule.",

    implementation: [
      "Graph representation: each node stores a value, operation, parents, and local gradient function.",
      "Forward pass: compute outputs layer by layer; accumulate loss against targets.",
      "Backward pass: topologically traverse the graph in reverse and apply the chain rule at each node.",
      "Parameter updates: apply SGD (or Adam) updates using computed gradients and a learning rate.",
      "Validation: numerical gradient checks on small graphs to confirm correctness."
    ],

    methodology: [
      "Start tiny: scalar ops (add/mul/tanh) → build MLP layers → train on small toy datasets.",
      "Graph-first intuition: show how complex networks reduce to repeated local gradient rules.",
      "Diagnostics: monitor gradient magnitudes, check for vanishing/exploding gradients, and verify learning.",
      "Educational clarity: emphasize the “one-line intuition” (systematic chain rule across the graph)."
    ],

    challenges: [
      "Correctly implementing topological sorting and ensuring each node’s gradient accumulates properly.",
      "Debugging subtle sign/scale issues that silently break learning.",
      "Extending from scalar graphs to tensors without losing conceptual simplicity."
    ],

    outcome: [
      "A backprop engine that makes gradient flow tangible and debuggable.",
      "A strong mental model for how autograd frameworks work under the hood.",
      "A reusable foundation for understanding and implementing training algorithms."
    ]
  }
};
