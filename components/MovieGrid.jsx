"use client";
import React from "react";
import { useFetch } from "@/hooks/useFetch";
import Card from "./Card";
import { useSearchParams } from "next/navigation";

const MovieGrid = ({ apiBase }) => {
  const apiKey = process.env.NEXT_PUBLIC_NOW_PLAYING_API_KEY;
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("search") || "";

  // Build API URL based on search term
  let apiUrl;
  if (searchTerm) {
    apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
      searchTerm
    )}&language=en-US&page=1`;
  } else {
    apiUrl = `${apiBase}?api_key=${apiKey}&language=en-US&page=1`;
  }

  const { data: movies, loading, error } = useFetch(apiUrl);

  if (loading) return <div className="text-center p-8">Loading...</div>;
  if (error) {
    console.error("API Error:", error);
    return <div className="text-center p-8 text-red-500">Error: {error}</div>;
  }

  if (movies?.length === 0) {
    return (
      <div className="text-center p-8">
        {searchTerm
          ? `No movies found for "${searchTerm}"`
          : "No movies available"}
      </div>
    );
  }

  return (
    <main className="grid grid-cols-[repeat(auto-fit,minmax(300px,375px))] justify-center gap-4 p-4 max-w-7xl mx-auto">
      {movies?.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </main>
  );
};

// ADD THESE LINES AT THE BOTTOM OF THE FILE:
export default MovieGrid;

// Create a new suspended version that wraps MovieGrid in Suspense
export function MovieGridSuspended({ apiBase }) {
  return (
    <React.Suspense
      fallback={<div className="text-center p-8">Loading search...</div>}
    >
      <MovieGrid apiBase={apiBase} />
    </React.Suspense>
  );
}
