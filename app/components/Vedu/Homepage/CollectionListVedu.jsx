import React from "react";
import { Link } from "@remix-run/react";

export default function CollectionListVedu() {
  const collections = [
    {
      id: 1,
      name: "Osman Ghazi",
      image: "https://mir-s3-cdn-cf.behance.net/projects/404/8c8f99200286341.Y3JvcCwxOTk5LDE1NjQsMCwyMTc.jpg",
      link: "/movie/collection?id=osman",
    },
    {
      id: 2,
      name: "Ertugrul Ghazi",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxZf1Hlda1toivYyw5QARpW_eCloW4CN5zgA&s",
      link: "/movie/collection?id=ertugrul",
    },
    {
      id: 3,
      name: "Barbarosa",
      image: "https://mena-img-cdn-lb.aws.playco.com/1200w/trt/BARBAROSSAY2021S01E002AR/BARBAROSSAY2021S01E002AR-1536x614-DHE.jpg",
      link: "/movie/collection?id=barbarosa",
    },
    {
      id: 4,
      name: "Karab�k",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxZf1Hlda1toivYyw5QARpW_eCloW4CN5zgA&s",
      link: "/movie/collection?id=karabok",
    },
    {
      id: 5,
      name: "Karab�k",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxZf1Hlda1toivYyw5QARpW_eCloW4CN5zgA&s",
      link: "/movie/collection?id=karabok",
    },
    {
      id: 6,
      name: "Karab�k",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxZf1Hlda1toivYyw5QARpW_eCloW4CN5zgA&s",
      link: "/movie/collection?id=karabok",
    },
    {
      id: 7,
      name: "Karab�k",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxZf1Hlda1toivYyw5QARpW_eCloW4CN5zgA&s",
      link: "/movie/collection?id=karabok",
    },
    {
      id: 8,
      name: "Karab�k",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxZf1Hlda1toivYyw5QARpW_eCloW4CN5zgA&s",
      link: "/movie/collection?id=karabok",
    },
  ];

  return (
    <section className="py-0 pt-2 px-4 bg-gray-900">
      <div className="container mx-auto">
        <div className="flex space-x-3 overflow-x-auto pb-4 scrollbar-hide">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={collection.link}
              className="flex-shrink-0 relative"
              //   style={{ width: "150px", height: "auto", aspectRatio: "16/10" }}
            >
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-full object-cover transition-transform rounded-lg overflow-hidden  hover:scale-105"
                style={{ width: "100px", height: "auto", aspectRatio: "16/10" }}
              />
              <div className="inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <h3 className="text-white text-[12px] mt-[4px] text-left">
                {collection.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
