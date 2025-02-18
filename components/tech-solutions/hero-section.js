"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  const imageRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // Initial setup
    gsap.set([imageRef.current, titleRef.current], {
      y: "100%",
      opacity: 0,
    });

    // Create timeline for sequence
    const tl = gsap.timeline();

    // Animate image from bottom
    tl.to([imageRef.current, titleRef.current], {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/images/tech-solutions/tech.mp4" type="video/mp4" />
      </video>

      {/* Image overlay */}
      <img
        ref={imageRef}
        src="/images/tech-solutions/tech-hero.png"
        alt="Brand Solutions Hero"
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-20" />

      {/* Title overlay */}
      <div className="absolute left-16 top-1/3 z-30">
        <div className="mx-auto px-4 sm:px-6 xl:px-16 2xl:px-20">
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin leading-tight">
            <div className="overflow-hidden" ref={titleRef}>
              <div>Tech</div>
              <div>Solutions</div>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
