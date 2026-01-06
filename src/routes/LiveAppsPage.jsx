import { liveApps } from "../data/liveApps";

export default function LiveAppsPage() {
  return (
    <div className="py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">Live Apps</h1>
        <p className="mt-2 text-sm text-zinc-600">
          Interactive demos you can try directly here.
        </p>
      </div>

      <div className="grid gap-6">
        {liveApps.map((app, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-semibold">{app.title}</div>
                  {app.description ? (
                    <div className="mt-1 text-sm text-zinc-600">
                      {app.description}
                    </div>
                  ) : null}
                </div>

                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-full border border-zinc-200 px-3 py-1 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
                >
                  Open ↗
                </a>
              </div>

              {app.embed ? (
                <div className="mt-4 overflow-hidden rounded-xl border border-zinc-200">
                  <iframe
                    src={app.url}
                    title={app.title}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: `${app.height || 650}px`,
                      border: "0",
                      display: "block",
                    }}
                    allow="clipboard-write; fullscreen"
                  />
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
