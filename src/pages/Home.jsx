import Hero from "../components/Hero";
import { Link } from "react-router-dom";

const HIGHLIGHTS = [
  {
    icon: "🎬",
    title: "Thousands of titles",
    body: "Browse a constantly updated catalogue pulled live from TVMaze.",
  },
  {
    icon: "🔎",
    title: "Instant search",
    body: "Find a title by name and the grid narrows down as you type.",
  },
  {
    icon: "🎟️",
    title: "Full details",
    body: "Ratings, genres, cast, and a synopsis, one click away.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <div key={item.title} className="flex flex-col gap-2">
              <span className="text-3xl">{item.icon}</span>
              <h3 className="text-lg font-semibold text-cream">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 rounded-sm border border-white/10 bg-ink-soft px-6 py-12 text-center">
          <h2
            className="text-3xl text-cream sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready for the next binge?
          </h2>
          <Link
            to="/movies"
            className="focus-ring rounded-sm bg-marquee px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-marquee-dim"
          >
            Browse the catalogue
          </Link>
        </div>
      </section>
    </>
  );
}
