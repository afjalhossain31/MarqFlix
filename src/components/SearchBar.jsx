export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted">
        🔍
      </span>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for a movie or show..."
        aria-label="Search for a movie or show"
        className="focus-ring w-full rounded-sm border border-white/10 bg-surface py-3.5 pl-11 pr-4 text-base text-cream placeholder:text-muted"
      />
    </div>
  );
}
