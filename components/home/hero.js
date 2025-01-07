"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  const addToSectionsRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = sectionsRef.current;

      sections.forEach((section, index) => {
        const nextSection = sections[index + 1];

        // Pin the section to keep it in view
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: nextSection ? "bottom top" : "+=90%", // If next section exists, pin till next section
          scrub: true,
          pin: true, 
          pinSpacing: false, 
        });

        // Animations within each section
        const content = section.querySelector(".section-content");
        const image = section.querySelector(".section-image");

        // Parallax effect for images
        if (image) {
          gsap.to(image, {
            scale: 1.1,
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }

        // Content fade out while scrolling to next section
        if (content && nextSection) {
          gsap.to(content, {
            y: "-50%",
            opacity: 0,
            scrollTrigger: {
              trigger: nextSection,
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup GSAP context
  }, []);

  return (
    <div ref={containerRef} className="bg-black min-h-screen">
      {/* Section 1 */}
      <section
        ref={addToSectionsRef}
        className="relative w-full h-screen flex items-center overflow-hidden bg-[url('/images/home/home-hero-bg-1.png')]"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
        <div className="section-content relative w-full">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="section-text z-20">
              <h2 className="text-4xl md:text-6xl font-light text-white">
                Digital
                <br className="hidden md:block" />
                &amp; Beyond
              </h2>
            </div>
            <div className="relative">
              <img
                src="./images/home/V1.png"
                alt="Digital Statue"
                className="section-image w-1/2 md:w-full h-auto relative z-10"
              />
            </div>
            <div className="relative md:top-60 section-text z-20">
              <p className="text-white/80 text-lg">
                ID8NXT is a Digital Marketing agency in Mumbai, India. We
                specialize in boosting businesses by focusing on their brand,
                using strategies, and harnessing digital tools.
              </p>
              <button className="mt-8 border-b border-red-500 text-white px-4 py-2 rounded hover:bg-red-500/20 transition duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section
        ref={addToSectionsRef}
        className="relative w-full h-screen flex items-center overflow-hidden bg-[url('/images/home/home-hero-bg-2.png')]"
      >
        <div className="section-content relative w-full">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="section-text z-20">
              <div className="relative">
                <div className="hidden md:block absolute left-36 -top-6 w-24 h-24 border-8 border-red-500">
                  <div className="absolute inset-0 border-8 border-red-500"></div>
                </div>
                <h2 className="text-4xl md:text-6xl font-light text-white leading-tight relative z-10">
                  Creativity
                  <br />
                  meets
                  <br />
                  Innovation
                </h2>
              </div>
            </div>
            <div className="relative">
              <img
                src="./images/home/V2 The Magic_.png"
                alt="Creative Statue"
                className="section-image w-1/2 md:w-full h-auto relative z-10"
              />
            </div>
            <div className="relative md:top-96 md:right-12 section-text z-20">
              <p className="text-white/80  text-lg">
                We offer branding, print, and digital marketing services across
                India.
              </p>
              <button className="mt-8 border-b border-red-500 text-white px-4 py-2 rounded hover:bg-red-500/20 transition duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>{" "}
      </section>
    </div>
  );
}
