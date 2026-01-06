import { researchPapers } from "../data/research.js";

function ResearchCard({ r }) {
  const primaryLink = r.pdfUrl || r.url;
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-base font-semibold tracking-tight text-zinc-900">{r.title}</div>
          <div className="mt-1 text-xs text-zinc-500">
            {r.year ? r.year : ""}{r.venue ? ` • ${r.venue}` : ""}{r.status ? ` • ${r.status}` : ""}
          </div>
        </div>
        {primaryLink ? (
          <a
            href={primaryLink}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold text-zinc-700 underline"
          >
            Open ↗
          </a>
        ) : null}
      </div>

      {r.abstract ? (
        <p className="mt-3 text-sm leading-relaxed text-zinc-700">{r.abstract}</p>
      ) : (
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
          Add a 1–2 sentence <span className="font-mono">abstract</span> in <span className="font-mono">src/data/research.js</span>.
        </p>
      )}

      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        {r.pdfUrl ? (
          <a className="underline" href={r.pdfUrl} target="_blank" rel="noreferrer">
            PDF ↗
          </a>
        ) : null}
        {r.codeUrl ? (
          <a className="underline" href={r.codeUrl} target="_blank" rel="noreferrer">
            Code ↗
          </a>
        ) : null}
        {r.slidesUrl ? (
          <a className="underline" href={r.slidesUrl} target="_blank" rel="noreferrer">
            Slides ↗
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default function ResearchPage() {
  return (
    <section className="py-12">
      <div className="text-xs font-semibold tracking-widest text-zinc-500">RESEARCH</div>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Research & Papers</h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-700">
        Papers, experiments, and works-in-progress. Click “Open” to view the paper or artifact.
      </p>

      {researchPapers.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-700 shadow-sm">
          Add your research items in <span className="font-mono">src/data/research.js</span>.
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {researchPapers.map((r) => (
            <ResearchCard key={r.id || r.title} r={r} />
          ))}
        </div>
      )}
    </section>
  );
}
