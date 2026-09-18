function year(dateStr) {
  return dateStr ? dateStr.slice(0, 4) : "—";
}

export default function MovieCard({ show, onSelect }) {
  // Jodi API theke kono image na ashe, tahole ei default placeholder image ti dekhabe
  const fallbackImage = "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=400&auto=format&fit=crop";
  const poster = show.image?.medium || show.image?.original || fallbackImage;
  const rating = show.rating?.average;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-[#1e1e1e] border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-red-600/50 hover:shadow-[0_10px_30px_rgba(220,38,38,0.2)]">
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-[#141414]">
        
        {/* Poster Image (API theke asha image ba Default image) */}
        <img
          src={poster}
          alt={`${show.name} poster`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Subtle Dark Overlay at the bottom of the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-transparent to-transparent opacity-80" />

        {rating ? (
          <div className="absolute right-3 top-3 flex items-center gap-1 rounded-md bg-black/60 px-2.5 py-1 text-sm font-bold text-yellow-500 backdrop-blur-md">
            ⭐ {rating}
          </div>
        ) : null}
      </div>

      <div className="relative z-10 flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="line-clamp-2 text-lg font-bold text-white transition-colors group-hover:text-red-400">
            {show.name}
          </h3>
          <p className="mt-1 text-sm text-gray-400">📅 {year(show.premiered)}</p>
        </div>

        <button
          onClick={() => onSelect(show.id)}
          className="mt-auto w-full rounded-full border border-red-600/30 bg-red-600/10 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:border-red-600 hover:bg-red-600 hover:shadow-[0_0_15px_rgba(220,38,38,0.4)]"
        >
          See Details
        </button>
      </div>
    </article>
  );
}