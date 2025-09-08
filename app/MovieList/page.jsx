import { MovieGridSuspended } from "@/components/MovieGrid"; // ← CHANGE IMPORT

const MovieList = () => {
  const apiBase = "https://api.themoviedb.org/3/movie/now_playing";

  return (
    <div>
      <MovieGridSuspended apiBase={apiBase} /> {/* ← USE SUSPENDED VERSION */}
    </div>
  );
};

export default MovieList;
