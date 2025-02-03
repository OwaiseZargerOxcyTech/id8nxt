import Link from "next/link";
import React from "react";

const ImageGrid = ({ data }) => {
  if (!data || data.length < 6) return null;

  return (
    <div className="xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto my-4 md:my-20">
      <div className="flex flex-col space-y-16">
        {/* First row */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-20">
          <div className="flex flex-col md:flex-row md:space-x-4 md:w-2/3">
            {/* First two close images */}
            {data.slice(0, 2).map((image) => (
              <div key={image.id} className="w-full">
                <Link href={image.link} className="group">
                  <p className="text-sm text-gray-600 mt-2 group-hover:text-gray-900">
                    {image.title}
                  </p>
                  <div className="relative w-full overflow-hidden aspect-square">
                    <img
                      src={image.image}
                      alt={image.title}
                      className="object-cover w-full h-80 4xl:h-[28rem] transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {/* Third image with gap */}
          <div className="w-full md:w-1/3">
            <Link href={data[2].link} className="group">
              <p className="text-sm text-gray-600 group-hover:text-gray-900">
                {data[2].title}
              </p>
              <div className="relative aspect-square w-full overflow-hidden">
                <img
                  src={data[2].image}
                  alt={data[2].title}
                  className="object-cover w-full h-80 4xl:h-[28rem] transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
          </div>
        </div>

        {/* Second row */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-20">
          {/* First image */}
          <div className="w-full md:w-1/3">
            <Link href={data[3].link} className="group">
              <p className="text-sm text-gray-600 truncate group-hover:text-gray-900">
                {data[3].title}
              </p>
              <div className="relative aspect-square w-full overflow-hidden">
                <img
                  src={data[3].image}
                  alt={data[3].title}
                  className="object-cover w-full xl:h-[18.5rem] 2xl:h-80 4xl:h-[28rem] border transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
          </div>
          {/* Last two close images */}
          <div className="flex flex-col md:flex-row md:space-x-4 md:w-2/3">
            {data.slice(4, 6).map((image) => (
              <div key={image.id} className="w-full md:w-1/2">
                <Link href={image.link} className="group">
                  <p className="text-sm text-gray-600 group-hover:text-gray-900">
                    {image.title}
                  </p>
                  <div className="relative aspect-square w-full overflow-hidden">
                    <img
                      src={image.image}
                      alt={image.title}
                      className="object-cover w-full h-80 4xl:h-[28rem] transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
