import React from "react";
import { Link, useLocation } from "@remix-run/react";

export default function Footer() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 z-50">
      <div className="flex justify-around items-center h-16">
        {/* Home */}
        <Link
          to="/"
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive("/") ? "text-yellow-500" : "text-gray-400"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className="text-xs mt-1">Home</span>
        </Link>

        {/* Collection */}
        <Link
          to="/movie/collection"
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive("/collection") ? "text-yellow-500" : "text-gray-400"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          <span className="text-xs mt-1">Collection</span>
        </Link>

        {/* Menu Button (Center) */}
        <div
        //   to="/menu"
          className="flex flex-col items-center justify-center w-full h-full relative"
        >
          <div className="absolute -top-5 bg-gray-800 rounded-full p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </div>
        </div>

        {/* Search */}
        <Link
          to="/search"
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive("/search") ? "text-yellow-500" : "text-gray-400"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span className="text-xs mt-1">Search</span>
        </Link>

        {/* Setting */}
        <Link
          to="/setting"
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive("/setting") ? "text-yellow-500" : "text-gray-400"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="text-xs mt-1">Setting</span>
        </Link>
      </div>

      {/* Add padding to the bottom of the page content to prevent footer from covering content */}
      <style jsx global>{`
        body {
          padding-bottom: 4rem;
        }
      `}</style>
    </footer>
  );
}
