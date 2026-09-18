import Hero from "../components/Hero";
import TrendingMarqFlix from "../components/TrendingMarqFlix";
import { Link } from "react-router-dom";

const HIGHLIGHTS = [
  {
    icon: "🎬",
    title: "Thousands of titles",
    body: "Browse a constantly updated catalogue pulled live from TVMaze.",
  },
  {
    icon: "🔍", // Changed slightly for better visibility
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
    <div className="min-h-screen bg-[#141414]">
      {/* Hero Section */}
      <Hero />
      <TrendingMarqFlix />

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8">
        
        {/* Features Grid mapped from HIGHLIGHTS array */}
        <div className="grid gap-8 md:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <div 
              key={item.title} 
              className="group rounded-2xl bg-[#1e1e1e] p-8 border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-red-600/50 hover:shadow-[0_10px_30px_rgba(220,38,38,0.15)] flex flex-col gap-4"
            >
              {/* Icon Container */}
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600/10 text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-600/20">
                {item.icon}
              </div>
              
              {/* Text Content */}
              <div>
                <h3 className="mb-2 text-2xl font-bold text-white transition-colors group-hover:text-red-400">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cinematic CTA Banner */}
        <div className="relative mt-24 overflow-hidden rounded-[2rem] border border-red-600/30 bg-gradient-to-br from-red-900/40 via-black to-[#141414] px-6 py-16 text-center shadow-2xl sm:py-24">
          
          {/* Ambient Background Glows */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-red-600/20 blur-[100px]"></div>
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-red-900/20 blur-[100px]"></div>

          <div className="relative z-10 flex flex-col items-center gap-8">
            <h2
              className="text-4xl font-black uppercase tracking-wider text-white sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready for the next binge?
            </h2>
            <Link
              to="/movies"
              className="group inline-flex items-center gap-3 rounded-full bg-red-600 px-10 py-5 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-red-700 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]"
            >
              Browse the catalogue
              {/* Arrow Icon */}
              <svg 
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
        
      </section>
    </div>
  );
}