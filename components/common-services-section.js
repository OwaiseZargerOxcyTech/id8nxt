import React, { useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

const CommonServicesSection = ({ initialService, services_data }) => {
  const [selectedService, setSelectedService] = useState(initialService); // Default selected service
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleClick = (serviceName) => {
    setSelectedService(serviceName);
  };

  return (
    <div className="mt-8">
      <div className="relative">
        {/* Separating Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-black" />
        <div className="grid grid-cols-1  gap-6 pt-12">
          {services_data.map((service) => (
            <div
              key={service.name}
              className="flex flex-col md:flex-row items-start md:items-center text-sm text-gray-900 relative"
            >
              {/* Service Name */}
              <button
                onClick={() => handleClick(service.name)}
                className={` text-left ${
                  service.name === selectedService
                    ? "text-red-600 font-bold text-lg"
                    : "text-lg"
                }`}
              >
                {service.name}
              </button>

              {/* Service Description */}
              <div
                className={` ${
                  service.name === selectedService ? "block" : "hidden"
                } ${
                  isMobile ? "mt-2" : "absolute -top-2 left-0"
                } w-full  md:w-[830px] bg-red-600 text-white py-2 px-4 rounded text-lg`}
                style={
                  isMobile
                    ? {}
                    : {
                        transform: "translateX(calc(25% + 13rem))",
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
  );
};

export default CommonServicesSection;
