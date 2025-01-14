"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import gsap from "gsap";
import _ from "lodash";

export default function FeatureCards() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const descriptionRefs = useRef([]);
  const timeoutRefs = useRef({});

  const features = [
    {
      title: "Social Media Management",
      description:
        "We're your digital whisperers, guiding you through the social labyrinth.",
      hoverClass: "hover:bg-primary-red",
    },
    {
      title: "Creative Copy and Content",
      description:
        "Wordsmiths extraordinaire, weaving tales that captivate and convert.",
      hoverClass: "hover:bg-secondary-lime",
    },
    {
      title: "Graphics Designs, Iconography & Illustrations",
      description:
        "Visual architects, crafting stunning visuals that leave a lasting impression.",
      hoverClass: "hover:bg-primary-navy",
    },
    {
      title: "Video Editing & Animation",
      description:
        "Storytellers of the screen, bringing your vision to life with dynamic visuals",
      hoverClass: "hover:bg-secondary-lime",
    },
    {
      title: "Films. Production and Beyond",
      description:
        "Lights, camera, action! We're your behind-the-scenes maestros.\nImprove your search rankings.",
      hoverClass: "hover:bg-primary-navy",
    },
    {
      title: "Campaign Planning",
      description:
        "Strategists extraordinaire, orchestrating campaigns that hit all the right notes.",
      hoverClass: "hover:bg-primary-red",
    },
    {
      title: "Influencer Marketing",
      description:
        "Partnering with influencers to amplify your reach and impact.",
      hoverClass: "hover:bg-primary-red",
    },
    {
      title: "Old But Gold: Print, OOH & More",
      description:
        "Classic charm meets modern flair. We're masters of both modern and  traditional marketing",
      hoverClass: "hover:bg-secondary-lime",
    },
    {
      title: "Brand Launch. Relaunch. Repeat",
      description:
        "From birth to rebirth, we're your brand's eternal companion.",
      hoverClass: "hover:bg-primary-navy",
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

    // Cleanup timeouts on unmount
    return () => {
      Object.values(timeoutRefs.current).forEach((timeout) => {
        if (timeout) clearTimeout(timeout);
      });
    };
  }, []);

  const handleMouseEnter = (index) => {
    // Clear any existing timeout for this card
    if (timeoutRefs.current[index]) {
      clearTimeout(timeoutRefs.current[index]);
      timeoutRefs.current[index] = null;
    }

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
    // Set a timeout for the leave animation
    timeoutRefs.current[index] = setTimeout(() => {
      setHoveredCard(null);
      if (descriptionRefs.current[index]) {
        gsap.to(descriptionRefs.current[index], {
          x: -100,
          opacity: 0,
          duration: 0.1,
          ease: "power2.in",
        });
      }
    }, 500); // 500ms delay before triggering leave animation
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
