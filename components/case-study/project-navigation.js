"use client";
import React, { useCallback } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

const projects = [
  "jonaki",
  "nutting-like-it",
  "appo",
  "glr",
  "flightroniks",
  "smaack",
  "pepsodent",
  "bayer",
];

const getProjectTitle = (slug) => {
  const titles = {
    jonaki: "Jonaki ",
    "nutting-like-it": "Nutting Like It ",
    appo: "Appo ",
    glr: "Good Little Robots",
    flightroniks: "Flightroniks",
    smaack: "Smaack",
    pepsodent: "Pepsodent",
    bayer: "Bayer",
  };
  return titles[slug] || slug;
};

const ProjectNavigation = ({ currentProject }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const getCurrentIndex = useCallback(() => {
    return projects.indexOf(currentProject);
  }, [currentProject]);

  const getNextProject = useCallback(() => {
    const currentIndex = getCurrentIndex();
    const nextIndex = (currentIndex + 1) % projects.length;
    return projects[nextIndex];
  }, [getCurrentIndex]);

  const getProgress = useCallback(() => {
    const currentIndex = getCurrentIndex();
    return ((currentIndex + 1) / projects.length) * 100;
  }, [getCurrentIndex]);

  const handleNextProject = () => {
    const nextProject = getNextProject();
    window.location.href = `/case-study/${nextProject}`;
  };

  const nextProjectTitle = getProjectTitle(getNextProject());

  if (isMobile) {
    return (
      <nav className="text-white p-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-sm text-center">{nextProjectTitle}</div>

          <div className="w-full max-w-xs h-2 bg-white/20">
            <div
              className="h-full bg-white transition-all duration-300"
              style={{ width: `${getProgress()}%` }}
            ></div>
          </div>

          <div className="flex justify-between w-full max-w-xs">
            <div
              className="text-sm hover:opacity-75 transition-opacity cursor-pointer"
              onClick={handleNextProject}
            >
              Next Project
            </div>
            <div className="text-sm hover:opacity-75 transition-opacity cursor-pointer">
              Keep Scrolling
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bottom-0 left-0 right-0 text-white md:py-16">
      <div className="xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto px-16">
        <div className="grid grid-cols-3 items-center">
          <div
            className="text-sm md:text-xl hover:opacity-75 transition-opacity cursor-pointer text-left"
            onClick={handleNextProject}
          >
            Next Project
          </div>

          <div className="text-sm md:text-xl text-center whitespace-nowrap mr-36">
            {nextProjectTitle}
          </div>

          <div className="flex justify-center items-center">
            <div className="hidden md:block w-full h-3 bg-white/20">
              <div
                className="h-full bg-white transition-all duration-300"
                style={{ width: `${getProgress()}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ProjectNavigation;
