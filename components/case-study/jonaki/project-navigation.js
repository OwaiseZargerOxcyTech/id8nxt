"use client";

import { useMediaQuery } from "@/hooks/use-media-query";

export default function ProjectNavigation() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (isMobile) {
    // Mobile Layout
    return (
      <nav className="bg-[#33371a] text-white p-4">
        <div className="flex flex-col items-center space-y-4">
          {/* Column 2: Me & TVA - Brand Identity */}
          <div className="text-sm text-center">Me & TVA - Brand Identity</div>

          {/* Progress Bar */}
          <div className="w-full max-w-xs h-2 bg-white/20">
            <div className="w-3/4 h-full bg-white"></div>
          </div>

          {/* Navigation Options */}
          <div className="flex justify-between w-full max-w-xs">
            {/* Next Project */}
            <div className="text-sm hover:opacity-75 transition-opacity cursor-pointer">
              Next Project
            </div>
            {/* Keep Scrolling */}
            <div className="text-sm hover:opacity-75 transition-opacity cursor-pointer">
              Keep Scrolling
            </div>
          </div>
        </div>
      </nav>
    );
  }

  // Web Layout
  return (
    <nav className="bottom-0 left-0 right-0 bg-[#33371a] text-white p-4 md:px-6 md:pt-32 md:pb-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 items-center">
          {/* Column 1: Next Project */}
          <div className="text-sm md:text-xl hover:opacity-75 transition-opacity cursor-pointer text-left ml-24">
            Next Project
          </div>

          {/* Column 2: Me & TVA - Brand Identity */}
          <div className="text-sm md:text-xl text-center whitespace-nowrap">
            Me & TVA - Brand Identity
          </div>

          {/* Column 3: Progress Bar */}
          <div className="flex justify-center items-center">
            <div className="hidden md:block w-72 h-3 bg-white/20">
              <div className="w-3/4 h-full bg-white"></div>
            </div>
          </div>

          {/* Column 4: Keep Scrolling */}
          <div className="text-sm md:text-xl hover:opacity-75 transition-opacity cursor-pointer text-right mr-24">
            Keep Scrolling
          </div>
        </div>
      </div>
    </nav>
  );
}
