import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import avatar from "../assets/jack.png";
import { MdThumbUp, MdThumbDown, MdShare, MdPlaylistAdd } from "react-icons/md";

export function VideoPlay() {
  const { videoId } = useParams();
  const navigate = useNavigate();

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);

  const API_KEY = import.meta.env.VITE_API_KEY;

  const fetchVideoDetails = async () => {
    try {
      const VIDEO_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoId}&key=${API_KEY}`;
      const response = await fetch(VIDEO_URL);
      const data = await response.json();
      if (data.items?.length > 0) setSelectedVideo(data.items[0]);
    } catch (error) {
      console.error("Error fetching video details:", error);
    }
  };

  const fetchRelatedVideos = async () => {
    if (!videoId) return;

    try {
      const RELATED_VIDEOS_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&videoDuration=medium&key=${API_KEY}`;
      const response = await fetch(RELATED_VIDEOS_URL);
      const data = await response.json();
      if (data.items?.length > 0) setRelatedVideos(data.items);
    } catch (error) {
      console.error("Error fetching related videos:", error);
    }
  };

  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideos();
  }, [videoId]);

  return (
    <div className="mt-14 flex flex-col lg:flex-row gap-6 p-4 lg:p-6">
      {/* Main Video Section */}
      <div className="w-full lg:w-2/3">
        {/* Video Player */}
        <div className="w-full aspect-w-16 aspect-h-9 bg-black mb-4 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Video Player"
          ></iframe>
        </div>

        {/* Video Info */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">
          {selectedVideo?.snippet?.title || "Loading..."}
        </h2>
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center text-sm mb-4">
          <div className="flex items-center gap-4 py-4">
            <img
              src={avatar}
              alt="Channel Avatar"
              className="rounded-full w-12"
            />
            <div>
              <h3 className="font-semibold">
                {selectedVideo?.snippet?.channelTitle || "Channel Name"}
              </h3>
              <p className="text-sm text-gray-600">1M subscribers</p>
            </div>
          </div>

          {/* Video Stats & Buttons */}
          <div className="flex space-x-2 sm:space-x-4 text-sm sm:text-base mt-2 sm:mt-0">
            <button className="flex items-center bg-gray-800 px-3 py-1 rounded-md">
              <MdThumbUp className="mr-1" />{" "}
              {selectedVideo?.statistics?.likeCount || "0"}
            </button>
            <button className="flex items-center bg-gray-800 px-3 py-1 rounded-md">
              <MdThumbDown className="mr-1" /> Dislike
            </button>
            <button className="flex items-center bg-gray-800 px-3 py-1 rounded-md">
              <MdShare className="mr-1" /> Share
            </button>
            <button className="flex items-center bg-gray-800 px-3 py-1 rounded-md">
              <MdPlaylistAdd className="mr-1" /> Save
            </button>
          </div>
        </div>
      </div>

      {/* Related Videos Section */}
      <div className="w-full lg:w-1/3 max-h-[500px] lg:max-h-screen overflow-y-auto px-2">
        <h3 className="text-lg font-semibold mb-4">Up next</h3>
        {relatedVideos.length > 0 ? (
          relatedVideos.map((video) => (
            <div
              key={video.id.videoId}
              className="flex mb-4 cursor-pointer"
              onClick={() => navigate(`/video/${video.id.videoId}`)}
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt="Thumbnail"
                className="w-36 h-24 object-cover mr-3 rounded-lg"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-sm">{video.snippet.title}</h4>
                <p className="text-xs text-gray-600">
                  {video.snippet.channelTitle}
                </p>
                <p className="text-xs text-gray-600">
                  {video.snippet.publishedAt.substring(0, 10)}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No related videos found.</p>
        )}
      </div>
    </div>
  );
}
