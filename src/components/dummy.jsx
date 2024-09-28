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
