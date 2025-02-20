"use client";
import React, { useState } from "react";

const DevServicesSection = ({ initialService, services_data }) => {
  const [selectedService, setSelectedService] = useState(initialService);

  return (
    <div className="xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto lg:px-16">
      <div className="relative border-t-2 border-gray-900">
        <h1 className="text-4xl font-thin mt-16">
          What's <br /> Inside?
        </h1>
        <div className="py-8">
          <div className="relative">
            {services_data.map((service) => (
              <div key={service.name} className="mb-2">
                <div className="flex flex-col md:flex-row md:items-start">
                  <div className="md:w-1/3 h-full">
                    <span
                      onMouseEnter={() => setSelectedService(service.name)}
                      onMouseLeave={() => setSelectedService(null)}
                      className={`text-base font-normal text-left transition-colors cursor-pointer inline-block ${
                        selectedService === service.name
                          ? "text-red-600 font-medium"
                          : "text-gray-800 hover:text-red-500"
                      }`}
                    >
                      {service.name}
                    </span>
                  </div>

                  <div className="mt-2 md:-mt-3 md:flex-1 min-h-[60px] transition-all duration-200 ease-in-out">
                    {selectedService === service.name &&
                      service.description && (
                        <div className="bg-red-600 text-white py-3 px-8 rounded shadow-sm">
                          {service.description}
                        </div>
                      )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevServicesSection;
