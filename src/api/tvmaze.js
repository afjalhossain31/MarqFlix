const BASE_URL = "https://api.tvmaze.com";

/**
 * Strips HTML tags TVMaze embeds in its summary fields.
 */
export function stripHtml(html) {
  if (!html) return "";
  return html.replace(/<[^>]+>/g, "");
}

/**
 * Fetches the full show catalogue.
 * TVMaze's /shows endpoint is paginated internally by id ranges of ~250,
 * so we fetch a couple of pages to give the grid a healthy amount of content.
 */
export async function fetchAllShows(pages = 3) {
  const requests = Array.from({ length: pages }, (_, i) =>
    fetch(`${BASE_URL}/shows?page=${i}`).then((res) => {
      if (!res.ok) throw new Error(`Failed to load shows (page ${i})`);
      return res.json();
    })
  );
  const results = await Promise.all(requests);
  return results.flat();
}

/**
 * Searches shows by title. TVMaze wraps each hit in { score, show }.
 */
export async function searchShows(query) {
  const res = await fetch(
    `${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`
  );
  if (!res.ok) throw new Error("Search failed");
  const data = await res.json();
  return data.map((entry) => entry.show);
}

/**
 * Fetches one show plus its cast, used for the details modal.
 */
export async function fetchShowDetails(id) {
  const res = await fetch(`${BASE_URL}/shows/${id}?embed=cast`);
  if (!res.ok) throw new Error("Failed to load show details");
  return res.json();
}
