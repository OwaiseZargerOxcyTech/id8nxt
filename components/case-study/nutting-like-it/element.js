import React from "react";
import Image from "next/image";

const Element = () => {
  return (
    <>
      <div className="flex gap-4 xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto px-4 sm:px-6 lg:px-16 ">
        <div className="relative w-[40%]">
          <Image
            src="/images/nutting-like-it/artboard-1-copy-12.png"
            alt="First image"
            width={400}
            height={300}
            className="w-full h-auto"
          />
        </div>
        <div className="relative w-[60%]">
          <Image
            src="/images/nutting-like-it/artboard-1-copy-15.png"
            alt="Second image"
            width={800}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </div>
    </>
  );
};

export default Element;
