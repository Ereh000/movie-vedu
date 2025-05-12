import React, { useState } from "react";
import { Link, useNavigate } from "@remix-run/react";
import { MoreLikeThis } from "../components/Vedu/MoreLikeThis";

export default function MoviePreview() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("details");

  // Mock movie data
  const movie = {
    id: "weak-hero-class-1",
    title: "Weak Hero Class 1",
    season: "Season 2",
    year: 2023,
    country: "South Korea",
    genres: ["Drama", "Thriller", "Action"],
    audio: ["Hindi", "English"],
    rating: 8.3,
    isPremium: true,
    description:
      "With the aid of unexpected friends, a gifted but introverted student confronts bullies and violent foes — unaware of how dangerous his world will become.",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    posterUrl: "https://i.imgur.com/JR5vXQ5.jpg",
    commentCount: 57,
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Back button and top actions */}
      <TopNavigation navigate={navigate} />
      {/* Trailer Video Section */}
      <TrailerSection trailerUrl={movie.trailerUrl} />
      {/* Movie Title and Info */}
      <MovieInfo movie={movie} />
      {/* Watch Now Button */}
      <WatchButton isPremium={movie.isPremium} />
      {/* Ad Banner */}
      <AdBanner />
      {/* Tabs Navigation */}
      <TabNavigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        commentCount={movie.commentCount}
      />
      {/* Tab Content */}
      <TabContent activeTab={activeTab} movie={movie} />
      {/* Action Buttons */}
      <ActionButtons />
      {/* Seasons */}
      <Seasons />
      {/* More Like This */}
      <MoreLikeThis />
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

// Component for trailer video section
function TrailerSection({ trailerUrl }) {
  return (
    <div
      className="relative mx-4 rounded-lg overflow-hidden"
      style={{ aspectRatio: "16/9", margin: "0 10px" }}
    >
      <div
        className="absolute top-[2rem] left-3 bg-black/70 px-2 py-1 rounded text-[9px]"
        style={{ top: "2px" }}
      >
        Trailer
      </div>
      {/* <div className="absolute top-3 right-3 bg-black/70 p-1 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.728-2.728"
          />
        </svg>
      </div> */}
      <div className="w-full h-full flex items-center justify-center bg-black">
        <div className="relative">
          <img
            src="https://i.ytimg.com/vi/eQULWOwwueY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB6F1W-ciLbdlsso5_6l9Q_jkfsbg"
            alt="Trailer thumbnail"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Link to="/movieplayer">
              <div className="bg-red-600 rounded-full p-0">
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
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component for movie title and information
function MovieInfo({ movie }) {
  return (
    <div className="px-4 mt-4">
      <h1 className="text-[16px] font-bold flex justify-between items-center">
        {movie.title}{" "}
        <span className="ml-2 text-[15px] text-yellow-500">{movie.season}</span>
      </h1>
      <div className="mt-2 text-xs text-gray-400">
        <span>{movie.year}</span> / <span>{movie.country}</span> /{" "}
        <span>{movie.genres.join(" / ")}</span>
      </div>
      <div className="mt-1 text-xs text-gray-400">
        <span>Audio:</span> <span>{movie.audio.join(" / ")}</span>
      </div>
      <div className="mt-2 flex justify-between items-center">
        {movie.isPremium && (
          <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded mr-3 flex items-center">
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
            Premium First
          </span>
        )}
        <div className="flex items-center">
          <span className="text-gray-400 text-xs mr-1">Rating</span>
          <span className="text-yellow-500 text-sm font-bold">
            {movie.rating}
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

// Component for watch now button
function WatchButton({ isPremium }) {
  return (
    <div className="px-4 mt-4">
      <Link to="/movieplayer">
        <button
          className="w-full bg-yellow-600 text-black font-bold py-3 rounded-lg flex items-center justify-center"
          style={{
            background: "rgb(234 179 8 / var(--tw-text-opacity, 1))",
          }}
        >
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
          Watch Now
        </button>
      </Link>
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

// Component for tab navigation
function TabNavigation({ activeTab, setActiveTab, commentCount }) {
  return (
    <div
      className="px-4 mt-6 border-b border-gray-800"
      style={{ fontSize: "12px" }}
    >
      <div className="flex items-center justify-between">
        <button
          onClick={() => setActiveTab("details")}
          className={`pb-2 px-4 ${
            activeTab === "details"
              ? "text-yellow-500 border-b-2 border-yellow-500"
              : "text-gray-400"
          }`}
        >
          Details
        </button>
        <button
          onClick={() => setActiveTab("comments")}
          className={`pb-2 px-4 flex items-center ${
            activeTab === "comments"
              ? "text-yellow-500 border-b-2 border-yellow-500"
              : "text-gray-400"
          }`}
        >
          Comments{" "}
          <span className="ml-1 text-xs text-gray-500">{commentCount}</span>
        </button>
        <button
          onClick={() => setActiveTab("trailer")}
          className={`pb-2 px-4 ${
            activeTab === "trailer"
              ? "text-yellow-500 border-b-2 border-yellow-500"
              : "text-gray-400"
          }`}
        >
          Trailer
        </button>
      </div>
    </div>
  );
}

// Component for tab content
function TabContent({ activeTab, movie }) {
  return (
    <div className="px-4 py-4" style={{ fontSize: "11px" }}>
      {activeTab === "details" && (
        <p className="text-gray-400 leading-relaxed">{movie.description}</p>
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

function Seasons() {
  const episodes = [
    {
      id: 1,
      title: "Episode 1",
      image:
        "https://image.tmdb.org/t/p/original/t4FC3XOQTGF66JnotzXpNsBnZSH.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      duration: "1h 30m",
    },
    {
      id: 2,
      title: "Episode 2",
      image:
        "https://image.tmdb.org/t/p/original/t4FC3XOQTGF66JnotzXpNsBnZSH.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      duration: "1h 30m",
    },
    {
      id: 3,
      title: "Episode 3",
      image:
        "https://image.tmdb.org/t/p/original/t4FC3XOQTGF66JnotzXpNsBnZSH.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      duration: "1h 30m",
    },
    {
      id: 4,
      title: "Episode 4",
      image:
        "https://image.tmdb.org/t/p/original/t4FC3XOQTGF66JnotzXpNsBnZSH.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      duration: "1h 30m",
    },
    {
      id: 5,
      title: "Episode 5",
      image:
        "https://image.tmdb.org/t/p/original/t4FC3XOQTGF66JnotzXpNsBnZSH.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      duration: "1h 30m",
    },
    {
      id: 6,
      title: "Episode 6",
      image:
        "https://image.tmdb.org/t/p/original/t4FC3XOQTGF66JnotzXpNsBnZSH.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      duration: "1h 30m",
    },
    {
      id: 7,
      title: "Episode 7",
      image:
        "https://image.tmdb.org/t/p/original/t4FC3XOQTGF66JnotzXpNsBnZSH.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      duration: "1h 30m",
    },
    {
      id: 8,
      title: "Episode 8",
      image:
        "https://image.tmdb.org/t/p/original/t4FC3XOQTGF66JnotzXpNsBnZSH.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      duration: "1h 30m",
    },
  ];

  return (
    <section>
      {/* Episodes Section */}
      <div className="mt-6 px-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-white font-bold text-sm">
            Season 1 · 8 Episodes
          </h3>
          <button className="text-yellow-500">
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

        <div className="flex overflow-x-auto space-x-3 pb-4 hide-scrollbar">
          {episodes.map((episode, index) => (
            <div key={index} className="flex-shrink-0 w-32 relative">
              <div className="relative">
                <img
                  src={episode.image}
                  alt={`Episode ${index + 1}`}
                  className="w-32 h-20 object-cover rounded-md"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/128x72?text=Episode";
                  }}
                />
                {/* <p>{episode.title}</p> */}
                <div className="absolute bottom-1 left-1 text-xs text-white bg-black/70 px-1 rounded">
                  {episode.duration}
                </div>
              </div>
              <div className="mt-1 text-xs text-white">{episode.title}</div>
            </div>
          ))}
        </div>

        <style jsx>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </section>
  );
}
