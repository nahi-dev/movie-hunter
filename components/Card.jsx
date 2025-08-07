import React from "react";
import Link from "next/link";
// Card component receives a single movie object as a prop
const Card = ({ movie }) => {
  // Destructure important movie details from the movie object
  const { id, original_title, overview, poster_path } = movie;
  // Construct full image URL using the poster_path provided by the movie API
  const image = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  return (
    <main className="min-h-90vh max-w-7xl mx-auto p-3 ">
      <section className="max-w-7xl mx-auto py-7">
        <div>
          <div className="max-w-sm min-h-[135vh] overflow-hidden  bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            {/* Clicking the image will take user to movie detail page using the movie id */}
            <Link href={`/Moviedetail/${id}`}>
              <img className="rounded-t-lg" src={image} alt="" />
            </Link>
            <div className="p-5">
              <Link href={`/Moviedetail/${id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {original_title}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {overview}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Card;
