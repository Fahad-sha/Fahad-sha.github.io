export default function CoreDLTripleCover() {
  return (
    <svg viewBox="0 0 1200 750" className="h-full w-full">
      <defs>
        <linearGradient id="c1" x1="0" x2="1">
          <stop offset="0" stopColor="#0b1220" />
          <stop offset="1" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="c2" x1="0" x2="1">
          <stop offset="0" stopColor="#22c55e" stopOpacity="0.9" />
          <stop offset="1" stopColor="#60a5fa" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      <rect width="1200" height="750" fill="url(#c1)" />
      <circle cx="260" cy="160" r="180" fill="url(#c2)" opacity="0.12" />
      <circle cx="980" cy="640" r="260" fill="url(#c2)" opacity="0.12" />

      <rect x="90" y="240" width="330" height="360" rx="26" fill="#0f172a" stroke="#334155" />
      <text x="130" y="300" fill="#e5e7eb" fontSize="20" fontFamily="ui-sans-serif" fontWeight="700">Transformer</text>

      <rect x="435" y="240" width="330" height="360" rx="26" fill="#0f172a" stroke="#334155" />
      <text x="475" y="300" fill="#e5e7eb" fontSize="20" fontFamily="ui-sans-serif" fontWeight="700">CNN</text>

      <rect x="780" y="240" width="330" height="360" rx="26" fill="#0f172a" stroke="#334155" />
      <text x="820" y="300" fill="#e5e7eb" fontSize="20" fontFamily="ui-sans-serif" fontWeight="700">Training Loop</text>

      <text x="90" y="110" fill="#e5e7eb" fontSize="52" fontFamily="ui-sans-serif" fontWeight="700">
        Core Architectures Lab
      </text>
      <text x="90" y="155" fill="#cbd5e1" fontSize="26" fontFamily="ui-sans-serif">
        Transformers • CNNs • Training pipelines • Evaluation
      </text>
    </svg>
  );
}
