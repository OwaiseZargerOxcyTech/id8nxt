"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Solutions from "./home/solutions";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState("");
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  // Close solutions panel when route changes
  useEffect(() => {
    setIsSolutionsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (
      pathname.startsWith("/brand-solutions") ||
      pathname.startsWith("/media-solutions") ||
      pathname.startsWith("/tech-solutions")
    ) {
      setActiveRoute("solutions");
    } else {
      setActiveRoute(pathname);
    }
  }, [pathname]);

  const toggleSolutions = () => {
    setIsSolutionsOpen(!isSolutionsOpen);
  };

  return (
    <>
      <Solutions isOpen={isSolutionsOpen} />

      <nav className="absolute top-0 left-0 bg-transparent w-full z-50">
        <div className="xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto px-4 sm:px-6 lg:px-16 flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img src="/images/ID8-Logo-W.png" alt="logo" className="w-20" />
            </Link>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-12 4xl:space-x-24 items-center">
            <Link href="/">
              <p
                className={`${
                  isActive("/") ? "text-red-500 font-semibold" : "text-white"
                } hover:text-red-500`}
              >
                Home
              </p>
            </Link>
            <Link href="/about">
              <p
                className={`${
                  isActive("/about")
                    ? "text-red-500 font-semibold"
                    : "text-white"
                } hover:text-red-500`}
              >
                About Us
              </p>
            </Link>
            <Link href="/our-work">
              <p
                className={`${
                  isActive("/our-work")
                    ? "text-red-500 font-semibold"
                    : "text-white"
                } hover:text-red-500`}
              >
                Our Work
              </p>
            </Link>
            <button
              onClick={toggleSolutions}
              className={`${
                activeRoute === "solutions"
                  ? "text-red-500 font-semibold"
                  : "text-white"
              } hover:text-red-500 focus:outline-none`}
            >
              Solutions{" "}
              <span className="transform rotate-90 inline-block">&gt;</span>
            </button>
            <Link href="/blog">
              <p
                className={`${
                  isActive("/blog")
                    ? "text-red-500 font-semibold"
                    : "text-white"
                } hover:text-red-500`}
              >
                Blog
              </p>
            </Link>
            <Link href="/devhub">
              <p
                className={`${
                  isActive("/devhub")
                    ? "text-red-500 font-semibold"
                    : "text-white"
                } hover:text-red-500`}
              >
                ID8&#123;DEVHUB&#125;
              </p>
            </Link>
            <Link href="/contact-us">
              <p
                className={`${
                  isActive("/contact")
                    ? "text-red-500 font-semibold"
                    : "text-white"
                } hover:text-red-500`}
              >
                Contact Us
              </p>
            </Link>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black text-white space-y-4 px-4 py-4">
            <Link href="/">
              <p
                className={`block ${
                  isActive("/") ? "text-red-500 font-semibold" : ""
                } hover:text-red-500`}
              >
                Home
              </p>
            </Link>
            <Link href="/about">
              <p
                className={`block ${
                  isActive("/about") ? "text-red-500 font-semibold" : ""
                } hover:text-red-500`}
              >
                About Us
              </p>
            </Link>
            <Link href="/our-work">
              <p
                className={`block ${
                  isActive("/our-work") ? "text-red-500 font-semibold" : ""
                } hover:text-red-500`}
              >
                Our Work
              </p>
            </Link>
            <button
              onClick={toggleSolutions}
              className={`block w-full text-left items-center gap-2 ${
                activeRoute === "solutions" ? "text-red-500 font-semibold" : ""
              } hover:text-red-500 focus:outline-none`}
            >
              Solutions{" "}
              <span className="transform rotate-90 inline-block">&gt;</span>
            </button>
            <Link href="/blog">
              <p
                className={`block ${
                  isActive("/blog") ? "text-red-500 font-semibold" : ""
                } hover:text-red-500`}
              >
                Blog
              </p>
            </Link>
            <Link href="/devhub">
              <p
                className={`block ${
                  isActive("/devhub") ? "text-red-500 font-semibold" : ""
                } hover:text-red-500`}
              >
                ID8&#123;DEVHUB&#125;
              </p>
            </Link>
            <Link href="/contact-us">
              <p
                className={`block ${
                  isActive("/contact") ? "text-red-500 font-semibold" : ""
                } hover:text-red-500`}
              >
                Contact Us
              </p>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
