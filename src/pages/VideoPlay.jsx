import React from "react";
import { useParams } from "react-router-dom";

export default function VideoPlay({}) {
  const { videoId } = useParams();
  console.log(videoId);
  return (
    <div className="container mx-auto mt-14 pt-6">
      <div className="video-player-container h-[100vh]">
        <div className="video-player">
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Video Player"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
