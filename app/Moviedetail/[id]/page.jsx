"use client";
import React from "react";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
const page = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const image = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;

  const apiKey = process.env.NEXT_PUBLIC_NOW_PLAYING_API_KEY;
  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}`
      );
      const json = await response.json();
      setData(json);
      console.log(json);
    }
    fetchMovie();
  }, []);
  return (
    <section className="flex justify-around flex-wrap py-5">
      <div>
        <img
          className="rounded-lg max-w-sm"
          
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt={`${data.original_title} Poster`}
        />
      </div>
      <div className="max-w-2xl text-grey-800 dark:text-white">
        <h1 className="text-4xl font-bold my-3 text-center lg:text-left">
          {data.original_title}
        </h1>
        <p className="my-4">{data.overview}</p>
        <p className="my-7 flex flex-wrap gap-2">
          {data.genres?.map((genre) => (
            <span
              className="border border-gray-300 dark:border-gray-600 rounded mr-2 p-2"
              key={genre.id}
            >
              {genre.name}{" "}
            </span>
          ))}
        </p>
        <p>{data.release_date}</p>

        <p>{data.runtime} minutes</p>
        <p>{data.tagline}</p>
        <p>{data.status}</p>
        <p>{data.popularity}</p>
      </div>
    </section>
  );
};
export default page;
