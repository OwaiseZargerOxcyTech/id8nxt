import Link from "next/link";
import React from "react";

const BlogCards = ({ data = [] }) => {
  return (
    <div className="xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto my-4 md:my-20 lg:px-16">
      <div className="flex flex-col space-y-16">
        {/* First row */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-20">
          <div className="flex flex-col md:flex-row md:space-x-4 md:w-2/3">
            {/* First two close images */}
            {data.slice(0, 2).map((image) => (
              <div key={image.id} className="w-full">
                <Link href={image.link || "#"} className="group">
                  <div className="relative w-full overflow-hidden aspect-square">
                    <img
                      src={image.image || "/placeholder.jpg"}
                      alt={image.title || "No Title"}
                      className="object-cover w-full h-80 4xl:h-[28rem] transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-sm text-black group-hover:text-gray-900 font-bold my-2">
                    {image.title || "Untitled"}
                  </p>
                  <p className="text-sm text-gray-600 group-hover:text-gray-900">
                    {image.description || "No description available."}
                  </p>
                  <button className="group-hover:text-gray-900 text-sm border border-black p-1 mt-2">
                    Read More
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {/* Third image (only if data[2] exists) */}
          {data[2] && (
            <div className="w-full md:w-1/3">
              <Link href={data[2]?.link || "#"} className="group">
                <div className="relative aspect-square w-full overflow-hidden">
                  <img
                    src={data[2]?.image || "/placeholder.jpg"}
                    alt={data[2]?.title || "No Title"}
                    className="object-cover w-full h-80 4xl:h-[28rem] transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-black group-hover:text-gray-900 font-bold my-2 ">
                  {data[2]?.title || "Untitled"}
                </p>
                <p className="text-sm text-gray-600 group-hover:text-gray-900">
                  {data[2]?.description || "No description available."}
                </p>
                <button className="group-hover:text-gray-900 text-sm border border-black p-1 mt-2">
                  Read More
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* Second row (Only render if at least one of data[3], data[4], or data[5] exists) */}
        {data[3] || data[4] || data[5] ? (
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-20">
            {/* First image (only if data[3] exists) */}
            {data[3] && (
              <div className="w-full md:w-1/3">
                <Link href={data[3]?.link || "#"} className="group">
                  <div className="relative aspect-square w-full overflow-hidden">
                    <img
                      src={data[3]?.image || "/placeholder.jpg"}
                      alt={data[3]?.title || "No Title"}
                      className="object-cover w-full xl:h-[18.5rem] 2xl:h-80 4xl:h-[28rem] border transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-sm text-black group-hover:text-gray-900 font-bold my-2">
                    {data[3]?.title || "Untitled"}
                  </p>
                  <p className="text-sm text-gray-600 group-hover:text-gray-900">
                    {data[3]?.description || "No description available."}
                  </p>
                  <button className="group-hover:text-gray-900 text-sm border border-black p-1 mt-2">
                    Read More
                  </button>
                </Link>
              </div>
            )}

            {/* Last two close images */}
            <div className="flex flex-col md:flex-row md:space-x-4 md:w-2/3">
              {data.slice(4, 6).map((image) => (
                <div key={image.id} className="w-full md:w-1/2">
                  <Link href={image?.link || "#"} className="group">
                    <div className="relative aspect-square w-full overflow-hidden">
                      <img
                        src={image?.image || "/placeholder.jpg"}
                        alt={image?.title || "No Title"}
                        className="object-cover w-full h-80 4xl:h-[28rem] transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <p className="text-sm text-black group-hover:text-gray-900 font-bold my-2">
                      {image?.title || "Untitled"}
                    </p>
                    <p className="text-sm text-gray-600 group-hover:text-gray-900">
                      {image?.description || "No description available."}
                    </p>
                    <button className="group-hover:text-gray-900 text-sm border border-black p-1 mt-2">
                      Read More
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default BlogCards;
