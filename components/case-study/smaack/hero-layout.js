import React from "react";
import Image from "next/image";
import { ProjectDetails } from "../project-details";
import { ContentSection, MetadataItem } from "../content-section";

export const HeroLayout = ({
  backgroundImage,
  title,
  subtitle,
  metadataItems,
  contentTitle,
  contentText,
  contentSections,
  backgroundColor,
}) => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-screen" style={{ backgroundColor }}>
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt="Hero background"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90"
            style={{
              "--tw-gradient-to": backgroundColor,
            }}
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 h-screen flex flex-col justify-end">
          {/* Main Content Section */}
          <div className="">
            <div className="mx-auto px-4 xl:px-0 2xl:px-16 xl:max-w-screen-lg 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl">
              {/* Title Section - Just above metadata */}
              <div className="xl:mb-8">
                <h3 className="text-white text-xl 3xl:text-3xl md:text-lg tracking-[0.2em] font-light mb-2">
                  {subtitle}
                </h3>
                <h1 className="text-white text-4xl 3xl:text-6xl font-normal leading-tight tracking-wide w-1/2">
                  {title}
                </h1>
              </div>

              {/* Metadata and Request Section */}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto px-4 xl:px-0 2xl:px-16 xl:max-w-screen-lg 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column - Metadata */}
          <div className="space-y-8">
            {metadataItems.map((item, index) => (
              <MetadataItem key={index} {...item} />
            ))}
          </div>

          {/* Right Column - Request */}
          <div>
            <ContentSection title={contentTitle} text={contentText} />
          </div>
        </div>
      </div>

      {/* Project Details Section */}
      <div style={{ backgroundColor }}>
        <ProjectDetails contentSections={contentSections} />
      </div>
    </div>
  );
};

export default HeroLayout;
