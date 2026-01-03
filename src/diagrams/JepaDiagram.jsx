export default function JepaDiagram() {
  return (
    <svg viewBox="0 0 1200 640" className="min-w-[900px]">
      <defs>
        <style>{`
          .box { fill: #ffffff; stroke: #d4d4d8; stroke-width: 2; rx: 18; }
          .title { font: 700 16px ui-sans-serif; fill: #111827; }
          .text { font: 500 13px ui-sans-serif; fill: #374151; }
          .muted { font: 600 12px ui-sans-serif; fill: #6b7280; letter-spacing: 0.08em; }
          .arrow { stroke: #111827; stroke-width: 2.5; fill: none; marker-end: url(#arrow); opacity: 0.75; }
        `}</style>
        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#111827" opacity="0.75" />
        </marker>
      </defs>

      <text x="40" y="50" className="muted">JEPA + TRANSFORMER IMPROVEMENTS — RESEARCH FLOW</text>

      <rect x="40" y="90" width="380" height="170" className="box" />
      <text x="70" y="125" className="title">Dataset + Augmentations</text>
      <text x="70" y="152" className="text">Vision / multimodal variants</text>
      <text x="70" y="175" className="text">Masking strategies + schedules</text>
      <text x="70" y="198" className="text">Train/val/test splits</text>

      <rect x="460" y="90" width="330" height="170" className="box" />
      <text x="490" y="125" className="title">Context Encoder (JEPA)</text>
      <text x="490" y="152" className="text">Backbone: ViT / ConvNeXt</text>
      <text x="490" y="175" className="text">EMA target optional</text>
      <text x="490" y="198" className="text">Latent representations</text>

      <rect x="830" y="90" width="330" height="170" className="box" />
      <text x="860" y="125" className="title">Predictor (Transformer)</text>
      <text x="860" y="152" className="text">Predict masked region embeddings</text>
      <text x="860" y="175" className="text">Multi-scale heads (short/long)</text>
      <text x="860" y="198" className="text">Stability tricks (norm, EMA)</text>

      <rect x="40" y="320" width="560" height="200" className="box" />
      <text x="70" y="355" className="title">Efficiency Improvements</text>
      <text x="70" y="382" className="text">Selective attention patterns</text>
      <text x="70" y="405" className="text">Token pruning + distillation</text>
      <text x="70" y="428" className="text">Compute-cost vs accuracy curves</text>

      <rect x="640" y="320" width="520" height="200" className="box" />
      <text x="670" y="355" className="title">Evaluation</text>
      <text x="670" y="382" className="text">Linear probing + few-shot transfer</text>
      <text x="670" y="405" className="text">Robustness (corruptions, shifts)</text>
      <text x="670" y="428" className="text">Ablations: ratio, depth, sparsity</text>

      <rect x="40" y="550" width="1120" height="70" className="box" />
      <text x="70" y="592" className="text">
        Deliverable: reproducible repo (configs + tables) → paper-ready results + poster generation.
      </text>

      <path className="arrow" d="M420 175 L460 175" />
      <path className="arrow" d="M790 175 L830 175" />
      <path className="arrow" d="M625 260 L380 320" />
      <path className="arrow" d="M960 260 L900 320" />
      <path className="arrow" d="M300 520 L300 550" />
      <path className="arrow" d="M900 520 L900 550" />
    </svg>
  );
}
