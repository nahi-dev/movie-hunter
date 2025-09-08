import React from "react";
import { useFetch } from "@/hooks/useFetch";
import Card from "./Card";

const MovieGrid = ({ apiBase, queryTerm = "" }) => {
  const apiKey = process.env.NEXT_PUBLIC_NOW_PLAYING_API_KEY;
  const {
    data: movies,
    loading,
    error,
  } = useFetch(
    // Build the full API URL by combining the base URL, API key, search query, language, and page number.
    // encodeURIComponent ensures the query term is URL-safe
    `${apiBase}?api_key=${apiKey}&query=${encodeURIComponent(
      queryTerm
    )}&language=en-US&page=1`
  );

  if (loading) return <div className="text-center p-8">Loading...</div>;
  if (error)
    return <div className="text-center p-8 text-red-500">Error: {error}</div>;
  return (
    <main className="grid grid-cols-[repeat(auto-fit,minmax(300px,375px))] justify-center gap-4 p-4 max-w-7xl mx-auto">
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </main>
  );
};
export default MovieGrid;
