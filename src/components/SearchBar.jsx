export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative mx-auto w-full max-w-3xl group">
      <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
        {/* Professional Search SVG Icon */}
        <svg 
          className="h-5 w-5 text-gray-400 transition-colors duration-300 group-focus-within:text-red-500" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for a movie or show..."
        aria-label="Search for a movie or show"
        className="w-full rounded-full border border-white/10 bg-[#1e1e1e] py-4 pl-14 pr-6 text-base text-white placeholder-gray-500 shadow-xl transition-all duration-300 hover:border-white/20 hover:bg-[#252525] focus:border-red-600 focus:bg-[#141414] focus:outline-none focus:ring-4 focus:ring-red-600/20"
      />
    </div>
  );
}