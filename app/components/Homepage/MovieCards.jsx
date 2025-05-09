import React, { useRef, useState, useEffect } from "react";
import { Link } from "@remix-run/react";
import Logo from "../../Assets/Images/vecteezy_netflix-mobile-application-logo_17396814.png";
import {
  TMDB_API_KEY,
  TMDB_IMAGE_BASE_URL,
} from "../../utils/tmdb.config";

export default function MovieCards({ title, category }) {
  const sliderRef = useRef(null);
  const [movies, setMovies] = useState([]);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        if (category === "now_playing") {
          const url =
            "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
          const response = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${TMDB_API_KEY}`,
            },
          });
          const data = await response.json();
          console.log("now_playing", data);
          setMovies(data.results);
        } else if (category === "popular") {
          const url =
            "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
          const response = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${TMDB_API_KEY}`,
            },
          });
          const data = await response.json();
          console.log("popular", data);
          setMovies(data.results);
        } else if (category === "top_rated") {
          const url =
            "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
          const response = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${TMDB_API_KEY}`,
            },
          });
          const data = await response.json();
          console.log("data", data);
          setMovies(data.results);
        } else if (category === "up_comming") {
          const url =
            "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
          const response = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${TMDB_API_KEY}`,
            },
          });
          const data = await response.json();
          console.log("up_comming", data);
          setMovies(data.results);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [category]);

  console.log("movies", movies);

  const checkArrows = () => {
    if (!sliderRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 6);
  };

  useEffect(() => {
    checkArrows();
    window.addEventListener("resize", checkArrows);
    return () => window.removeEventListener("resize", checkArrows);
  }, []);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    const { clientWidth } = sliderRef.current;
    const scrollAmount =
      direction === "left" ? -clientWidth / 2 : clientWidth / 2;

    sliderRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });

    setTimeout(checkArrows, 500);
  };

  const handleMouseDown = (e) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchStart = (e) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
    checkArrows();
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !sliderRef.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
    checkArrows();
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleScroll = () => {
    checkArrows();
  };

  return (
    <div className="movie-row bg-transparent relative py-10 pb-0 px-4 md:px-8 lg:px-16">
      <h2 className="text-md md:text-[1.5rem] font-bold text-white mb-2 md:mb-4">
        {title}
      </h2>

      <div className="relative">
        {showLeftArrow && (
          <button
            className="absolute left-[-1rem] top-1/2 z-10 bg-black/70 p-2 px-1 lg:p-4 rounded-r-md text-white hover:bg-black/70 transition-all transform -translate-y-1/2"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        <div
          ref={sliderRef}
          className={`flex space-x-3 overflow-x-auto scrollbar-hide ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleDragEnd}
          onScroll={handleScroll}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {loading
            ? // Skeleton loading cards
              Array(10)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={`skeleton-${index}`}
                    className="flex-none w-[110px] md:w-[200px] relative"
                  >
                    <div className="relative overflow-hidden rounded-[4px] bg-gray-700 animate-pulse">
                      <div className="w-full h-auto aspect-[1/1.4]"></div>
                      <div className="absolute top-2 left-2">
                        <div className="h-5 w-12 bg-gray-600 rounded"></div>
                      </div>
                      <div className="absolute bottom-0 left-0 bg-gray-600 h-5 w-12"></div>
                    </div>
                  </div>
                ))
            : movies.map((movie) => (
                <div
                  key={movie.id}
                  className="flex-none w-[110px] md:w-[200px] relative group"
                >
                  <Link to={`/movie/details?id=${movie.id}`} className="block">
                    <div className="relative overflow-hidden rounded-[4px] transition-transform duration-300 group-hover:shadow-xl">
                      <img
                        src={`${TMDB_IMAGE_BASE_URL}/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full h-auto aspect-[1/1.4] object-cover duration-300 hover:scale-110"
                        draggable="false"
                      />

                      <div className="absolute top-2 left-2">
                        <img
                          src={Logo}
                          alt="Netflix"
                          className="h-5"
                          draggable="false"
                        />
                      </div>

                      <div className="absolute bottom-0 left-0 bg-red-600 text-white text-[9px] md:text-xs py-[3px] px-[6px]">
                        {movie.vote_average.toFixed(1)} ⭐
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
        </div>

        {showRightArrow && (
          <button
            className="absolute right-[-1rem] top-1/2 z-10 bg-black/70 p-2 px-1 lg:p-4 rounded-l-md text-white hover:bg-black/80 transition-all transform -translate-y-1/2"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
