import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div>
      <footer className="bg-white   dark:bg-gray-800">
        <div className="max-w-7xl mx-auto  p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <Link href="/" className="hover:underline">
              MovieHunter
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                href="#"
                target="_blank"
                className="hover:underline me-4 md:me-6 text-base"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                className="hover:underline me-4 md:me-6 text-base"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                className="hover:underline me-4 md:me-6 text-base"
              >
                Youtube
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="hover:underline text-base">
                Github
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
