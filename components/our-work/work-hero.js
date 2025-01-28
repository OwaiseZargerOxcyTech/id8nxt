import React from "react";

const WorkHero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/images/our-work/hero-img/vide0-water.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0">
        <div className="h-full xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto px-4 sm:px-6 lg:px-16 flex flex-col md:flex-row md:items-center justify-center md:justify-between gap-8 md:gap-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl 4xl:text-110px font-light text-white leading-tight text-left">
              Your digital
              <br />
              odyssey
              <br />
              starts here
            </h1>
          </div>
          <div className="max-w-md">
            <p className="text-lg md:text-xl 4xl:text-2xl text-gray-200 md:mt-40 text-left">
              Here are our standout projects that highlight the impactful
              digital marketing strategies we've implemented at ID8NXT.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkHero;
