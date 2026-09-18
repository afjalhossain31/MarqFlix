import { useEffect, useState } from "react";
import { fetchShowDetails, stripHtml } from "../api/tvmaze";

export default function MovieModal({ showId, onClose }) {
  const [show, setShow] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");

    fetchShowDetails(showId)
      .then((data) => {
        if (!cancelled) {
          setShow(data);
          setStatus("ready");
        }
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, [showId]);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const backdrop = show?.image?.original || show?.image?.medium;
  const cast = show?._embedded?.cast?.slice(0, 6) || [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={show ? `${show.name} details` : "Loading movie details"}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="thin-scroll relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-sm bg-surface ring-1 ring-white/10"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="focus-ring absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ink/80 text-lg text-cream hover:bg-marquee"
        >
          ✕
        </button>

        {status === "loading" && (
          <div className="flex h-80 items-center justify-center text-muted">
            Loading details…
          </div>
        )}

        {status === "error" && (
          <div className="flex h-80 flex-col items-center justify-center gap-3 text-muted">
            <p>Couldn't load this title.</p>
            <button
              onClick={onClose}
              className="focus-ring rounded-sm border border-gold/40 px-4 py-2 text-sm text-gold-soft"
            >
              Close
            </button>
          </div>
        )}

        {status === "ready" && show && (
          <>
            <div className="relative h-64 w-full overflow-hidden bg-surface-raised sm:h-80">
              {backdrop ? (
                <img
                  src={backdrop}
                  alt={`${show.name} backdrop`}
                  className="h-full w-full object-cover"
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
            </div>

            <div className="flex flex-col gap-4 p-6 sm:p-8">
              <h2
                className="text-4xl leading-none text-cream"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {show.name}
              </h2>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
                {show.rating?.average ? (
                  <span className="text-gold-soft">
                    ⭐ Rating: {show.rating.average}
                  </span>
                ) : null}
                {show.premiered ? (
                  <span>📅 Release: {show.premiered.slice(0, 4)}</span>
                ) : null}
                {show.network?.name ? <span>📺 {show.network.name}</span> : null}
                {show.runtime ? <span>⏱ {show.runtime} min</span> : null}
              </div>

              {show.genres?.length ? (
                <div className="flex flex-wrap gap-2">
                  {show.genres.map((genre) => (
                    <span
                      key={genre}
                      className="rounded-full border border-gold/30 px-3 py-1 text-xs text-gold-soft"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              ) : null}

              <div>
                <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-muted">
                  Overview
                </h3>
                <p className="text-sm leading-relaxed text-cream/90">
                  {stripHtml(show.summary) || "No summary available."}
                </p>
              </div>

              {cast.length ? (
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted">
                    Cast
                  </h3>
                  <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-cream/80">
                    {cast.map((c) => (
                      <li key={c.person.id}>{c.person.name}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <button
                onClick={onClose}
                className="focus-ring mt-2 self-start rounded-sm border border-white/15 px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:border-marquee hover:text-marquee"
              >
                ❌ Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
