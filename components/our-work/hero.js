"use client";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";

const ParallaxHero = () => {
  const containerRef = useRef(null);
  const initialImageRef = useRef(null);
  const waveImageRef = useRef(null);
  const castleImageRef = useRef(null);
  const textRef = useRef(null);
  const [isSecondImageVisible, setIsSecondImageVisible] = useState(false);
  const scrollTimeoutRef = useRef(null);
  const lastScrollTime = useRef(0);

  useEffect(() => {
    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;
      await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const container = containerRef.current;
      const initialImage = initialImageRef.current;
      const waveImage = waveImageRef.current;
      const castleImage = castleImageRef.current;
      const text = textRef.current;

      if (!container || !initialImage || !waveImage || !castleImage || !text)
        return;

      // Initial state setup for both images
      gsap.set([waveImage, castleImage], {
        opacity: 0,
        y: "100%",
      });

      // Liquid-like water animation
      const waterAnimation = gsap.timeline({
        repeat: -1,
        yoyo: true,
        paused: true,
      });

      // Create a more natural underwater effect with subtle distortion
      waterAnimation
        .to(waveImage, {
          scale: 1.02,
          rotation: 0.3,
          x: "0.5%",
          y: "0.3%",
          duration: 5,
          ease: "power1.inOut",
        })
        .to(waveImage, {
          scale: 1.01,
          rotation: -0.2,
          x: "-0.3%",
          y: "-0.2%",
          duration: 4.5,
          ease: "power1.inOut",
        })
        .to(waveImage, {
          scale: 1.015,
          rotation: 0.1,
          x: "0.2%",
          y: "0.4%",
          duration: 4,
          ease: "power1.inOut",
        });

      // Text animation timeline
      const textTimeline = gsap.timeline({ paused: true });
      textTimeline.to(text, {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });

      // Combined timeline for both images
      const combinedTimeline = gsap.timeline({ paused: true });
      combinedTimeline.to([waveImage, castleImage], {
        y: "0%",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          waterAnimation.play(); // Start water animation after both images appear
        },
      });

      // Wheel event handler
      const handleWheel = (e) => {
        const currentTime = Date.now();
        if (currentTime - lastScrollTime.current < 500) return; // Debounce wheel events
        lastScrollTime.current = currentTime;

        if (e.deltaY > 0 && !isSecondImageVisible) {
          // Scrolling down
          setIsSecondImageVisible(true);
          textTimeline.play();
          combinedTimeline.play();
        } else if (e.deltaY < 0 && !isSecondImageVisible) {
          // Scrolling up
          setIsSecondImageVisible(false);
          textTimeline.reverse();
          combinedTimeline.reverse();
          waterAnimation.pause();
        }

        // Clear previous timeout
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }

        // Set new timeout
        scrollTimeoutRef.current = setTimeout(() => {
          lastScrollTime.current = 0;
        }, 500);
      };

      // Add wheel event listener
      window.addEventListener("wheel", handleWheel, { passive: true });

      return () => {
        window.removeEventListener("wheel", handleWheel);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        waterAnimation.kill();
        textTimeline.kill();
        combinedTimeline.kill();
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

        {/* Castle Image */}
        <div
          ref={castleImageRef}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('/images/our-work/hero-img/our-work-2.png')`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            willChange: "transform",
            zIndex: 10,
            height: "200vh",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Wave Image */}
        <div
          ref={waveImageRef}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('/images/our-work/hero-img/water.png')`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            transformOrigin: "center",
            willChange: "transform",
            zIndex: 10,
            height: "240vh",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </div>
  );
};

export default ParallaxHero;
