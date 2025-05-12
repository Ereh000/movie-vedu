import React from "react";
import { Link } from "@remix-run/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function MainBannerVedu() {
  const bannerImages = [
    {
      id: 11,
      image: "https://i.ytimg.com/vi/eQULWOwwueY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB6F1W-ciLbdlsso5_6l9Q_jkfsbg",
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
                      <span className="language">{banner.language}</span>
                      <span className="Qualtity">HD</span>
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
