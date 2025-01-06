"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const imageSets = [
  {
    left: "https://png.pngtree.com/png-clipart/20221013/ourmid/pngtree-simulation-cosmetics-product-sample-skin-care-essential-oil-png-image_6158599.png",
    center:
      "https://www.bigbasket.com/media/uploads/p/xxl/40176779_7-tata-coffee-grand-filter-coffee.jpg",
    right:
      "https://png.pngtree.com/png-clipart/20221013/ourmid/pngtree-simulation-cosmetics-product-sample-skin-care-essential-oil-png-image_6158599.png",
    logo: "https://m.media-amazon.com/images/I/61P8NNtScHL._AC_UF1000,1000_QL80_.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    left: "https://www.bigbasket.com/media/uploads/p/xxl/40176779_7-tata-coffee-grand-filter-coffee.jpg",
    center:
      "https://png.pngtree.com/png-clipart/20221013/ourmid/pngtree-simulation-cosmetics-product-sample-skin-care-essential-oil-png-image_6158599.png",
    right:
      "https://www.bigbasket.com/media/uploads/p/xxl/40176779_7-tata-coffee-grand-filter-coffee.jpg",
    logo: "https://source.unsplash.com/random/100x200?sig=8",
    text: "Praesent euismod nunc in velit tincidunt, vel malesuada lectus feugiat.",
  },
  //   {
  //     left: "https://source.unsplash.com/random/400x300?sig=9",
  //     center: "https://source.unsplash.com/random/400x300?sig=10",
  //     right: "https://source.unsplash.com/random/400x300?sig=11",
  //     logo: "https://source.unsplash.com/random/100x200?sig=12",
  //     text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  //   },
  //   {
  //     left: "https://source.unsplash.com/random/400x300?sig=13",
  //     center: "https://source.unsplash.com/random/400x300?sig=14",
  //     right: "https://source.unsplash.com/random/400x300?sig=15",
  //     logo: "https://source.unsplash.com/random/100x200?sig=16",
  //     text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  //   }
];

export default function ProductAnimationCarousel() {
  const [currentSet, setCurrentSet] = useState(0);
  const leftPanelRef = useRef(null);
  const centerPanelRef = useRef(null);
  const rightPanelRef = useRef(null);

  const animatePanels = () => {
    // Initially hide all panels
    gsap.set(
      [leftPanelRef.current, centerPanelRef.current, rightPanelRef.current],
      {
        opacity: 0,
      }
    );

    // Additional initial positions
    gsap.set(leftPanelRef.current, { y: "40%" });
    gsap.set(rightPanelRef.current, { y: "-40%" });

    // Create a timeline for simultaneous animations
    const tl = gsap.timeline();

    // All animations start at the same time
    tl.to(
      leftPanelRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
      },
      0
    );

    tl.to(
      centerPanelRef.current,
      {
        opacity: 1,
        duration: 2,
        ease: "power2.inOut",
      },
      0
    );

    tl.to(
      rightPanelRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
      },
      0
    );
  };

  useEffect(() => {
    animatePanels();
  }, [currentSet]);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: leftPanelRef.current,
      start: "top 100%",
      onEnter: () => animatePanels(),
    });
  }, []);

  const handleNextSet = () => {
    setCurrentSet((prevSet) => (prevSet + 1) % imageSets.length);
  };

  return (
    <div className="relative flex w-full min-h-screen items-center justify-center bg-[#f5e6d3]">
      <div className="flex w-full max-w-7xl flex-col md:flex-row">
        {/* Left Panel */}
        <div
          ref={leftPanelRef}
          className="flex-1 overflow-hidden opacity-0 p-2 "
        >
          <div className="p-2 ">
            <img
              src={imageSets[currentSet].left}
              alt={imageSets[currentSet].left}
              className="w-full"
            />
          </div>
        </div>

        {/* Center Panel */}
        <div
          ref={centerPanelRef}
          className="flex-1 overflow-hidden opacity-0 p-2 "
        >
          <img
            src={imageSets[currentSet].center}
            alt=" Splash"
            className="w-full"
          />
        </div>

        {/* Right Panel */}
        <div
          ref={rightPanelRef}
          className="flex-1 overflow-hidden opacity-0 p-2 "
        >
          <img
            src={imageSets[currentSet].right}
            alt=" Product"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNextSet}
        className="absolute bottom-44 left-4 md:bottom-44 md:left-24 top-4 right-4 md:top-auto md:right-auto bg-brown-600 text-black p-3 rounded-full hover:bg-brown-700 transition-colors duration-300"
        aria-label="Next set"
      >
        <FaArrowRight className="h-6 w-6" />
      </button>
    </div>
  );
}
