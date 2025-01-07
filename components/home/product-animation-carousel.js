"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const imageSets = [
  {
    left: "/images/home/Tata-Coffee-3.png",
    center: "/images/home/Tata-Coffee-2.png",
    right: "/images/home/Tata-Coffee-1.png",
    logo: "/images/home/Tata-Coffee-Logo.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    left: "/images/home/Tata-Coffee-3.png",
    center: "/images/home/Tata-Coffee-2.png",
    right: "/images/home/Tata-Coffee-1.png",
    logo: "/images/home/Tata-Coffee-Logo.png",
    text: "Praesent euismod nunc in velit tincidunt, vel malesuada lectus feugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function ProductAnimationCarousel() {
  const [currentSet, setCurrentSet] = useState(0);
  const leftPanelRef = useRef(null);
  const centerPanelRef = useRef(null);
  const rightPanelRef = useRef(null);

  const animatePanels = () => {
    // Initially hide all panels
    gsap.set(
      [leftPanelRef.current, centerPanelRef.current, rightPanelRef.current],
      {
        opacity: 0,
      }
    );

    // Additional initial positions
    gsap.set(leftPanelRef.current, { y: "20%" });
    gsap.set(rightPanelRef.current, { y: "-20%" });

    // Create a timeline for simultaneous animations
    const tl = gsap.timeline();

    // All animations start at the same time
    tl.to(
      leftPanelRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
      },
      0
    );

    tl.to(
      centerPanelRef.current,
      {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      },
      0
    );

    tl.to(
      rightPanelRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
      },
      0
    );
  };

  useEffect(() => {
    animatePanels();
  }, [currentSet]);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: leftPanelRef.current,
      start: "top 100%",
      onEnter: () => animatePanels(),
    });
  }, []);

  const handleNextSet = () => {
    setCurrentSet((prevSet) => (prevSet + 1) % imageSets.length);
  };

  return (
    <div className="relative flex w-full md:min-h-screen items-center justify-center bg-white">
      <div className="flex flex-row">
        {/* Left Panel */}
        <div
          ref={leftPanelRef}
          className="flex-1 overflow-hidden opacity-0 p-2 relative"
        >
          <div>
            <img
              src={imageSets[currentSet].left}
              alt={imageSets[currentSet].left}
              className="w-full"
            />
            <img
              src={imageSets[currentSet].logo}
              alt="Logo"
              className="absolute top-8 left-8 md:top-16 md:left-20 w-1/2"
            />
          </div>
          <div className="hidden md:block absolute bottom-0 md:bottom-10 md:left-28 w-3/4 p-2">
            <p >{imageSets[currentSet].text}</p>
          </div>
        </div>

        {/* Center Panel */}
        <div
          ref={centerPanelRef}
          className="flex-1 overflow-hidden opacity-0 p-2 "
        >
          <img
            src={imageSets[currentSet].center}
            alt=" Splash"
            className="w-full"
          />
        </div>

        {/* Right Panel */}
        <div
          ref={rightPanelRef}
          className="flex-1 overflow-hidden opacity-0 p-2 "
        >
          <img
            src={imageSets[currentSet].right}
            alt=" Product"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNextSet}
        className="absolute left-6 top-40 md:-bottom-96 md:left-12 text-black p-3 transition-colors duration-300"
        aria-label="Next set"
      >
        <FaArrowRight className="h-6 w-6" />
      </button>
    </div>
  );
}
