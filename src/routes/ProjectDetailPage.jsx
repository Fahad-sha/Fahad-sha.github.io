import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { asset } from "../lib/asset.js";
import { getProject } from "../data/projects.js";

function Section({ id, title, children, delay = 0 }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35, ease: "easeOut", delay }}
      id={id}
      className="mt-10 scroll-mt-28"
    >
      <div className="text-xs font-semibold tracking-widest text-zinc-500">{title}</div>
      <div className="mt-3 rounded-2xl border border-zinc-200 bg-white/80 p-6 shadow-sm backdrop-blur">
        {children}
      </div>
    </motion.section>
  );
}

function ButtonLink({ href, children, variant = "primary", disabled = false }) {
  const cls =
    variant === "primary"
      ? "rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 hover:shadow"
      : "rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold shadow-sm transition hover:bg-zinc-50 hover:shadow";
  const disabledCls = "opacity-50 cursor-not-allowed pointer-events-none";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={[cls, disabled ? disabledCls : ""].join(" ")}
      aria-disabled={disabled ? "true" : "false"}
    >
      {children}
    </a>
  );
}

function ReportBlock({ title, items }) {
  return (
    <div className="mt-6 first:mt-0">
      <div className="text-sm font-semibold text-zinc-900">{title}</div>
      <ul className="mt-2 space-y-1 text-sm text-zinc-700">
        {items.map((x) => (
          <li key={x}>• {x}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const p = getProject(slug);

  if (!p) {
    return (
      <div className="py-12">
        <div className="text-sm text-zinc-700">Project not found.</div>
        <Link className="mt-4 inline-block underline" to="/projects">
          Back to projects
        </Link>
      </div>
    );
  }

  const Cover = p.Cover;
  const archSrc = asset(p.archImage);
  const placeholder = `https://via.placeholder.com/1200x520?text=${encodeURIComponent(
    "Architecture Diagram (Replace JPEG)"
  )}`;

  const toc = [
    { id: "architecture", label: "Architecture" },
    ...(p.metricsPlaceholder ? [{ id: "metrics", label: "Metrics" }] : []),
    { id: "report", label: "Report" }
  ];

  return (
    <div className="py-12">
      <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
        <div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="flex items-start justify-between gap-6"
      >
        <div>
          <div className="text-xs font-semibold tracking-widest text-zinc-500">{p.category}</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">{p.title}</h1>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-700">{p.subtitle}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="hidden sm:flex flex-col items-end gap-2">
          <div className="flex gap-2">
            <ButtonLink href={p.repoUrl} variant="primary">
              Repository →
            </ButtonLink>
            <ButtonLink href={p.liveUrl || "#"} variant="secondary" disabled={!p.liveUrl || p.liveUrl.includes("<")}>
              Live Link →
            </ButtonLink>
          </div>
          <Link
            to="/projects"
            className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-zinc-50"
          >
            Back
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut", delay: 0.08 }}
        className="mt-8 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm"
      >
        <Cover />
      </motion.div>

      <Section id="architecture" title="ARCHITECTURE DIAGRAM" delay={0.02}>
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
          <img
            src={archSrc}
            alt={`${p.title} architecture diagram`}
            className="w-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = placeholder;
            }}
          />
        </div>
        <p className="mt-3 text-xs text-zinc-500">
          Replace this JPEG at <span className="font-semibold">{p.archImage}</span> with your real diagram export.
        </p>
      </Section>

      {p.metricsPlaceholder ? (
        <Section id="metrics" title="METRICS (PLACEHOLDER)" delay={0.04}>
          <p className="text-sm text-zinc-700">{p.metricsPlaceholder.note}</p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {p.metricsPlaceholder.rows.map(([k, v]) => (
                  <tr key={k} className="border-b border-zinc-200">
                    <td className="py-2 font-semibold text-zinc-800">{k}</td>
                    <td className="py-2 text-zinc-700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      ) : null}

      <Section id="report" title="PROJECT REPORT LOG" delay={0.06}>
        <div className="space-y-6">
          <div>
            <div className="text-sm font-semibold text-zinc-900">Context</div>
            <p className="mt-2 text-sm leading-relaxed text-zinc-700">{p.report.context}</p>
          </div>

          <ReportBlock title="Implementation" items={p.report.implementation} />
          <ReportBlock title="Methodology" items={p.report.methodology} />
          <ReportBlock title="Challenges" items={p.report.challenges} />
          <ReportBlock title="Outcome" items={p.report.outcome} />

          <div className="pt-2 flex flex-wrap gap-2">
            <ButtonLink href={p.repoUrl} variant="secondary">
              Repository →
            </ButtonLink>
            <ButtonLink href={p.liveUrl || "#"} variant="primary" disabled={!p.liveUrl || p.liveUrl.includes("<")}>
              Live Link →
            </ButtonLink>
          </div>
        </div>
      </Section>

      <div className="mt-10 sm:hidden">
        <a
          href={p.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="block rounded-full bg-zinc-900 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-zinc-800"
        >
          Repository →
        </a>
        <a
          href={p.liveUrl || "#"}
          target="_blank"
          rel="noreferrer"
          className={[
            "mt-3 block rounded-full border border-zinc-200 bg-white px-4 py-2 text-center text-sm font-semibold hover:bg-zinc-50",
            !p.liveUrl || p.liveUrl.includes("<") ? "opacity-50 pointer-events-none" : ""
          ].join(" ")}
        >
          Live Link →
        </a>
        <Link
          to="/projects"
          className="mt-3 block rounded-full border border-zinc-200 bg-white px-4 py-2 text-center text-sm font-semibold hover:bg-zinc-50"
        >
          Back
        </Link>
      </div>

        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-2xl border border-zinc-200 bg-white/80 p-5 shadow-sm backdrop-blur">
            <div className="text-xs font-semibold tracking-widest text-zinc-500">QUICK LINKS</div>
            <div className="mt-3 flex flex-col gap-2">
              <ButtonLink href={p.repoUrl} variant="primary">
                Repository →
              </ButtonLink>
              <ButtonLink href={p.liveUrl || "#"} variant="secondary" disabled={!p.liveUrl || p.liveUrl.includes("<")}>
                Live Link →
              </ButtonLink>
            </div>

            <div className="mt-6 text-xs font-semibold tracking-widest text-zinc-500">SECTIONS</div>
            <ul className="mt-3 space-y-2 text-sm">
              {toc.map((x) => (
                <li key={x.id}>
                  <a className="text-zinc-700 hover:text-zinc-900" href={`#${x.id}`}>
                    {x.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
