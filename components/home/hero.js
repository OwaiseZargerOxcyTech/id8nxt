"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Hero() {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  const addToSectionsRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const scrolling = {
      enabled: true,
      events: ["scroll", "wheel", "touchmove", "pointermove"],
      prevent: e => e.preventDefault(),
      disable() {
        if (scrolling.enabled) {
          scrolling.enabled = false;
          window.addEventListener("scroll", gsap.ticker.tick, { passive: true });
          scrolling.events.forEach(e => window.addEventListener(e, scrolling.prevent, { passive: false }));
        }
      },
      enable() {
        if (!scrolling.enabled) {
          scrolling.enabled = true;
          window.removeEventListener("scroll", gsap.ticker.tick);
          scrolling.events.forEach(e => window.removeEventListener(e, scrolling.prevent));
        }
      }
    };

    const goToSection = (section, anim) => {
      if (scrolling.enabled) {
        scrolling.disable();
        gsap.to(window, {
          scrollTo: { y: section, autoKill: false },
          onComplete: scrolling.enable,
          duration: 1,
          ease: "power2.inOut"
        });
        anim?.restart();
      }
    };

    const ctx = gsap.context(() => {
      const sections = sectionsRef.current;

      sections.forEach((section, index) => {
        // Create parallax effect for background
        gsap.to(section, {
          backgroundPositionY: 200,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });

        // Animation for content elements
        const contentAnim = gsap.timeline({ paused: true })
          .from(section.querySelectorAll(".section-image"), {
            y: 400,
            opacity: 0,
            duration: 2,
            ease: "power3.out"
          })
          .from(section.querySelectorAll(".section-text"), {
            y: 200,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
          },0);

        // Initial setup for background position
        gsap.set(section, {
          backgroundPosition: "50% 0%"
        });

        ScrollTrigger.create({
          trigger: section,
          start: "top bottom-=1",
          end: "bottom top+=1",
          onEnter: () => goToSection(section, contentAnim),
          onEnterBack: () => goToSection(section)
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-black">
      {/* Section 1 */}
      <section
        ref={addToSectionsRef}
        className="relative w-full h-screen flex items-center overflow-hidden bg-[url('/images/home/home-hero-bg-1.png')] will-change-transform"
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
                className="section-image w-1/2 md:w-full scale-[1.2] h-auto relative z-10"
              />
              <img
                src="./images/home/cloud-1.png"
                alt="cloud"
                className="section-image absolute top-60 scale-[2] w-1/2 md:w-full h-auto z-9"
              />
              <img
                src="./images/home/rectangle-1.png"
                alt="rectangle"
                className="section-image absolute top-6 w-1/2 md:w-full h-auto z-8"
              />
            </div>
            <div className="relative md:top-96 section-text z-20">
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
        className="relative w-full h-screen flex items-center overflow-hidden bg-[url('/images/home/home-hero-bg-2.1.png')] bg-repeat  will-change-transform"
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
            <div className="relative md:top-[520] md:right-24 section-text z-20">
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