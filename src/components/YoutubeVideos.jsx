import React from "react";
import { useState, useEffect } from "react";

const API_KEY = "AIzaSyDLp7mlqZetpnS4yY-AresPkNLfBTN7ZX0"; // Replace with your YouTube API key
const YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=${API_KEY}`;

export default function YoutubeVideos() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null); // Store the selected video

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(YOUTUBE_API_URL);
        const data = await response.json();
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
    <div className="container mx-auto p-6">
      {selectedVideo ? (
        <div className="video-player-container">
          <button
            onClick={handleClosePlayer}
            className="mb-4 p-2 bg-red-500 text-white rounded"
          >
            Close Player
          </button>
          <div className="video-player">
            {/* Embed YouTube Player */}
            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube Video Player"
            ></iframe>
          </div>
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-6">YouTube Home Page</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {videos?.map((video) => (
              <div
                key={video.id.videoId}
                className="bg-gray-900 p-4 rounded-lg shadow-lg cursor-pointer"
                onClick={() => handleVideoClick(video.id.videoId)} // Handle video click
              >
                <img
                  src={video.snippet.thumbnails.high.url}
                  alt={video.snippet.title}
                  className="w-full rounded-lg"
                />
                <h3 className="text-white mt-2 text-lg">
                  {video.snippet.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {video.snippet.channelTitle}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
