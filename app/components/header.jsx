import React, { useState, useEffect } from "react";
import { Link } from "@remix-run/react";
import Logo from "../Assets/Images/plexia-logo-png.png"

export default function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [bg, setBg] = useState("bg-tranparent");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
      setBg("backdrop-blur-sm bg-black/60 shadow-md");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`${bg} text-white fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto px-4 sm-px-6 lg:px-16 md:px-12 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center w-[100px] mt-[-6px] ">
          <Link to="/" className="text-2xl font-bold text-red-500">
            <img className="w-100" src={Logo} alt="" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-red-400 transition-colors">
            Home
          </Link>
          <Link
            to="/tv-series"
            className="hover:text-red-400 transition-colors"
          >
            TV Series
          </Link>
          <Link to="/movies" className="hover:text-red-400 transition-colors">
            Movies
          </Link>
          <Link to="/my-list" className="hover:text-red-400 transition-colors">
            My List
          </Link>
        </nav>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <button className="hover:text-red-400">
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
          </button>
          <button className="hover:text-red-400 relative">
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
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full h-4 w-4 flex items-center justify-center">
              2
            </span>
          </button>
          <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center">
            <span className="text-sm font-bold">A</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden hover:text-red-400">
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
