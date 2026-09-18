import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#141414]/80 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Brand / Logo */}
        <Link
          to="/"
          className="group flex items-center gap-2 transition-transform duration-300 hover:scale-105"
        >
          {/* যদি আইকন রাখতে চান তাহলে এটি আনকমেন্ট করতে পারেন */}
          {/* <span className="text-2xl leading-none text-red-600">▶</span> */}
          <span
            className="text-2xl font-black tracking-widest text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            MARQ<span className="text-red-600">FLIX</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6 sm:gap-8">
          
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `hidden sm:block text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                  : "text-gray-400 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `rounded-full px-6 py-2 text-sm font-bold transition-all duration-300 ${
                isActive
                  ? "bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                  : "bg-white/10 text-white border border-white/10 hover:bg-red-600 hover:border-red-600 hover:scale-105 hover:shadow-[0_0_15px_rgba(220,38,38,0.4)]"
              }`
            }
          >
            Movies
          </NavLink>
          
        </nav>
      </div>
    </header>
  );
}