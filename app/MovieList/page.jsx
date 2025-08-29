"use client";

import MovieGrid from "@/components/MovieGrid";
import usePageTitle from "@/hooks/usePageTitle";

const MovieList = () => {
  const apiBase = "https://api.themoviedb.org/3/movie/now_playing";
  usePageTitle("Now Playing Movies | moviehunter");
  // The MovieGrid component will handle fetching and displaying the movies
  return <MovieGrid apiBase={apiBase} />;
};

export default MovieList;
