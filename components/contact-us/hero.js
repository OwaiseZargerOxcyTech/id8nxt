"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ContactHero() {
  const leftHandRef = useRef(null);
  const rightHandRef = useRef(null);
  const bulbRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate hands, bulb, and title together
    tl.from([leftHandRef.current, rightHandRef.current, bulbRef.current], {
      x: (index) => (index === 0 ? "-100%" : index === 1 ? "100%" : 0),
      y: (index) => (index === 2 ? 200 : 0),
      opacity: 0,
      rotate: (index) => (index === 0 ? -45 : index === 1 ? 45 : 0),
      duration: 2.5,
      ease: "power3.out",
    })
      // Slide in animation for title text
      .from(
        titleRef.current,
        {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=2.0"
      ) // Overlapping the animations
      // Continuous floating animation for the bulb
      .to(bulbRef.current, {
        y: -15,
        repeat: -1,
        yoyo: true,
        duration: 1.8,
        ease: "power1.inOut",
      });

    return () => tl.kill();
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/images/contact/leaf_live.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      <h1
        ref={titleRef}
        className="absolute top-1/4 xl:left-24 2xl:left-28 text-white text-7xl 4xl:text-90px font-thin text-left px-6"
      >
        Ready to embark on <br />a digital adventure?
      </h1>

      <div className="relative flex items-center justify-center w-full h-full">
        <img
          ref={leftHandRef}
          src="/images/contact/left-hand.png"
          alt="Left Hand"
          className="absolute left-0 -bottom-20 w-[46%]"
        />
        <img
          ref={bulbRef}
          src="/images/contact/bulb.png"
          alt="Bulb"
          className="relative xl:w-20 2xl:w-28 top-20"
        />
        <img
          ref={rightHandRef}
          src="/images/contact/right-hand.png"
          alt="Right Hand"
          className="absolute right-0 -bottom-4 w-[46%]"
        />
      </div>
    </section>
  );
}
