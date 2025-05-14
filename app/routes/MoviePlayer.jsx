import { useSearchParams } from "@remix-run/react";
import React, { useEffect, useState } from "react";

export default function VideoPlayer() {
  const [videoData, setVideoData] = useState(null);
  const [videoId, setVideoId] = useState("kALFb6hl9a9wJED2E1q");
  const [searchParams] = useSearchParams();
  const movieId = searchParams.get("id") || "kALFb6hl9a9wJED2E1q";

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const url = `https://api.dailymotion.com/video/${movieId}`;
        const response = await fetch(url);
        const data = await response.json();
        setVideoData(data);
        setVideoId(data.id);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    console.log("videoId", videoId);

    fetchVideoData();
  }, [movieId]);

  const onClose = () => {
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
          style={{ color: "#fff" }}
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
      <div className="w-full h-[50%] md:w-[90%] md:h-[80vh] relative">
        <iframe
          src={`https://geo.dailymotion.com/player.html?video=${videoId}`}
          className="absolute inset-0 w-full h-full"
          allowfullscreen
          title="Dailymotion Video Player"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
}
