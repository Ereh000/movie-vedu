import React from "react";
import { Link } from "@remix-run/react";

export default function MovieCardsVedu({
  title = "Latest",
  viewAllLink = "/movie/collection",
}) {
  const movies = [
    {
      id: 1,
      title: "Retro (2025)",
      image: "https://i.pinimg.com/236x/a2/27/74/a22774f9d0a63b6fa4d8ffd7fad43348.jpg",
      genres: ["Action", "Drama", "Romance"],
      quality: "pDVDRip",
      language: "Hindi",
      link: "/movie/preview?id=retro-2025",
    },
    {
      id: 2,
      title: "Bad Influence (2025)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMbHSlSMlpjOb8DjI_HJCHSL_FAGlcccl6fg&s",
      genres: ["Documentary"],
      quality: "HD 720p",
      language: "Multi",
      link: "/movie/preview?id=bad-influence-2025",
    },
    {
      id: 3,
      title: "Nonnas (2025)",
      image: "https://i.pinimg.com/236x/a2/27/74/a22774f9d0a63b6fa4d8ffd7fad43348.jpg",
      genres: ["Comedy"],
      quality: "HD 720p",
      language: "Multi",
      link: "/movie/preview?id=nonnas-2025",
    },
    {
      id: 4,
      title: "Calle Perdida 2",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMbHSlSMlpjOb8DjI_HJCHSL_FAGlcccl6fg&s",
      genres: ["Action", "Thriller"],
      quality: "HD 720p",
      language: "Multi",
      link: "/movie/preview?id=calle-perdida-2",
      isAd: true,
      adImage: "https://marketplace.canva.com/EAGcEvo0NCs/1/0/1131w/canva-yellow-and-black-burger-promotional-poster-zO5UenmZ_fg.jpg",
      adLink: "https://hungama.com",
    },
    {
      id: 5,
      title: "Kaamraj 2",
      image: "https://image.tmdb.org/t/p/original/t4FC3XOQTGF66JnotzXpNsBnZSH.jpg",
      genres: ["Drama", "Romance"],
      quality: "HD 720p",
      language: "Multi",
      link: "/movie/preview?id=kaamraj-2",
      isAd: true,
      adImage: "https://marketplace.canva.com/EAGcEvo0NCs/1/0/1131w/canva-yellow-and-black-burger-promotional-poster-zO5UenmZ_fg.jpg",
      adLink: "https://hungama.com",
      adText: "hungama OTT",
      adButtonText: "OPEN",
    },
    {
      id: 6,
      title: "Jack",
      image: "https://image.tmdb.org/t/p/original/t4FC3XOQTGF66JnotzXpNsBnZSH.jpg",
      genres: ["Horror", "Thriller"],
      quality: "HD 720p",
      language: "Multi",
      link: "/movie/preview?id=jack",
      isTeaser: true,
    },
  ];

  return (
    <section className="py-6 px-4 bg-gray-900">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[1rem] md:text-2xl font-bold text-white">
            {title}
          </h2>
          <Link to={viewAllLink} className="text-white">
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {movies.map((movie) => (
            <div key={movie.id} className="relative">
              {movie.isAd ? (
                // Ad Card
                // Regular Movie Card
                <Link to={movie.link} className="block">
                  <div className="relative">
                    <img
                      src={movie.adImage}
                      alt={movie.title}
                      className="w-full object-cover aspect-[2/3] rounded-lg overflow-hidden"
                    />
                    {/* Language Tag */}
                    <div className="absolute top-2 left-2">
                      <span className="bg-yellow-500 text-black px-2 py-0.5 text-xs font-medium rounded">
                        {/* {movie.language} */}
                        ADD
                      </span>
                    </div>
                    {/* Teaser Tag */}
                    {movie.isTeaser && (
                      <div className="absolute top-2 right-2">
                        <span className="bg-red-600 text-white px-2 py-0.5 text-xs font-medium rounded">
                          TEASER
                        </span>
                      </div>
                    )}
                    {/* Movie Info */}
                    <div className="bottom-0 left-0 right-0 pt-2">
                      <h3 className="text-white font-medium text-[12px] mb-1 line-clamp-2">
                        Burger Hub
                      </h3>
                      {/* <p
                        style={{ lineHeight: 1 }}
                        className="text-gray-300 text-[10px] mb-1"
                      >
                        {movie.genres.join(", ")}
                      </p>
                      <p className="text-yellow-500 text-[11px] font-medium">
                        {movie.quality}
                      </p> */}
                    </div>
                  </div>
                </Link>
              ) : (
                // Regular Movie Card
                <Link to={movie.link} className="block">
                  <div className="relative">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="w-full object-cover aspect-[2/3] rounded-lg overflow-hidden"
                    />
                    {/* Language Tag */}
                    <div className="absolute top-2 left-2">
                      <span className="bg-yellow-500 text-black px-2 py-0.5 text-xs font-medium rounded">
                        {movie.language}
                      </span>
                    </div>
                    {/* Teaser Tag */}
                    {movie.isTeaser && (
                      <div className="absolute top-2 right-2">
                        <span className="bg-red-600 text-white px-2 py-0.5 text-xs font-medium rounded">
                          TEASER
                        </span>
                      </div>
                    )}
                    {/* Movie Info */}
                    <div className="bottom-0 left-0 right-0 pt-2">
                      <h3 className="text-white font-medium text-[12px] mb-1 line-clamp-2">
                        {movie.title}
                      </h3>
                      <p
                        style={{ lineHeight: 1 }}
                        className="text-gray-300 text-[10px] mb-1"
                      >
                        {movie.genres.join(", ")}
                      </p>
                      <p className="text-yellow-500 text-[11px] font-medium">
                        {movie.quality}
                      </p>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
