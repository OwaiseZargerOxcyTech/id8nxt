"use client";
import React, { useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function ServicesSection() {
  const services = [
    {
      name: "Custom Web Development",
      description: "Building custom websites tailored to your needs.",
      mleft: "165px",
    },
    {
      name: "Web Personalization",
      description: "Making the web personal, one user at a time.",
      mleft: "170px",
    },
    {
      name: "UI/UX",
      description: "Creating intuitive and engaging user experiences.",
      mleft: "165px",
    },
    {
      name: "SEO",
      description: "Optimizing your website for search engine visibility.",
      mleft: "165px",
    },
    {
      name: "CRM & ERP",
      description:
        "Streamlining business processes with custom CRM and ERP solutions.",
      mleft: "165px",
    },
    {
      name: "E-Commerce",
      description: "Developing robust and scalable e-commerce platforms.",
      mleft: "160px",
    },
    {
      name: "Email Marketing",
      description: "Driving engagement with targeted email campaigns.",
      mleft: "160px",
    },
    {
      name: "Marketing Automation",
      description: "Automating repetitive marketing tasks for efficiency.",
      mleft: "160px",
    },
  ];

  const [selectedService, setSelectedService] = useState("Web Personalization"); // Default selected service
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleClick = (serviceName) => {
    setSelectedService(serviceName);
  };

  return (
    <section className="w-full bg-white">
      <section className="max-w-6xl mx-auto px-4 py-16 bg-white">
        {/* Header Section */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left Section: Header */}
          <div>
            <h2 className="text-4xl font-light text-black">Tech Solutions</h2>
          </div>

          {/* Right Section: Description */}
          <div className="md:col-span-2">
            <p className="text-gray-600 max-w-[430px]">
              Our digital alchemysts turn your digital dreams into reality. By
              leveraging cutting-edge technology, we create integrated
              ecosystems that nurture customer relationships and drive growth.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="mt-12">
          <div className="relative">
            {/* Separating Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-300" />
            <div className="grid grid-cols-1 gap-6 pt-4">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="flex flex-col md:flex-row items-start md:items-center justify-between text-sm text-gray-900 relative"
                >
                  {/* Service Name */}
                  <button
                    onClick={() => handleClick(service.name)}
                    className={`text-left ${
                      service.name === selectedService
                        ? "text-red-600 font-bold"
                        : ""
                    }`}
                  >
                    {service.name}
                  </button>

                  {/* Service Description */}
                  <div
                    className={`${
                      service.name === selectedService ? "block" : "hidden"
                    } ${
                      isMobile ? "mt-2" : "absolute top-0 left-0"
                    } w-full md:w-[750px] bg-red-600 text-white py-2 px-4 rounded`}
                    style={
                      isMobile
                        ? {}
                        : {
                            transform: "translateX(calc(25% + 1rem))",
                            marginLeft: `${service.mleft}`,
                          }
                    }
                  >
                    {service.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
