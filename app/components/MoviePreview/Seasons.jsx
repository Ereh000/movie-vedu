import React, { useState, useEffect } from "react";
import { Link, useLocation } from "@remix-run/react";

export default function Seasons({ playlistVideos, playlistId }) {
  const [selectedSeason, setSelectedSeason] = useState("Season 1");
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [seasonData, setSeasonData] = useState({});
  const [availableSeasons, setAvailableSeasons] = useState([]);
  const location = useLocation();

  // Process playlist videos to organize by season
  useEffect(() => {
    if (!playlistVideos || playlistVideos.length === 0) return;
    
    const seasons = {};
    const seasonsList = [];
    
    // Extract season information from video titles
    playlistVideos.forEach(video => {
      // Parse season from title (e.g., "Barbarossa - Season 1 - Episode 1")
      const seasonMatch = video.title.match(/Season\s+(\d+)/i);
      const episodeMatch = video.title.match(/Episode\s+(\d+)/i);
      
      const seasonNumber = seasonMatch ? seasonMatch[1] : "1";
      const episodeNumber = episodeMatch ? parseInt(episodeMatch[1]) : 0;
      
      const seasonKey = `Season ${seasonNumber}`;
      
      if (!seasons[seasonKey]) {
        seasons[seasonKey] = [];
        seasonsList.push(seasonKey);
      }
      
      // Format duration from seconds to HH:MM:SS
      const hours = Math.floor(video.duration / 3600);
      const minutes = Math.floor((video.duration % 3600) / 60);
      const seconds = video.duration % 60;
      const formattedDuration = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      
      // Clean up thumbnail URL (remove backticks if present)
      const thumbnailUrl = video.thumbnail_url.replace(/`/g, '').trim();
      
      seasons[seasonKey].push({
        id: video.id,
        number: episodeNumber,
        title: video.title,
        duration: formattedDuration,
        thumbnail: thumbnailUrl
      });
    });
    
    // Sort episodes by number within each season
    Object.keys(seasons).forEach(season => {
      seasons[season].sort((a, b) => a.number - b.number);
    });
    
    setSeasonData(seasons);
    setAvailableSeasons(seasonsList);
    
    // Set default selected season to the first available season
    if (seasonsList.length > 0 && !seasons[selectedSeason]) {
      setSelectedSeason(seasonsList[0]);
    }
  }, [playlistVideos, selectedSeason]);

  const handleImageLoad = (episodeId) => {
    setImagesLoaded((prev) => ({
      ...prev,
      [episodeId]: true,
    }));
  };

  const handleImageError = (episodeId) => {
    setImagesLoaded((prev) => ({
      ...prev,
      [episodeId]: false,
    }));
  };

  return (
    <div className="px-4 py-3">
      <div className="flex border-b border-gray-700 mb-4">
        <div className="relative">
          <select
            className="appearance-none bg-transparent text-white gold_color py-2 pr-8 pl-2 focus:outline-none text-sm font-medium"
            value={selectedSeason}
            onChange={(e) => setSelectedSeason(e.target.value)}
          >
            {availableSeasons.map((season) => (
              <option key={season} value={season} className="bg-gray-800">
                {season}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {seasonData[selectedSeason]?.map((episode) => (
          <Link
            to={`${location.pathname}?playlist=${playlistId}&episode=${episode.id}`}
            key={episode.id}
            className="block"
          >
            <div className="flex space-x-3">
              <div className="relative w-32 h-20 flex-shrink-0 rounded-md overflow-hidden bg-gray-800">
                {/* Skeleton loader shown while image is loading or if error occurs */}
                {(!imagesLoaded[episode.id] ||
                  imagesLoaded[episode.id] === undefined) && (
                  <div className="absolute inset-0 animate-pulse bg-gray-700 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                )}
                <img
                  src={episode.thumbnail || "https://via.placeholder.com/128x72"}
                  alt={`Episode ${episode.number}`}
                  className={`w-full h-full object-cover ${
                    !imagesLoaded[episode.id] ? "opacity-0" : "opacity-100"
                  }`}
                  onLoad={() => handleImageLoad(episode.id)}
                  onError={() => handleImageError(episode.id)}
                />
                <div className="absolute bottom-0 right-0 bg-black/70 px-2 py-1 text-xs">
                  {episode.duration}
                </div>
              </div>
              <div className="flex-1">
                <div className="text-2xl font-bold mb-1 gold_color">{episode.number}</div>
                <p className="text-sm text-gray-300 line-clamp-2">
                  {episode.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}