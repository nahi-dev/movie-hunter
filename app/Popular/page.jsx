"use client";
import MovieGrid from "@/components/MovieGrid";

const Popular = () => {
  
  const apiBase = "https://api.themoviedb.org/3/movie/popular";
  return <MovieGrid apiBase={apiBase}  />;
};
export default Popular;
