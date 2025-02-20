"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroAbout = () => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const statuesRef = useRef(null);
  const bgElementsRef = useRef(null);

  const statueRefs = useRef([]);

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
    //------------------------------------ statues zoom

    const zoomTl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      ease: "none",
    });
    zoomTl.to(statuesRef.current, {
      y: 0,
      duration: 5,
      ease: "none",
      scale: 1.1,
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
        statuesRef.current,
      ]);
      // Kill all ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      // Kill any remaining animations in case we missed any
      gsap.killTweensOf(headerRef.current, true);
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
            <span className="block">Creatively Led.</span>
            <span className="block mt-2">Results Driven.</span>
          </h1>
        </div>

        {/* Images section */}
        <div className="absolute right-0 bottom-0 w-[65%] h-full">
          {/* Decorative image with leaves and bulbs */}
          <Image
            ref={bgElementsRef}
            src="/images/about/about-hero/leaf.png"
            alt="Decorative elements"
            className="absolute top-20 right-0 w-full h-full object-contain z-0 opacity-50"
            fill
            sizes="65vw"
            priority
          />

          {/* Statues container */}
          <div className="relative h-full w-full" ref={statuesRef}>
            {/* First statue */}
            <div
              className="absolute xl:-bottom-12 2xl:bottom-0 right-[70%] 4xl:right-[75%] w-[25rem] 4xl:w-[40rem]"
              ref={(el) => (statueRefs.current[0] = el)}
              onMouseEnter={() => handleStatueHover(0, true)}
              onMouseLeave={() => handleStatueHover(0, false)}
            >
              <Image
                src="/images/about/about-hero/mon-1.png"
                alt="Classical statue 1"
                className="w-full h-auto"
                width={640}
                height={960}
                priority
              />
            </div>

            {/* Middle statue */}
            <div
              className="absolute bottom-0 right-[28%] 4xl:right-[30%] w-[32rem] 2xl:w-[34rem] 4xl:w-[53rem] z-20"
              ref={(el) => (statueRefs.current[1] = el)}
              onMouseEnter={() => handleStatueHover(1, true)}
              onMouseLeave={() => handleStatueHover(1, false)}
            >
              <Image
                src="/images/about/about-hero/mon-2.png"
                alt="Classical statue 2"
                className="w-full h-auto"
                width={848}
                height={1272}
                priority
              />
            </div>

            {/* Last statue */}
            <div
              className="absolute -bottom-16 -right-10 w-[30rem] 4xl:w-[44rem]"
              ref={(el) => (statueRefs.current[2] = el)}
              onMouseEnter={() => handleStatueHover(2, true)}
              onMouseLeave={() => handleStatueHover(2, false)}
            >
              <Image
                src="/images/about/about-hero/mon-3.png"
                alt="Classical statue 3"
                className="w-full h-auto"
                width={704}
                height={1056}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
