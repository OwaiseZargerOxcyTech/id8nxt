"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/case-study-1-jonaki/Jonaki.png"
        alt="Dark forest background"
        fill
        className="object-cover brightness-75"
        priority
      />

      {/* Text Overlay at Bottom Left */}
      <div className="absolute bottom-28 left-28 text-white">
        <h1 className="text-xl md:text-lg tracking-[0.2em] font-light mb-2">
          Jonaki
        </h1>
        <p className="text-2xl md:text-5xl tracking-widest">Branding</p>
      </div>
    </div>
  );
}
