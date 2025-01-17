"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FooterNav } from "./footer-nav";
import { FooterBanner } from "./footer-banner";
import { SocialLinks } from "./social-links";
import { Copyright } from "./copyright";

gsap.registerPlugin(ScrollTrigger);

export function Footer({ color, textColor }) {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <main
      className={`w-full h-screen py-4 flex flex-col justify-center`}
      style={{ backgroundColor: color }}
    >
      <footer ref={footerRef}>
        <FooterNav textColor={textColor} />
        <FooterBanner color={color} textColor={textColor} />
        <SocialLinks textColor={textColor} />
        <Copyright textColor={textColor} />
      </footer>
    </main>
  );
}
