export default function HRRagDiagram() {
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

      <text x="40" y="50" className="muted">HR KNOWLEDGE RAG — AWS</text>

      <rect x="40" y="90" width="320" height="160" className="box" />
      <text x="70" y="125" className="title">Document Store</text>
      <text x="70" y="152" className="text">S3: PDFs, SOPs, policies</text>
      <text x="70" y="175" className="text">Versioning, metadata tags</text>
      <text x="70" y="198" className="text">Ingestion triggers</text>

      <rect x="410" y="90" width="360" height="160" className="box" />
      <text x="440" y="125" className="title">Ingestion + Chunking</text>
      <text x="440" y="152" className="text">Normalize → section-aware chunks</text>
      <text x="440" y="175" className="text">Doc/section IDs + timestamps</text>
      <text x="440" y="198" className="text">Store text + metadata</text>

      <rect x="820" y="90" width="340" height="160" className="box" />
      <text x="850" y="125" className="title">Embeddings</text>
      <text x="850" y="152" className="text">Bedrock embeddings model</text>
      <text x="850" y="175" className="text">Vectors + metadata</text>
      <text x="850" y="198" className="text">Batch + incremental updates</text>

      <rect x="40" y="300" width="520" height="160" className="box" />
      <text x="70" y="335" className="title">Vector Index</text>
      <text x="70" y="362" className="text">OpenSearch vector index</text>
      <text x="70" y="385" className="text">Filters: region, dept, effective_date</text>
      <text x="70" y="408" className="text">Top-k retrieval + rerank</text>

      <rect x="600" y="300" width="560" height="160" className="box" />
      <text x="630" y="335" className="title">Grounded QA</text>
      <text x="630" y="362" className="text">Bedrock LLM answer with citations</text>
      <text x="630" y="385" className="text">Strict format: claims must cite chunks</text>
      <text x="630" y="408" className="text">Refuse if no supporting sources</text>

      <rect x="40" y="500" width="1120" height="110" className="box" />
      <text x="70" y="535" className="title">Metrics + Observability (placeholder)</text>
      <text x="70" y="562" className="text">Latency p50/p95 • adoption • citation coverage • retrieval hit-rate • spot-check precision</text>

      <path className="arrow" d="M360 170 L410 170" />
      <path className="arrow" d="M770 170 L820 170" />
      <path className="arrow" d="M590 250 L360 300" />
      <path className="arrow" d="M990 250 L990 300" />
      <path className="arrow" d="M300 460 L300 500" />
      <path className="arrow" d="M900 460 L900 500" />
    </svg>
  );
}
