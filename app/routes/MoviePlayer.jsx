import { useSearchParams } from "@remix-run/react";
import React, { useEffect, useState } from "react";

export default function VideoPlayer() {
  const [videoData, setVideoData] = useState(null);
  const [videoId, setVideoId] = useState("");
  const [searchParams] = useSearchParams();
  const movieId = searchParams.get("id") || "x9jf786";

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
        {/* <iframe
          src="https://player.vimeo.com/video/1083678311?h=81d1858b32&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          width="1280"
          height="528"
          className="absolute inset-0 w-full h-full"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          title="4_5771482232371810792"
        ></iframe> */}

        {/* <iframe
          // src={`https://geo.dailymotion.com/player.html?video=${movieId}&autoplay=1`}
          // src="https://geo.dailymotion.com/player.html?video=x9jf786"
          className="absolute inset-0 w-full h-full"
          width="1280"
          height="528"
          title="Dailymotion Video Player"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          allowFullScreen
        ></iframe> */}
        {/* <iframe
          // width="640"
          className="absolute inset-0 w-full h-full"
          // height="480"
          src="//mxdrop.to/e/el14x1pmb8gvll"
          // scrolling="no"
          // frameborder="0"
          allowfullscreen
        ></iframe> */}
        <iframe
          src="https://geo.dailymotion.com/player.html?video=x9jgkhu"
          className="absolute inset-0 w-full h-full"
          allowfullscreen
          title="Dailymotion Video Player"
          allow="web-share"
        ></iframe>
      </div>
    </div>
  );
}
