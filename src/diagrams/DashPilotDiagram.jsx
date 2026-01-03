export default function DashPilotDiagram() {
  return (
    <svg viewBox="0 0 1200 560" className="min-w-[900px]">
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

      <text x="40" y="50" className="muted">DASHPILOT — LOCAL FIRST + OPTIONAL CLOUD</text>

      <rect x="40" y="90" width="260" height="150" className="box" />
      <text x="70" y="125" className="title">Browser UI</text>
      <text x="70" y="152" className="text">React + Vite dashboard</text>
      <text x="70" y="175" className="text">Charts, tables, widgets</text>
      <text x="70" y="198" className="text">AI Analyst panel</text>

      <rect x="340" y="90" width="300" height="150" className="box" />
      <text x="370" y="125" className="title">Local CSV Engine</text>
      <text x="370" y="152" className="text">fetch → parse → clean</text>
      <text x="370" y="175" className="text">Aggregates + derived KPIs</text>
      <text x="370" y="198" className="text">Widget catalog + previews</text>

      <rect x="690" y="90" width="470" height="150" className="box" />
      <text x="720" y="125" className="title">Gemini AI Analyst (Tool-constrained)</text>
      <text x="720" y="152" className="text">Reads only approved aggregates/queries</text>
      <text x="720" y="175" className="text">Suggests widgets, explains trends</text>
      <text x="720" y="198" className="text">Pins widgets + drafts insights</text>

      <rect x="40" y="300" width="520" height="190" className="box" />
      <text x="70" y="335" className="title">Optional: Supabase</text>
      <text x="70" y="362" className="text">sessions, pinned_widgets, notes</text>
      <text x="70" y="385" className="text">share links, basic auth, RBAC</text>
      <text x="70" y="408" className="text">analytics & telemetry hooks</text>

      <rect x="600" y="300" width="560" height="190" className="box" />
      <text x="630" y="335" className="title">Governance + Evaluation</text>
      <text x="630" y="362" className="text">Prompt templates & guardrails</text>
      <text x="630" y="385" className="text">Hallucination checks via aggregate-only tools</text>
      <text x="630" y="408" className="text">A/B test widget suggestions + feedback</text>

      <path className="arrow" d="M300 165 L340 165" />
      <path className="arrow" d="M640 165 L690 165" />
      <path className="arrow" d="M190 240 L190 300" />
      <path className="arrow" d="M490 240 L490 300" />
      <path className="arrow" d="M800 240 L800 300" />
    </svg>
  );
}
