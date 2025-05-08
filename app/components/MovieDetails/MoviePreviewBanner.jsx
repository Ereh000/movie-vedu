import React from "react";
import { Link } from "@remix-run/react";

export default function MoviePreviewBanner({ movie }) {
  // Sample movie data (will be replaced by actual prop)
  const defaultMovie = {
    id: "pathaan",
    title: "Pathaan",
    description: "Indian RAW agent \"Pathaan\" (Shah Rukh Khan) gets to know of a major impending attack against India, mounted by a mercenary group led by the ruthless enigma Jim.",
    posterImage: "https://wallpapercave.com/wp/wp4074461.jpg",
    rating: "5.8",
    duration: "2h 29m",
    year: "2023",
    quality: "HD",
    ageRating: "U/A 13+",
    genres: ["Action", "Suspense", "International", "Adventure"],
    streamingService: "Prime",
    includeWithSubscription: true
  };

  const movieData = movie || defaultMovie;

  return (
    <div className="relative w-full h-[80vh] pt-10 md:h-[100vh] overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${movieData.posterImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full container mx-auto px-4 md:px-8 lg:px-16 flex items-center">
        <div className="max-w-2xl">
          {/* Title */}
          <h1 className="text-3xl lg:text-6xl font-bold text-white mb-4">{movieData.title}</h1>
          
          {/* Description */}
          <p className="text-white/90 text-[14px] md:text[15px] lg:text-[1.3rem] mb-4 md:mb-6 line-clamp-3">{movieData.description}</p>
          
          {/* Movie Info Row */}
          <div className="flex items-center space-x-4 mb-4 text-[12px] text-white/80">
            <div className="flex items-center">
              <span className="text-yellow-400 mr-1">IMDb</span>
              <span>{movieData.rating}</span>
            </div>
            <span>{movieData.duration}</span>
            <span>{movieData.year}</span>
            <span className="bg-gray-700 px-2 py-0.5 rounded">{movieData.quality}</span>
            <span className="bg-gray-700 px-2 py-0.5 rounded">{movieData.ageRating}</span>
          </div>
          
          {/* Genres */}
          <div className="flex flex-wrap text-[11px] items-center mb-4 md:mb-8 text-white/80">
            {movieData.genres.map((genre, index) => (
              <React.Fragment key={genre}>
                <Link to={`/genre/${genre.toLowerCase()}`} className="hover:text-white transition-colors">
                  {genre}
                </Link>
                {index < movieData.genres.length - 1 && (
                  <span className="mx-1">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2">
            <button style={{lineHeight: 1}} className="bg-white hover:bg-white/90 text-black text-[12px] px-4 ps-2 py-1 md:px-8 md:py-3 rounded-md flex items-center font-medium transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 md:mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Play
            </button>
            
            <button style={{lineHeight: 1}} className="bg-gray-600/80 ps-2 hover:bg-gray-600 text-[12px] text-white  px-4 py-[2px] md:px-8 md:py-3  rounded-md flex items-center font-medium transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4  mr-1 md:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Watchlist
            </button>
            
            <button className="bg-gray-600/80 hover:bg-gray-600 text-white p-3 rounded-md flex items-center font-medium transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
            
            <button className="bg-gray-600/80 hover:bg-gray-600 text-white p-3 rounded-md flex items-center font-medium transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </div>
          
          {/* Streaming Service */}
          {movieData.includeWithSubscription && (
            <div className="mt-6 flex items-center text-white">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-2 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-[12px]">Included with {movieData.streamingService}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}