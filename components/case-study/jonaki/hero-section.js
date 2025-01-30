"use client";

import Image from "next/image";
import { ContentSection, MetadataItem } from "../content-section";

export default function HeroSection() {
  const metadataItems = [
    { label: "Year", value: "2022" },
    { label: "Filter by solution", value: "Brand launch. Relaunch. Repeat." },
    { label: "Areas", value: "Branding | Packaging | Communication" },
  ];

  return (
    <div className="relative min-h-[140vh]">
      {/* Background Image */}
      <Image
        src="/images/case-study/jonaki/jonaki.png"
        alt="Dark forest background"
        fill
        className="object-cover object-center"
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
        <div className="w-[45%] z-10 absolute top-[55%]">
          <p className="text-white text-xl md:text-lg tracking-[0.2em] font-light mb-2">
            Jonaki
          </p>
          <h2 className="text-white text-6xl 3xl:text-78px font-normal leading-tight tracking-wide">
            Branding
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-white z-10 absolute top-[75%]">
          {/* Left Column: Metadata */}
          <div className="space-y-8">
            {metadataItems.map((item, index) => (
              <MetadataItem key={index} {...item} />
            ))}
          </div>
          {/* Right Column: The Request */}
          <div className="pr-36">
            <ContentSection
              title="The request"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
