export default function EarningsRagCover() {
  return (
    <svg viewBox="0 0 1200 750" className="h-full w-full">
      <defs>
        <linearGradient id="er1" x1="0" x2="1">
          <stop offset="0" stopColor="#0b1220" />
          <stop offset="1" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="er2" x1="0" x2="1">
          <stop offset="0" stopColor="#60a5fa" stopOpacity="0.95" />
          <stop offset="1" stopColor="#22c55e" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      <rect width="1200" height="750" fill="url(#er1)" />
      <circle cx="920" cy="610" r="260" fill="url(#er2)" opacity="0.12" />
      <circle cx="220" cy="140" r="180" fill="url(#er2)" opacity="0.12" />

      <rect x="90" y="210" width="520" height="430" rx="26" fill="#0f172a" stroke="#334155" />
      <text x="130" y="265" fill="#e5e7eb" fontSize="22" fontFamily="ui-sans-serif" fontWeight="700">
        Transcript (retrieved spans)
      </text>
      {Array.from({ length: 10 }).map((_, i) => (
        <rect key={i} x="130" y={300 + i * 32} width={420 - (i % 3) * 40} height="14" rx="7" fill={i % 2 ? "#1f2937" : "#334155"} />
      ))}

      <rect x="660" y="260" width="450" height="300" rx="26" fill="#0f172a" stroke="#334155" />
      <text x="700" y="315" fill="#e5e7eb" fontSize="22" fontFamily="ui-sans-serif" fontWeight="700">
        Structured Output
      </text>

      <rect x="700" y="345" width="370" height="40" rx="12" fill="#111827" stroke="#1f2937" />
      <text x="715" y="370" fill="#cbd5e1" fontSize="16" fontFamily="ui-sans-serif">
        Guidance: ↑ (margin expansion)
      </text>

      <rect x="700" y="400" width="370" height="40" rx="12" fill="#111827" stroke="#1f2937" />
      <text x="715" y="425" fill="#cbd5e1" fontSize="16" fontFamily="ui-sans-serif">
        Risks: FX headwinds, churn
      </text>

      <rect x="700" y="455" width="370" height="40" rx="12" fill="#111827" stroke="#1f2937" />
      <text x="715" y="480" fill="#cbd5e1" fontSize="16" fontFamily="ui-sans-serif">
        Quotes (with citations)
      </text>

      <path d="M610 420 C 650 420, 650 420, 660 420" stroke="#60a5fa" strokeWidth="8" opacity="0.7" fill="none" />

      <text x="90" y="110" fill="#e5e7eb" fontSize="52" fontFamily="ui-sans-serif" fontWeight="700">
        Earnings Call RAG
      </text>
      <text x="90" y="155" fill="#cbd5e1" fontSize="26" fontFamily="ui-sans-serif">
        Transcript Retrieval • Grounded Analysis • Structured Finance Outputs
      </text>
    </svg>
  );
}
