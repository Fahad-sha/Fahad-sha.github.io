export default function DashPilotCover() {
  return (
    <svg viewBox="0 0 1200 750" className="h-full w-full">
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0" stopColor="#0f172a" />
          <stop offset="1" stopColor="#1f2937" />
        </linearGradient>
        <linearGradient id="g2" x1="0" x2="1">
          <stop offset="0" stopColor="#22c55e" stopOpacity="0.9" />
          <stop offset="1" stopColor="#3b82f6" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      <rect width="1200" height="750" fill="url(#g1)" />
      <circle cx="200" cy="120" r="160" fill="url(#g2)" opacity="0.18" />
      <circle cx="980" cy="650" r="240" fill="url(#g2)" opacity="0.12" />

      <g opacity="0.9">
        <rect x="90" y="170" width="520" height="320" rx="26" fill="#0b1220" stroke="#334155" />
        <rect x="120" y="210" width="220" height="18" rx="9" fill="#334155" />
        <rect x="120" y="250" width="450" height="18" rx="9" fill="#1f2937" />
        <rect x="120" y="290" width="410" height="18" rx="9" fill="#1f2937" />
        <rect x="120" y="330" width="360" height="18" rx="9" fill="#1f2937" />
        <rect x="120" y="380" width="450" height="80" rx="14" fill="#111827" stroke="#1f2937" />

        <rect x="650" y="240" width="460" height="260" rx="26" fill="#0b1220" stroke="#334155" />
        <path d="M700 440 C 760 330, 850 520, 910 410 C 970 300, 1040 520, 1090 380" fill="none" stroke="#22c55e" strokeWidth="8" opacity="0.9"/>
        <path d="M700 470 C 770 430, 860 520, 930 460 C 1000 400, 1050 510, 1090 430" fill="none" stroke="#3b82f6" strokeWidth="6" opacity="0.8"/>
      </g>

      <g>
        <text x="90" y="110" fill="#e5e7eb" fontSize="52" fontFamily="ui-sans-serif" fontWeight="700">
          DashPilot AI Agent
        </text>
        <text x="90" y="155" fill="#cbd5e1" fontSize="26" fontFamily="ui-sans-serif">
          Local CSV Dashboard • Supabase • Gemini Analyst • Pin-able Widgets
        </text>
      </g>
    </svg>
  );
}
