import type { MetaFunction } from "@remix-run/node";
import MainBanner from "../components/Homepage/MainBanner";
import MovieCards from "../components/Homepage/MovieCards";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <div className="home__page relative pb-8">
        <section>
          <MainBanner />
          <MovieCards title="Only on Netflix" />
          <MovieCards title="Top Searches" />
          <MovieCards title="Japanise TV Show" />
        </section>
      </div>
    </>
  );
}
