// import MainBanner from "../components/Homepage/MainBanner";
// import MovieCards from "../components/Homepage/MovieCards";
import CollectionListVedu from "../components/Vedu/Homepage/CollectionListVedu";
import MainBannerVedu from "../components/Vedu/Homepage/MainBannerVedu";
import MovieCardsVedu from "../components/Vedu/Homepage/MovieCardsVedu";

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
          <MovieCardsVedu title="Most Popular" />
          <MovieCardsVedu title="Latest" />
          <MovieCardsVedu title="Featured Series" />
          <MovieCardsVedu title="Most Popular" />
          <MovieCardsVedu title="Latest" />
          <MovieCardsVedu title="Featured Series" />
          <MovieCardsVedu title="Most Popular" />
          <MovieCardsVedu title="Latest" />
          <MovieCardsVedu title="Featured Series" />
        </section>
      </div>
    </>
  );
}
