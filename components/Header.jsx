"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
// import MovieDetail from "@/app/MovieDetail/page";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  //
  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem("darkMode") || false);
    setDarkMode(savedDarkMode);
  }, []);

  useEffect(() => {
    // Update localStorage and class when darkMode changes
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  const pathName = usePathname();
  const activeClass =
    "block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500";
  const inActiveClass =
    "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white";
  const [hidden, setHidden] = useState(true);
  return (
    <header>
      <nav className="bg-white border border-gray-200 dark:bg-gray-900 dark:border-none">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {/* <Image
              src=""
              className="h-8"
              alt="Flowbite Logo"
              width={32}
              height={32}
            /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8   text-blue-500 dark:text-white"
              aria-label="Logo"
            >
              <path d="M18 11c0-.959-.68-1.761-1.581-1.954C16.779 8.445 17 7.75 17 7c0-2.206-1.794-4-4-4-1.517 0-2.821.857-3.5 2.104C8.821 3.857 7.517 3 6 3 3.794 3 2 4.794 2 7c0 .902.312 1.727.817 2.396A1.994 1.994 0 0 0 2 11v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-2.638l4 2v-7l-4 2V11zm-5-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM6 5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM4 19v-8h12l.002 8H4z" />
            </svg>

            <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-500 dark:text-white">
              moviehunter
            </span>
          </Link>

          <div id="mobile-nav" className="flex md:order-2">
            {/* i want to include darkmode button here and svg that changes moon and sun when clicked i don't need the fuctionality for now */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-500 border border-gray-200 dark:text-gray-400 dark:border dark:border-gray-700 mr-[20px]  hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            >
              {darkMode ? (
                // Moon Icon
                // <svg
                //   xmlns="http://www.w3.org/2000/svg"
                //   fill="currentColor"
                //   viewBox="0 0 20 20"
                //   className="w-5 h-5"
                // >
                //   <path
                //     fillRule="evenodd"
                //     d="M10 4.5a.75.75 0 01.75.75v.25a.75.75 0 01-1.5 0V5.25A.75.75 0 0110 4.5zm4.95 1.85a.75.75 0 011.06 1.06l-.176.176a.75.75 0 11-1.06-1.06l.176-.176zM15.5 10a.75.75 0 01.75.75h.25a.75.75 0 010 1.5h-.25a.75.75 0 01-.75-.75v-.25a.75.75 0 011.5 0v.25A.75.75 0 0115.5 10zM10 15.5a.75.75 0 01.75.75v.25a.75.75 0 01-1.5 0v-.25A.75.75 0 0110 15.5zm-4.95-1.85a.75.75 0 01-1.06-1.06l.176-.176a.75.75 0 111.06 1.06l-.176.176zM4.5 10a.75.75 0 01-.75-.75H3.5a.75.75 0 010-1.5h.25A.75.75 0 014.5 10zm.95-4.95a.75.75 0 00-1.06 1.06l.176.176a.75.75 0 101.06-1.06l-.176-.176z"
                //     clipRule="evenodd"
                //   />
                // </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              ) : (
                // Sun Icon

                // <svg
                //   xmlns="http://www.w3.org/2000/svg"
                //   fill="currentColor"
                //   viewBox="0 0 20 20"
                //   className="w-5 h-5"
                // >
                //   <path d="M17.293 13.293a8 8 0 01-10.586-10.586A8 8 0 1017.293 13.293z" />
                // </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>

            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
              onClick={() => setHidden(!hidden)}
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>

            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>

            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
              onClick={() => setHidden(!hidden)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            id="nav-links"
            className={`${
              hidden ? "hidden" : ""
            } items-center justify-between  w-full md:flex md:w-auto md:order-1`}
            // id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>

            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  className={pathName === "/" ? activeClass : inActiveClass}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/Popular"
                  className={
                    pathName === "/Popular" ? activeClass : inActiveClass
                  }
                >
                  Popular
                </Link>
              </li>
              <li>
                <Link
                  href="/TopMovie"
                  className={
                    pathName === "/TopMovie" ? activeClass : inActiveClass
                  }
                >
                  Top Rated
                </Link>
              </li>
              <li>
                <Link
                  href="/Upcoming"
                  className={
                    pathName === "/Upcoming" ? activeClass : inActiveClass
                  }
                >
                  Upcoming
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
