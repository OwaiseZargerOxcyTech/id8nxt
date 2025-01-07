"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FooterNav } from "./footer-nav";
import { FooterBanner, FooterMainBanner } from "./footer-main-banner";
import { SocialLinks } from "./social-links";
import { Copyright } from "./copyright";
import { FooterAboutBanner } from "./footer-about-banner";

gsap.registerPlugin(ScrollTrigger);

export function Footer({ backColor, isAbout }) {
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
      className={`w-full py-4 flex flex-col justify-center`}
      style={{ backgroundColor: backColor }}>
      <footer ref={footerRef}>
        <FooterNav />

        {isAbout ? <FooterAboutBanner /> : <FooterMainBanner />}

        <SocialLinks />
        <Copyright />
      </footer>
    </main>
  );
}