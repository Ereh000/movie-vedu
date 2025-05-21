import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "@remix-run/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function MainBannerVedu() {
  const bannerImages = [
    {
      id: "PLgirwYDDPtS2Tz7K6PZMYi_d8SeXQg-T5",
      image: "https://i.pinimg.com/736x/38/95/e9/3895e9173df4414c189704fe87e87250.jpg",
      title: "Ertugrul Ghazi",
      language: "Urdu",
    },
    {
      id: "PLgirwYDDPtS1WCOoySLNlrjZUnoym89ZZ",
      image: "https://i.pinimg.com/736x/e3/81/c8/e381c879ca128b0c12541a6149ab0c0a.jpg",
      title: "Sultan Abdul Hameed",
      language: "Urdu",
    },
    {
      id: "PLgirwYDDPtS3AgavyUHqWVwFaalp-lv-P",
      image: "https://i.pinimg.com/736x/9b/43/23/9b4323d9d7d115ef23c90bb7fcd4722d.jpg",
      title: "Yunus Emre",
      language: "Urdu",
    },
    {
      id: "PLI6jYYEI0TDpe2INcKK8rcDL0I57vg03i",
      image:
        "https://i.pinimg.com/736x/50/f9/cf/50f9cf7f51fee932e0e009cdd8e5e6aa.jpg",
      title: "Kurlus Osman",
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
          modules={[Pagination,
            //  Autoplay
            ]}
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
                style={{ aspectRatio: "3/4" }}
              >
                <Link to={`/movie/preview?playlist=${banner.id}`}>
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
