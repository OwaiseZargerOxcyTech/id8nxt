"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
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
    logo: "/images/home/Tata-Coffee-Logo.png",
    description:
      "Short product description goes here. This is a test description.",
  },
  {
    leftImage: "/images/home/Tata-Coffee-3.png",
    centerImage: "/images/home/Tata-Coffee-2.png",
    rightImage: "/images/home/Tata-Coffee-1.png",
    logo: "/images/home/Tata-Coffee-Logo.png",
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
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setCurrentIndex((prev) => (prev + 1) % products.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 4000);
  };

  const currentProduct = products[currentIndex];

  return (
    <div ref={containerRef} className="w-full">
      <div className="grid grid-cols-3 gap-4 h-screen">
        {/* change height if needed */}
        {/* Left Section */}
        <div className="relative overflow-hidden h-full">
          {/* Main Image */}
          <div
            ref={leftImageRef}
            className="relative w-full h-full aspect-[3/4]"
          >
            <Image
              src={currentProduct.leftImage}
              alt="Left product view"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>

          {/* Top Logo */}
          <div className="absolute top-12 left-0 w-full px-6 z-10">
            <div ref={logoRef} className="mb-4">
              <div className="relative h-8 w-full">
                <Image
                  src={currentProduct.logo}
                  alt="Product Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 768px) 100vw, 200px"
                />
              </div>
            </div>
          </div>

          {/* Bottom Text and Navigation */}
          <div className="absolute bottom-6 left-0 w-full px-6 z-10">
            <div className="flex items-start gap-4">
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors -mt-1"
                aria-label="Next product"
              >
                <FaChevronRight className="w-4 h-4" />
              </button>
              <div ref={textRef} className="flex-1">
                <p className="text-black hidden md:block text-sm break-words max-w-[80%]">
                  {currentProduct.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Center Image */}
        <div className="relative overflow-hidden h-full">
          <div
            ref={centerImageRef}
            className="relative w-full h-full aspect-[3/4]"
          >
            <Image
              src={currentProduct.centerImage}
              alt="Center product view"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="relative overflow-hidden h-full">
          <div
            ref={rightImageRef}
            className="relative w-full h-full aspect-[3/4]"
          >
            <Image
              src={currentProduct.rightImage}
              alt="Right product view"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
