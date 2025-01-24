import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background image */}
      <img
        src="/images/brand-solutions/brand-hero.png"
        alt="Brand Solutions Hero"
        className="w-full h-full object-cover"
      />

      {/* Title overlay */}
      <div className="absolute left-16 top-1/3">
        <div className="xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto px-4 sm:px-6 lg:px-16">
          <h1 className="text-white xl:text-72px 2xl:text-80px 3xl:text-86px 4xl:text-110px font-thin leading-tight">
            Brand
            <br />
            Solutions
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
