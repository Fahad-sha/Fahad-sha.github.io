import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="py-16">
      <div className="text-xs font-semibold tracking-widest text-zinc-500">404</div>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-3 text-sm text-zinc-700">The page you’re looking for doesn’t exist.</p>
      <Link
        className="mt-6 inline-block rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-zinc-50"
        to="/"
      >
        Go home
      </Link>
    </div>
  );
}
