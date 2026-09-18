export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#141414] pt-16 pb-8 text-gray-400">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-center md:text-left">
          
          {/* Logo & About */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <span
              className="text-3xl font-black tracking-widest text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              MARQ<span className="text-red-600">FLIX</span>
            </span>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Your ultimate destination for discovering shows and movies. Track, explore, and dive into details effortlessly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/" className="hover:text-red-500 transition-colors">Home</a></li>
              <li><a href="/movies" className="hover:text-red-500 transition-colors">Movies</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">TV Shows</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Top Rated</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Legal
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Cookie Preferences</a></li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Connect
            </h3>
            <div className="flex justify-center md:justify-start gap-5">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.tvmaze.com/api"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 font-bold flex items-center"
              >
                TVMaze API
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 text-sm">
          <p>© 2026 MarqFlix. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Show data courtesy of TVMaze.</p>
        </div>
      </div>
    </footer>
  );
}