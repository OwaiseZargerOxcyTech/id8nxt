"use client";
import React, { useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import CommonServicesSection from "../common-services-section";

export default function ServicesSection() {
  return (
    <section className="w-full bg-white">
      <section className="max-w-7xl mx-auto px-4 pt-8 md:pt-24 bg-white">
        {/* Header Section */}
        <div className="grid md:grid-cols-6 gap-8 items-center">
          {/* Left Section: Header */}
          <div className="md:col-span-2">
            <h2 className="text-5xl font-semibold text-black max-w-4">
              Tech Solutions
            </h2>
          </div>

          {/* Right Section: Description */}
          <div className="md:col-span-4">
            <p className="text-gray-600 max-w-[560px] text-lg">
              Our digital alchemysts turn your digital dreams into reality. By
              leveraging cutting-edge technology, we create integrated
              ecosystems that nurture customer relationships and drive growth.
            </p>
          </div>
        </div>
        <CommonServicesSection />
      </section>
    </section>
  );
}
