import React from "react";
import { Link } from "@remix-run/react";

export default function MovieCollection() {
  const collections = [
    {
      id: 1,
      title: "Barbarosa",
      image:
        "https://image.tmdb.org/t/p/original/t4FC3XOQTGF66JnotzXpNsBnZSH.jpg",
      slug: "barbarosa",
      count: 23,
    },
    {
      id: 2,
      title: "Ertgrul",
      image:
        "https://i.pinimg.com/736x/04/12/31/041231239378b53e1b58789165089ea2.jpg",
      slug: "ertgrul",
      count: 23,
    },
    {
      id: 3,
      title: "Yunus Emre",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkj9dfGjEzm2WJiabQ3RmZvnfbSogo1_kZOA&s",
      slug: "yunus-emre",
      count: 4,
    },
    {
      id: 4,
      title: "Sultan Fatih",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6IAFxtO549vqYMonuNwNFSp3rlWf0FGl4SA&s",
      slug: "sultan-fatih",
      count: 10,
    },
    {
      id: 5,
      title: "Sultan Fatih",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6IAFxtO549vqYMonuNwNFSp3rlWf0FGl4SA&s",
      slug: "sultan-fatih",
      count: 42,
    },
    {
      id: 6,
      title: "Sultan Abdul Hamid",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/source/c612e650556379.58d36c1643d2a.jpg",
      slug: "sultan-abdul-hamid",
      count: 35,
    },
    {
      id: 7,
      title: "Mehmat",
      image:
        "https://i.pinimg.com/736x/19/33/df/1933dfaeaac91773c9c505ecd8904457.jpg",
      slug: "mehmat",
      count: 28,
    },
    {
      id: 8,
      title: "Alp Arsalan",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZm8OWAO0UcM73b4AfjlzF2oNOPiqsBP7tKg&s",
      slug: "alp-arsalan",
      count: 50,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <main className="container mx-auto px-4 py-6 pb-20">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">
          All Collection
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={`/collection/${collection.slug}`}
              className="block "
            >
              <div className="relative">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover aspect-[2/3] rounded-lg overflow-hidden transition-transform hover:scale-105"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div> */}
                <div className="px-0 p-2">
                  <h3
                    className="text-white font-bold text-[14px]"
                    style={{ lineHeight: 1.4 }}
                  >
                    {collection.title}
                  </h3>
                  <p className="text-gray-300 text-[11px]">
                    {collection.count} Episodes
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
