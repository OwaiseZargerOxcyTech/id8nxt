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
  const rippleAnimationRef = useRef(null);

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
              baseFrequency="0.003 0.001"
              numOctaves="1"
              seed="2"
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

      // Create and start ripple animation immediately
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
            baseFrequency: "0.009 0.003",
          },
          repeat: -1,
        });

        rippleAnimationRef.current.play();
      };

      createRippleAnimation();

      // Show wave image immediately with animation
      gsap.to(waveImage, {
        opacity: 1,
        duration: 0.5,
      });

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

        const windowWidth = window.innerWidth;
        const xlBreakpoint = 1280;
        const xxlBreakpoint = 1440;

        let maxMargin = 0;

        if (windowWidth >= xxlBreakpoint) {
          maxMargin = 150;
        } else if (windowWidth >= xlBreakpoint) {
          maxMargin = 220;
        }

        // Calculate margins based on screen size
        if (maxMargin > 0) {
          const marginValue = scrollProgress * maxMargin;
          paragraph.style.marginLeft = `${marginValue}px`;
          paragraph.style.marginTop = `${marginValue}px`;
          heading.style.marginTop = `${marginValue}px`;
        } else {
          paragraph.style.marginLeft = "0px";
          paragraph.style.marginTop = "0px";
          heading.style.marginTop = "0px";
        }

        // Handle overlay opacity - now only applies to the main image
        const overlayStartThreshold = 0.2;
        const overlayOpacity = Math.max(
          0,
          Math.min(1, (scrollProgress - overlayStartThreshold) / 0.3)
        );
        overlay.style.opacity = overlayOpacity;
      };

      window.addEventListener("resize", handleTextScaling);

      // Handle scroll animation
      const handleScroll = () => {
        handleTextScaling();
      };

      container.addEventListener("scroll", handleScroll);

      // Cleanup function
      return () => {
        container.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleTextScaling);
        if (rippleAnimationRef.current) {
          rippleAnimationRef.current.kill();
        }
        const filterToRemove = document.getElementById(filterId);
        if (filterToRemove) {
          filterToRemove.remove();
        }
      };
    };

    loadGSAP();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-y-scroll scrollbar-container"
      style={{
        scrollBehavior: "smooth",
        perspective: "1px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Hero section with images */}
      <div ref={initialImageRef} className="relative w-full">
        <img
          src="/images/our-work/hero-img/our-work.png"
          alt="Hero Background"
          className="w-full h-full object-cover object-top"
          style={{ willChange: "transform" }}
        />

        {/* Black Overlay - Now positioned before the wave image */}
        <div
          ref={overlayRef}
          className="absolute top-0 right-0 w-full h-full bg-black/20"
          style={{
            opacity: 0,
            transition: "opacity 0.3s ease-out",
          }}
        />

        {/* Wave Image positioned above the overlay */}
        <div
          ref={waveImageRef}
          className="absolute bottom-0 left-0 w-full"
          style={{
            willChange: "transform",
            zIndex: 10,
            opacity: 0,
            transform: "translateY(-1%)",
          }}
        >
          <img
            src="/images/our-work/hero-img/water.png"
            alt="Wave Effect"
            className="w-full h-full object-contain object-bottom"
          />
          {/* <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="/images/our-work/hero-img/vide0-water.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video> */}
        </div>
      </div>

      {/* Text Overlay - Positioned independently */}
      <div className="absolute top-0 left-0 w-full" style={{ height: "135vh" }}>
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
    </div>
  );
};

export default ParallaxHero;
