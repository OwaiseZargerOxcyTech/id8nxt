"use client";
import React from "react";

export default function ServicesDev({ title, desc }) {
  return (
    <section className="w-full bg-white mb-8">
      <section className="xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto lg:px-16 pt-8 md:pt-24 bg-white">
        {/* Header Section */}
        <div className="grid md:grid-cols-6 gap-8 items-center">
          {/* Left Section: Header */}
          <div className="md:col-span-2">
            <h2 className="text-5xl font-semibold text-red-500 max-w-4">
              ID8
              <span className="text-red-500">{"{"}</span>
              <span className="font-mono text-black">DEV</span>
              <span className="font-mono text-red-500">HUB</span>
              <span className="text-black">{"}"}</span>
            </h2>

            <h2 className="text-5xl font-light text-black max-w-4">{title}</h2>
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
