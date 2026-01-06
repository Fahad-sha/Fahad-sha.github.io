export default function JepaCover() {
  return (
    <svg viewBox="0 0 1200 750" className="h-full w-full">
      <defs>
        <linearGradient id="j1" x1="0" x2="1">
          <stop offset="0" stopColor="#0b1220" />
          <stop offset="1" stopColor="#111827" />
        </linearGradient>
        <linearGradient id="j2" x1="0" x2="1">
          <stop offset="0" stopColor="#a78bfa" stopOpacity="0.95" />
          <stop offset="1" stopColor="#60a5fa" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      <rect width="1200" height="750" fill="url(#j1)" />
      <circle cx="250" cy="600" r="280" fill="url(#j2)" opacity="0.12" />
      <circle cx="1040" cy="170" r="200" fill="url(#j2)" opacity="0.12" />

      <rect x="110" y="240" width="420" height="280" rx="26" fill="#0f172a" stroke="#334155" />
      <text x="150" y="300" fill="#e5e7eb" fontSize="20" fontFamily="ui-sans-serif" fontWeight="700">
        Context Encoder
      </text>

      <rect x="670" y="240" width="420" height="280" rx="26" fill="#0f172a" stroke="#334155" />
      <text x="710" y="300" fill="#e5e7eb" fontSize="20" fontFamily="ui-sans-serif" fontWeight="700">
        Predictor / Transformer
      </text>

      <path d="M530 380 C 600 380, 600 380, 670 380" stroke="#a78bfa" strokeWidth="10" opacity="0.65" fill="none" />

      <text x="90" y="110" fill="#e5e7eb" fontSize="52" fontFamily="ui-sans-serif" fontWeight="700">
        JEPA & Transformer Research
      </text>
      <text x="90" y="155" fill="#cbd5e1" fontSize="26" fontFamily="ui-sans-serif">
        Predictive representation learning • Efficiency • Robustness
      </text>
    </svg>
  );
}
