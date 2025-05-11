"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/Card";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_NOW_PLAYING_API_KEY;
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
        );

        if (!response.ok) throw new Error("Failed to fetch movies");

        const data = await response.json();
        setMovies(data.results || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

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

export default MovieList;
