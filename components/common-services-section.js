"use client";
import React, { useState } from "react";

const CommonServicesSection = ({ initialService, services_data }) => {
  const [selectedService, setSelectedService] = useState(initialService);

  return (
    <div className="xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto lg:px-16">
      <div className="relative border-t border-gray-200">
        <div className="py-8">
          <div className="relative">
            {services_data.map((service) => (
              <div key={service.name} className="mb-6">
                <div className="flex flex-col md:flex-row md:items-center">
                  <button
                    onClick={() => setSelectedService(service.name)}
                    className={`xl:text-sm 2xl:text-base font-semibold text-left transition-colors md:w-1/3 ${
                      selectedService === service.name
                        ? "text-red-600 font-medium"
                        : "text-gray-800 hover:text-red-500"
                    }`}
                  >
                    {service.name}
                  </button>

                  {selectedService === service.name && service.description && (
                    <div className="mt-2 md:mt-0 md:flex-1 bg-red-600 text-white py-4 px-8 rounded shadow-sm">
                      {service.description}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonServicesSection;
