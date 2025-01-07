import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Full-screen Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/tech-solutions/istockphoto-1300760288-612x612.jpg"
          alt="Statue with telescope representing vision and innovation"
          layout="fill"
          priority
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex items-center justify-start ml-4 md:ml-16 min-h-screen text-center">
        <div className="text-white space-y-6 px-4 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight">
            Tech
            <br />
            Solutions
          </h1>
        </div>
      </div>

      {/* Decorative Overlays */}
      <div className="absolute right-0 top-1/4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#9fff00] blur-3xl opacity-20 z-5" />
      <div className="absolute right-10 bottom-1/4 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-[#9fff00] blur-2xl opacity-15 z-5" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent z-5" />
    </div>
  );
}