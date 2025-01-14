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
      title: "Performance Marketing",
      description:
        "Our experts create campaigns specifically tailored to achieve your business goals.",
      hoverClass: "hover:bg-primary-red",
    },
    {
      title: "Influencer Marketing",
      description:
        "Our team collaborates with influencers who resonate with your brand values.",
      hoverClass: "hover:bg-secondary-lime",
    },
    {
      title: "Social Media Marketing",
      description:
        "Expand your reach and engage with your potential customers.",
      hoverClass: "hover:bg-primary-navy",
    },
    {
      title: "Branding Strategy & Development",
      description:
        "We craft compelling brand stories to design your brand strategies.",
      hoverClass: "hover:bg-secondary-lime",
    },
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "We optimise your website for higher search engine rankings.",
      hoverClass: "hover:bg-primary-navy",
    },
    {
      title: "Film Production",
      description:
        "Lights, camera, action! We're your behind-the-scenes maestros.",
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
        duration: 0.8,
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-screen">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`group relative bg-white border border-gray-200 overflow-hidden ${feature.hoverClass} transition-colors duration-300 ease-in-out`}
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
