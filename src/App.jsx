// src/App.jsx
import { NavLink, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import HomePage from "./routes/HomePage.jsx";
import ProjectsPage from "./routes/ProjectsPage.jsx";
import ProjectDetailPage from "./routes/ProjectDetailPage.jsx";
import ExperiencePage from "./routes/ExperiencePage.jsx";
import ArticlesPage from "./routes/ArticlesPage.jsx";
import ResearchPage from "./routes/ResearchPage.jsx";
import LiveAppsPage from "./routes/LiveAppsPage.jsx";
import NotFoundPage from "./routes/NotFoundPage.jsx";

import { profile } from "./data/profile.js";
import { asset } from "./lib/asset.js";

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "rounded-full px-3 py-1 text-sm font-medium transition",
          isActive
            ? "bg-zinc-900 text-white"
            : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900",
        ].join(" ")
      }
    >
      {children}
    </NavLink>
  );
}

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.hash, location.search]);
  return null;
}

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToContact = () => {
    const scroll = () => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    if (location.pathname === "/") {
      scroll();
      return;
    }
    navigate("/");
    setTimeout(scroll, 60);
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <ScrollToTop />

      {/* Global background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_10%,rgba(59,130,246,0.10),transparent_55%),radial-gradient(900px_520px_at_80%_30%,rgba(34,197,94,0.10),transparent_55%),radial-gradient(900px_520px_at_50%_90%,rgba(168,85,247,0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-grid opacity-70" />
      </div>

      <header className="sticky top-0 z-50">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <div className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
            <NavLink to="/" className="flex items-center gap-3 font-semibold tracking-tight">
              <img
                src={asset("/avatar/profile.jpg")}
                alt="Fahad Shaikh"
                className="h-9 w-9 rounded-full object-cover border border-zinc-300"
                loading="eager"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <span className="hidden sm:inline">{profile.name}</span>
            </NavLink>

            <nav className="flex items-center gap-4">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/projects">Projects</NavItem>
              <NavItem to="/experience">Experience</NavItem>
              <NavItem to="/articles">Articles</NavItem>
              <NavItem to="/research">Research</NavItem>
              <NavItem to="/apps">Live Apps</NavItem>
              <button
                type="button"
                onClick={goToContact}
                className="rounded-full px-3 py-1 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:slug" element={<ProjectDetailPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/research" element={<ResearchPage />} />
              <Route path="/apps" element={<LiveAppsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>

        <footer className="mt-14 border-t border-zinc-200 py-10 text-center text-sm text-zinc-600">
          <div id="contact" className="mx-auto max-w-2xl scroll-mt-24">
            <div className="text-xs font-semibold tracking-widest text-zinc-500">CONTACT</div>
            <div className="mt-3">
              <div>
                Email:{" "}
                <a className="underline" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </div>
              <div className="mt-1">Phone: {profile.phone}</div>
            </div>
            <div className="mt-6 text-xs text-zinc-500">
              © {new Date().getFullYear()} {profile.name}.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
