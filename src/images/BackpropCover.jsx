export default function BackpropCover() {
  return (
    <svg viewBox="0 0 1200 750" className="h-full w-full">
      <defs>
        <linearGradient id="b1" x1="0" x2="1">
          <stop offset="0" stopColor="#0b1220" />
          <stop offset="1" stopColor="#111827" />
        </linearGradient>
        <linearGradient id="b2" x1="0" x2="1">
          <stop offset="0" stopColor="#f59e0b" stopOpacity="0.95" />
          <stop offset="1" stopColor="#ef4444" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      <rect width="1200" height="750" fill="url(#b1)" />
      <circle cx="240" cy="160" r="210" fill="url(#b2)" opacity="0.12" />
      <circle cx="980" cy="640" r="280" fill="url(#b2)" opacity="0.10" />

      <g opacity="0.96">
        <rect x="120" y="240" width="420" height="340" rx="26" fill="#0f172a" stroke="#334155" />
        <text x="160" y="300" fill="#e5e7eb" fontSize="22" fontFamily="ui-sans-serif" fontWeight="700">
          Computational Graph
        </text>
        <circle cx="200" cy="380" r="18" fill="#334155" />
        <circle cx="320" cy="340" r="18" fill="#334155" />
        <circle cx="320" cy="430" r="18" fill="#334155" />
        <circle cx="440" cy="385" r="18" fill="#334155" />
        <path d="M218 380 L 302 348" stroke="#f59e0b" strokeWidth="5" opacity="0.8" />
        <path d="M218 380 L 302 422" stroke="#f59e0b" strokeWidth="5" opacity="0.8" />
        <path d="M338 340 L 422 377" stroke="#ef4444" strokeWidth="5" opacity="0.75" />
        <path d="M338 430 L 422 392" stroke="#ef4444" strokeWidth="5" opacity="0.75" />

        <rect x="640" y="260" width="470" height="300" rx="26" fill="#0f172a" stroke="#334155" />
        <text x="680" y="315" fill="#e5e7eb" fontSize="22" fontFamily="ui-sans-serif" fontWeight="700">
          Backpropagation
        </text>
        <text x="680" y="350" fill="#cbd5e1" fontSize="16" fontFamily="ui-sans-serif">
          Forward pass → loss → gradients via chain rule
        </text>
        <text x="680" y="378" fill="#cbd5e1" fontSize="16" fontFamily="ui-sans-serif">
          Parameter updates (SGD/Adam)
        </text>
      </g>

      <text x="90" y="110" fill="#e5e7eb" fontSize="52" fontFamily="ui-sans-serif" fontWeight="700">
        Backpropagation (Zero to Hero)
      </text>
      <text x="90" y="155" fill="#cbd5e1" fontSize="26" fontFamily="ui-sans-serif">
        Chain rule on graphs • micrograd-style understanding
      </text>
    </svg>
  );
}
