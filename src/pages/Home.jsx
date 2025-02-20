import React, { useState, useEffect } from "react";
import { VideoCard } from "../components/VideoCard";
import { useSelector } from "react-redux";

export const Home = ({ category }) => {
  const searchQuery = useSelector((state) => state.youtube.searchQuery);
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null); // Track pagination
  const [loading, setLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_API_KEY;

  const fetchVideos = async (pageToken = "") => {
    if (loading) return; // Prevent multiple requests
    setLoading(true);

    try {
      const YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
        searchQuery
      )}&maxResults=12&type=video&videoDuration=medium${category}&pageToken=${pageToken}&key=${API_KEY}`;

      const response = await fetch(YOUTUBE_API_URL);
      const data = await response.json();

      if (data.items) {
        setVideos((prev) => [...prev, ...data.items]); // Append new videos
        setNextPageToken(data.nextPageToken || null);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setVideos([]); // Reset videos when query/category changes
    fetchVideos();
  }, [searchQuery, category]);

  // Infinite Scroll - Load more when reaching the bottom
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        if (nextPageToken) fetchVideos(nextPageToken);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [nextPageToken]);

  return (
    <div className="w-full bg-zinc-900 mt-14 pt-6 font-roboto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
          {videos.map((video) => (
            <VideoCard video={video} key={video.id.videoId} />
          ))}
        </div>

        {/* Loading Indicator */}
        {loading && (
          <p className="text-center text-gray-400 mt-4">
            Loading more videos...
          </p>
        )}
      </div>
    </div>
  );
};
