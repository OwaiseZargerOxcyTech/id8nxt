import React from "react";
import Image from "next/image";

const BrandShowcase = () => {
  return (
    <div className=" py-16">
      <div className="flex gap-4 xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto px-4 sm:px-6 lg:px-16 ">
        <div className="relative w-[60%]">
          <Image
            src="/images/case-study/jonaki/artboard-5-2.png"
            alt="First image"
            width={400}
            height={300}
            className="w-full h-auto"
          />
        </div>
        <div className="relative w-[40%]">
          <Image
            src="/images/case-study/jonaki/artboard-10-1.png"
            alt="Second image"
            width={800}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default BrandShowcase;
