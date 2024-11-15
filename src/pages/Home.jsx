import React from "react";
import { useState, useEffect } from "react";
import { VideoCard } from "../components/VideoCard";
import { useDispatch, useSelector } from "react-redux";

export const Home = ({ category }) => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.youtube.searchQuery); // Access the searchQuery from Redux

  const [videos, setVideos] = useState([]);
  const API_KEY = import.meta.env.VITE_API_KEY; // Replace with your YouTube API key
  console.log(API_KEY);
  const fetchVideos = async () => {
    try {
      const YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
        searchQuery
      )}&maxResults=30&type=video&videoDuration=medium${category}&key=${API_KEY}`;

      const response = await fetch(YOUTUBE_API_URL);
      // const response = await fetch("/data.json");
      const data = await response.json();
      // console.log(data);
      setVideos(data.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchVideos();
    if (searchQuery) {
      fetchVideos();
    }
  }, [searchQuery, category]);

  return (
    <div className="w-[100vw] bg-zinc-900 mt-14 pt-6 font-roboto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-5 gap-y-8">
          {videos?.map((video) => (
            <VideoCard video={video} key={video.id.videoId} />
          ))}
        </div>
      </div>
    </div>
  );
};
