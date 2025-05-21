import React, { useState, useEffect } from "react";
import { Link } from "@remix-run/react";
import Logo from "../../Assets/Images/Plexia-logo-2.png";

function HeaderVedu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsScrolled(currentScrollPos > 0);

      // Make header visible on scroll up
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <section
      className={`header-section ${
        isScrolled ? "fixed" : "relative"
      }  w-full top-0 z-50 transition-all duration-300 ${
        !visible ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <header
        className={`transition-all duration-300 ${
          isScrolled ? "bg-[#121212]/90 backdrop-blur-sm" : "bg-black"
        } text-white py-4 pb-3 px-5`}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            className=" text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
            )}
          </button>

          {/* Logo and Brand */}
          <div className="flex items-center gap-2">
            <div className="w-[100px] mt-[-5px] ">
              <a href="/">
                <img src={Logo} alt="Vedu Logo" className="w-full" />
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8">
            <Link
              to="/recent"
              className="text-gray-400 hover:text-white uppercase text-sm font-medium"
            >
              SERIES
            </Link>
            <Link
              to="/movies"
              className="text-yellow-500 uppercase text-sm font-medium"
            >
              MOVIES
            </Link>
            <Link
              to="/series"
              className="text-gray-400 hover:text-white uppercase text-sm font-medium"
            >
              UPCOMMING
            </Link>
            <Link
              to="/tv-show"
              className="text-gray-400 hover:text-white uppercase text-sm font-medium"
            >
              TURKISH DUBBED
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            {/* Notification Bell */}
            <button className="text-white">
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
            </button>

            {/* Download Icon */}
            <button className="text-white block">
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
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`hidden md:block bottom_menu ${
          isScrolled ? "bg-[#121212]/90 backdrop-blur-sm" : "bg-transparent"
        } text-white pt-0 py-4 px-5`}
      >
        <div className="nav_wrapper overflow-x-auto flex justify-between md:justify-center items-center gap-2 ">
          <div className="nav_item " style={{ color: "#f9a829" }}>
            <a href="">Series</a>
          </div>
          <div className="nav_item">
            <a href="">Movies</a>
          </div>
          <div className="nav_item">
            <a href="">Upcoming</a>
          </div>
          <div className="nav_item">
            <a href="">Turkish Dubbed</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderVedu;
