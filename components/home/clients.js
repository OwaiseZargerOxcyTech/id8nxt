"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ClientLogos() {
  const clients = [
    { name: "Pixadoo", logo: "/images/home/client-logos/Pixadoo@2x.png" },
    { name: "Bayer", logo: "/images/home/client-logos/Bayer@2x.png" },
    {
      name: "Microsoft Azure",
      logo: "/images/home/client-logos/Microsoft@2x.png",
    },
    { name: "Neoniche", logo: "/images/home/client-logos/Neoniche@2x.png" },
    { name: "CelerityX", logo: "/images/home/client-logos/CelerityX@2x.png" },
    { name: "Opentext", logo: "/images/home/client-logos/opentext@2x.png" },
    { name: "NComputing", logo: "/images/home/client-logos/Ncomputing@2x.png" },
    { name: "Adobe", logo: "/images/home/client-logos/Redington@2x.png" },
    { name: "Academy", logo: "/images/home/client-logos/Adobe@2x.png" },
    { name: "Snowflake", logo: "/images/home/client-logos/SAS@2x.png" },
    { name: "Hubblee", logo: "/images/home/client-logos/Snowflake@2x.png" },
    { name: "OmaniVibe", logo: "/images/home/client-logos/Omani-Vibe@2x.png" },
    { name: "Smaack", logo: "/images/home/client-logos/Smaack@2x.png" },
    {
      name: "SaintGobain",
      logo: "/images/home/client-logos/Saint-Gobain@2x.png",
    },
  ];

  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);

  useEffect(() => {
    const container1 = containerRef1.current;
    const container2 = containerRef2.current;

    if (container1 && container2) {
      // Duplicate the content for both rows
      const clone1 = container1.innerHTML;
      const clone2 = container2.innerHTML;
      container1.innerHTML += clone1;
      container2.innerHTML += clone2;

      const rowWidth1 = container1.scrollWidth / 2; // Half the scroll width for row 1
      const rowWidth2 = container2.scrollWidth / 2; // Half the scroll width for row 2

      // Row 1: Right to left
      gsap.to(container1, {
        x: -rowWidth1, // Scroll to the left
        ease: "none",
        duration: 40, // Adjust speed
        repeat: -1, // Infinite loop
        modifiers: {
          x: (x) => `${parseFloat(x) % rowWidth1}px`, // Reset x for seamless looping
        },
      });

      // Row 2: Left to right
      gsap.to(container2, {
        x: rowWidth2, // Scroll to the right
        ease: "none",
        duration: 40, // Adjust speed
        repeat: -1, // Infinite loop
        modifiers: {
          x: (x) => `${(parseFloat(x) % rowWidth2) - rowWidth2}px`, // Reset x for seamless looping
        },
      });
    }
  }, []);

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden space-y-8">
        {/* Row 1 */}
        <div
          ref={containerRef1}
          className="flex space-x-8 md:space-x-12 lg:space-x-16"
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex justify-center items-center relative group"
            >
              <div className="relative w-40 h-20">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  className="object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div
          ref={containerRef2}
          className="flex space-x-8 md:space-x-12 lg:space-x-16"
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex justify-center items-center relative group"
            >
              <div className="relative w-40 h-20">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  className="object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
