import React from "react";
import Image from "next/image";
import { ContentSection, MetadataItem } from "./content-section";
import { ProjectDetails } from "./project-details";

export const HeroLayout = ({
  backgroundImage,
  title,
  subtitle,
  metadataItems,
  requestText,
  contentSections,
}) => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative min-h-[140vh] flex flex-col justify-end bg-[#33371a]">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt="Hero background"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Multi-step gradient for smoother transition */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#33371a]" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 pb-32">
          <div className="mx-auto px-4 xl:px-0 2xl:px-16 xl:max-w-screen-lg 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl">
            {/* Title and Subtitle */}
            <div className="mb-16">
              <h3 className="text-white text-xl md:text-lg tracking-[0.2em] font-light mb-2">
                {subtitle}
              </h3>
              <h1 className="text-white text-6xl 3xl:text-[78px] font-normal leading-tight tracking-wide">
                {title}
              </h1>
            </div>

            {/* Metadata and Request Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Left Column - Metadata */}
              <div className="space-y-8">
                {metadataItems.map((item, index) => (
                  <MetadataItem key={index} {...item} />
                ))}
              </div>

              {/* Right Column - Request */}
              <div className="">
                <ContentSection title="The request" text={requestText} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Section - No background color transition needed */}
      <div className="bg-[#33371a]">
        <ProjectDetails contentSections={contentSections} />
      </div>
    </div>
  );
};
