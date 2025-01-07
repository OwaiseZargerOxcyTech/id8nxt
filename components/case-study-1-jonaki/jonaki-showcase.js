'use client';

import Image from "next/image";
import { useMediaQuery } from '@/hooks/use-media-query'; // Ensure the hook is correctly imported

export default function JonakiShowcase() {
  const isMobile = useMediaQuery('(max-width: 768px)'); // Define mobile breakpoint

  return (
    <div className="bg-[#33371a] w-full h-[370px] md:min-h-screen flex items-center justify-center px-4">
      <div className="max-w-7xl w-full mx-auto relative">
        {/* Image Container */}
        <div className={isMobile ? "relative w-full h-[50vh]" : "relative aspect-[16/9] w-full"}>
          <Image
            src="/images/case-study-1-jonaki/paris-image.jpg" // Replace with your actual image path
            alt="Jonaki Showcase"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
            priority
          />
          {/* Text Overlay */}
          <div
            className={`absolute top-0 left-0 w-full h-full flex flex-col ${
              isMobile
                ? "justify-end pb-12 pl-6 text-left"
                : "justify-end pl-12 pb-24 text-left"
            } text-white`}
          >
            <h1
              className={`font-bold leading-tight ${
                isMobile ? "text-3xl mb-4" : "text-5xl lg:text-7xl mb-8"
              }`}
            >
              LONG <br />
              LASTING <br />
              STORIES
            </h1>
            <div>
              <p
                className={`bg-[#563d29] font-light ${
                  isMobile ? "text-sm px-8" : "text-lg lg:text-xl px-14"
                } inline-block`}
                style={{
                  marginLeft: isMobile ? "-1.5rem" : "-3rem",
                  marginRight: isMobile ? "0" : "auto",
                }}
              >
                www.jonaki.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
