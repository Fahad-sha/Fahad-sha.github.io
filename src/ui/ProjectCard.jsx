import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  const Cover = project.Cover;
  const MotionLink = motion(Link);
  return (
    <MotionLink
      to={`/projects/${project.slug}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white/80 shadow-sm backdrop-blur hover:shadow-md"
    >
      <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition" aria-hidden>
        <div className="h-full w-full bg-[radial-gradient(500px_220px_at_20%_20%,rgba(59,130,246,0.18),transparent_60%),radial-gradient(520px_220px_at_80%_30%,rgba(168,85,247,0.16),transparent_60%)]" />
      </div>

      <div className="relative aspect-[16/10] bg-zinc-50">
        <Cover />
      </div>
      <div className="relative p-5">
        <div className="text-xs font-semibold tracking-widest text-zinc-500">
          {project.category.toUpperCase()}
        </div>
        <div className="mt-2 text-lg font-semibold tracking-tight group-hover:underline">
          {project.title}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-zinc-700">{project.subtitle}</p>
        <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900">
          Open
          <span className="transition group-hover:translate-x-0.5">→</span>
        </div>
      </div>
    </MotionLink>
  );
}
