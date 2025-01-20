"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";
import { teamData } from "./team-data";

export default function OurTeam() {
  const [category, setCategory] = useState("Stratcom");
  const [hoveredMember, setHoveredMember] = useState(null);

  const categories = [
    "Stratcom",
    "Account Team",
    "Creative Team",
    "Sales Team",
  ];

  return (
    <main className="w-full min-h-screen bg-white py-16">
      <div className="xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-black">
          <div className="text-3xl md:text-6xl font-normal text-black">
            Our
            <br /> Team
          </div>
          <div className="col-span-2">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-1">
              THE HUMANS BEHIND THE PIXELS
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Our dynamic blend of creative thinkers, tech enthusiasts, and
              strategic innovators are dedicated to transforming ideas into
              impactful digital experiences. From our visionary designers to our
              data-driven marketers, each member brings a unique perspective
              that fuels our collaborative spirit.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Join us on this wild ride, where our caffeine-fueled brainstorms
              often lead to brilliant ideas—and a few friendly debates over the
              best pizza toppings!
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap max-w-4xl my-16 border border-gray-700">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`flex-1 px-4 py-2 text-start ${
                category === cat ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          freeMode={true}
          modules={[FreeMode]}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            640: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3.2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3.7,
              spaceBetween: 40,
            },
          }}
        >
          {teamData[category].map((member, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-start h-full">
                <div
                  className="flex justify-center items-center h-[28rem] bg-[#EAEAEA] w-full relative overflow-hidden"
                  onMouseEnter={() => setHoveredMember(index)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-opacity duration-300"
                    style={{
                      opacity:
                        hoveredMember === index && member.hoverImg ? 0 : 1,
                    }}
                  />
                  {member.hoverImg && (
                    <img
                      src={member.hoverImg}
                      alt={`${member.name} hover`}
                      className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300"
                      style={{
                        opacity: hoveredMember === index ? 1 : 0,
                      }}
                    />
                  )}
                </div>

                <div className="mt-4">
                  <h3 className="text-gray-700 text-lg font-medium text-left">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 text-left">{member.position}</p>
                  <p className="text-gray-500 text-left">{member.mobile}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-500 text-left"
                  >
                    {member.email}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}
