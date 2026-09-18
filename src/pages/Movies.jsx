import { useEffect, useMemo, useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import { fetchAllShows, searchShows } from "../api/tvmaze";

export default function Movies() {
  const [allShows, setAllShows] = useState([]);
  const [searchResults, setSearchResults] = useState(null);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("loading");
  const [selectedId, setSelectedId] = useState(null);

  // Initial catalogue load
  useEffect(() => {
    fetchAllShows(3)
      .then((shows) => {
        setAllShows(shows);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  // Debounced search against the TVMaze search endpoint
  useEffect(() => {
    const trimmed = query.trim();
    if (!trimmed) {
      setSearchResults(null);
      return;
    }
    const timeout = setTimeout(() => {
      searchShows(trimmed)
        .then(setSearchResults)
        .catch(() => setSearchResults([]));
    }, 350);
    return () => clearTimeout(timeout);
  }, [query]);

  const shows = useMemo(() => {
    return searchResults !== null ? searchResults : allShows;
  }, [searchResults, allShows]);

  return (
    <section className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
      <div className="mb-10 flex flex-col gap-4 text-center">
        <h1
          className="text-4xl text-cream sm:text-5xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Browse the catalogue
        </h1>
        <SearchBar value={query} onChange={setQuery} />
      </div>

      {status === "loading" && (
        <p className="py-20 text-center text-muted">Loading shows…</p>
      )}

      {status === "error" && (
        <p className="py-20 text-center text-muted">
          Something went wrong loading the catalogue. Try refreshing.
        </p>
      )}

      {status === "ready" && shows.length === 0 && (
        <p className="py-20 text-center text-muted">
          No shows match “{query}”. Try another title.
        </p>
      )}

      {status === "ready" && shows.length > 0 && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shows.map((show) => (
            <MovieCard key={show.id} show={show} onSelect={setSelectedId} />
          ))}
        </div>
      )}

      {selectedId ? (
        <MovieModal showId={selectedId} onClose={() => setSelectedId(null)} />
      ) : null}
    </section>
  );
}
