// import React from "react";

// export default function VideoPlayer({ videoId, onClose }) {
//   return (
//     <div className="fixed h-80vh inset-0 z-50 bg-black/90 flex items-center justify-center">
//       {/* Close button */}
//       <button
//         onClick={onClose}
//         className="absolute top-[4rem] right-[1rem] text-white hover:text-gray-300 z-50"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-8 w-8"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M6 18L18 6M6 6l12 12"
//           />
//         </svg>
//       </button>

//       {/* Video iframe */}
//       <div className="w-full h-full md:w-[90%] md:h-[80vh] relative">
//         <iframe
//           src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
//           className="absolute inset-0 w-full h-full"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         ></iframe>
//       </div>
//     </div>
//   );
// }