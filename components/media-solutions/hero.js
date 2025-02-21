"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroMedia = () => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const statuesRef = useRef(null);
  const bgElementsRef = useRef(null);
  const statueRefs = useRef([]);
  const zoomAnimationRef = useRef(null);

  useEffect(() => {
    if (isInitialLoad) {
      // Initial load animations
      const duration = 1;
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

    // Setup hover events
    const statues = statueRefs.current;
    if (statues.length > 0) {
      const handleMouseEnter = () => handleStatueHover(0, true);
      const statue = statues[0];

      if (statue) {
        statue.addEventListener("mouseenter", handleMouseEnter);

        return () => {
          statue.removeEventListener("mouseenter", handleMouseEnter);
          // Only kill hover-related tweens (x property)
          gsap.getTweensOf(statue).forEach((tween) => {
            if (tween.vars.x) {
              tween.kill();
            }
          });
        };
      }
    }
  }, [isInitialLoad]);

  const handleStatueHover = (index, isEnter) => {
    if (isEnter) {
      gsap.to(statueRefs.current[index], {
        x: "2px",
        duration: 0.7,
        repeat: 3,
        yoyo: true,
        ease: "power1.inOut",
        onComplete: () => {
          gsap.set(statueRefs.current[index], { x: 0 });
        },
      });
    }
  };

  const startOngoingAnimations = () => {
    // Create and store the zoom animation reference
    zoomAnimationRef.current = gsap.to(statuesRef.current, {
      scale: 1.1,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      transformOrigin: "center center",
    });
  };

  // Cleanup zoom animation on unmount
  useEffect(() => {
    return () => {
      if (zoomAnimationRef.current) {
        zoomAnimationRef.current.kill();
      }
      // Kill any ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      className="relative w-full min-h-screen bg-black overflow-hidden"
      ref={headerRef}
    >
      {/* Main content container */}
      <div
        className="mx-auto px-4 xl:px-0 2xl:px-16
        xl:max-w-screen-lg 
        2xl:max-w-screen-xl 
        3xl:max-w-screen-2xl 
        4xl:max-w-screen-4xl flex items-center"
      >
        {/* Text section */}
        <div className="w-[45%] z-10 absolute top-[30%]" ref={titleRef}>
          <h1 className="text-white text-6xl 3xl:text-78px font-normal leading-tight tracking-wide">
            <span className="block">Media</span>
            <span className="block mt-2">Solutions</span>
          </h1>
        </div>

        {/* Images section */}
        <div className="absolute right-0 bottom-0 w-[55%] h-full">
          {/* Decorative image with leaves and bulbs */}
          <Image
            ref={bgElementsRef}
            src="/images/media-solutions/leaf-bulb.png"
            alt="Decorative elements"
            className="absolute top-20 right-0 w-1/2 h-1/2 object-contain z-0 opacity-50"
            fill
            sizes="65vw"
            priority
          />

          <div className="relative h-full w-full" ref={statuesRef}>
            <div
              className="absolute top-28 right-0 xl:w-[60rem] 2xl:w-[70rem] 4xl:w-[100rem]"
              ref={(el) => (statueRefs.current[0] = el)}
              onMouseEnter={() => handleStatueHover(0, true)}
              onMouseLeave={() => handleStatueHover(0, false)}
            >
              <Image
                src="/images/media-solutions/statue.png"
                alt="Classical statue 1"
                className="w-full h-auto"
                width={640}
                height={960}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMedia;
