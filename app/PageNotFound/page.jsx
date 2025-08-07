import React from "react";
import Image from "next/image";
import Link from "next/link";
const NotFound = () => {
  return (
    <section className=" dark:bg-gray-800 text-black dark:text-white flex flex-col items-center justify-center px-4   ">
      <div className="flex flex-col text-center ">
        <h1 className="text-4xl font-bold mb-6">404 - Oops!</h1>

        <Image
          src="/image/pagenotfoundimage.png"
          alt="404 Page not found"
          className="max-w-lg rounded "
          width={300}
          height={400}
        />
      </div>
      <div>
        <Link href="/">
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Go Back Home
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
