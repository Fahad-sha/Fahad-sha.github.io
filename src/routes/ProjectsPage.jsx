import { projects } from "../data/projects.js";
import ProjectCard from "../ui/ProjectCard.jsx";

export default function ProjectsPage() {
  return (
    <section className="py-12">
      <div className="text-xs font-semibold tracking-widest text-zinc-500">PROJECTS</div>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">All Projects</h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-700">
        Each project has a dedicated page with system architecture, technical report, and repository link.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
