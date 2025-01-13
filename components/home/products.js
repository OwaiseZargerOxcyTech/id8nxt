"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaChevronRight } from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const products = [
  {
    leftImage: "/images/home/Tata-Coffee-3.png",
    centerImage: "/images/home/Tata-Coffee-2.png",
    rightImage: "/images/home/Tata-Coffee-1.png",
    logo: "./images/home/Tata-Coffee-Logo.png",
    description:
      "Short product description goes here. This is a test description.",
  },
  {
    leftImage: "/images/home/Tata-Coffee-3.png",
    centerImage: "/images/home/Tata-Coffee-2.png",
    rightImage: "/images/home/Tata-Coffee-1.png",
    logo: "./images/home/Tata-Coffee-Logo.png",
    description: "Short product description goes here.",
  },
];

const ProductDisplay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const leftImageRef = useRef(null);
  const centerImageRef = useRef(null);
  const rightImageRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const timerRef = useRef(null);

  const animateImages = () => {
    gsap.set(
      [leftImageRef.current, centerImageRef.current, rightImageRef.current],
      {
        opacity: 0,
      }
    );
    gsap.set(leftImageRef.current, { y: "-100%" });
    gsap.set(rightImageRef.current, { y: "100%" });
    gsap.set(logoRef.current, { y: "-20px", opacity: 0 });
    gsap.set(textRef.current, { y: "-20px", opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom-=100",
        end: "bottom top",
        toggleActions: "play none none none",
        once: true,
      },
    });

    tl.to(
      [leftImageRef.current, centerImageRef.current, rightImageRef.current],
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        stagger: {
          amount: 0.3,
        },
      }
    ).to(
      [logoRef.current, textRef.current],
      {
        y: 0,
        opacity: 1,
        duration: 2.5,
        ease: "power2.out",
        stagger: 0.2,
      },
      "-=2"
    );
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === containerRef.current) {
          trigger.kill();
        }
      });

      const timer = setTimeout(animateImages, 100);
      return () => clearTimeout(timer);
    }, containerRef);

    return () => ctx.revert();
  }, [currentIndex]);

  // Auto-rotation timer effect
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % products.length);
      }, 3000);

      return () => {
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
      };
    }
  }, [isPaused]);

  const handleNext = () => {
    // Clear the existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    // Update the index
    setCurrentIndex((prev) => (prev + 1) % products.length);
    
    // Pause the auto-rotation briefly
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 4000); // Resume after 4 seconds
  };

  const currentProduct = products[currentIndex];

  return (
    <div ref={containerRef} className="w-full px-4 py-12">
      <div className="grid grid-cols-3 gap-4">
        {/* Left Section */}
        <div className="relative overflow-hidden">
          {/* Main Image */}
          <img
            ref={leftImageRef}
            src={currentProduct.leftImage}
            alt="Left product view"
            className="w-full h-full"
          />

          {/* Top Logo */}
          <div className="absolute top-12 left-0 w-full px-6 z-10">
            <div ref={logoRef} className="mb-4">
              <img
                src={currentProduct.logo}
                alt="Product Logo"
                className="h-8 mx-auto w-auto object-contain"
              />
            </div>
          </div>

          {/* Bottom Text and Navigation */}
          <div className="absolute bottom-6 left-0 w-full px-6 z-10">
            <div className="flex items-start gap-4">
              {/* Navigation Arrow */}
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors -mt-1"
                aria-label="Next product"
              >
                <FaChevronRight className="w-4 h-4" />
              </button>
              {/* Text Content */}
              <div ref={textRef} className="flex-1">
                <p className="text-black hidden md:block text-sm break-words max-w-[80%]">
                  {currentProduct.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Center Image */}
        <div className="relative overflow-hidden">
          <img
            ref={centerImageRef}
            src={currentProduct.centerImage}
            alt="Center product view"
            className="w-full h-full"
          />
        </div>

        {/* Right Image */}
        <div className="relative overflow-hidden">
          <img
            ref={rightImageRef}
            src={currentProduct.rightImage}
            alt="Right product view"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;