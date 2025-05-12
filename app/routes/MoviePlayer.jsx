import { useSearchParams } from "@remix-run/react";
import React from "react";

export default function VideoPlayer() {
  const [searchParams] = useSearchParams();
  const movieId = searchParams.get("id");
  console.log("movieId", movieId);
  const videoId = movieId || "dQw4w9WgXcQ"; // Example video ID
  const onClose = () => {
    // Logic to close the video player
    console.log("Video player closed");
    window.history.back();
  };
  return (
    <div className="fixed h-80vh inset-0 z-50 bg-black/90 flex items-center justify-center">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-[1rem] right-[1rem] text-white hover:text-gray-300 z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          style={{color: "#000"}}
          fill="#000"
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
      </button>

      {/* Video iframe */}
      <div className="w-full h-full md:w-[90%] md:h-[80vh] relative">
        {/* <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe> */}
        <iframe
          src="https://player.vimeo.com/video/1083654807?h=cd31bc553f&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          className="absolute inset-0 w-full h-full"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          title="Kung Fu Hustle (2004)www.10xflix.com  UNRATED  Hindi ORG Dual Audio Movie 720p BluRay"
        ></iframe>
      </div>
    </div>
  );
}
