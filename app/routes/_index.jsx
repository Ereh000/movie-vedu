import MainBanner from "../components/Homepage/MainBanner";
import MovieCards from "../components/Homepage/MovieCards";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {

  return (
    <>
      <div className="home__page backdrop-blur-sm bg-black/90 relative pb-8">
        <section>
          <MainBanner />
          <MovieCards title="Now Playing" category="now_playing" />
          <MovieCards title="Top Rated" category="top_rated" />
          <MovieCards title="Up Comming" category="up_comming" />
          <MovieCards title="Popular" category="popular" />
        </section>
      </div>
    </>
  );
}
