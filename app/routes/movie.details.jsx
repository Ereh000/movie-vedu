import React from "react";
import MoviePreviewBanner from "../components/MovieDetails/MoviePreviewBanner";
import MovieCards from "../components/Homepage/MovieCards";

export default function MovieDetails() {
  return <div>
    <section className="pb-8">
        <MoviePreviewBanner/>
        <MovieCards title="Related Movies" />
    </section>
  </div>;
}
