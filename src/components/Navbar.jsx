import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          to="/"
          className="focus-ring flex items-center gap-2 rounded-sm"
        >
          <span className="text-2xl leading-none text-gold">▶</span>
          <span
            className="text-2xl tracking-wide text-cream"
            style={{ fontFamily: "var(--font-display)" }}
          >
            MarqFlix
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `focus-ring hidden rounded-sm text-sm font-medium transition-colors sm:block ${
                isActive ? "text-gold" : "text-muted hover:text-cream"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className="focus-ring rounded-sm bg-marquee px-4 py-2 text-sm font-semibold text-cream transition-colors hover:bg-marquee-dim"
          >
            Movies
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
