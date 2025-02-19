import Link from "next/link";
import React from "react";

const ImageGridDev = ({ data }) => {
  if (!data || data.length < 3) return null;

  return (
    <div className="xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto px-4 sm:px-6 lg:px-16">
      <div className="flex flex-col space-y-16">
        {/* First row */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-20">
          <div className="flex flex-col md:flex-row md:space-x-4 md:w-2/3">
            {/* First two close images */}
            {data.slice(0, 2).map((image) => (
              <div key={image.id} className="w-full">
                <Link href={image.link} className="group">
                  <div className="relative w-full overflow-hidden aspect-square">
                    <img
                      src={image.image}
                      alt={image.title}
                      className="object-cover w-full h-80 4xl:h-[28rem] transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-4 2xl:mt-0 4xl:text-lg group-hover:text-gray-900">
                    {image.title}
                  </p>
                </Link>
              </div>
            ))}
          </div>
          {/* Third image with gap */}
          <div className="w-full md:w-1/3">
            <Link href={data[2].link} className="group">
              <div className="relative aspect-square w-full overflow-hidden">
                <img
                  src={data[2].image}
                  alt={data[2].title}
                  className="object-cover w-full h-80 4xl:h-[28rem] transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4 2xl:-mt-2 mb-16 4xl:text-lg group-hover:text-gray-900">
                {data[2].title}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGridDev;
