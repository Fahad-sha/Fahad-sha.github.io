import { asset } from "../lib/asset.js";

export default function LogosRibbon() {
  const logos = [
    "/logos/citigroup.png",
    "/logos/endeavor.png",
    "/logos/kpit.png",
    "/logos/lseg.png",
    "/logos/microsoft.png",
    "/logos/musigma.jpg",
    "/logos/walmart.png"
  ];

  return (
    <section className="py-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center text-xs font-semibold tracking-widest text-zinc-500">
          EXPERIENCE WITH
        </div>
        <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200 bg-white/70 shadow-sm backdrop-blur">
          <div className="marquee gap-10 px-6 py-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            {[...logos, ...logos].map((src, idx) => (
              <img
                key={`${src}-${idx}`}
                src={asset(src)}
                alt="company logo"
                className="h-7 sm:h-9 object-contain opacity-90 grayscale transition hover:opacity-100 hover:grayscale-0"
                loading="lazy"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
