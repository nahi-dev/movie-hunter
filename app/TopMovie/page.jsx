"use client";
import React from "react";
import MovieGrid from "@/components/MovieGrid";
import usePageTitle from "@/hooks/usePageTitle";

const TopMovie = () => {
  const apiBase = "https://api.themoviedb.org/3/movie/top_rated";
  usePageTitle("Top Rated Movies | moviehunter");
  return <MovieGrid apiBase={apiBase} />;
};

export default TopMovie;
