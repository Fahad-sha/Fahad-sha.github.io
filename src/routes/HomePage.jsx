import { Link } from "react-router-dom";
import { profile } from "../data/profile.js";
import { projectGroups, projects } from "../data/projects.js";
import { asset } from "../lib/asset.js";
import ProjectCard from "../ui/ProjectCard.jsx";
import ExperienceSection from "../ui/ExperienceSection.jsx";

export default function HomePage() {

  return (
    <div>
      <section className="py-10 sm:py-14">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-950/20 shadow-sm backdrop-blur min-h-[78vh] sm:min-h-[84vh]">
          <div className="absolute inset-0">
            <img
              src={asset("/hero/nyc.jpg")}
              alt="New York City skyline"
              className="hero-bg h-full w-full object-cover"
              loading="eager"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />

            {/* darker cinematic overlay for white text */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/35" />

            {/* subtle animated color glow */}
            <div className="hero-drift absolute -left-16 -top-24 h-72 w-72 rounded-full bg-blue-500/18 blur-3xl" />
            <div
              className="hero-drift absolute -right-16 top-10 h-72 w-72 rounded-full bg-fuchsia-500/14 blur-3xl"
              style={{ animationDelay: "-2.5s" }}
            />
          </div>

          <div className="relative px-6 py-12 sm:px-10 sm:py-16">
            <div className="max-w-3xl hero-fade">
              <div className="text-xs font-semibold tracking-widest text-white/80">
                {profile.location} • {profile.headline}
              </div>

              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {profile.name}
              </h1>

              <p className="mt-4 text-base leading-relaxed text-white/85">
                I build production-oriented ML systems and modern GenAI applications (LLMs, RAG,
                embeddings, vector search) with strong evaluation and MLOps practices. With nearly six
                years of hands-on experience across data analytics, BI, and machine learning, I transform
                complex—often unstructured—data into clear, actionable insights that drive measurable
                business outcomes. I’ve worked with Fortune 100 teams to deliver people analytics
                dashboards, customer segmentation models, anomaly detection frameworks, and automated
                reporting pipelines that improve operational efficiency and inform strategy.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-semibold text-white hover:bg-white/15"
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-semibold text-white hover:bg-white/15"
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <Link to="/articles" className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-semibold text-white hover:bg-white/15">Articles</Link>
                <Link to="/research" className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-semibold text-white hover:bg-white/15">Research</Link>
                <Link to="/apps" className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-semibold text-white hover:bg-white/15">Live Apps</Link>
                <a
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-semibold text-white hover:bg-white/15"
                  href={asset(profile.links.resumePdf)}
                >
                  Resume PDF
                </a>
                <Link
                  className="rounded-full bg-white px-4 py-1 text-sm font-semibold text-zinc-900 hover:bg-white/90"
                  to="/projects"
                >
                  View Projects →
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["LLMs", "GenAI", "RAG", "AWS", "MLOps", "Time Series", "People Analytics"].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { k: "Experience", v: "6 years" },
                  { k: "Core focus", v: "LLMs + RAG + ML systems" },
                  { k: "Current base", v: "NYC" },
                ].map((x) => (
                  <div
                    key={x.k}
                    className="rounded-2xl border border-white/15 bg-white/10 p-4 shadow-sm backdrop-blur"
                  >
                    <div className="text-xs font-semibold tracking-widest text-white/70">{x.k}</div>
                    <div className="mt-1 text-sm font-semibold text-white">{x.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By section removed */}

      <ExperienceSection limit={3} showTools={false} showCta={true} />

      

      <section className="py-12" id="projects">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs font-semibold tracking-widest text-zinc-500">
              COMPREHENSIVE PORTFOLIO
            </div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900">
              Projects
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
