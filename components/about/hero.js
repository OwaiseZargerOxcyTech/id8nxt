"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroAbout = () => {
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const statuesRef = useRef(null);
  const bgElementsRef = useRef(null);

  useEffect(() => {
    // Set transform origin for statues to scale from bottom
    gsap.set(statuesRef.current.children, {
      transformOrigin: "bottom center"
    });

    // Scroll animation for revealing effect with bottom anchoring
    gsap.to(statuesRef.current.children, {
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top top",
        end: "bottom center",
        scrub: 1,
      },
      scale: 1.1,
      ease: "none",
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={headerRef} className="relative min-h-screen bg-black overflow-hidden">
      {/* Title */}
      <div ref={titleRef} className="absolute top-1/4 left-16 z-10">
        <h1 className="text-6xl font-bold text-white mb-4">Creatively Led.</h1>
        <h1 className="text-6xl font-bold text-white">Results Driven.</h1>
      </div>

      {/* Background Elements (Leaves and Bulbs) */}
      <div 
        ref={bgElementsRef} 
        className="absolute right-0 top-20 w-2/3 h-full z-0"
      >
        <img 
          src="/images/about/about-hero/leaf.png" 
          alt="Decorative leaves and light bulbs"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Statues */}
      <div ref={statuesRef} className="absolute bottom-0 right-0 w-2/3 flex items-end z-10">
        <img 
          src="/images/about/about-hero/mon-2.png" 
          alt="Classical statue 2"
          className="object-cover relative top-0 -left-40 w-1/2 h-full grayscale z-10"
        />
        <img 
          src="/images/about/about-hero/mon-1.png" 
          alt="Classical statue 1"
          className="object-cover relative right-80 top-0 w-2/3 h-full grayscale z-20"
        />
        <img 
          src="/images/about/about-hero/mon-3.png" 
          alt="Classical statue 3"
          className="object-cover absolute top-0 right-0 w-1/3 h-full grayscale z-10"
        />
      </div>
    </div>
  );
};

export default HeroAbout;