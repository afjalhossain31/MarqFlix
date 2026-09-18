import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-center">
      
      {/* Cinematic Background Image with Heavy Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 grayscale"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2000&auto=format&fit=crop')",
        }}
      />
      {/* Gradients to blend the background smoothly */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#141414]/80 via-[#141414]/95 to-[#141414]"></div>

      <div className="relative z-10 flex flex-col items-center">
        
        {/* Glowing 404 Text */}
        <h1 
          className="text-[8rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-900 drop-shadow-[0_0_40px_rgba(220,38,38,0.5)] sm:text-[10rem]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          404
        </h1>
        
        {/* Cinematic Subtitle with fading lines */}
        <div className="mt-4 flex items-center gap-4">
          <span className="h-[2px] w-12 bg-gradient-to-r from-transparent to-red-600 sm:w-20"></span>
          <span className="text-lg font-bold tracking-[0.4em] text-white uppercase drop-shadow-md">
            Scene Not Found
          </span>
          <span className="h-[2px] w-12 bg-gradient-to-l from-transparent to-red-600 sm:w-20"></span>
        </div>

        <p className="mt-6 max-w-md text-base leading-relaxed text-gray-400 sm:text-lg">
          Looks like this reel is missing. The movie or page you are looking for has been deleted, moved, or never existed in our final cut. 
        </p>

        {/* Premium Glassmorphism Button */}
        <Link
          to="/"
          className="group mt-10 inline-flex items-center gap-3 rounded-full border border-red-600/50 bg-red-600/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]"
        >
          {/* Arrow Icon */}
          <svg 
            className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}