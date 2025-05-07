import React, { useRef, useState, useEffect } from "react";
import { Link } from "@remix-run/react";
import Logo from "../../Assets/Images/vecteezy_netflix-mobile-application-logo_17396814.png"

export default function MovieCards({ title, movies }) {
  const sliderRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Sample movie data (replace with your actual data)
  const sampleMovies = [
    {
      id: 1,
      title: "Territorial",
      image: "https://wallpapercave.com/w400/wp13899414.jpg",
      badge: "Recently Added"
    },
    {
      id: 2,
      title: "Mark Twain Prize",
      image: "https://wallpapercave.com/w400/wp10223232.jpg",
      badge: "Recently Added"
    },
    {
      id: 3,
      title: "News",
      image: "https://wallpapercave.com/w400/wp11023565.jpg",
      badge: "Recently Added"
    },
    {
      id: 4,
      title: "Havoc",
      image: "https://wallpapercave.com/w400/wp9335385.jpg",
      badge: "Recently Added"
    },
    {
      id: 5,
      title: "Resident Playbook",
      image: "https://wallpapercave.com/w400/wp12198183.jpg",
      badge: "New Dubbing"
    },
    {
      id: 6,
      title: "Khakee",
      image: "https://wallpapercave.com/w400/wp13899414.jpg",
      badge: "Recently Added"
    },
    {
      id: 2,
      title: "Mark Twain Prize",
      image: "https://wallpapercave.com/w400/wp10223232.jpg",
      badge: "Recently Added"
    },
    {
      id: 3,
      title: "News",
      image: "https://wallpapercave.com/w400/wp11023565.jpg",
      badge: "Recently Added"
    },
    {
      id: 4,
      title: "Havoc",
      image: "https://wallpapercave.com/w400/wp9335385.jpg",
      badge: "Recently Added"
    },
    {
      id: 5,
      title: "Resident Playbook",
      image: "https://wallpapercave.com/w400/wp12198183.jpg",
      badge: "New Dubbing"
    },
    {
      id: 6,
      title: "Khakee",
      image: "https://wallpapercave.com/w400/wp13899414.jpg",
      badge: "Recently Added"
    },
  ];

  const moviesToRender = movies || sampleMovies;

  // Check if arrows should be displayed
  const checkArrows = () => {
    if (!sliderRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 6);
  };

  useEffect(() => {
    checkArrows();
    window.addEventListener('resize', checkArrows);
    return () => window.removeEventListener('resize', checkArrows);
  }, []);

  // Scroll functions
  const scroll = (direction) => {
    if (!sliderRef.current) return;
    
    const { clientWidth } = sliderRef.current;
    const scrollAmount = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
    
    sliderRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
    
    // Update arrows after scrolling
    setTimeout(checkArrows, 500);
  };

  // Touch/mouse drag handlers
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
    const walk = (x - startX) * 2; // Scroll speed multiplier
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
    <div className="movie-row py-10 pb-0 px-16 relative">
      <h2 className="text-[1.5rem] font-bold text-white mb-4">{title}</h2>
      
      {/* Left Arrow */}
      {showLeftArrow && (
        <button 
          className="absolute left-0 top-1/2 z-10 bg-black/50 p-4 rounded-r-md text-white hover:bg-black/70 transition-all transform -translate-y-1/2"
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      
      {/* Movie Slider */}
      <div 
        ref={sliderRef}
        className={`flex space-x-4 overflow-x-auto scrollbar-hide pb-4 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
        onScroll={handleScroll}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {moviesToRender.map((movie) => (
          <div key={movie.id} className="flex-none w-[200px] relative group">
            <Link to={`/movie/details?id=4`} className="block">
              <div className="relative overflow-hidden rounded-[4px] transition-transform duration-300 group-hover:shadow-xl">
                <img 
                  src={movie.image} 
                  alt={movie.title} 
                  className="w-full h-[300px] object-cover duration-300 hover:scale-110"
                  draggable="false"
                />
                
                {/* Netflix Logo */}
                <div className="absolute top-2 left-2">
                  <img 
                    src={Logo} 
                    alt="Netflix" 
                    className="h-5"
                    draggable="false"
                  />
                </div>
                
                {/* Badge */}
                {movie.badge && (
                  <div className="absolute bottom-0 left-0 bg-red-600 text-white text-xs py-1 px-2">
                    {movie.badge}
                  </div>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
      
      {/* Right Arrow */}
      {showRightArrow && (
        <button 
          className="absolute right-0 top-1/2 z-10 bg-black/50 p-4 rounded-l-md text-white hover:bg-black/70 transition-all transform -translate-y-1/2"
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
      
      {/* Add custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}