"use client";

import { useLayoutEffect, useRef } from "react";
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

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = sectionsRef.current;

      // Initial animation for Section 1
      const section1Timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sections[0],
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      });
      section1Timeline
        .from(sections[0], {
          backgroundPositionY: 200,
          duration: 0.5,
          ease: "power3.out",
        })
        .from(
          sections[0].querySelectorAll(".section-image, .section-text"),
          {
            y: 400,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        );

      // Section 2 animations triggered by scroll
      const section2Timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sections[1],
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      });

      section2Timeline
        .from(sections[1], {
          backgroundPositionY: 200,
          duration: 0.5,
          ease: "power3.out",
        })
        .from(
          sections[1].querySelectorAll(".section-image, .section-text"),
          {
            y: 400,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        );

      
    }, containerRef);

    return () => ctx.revert(); // Cleanup GSAP context
  }, []);

  return (
    <div ref={containerRef} className="bg-black">
      {/* Section 1 */}
      <section
        ref={addToSectionsRef}
        className="relative w-full h-screen flex items-center overflow-hidden bg-[url('/images/home/home-hero-bg-1.png')] bg-cover bg-center "
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
        <div className="section-content relative w-full">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="section-text z-20">
              <h2 className="md:relative md:top-40 md:left-12 text-4xl md:text-7xl text-white font-uni">
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
              <p className="text-white/80 text-lg text-right">
                ID8NXT is a Digital Marketing agency in Mumbai, India. We
                specialize in boosting businesses by focusing on their brand,
                using strategies, and harnessing digital tools.
              </p>
              <button className="absolute top-30 right-0 border-b border-red-500 text-white px-4 py-2 rounded hover:bg-red-500/20 transition duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section
        ref={addToSectionsRef}
        className="relative w-full h-screen flex items-center overflow-hidden bg-[url('/images/home/home-hero-bg-2.png')] bg-cover bg-center"
      >
        <div className="section-content relative w-full">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="section-text z-20">
              <div className="relative">
                <div className="hidden md:block absolute left-52 top-36 w-24 h-24 border-8 border-red-500">
                  <div className="absolute inset-0 border-8 border-red-500"></div>
                </div>
                <h2 className="md:relative md:top-48 text-4xl md:text-7xl text-white leading-tight z-10">
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
              <p className="text-white/80 text-lg text-right">
                We offer branding, print, and digital marketing services across
                India.
              </p>
              <button className="absolute top-22 right-0 border-b border-red-500 text-white px-4 py-2 rounded hover:bg-red-500/20 transition duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
