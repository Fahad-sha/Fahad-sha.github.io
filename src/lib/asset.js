export const asset = (p) => {
  const BASE = import.meta.env.BASE_URL || "/";
  if (!p) return p;
  if (p.startsWith("http://") || p.startsWith("https://")) return p;
  if (p.startsWith("/")) return `${BASE}${p.slice(1)}`;
  return p;
};
