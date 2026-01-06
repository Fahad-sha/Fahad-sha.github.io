export default function GPTFromScratchCover() {
  return (
    <svg viewBox="0 0 1200 750" className="h-full w-full">
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0" stopColor="#0b1220" />
          <stop offset="1" stopColor="#111827" />
        </linearGradient>
        <linearGradient id="g2" x1="0" x2="1">
          <stop offset="0" stopColor="#60a5fa" stopOpacity="0.95" />
          <stop offset="1" stopColor="#a78bfa" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      <rect width="1200" height="750" fill="url(#g1)" />
      <circle cx="260" cy="160" r="200" fill="url(#g2)" opacity="0.14" />
      <circle cx="980" cy="620" r="280" fill="url(#g2)" opacity="0.12" />

      <g opacity="0.96">
        <rect x="90" y="210" width="520" height="430" rx="26" fill="#0f172a" stroke="#334155" />
        <text x="130" y="270" fill="#e5e7eb" fontSize="22" fontFamily="ui-sans-serif" fontWeight="700">
          Tokens → Embeddings → Blocks
        </text>

        {Array.from({ length: 12 }).map((_, i) => (
          <rect
            key={i}
            x={130}
            y={300 + i * 30}
            width={430 - (i % 4) * 55}
            height="14"
            rx="7"
            fill={i % 2 ? "#1f2937" : "#334155"}
            opacity="0.95"
          />
        ))}

        <rect x="660" y="260" width="450" height="300" rx="26" fill="#0f172a" stroke="#334155" />
        <text x="700" y="315" fill="#e5e7eb" fontSize="22" fontFamily="ui-sans-serif" fontWeight="700">
          Mini GPT
        </text>
        <text x="700" y="350" fill="#cbd5e1" fontSize="16" fontFamily="ui-sans-serif">
          Multi-Head Self-Attention
        </text>
        <text x="700" y="378" fill="#cbd5e1" fontSize="16" fontFamily="ui-sans-serif">
          LayerNorm • Residual • FFN
        </text>

        <path
          d="M650 420 C 640 420, 630 420, 610 420"
          stroke="#60a5fa"
          strokeWidth="8"
          opacity="0.7"
          fill="none"
        />
      </g>

      <text x="90" y="110" fill="#e5e7eb" fontSize="52" fontFamily="ui-sans-serif" fontWeight="700">
        GPT from Scratch
      </text>
      <text x="90" y="155" fill="#cbd5e1" fontSize="26" fontFamily="ui-sans-serif">
        Karpathy-style reimplementation • PyTorch • No black boxes
      </text>
    </svg>
  );
}
