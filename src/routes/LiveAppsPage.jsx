import { liveApps } from "../data/liveApps.js";

function AppCard({ app }) {
  return (
    <a
      href={app.url}
      target="_blank"
      rel="noreferrer"
      className="block rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-base font-semibold tracking-tight text-zinc-900">{app.title}</div>
          <div className="mt-1 text-xs text-zinc-500">{app.url}</div>
        </div>
        <div className="text-xs font-semibold text-zinc-500">Open ↗</div>
      </div>
      {app.description ? <p className="mt-3 text-sm leading-relaxed text-zinc-700">{app.description}</p> : null}
    </a>
  );
}

export default function LiveAppsPage() {
  return (
    <section className="py-12">
      <div className="text-xs font-semibold tracking-widest text-zinc-500">LIVE APPS</div>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Demos</h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-700">
        Live demos hosted on GitHub Pages / Hugging Face / etc. Click any card to open.
      </p>

      {liveApps.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-700 shadow-sm">
          Add your live apps in <span className="font-mono">src/data/liveApps.js</span>.
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {liveApps.map((a) => (
            <AppCard key={a.url || a.title} app={a} />
          ))}
        </div>
      )}
    </section>
  );
}
