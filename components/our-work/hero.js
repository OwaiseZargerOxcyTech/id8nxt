"use client";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";

const ParallaxHero = () => {
  const containerRef = useRef(null);
  const initialImageRef = useRef(null);
  const waveImageRef = useRef(null);
  const textRef = useRef(null);
  const [isSecondImageVisible, setIsSecondImageVisible] = useState(false);
  const scrollTimeoutRef = useRef(null);
  const lastScrollTime = useRef(0);
  const rippleAnimationRef = useRef(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;
      await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const container = containerRef.current;
      const initialImage = initialImageRef.current;
      const waveImage = waveImageRef.current;
      const text = textRef.current;

      if (!container || !initialImage || !waveImage || !text) return;

      // Add SVG filter for ripple effect
      const filterId = "ripple-effect";
      const svgFilter = `
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute w-0 h-0">
          <filter id="${filterId}">
            <feTurbulence
              id="turbulence"
              type="fractalNoise"
              baseFrequency="0.005 0.01"
              numOctaves="1"
              seed="1"
              stitchTiles="stitch"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="3"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </svg>
      `;

      // Remove existing filter if it exists
      const existingFilter = document.getElementById(filterId);
      if (existingFilter) {
        existingFilter.remove();
      }

      document.body.insertAdjacentHTML("beforeend", svgFilter);
      waveImage.style.filter = `url(#${filterId})`;

      // Create ripple animation
      const createRippleAnimation = () => {
        if (rippleAnimationRef.current) {
          rippleAnimationRef.current.kill();
        }

        rippleAnimationRef.current = gsap.timeline({
          repeat: -1,
          defaults: { ease: "sine.inOut" },
        });

        rippleAnimationRef.current.to("#turbulence", {
          attr: {
            baseFrequency: "0.0003 0.03",
          },
          duration: 1,
        });

        // Pause the animation initially
        rippleAnimationRef.current.pause();
      };

      createRippleAnimation();

      // Text animation timeline
      const textTimeline = gsap.timeline({ paused: true });
      textTimeline.to(text, {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });

      // Wave image fade-in animation
      const waveTimeline = gsap.timeline({ paused: true });
      waveTimeline.to(waveImage, {
        y: "0%",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          if (rippleAnimationRef.current) {
            rippleAnimationRef.current.play();
          }
        },
      });

      // Wheel event handler
      const handleWheel = (e) => {
        const currentTime = Date.now();
        if (currentTime - lastScrollTime.current < 500) return;
        lastScrollTime.current = currentTime;

        if (e.deltaY > 0 && !isSecondImageVisible) {
          setIsSecondImageVisible(true);
          textTimeline.play();
          waveTimeline.play();
          if (rippleAnimationRef.current) {
            rippleAnimationRef.current.play();
          }
        } else if (e.deltaY < 0 && !isSecondImageVisible) {
          setIsSecondImageVisible(false);
          textTimeline.reverse();
          waveTimeline.reverse();
          if (rippleAnimationRef.current) {
            rippleAnimationRef.current.pause();
          }
        }

        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }

        scrollTimeoutRef.current = setTimeout(() => {
          lastScrollTime.current = 0;
        }, 500);
      };

      window.addEventListener("wheel", handleWheel, { passive: true });

      return () => {
        window.removeEventListener("wheel", handleWheel);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        if (rippleAnimationRef.current) {
          rippleAnimationRef.current.kill();
        }
        textTimeline.kill();
        waveTimeline.kill();
      };
    };

    loadGSAP();
  }, [isSecondImageVisible]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[150vh] overflow-hidden"
    >
      <div className="relative h-screen w-full">
        {/* Initial Image */}
        <div
          ref={initialImageRef}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('/images/our-work/hero-img/our-work.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            willChange: "transform",
            zIndex: 1,
            height: "150vh",
          }}
        />

        {/* Text Overlay */}
        <div
          ref={textRef}
          className="absolute inset-0 z-20"
          style={{ willChange: "transform" }}
        >
          <div className="h-full xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto px-4 sm:px-6 lg:px-16 flex flex-col md:flex-row md:items-center justify-center md:justify-between gap-8 md:gap-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl 4xl:text-110px font-light text-white leading-tight text-left">
                Your digital
                <br />
                odyssey
                <br />
                starts here
              </h1>
            </div>
            <div className="max-w-md">
              <p className="text-lg md:text-xl 4xl:text-2xl text-gray-200 md:mt-40 text-left">
                Here are our standout projects that highlight the impactful
                digital marketing strategies we've implemented at ID8NXT.
              </p>
            </div>
          </div>
        </div>

        {/* Wave Image */}
        <div
          ref={waveImageRef}
          className="absolute inset-0 w-full h-full xl:h-[237vh] 2xl:h-[245vh] 3xl:h-[245vh] 4xl:h-[239vh]"
          style={{
            backgroundImage: `url('/images/our-work/hero-img/water.png')`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            transformOrigin: "center",
            willChange: "transform",
            zIndex: 10,
            backgroundRepeat: "no-repeat",
            opacity: 0,
          }}
        />
      </div>
    </div>
  );
};

export default ParallaxHero;
