import React from "react";
import { useState, useEffect } from "react";
import YT_API_KEY from "../../key";
import VideoCard from "../components/VideoCard";

const API_KEY = YT_API_KEY; // Replace with your YouTube API key
const YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video&videoDuration=medium&key=${API_KEY}`;

const Home = () => {
  const [videos, setVideos] = useState([]);

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

  return (
    <div className="w-[100vw] bg-zinc-900 mt-14 pt-6 font-roboto">
      <div className="container mx-auto">
        {/* <h1 className="text-3xl font-bold mb-6">YouTube Home Page</h1> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-5 gap-y-8">
          {videos?.map((video) => (
            <VideoCard video={video} key={video.id.videoId} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
