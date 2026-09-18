import { useState } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const [showAbout, setShowAbout] = useState(false);

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
          
          {/* Learn More Button - Now opens the modal */}
          <button
            onClick={() => setShowAbout(true)}
            className="group flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-8 py-4 text-lg font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-105"
          >
            Learn More
          </button>
        </div>
      </div>



      {/* --- ABOUT PROJECT MODAL --- */}
      {showAbout && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm transition-opacity duration-300">
          <div 
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#141414] p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Accent */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-red-600/20 blur-[80px]"></div>

            <button
              onClick={() => setShowAbout(false)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-red-600 hover:scale-110"
            >
              ✕
            </button>

            <h2 className="mb-4 text-3xl font-black text-white" style={{ fontFamily: "var(--font-display)" }}>
              ABOUT MARQ<span className="text-red-600">FLIX</span>
            </h2>
            
            <p className="mb-6 text-gray-300 leading-relaxed">
              MarqFlix is a premium, cinematic TV show and movie discovery platform. Built to provide a seamless browsing experience, it allows users to search thousands of titles, view live-updated catalogs, and dig into comprehensive details like cast, genres, and ratings.
            </p>

            {/* Tech Stack Section */}
            <div className="mb-8">
              <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-red-500">
                Languages & Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'React.js', 
                  'JavaScript (ES6+)', 
                  'Tailwind CSS', 
                  'React Router DOM', 
                  'Vite', 
                  'Lucide Icons', 
                  'TVMaze REST API'
                ].map(tech => (
                  <span 
                    key={tech} 
                    className="rounded-md border border-white/10 bg-[#1e1e1e] px-4 py-1.5 text-sm font-medium text-gray-300 transition-colors hover:border-red-500/50 hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Developer Credit & Action */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-6 gap-4">
              <div className="text-sm text-gray-400">
                Developed by <span className="font-bold text-white">Afjal Hossain</span>
              </div>
              <button
                onClick={() => setShowAbout(false)}
                className="rounded-full bg-red-600 px-8 py-2.5 text-sm font-bold text-white transition-all hover:bg-red-700 hover:scale-105 hover:shadow-[0_0_15px_rgba(220,38,38,0.4)]"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
      
    </section>
  );
}