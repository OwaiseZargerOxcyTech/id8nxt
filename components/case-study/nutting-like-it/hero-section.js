"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative h-[calc(100vh-4rem)]">
      {/* Background Image */}
      <Image
        src="/images/nutting-like-it/artboard-1-copy-14.png"
        alt="Nutting Like It"
        fill
        className="object-cover object-center mt-16"
        priority
      />

      <div
        className="mx-auto px-4 xl:px-0 2xl:px-16
        xl:max-w-screen-lg 
        2xl:max-w-screen-xl 
        3xl:max-w-screen-2xl 
        4xl:max-w-screen-4xl flex items-center"
      >
        {/* Text section */}
        <div className="w-[45%] 3xl:w-[60%] z-10 absolute top-[90%]">
          <p className="text-black text-xl 3xl:text-3xl md:text-lg tracking-[0.2em] font-light mb-2">
            Nutting Like It
          </p>
          <h2 className="text-black text-4xl 3xl:text-6xl font-normal leading-tight tracking-wide">
            Brand visualization, Packaging
          </h2>
        </div>
      </div>
    </div>
  );
}
