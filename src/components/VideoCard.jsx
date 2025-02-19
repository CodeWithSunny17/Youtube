import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

export function VideoCard({ video }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Load once when in view
    threshold: 0.3, // Start loading when 30% visible
  });

  return (
    <div ref={ref} className="p-2 rounded-lg shadow-lg cursor-pointer">
      <Link to={`/video/${video.id.videoId}`} title={video.snippet.title}>
        <div className="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden">
          {/* Lazy load image only when visible */}
          {inView ? (
            <img
              src={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute top-0 left-0 w-full h-full bg-gray-700 animate-pulse"></div> // ✅ Placeholder Skeleton
          )}
        </div>

        {/* Video Details */}
        <h3 className="text-white mt-2 text-lg">{video.snippet.title}</h3>
        <p className="text-gray-400 text-sm">{video.snippet.channelTitle}</p>
      </Link>
    </div>
  );
}
