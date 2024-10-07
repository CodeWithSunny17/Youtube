// <div className="container mx-auto mt-14 pt-6 font-roboto">
//   <div className="video-player-container h-[100vh]">
//     <div className="video-player">
//       <iframe
//         width="100%"
//         height="500"
//         src={`https://www.youtube.com/embed/${videoId}`}
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//         title="YouTube Video Player"
//       ></iframe>
//     </div>
//     <h2 className="text-2xl mt-4">
//       Video title-Lorem ipsum dolor sit amet.
//     </h2>
//     <div className="mt-4">
//       <div className="flex justify-between items-center">
//         <div>fvfv</div>
//         <div className="flex justify-center items-center gap-2">
//           <div className="pl-7 flex justify-center items-center gap-10 bg-zinc-700 py-3 px-5 rounded-full">
//             <span className="w-6 flex justify-center items-center">
//               <img src={like} alt="" />
//               1247
//             </span>

//             <span className="w-6 flex justify-center items-center">
//               <img src={dislike} alt="" />
//             </span>
//           </div>
//           <div className=" bg-zinc-700 py-3 px-8 rounded-full">
//             <span className="w-6 flex justify-center items-center">
//               <img src={share} alt="" />
//               Share
//             </span>
//           </div>
//           <div className=" bg-zinc-700 py-3 px-8 rounded-full">
//             <span className="w-6 flex justify-center items-center">
//               <img src={save} alt="" />
//               Save
//             </span>
//           </div>
//         </div>
//       </div>
//       <div>
//         <p>16k Views &bull; 2 days ago</p>
//       </div>
//     </div>
//   </div>
// </div>

////////////////////////////////

// const fetchVideos = async () => {
//   try {
//     const response = await fetch(YOUTUBE_API_URL);
//     //const response = await fetch("/data.json");
//     const data = await response.json();
//     // console.log(data);
//     setVideos(data.items);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };

//////////////

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import avatar from "../assets/jack.png";
// import { MdThumbUp, MdThumbDown, MdShare, MdPlaylistAdd } from "react-icons/md";
// import { YT_API_KEY } from "../../key";

// export default function VideoPlay({}) {
//   const { videoId } = useParams();
//   const [selectedVideo, setSelectedVideo] = useState();

//   const fetchVideos = async () => {
//     try {
//       const VIDEO_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${YT_API_KEY}`;
//       const response = await fetch(VIDEO_URL);
//       const data = await response.json();
//       // console.log(data);
//       setSelectedVideo(data.items[0]);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchVideos();
//   }, []);

//   console.log(selectedVideo);
//   return (
//     <div className="flex justify-center g-8 flex-row p-6">
//       <div className="mt-14 lg:w-3/4 lg:pr-8 font-roboto">
//         {/* Video Player */}
//         <div className="aspect-w-16 aspect-h-9 bg-black mb-4">
//           <iframe
//             width="100%"
//             height="500"
//             src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             title="YouTube Video Player"
//           ></iframe>
//         </div>

//         {/* Video Info */}
//         <h2 className="text-2xl font-semibold mb-2">
//           {selectedVideo.snippet.title}
//         </h2>
//         <div className="flex justify-between items-center text-sm mb-4">
//           <div className="flex items-center justify-between gap-4 py-4 mb-4">
//             <div className="flex items-center">
//               <img
//                 src={avatar}
//                 alt="Channel Avatar"
//                 className="rounded-full mr-4 w-12"
//               />
//               <div>
//                 <h3 className="font-semibold">
//                   {selectedVideo.snippet.channelTitle}
//                 </h3>
//                 <p className="text-sm ">1M subscribers</p>
//               </div>
//             </div>
//             <button className="bg-red-600 text-white px-4 py-2 rounded-full">
//               Subscribe
//             </button>
//           </div>
//           <div className="flex space-x-4 text-base">
//             <button className="flex items-center">
//               <MdThumbUp className="mr-1" /> 10K
//             </button>
//             <button className="flex items-center">
//               <MdThumbDown className="mr-1" /> Dislike
//             </button>
//             <button className="flex items-center">
//               <MdShare className="mr-1" /> Share
//             </button>
//             <button className="flex items-center">
//               <MdPlaylistAdd className="mr-1" /> Save
//             </button>
//           </div>
//         </div>

//         {/* Desc Info */}
//         <div className="bg-zinc-800 p-2 rounded-xl">
//           <span>123,456 views • Jan 1, 2023</span>
//           <p>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
//             totam id nemo unde, maxime accusantium assumenda iste neque eveniet
//             nobis officia adipisci inventore illo dolorem numquam! Tempora
//             recusandae et aliquam sapiente incidunt? Illo, et aperiam, sequi ab
//             ut itaque ullam numquam quo eius dolores placeat accusamus, non
//             ipsam eligendi labore! Lorem ipsum dolor sit amet consectetur
//             adipisicing elit. Officia, nisi quisquam culpa hic voluptatem maxime
//             accusamus similique. Commodi, nesciunt molestias.
//           </p>
//         </div>

//         {/* Comments Section */}
//         <div className="mt-3">
//           <h3 className="text-xl font-semibold mb-4">Comments</h3>
//           {/* Add comment components here */}
//         </div>
//       </div>
//       {/* playlist */}
//       <div className="lg:w-1/4 m-14">
//         <h3 className="text-lg font-semibold mb-4">Up next</h3>
//         {/* Recommended Videos */}
//         {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
//           <div key={index} className="flex mb-4">
//             <img
//               src="/api/placeholder/168/94"
//               alt="Thumbnail"
//               className="w-40 h-24 object-cover mr-2"
//             />
//             <div>
//               <h4 className="font-semibold text-sm">Recommended Video Title</h4>
//               <p className="text-xs text-gray-600">Channel Name</p>
//               <p className="text-xs text-gray-600">100K views • 1 day ago</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
