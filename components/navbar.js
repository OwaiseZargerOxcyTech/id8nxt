"use client"
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 bg-transparent w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <p className="text-white text-xl font-bold">ID8NXT</p>
            {/* <img src="https://id8nxt.com/wp-content/uploads/2023/08/id8Nxt_logo.png" alt="logo"/> */}

          </Link>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/">
            <p className="text-white hover:text-red-500 hover:font-semibold">Home</p>
          </Link>
          <Link href="/about">
            <p className="text-white hover:text-red-500 ">About Us</p>
          </Link>
          <Link href="/our-work">
            <p className="text-white hover:text-red-500 ">Our Work</p>
          </Link>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-white hover:text-red-500  focus:outline-none"
            >
              Solutions
            </button>
            {dropdownOpen && (
              <div className="absolute bg-gray-800 text-white rounded mt-2 shadow-lg">
                {/* Dropdown items go here */}
                <div className="p-4">Dropdown Content</div>
              </div>
            )}
          </div>
          <Link href="/blog">
            <p className="text-white hover:text-red-500 ">Blog</p>
          </Link>
          <Link href="/devhub">
            <p className="text-white hover:text-red-500 ">ID8&#123;DEVHUB&#125;</p>
          </Link>
          <Link href="/contact">
            <p className="text-white hover:text-red-500 ">Contact Us</p>
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
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white space-y-4 px-4 py-4">
          <Link href="/">
            <p className="block hover:text-red-500 ">Home</p>
          </Link>
          <Link href="/about">
            <p className="block hover:text-red-500 ">About Us</p>
          </Link>
          <Link href="/our-work">
            <p className="block hover:text-red-500 ">Our Work</p>
          </Link>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="block w-full text-left hover:text-red-500  focus:outline-none"
          >
            Solutions
          </button>
          {dropdownOpen && (
            <div className="bg-gray-800 text-white rounded mt-2 shadow-lg p-4">
              {/* Dropdown items go here */}
              Dropdown Content
            </div>
          )}
          <Link href="/blog">
            <p className="block hover:text-red-500 ">Blog</p>
          </Link>
          <Link href="/devhub">
            <p className="block hover:text-red-500 ">ID8&#123;DEVHUB&#125;</p>
          </Link>
          <Link href="/contact">
            <p className="block hover:text-red-500 ">Contact Us</p>
          </Link>
        </div>
      )}
    </nav>
  );
}
