"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ContactHero() {
  const leftHandRef = useRef(null);
  const rightHandRef = useRef(null);
  const bulbRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Left hand animation
    tl.from(leftHandRef.current, {
      x: "-100%",
      opacity: 0,
      rotate: -45,
      duration: 1.5,
      ease: "power3.out",
    })
      // Right hand animation
      .from(
        rightHandRef.current,
        {
          x: "100%",
          opacity: 0,
          rotate: 45,
          duration: 1.5,
          ease: "power3.out",
        },
        "-=1.5" // Start at the same time as left hand
      )
      // Bulb animation
      .from(bulbRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      })
      // Continuous floating animation for the bulb
      .to(bulbRef.current, {
        y: -15,
        repeat: -1,
        yoyo: true,
        duration: 1.8,
        ease: "power1.inOut",
      });

    // Clean up animation on unmount
    return () => tl.kill();
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contact/contact-bg.png')" }}
      ></div>
      <h1 className="absolute top-1/4 xl:left-24 2xl:left-28 text-white text-7xl 4xl:text-90px font-thin text-left px-6">
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
