"use client";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";

const ParallaxHero = () => {
  const containerRef = useRef(null);
  const initialImageRef = useRef(null);
  const waveImageRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const overlayRef = useRef(null);
  const [isSecondImageVisible, setIsSecondImageVisible] = useState(false);
  const rippleAnimationRef = useRef(null);
  const textAnimationRef = useRef(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;
      await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const container = containerRef.current;
      const initialImage = initialImageRef.current;
      const waveImage = waveImageRef.current;
      const heading = headingRef.current;
      const paragraph = paragraphRef.current;
      const overlay = overlayRef.current;

      if (
        !container ||
        !initialImage ||
        !waveImage ||
        !heading ||
        !paragraph ||
        !overlay
      )
        return;

      // Add SVG filter for ripple effect
      const filterId = "ripple-effect";
      const svgFilter = `
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute w-0 h-0">
          <filter id="${filterId}">
            <feTurbulence
              id="turbulence"
              type="fractalNoise"
              baseFrequency="0.005 0.01"
              numOctaves="4"
              seed="8"
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
            baseFrequency: "0.03 0.03",
          },
          duration: 1,
        });

        rippleAnimationRef.current.pause();
      };

      createRippleAnimation();

      // Text scaling animation based on scroll
      const handleTextScaling = () => {
        const scrolled = container.scrollTop;
        const maxScroll = container.scrollHeight - container.clientHeight;
        const scrollProgress = Math.min(scrolled / maxScroll, 1);

        // Calculate scale factor (from 1 to 0.5)
        const scaleFactor = 1 - scrollProgress * 0.5;

        // Apply scaling to heading and paragraph
        heading.style.transform = `scale(${scaleFactor})`;
        paragraph.style.transform = `scale(${Math.max(scaleFactor, 0.7)})`;

        // Handle overlay opacity
        const overlayStartThreshold = 0.2; // Start showing overlay at 20% scroll
        const overlayOpacity = Math.max(
          0,
          Math.min(1, (scrollProgress - overlayStartThreshold) / 0.3)
        );
        overlay.style.opacity = overlayOpacity;
      };

      // Handle scroll animation
      const handleScroll = () => {
        const scrolled = container.scrollTop;
        const containerHeight = container.clientHeight;
        const contentHeight = container.scrollHeight;
        const scrollProgress = scrolled / (contentHeight - containerHeight);

        // Handle text scaling and overlay
        handleTextScaling();

        // Threshold for when water should appear
        if (scrollProgress > 0.4 && !isSecondImageVisible) {
          setIsSecondImageVisible(true);
          gsap.to(waveImage, {
            opacity: 1,
            duration: 0.5,
            onStart: () => {
              if (rippleAnimationRef.current) {
                rippleAnimationRef.current.play();
              }
            },
          });
        } else if (scrollProgress <= 0.3 && isSecondImageVisible) {
          setIsSecondImageVisible(false);
          gsap.to(waveImage, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              if (rippleAnimationRef.current) {
                rippleAnimationRef.current.pause();
              }
            },
          });
        }
      };

      container.addEventListener("scroll", handleScroll);

      return () => {
        container.removeEventListener("scroll", handleScroll);
        if (rippleAnimationRef.current) {
          rippleAnimationRef.current.kill();
        }
      };
    };

    loadGSAP();
  }, [isSecondImageVisible]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-y-scroll"
      style={{
        scrollBehavior: "smooth",
        perspective: "1px",
        transformStyle: "preserve-3d",
      }}
    >
      <div className="relative xl:min-h-[139vh] 2xl:min-h-[133vh] 3xl:min-h-[135vh] 4xl:min-h-[127vh]">
        {/* Initial Image */}
        <div
          ref={initialImageRef}
          className="absolute top-0 left-0 w-full"
          style={{
            backgroundImage: `url('/images/our-work/hero-img/our-work.png')`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            height: "150vh",
            willChange: "transform",
            zIndex: 1,
          }}
        />

        {/* Black Overlay - Right Half */}
        <div
          ref={overlayRef}
          className="absolute bottom-0 right-0 w-full h-full  bg-black/30 z-10"
          style={{
            opacity: 0,
            transition: "opacity 0.3s ease-out",
          }}
        />

        {/* Text Overlay Wrapper */}
        <div className="relative" style={{ height: "120vh" }}>
          <div className="sticky top-0 z-20 h-screen">
            <div className="h-full xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto px-4 sm:px-6 lg:px-16 flex flex-col md:flex-row md:items-center justify-center md:justify-between gap-8 md:gap-4">
              <div
                className="max-w-2xl"
                style={{ transformOrigin: "left center" }}
              >
                <h1
                  ref={headingRef}
                  className="text-4xl md:text-6xl lg:text-7xl 4xl:text-110px font-light text-white leading-tight text-left"
                  style={{ willChange: "transform" }}
                >
                  Your digital
                  <br />
                  odyssey
                  <br />
                  starts here
                </h1>
              </div>
              <div
                className="max-w-md"
                style={{ transformOrigin: "left center" }}
              >
                <p
                  ref={paragraphRef}
                  className="text-lg md:text-xl 4xl:text-2xl text-gray-200 md:mt-40 text-left"
                  style={{ willChange: "transform" }}
                >
                  Here are our standout projects that highlight the impactful
                  digital marketing strategies we've implemented at ID8NXT.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Image */}
        <div
          ref={waveImageRef}
          className="absolute bottom-0 left-0 w-full"
          style={{
            backgroundImage: `url('/images/our-work/hero-img/water.png')`,
            backgroundSize: "contain",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            height: "75vh",
            willChange: "transform",
            zIndex: 10,
            opacity: 0,
            transform: "translateY(50%)",
          }}
        />
      </div>
    </div>
  );
};

export default ParallaxHero;
