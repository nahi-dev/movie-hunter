"use client";
import MovieGrid from "@/components/MovieGrid";
import usePageTitle from "@/hooks/usePageTitle";
const Popular = () => {
  const apiBase = "https://api.themoviedb.org/3/movie/popular";
  usePageTitle("Popular Movies | moviehunter");
  return <MovieGrid apiBase={apiBase} />;
};
export default Popular;
