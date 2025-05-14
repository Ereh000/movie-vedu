import React from "react";
import { Link, useParams } from "@remix-run/react";

export default function CollectionDetails() {
  // const { slug } = useParams();

  // This would typically come from a database or API
  // For this example, we'll use mock data
  const collection = {
    title: "Barbarosa All Seasons",
    description: "All Marvel Cinematic Universe movies and TV shows",
    movies: [
      {
        id: 1,
        title: "Iron Man",
        year: 2008,
        image: "https://i.pinimg.com/236x/a2/27/74/a22774f9d0a63b6fa4d8ffd7fad43348.jpg",
        quality: "HD 720p",
      },
      {
        id: 2,
        title: "Captain America: The First Avenger",
        year: 2011,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMbHSlSMlpjOb8DjI_HJCHSL_FAGlcccl6fg&s",
        quality: "HD 1080p",
      },
      {
        id: 3,
        title: "The Avengers",
        year: 2012,
        image: "https://image.tmdb.org/t/p/original/t4FC3XOQTGF66JnotzXpNsBnZSH.jpg",
        quality: "HD 720p",
      },
      {
        id: 4,
        title: "Thor: Ragnarok",
        year: 2017,
        image: "https://i.pinimg.com/236x/a2/27/74/a22774f9d0a63b6fa4d8ffd7fad43348.jpg",
        quality: "HD 1080p",
      },
      {
        id: 5,
        title: "Black Panther",
        year: 2018,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMbHSlSMlpjOb8DjI_HJCHSL_FAGlcccl6fg&s",
        quality: "HD 720p",
      },
      {
        id: 6,
        title: "Avengers: Endgame",
        year: 2019,
        image: "https://image.tmdb.org/t/p/original/t4FC3XOQTGF66JnotzXpNsBnZSH.jpg",
        quality: "HD 1080p",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <main className="container mx-auto px-4 py-6 pb-20">
        <div className="mb-6 text-center">
          <h1 className="text-xl md:text-3xl font-bold text-white">
            {collection.title}
          </h1>
          <p className="text-gray-400 text-[12px] mt-2">{collection.description}</p>
        </div>

        {collection.movies.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {collection.movies.map((movie) => (
              <Link
                key={movie.id}
                to={`/movie/${movie.id}`}
                className="block rounded-lg overflow-hidden transition-transform hover:scale-105"
              >
                <div className="relative aspect-[2/3]">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  {/* <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-white font-medium text-sm mb-1">
                      {movie.title}
                    </h3>
                    <p className="text-gray-300 text-xs mb-1">{movie.year}</p>
                    <p className="text-yellow-500 text-xs font-medium">
                      {movie.quality}
                    </p>
                  </div> */}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-400 text-lg">
              No movies found in this collection
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
