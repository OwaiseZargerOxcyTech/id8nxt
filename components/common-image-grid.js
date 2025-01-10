import React from "react";

const ImageGrid = ({ data }) => {
  return (
    <div className="container mx-auto p-4 mb-24">
      <div className="flex flex-col space-y-16">
        {/* First row */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0">
          <div className="flex flex-col md:flex-row md:space-x-4 md:w-2/3">
            {/* First two close images */}
            {data.slice(0, 2).map((image) => (
              <div key={image.id} className="w-full md:w-1/2">
                <p className="text-sm text-gray-600 mt-2">{image.title}</p>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Third image with gap */}
          <div className="md:ml-24 w-full md:w-1/3">
            <p className="text-sm text-gray-600 mt-2">{data[2].title}</p>
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
              <img
                src={data[2].image}
                alt={data[2].title}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Second row */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0">
          {/* First image */}
          <div className="w-full md:w-1/3">
            <p className="text-sm text-gray-600 mt-2">{data[3].title}</p>
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
              <img
                src={data[3].image}
                alt={data[3].title}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          {/* Last two close images */}
          <div className="flex flex-col md:flex-row md:space-x-4 md:ml-24 md:w-2/3">
            {data.slice(4, 6).map((image) => (
              <div key={image.id} className="w-full md:w-1/2">
                <p className="text-sm text-gray-600 mt-2">{image.title}</p>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;