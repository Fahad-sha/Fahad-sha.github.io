export default function EarningsCallSummarizerCover() {
  return (
    <svg viewBox="0 0 1200 750" className="h-full w-full">
      <defs>
        <linearGradient id="e1" x1="0" x2="1">
          <stop offset="0" stopColor="#0b1220" />
          <stop offset="1" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="e2" x1="0" x2="1">
          <stop offset="0" stopColor="#22c55e" stopOpacity="0.9" />
          <stop offset="1" stopColor="#60a5fa" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      <rect width="1200" height="750" fill="url(#e1)" />
      <circle cx="240" cy="610" r="280" fill="url(#e2)" opacity="0.12" />
      <circle cx="980" cy="140" r="190" fill="url(#e2)" opacity="0.12" />

      <g opacity="0.96">
        <rect x="90" y="230" width="520" height="390" rx="26" fill="#0f172a" stroke="#334155" />
        <text x="130" y="285" fill="#e5e7eb" fontSize="22" fontFamily="ui-sans-serif" fontWeight="700">
          YouTube → Audio → Transcript
        </text>
        <rect x="130" y="315" width="420" height="18" rx="9" fill="#334155" />
        <rect x="130" y="350" width="470" height="18" rx="9" fill="#1f2937" />
        <rect x="130" y="385" width="445" height="18" rx="9" fill="#1f2937" />
        <rect x="130" y="420" width="410" height="18" rx="9" fill="#1f2937" />
        <rect x="130" y="470" width="470" height="95" rx="16" fill="#111827" stroke="#1f2937" />
        <text x="148" y="505" fill="#cbd5e1" fontSize="16" fontFamily="ui-sans-serif">
          Chunk → Embed → FAISS → Answer
        </text>

        <rect x="660" y="260" width="450" height="310" rx="26" fill="#0f172a" stroke="#334155" />
        <text x="700" y="315" fill="#e5e7eb" fontSize="22" fontFamily="ui-sans-serif" fontWeight="700">
          Streamlit UI
        </text>
        <text x="700" y="350" fill="#cbd5e1" fontSize="16" fontFamily="ui-sans-serif">
          Ask questions, get cited answers
        </text>
        <path d="M700 440 C 770 380, 860 520, 950 410" fill="none" stroke="#22c55e" strokeWidth="8" opacity="0.8" />
        <path d="M700 470 C 780 440, 870 520, 980 445" fill="none" stroke="#60a5fa" strokeWidth="6" opacity="0.75" />
      </g>

      <text x="90" y="110" fill="#e5e7eb" fontSize="52" fontFamily="ui-sans-serif" fontWeight="700">
        Earnings Call Summarizer
      </text>
      <text x="90" y="155" fill="#cbd5e1" fontSize="26" fontFamily="ui-sans-serif">
        YouTube → AssemblyAI → FAISS → GPT answers (Streamlit)
      </text>
    </svg>
  );
}
