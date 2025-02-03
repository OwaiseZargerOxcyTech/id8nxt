"use client";

import Image from "next/image";

export default function JonakiShowcase() {
  return (
    <>
      <div className=" xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto pl-4 pr-16 ">
        <div className="relative w-full">
          <Image
            src="/images/case-study/jonaki/artboard-7-2.png"
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
