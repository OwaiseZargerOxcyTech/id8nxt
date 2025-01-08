"use client"
import React, { useState, useEffect } from 'react';
import { FaSignOutAlt } from "react-icons/fa";

export default function FeatureCards() {
  const colorClasses = ['bg-primary-red', 'bg-secondary-lime', 'bg-primary-navy'];
  const [cardColors, setCardColors] = useState(Array(6).fill(0));
  const [hoveredCard, setHoveredCard] = useState(null);

  const getNextColorIndex = (currentIndex) => (currentIndex + 1) % colorClasses.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCardColors(prevColors => 
        prevColors.map((colorIndex, idx) => 
          // Only update color if card is not being hovered
          hoveredCard === idx ? colorIndex : getNextColorIndex(colorIndex)
        )
      );
    }, 300);

    return () => clearInterval(interval);
  }, [hoveredCard]);

  const features = [
    {
      title: "Performance Marketing",
      description: "Drive results with targeted campaigns."
    },
    {
      title: "Influencer Marketing",
      description: "Our team collaborates with influencers."
    },
    {
      title: "Social Media Marketing",
      description: "Engage your audience effectively."
    },
    {
      title: "Branding Strategy & Development",
      description: "Build a strong brand identity."
    },
    {
      title: "Search Engine Optimization (SEO)",
      description: "Improve your search rankings."
    },
    {
      title: "Film Production",
      description: "Create compelling video content."
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`group relative bg-white border border-gray-200 shadow-md overflow-hidden hover:${colorClasses[cardColors[index]]} transition duration-300 aspect-square`}
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="p-8 text-center flex flex-col justify-center h-full">
            <h3 className="text-4xl text-gray-400 group-hover:text-white">
              {feature.title}
            </h3>
            <div className="hidden group-hover:block">
              <p className="text-gray-600 group-hover:text-white mt-4 transition ease-in duration-300">
                {feature.description}
              </p>
              <FaSignOutAlt
                className="text-gray-400 group-hover:text-white mt-4 mx-auto transition ease-in duration-300"
                size={64}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}