import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "@remix-run/react";
import { MoreLikeThis } from "../components/Vedu/MoreLikeThis";
import Seasons from "../components/MoviePreview/Seasons";
import TabNavigationn from "../components/MoviePreview/TabNavigation";

// Mock movie data
// const movie = {
//   id: "weak-hero-class-1",
//   title: "Weak Hero Class 1",
//   season: "Season 2",
//   year: 2023,
//   country: "South Korea",
//   genres: ["Drama", "Thriller", "Action"],
//   audio: ["Hindi", "English"],
//   rating: 8.3,
//   isPremium: true,
//   description:
//     "With the aid of unexpected friends, a gifted but introverted student confronts bullies and violent foes — unaware of how dangerous his world will become.",
//   trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
//   posterUrl: "https://i.imgur.com/JR5vXQ5.jpg",
//   commentCount: 57,
// };

export default function MoviePreview() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("seasons");
  const [episodeId, setEpisodeId] = useState("");

  const [playlistVideos, setPlaylistVideos] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [searchParams] = useSearchParams();
  const playlistId =
    searchParams.get("playlist") || "PLcDgcb5xDNebRw5JfSHg7KME1yVqpaUGO"; // YouTube playlist ID
  const episodeParam = searchParams.get("episode");
  const apiKey = "AIzaSyB4DcCnc2fB7uRgRmFTwDO2Nzd4ap-9oIQ";

  console.log("playlistId", playlistId);
  console.log("episodeId", episodeId);

  useEffect(() => {
    const fetchPlaylistVideos = async () => {
      try {
        // Fetch YouTube playlist videos
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=200&playlistId=${playlistId}&key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log("YouTube Playlist Data:", data);

        if (data.items) {
          const videos = data.items
            .filter((item) => item.snippet.title !== "Private video")
            .map((item) => ({
              id: item.snippet.resourceId.videoId,
              title: item.snippet.title,
              thumbnail_url: item.snippet.thumbnails.medium?.url,
              description: item.snippet.description,
              position: item.snippet.position,
            }));

          setPlaylistVideos(videos);

          // Only set the first episode if no episode is specified in URL
          if (!episodeParam && videos.length > 0) {
            setEpisodeId(videos[0].id);
          }
        }
      } catch (error) {
        console.error("Error fetching playlist:", error);
      }
    };

    fetchPlaylistVideos();
  }, [playlistId, episodeParam, apiKey]);

  // Update episodeId when the URL parameter changes
  useEffect(() => {
    if (episodeParam) {
      setEpisodeId(episodeParam);
    }
  }, [episodeParam]);

  // ... rest of the component remains the same
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Back button and top actions */}
      <TopNavigation navigate={navigate} />
      {/* Trailer Video Section */}
      <EpisodePlayer episodeId={episodeId} />
      {/* Movie Title and Info */}
      <MovieInfo playlistVideos={playlistVideos} episodeId={episodeId} />
      {/* Ad Banner */}
      <AdBanner />
      {/* Action Buttons */}
      <ActionButtons />
      <TabNavigationn activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "seasons" && (
        <Seasons playlistVideos={playlistVideos} playlistId={playlistId} />
      )}
      {activeTab === "details" && <TabContent activeTab={activeTab} />}
      {activeTab === "moreLikeThis" && <MoreLikeThis />}
      <br />
    </div>
  );
}

// Component for top navigation with back button and earn money
function TopNavigation({ navigate }) {
  return (
    <div className="flex justify-between items-center p-2 px-4">
      <button onClick={() => navigate(-1)} className="text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ms-0"
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
      <div className="flex items-center space-x-3">
        <div className="flex items-center text-yellow-500 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
          <span>Earn Money</span>
        </div>
        <div className="bg-yellow-500 rounded-full p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

// Component for Episode Player section
function EpisodePlayer({ episodeId }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
    setIsLoading(true);
  };

  return (
    <div
      className="relative mx-4 rounded-lg overflow-hidden"
      style={{ aspectRatio: "16/9", margin: "0 10px" }}
    >
      {isPlaying ? (
        <>
          {isLoading && (
            <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center z-10">
              <div className="flex flex-col items-center">
                <svg
                  className="animate-spin h-10 w-10 text-yellow-500 mb-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span className="text-white text-sm">Loading video...</span>
              </div>
            </div>
          )}
          <iframe
            src={`https://www.youtube.com/embed/${episodeId}`}
            className="absolute inset-0 w-full h-full"
            allowFullScreen
            title="Dailymotion Video Player"
            frameBorder="0"
            allow="autoplay"
            onLoad={() => setIsLoading(false)}
          ></iframe>
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-black">
          <div className="relative w-full h-full">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNTE4ZmZmNjYtM2U4ZS00YjE3LTgyMTUtNzdkN2Q5NWVhNTk2XkEyXkFqcGdeQWxiaWFtb250._V1_.jpg"
              alt="Trailer thumbnail"
              className="w-full h-full object-cover opacity-95"
            />
            <div
              className="absolute inset-0 flex items-center justify-center"
              onClick={handlePlayClick}
            >
              <button
                onClick={handlePlayClick}
                className="bg-red-600 rounded-full p-0 hover:bg-red-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Component for movie title and information
function MovieInfo({ playlistVideos, episodeId }) {
  // Find the current episode from the playlist
  const currentEpisode =
    playlistVideos.find((video) => video.id === episodeId) || {};

  // Extract season and episode number from title if available
  const seasonMatch = currentEpisode.title?.match(/Season\s+(\d+)/i);
  const episodeMatch = currentEpisode.title?.match(/Episode\s+(\d+)/i);

  const seasonNumber = seasonMatch ? seasonMatch[1] : "";
  const episodeNumber = episodeMatch ? episodeMatch[1] : "";

  const cleanTitle = currentEpisode.title;

  const displayTitle = cleanTitle || "";

  return (
    <div className="px-4 mt-4">
      <h1 className="episode__title text-[16px] font-bold flex justify-between items-center">
        {displayTitle}
      </h1>
      <div className="audio_seasonInfo mt-1 flex justify-between items-center text-xs text-gray-400">
        <span
          style={{ minWidth: "fit-content" }}
          className="season__e-text text-[14px] text-white "
        >
          {episodeNumber ? `S${seasonNumber} E${episodeNumber}` : seasonNumber}
        </span>
        <div>
          <span>Urdu</span>
        </div>
      </div>
      <div className="mt-2 mb-4 text-xs text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
        alias blanditiis amet eum rerum aut unde et! Assumenda, alias aliquid?
      </div>

      <div className="mt-2 flex justify-between items-center">
        <span className="btn-primary bg-yellow-500 text-black text-xs px-2 py-1 rounded mr-3 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
              clipRule="evenodd"
            />
            <path d="M9 11H3v5a2 2 0 002 2h4v-7zm2 7h4a2 2 0 002-2v-5h-6v7z" />
          </svg>
          Exclusive
        </span>
        <div className="flex items-center">
          <span className="text-white text-xs mr-1">Rating</span>
          <span className="text-yellow-500 text-sm font-bold gold_color">
            8.5
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-yellow-500 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// Component for advertisement banner
function AdBanner() {
  return (
    <div className="relative px-4 mt-4">
      <div className="w-full rounded-lg overflow-hidden">
        <img
          src="https://www.shutterstock.com/image-vector/delicious-hamburger-fries-banner-ads-260nw-1203026587.jpg"
          alt="Advertisement"
          className="w-full h-20 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          {/* <div className="text-center">
            <h3 className="text-xl font-bold text-white">
              WATCH FILM & GET PRICE
            </h3>
            <button className="mt-2 bg-yellow-500 text-black px-6 py-1 rounded-full font-bold">
              GET
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

// Component for tab content
function TabContent({ activeTab }) {
  return (
    <div className="px-4 py-4" style={{ fontSize: "11px" }}>
      {activeTab === "details" && (
        <p className="text-gray-400 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          voluptatem quo sit mollitia molestias ab voluptatibus ipsum repellat
          veniam tenetur.
        </p>
      )}

      {activeTab === "comments" && (
        <div className="text-center py-8">
          <p className="text-gray-500">Comments section would go here</p>
        </div>
      )}

      {activeTab === "trailer" && (
        <div className="text-center py-8">
          <p className="text-gray-500">
            Additional trailer content would go here
          </p>
        </div>
      )}
    </div>
  );
}

// Component for action buttons at the bottom
function ActionButtons() {
  return (
    <div className=" bottom-16 left-0 right-0 bg-gray-900 border-t border-gray-800 py-2">
      <div className="flex justify-around">
        <button className="flex flex-col items-center text-gray-400">
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
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
          <span className="text-xs mt-1">+ List</span>
        </button>

        <button className="flex flex-col items-center text-gray-400">
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
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
          </svg>
          <span className="text-xs mt-1">Rate</span>
        </button>

        <button className="flex flex-col items-center text-gray-400">
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
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
          <span className="text-xs mt-1">Share</span>
        </button>

        <button className="flex flex-col items-center text-gray-400">
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
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          <span className="text-xs mt-1">Download</span>
        </button>
      </div>
    </div>
  );
}
