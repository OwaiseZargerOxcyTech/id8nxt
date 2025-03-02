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
  const zoomAnimationRef = useRef(null);

  const startOngoingAnimations = () => {
    // Create a timeline for the zoom animation and store its reference
    zoomAnimationRef.current = gsap.to(statueRef.current, {
      scale: 1.1,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      transformOrigin: "center center",
    });
  };

  const handleImageHover = (isEnter) => {
    if (isEnter) {
      gsap.to(statueRef.current, {
        x: "2px",
        duration: 0.7,
        repeat: 3,
        yoyo: true,
        ease: "power1.inOut",
        onComplete: () => {
          gsap.set(statueRef.current, { x: 0 });
        },
      });
    }
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
        opacity: 1,
        y: "100%",
        scale: 1,
        transformOrigin: "center center",
      });

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
          duration,
          ease,
          onComplete: () => {
            setIsInitialLoad(false);
            startOngoingAnimations();
          },
        }
      );
    }

    const statue = statueRef.current;
    if (statue) {
      const handleMouseEnter = () => handleImageHover(true);
      statue.addEventListener("mouseenter", handleMouseEnter);

      return () => {
        statue.removeEventListener("mouseenter", handleMouseEnter);
        // Only kill the hover animation tweens (x property)
        gsap.getTweensOf(statue).forEach((tween) => {
          if (tween.vars.x) {
            tween.kill();
          }
        });
      };
    }
  }, [isInitialLoad]);

  // Cleanup zoom animation on component unmount
  useEffect(() => {
    return () => {
      if (zoomAnimationRef.current) {
        zoomAnimationRef.current.kill();
      }
    };
  }, []);

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
          className="absolute top-10 w-full h-full object-contain z-20 "
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
