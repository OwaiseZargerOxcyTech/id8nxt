import { FaBullseye, FaUserFriends, FaShareAlt, FaLightbulb, FaSearch, FaVideo } from 'react-icons/fa';

export default function FeatureCards() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {/* Card 1 */}
        <div className="group relative bg-white border border-gray-200 shadow-md overflow-hidden hover:bg-green-600 transition duration-300 aspect-square">
          <div className="p-8 text-center flex flex-col justify-center h-full">
            <h3 className="text-4xl font-semibold text-gray-800 group-hover:text-white">
              Performance Marketing
            </h3>
            <p className="text-gray-600 group-hover:text-white mt-4">
              Drive results with targeted campaigns.
            </p>
            <FaBullseye className="text-gray-800 group-hover:text-white mt-4 mx-auto" size={48} />
          </div>
        </div>
  
        {/* Card 2 */}
        <div className="group relative bg-white border border-gray-200 shadow-md overflow-hidden hover:bg-blue-400 transition duration-300 aspect-square">
          <div className="p-8 text-center flex flex-col justify-center h-full">
            <h3 className="text-4xl font-semibold text-gray-800 group-hover:text-white">
              Influencer Marketing
            </h3>
            <p className="text-gray-600 group-hover:text-white mt-4">
              Our team collaborates with influencers.
            </p>
            <FaUserFriends className="text-gray-800 group-hover:text-white mt-4 mx-auto" size={48} />
          </div>
        </div>
  
        {/* Card 3 */}
        <div className="group relative bg-white border border-gray-200 shadow-md overflow-hidden hover:bg-red-500 transition duration-300 aspect-square">
          <div className="p-8 text-center flex flex-col justify-center h-full">
            <h3 className="text-4xl font-semibold text-gray-800 group-hover:text-white">
              Social Media Marketing
            </h3>
            <p className="text-gray-600 group-hover:text-white mt-4">
              Engage your audience effectively.
            </p>
            <FaShareAlt className="text-gray-800 group-hover:text-white mt-4 mx-auto" size={48} />
          </div>
        </div>
  
        {/* Card 4 */}
        <div className="group relative bg-white border border-gray-200 shadow-md overflow-hidden hover:bg-red-500 transition duration-300 aspect-square">
          <div className="p-8 text-center flex flex-col justify-center h-full">
            <h3 className="text-4xl font-semibold text-gray-800 group-hover:text-white">
              Branding Strategy
            </h3>
            <p className="text-gray-600 group-hover:text-white mt-4">
              Build a strong brand identity.
            </p>
            <FaLightbulb className="text-gray-800 group-hover:text-white mt-4 mx-auto" size={48} />
          </div>
        </div>
  
        {/* Card 5 */}
        <div className="group relative bg-white border border-gray-200 shadow-md overflow-hidden hover:bg-green-600 transition duration-300 aspect-square">
          <div className="p-8 text-center flex flex-col justify-center h-full">
            <h3 className="text-4xl font-semibold text-gray-800 group-hover:text-white">
              SEO Optimization
            </h3>
            <p className="text-gray-600 group-hover:text-white mt-4">
              Improve your search rankings.
            </p>
            <FaSearch className="text-gray-800 group-hover:text-white mt-4 mx-auto" size={48} />
          </div>
        </div>
  
        {/* Card 6 */}
        <div className="group relative bg-white border border-gray-200 shadow-md overflow-hidden hover:bg-blue-400 transition duration-300 aspect-square">
          <div className="p-8 text-center flex flex-col justify-center h-full">
            <h3 className="text-4xl font-semibold text-gray-800 group-hover:text-white">
              Film Production
            </h3>
            <p className="text-gray-600 group-hover:text-white mt-4">
              Create compelling video content.
            </p>
            <FaVideo className="text-gray-800 group-hover:text-white mt-4 mx-auto" size={48} />
          </div>
        </div>
      </div>
    );
  }
