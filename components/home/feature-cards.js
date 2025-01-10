"use client"
import React, { useState } from 'react';
import { FaSignOutAlt } from "react-icons/fa";

export default function FeatureCards() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      title: "Performance Marketing",
      description: "Drive results with targeted campaigns.",
      hoverClass: "hover:bg-primary-red"
    },
    {
      title: "Influencer Marketing",
      description: "Our team collaborates with influencers.",
      hoverClass: "hover:bg-secondary-lime"
    },
    {
      title: "Social Media Marketing",
      description: "Engage your audience effectively.",
      hoverClass: "hover:bg-primary-navy"
    },
    {
      title: "Branding Strategy & Development",
      description: "Build a strong brand identity.",
      hoverClass: "hover:bg-secondary-lime"
    },
    {
      title: "Search Engine Optimization (SEO)",
      description: "Improve your search rankings.",
      hoverClass: "hover:bg-primary-navy"
    },
    {
      title: "Film Production",
      description: "Create compelling video content.",
      hoverClass: "hover:bg-primary-red"

    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`group relative bg-white border border-gray-200 shadow-md overflow-hidden ${feature.hoverClass} transition-colors duration-300 ease-in-out aspect-square`}
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="p-8 text-center flex flex-col justify-center h-full">
            <h3 className="text-4xl text-gray-400 group-hover:text-white transition-colors duration-300">
              {feature.title}
            </h3>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-gray-600 group-hover:text-white mt-4">
                {feature.description}
              </p>
              <FaSignOutAlt
                className="text-gray-400 group-hover:text-white mt-4 mx-auto"
                size={64}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}