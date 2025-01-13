"use client";
import React from "react";

export default function ServicesSection({ title, desc }) {
  return (
    <section className="w-full bg-white mb-8">
      <section className="max-w-7xl mx-auto px-4 pt-8 md:pt-24 bg-white">
        {/* Header Section */}
        <div className="grid md:grid-cols-6 gap-8 items-center">
          {/* Left Section: Header */}
          <div className="md:col-span-2">
            <h2 className="text-5xl font-semibold text-black max-w-4">
              {title}
            </h2>
          </div>

          {/* Right Section: Description */}
          <div className="md:col-span-4">
            <p className="text-gray-600 w-[80%] text-lg">{desc}</p>
          </div>
        </div>
      </section>
    </section>
  );
}
