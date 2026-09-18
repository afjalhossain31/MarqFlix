import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Cinematic Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop')",
        }}
      />
      {/* Dark Gradients for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/50 to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center py-20">
        <span className="mb-6 rounded-full border border-red-600/50 bg-red-600/10 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-red-500 uppercase backdrop-blur-md">
          Now Showing Everywhere
        </span>

        <h1
          className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl drop-shadow-2xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Every story
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-600">
            deserves a screening
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-300 sm:text-xl drop-shadow-md">
          MarqFlix pulls thousands of shows straight from TVMaze so you can
          browse, search, and dig into the details before you press play.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-5">
          <Link
            to="/movies"
            className="group flex items-center gap-2 rounded-full bg-red-600 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-red-700 hover:scale-105 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]"
          >
            {/* Play Icon */}
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Explore Now
          </Link>
          
          <a
            href="#features"
            className="group flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-8 py-4 text-lg font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}