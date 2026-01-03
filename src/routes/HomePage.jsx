import { Link } from "react-router-dom";
import { profile } from "../data/profile.js";
import { projectGroups, projects } from "../data/projects.js";
import { asset } from "../lib/asset.js";
import LogosRibbon from "../ui/LogosRibbon.jsx";
import ProjectCard from "../ui/ProjectCard.jsx";

export default function HomePage() {
  return (
    <div>
      <section className="py-14 sm:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white/80 shadow-sm backdrop-blur">
          <div className="absolute inset-0">
            <img
              src={asset("/hero/nyc.jpg")}
              alt="New York City skyline"
              className="hero-bg h-full w-full object-cover"
              loading="eager"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/55 to-white/90" />

            {/* animated color glow */}
            <div className="hero-drift absolute -left-16 -top-24 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
            <div className="hero-drift absolute -right-16 top-10 h-72 w-72 rounded-full bg-fuchsia-500/12 blur-3xl" style={{ animationDelay: "-2.5s" }} />
          </div>

          <div className="relative px-6 py-12 sm:px-10 sm:py-16">
            <div className="max-w-3xl hero-fade">
              <div className="text-xs font-semibold tracking-widest text-zinc-500">
                {profile.location} • {profile.headline}
              </div>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                {profile.name}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-zinc-700">{profile.heroBlurb}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm font-semibold hover:bg-zinc-50"
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm font-semibold hover:bg-zinc-50"
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm font-semibold hover:bg-zinc-50"
                  href={asset(profile.links.resumePdf)}
                >
                  Resume PDF
                </a>
                <Link
                  className="rounded-full bg-zinc-900 px-4 py-1 text-sm font-semibold text-white hover:bg-zinc-800"
                  to="/projects"
                >
                  View Projects →
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["RAG", "AWS", "MLOps", "Time Series", "People Analytics"].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { k: "Experience", v: "6+ years" },
                  { k: "Core focus", v: "RAG + ML systems" },
                  { k: "Current base", v: "NYC" }
                ].map((x) => (
                  <div
                    key={x.k}
                    className="rounded-2xl border border-zinc-200 bg-white/75 p-4 shadow-sm backdrop-blur"
                  >
                    <div className="text-xs font-semibold tracking-widest text-zinc-500">{x.k}</div>
                    <div className="mt-1 text-sm font-semibold text-zinc-900">{x.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogosRibbon />

      <section className="py-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs font-semibold tracking-widest text-zinc-500">
              COMPREHENSIVE PORTFOLIO
            </div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900">
              Projects & Research
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-700">
              Dedicated pages with architecture diagrams, technical reports, and repository links.
            </p>
          </div>
          <Link
            to="/projects"
            className="hidden sm:inline rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-zinc-50"
          >
            Browse all
          </Link>
        </div>

        <div className="mt-8 space-y-10">
          {projectGroups.map((g) => {
            const groupProjects = g.slugs
              .map((s) => projects.find((p) => p.slug === s))
              .filter(Boolean);

            return (
              <div key={g.title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="text-xs font-semibold tracking-widest text-zinc-500">
                  {g.title.toUpperCase()}
                </div>
                <p className="mt-2 text-sm text-zinc-700">{g.description}</p>

                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {groupProjects.map((p) => (
                    <ProjectCard key={p.slug} project={p} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
