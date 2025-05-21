import React from "react";
import { Link } from "@remix-run/react";

export default function Seasons({ playlistVideos, playlistId }) {
  return (
    <div className="px-4 py-2">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Episodes</h3>
        <span className="text-xs text-gray-400">{playlistVideos.length} Episodes</span>
      </div>

      <div className="space-y-4">
        {playlistVideos.map((video, index) => (
          <Link
            key={video.id}
            to={`/movie/preview?playlist=${playlistId}&episode=${video.id}`}
            className="flex space-x-3"
          >
            <div className="relative flex-shrink-0">
              <img
                src={video.thumbnail_url}
                alt={video.title}
                className="w-32 h-20 object-cover rounded"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black bg-opacity-50 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium line-clamp-2">{video.title}</h4>
              <p className="text-xs text-gray-400 mt-1">Episode {index + 1}</p>
              <div className="flex items-center mt-1">
                <span className="text-xs text-gray-400">HD</span>
                <span className="mx-2 text-gray-500">•</span>
                <span className="text-xs text-gray-400">English</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}