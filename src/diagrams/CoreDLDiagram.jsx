export default function CoreDLDiagram() {
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

      <text x="40" y="50" className="muted">CORE ARCHITECTURES LAB — IMPLEMENTATION STACK</text>

      <rect x="40" y="90" width="360" height="170" className="box" />
      <text x="70" y="125" className="title">Datasets</text>
      <text x="70" y="152" className="text">Image classification, text tasks</text>
      <text x="70" y="175" className="text">Augmentations + tokenization</text>
      <text x="70" y="198" className="text">Reproducible splits</text>

      <rect x="440" y="90" width="350" height="170" className="box" />
      <text x="470" y="125" className="title">Models</text>
      <text x="470" y="152" className="text">Transformer from scratch</text>
      <text x="470" y="175" className="text">CNN baselines (ResNet-style)</text>
      <text x="470" y="198" className="text">Config-driven variants</text>

      <rect x="830" y="90" width="330" height="170" className="box" />
      <text x="860" y="125" className="title">Training Loop</text>
      <text x="860" y="152" className="text">Checkpoints + logging</text>
      <text x="860" y="175" className="text">AMP / gradient clipping</text>
      <text x="860" y="198" className="text">Profiling hooks</text>

      <rect x="40" y="320" width="560" height="200" className="box" />
      <text x="70" y="355" className="title">Evaluation</text>
      <text x="70" y="382" className="text">Accuracy, F1, ROC-AUC</text>
      <text x="70" y="405" className="text">Confusion matrix + slices</text>
      <text x="70" y="428" className="text">Calibration + error analysis</text>

      <rect x="640" y="320" width="520" height="200" className="box" />
      <text x="670" y="355" className="title">Artifacts</text>
      <text x="670" y="382" className="text">Model cards + experiment reports</text>
      <text x="670" y="405" className="text">Readable notebooks / docs</text>
      <text x="670" y="428" className="text">Interview-ready explanations</text>

      <rect x="40" y="550" width="1120" height="70" className="box" />
      <text x="70" y="592" className="text">
        Outcome: clean repo demonstrating fundamentals + scalable engineering patterns for future research.
      </text>

      <path className="arrow" d="M400 175 L440 175" />
      <path className="arrow" d="M790 175 L830 175" />
      <path className="arrow" d="M600 260 L380 320" />
      <path className="arrow" d="M995 260 L900 320" />
      <path className="arrow" d="M300 520 L300 550" />
      <path className="arrow" d="M900 520 L900 550" />
    </svg>
  );
}
