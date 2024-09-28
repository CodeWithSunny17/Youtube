import React from "react";
import { Link } from "react-router-dom";

export default function VideoCard({ video }) {
  return (
    <div>
      <Link
        to={`/video/${video.id.videoId}`}
        key={video.id.videoId}
        title={video.snippet.title}
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

          <h3 className="text-white mt-2 text-lg">{video.snippet.title}</h3>
          <p className="text-gray-400 text-sm">{video.snippet.channelTitle}</p>
        </div>
      </Link>
    </div>
  );
}
