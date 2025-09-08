import React from "react";
import { useFetch } from "@/hooks/useFetch";
import Card from "./Card";
import { useSearchParams } from "next/navigation";
const MovieGrid = ({ apiBase, queryTerm = "" }) => {
  const apiKey = process.env.NEXT_PUBLIC_NOW_PLAYING_API_KEY;

  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("search") || "";

  // const apiUrl = `${apiBase}?api_key=${apiKey}&query=${encodeURIComponent(
  //   queryTerm
  // )}&language=en-US&page=1`;
  // // If we have a search query, use the search endpoint and add the query
  // if (queryTerm) {
  //   // Check if apiBase is already a search endpoint or needs to be changed
  //   if (apiBase.includes("/search/movie")) {
  //     apiUrl = `${apiBase}?api_key=${apiKey}&query=${encodeURIComponent(
  //       queryTerm
  //     )}&language=en-US&page=1`;
  //   } else {
  //     // If not a search endpoint, you might need to use the search endpoint
  //     apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
  //       queryTerm
  //     )}&language=en-US&page=1`;
  //   }
  // }
  let apiUrl;
  if (searchTerm) {
    apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
      searchTerm
    )}&language=en-US&page=1`;
  } else {
    apiUrl = `${apiBase}?api_key=${apiKey}&language=en-US&page=1`;
  }

  const {
    data: movies,
    loading,
    error,
  } = useFetch(
    // Build the full API URL by combining the base URL, API key, search query, language, and page number.
    // encodeURIComponent ensures the query term is URL-safe
    apiUrl
  );

  if (loading) return <div className="text-center p-8">Loading...</div>;
  if (error)
    return <div className="text-center p-8 text-red-500">Error: {error}</div>;
  if (movies?.length === 0)
    return <div className="text-center p-8">No movies found</div>;
  return (
    <main className="grid grid-cols-[repeat(auto-fit,minmax(300px,375px))] justify-center gap-4 p-4 max-w-7xl mx-auto">
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </main>
  );
};
export default MovieGrid;
