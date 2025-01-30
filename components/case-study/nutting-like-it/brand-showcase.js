import React from "react";
import Image from "next/image";

const BrandShowcase = () => {
  return (
    <div className="py-16">
      <div className="flex gap-4 xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto px-4 sm:px-6 lg:px-16 ">
        <div className="relative w-1/2">
          <Image
            src="/images/nutting-like-it/artboard-1-copy-17.png"
            alt="First image"
            width={400}
            height={300}
            className="w-full h-auto"
          />
        </div>
        <div className="relative w-1/2">
          <Image
            src="/images/nutting-like-it/artboard-1-copy-16.png"
            alt="Second image"
            width={400}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default BrandShowcase;
