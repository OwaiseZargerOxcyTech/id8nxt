export default function ProjectDetails() {
    return (
      <div className="bg-[#33371a] text-white py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Metadata Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            {/* Metadata Labels and Values */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <h2 className="text-lg font-medium w-1/3">Year</h2>
                <p className="text-sm text-gray-300 w-2/3">2022</p>
              </div>
              <div className="flex items-center space-x-4">
                <h2 className="text-lg font-medium w-1/3">Filter by solution</h2>
                <p className="text-sm text-gray-300 w-2/3">Brand launch. Relaunch. Repeat.</p>
              </div>
              <div className="flex items-center space-x-4">
                <h2 className="text-lg font-medium w-1/3">Areas</h2>
                <p className="text-sm text-gray-300 w-2/3">Branding | Packaging | Communication</p>
              </div>
            </div>
  
            {/* The Request */}
            <div>
              <h2 className="text-xl font-semibold mb-6">The request</h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                sem. Nulla consequat massa quis enim.
              </p>
            </div>
          </div>
  
          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            {/* The Challenge */}
            <div>
              <h2 className="text-xl font-semibold mb-6">The challenge</h2>
              <p className="text-sm text-gray-300 leading-relaxed space-y-4">
                The fragrance brand Jonaki makes magnificent stories with smell
                and aroma, drawing motivation from the interest of fireflies.
                Jonaki's branding creates a vibe of style and charm while
                capturing the stunning beauty of flies through a moderate plan
                approach. We use this dynamic approach to boost organic
                visualisation.
              </p>
            </div>
  
            {/* The Insight */}
            <div>
              <h2 className="text-xl font-semibold mb-6">The insight</h2>
              <p className="text-sm text-gray-300 leading-relaxed space-y-4">
                The fragrance brand Jonaki makes magnificent stories with smell
                and aroma, drawing motivation from the interest of fireflies.
                Jonaki's branding creates a vibe of style and charm while
                capturing the stunning beauty of flies through a moderate plan
                approach. We use this dynamic approach to boost organic
                visualisation.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  