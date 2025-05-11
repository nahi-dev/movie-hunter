"use client";
import React from "react";
import MovieGrid from "@/components/MovieGrid";
const TopMovie = () => {
  const apiBase = "https://api.themoviedb.org/3/movie/top_rated";
  return <MovieGrid apiBase={apiBase} />;
};

export default TopMovie;
