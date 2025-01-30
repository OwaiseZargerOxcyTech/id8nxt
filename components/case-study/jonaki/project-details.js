import React from "react";
import { ContentSection } from "../content-section";

export default function ProjectDetails() {
  const contentSections = [
    {
      title: "The challenge",
      text: "The fragrance brand Jonaki makes magnificent stories with smell and aroma, drawing motivation from the interest of fireflies. Jonaki's branding creates a vibe of style and charm while capturing the stunning beauty of flies through a moderate plan approach. We use this dynamic approach to boost organic visualisation.",
    },
    {
      title: "The insight",
      text: "The fragrance brand Jonaki makes magnificent stories with smell and aroma, drawing motivation from the interest of fireflies. Jonaki's branding creates a vibe of style and charm while capturing the stunning beauty of flies through a moderate plan approach. We use this dynamic approach to boost organic visualisation.",
    },
  ];

  return (
    <section className="relative bg-[#33371a] text-white">
      {/* Gradient Overlay */}
      <div className="absolute inset-0  bg-gradient-to-b from-black to-[#33371a]" />

      <div className="relative z-10 xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto px-4 sm:px-6 lg:px-16 pb-24">
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {contentSections.map((section, index) => (
            <div key={index} className={index === 1 ? "md:pl-16" : ""}>
              <ContentSection {...section} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
