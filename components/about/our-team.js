"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";

export default function OurTeam() {
  const [category, setCategory] = useState("Stratcom");

  const categories = [
    "Stratcom",
    "Account Team",
    "Creative Team",
    "Sales Team",
  ];

  const teamData = {
    Stratcom: [
      {
        name: "Atul Soneeth",
        position: "CHIEF ID8tor",
        email: "attul@id8nxt.com",
        mobile: "+1234567890",
        img: "/images/about/about-team/atul-s.png",
      },
      {
        name: "Asif Akbar",
        position: "Creative Director",
        email: "asif.akbar@id8nxt.com",
        mobile: "+1234567891",
        img: "/images/about/about-team/asif-a.png",
      },
      {
        name: "Madhav Barve",
        position: "Key Account Manager",
        email: "madhav.barve@id8nxt.com",
        mobile: "+1234567892",
        img: "/images/about/about-team/madhav.png",
      },
      {
        name: "Amina Sayed",
        position: "Lead Key Account Manager",
        email: "amina.sayed@id8nxt.com",
        mobile: "+1234567893",
        img: "/images/about/about-team/amina-s.png",
      },
      {
        name: "Nina Patel",
        position: "Content Strategist",
        email: "nina@id8nxt.com",
        mobile: "+1234567894",
        img: "https://img.freepik.com/premium-photo/financier-business-woman-works-computer-accountant-company-s-finances_283470-2057.jpg?semt=ais_hybrid",
      },
    ],
    "Account Team": [
      {
        name: "Aminah Sayed",
        position: "Lead Key Account Manager",
        email: "amina@site.com",
        mobile: "+9876543210",
        img: "https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?semt=ais_hybrid",
      },
      {
        name: "Sam Patel",
        position: "Account Manager",
        email: "sam@site.com",
        mobile: "+9876543211",
        img: "https://img.freepik.com/free-photo/business-male-with-laptop_23-2148479539.jpg?semt=ais_hybrid",
      },
      {
        name: "Sophia Loren",
        position: "Assistant Manager",
        email: "sophia@site.com",
        mobile: "+9876543212",
        img: "https://img.freepik.com/premium-photo/portrait-indian-businesswoman-white-background-holding-laptop_665346-22333.jpg?semt=ais_hybrid",
      },
      {
        name: "Jake Long",
        position: "Junior Account Manager",
        email: "jake@site.com",
        mobile: "+9876543213",
        img: "https://img.freepik.com/free-photo/portrait-indian-happy-businessman-using-laptop-computer-office_231208-2580.jpg?semt=ais_hybrid",
      },
      {
        name: "Atul Soneeth",
        position: "CEO/Editor",
        email: "atul@site.com",
        mobile: "+1234567890",
        img: "https://img.freepik.com/free-photo/portrait-indian-happy-businessman-using-laptop-computer-office_231208-2580.jpg?semt=ais_hybrid",
      },
      {
        name: "Jane Doe",
        position: "Editor-in-Chief",
        email: "jane@site.com",
        mobile: "+1234567891",
        img: "https://img.freepik.com/free-photo/business-male-with-laptop_23-2148479539.jpg?semt=ais_hybrid",
      },
      {
        name: "Mark Smith",
        position: "Senior Editor",
        email: "mark@site.com",
        mobile: "+1234567892",
        img: "https://img.freepik.com/free-photo/handsome-businessman-work-with-digital-tablet_329181-9117.jpg?semt=ais_hybrid",
      },
      {
        name: "Lisa Wong",
        position: "Assistant Editor",
        email: "lisa@site.com",
        mobile: "+1234567893",
        img: "https://img.freepik.com/premium-photo/business-woman-office-portrait-arms-crossed-lawyer-employee-law-firm-vision-company-worker-female-person-with-confidence-proud-from-professional-attorney-job-work-success_590464-189532.jpg?semt=ais_hybrid",
      },
      {
        name: "Nina Patel",
        position: "Content Strategist",
        email: "nina@site.com",
        mobile: "+1234567894",
        img: "https://img.freepik.com/premium-photo/financier-business-woman-works-computer-accountant-company-s-finances_283470-2057.jpg?semt=ais_hybrid",
      },
    ],
    "Creative Team": [
      {
        name: "Jane Doe",
        position: "Editor-in-Chief",
        email: "jane@site.com",
        mobile: "+1234567891",
        img: "https://img.freepik.com/free-photo/business-male-with-laptop_23-2148479539.jpg?semt=ais_hybrid",
      },
      {
        name: "Mark Smith",
        position: "Senior Editor",
        email: "mark@site.com",
        mobile: "+1234567892",
        img: "https://img.freepik.com/free-photo/handsome-businessman-work-with-digital-tablet_329181-9117.jpg?semt=ais_hybrid",
      },
      {
        name: "Lisa Wong",
        position: "Assistant Editor",
        email: "lisa@site.com",
        mobile: "+1234567893",
        img: "https://img.freepik.com/premium-photo/business-woman-office-portrait-arms-crossed-lawyer-employee-law-firm-vision-company-worker-female-person-with-confidence-proud-from-professional-attorney-job-work-success_590464-189532.jpg?semt=ais_hybrid",
      },
      {
        name: "Asif Akbar",
        position: "Creative Director",
        email: "asif@site.com",
        mobile: "+1928374650",
        img: "https://img.freepik.com/free-photo/cheerful-businessman-working-office_144627-15551.jpg",
      },
      {
        name: "Atul Soneeth",
        position: "CEO/Editor",
        email: "atul@site.com",
        mobile: "+1234567890",
        img: "https://img.freepik.com/free-photo/portrait-indian-happy-businessman-using-laptop-computer-office_231208-2580.jpg?semt=ais_hybrid",
      },
      {
        name: "Nina Patel",
        position: "Content Strategist",
        email: "nina@site.com",
        mobile: "+1234567894",
        img: "https://img.freepik.com/premium-photo/financier-business-woman-works-computer-accountant-company-s-finances_283470-2057.jpg?semt=ais_hybrid",
      },
      {
        name: "Sophia Lee",
        position: "UX Designer",
        email: "sophia.lee@site.com",
        mobile: "+1928374655",
        img: "https://img.freepik.com/free-photo/young-businesswoman-working-office_144627-15554.jpg",
      },
    ],
    "Sales Team": [
      {
        name: "Mark Smith",
        position: "Senior Editor",
        email: "mark@site.com",
        mobile: "+1234567892",
        img: "https://img.freepik.com/free-photo/handsome-businessman-work-with-digital-tablet_329181-9117.jpg?semt=ais_hybrid",
      },
      {
        name: "Atul Soneeth",
        position: "CEO/Editor",
        email: "atul@site.com",
        mobile: "+1234567890",
        img: "https://img.freepik.com/free-photo/portrait-indian-happy-businessman-using-laptop-computer-office_231208-2580.jpg?semt=ais_hybrid",
      },
      {
        name: "Jane Doe",
        position: "Editor-in-Chief",
        email: "jane@site.com",
        mobile: "+1234567891",
        img: "https://img.freepik.com/free-photo/business-male-with-laptop_23-2148479539.jpg?semt=ais_hybrid",
      },

      {
        name: "Nina Patel",
        position: "Content Strategist",
        email: "nina@site.com",
        mobile: "+1234567894",
        img: "https://img.freepik.com/premium-photo/financier-business-woman-works-computer-accountant-company-s-finances_283470-2057.jpg?semt=ais_hybrid",
      },

      {
        name: "Lisa Wong",
        position: "Assistant Editor",
        email: "lisa@site.com",
        mobile: "+1234567893",
        img: "https://img.freepik.com/premium-photo/business-woman-office-portrait-arms-crossed-lawyer-employee-law-firm-vision-company-worker-female-person-with-confidence-proud-from-professional-attorney-job-work-success_590464-189532.jpg?semt=ais_hybrid",
      },
    ],
  };

  return (
    <main className="w-full min-h-screen bg-white py-16">
      <div className="xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-black">
          <div className="text-3xl md:text-6xl font-normal text-black">
            Our
            <br /> Team
          </div>
          <div className="col-span-2">
            {/* Heading */}
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-1">
              THE HUMANS BEHIND THE PIXELS
            </h2>

            {/* Description */}
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
              className={`flex-1 px-4 py-2  text-start ${
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
          // pagination={{
          //   clickable: true,
          // }}
          modules={[FreeMode]}
          breakpoints={{
            // Mobile screens
            0: {
              slidesPerView: 1.2,
            },
            // Tablets
            640: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            // Small desktops
            768: {
              slidesPerView: 3.2,
              spaceBetween: 30,
            },
            // Large desktops
            1024: {
              slidesPerView: 3.7,
              spaceBetween: 40,
            },
          }}
        >
          {teamData[category].map((member, index) => (
            <SwiperSlide key={index}>
              <div className=" flex flex-col items-start h-full ">
                <div className="flex justify-center items-center h-[420px] bg-[#EAEAEA] w-full">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-gray-700 text-lg font-medium text-left">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 text-left ">{member.position}</p>
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
