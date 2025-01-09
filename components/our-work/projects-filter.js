"use client";

import { useState } from "react";

export default function ProjectsFilter() {
  const [filter, setFilter] = useState("");
  const [activeTab, setActiveTab] = useState("case-study"); // For Tabs

  const handleReset = () => {
    setFilter("");
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-4 pt-12 md:pt-28 pb-10">
      {/* Title */}
      <h2 className="mb-12 md:mb-24 text-4xl font-semibold sm:text-5xl lg:text-5xl">
        Our Recent
        <br />
        Projects
      </h2>

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
  );
}
