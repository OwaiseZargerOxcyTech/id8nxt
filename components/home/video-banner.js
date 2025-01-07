"use client"
import { useState } from "react";

export default function VideoBanner() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full h-[500px] md:h-[700px] lg:h-[800px] bg-gray-800 flex items-center justify-center">
     {/* Video */}
      {isPlaying ? (
        <iframe
          src="https://www.youtube.com/embed/N8kbO9TPelo?autoplay=1&controls=0"
          className="absolute inset-0 w-full h-full object-cover"
          allow="autoplay; encrypted-media"
          allowFullScreen
          onEnded={() => setIsPlaying(false)}
        />
      ) : (
        <>
          <img
        src="./images/home/designer-concept.jpg"
            alt="Video Thumbnail"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50"></div>
        </>
      )}

      {/* Button */}
      {!isPlaying && (
        <button
          className="z-10 bg-white text-black rounded-full p-4 hover:scale-110 transition-transform"
          onClick={() => setIsPlaying(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="none"
          >
            <path
              d="M8 5v14l11-7z"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
