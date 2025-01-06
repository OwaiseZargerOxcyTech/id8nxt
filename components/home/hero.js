'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
      const [section1, section2] = sectionsRef.current;
    
      // Pin the first section
      ScrollTrigger.create({
        trigger: section1,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: true,
        pinSpacing: false,
      });

      
      // Animate the transition between sections
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section2,
          start: 'top bottom',
          end: 'top top',
          scrub: 1,
        },
      });

      tl.to(section1.querySelector('.section-content'), {
        y: '-100%',
        opacity: 0,
        duration: 0.5,
        // ease: 'power2.inOut',
      });

      tl.fromTo(
        section2.querySelector('.section-content'),
        { y: '0%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 0.5, ease: 'power2.inOut' },
        '-=1'
      );

      // Animate images and orbs
      sectionsRef.current.forEach((section) => {
        const image = section.querySelector('.section-image');
        const textElements = section.querySelectorAll('.section-text');

        gsap.to(image, {
          scale: 1.4,
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });

        textElements.forEach((el, index) => {
          gsap.from(el, {
            y: index % 2 ? 50 : -50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
              trigger: el,
              start: 'top bottom-=100',
              end: 'top center',
              scrub: 1,
            },
          });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-black min-h-screen" >
      <section
        ref={addToSectionsRef}
        className="relative w-full h-screen flex items-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
        <div className="section-content relative w-full">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="section-text z-20">
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Digital<br />&amp; Beyond
              </h2>
            </div>
            <div className="relative">
              <img
                src="https://pngimg.com/d/sculpture_PNG41.png"
                alt="Digital Statue"
                className="section-image w-full h-auto relative z-10"
              />
            </div>
            <div className="section-text z-20">
              <p className="text-white/80 text-lg">
                ID8NXT is a Digital Marketing agency in Mumbai, India. We specialize in boosting businesses by focusing on their brand, using strategies, and harnessing digital tools.
              </p>
              <button className="mt-8 border border-red-500 text-white px-4 py-2 rounded hover:bg-red-500/20 transition duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        ref={addToSectionsRef}
        className="relative w-full h-screen flex items-center overflow-hidden"
      >
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/20"></div> */}
        <div className="section-content relative w-full">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="section-text z-20">
              <div className="relative">
                <div className="absolute -left-4 top-4 w-16 h-16 bg-red-500/50"></div>
                <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight relative z-10">
                  Creativity<br />meets<br />Innovation
                </h2>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://pngimg.com/d/sculpture_PNG41.png"
                alt="Creative Statue"
                className="section-image w-full h-auto relative z-10"
              />
            </div>
            <div className="section-text z-20">
              <p className="text-white/80 text-lg">
                We offer branding, print, and digital marketing services across India.
              </p>
              <button className="mt-8 border border-red-500 text-white px-4 py-2 rounded hover:bg-red-500/20 transition duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
