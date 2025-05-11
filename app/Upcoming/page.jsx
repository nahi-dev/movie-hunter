"use client";
import React from "react";
import MovieGrid from "@/components/MovieGrid";

const Upcoming = () => {
  const apiBase = "https://api.themoviedb.org/3/movie/upcoming";
  return <MovieGrid apiBase={apiBase} />;
};

export default Upcoming;
