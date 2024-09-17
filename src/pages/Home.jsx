import React from "react";
import { useState, useEffect } from "react";
import YT_API_KEY from "../../key";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const API_KEY = YT_API_KEY; // Replace with your YouTube API key
const YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video&videoDuration=medium&key=${API_KEY}`;

const Home = () => {
  const params = useParams();

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null); // Store the selected video

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // const response = await fetch(YOUTUBE_API_URL);
        const response = await fetch("/data.json");
        const data = await response.json();
        // console.log(data);
        setVideos(data.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchVideos();
  }, []);

  const handleVideoClick = (videoId) => {
    setSelectedVideo(videoId); // Set the selected video ID
  };

  const handleClosePlayer = () => {
    setSelectedVideo(null); // Clear the selected video to go back to the grid
  };

  return (
    <div className="w-[100vw] bg-zinc-900 mt-14 pt-6">
      <div className="container mx-auto">
        {/* <h1 className="text-3xl font-bold mb-6">YouTube Home Page</h1> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-5 gap-y-8">
          {videos?.map((video) => (
            <Link
              to={`/video/${video.id.videoId}`}
              key={video.id.videoId}
              onClick={() => handleVideoClick(video.id.videoId)}
            >
              <div
                key={video.id.videoId}
                className="p-0 rounded-lg shadow-lg cursor-pointer"
              >
                <div className="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden">
                  <img
                    src={video.snippet.thumbnails.high.url}
                    alt={video.snippet.title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-white mt-2 text-lg">
                  {video.snippet.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {video.snippet.channelTitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
