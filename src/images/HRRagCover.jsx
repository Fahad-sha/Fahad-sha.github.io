export default function HRRagCover() {
  return (
    <svg viewBox="0 0 1200 750" className="h-full w-full">
      <defs>
        <linearGradient id="hr1" x1="0" x2="1">
          <stop offset="0" stopColor="#0b1220" />
          <stop offset="1" stopColor="#111827" />
        </linearGradient>
        <linearGradient id="hr2" x1="0" x2="1">
          <stop offset="0" stopColor="#f59e0b" stopOpacity="0.95" />
          <stop offset="1" stopColor="#22c55e" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      <rect width="1200" height="750" fill="url(#hr1)" />
      <circle cx="250" cy="620" r="260" fill="url(#hr2)" opacity="0.14" />
      <circle cx="1020" cy="140" r="180" fill="url(#hr2)" opacity="0.12" />

      <g>
        <rect x="110" y="220" width="360" height="380" rx="26" fill="#0f172a" stroke="#334155" />
        <rect x="150" y="270" width="280" height="16" rx="8" fill="#334155" />
        <rect x="150" y="310" width="250" height="16" rx="8" fill="#1f2937" />
        <rect x="150" y="350" width="280" height="16" rx="8" fill="#1f2937" />
        <rect x="150" y="390" width="230" height="16" rx="8" fill="#1f2937" />
        <rect x="150" y="430" width="270" height="16" rx="8" fill="#1f2937" />
        <rect x="150" y="470" width="210" height="16" rx="8" fill="#1f2937" />
      </g>

      <g opacity="0.95">
        <rect x="600" y="220" width="500" height="380" rx="26" fill="#0f172a" stroke="#334155" opacity="0.95" />
        <path d="M640 330 L 980 330" stroke="#f59e0b" strokeWidth="6" opacity="0.7" />
        <path d="M640 420 L 1020 420" stroke="#22c55e" strokeWidth="6" opacity="0.6" />
        <path d="M640 510 L 940 510" stroke="#3b82f6" strokeWidth="6" opacity="0.6" />
        <rect x="640" y="560" width="420" height="24" rx="12" fill="#111827" stroke="#1f2937" />
        <text x="650" y="578" fill="#cbd5e1" fontSize="16" fontFamily="ui-sans-serif">
          Answer with citations → [Policy.pdf §2.3], [SOP.docx §4.1]
        </text>
      </g>

      <text x="90" y="110" fill="#e5e7eb" fontSize="52" fontFamily="ui-sans-serif" fontWeight="700">
        HR Knowledge RAG
      </text>
      <text x="90" y="155" fill="#cbd5e1" fontSize="26" fontFamily="ui-sans-serif">
        S3 • Bedrock • OpenSearch • Grounded QA with Citations
      </text>
    </svg>
  );
}
