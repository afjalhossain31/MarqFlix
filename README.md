# 🎬 MarqFlix — Movie Explorer

A responsive Movie Explorer built with React, Tailwind CSS, and the [TVMaze API](https://www.tvmaze.com/api). Browse shows, search by title, and open a details modal with rating, genres, cast, and synopsis.

## Features

- **Home page** — navbar, hero banner with CTA, footer.
- **Movie listing page** — search bar that queries TVMaze live, responsive grid (1 col mobile → 4 col desktop).
- **Movie cards** — poster, title, year, rating, "See Details" button.
- **Details modal** — backdrop image, rating, release date, genres, synopsis, cast; closes via ✕ button, Escape key, or backdrop click.

## Tech stack

- React 19 + Vite
- React Router
- Tailwind CSS v4
- TVMaze REST API (`/shows`, `/search/shows`, `/shows/:id?embed=cast`)

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
npm run preview  # preview the production build
```

## Deploying

This is a static Vite build, so it deploys as-is to Vercel, Netlify, or GitHub Pages:

- **Vercel / Netlify**: import the repo, build command `npm run build`, output directory `dist`.
- **GitHub Pages**: run `npm run build`, then publish the `dist/` folder (e.g. with the `gh-pages` package or Pages' "deploy from a branch" pointed at `dist`).

## Project structure

```
src/
  api/tvmaze.js        # fetch helpers for the TVMaze API
  components/          # Navbar, Footer, Hero, MovieCard, SearchBar, MovieModal
  pages/                # Home, Movies
  App.jsx, main.jsx     # routing + entry point
```
