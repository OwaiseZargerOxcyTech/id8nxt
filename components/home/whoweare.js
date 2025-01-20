"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhoWeAre() {
  const sectionRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      leftTextRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      rightTextRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto flex flex-col md:flex-row items-center justify-center py-12 px-16 bg-white"
    >
      {/* Left Section */}
      <div
        ref={leftTextRef}
        className="text-8xl font-light text-black p-4 w-full md:w-1/3"
      >
        Who <br /> we are
      </div>
      {/* Right Section */}
      <div
        ref={rightTextRef}
        className="mt-6 md:mt-0 md:ml-12 text-gray-600 p-4 w-full md:w-2/3 flex items-center justify-center"
      >
        <p className="text-lg text-left">
          We&#39;re more than just a digital agency. We&#39;re a creative
          powerhouse, dedicated to crafting unique and innovative solutions that
          help your brand stand out. Our team of creative minds and tech wizards
          will work closely with you to understand your unique brand story and
          goals.
        </p>
      </div>
    </section>
  );
}
