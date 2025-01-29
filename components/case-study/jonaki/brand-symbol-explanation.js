"use client";

import Image from "next/image";

export default function BrandSymbolExplanation() {
  return (
    <div className=" bg-[#33371a]">
      <div className="xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto px-4 sm:px-6 lg:px-16 ">
        <div className="relative w-full">
          <Image
            src="/images/case-study/jonaki/artboard-4-2.png"
            alt="First image"
            width={400}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
