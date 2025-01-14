"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import gsap from "gsap";

export default function FeatureCards() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const descriptionRefs = useRef([]);

  const features = [
    {
      title: "Performance Marketing",
      description: "Drive results with targeted campaigns.",
      hoverClass: "hover:bg-primary-red",
    },
    {
      title: "Influencer Marketing",
      description: "Our team collaborates with influencers.",
      hoverClass: "hover:bg-secondary-lime",
    },
    {
      title: "Social Media Marketing",
      description: "Engage your audience effectively.",
      hoverClass: "hover:bg-primary-navy",
    },
    {
      title: "Branding Strategy & Development",
      description: "Build a strong brand identity.",
      hoverClass: "hover:bg-secondary-lime",
    },
    {
      title: "Search Engine Optimization (SEO)",
      description: "Improve your search rankings.",
      hoverClass: "hover:bg-primary-navy",
    },
    {
      title: "Film Production",
      description: "Create compelling video content.",
      hoverClass: "hover:bg-primary-red",
    },
  ];

  useEffect(() => {
    // Reset all descriptions
    descriptionRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.set(ref, {
          x: -100,
          opacity: 0,
        });
      }
    });
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
    if (descriptionRefs.current[index]) {
      gsap.to(descriptionRefs.current[index], {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = (index) => {
    setHoveredCard(null);
    if (descriptionRefs.current[index]) {
      gsap.to(descriptionRefs.current[index], {
        x: -100,
        opacity: 0,
        duration: 0.1,
        ease: "power2.in",
      });
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`group relative bg-white border border-gray-200 overflow-hidden ${feature.hoverClass} transition-colors duration-300 ease-in-out aspect-square`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <div className="p-8 text-center flex flex-col justify-center h-full">
            <h3 className="text-5xl text-gray-400 group-hover:text-white transition-colors duration-300">
              {feature.title}
            </h3>
            <div
              ref={(el) => (descriptionRefs.current[index] = el)}
              className="transition-colors duration-300"
            >
              <p className="text-gray-600 group-hover:text-white mt-8">
                {feature.description}
              </p>
              {/* <FaSignOutAlt
                className="text-gray-400 group-hover:text-white mt-4 mx-auto"
                size={64}
              /> */}
              <img
                src="/images/home/asset1.svg"
                alt="logo"
                className="text-gray-400 group-hover:text-white w-16 mt-8 mx-auto"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
