import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { asset } from "../lib/asset.js";
import { roles, skills } from "../data/experience.js";

function Logo({ src, alt }) {
  if (!src) return null;
  return (
    <img
      src={asset(src)}
      alt={alt || ""}
      className="h-10 w-10 rounded-xl object-contain border border-zinc-200 bg-white"
      loading="lazy"
      onError={(e) => (e.currentTarget.style.display = "none")}
    />
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700">
      {children}
    </span>
  );
}

function TimelineItem({ logo, title, meta, location, bullets, tags, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.35, ease: "easeOut", delay }}
      className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
    >
      <div className="flex gap-4">
        <div className="mt-0.5">
          <Logo src={logo} alt={title} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <div className="text-base font-semibold tracking-tight text-zinc-900">{title}</div>
              <div className="mt-1 text-sm text-zinc-600">{location}</div>
            </div>
            <div className="text-sm font-medium text-zinc-700">{meta}</div>
          </div>

          {tags?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>
          ) : null}

          {bullets?.length ? (
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-700">
              {bullets.map((b, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300" />
                  <span className="min-w-0">{b}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Reusable experience section.
 * - limit: show only first N roles (home)
 * - showTools: include tools/stack pills
 * - showCta: show link to full page
 */
export default function ExperienceSection({ limit = null, showTools = true, showCta = false }) {
  const items = typeof limit === "number" ? roles.slice(0, limit) : roles;

  return (
    <section className="py-12" id="experience">
      <div className="flex items-end justify-between gap-6">
        <div>
          <div className="text-xs font-semibold tracking-widest text-zinc-500">EXPERIENCE</div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900">Work Experience</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-700">
            6+ years across ML engineering, GenAI (RAG), forecasting, and analytics. Highlights the most relevant engineering and modeling outcomes.
          </p>
        </div>

        {showCta ? (
          <Link
            to="/experience"
            className="hidden sm:inline rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-zinc-50"
          >
            Full experience →
          </Link>
        ) : null}
      </div>

      <div className="mt-8 space-y-6">
        {items.map((r, i) => (
          <TimelineItem key={r.title} {...r} delay={i * 0.03} />
        ))}
      </div>

      {showTools ? (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
        >
          <div className="text-xs font-semibold tracking-widest text-zinc-500">TOOLS & STACK</div>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
        </motion.div>
      ) : null}

      {showCta ? (
        <div className="mt-8 sm:hidden">
          <Link
            to="/experience"
            className="inline-flex rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-zinc-50"
          >
            Full experience →
          </Link>
        </div>
      ) : null}
    </section>
  );
}
