import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-soft">
      {/* Ambient spotlight glows instead of a stock background photo */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-marquee/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <div className="perf-strip bg-ink-soft" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center sm:py-32">
        <span className="text-sm font-medium tracking-[0.2em] text-gold">
          NOW SHOWING EVERYWHERE
        </span>
        <h1
          className="mt-4 text-6xl leading-[0.95] text-cream sm:text-8xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Every story
          <br />
          deserves a screening
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          Marquee pulls thousands of shows straight from TVMaze so you can
          browse, search, and dig into the details before you press play.
        </p>
        <Link
          to="/movies"
          className="focus-ring group mt-10 inline-flex items-center gap-2 rounded-sm bg-marquee px-8 py-4 text-base font-semibold text-cream transition-transform hover:bg-marquee-dim"
        >
          Explore Now
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>

      <div className="perf-strip bg-ink-soft" />
    </section>
  );
}
