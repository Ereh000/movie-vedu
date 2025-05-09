import React, { useState, useEffect } from "react";
import { Link } from "@remix-run/react";
import Logo from "../../Assets/Images/vecteezy_netflix-mobile-application-logo_17396814.png";
import { TMDB_API_KEY, TMDB_IMAGE_BASE_URL } from "../../utils/tmdb.config";

export default function MainBanner() {
  const [movies, setMovies] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Add these touch handler functions after the existing navigation functions
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) < minSwipeDistance) return;

    if (distance > 0) {
      // Swiped left
      goToNextSlide();
    } else {
      // Swiped right
      goToPrevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
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
        console.log("top_rated", data)
        // Only take the first 4 movies
        setMovies(
          data.results.slice(0, 4).map((movie) => ({
            id: movie.id,
            title: movie.title.toUpperCase(),
            description: movie.overview,
            image: `${TMDB_IMAGE_BASE_URL}/original${movie.backdrop_path}`,
            logo: Logo,
            rating: movie.adult ? "18+" : "13+",
            genre: movie.genre_ids.join(", "), // You might want to map these IDs to actual genre names
            year: new Date(movie.release_date).getFullYear(),
          }))
        );
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovieDetails();
  }, []);

  // Auto-play functionality
  useEffect(() => {
    let slideInterval;

    if (isAutoPlaying && movies.length > 0) {
      slideInterval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % movies.length);
      }, 5000);
    }

    return () => {
      if (slideInterval) clearInterval(slideInterval);
    };
  }, [isAutoPlaying, movies.length]);

  // Navigation functions
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % movies.length);
    setIsAutoPlaying(false);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + movies.length) % movies.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  if (movies.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[90vh] bg-black">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

  const currentBanner = movies[currentSlide];

  return (
    <div
      className="relative w-full h-[100vh] md:h-[98vh] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${currentBanner.image})`,
          opacity: 1,
        }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div> */}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent top-0 left-0 right-0 bottom-0 h-42"></div>

      {/* Content Container */}
      <div className="relative h-full mx-auto px-4 md:px-8 lg:px-16 flex flex-col justify-center">
        <div className="max-w-2xl">
          {/* Logo */}
          <div className="mb-4">
            <img src={Logo} alt="Network Logo" className="h-8" />
          </div>

          <h1 className="text-3xl lg:text-6xl font-bold text-white mb-4 tracking-wider">
            {currentBanner.title}
          </h1>

          <div className="flex items-center space-x-2 md:space-x-4 mb-4 text-[12px] md:text-sm text-white/80">
            <span className="bg-red-600 text-white px-2 py-0.5 rounded">
              {currentBanner.rating}
            </span>
            <span>{currentBanner.year}</span>
            <span>{currentBanner.genre}</span>
          </div>

          <p className="text-white/90 text-sm md:text-md lg:text-lg mb-6 md:mb-8 line-clamp-3">
            {currentBanner.description}
          </p>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <Link to={`/movie/details?id=${currentBanner.id}`}>
              <button className="bg-white text-black flex-1 ps-3 pe-6 px-4 md:px-8 py-2 md:py-3 rounded-md flex items-center font-medium hover:bg-white/90 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Play
              </button>
            </Link>
            <button className="bg-gray-600/80 text-white  px-4 ps-3 md:px-8 py-2 md:py-3  rounded-md flex items-center font-medium hover:bg-gray-600 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2h2a1 1 0 100-2H9z"
                  clipRule="evenodd"
                />
              </svg>
              More Info
            </button>
          </div>
        </div>
      </div>

      {/* Slideshow Navigation */}
      <div className="absolute bottom-4 right-[46%] translate-x-16 lg:translate-x-0 lg:right-8 flex items-center space-x-2">
        <button
          onClick={goToPrevSlide}
          className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          > 
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {movies.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNextSlide}
          className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
