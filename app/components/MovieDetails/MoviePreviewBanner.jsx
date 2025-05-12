// import React, { useEffect, useState } from "react";
// import { Link, useSearchParams } from "@remix-run/react";
// import { TMDB_API_KEY, TMDB_IMAGE_BASE_URL } from "../../utils/tmdb.config";
// import VideoPlayer from "./VideoPlayer";

// export default function MoviePreviewBanner({ movie }) {
//   const [searchParams] = useSearchParams();
//   const movieId = searchParams.get("id");
//   const [movieDetails, setMovieDetails] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [showVideoPlayer, setShowVideoPlayer] = useState(false);
//   const [videoId, setVideoId] = useState(null);

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       if (!movieId) return;

//       setIsLoading(true);
//       const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
//       try {
//         const response = await fetch(url, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${TMDB_API_KEY}`,
//           },
//         });
//         const data = await response.json();
//         console.log("movieDetails", data);
//         setMovieDetails(data);
//       } catch (err) {
//         console.error("Error fetching movie details:", err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchMovieDetails();
//   }, [movieId]);

//   useEffect(() => {
//     const fetchVideoData = async () => {
//       if (!movieId) return;

//       try {
//         const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
//         const response = await fetch(url, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${TMDB_API_KEY}`,
//           },
//         });
//         const data = await response.json();
//         const video = data.results.find(
//           (v) => v.type === "Trailer" || v.type === "Teaser"
//         );
//         if (video) {
//           setVideoId(video.key);
//         }
//       } catch (err) {
//         console.error("Error fetching video data:", err);
//       }
//     };

//     fetchVideoData();
//   }, [movieId]);

//   const handlePlayClick = () => {
//     if (videoId) {
//       setShowVideoPlayer(true);
//     } else {
//       alert("No video available for this movie");
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-black">
//         <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-600"></div>
//       </div>
//     );
//   }

//   const defaultMovie = {
//     id: movieDetails?.id || 1233069,
//     title: movieDetails?.title || "",
//     description: movieDetails?.overview || "Indian RAW agent \"Pathaan\" (Shah Rukh Khan) gets to know of a major impending attack against India, mounted by a mercenary group led by the ruthless enigma Jim.",
//     posterImage: `${TMDB_IMAGE_BASE_URL}/w500${movieDetails?.poster_path}` || "https://wallpapercave.com/wp/wp4074461.jpg",
//     rating: movieDetails?.vote_average || 7.0,
//     duration: movieDetails?.runtime ? `${movieDetails.runtime} min` : "2h 26m",
//     year: movieDetails?.release_date ? new Date(movieDetails.release_date).getFullYear() : 2023,
//     quality: "HD",
//     ageRating: movieDetails?.age_rating || "U/A",
//     genres: movieDetails?.genres ? movieDetails.genres.map(genre => genre.name) : ["Action", "Adventure", "Thriller"],
//     streamingService: movieDetails?.streaming_service || "Netflix",
//     includeWithSubscription: true
//   };

//   const movieData = movie || defaultMovie;

//   return (
//     <>
//       <div className="relative w-full h-[80vh] pt-10 md:h-[100vh] overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${movieData.posterImage})` }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent">
//             {/* Add bottom gradient overlay */}
//             {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent bottom-0 h-32"></div> */}
//           </div>
//         </div>

//         <div className="relative h-full container mx-auto px-4 md:px-8 lg:px-16 flex items-center">
//           <div className="max-w-2xl">
//             <h1 className="text-3xl lg:text-6xl font-bold text-white mb-4">{movieData.title}</h1>
//             <p className="text-white/90 text-[14px] md:text[15px] lg:text-[1.3rem] mb-4 md:mb-6 line-clamp-3">{movieData.description}</p>

//             <div className="flex items-center space-x-4 mb-4 text-[12px] text-white/80">
//               <div className="flex items-center">
//                 <span className="text-yellow-400 mr-1">IMDb</span>
//                 <span>{movieData.rating}</span>
//               </div>
//               <span>{movieData.duration}</span>
//               <span>{movieData.year}</span>
//               <span className="bg-gray-700 px-2 py-0.5 rounded">{movieData.quality}</span>
//               <span className="bg-gray-700 px-2 py-0.5 rounded">{movieData.ageRating}</span>
//             </div>

//             <div className="flex flex-wrap text-[11px] items-center mb-4 md:mb-8 text-white/80">
//               {movieData.genres.map((genre, index) => (
//                 <React.Fragment key={genre}>
//                   <Link to={`/genre/${genre.toLowerCase()}`} className="hover:text-white transition-colors">
//                     {genre}
//                   </Link>
//                   {index < movieData.genres.length - 1 && (
//                     <span className="mx-1">•</span>
//                   )}
//                 </React.Fragment>
//               ))}
//             </div>

//             <div className="flex flex-wrap gap-2">
//               <Link to={`/movieplayer?id=${videoId}`}>
//                 <button
//                   // onClick={handlePlayClick}
//                   style={{ lineHeight: 1 }}
//                   className="bg-white h-full hover:bg-white/90 text-black text-[12px] px-4 ps-2 py-1 md:px-8 md:py-3 rounded-md flex items-center font-medium transition-colors"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 md:mr-2" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
//                   </svg>
//                   Play
//                 </button>
//               </Link>

//               <button style={{ lineHeight: 1 }} className="bg-gray-600/80 ps-2 hover:bg-gray-600 text-[12px] text-white  px-4 py-[2px] md:px-8 md:py-3  rounded-md flex items-center font-medium transition-colors">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4  mr-1 md:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//                 </svg>
//                 Watchlist
//               </button>

//               <button className="bg-gray-600/80 hover:bg-gray-600 text-white p-3 rounded-md flex items-center font-medium transition-colors">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
//                 </svg>
//               </button>

//               <button className="bg-gray-600/80 hover:bg-gray-600 text-white p-3 rounded-md flex items-center font-medium transition-colors">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
//                 </svg>
//               </button>
//             </div>

//             {movieData.includeWithSubscription && (
//               <div className="mt-6 flex items-center text-white">
//                 <div className="flex items-center">
//                   <div className="w-4 h-4 bg-blue-500 rounded-full mr-2 flex items-center justify-center">
//                     <div className="w-2 h-2 bg-white rounded-full"></div>
//                   </div>
//                   <span className="text-[12px]">Included with {movieData.streamingService}</span>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {showVideoPlayer && videoId && (
//         <VideoPlayer
//           videoId={videoId}
//           onClose={() => setShowVideoPlayer(false)}
//         />
//       )}
//     </>
//   );
// }