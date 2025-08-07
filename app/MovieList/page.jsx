"use client";
import MovieGrid from "@/components/MovieGrid";

const MovieList = () => {
  
  const apiBase = "https://api.themoviedb.org/3/movie/now_playing";
  return <MovieGrid apiBase={apiBase}  />;
};

export default MovieList;
