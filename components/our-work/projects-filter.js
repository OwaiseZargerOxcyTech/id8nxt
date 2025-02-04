"use client";

import { useState } from "react";
import CaseStudy from "./case-study";
import DailyCreativity from "./daily-creativity";

export default function ProjectsFilter() {
  const [filter, setFilter] = useState("");
  const [activeTab, setActiveTab] = useState("case-study"); // For Tabs

  const handleReset = () => {
    setFilter("");
  };

  return (
    <div className="xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto px-4 sm:px-6 lg:px-16">
      {/* Title */}
      <h2 className="my-24 text-4xl font-light lg:text-6xl">
        Our Recent
        <br />
        Projects
      </h2>

      {/* Sticky Container */}
      <div className="sticky top-0 bg-transparent z-10 py-4">
        {/* Filters Row */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Tabs */}
          <div className="w-full sm:w-auto flex">
            <button
              className={`px-6 py-2 text-lg font-medium border border-black rounded-none ${
                activeTab === "case-study" ? "bg-black text-white" : "bg-white"
              }`}
              onClick={() => setActiveTab("case-study")}
            >
              Case Study
            </button>
            <button
              className={`px-6 py-2 text-lg font-medium border border-black rounded-none ${
                activeTab === "daily-creativity"
                  ? "bg-black text-white"
                  : "bg-white"
              }`}
              onClick={() => setActiveTab("daily-creativity")}
            >
              Daily Creativity
            </button>
          </div>

          {/* Search and Reset */}
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Filter By Services"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full sm:w-[300px] lg:w-[360px] px-4 py-2 text-lg font-medium border border-black rounded-none"
            />
            <button
              onClick={handleReset}
              className="min-w-[100px] px-4 py-2 text-lg font-medium border border-black rounded-none bg-white hover:bg-black hover:text-white"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Conditional Rendering */}
      <div className="mt-12">
        {activeTab === "case-study" && <CaseStudy />}
        {activeTab === "daily-creativity" && <DailyCreativity />}
      </div>
    </div>
  );
}
