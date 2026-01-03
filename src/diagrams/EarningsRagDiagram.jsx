export default function EarningsRagDiagram() {
  return (
    <svg viewBox="0 0 1200 610" className="min-w-[900px]">
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

      <text x="40" y="50" className="muted">EARNINGS CALL RAG — GROUNDED FINANCIAL ANALYSIS</text>

      <rect x="40" y="90" width="360" height="170" className="box" />
      <text x="70" y="125" className="title">Ingest</text>
      <text x="70" y="152" className="text">Transcripts: parsing & segmentation</text>
      <text x="70" y="175" className="text">Speaker + section metadata</text>
      <text x="70" y="198" className="text">Quarter/company identifiers</text>

      <rect x="440" y="90" width="350" height="170" className="box" />
      <text x="470" y="125" className="title">Embed + Index</text>
      <text x="470" y="152" className="text">Chunk embeddings + metadata</text>
      <text x="470" y="175" className="text">Vector store / index</text>
      <text x="470" y="198" className="text">Rerank optional</text>

      <rect x="830" y="90" width="330" height="170" className="box" />
      <text x="860" y="125" className="title">Query Orchestrator</text>
      <text x="860" y="152" className="text">Analyst prompt → retrieve spans</text>
      <text x="860" y="175" className="text">Assemble context window</text>
      <text x="860" y="198" className="text">Schema-guided generation</text>

      <rect x="40" y="320" width="560" height="200" className="box" />
      <text x="70" y="355" className="title">Grounded Generation</text>
      <text x="70" y="382" className="text">LLM outputs claims with citations to transcript spans</text>
      <text x="70" y="405" className="text">Constrained JSON schema for consistency</text>
      <text x="70" y="428" className="text">Sections: Guidance, Drivers, Risks, KPIs, Quotes</text>

      <rect x="640" y="320" width="520" height="200" className="box" />
      <text x="670" y="355" className="title">Evaluation Plan</text>
      <text x="670" y="382" className="text">Citation correctness spot-checks</text>
      <text x="670" y="405" className="text">Topic coverage vs benchmark summaries</text>
      <text x="670" y="428" className="text">Quarterly diffing: change detection</text>

      <path className="arrow" d="M400 175 L440 175" />
      <path className="arrow" d="M790 175 L830 175" />
      <path className="arrow" d="M995 260 L900 320" />
      <path className="arrow" d="M650 260 L330 320" />
    </svg>
  );
}
