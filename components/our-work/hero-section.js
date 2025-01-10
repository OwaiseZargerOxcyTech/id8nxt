import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/home/home-hero-bg-1.png"
          alt="Ancient Greek temple on a mountainous landscape"
          fill
          layout="fill"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Main Heading */}
          <div className="flex items-center">
            <h1 className="text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl lg:text-8xl">
              Your digital
              <br />
              odyssey
              <br />
              starts here
            </h1>
          </div>

          {/* Right Column - Description */}
          <div className="flex items-center">
            <p className="text-lg text-white/90 sm:text-xl md:text-xl md:mt-64 ml-32 max-w-[420px]">
              Here are our standout projects that highlight the impactful
              digital marketing strategies we&apos;ve implemented at ID8NXT.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
