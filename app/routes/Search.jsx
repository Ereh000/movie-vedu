import React, { useState, useEffect } from "react";
import { Form, useSearchParams } from "@remix-run/react";

export default function Search() {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [activeFilters, setActiveFilters] = useState({
    category: "all",
    language: "all",
    country: "all",
    genre: "all",
    year: "all",
    platform: "all",
    sort: "all",
  });

  // Mock data for movies
  const movies = [
    {
      id: 1,
      title: "Barbarosa",
      image:
        "https://image.tmdb.org/t/p/original/t4FC3XOQTGF66JnotzXpNsBnZSH.jpg",
      slug: "barbarosa",
      count: 23,
      seasons: 4,
      quality: "1080p",
      language: "T�rkçe",
      country: "T�rkiye",
      genre: "Dram",
      year: 2022,
      platform: "Netflix",
      sort: "Yeni",
    },
    {
      id: 2,
      title: "Ertgrul",
      image:
        "https://i.pinimg.com/736x/04/12/31/041231239378b53e1b58789165089ea2.jpg",
      slug: "ertgrul",
      count: 23,
      seasons: 4,
      quality: "1080p",
      language: "T�rkçe",
      country: "T�rkiye",
      genre: "Dram",
      year: 2022,
      platform: "Netflix",
      sort: "Yeni",
    },
    {
      id: 3,
      title: "Yunus Emre",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkj9dfGjEzm2WJiabQ3RmZvnfbSogo1_kZOA&s",
      slug: "yunus-emre",
      count: 4,
      seasons: 4,
      quality: "1080p",
      language: "T�rkçe",
      country: "T�rkiye",
      genre: "Dram",
      year: 2022,
      platform: "Netflix",
      sort: "Yeni",
    },
    {
      id: 4,
      title: "Sultan Fatih",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6IAFxtO549vqYMonuNwNFSp3rlWf0FGl4SA&s",
      slug: "sultan-fatih",
      count: 10,
      seasons: 4,
      quality: "1080p",
      language: "T�rkçe",
      country: "T�rkiye",
      genre: "Dram",
      year: 2022,
      platform: "Netflix",
      sort: "Yeni",
    },
    {
      id: 5,
      title: "Sultan Fatih",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6IAFxtO549vqYMonuNwNFSp3rlWf0FGl4SA&s",
      slug: "sultan-fatih",
      count: 42,
      seasons: 4,
      quality: "1080p",
      language: "T�rkçe",
      country: "T�rkiye",
      genre: "Dram",
      year: 2022,
      platform: "Netflix",
      sort: "Yeni",
    },
    {
      id: 6,
      title: "Sultan Abdul Hamid",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/source/c612e650556379.58d36c1643d2a.jpg",
      slug: "sultan-abdul-hamid",
      count: 35,
      seasons: 4,
      quality: "1080p",
      language: "T�rkçe",
      country: "T�rkiye",
      genre: "Dram",
      year: 2022,
      platform: "Netflix",
      sort: "Yeni",
    },
    {
      id: 7,
      title: "Mehmat",
      image:
        "https://i.pinimg.com/736x/19/33/df/1933dfaeaac91773c9c505ecd8904457.jpg",
      slug: "mehmat",
      count: 28,
      seasons: 4,
      quality: "1080p",
      language: "T�rkçe",
      country: "T�rkiye",
      genre: "Dram",
      year: 2022,
      platform: "Netflix",
      sort: "Yeni",
    },
    {
      id: 8,
      title: "Alp Arsalan",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZm8OWAO0UcM73b4AfjlzF2oNOPiqsBP7tKg&s",
      slug: "alp-arsalan",
      count: 50,
      seasons: 4,
      quality: "1080p",
      language: "T�rkçe",
      country: "T�rkiye",
      genre: "Dram",
      year: 2022,
      platform: "Netflix",
      sort: "Yeni",
    },
  ];

  // Filter categories
  const filterCategories = [
    {
      name: "category",
      options: [
        "All",
        "Movies",
        "TV shows",
        "Anime",
        "Reality Shows",
        "Short Shows",
      ],
    },
    {
      name: "language",
      options: [
        "All",
        "Hindi",
        "Tamil",
        "Telugu",
        "Bengali",
        "Malayalam",
        "Marathi",
        "Kannada",
      ],
    },
    {
      name: "sort",
      options: ["All", "Latest", "Most viewed", "Rating", "Premium"],
    },
  ];

  const handleFilterChange = (category, value) => {
    setActiveFilters((prev) => ({
      ...prev,
      [category]: value.toLowerCase(),
    }));
  };

  // Filter movies based on search query and active filters
  const filteredMovies = movies.filter((movie) => {
    if (query && !movie.title.toLowerCase().includes(query.toLowerCase())) {
      return false;
    }

    // Add more filter logic here as needed
    return true;
  });

  return (
    <div className="search_page min-h-screen bg-gray-900 text-white">
      <main className="container mx-auto px-4 py-6 pb-20">
        {/* Search Input */}
        <div className="relative mb-4">
          <Form method="get" className="w-full">
            <input
              type="text"
              name="q"
              placeholder="raid 2"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-gray-800 text-white text-xs rounded-full py-2 px-10 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </Form>
        </div>

        {/* Filter Categories */}
        <div className="mb-8 space-y-4">
          {filterCategories.map((category) => (
            <div
              key={category.name}
              className="overflow-x-auto whitespace-nowrap scrollbar-hide"
            >
              <div className="inline-flex flex-wrap gap-[10px]">
                {category.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleFilterChange(category.name, option)}
                    className={`px-4 py-1 rounded-full ${
                      activeFilters[category.name] === option.toLowerCase()
                        ? "bg-yellow-500 text-black"
                        : "bg-gray-800  text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    {option}
                    {option === "Premium" && (
                      <span className="ml-1 text-yellow-500">👑</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Results */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredMovies.map((movie) => (
            <div key={movie.id} className="relative rounded-lg overflow-hidden">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full aspect-[3/4] object-cover"
              />

              {/* Language Tag */}
              <div className="absolute top-2 right-2">
                <span
                  className={`px-2 py-0.5 text-xs font-medium rounded ${
                    movie.language === "JAPANESE"
                      ? "bg-blue-500"
                      : movie.language === "BENGALI"
                      ? "bg-green-500"
                      : "bg-yellow-500"
                  } text-black`}
                >
                  {movie.language}
                </span>
              </div>

              {/* Premium Tag */}
              {movie.isPremium && (
                <div className="absolute top-2 left-2">
                  <span className="bg-yellow-500 text-black px-2 py-0.5 text-xs font-medium rounded flex items-center">
                    <span className="mr-1">👑</span> Premium
                  </span>
                </div>
              )}

              {/* Gradient Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div> */}

              {/* Movie Info */}
              <div className=" bottom-0 left-0 right-0 p-2 px-0">
                <h3 className="text-white font-medium text-sm">
                  {movie.title}
                </h3>
                <div className="flex justify-between items-center">
                  {movie.seasons ? (
                    <span className="text-gray-300 text-xs">
                     Seasons {movie.seasons}
                    </span>
                  ) : (
                    <span className="text-yellow-500 text-xs font-medium">
                      {movie.quality}
                    </span>
                  )}
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span className="text-white text-xs">{movie.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <div className="flex flex-col items-center justify-center h-64">
            <p className="text-gray-400 text-lg mb-2">No results found</p>
            <p className="text-gray-500 text-sm">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
