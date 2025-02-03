"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = ({ children }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    // Create a timeline for the parallax effect
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: 1, // Smooth animation
        toggleActions: "play none none reverse",
      },
      y: -100, // Subtle upward movement on scroll
      ease: "none",
    });

    return () => {
      // Cleanup
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={elementRef} className="relative will-change-transform">
      {children}
    </div>
  );
};

export default ScrollAnimation;
