"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const containerRef = useRef(null);
  const statueRef = useRef(null);
  const rectangleRef = useRef(null);
  const leafRef = useRef(null);
  const titleRef = useRef(null);
  const bgElementsRef = useRef(null);

  const startOngoingAnimations = () => {
    // Continuous statue animation
    gsap.to(statueRef.current, {
      scale: 1.08,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  };

  useEffect(() => {
    if (isInitialLoad) {
      const duration = 1;
      const ease = "power2.out";

      // Set initial positions
      gsap.set([rectangleRef.current, leafRef.current], {
        opacity: 0,
        y: "100%",
      });
      gsap.set(titleRef.current, { opacity: 0, y: "100%" });
      gsap.set(statueRef.current, {
        opacity: 0,
        y: "100%",
        transformOrigin: "bottom center",
      });

      // Animate everything at once
      gsap.to(
        [
          rectangleRef.current,
          leafRef.current,
          titleRef.current,
          statueRef.current,
        ],
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

    // Hover animation
    const handleStatueHover = () => {
      gsap.to(statueRef.current, {
        x: "4px",
        duration: 0.7,
        repeat: 3,
        yoyo: true,
        ease: "power1.inOut",
        onComplete: () => {
          gsap.set(statueRef.current, { x: 0 });
        },
      });
    };

    // Add hover event listeners
    const statue = statueRef.current;
    statue.addEventListener("mouseenter", handleStatueHover);

    // Cleanup
    return () => {
      statue.removeEventListener("mouseenter", handleStatueHover);
      gsap.killTweensOf(statueRef.current);
    };
  }, [isInitialLoad]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      <div className="w-full h-full overflow-hidden">
        <img
          ref={statueRef}
          src="/images/brand-solutions/brand-statue.png"
          alt="Brand Solutions Hero"
          className="absolute top-10 w-full h-full object-contain z-20 cursor-pointer"
        />
        <div ref={bgElementsRef}>
          <img
            ref={rectangleRef}
            src="/images/brand-solutions/rectangle-back.png"
            alt="Brand Solutions Hero"
            className="absolute bottom-0 xl:left-[35%] 2xl:left-[34%] xl:w-60 2xl:w-72 2xl:h-72 object-contain 4xl:w-[24rem] 4xl:h-[24rem]"
          />
          <img
            ref={leafRef}
            src="/images/brand-solutions/leaf-layer.png"
            alt="Brand Solutions Hero"
            className="absolute xl:-bottom-28 2xl:-bottom-40 xl:left-[45%] 2xl:left-[40%] xl:w-[34rem] 2xl:w-[50rem] 2xl:h-[35rem] object-contain 4xl:w-[65rem] 4xl:h-[50rem]"
          />
        </div>
      </div>

      <div ref={titleRef} className="absolute left-16 top-1/3">
        <div className="xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto px-4 sm:px-6 xl:px-16 2xl:px-20">
          <h1 className="text-white xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-thin leading-tight">
            <div className="overflow-hidden">
              <div>Brand</div>
              <div>Solutions</div>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
