export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-soft">
      <div className="perf-strip bg-ink-soft" />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p
            className="text-lg tracking-wide text-cream"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Marquee
          </p>
          <p className="text-sm text-muted">
            © 2026 Marquee. Show data courtesy of TVMaze.
          </p>
        </div>
        <div className="flex gap-5 text-sm text-muted">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded-sm transition-colors hover:text-gold"
          >
            GitHub
          </a>
          <a
            href="https://www.tvmaze.com/api"
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded-sm transition-colors hover:text-gold"
          >
            TVMaze API
          </a>
        </div>
      </div>
    </footer>
  );
}
