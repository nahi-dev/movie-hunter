"use client";
import usePageTitle from "@/hooks/usePageTitle";
import React from "react";
import MovieGrid from "@/components/MovieGrid";

const Upcoming = () => {
  const apiBase = "https://api.themoviedb.org/3/movie/upcoming";
  usePageTitle("Upcoming Movies | moviehunter");
  return <MovieGrid apiBase={apiBase} />;
};

export default Upcoming;
