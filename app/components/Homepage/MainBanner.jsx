import React, { useState, useEffect } from "react";
import { Link } from "@remix-run/react";
import Logo from "../../Assets/Images/vecteezy_netflix-mobile-application-logo_17396814.png";

export default function MainBanner() {
  // Sample data for the slideshow
  const bannerData = [
    {
      id: 1,
      title: "HAVOC",
      description:
        "When a drug heist swerves lethally out of control, a jaded cop fights his way through a corrupt city's criminal underworld to save a politician's son.",
      image: "https://wallpapercave.com/wp/wp13327075.jpg",
      logo: Logo,
      rating: "18+",
      genre: "Action, Thriller",
      year: "2023",
    },
    {
      id: 2,
      title: "STRANGER THINGS",
      description:
        "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
      image: "https://wallpapercave.com/uwp/uwp4311830.png",
      logo: "/images/logos/netflix.png",
      rating: "16+",
      genre: "Drama, Fantasy, Horror",
      year: "2016",
    },
    {
      id: 3,
      title: "THE WITCHER",
      description:
        "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
      image: "https://wallpapercave.com/wp/wp13798797.jpg",
      logo: "/images/logos/netflix.png",
      rating: "18+",
      genre: "Action, Adventure, Fantasy",
      year: "2019",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    let slideInterval;

    if (isAutoPlaying) {
      slideInterval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % bannerData.length);
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (slideInterval) clearInterval(slideInterval);
    };
  }, [isAutoPlaying, bannerData.length]);

  // Navigation functions
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerData.length);
    setIsAutoPlaying(false);
  };

  const goToPrevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + bannerData.length) % bannerData.length
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentBanner = bannerData[currentSlide];

  return (
    <div className="relative w-full h-[90vh] md:h-[98vh] overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${currentBanner.image})`,
          opacity: 1,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full mx-auto px-4 md:px-8 lg:px-16 flex flex-col justify-center">
        <div className="max-w-2xl">
          {/* Logo */}
          <div className="mb-4">
            <img src={Logo} alt="Network Logo" className="h-8" />
          </div>

          {/* Title */}
          <h1 className="text-3xl lg:text-6xl font-bold text-white mb-4 tracking-wider">
            {currentBanner.title}
          </h1>

          {/* Info Row */}
          <div className="flex items-center space-x-2 md:space-x-4 mb-4 text-[12px] md:text-sm text-white/80">
            <span className="bg-red-600 text-white px-2 py-0.5 rounded">
              {currentBanner.rating}
            </span>
            <span>{currentBanner.year}</span>
            <span>{currentBanner.genre}</span>
          </div>

          {/* Description */}
          <p className="text-white/90 text-sm md:text-md lg:text-lg mb-6 md:mb-8 line-clamp-3">
            {currentBanner.description}
          </p>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <Link to={`/movie/details?id=4`}>
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
      <div className="absolute bottom-4 right-[50%] translate-x-16 lg:translate-x-0 lg:right-8 flex items-center space-x-2">
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
          {bannerData.map((_, index) => (
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
