"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import MovieGrid from "@/components/MovieGrid";

const Search = () => {
  const searchParams = useSearchParams();

  const queryTerm = searchParams.get("q") || "";
  console.log("Query term:", queryTerm);

  const apiBase = "https://api.themoviedb.org/3/search/movie";
  return <MovieGrid apiBase={apiBase} queryTerm={queryTerm} />;
};
export default Search;
