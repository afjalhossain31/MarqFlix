function year(dateStr) {
  return dateStr ? dateStr.slice(0, 4) : "—";
}

export default function MovieCard({ show, onSelect }) {
  const poster = show.image?.medium || show.image?.original;
  const rating = show.rating?.average;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-sm bg-surface ring-1 ring-white/5 transition-transform duration-200 hover:-translate-y-1 hover:ring-gold/40">
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-surface-raised">
        {poster ? (
          <img
            src={poster}
            alt={`${show.name} poster`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-muted">
            No poster
          </div>
        )}

        {rating ? (
          <div className="absolute right-0 top-3 flex items-center gap-1 rounded-l-sm bg-ink/90 py-1 pl-3 pr-2 text-sm font-semibold text-gold-soft">
            ⭐ {rating}
          </div>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="line-clamp-2 text-base font-semibold text-cream">
          {show.name}
        </h3>
        <p className="text-sm text-muted">📅 {year(show.premiered)}</p>

        <button
          onClick={() => onSelect(show.id)}
          className="focus-ring mt-auto rounded-sm border border-gold/40 py-2 text-sm font-medium text-gold-soft transition-colors hover:bg-gold hover:text-ink"
        >
          See Details
        </button>
      </div>
    </article>
  );
}
