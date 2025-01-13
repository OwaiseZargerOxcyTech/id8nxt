import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full h-screen bg-[url('https://c1.wallpaperflare.com/preview/574/566/410/596c866363b50.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-full flex flex-col md:flex-row md:items-center justify-center md:justify-between gap-8 md:gap-4">
          {/* Main Heading */}
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight text-left">
              Your digital
              <br />
              odyssey
              <br />
              starts here
            </h1>
          </div>

          {/* Subtext - Below on mobile, Right-aligned on desktop */}
          <div className="max-w-md">
            <p className="text-lg md:text-xl text-gray-200 md:mt-40 text-left">
              Here are our standout projects that highlight the impactful
              digital marketing strategies we've implemented at ID8NXT.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
