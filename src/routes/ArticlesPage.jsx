import { mediumArticles } from "../data/articles.js";

function ArticleCard({ a }) {
  return (
    <a
      href={a.url}
      target="_blank"
      rel="noreferrer"
      className="block rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-base font-semibold tracking-tight text-zinc-900">{a.title}</div>
          {a.published ? <div className="mt-1 text-xs text-zinc-500">{a.published}</div> : null}
        </div>
        <div className="text-xs font-semibold text-zinc-500">Medium ↗</div>
      </div>

      {a.summary ? (
        <p className="mt-3 text-sm leading-relaxed text-zinc-700">{a.summary}</p>
      ) : (
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
          Add a short <span className="font-mono">summary</span> in <span className="font-mono">src/data/articles.js</span>.
        </p>
      )}

      {Array.isArray(a.tags) && a.tags.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {a.tags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </a>
  );
}

export default function ArticlesPage() {
  return (
    <section className="py-12">
      <div className="text-xs font-semibold tracking-widest text-zinc-500">ARTICLES</div>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Writing</h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-700">
        Short write-ups and implementation notes. Click any card to open the article.
      </p>

      {mediumArticles.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-700 shadow-sm">
          Add your article links in <span className="font-mono">src/data/articles.js</span>.
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mediumArticles.map((a) => (
            <ArticleCard key={a.url || a.title} a={a} />
          ))}
        </div>
      )}
    </section>
  );
}
