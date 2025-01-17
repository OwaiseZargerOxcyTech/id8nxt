"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroAbout = () => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const statuesRef = useRef(null);
  const bgElementsRef = useRef(null);

  useEffect(() => {
    if (isInitialLoad) {
      // Initial load animations
      const duration = 0.8;
      const ease = "power2.out";

      // Set initial positions
      gsap.set(bgElementsRef.current, { opacity: 0, y: "100%" });
      gsap.set(titleRef.current, { opacity: 0, y: "100%" });
      gsap.set(statuesRef.current.children, {
        opacity: 0,
        y: "100%",
        transformOrigin: "bottom center",
      });

      // Animate everything at once
      gsap.to(
        [bgElementsRef.current, titleRef.current, statuesRef.current.children],
        {
          y: "0%",
          opacity: 1,
          duration: duration,
          ease: ease,
          onComplete: () => {
            setIsInitialLoad(false);
            startOngoingAnimations();
          },
        }
      );
    }
  }, [isInitialLoad]);

  const startOngoingAnimations = () => {
    // Scroll animation for revealing effect with bottom anchoring
    // gsap.to(statuesRef.current.children, {
    //   scrollTrigger: {
    //     trigger: headerRef.current,
    //     start: "top top",
    //     end: "bottom center",
    //     scrub: 1,
    //   },
    //   scale: 1.1,
    //   ease: "none",
    // });

    // Create floating animation for leaf
    const floatingTl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    floatingTl
      .to(bgElementsRef.current, {
        y: -20,
        duration: 2,
        ease: "sine.inOut",
      })
      .to(bgElementsRef.current, {
        y: 0,
        duration: 2,
        ease: "sine.inOut",
      });

    // Add subtle rotation for more natural movement
    gsap.to(bgElementsRef.current, {
      rotate: 2,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  };

  // Cleanup function
  useEffect(() => {
    return () => {
      // Kill all GSAP animations for specific elements
      gsap.killTweensOf([
        bgElementsRef.current,
        titleRef.current,
        statuesRef.current?.children,
      ]);
      // Kill all ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      // Kill any remaining animations in case we missed any
      gsap.killTweensOf(headerRef.current, true);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Main content container */}
      <div
        className="mx-auto px-4 xl:px-6 2xl:px-8
        xl:max-w-6xl 
        2xl:max-w-screen-xl 
        3xl:max-w-screen-2xl 
        4xl:max-w-screen-4xl flex items-center"
      >
        {/* Text section */}
        <div className="w-[45%] z-10 absolute top-[30%]" ref={titleRef}>
          <h1 className="text-white text-6xl 3xl:text-78px font-normal leading-tight tracking-wide">
            <span className="block">Creatively Led.</span>
            <span className="block mt-2">Results Driven.</span>
          </h1>
        </div>

        {/* Images section */}
        <div className="absolute right-0 bottom-0 w-[65%] h-full">
          {/* Decorative image with leaves and bulbs */}
          <img
            ref={bgElementsRef}
            src="/images/about/about-hero/leaf.png"
            alt="Decorative elements"
            className="absolute top-20 right-0 w-full h-full object-contain z-0"
          />

          {/* Statues container */}
          <div className="relative h-full w-full " ref={statuesRef}>
            {/* First statue */}
            <div className="absolute -bottom-12 right-[60%] 4xl:right-[75%] w-[25rem] 4xl:w-[40rem]">
              <img
                src="/images/about/about-hero/mon-1.png"
                alt="Classical statue 1"
                className="w-full h-auto"
              />
            </div>

            {/* Middle statue */}
            <div className="absolute bottom-0 right-[25%] 4xl:right-[30%] w-[33rem] 4xl:w-[53rem] z-20">
              <img
                src="/images/about/about-hero/mon-2.png"
                alt="Classical statue 2"
                className="w-full h-auto"
              />
            </div>

            {/* Last statue */}
            <div className="absolute -bottom-10 -right-10 w-[26rem] 4xl:w-[44rem]">
              <img
                src="/images/about/about-hero/mon-3.png"
                alt="Classical statue 3"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
