import {
  FaBullseye,
  FaUserFriends,
  FaShareAlt,
  FaLightbulb,
  FaSearch,
  FaVideo,
} from "react-icons/fa";

export default function FeatureCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {/* Card 1 */}
      <div className="group relative bg-white border border-gray-200 shadow-md overflow-hidden hover:bg-primary-red transition duration-300 aspect-square">
        <div className="p-8 text-center flex flex-col justify-center h-full">
          <h3 className="text-4xl text-gray-400 group-hover:text-white">
            Performance Marketing
          </h3>
          <div className="hidden group-hover:block">
            <p className="text-gray-600 group-hover:text-white mt-4 transition ease-in duration-300">
              Drive results with targeted campaigns.
            </p>
            <FaBullseye
              className="text-gray-400 group-hover:text-white mt-4 mx-auto transition ease-in duration-300"
              size={48}
            />
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="group relative bg-white border border-gray-200 shadow-md overflow-hidden hover:bg-secondary-lime transition duration-300 aspect-square">
        <div className="p-8 text-center flex flex-col justify-center h-full">
          <h3 className="text-4xl font-medium text-gray-400 group-hover:text-white">
            Influencer Marketing
          </h3>
          <div className="hidden group-hover:block">
            <p className="text-gray-600 group-hover:text-white mt-4">
              Our team collaborates with influencers.
            </p>
            <FaUserFriends
              className="text-gray-400 group-hover:text-white mt-4 mx-auto"
              size={48}
            />
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="group relative bg-white border border-gray-200 shadow-md overflow-hidden hover:bg-primary-navy transition duration-300 aspect-square">
        <div className="p-8 text-center flex flex-col justify-center h-full">
          <h3 className="text-4xl font-we text-gray-400 group-hover:text-white">
            Social Media Marketing
          </h3>
          <div className="hidden group-hover:block">
            <p className="text-gray-600 group-hover:text-white mt-4">
              Engage your audience effectively.
            </p>
            <FaShareAlt
              className="text-gray-400 group-hover:text-white mt-4 mx-auto"
              size={48}
            />
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="group relative bg-white border border-gray-200 shadow-md overflow-hidden hover:bg-primary-navy transition duration-300 aspect-square">
        <div className="p-8 text-center flex flex-col justify-center h-full">
          <h3 className="text-4xl font-we text-gray-400 group-hover:text-white">
            Branding Strategy & Development
          </h3>
          <div className="hidden group-hover:block">
            <p className="text-gray-600 group-hover:text-white mt-4">
              Build a strong brand identity.
            </p>
            <FaLightbulb
              className="text-gray-400 group-hover:text-white mt-4 mx-auto"
              size={48}
            />
          </div>
        </div>
      </div>

      {/* Card 5 */}
      <div className="group relative bg-white border border-gray-200 shadow-md overflow-hidden hover:bg-primary-red transition duration-300 aspect-square">
        <div className="p-8 text-center flex flex-col justify-center h-full">
          <h3 className="text-4xl font-we text-gray-400 group-hover:text-white">
            Search Engine Optimization (SEO)
          </h3>
          <div className="hidden group-hover:block">
            <p className="text-gray-600 group-hover:text-white mt-4">
              Improve your search rankings.
            </p>
            <FaSearch
              className="text-gray-400 group-hover:text-white mt-4 mx-auto"
              size={48}
            />
          </div>
        </div>
      </div>

      {/* Card 6 */}
      <div className="group relative bg-white border border-gray-200 shadow-md overflow-hidden hover:bg-secondary-lime transition duration-300 aspect-square">
        <div className="p-8 text-center flex flex-col justify-center h-full">
          <h3 className="text-4xl font-we text-gray-400 group-hover:text-white">
            Film Production
          </h3>
          <div className="hidden group-hover:block">
            <p className="text-gray-600 group-hover:text-white mt-4">
              Create compelling video content.
            </p>
            <FaVideo
              className="text-gray-400 group-hover:text-white mt-4 mx-auto"
              size={48}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
