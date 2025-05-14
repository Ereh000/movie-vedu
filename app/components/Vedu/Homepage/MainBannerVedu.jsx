import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "@remix-run/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function MainBannerVedu() {
  const bannerImages = [
    {
      id: 11,
      image:
        "https://m.media-amazon.com/images/M/MV5BNTE4ZmZmNjYtM2U4ZS00YjE3LTgyMTUtNzdkN2Q5NWVhNTk2XkEyXkFqcGdeQWxiaWFtb250._V1_.jpg",
      title: "Kung Fu Huslte",
      language: "Multi",
    },
    {
      id: 1,
      image: "https://i.ytimg.com/vi/s6uaIBOyopM/maxresdefault.jpg",
      title: "Sultan Fateh",
      language: "Urdu",
    },
    {
      id: 2,
      image:
        "https://qph.cf2.quoracdn.net/main-qimg-9c96d662ac3130ec8c56a85e059989ed-lq",
      title: "Kurlus Osman",
      language: "Urdu",
    },
    {
      id: 3,
      image:
        "https://powertraveller.com/wp-content/uploads/2024/09/istanbul-ertugrul-osman-gazi-film-set-tour-with-lunch.jpg",
      title: "Ertugrul Gazi",
      language: "Urdu",
    },
  ];

  const [playlistVideos, setPlaylistVideos] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [searchParams] = useSearchParams();
  const playlistId = searchParams.get("playlist") || "x9oqly"; // Example playlist ID

  useEffect(() => {
    const fetchPlaylistVideos = async () => {
      try {
        // Fetch playlist videos
        const url = `https://api.dailymotion.com/playlist/${playlistId}/videos?fields=id,title,thumbnail_url,duration`;
        const response = await fetch(url);
        const data = await response.json();
        console.log("data", data);
        if (data.list) {
          setPlaylistVideos(data.list);
        }
      } catch (error) {
        console.error("Error fetching playlist:", error);
      }
    };

    fetchPlaylistVideos();
  }, [playlistId]);

  return (
    <section className="main_veduBanner">
      <div className="relative w-full">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="mySwiper"
        >
          {bannerImages.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div
                className="relative w-full h-[auto] md:h-[500px] overflow-hidden"
                style={{ aspectRatio: "16/10" }}
              >
                <Link to={`/movie/preview?id=${banner.id}`}>
                  <div className="absolute inset-0">
                    <img
                      src={banner.image}
                      alt={banner.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                    <div className="badge_wrapper">
                      <span className="language gold_bg">{banner.language}</span>
                      <span className="Qualtity gold_bg">HD</span>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
