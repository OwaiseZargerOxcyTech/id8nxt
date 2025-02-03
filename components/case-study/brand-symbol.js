"use client";

import Image from "next/image";

export default function BrandSymbol({ imgUrl }) {
  return (
    <>
      <div className="xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto px-4 sm:px-6 lg:px-16 ">
        <div className="relative w-full">
          <Image
            src={imgUrl}
            alt="First image"
            width={800}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>
    </>
  );
}
