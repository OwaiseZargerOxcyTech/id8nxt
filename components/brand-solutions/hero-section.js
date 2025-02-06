"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const imageWrapperRef = useRef(null);
  const imageRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  useEffect(() => {
    // Initial setup
    gsap.set(imageWrapperRef.current, {
      y: "100%",
      opacity: 0,
    });

    gsap.set([line1Ref.current, line2Ref.current], {
      y: "100%",
      opacity: 0,
    });

    // Create timeline for sequence
    const tl = gsap.timeline();

    // Animate image wrapper from top
    tl.to(imageWrapperRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.4,
      ease: "power3.out",
    });

    // Continuous zoom animation
    gsap.to(imageRef.current, {
      scale: 1.1,
      duration: 8,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1, // Infinite repeat
    });

    // Animate text lines with stagger
    tl.to(
      [line1Ref.current, line2Ref.current],
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      },
      "-=0.8"
    );

    // Return cleanup function
    return () => {
      tl.kill();
      gsap.killTweensOf(imageRef.current);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background image wrapper */}
      <div ref={imageWrapperRef} className="w-full h-full">
        <div className="w-full h-full overflow-hidden">
          <img
            ref={imageRef}
            src="/images/brand-solutions/brand-hero.png"
            alt="Brand Solutions Hero"
            className="w-full h-full object-cover origin-center"
          />
        </div>
      </div>

      {/* Title overlay */}
      <div className="absolute left-16 top-1/3">
        <div className="xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto px-4 sm:px-6 xl:px-16 2xl:px-20">
          <h1 className="text-white xl:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-thin leading-tight">
            <div className="overflow-hidden">
              <div ref={line1Ref}>Brand</div>
            </div>
            <div className="overflow-hidden">
              <div ref={line2Ref}>Solutions</div>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
