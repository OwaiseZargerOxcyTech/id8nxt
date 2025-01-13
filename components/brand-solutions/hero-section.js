import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full h-screen bg-[url('https://npf-prod.imgix.net/uploads/shutterstock_56386615.jpg?auto=compress%2Cformat&fit=max&q=80&w=1600')] bg-cover bg-center bg-no-repeat">
      <div className="w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-full flex flex-col md:flex-row md:items-center justify-center md:justify-between gap-8 md:gap-4">
          {/* Main Heading */}
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight text-left">
              Brand <br /> Solutions
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
