export default function AVJepaMiniCover() {
  return (
    <svg viewBox="0 0 1200 750" className="h-full w-full">
      <defs>
        <linearGradient id="av1" x1="0" x2="1">
          <stop offset="0" stopColor="#0b1220" />
          <stop offset="1" stopColor="#111827" />
        </linearGradient>
        <linearGradient id="av2" x1="0" x2="1">
          <stop offset="0" stopColor="#60a5fa" stopOpacity="0.95" />
          <stop offset="1" stopColor="#a78bfa" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      <rect width="1200" height="750" fill="url(#av1)" />
      <circle cx="250" cy="590" r="280" fill="url(#av2)" opacity="0.12" />
      <circle cx="1040" cy="170" r="220" fill="url(#av2)" opacity="0.12" />

      {/* video tile */}
      <rect x="95" y="220" width="520" height="340" rx="28" fill="#0f172a" stroke="#334155" />
      <text x="140" y="280" fill="#e5e7eb" fontSize="22" fontFamily="ui-sans-serif" fontWeight="700">
        Video (1–4 frames)
      </text>
      <rect x="140" y="315" width="430" height="210" rx="18" fill="#0b1220" stroke="#1f2937" />
      <path d="M325 380 L 325 458 L 410 419 Z" fill="#60a5fa" opacity="0.85" />

      {/* audio tile */}
      <rect x="650" y="220" width="455" height="340" rx="28" fill="#0f172a" stroke="#334155" />
      <text x="695" y="280" fill="#e5e7eb" fontSize="22" fontFamily="ui-sans-serif" fontWeight="700">
        Audio (2–3s log-mel)
      </text>
      <rect x="695" y="315" width="365" height="210" rx="18" fill="#0b1220" stroke="#1f2937" />
      {Array.from({ length: 14 }).map((_, i) => (
        <rect
          key={i}
          x={705 + i * 25}
          y={340 + (i % 3) * 10}
          width="12"
          height={160 - (i % 4) * 22}
          rx="6"
          fill={i % 2 === 0 ? "#a78bfa" : "#60a5fa"}
          opacity="0.7"
        />
      ))}

      {/* cross-modal arrows */}
      <path d="M615 395 C 635 395, 635 395, 650 395" stroke="#a78bfa" strokeWidth="10" opacity="0.65" fill="none" />
      <path d="M650 455 C 635 455, 635 455, 615 455" stroke="#60a5fa" strokeWidth="10" opacity="0.6" fill="none" />

      <text x="90" y="110" fill="#e5e7eb" fontSize="52" fontFamily="ui-sans-serif" fontWeight="700">
        Audio-Visual JEPA-mini
      </text>
      <text x="90" y="155" fill="#cbd5e1" fontSize="26" fontFamily="ui-sans-serif">
        Colab-friendly cross-modal predictive embeddings (no negatives)
      </text>
    </svg>
  );
}
