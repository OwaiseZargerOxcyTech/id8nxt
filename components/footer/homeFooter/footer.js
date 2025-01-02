"use client"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FooterNav } from "./footer-nav";
import { FooterBanner } from "./footer-banner";
import { SocialLinks } from "./social-links";

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
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
    <footer ref={footerRef} className="bg-[#D2042D] py-8">
      <div className="container mx-auto">
        <div className="mt-24">
          <FooterNav />
          <FooterBanner />
        </div>
        <div className="flex justify-end">
          <SocialLinks />
        </div>
        <div className="w-full border-t border-white/20 my-6"></div>
        <div className="flex justify-start">
          <p className="text-sm text-white/80">
            Developed by ID8NXT - Copyright © 2024 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

