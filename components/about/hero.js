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
    <div
      ref={headerRef}
      className="relative min-h-screen bg-black overflow-hidden -z-20"
    >
      <div
        className="mx-auto px-4 xl:px-6 2xl:px-8
        xl:max-w-6xl 
        2xl:max-w-screen-xl 
        3xl:max-w-screen-2xl 
        4xl:max-w-screen-4xl"
      >
        {/* Title */}
        <div
          ref={titleRef}
          className="
            mt-32 xl:mt-72 2xl:mt-52 3xl:mt-48 4xl:mt-80 
            z-50"
        >
          <h1
            className="text-4xl xl:text-6xl 2xl:text-7xl 3xl:text-7xl 4xl:text-110px
            font-light text-white mb-2 xl:mb-3 2xl:mb-4"
          >
            Creatively Led.
          </h1>
          <h1
            className="text-4xl xl:text-6xl 2xl:text-7xl 3xl:text-7xl 4xl:text-110px
            font-light text-white"
          >
            Results Driven.
          </h1>
        </div>
      </div>

      {/* Background Elements (Leaves and Bulbs) */}
      <div
        ref={bgElementsRef}
        className="absolute bottom-0 right-0
          w-[80%] xl:w-[50%] 2xl:w-[60%] 4xl:w-[68%]
          -z-10"
      >
        <img
          src="/images/about/about-hero/leaf.png"
          alt="Decorative leaves and light bulbs"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Statues */}
      <div
        ref={statuesRef}
        className="absolute bottom-0 right-0 
          w-[90%] xl:w-[75%] 2xl:w-[66%]
          flex items-end z-10"
      >
        <img
          src="/images/about/about-hero/mon-2.png"
          alt="Classical statue 2"
          className="object-cover relative 
            top-8 xl:top-12 2xl:top-12
            right-16 xl:left-40 2xl:-left-20 3xl:right-60 4xl:right-64
            xl:w-1/3 2xl:w-1/2 
            xl:scale-75 3xl:scale-100 
            h-full z-10"
        />
        <img
          src="/images/about/about-hero/mon-1.png"
          alt="Classical statue 1"
          className="object-cover relative 
            right-48 xl:right-[0rem] 2xl:right-[22rem] 3xl:right-[26rem] 4xl:right-[32rem]
            top-4
            xl:w-1/2 2xl:w-2/3 
            xl:scale-75 3xl:scale-100 
            h-full z-20"
        />
        <img
          src="/images/about/about-hero/mon-3.png"
          alt="Classical statue 3"
          className="object-cover absolute 
            top-10 xl:top-20 2xl:top-24 4xl:top-36
            -right-10 
            w-[45%] xl:w-[42%] 2xl:w-[46%] 
            xl:scale-75 3xl:scale-100 
            h-full z-10"
        />
      </div>
    </div>
  );
};

export default HeroAbout;
