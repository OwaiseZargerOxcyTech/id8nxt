import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background image */}
      <img
        src="/images/contact-hero.png"
        alt="Media Solutions Hero"
        className="w-full h-full object-cover"
      />

      {/* Title overlay */}
      <div className="absolute left-16 top-1/3">
        <div className="xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto px-4 sm:px-6 xl:px-16 2xl:px-20">
          <h1 className="text-white xl:text-72px 2xl:text-80px 3xl:text-86px 4xl:text-110px font-thin">
            Ready to embark on
            <br />a digital adventure?
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
