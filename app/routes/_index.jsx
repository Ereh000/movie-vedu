// import MainBanner from "../components/Homepage/MainBanner";
// import MovieCards from "../components/Homepage/MovieCards";
import CollectionListVedu from "../components/Vedu/Homepage/CollectionListVedu";
import MainBannerVedu from "../components/Vedu/Homepage/MainBannerVedu";
import MovieCardsVedu from "../components/Vedu/Homepage/MovieCardsVedu";

// Popular Series

const trending = [
  {
    id: "PLhZ6noC4SAv2mBlzzGt8Y5IKbA6mDexWJ",
    title: "Mann Mast Malang",
    image: "https://m.media-amazon.com/images/M/MV5BYTcyOGZjZDgtNzM3Ny00MWFhLTllNTQtMTQwYWFmNmYxYjM2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    genres: ["Drama"],
    quality: "HD 720p",
    language: "urdu",
    link: "/movie/preview?id=jack",
    // isTeaser: true,
  },
  {
    id: "PLhZ6noC4SAv253Pj1_zIQeFBOrG088yUT",
    title: "Dastak",
    image: "https://m.media-amazon.com/images/M/MV5BNWQxNGE3NzgtYmZhNC00MTM0LTljNTQtM2IyYWFmMTc1NGNhXkEyXkFqcGc@._V1_.jpg",
    genres: ["Drama"],
    quality: "pDVDRip",
    language: "Urdu",
    link: "/movie/preview?id=retro-2025",
  },
  {
    id: "PLhZ6noC4SAv3LyjGjUEHVbjC4_apwMbwA",
    title: "Shikwa",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1kkpCfdbw_9o75UCFkDAfk4pUb5EjGHEiDQ&s",
    genres: ["Drama"],
    quality: "HD 720p",
    language: "Urdu",
    link: "/movie/preview?id=bad-influence-2025",
  },
  {
    id: "PLhZ6noC4SAv09SqyJIXmwbxgXPfLQ0rPK",
    title: "Naqaab",
    image: "https://m.media-amazon.com/images/M/MV5BZGFhMWU4YWItNDA0My00ODEyLTg4OWEtYTA0NDA0OTBkZTMzXkEyXkFqcGc@._V1_.jpg",
    genres: ["Drama"],
    quality: "HD 720p",
    language: "Urdu",
    link: "/movie/preview?id=nonnas-2025",
  },
  {
    id: "PLhZ6noC4SAv31D7GYCE5B-ybLguq9Loby",
    title: "Kabhi me kabhi tum",
    image: "https://m.media-amazon.com/images/M/MV5BNjQxOTkwMjUtMjI5Ni00MGFlLTk4MzItNzFmZDdkZjJmMDc1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    genres: ["Action", "Thriller"],
    quality: "HD 720p",
    language: "Urdu",
    link: "/movie/preview?id=calle-perdida-2",
    isAd: false,
    adImage: "https://marketplace.canva.com/EAGcEvo0NCs/1/0/1131w/canva-yellow-and-black-burger-promotional-poster-zO5UenmZ_fg.jpg",
    adLink: "https://hungama.com",
  },
  {
    id: "PLhZ6noC4SAv0PRdVrX2oN9XYd0vM0fIrG",
    title: "Parwarish",
    image: "https://m.media-amazon.com/images/M/MV5BNzYyMzk2MDAtZDgwMy00MWNlLTliNWUtZWM4YzJhOGZhODAwXkEyXkFqcGc@._V1_.jpg",
    genres: ["Drama"],
    quality: "HD 720p",
    language: "Urdu",
    link: "/movie/preview?id=kaamraj-2",
    isAd: false,
    adImage: "https://marketplace.canva.com/EAGcEvo0NCs/1/0/1131w/canva-yellow-and-black-burger-promotional-poster-zO5UenmZ_fg.jpg",
    adLink: "https://hungama.com",
    adText: "hungama OTT",
    adButtonText: "OPEN",
  },
];

const mostPopular = [
  {
    id: "PLI6jYYEI0TDpe2INcKK8rcDL0I57vg03i",
    image:
      "https://i.pinimg.com/736x/50/f9/cf/50f9cf7f51fee932e0e009cdd8e5e6aa.jpg",
    title: "Kurlus Osman",
    language: "Urdu",
  },
  {
    id: "PLgirwYDDPtS1WCOoySLNlrjZUnoym89ZZ",
    image: "https://i.pinimg.com/736x/e3/81/c8/e381c879ca128b0c12541a6149ab0c0a.jpg",
    title: "Sultan Abdul Hameed",
    language: "Urdu",
  },
  {
    id: "PLgirwYDDPtS2Tz7K6PZMYi_d8SeXQg-T5",
    image: "https://i.pinimg.com/736x/38/95/e9/3895e9173df4414c189704fe87e87250.jpg",
    title: "Ertugrul Ghazi",
    genres: ["Historical"],
    quality: "HD 720p",
    language: "Urdu",
  },
  {
    id: "PLgirwYDDPtS3AgavyUHqWVwFaalp-lv-P",
    image: "https://i.pinimg.com/736x/9b/43/23/9b4323d9d7d115ef23c90bb7fcd4722d.jpg",
    title: "Yunus Emre",
    language: "Urdu",
  },
];


export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <div className="home__page bg-slate-900 relative pb-8">
        <section>
          <MainBannerVedu />
          <CollectionListVedu />
          <MovieCardsVedu series={trending} title="Trending" />
          <MovieCardsVedu series={mostPopular} title="Most Popular" />
          {/* <MovieCardsVedu title="Featured Series" />
          <MovieCardsVedu title="Most Popular" />
          <MovieCardsVedu title="Latest" />
          <MovieCardsVedu title="Featured Series" />
          <MovieCardsVedu title="Most Popular" />
          <MovieCardsVedu title="Latest" />
          <MovieCardsVedu title="Featured Series" /> */}
        </section>
      </div>
    </>
  );
}