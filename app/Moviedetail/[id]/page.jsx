"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import NotFound from "@/app/PageNotFound/page";
import usePageTitle from "@/hooks/usePageTitle";

const page = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const [notFound, setNotFound] = useState(false);

  usePageTitle(`${data.original_title} | moviehunter`);

  const image = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;

  const apiKey = process.env.NEXT_PUBLIC_NOW_PLAYING_API_KEY;

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}`
        );
        const json = await response.json();

        if (json.success === false) {
          setNotFound(true);
          return;
        }

        setData(json);
      } catch (error) {
        setNotFound(true);
      }
    }
    fetchMovie();
  }, [params.id]);

  if (notFound) {
    return <NotFound />;
  }

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

        <div className="flex items-center">
          <svg
            className="w-4 h-4 text-yellow-300 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <p className="ms-2  text-gray-900 dark:text-white">
            {data.vote_average}
          </p>
          <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
          <span className=" text-gray-900   dark:text-white">
            {data.reviews} reviews
          </span>
        </div>
        <p className="my-4 flex items-center gap-2">
          <span className="font-bold mr-0.5">Runtime:</span>
          <span>{data.runtime} min.</span>
        </p>
        <p className="my-4 flex items-center gap-2">
          <span className="font-bold mr-0.5">Budget:</span>
          <span>{data.budget}</span>
        </p>
        <p className="my-4 flex items-center gap-2">
          <span className="font-bold mr-0.5">Revenue:</span>
          <span>{data.revenue}</span>
        </p>
        <p className="my-4 flex items-center gap-2">
          <span className="font-bold mr-0.5">Release Date:</span>
          <span>{data.release_date}</span>
        </p>
        <p className="my-4 flex items-center gap-2">
          <span className="font-bold mr-0.5">IMDB Code:</span>
          <a
            href={`https://www.imdb.com/title/${data.imdb_id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.imdb_id}
          </a>
        </p>
      </div>
    </section>
  );
};
export default page;
