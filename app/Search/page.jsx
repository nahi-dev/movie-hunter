"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import MovieGrid from "@/components/MovieGrid";
import usePageTitle from "@/hooks/usePageTitle";
const Search = () => {
  const searchParams = useSearchParams();

  const queryTerm = searchParams.get("q") || "";
  console.log("Query term:", queryTerm);

  const apiBase = "https://api.themoviedb.org/3/search/movie";
  usePageTitle(
    query ? `Search: ${query} | moviehunter` : "Search | moviehunter"
  );
  return <MovieGrid apiBase={apiBase} queryTerm={queryTerm} />;
};
export default Search;
