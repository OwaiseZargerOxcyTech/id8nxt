"use client";

export default function WhoWeAre() {
  return (
    <main className="w-full relative">
      {/* Background Image with Red Overlay */}
      <div className="absolute inset-0">
        <div
          className="w-full min-h-[100vh] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://www.isixsigma.com/wp-content/uploads/2018/11/shutterstock_1687550977-scaled.jpg')", // Replace with your image URL
          }}
        ></div>
        <div className="absolute inset-0 bg-red-600 opacity-80"></div>
      </div>

      {/* Text Content */}
      <div className="relative xl:max-w-6xl 1xl:max-w-7xl 3xl:max-w-screen-2xl 4xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-0 flex justify-center items-center min-h-[100vh]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto w-full">
          {/* Left Section */}
          <div className="flex justify-start items-start md:h-[50vh]">
            <h1 className="text-3xl md:text-6xl font-normal text-white">
              Who
              <br />
              We are
            </h1>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-start md:justify-end items-start md:h-[50vh] col-span-2">
            <p className="text-base md:text-lg leading-relaxed max-w-3xl text-left text-white">
              We&apos;re not your average digital marketing agency. We&apos;re a
              team of passionate creatives, strategists, and tech wizards who
              are obsessed with helping businesses stand out in the digital
              world. We believe that every brand has a unique story to tell, and
              we&apos;re here to help you tell yours in the most compelling way
              possible.
            </p>
            <p className="text-base md:text-lg leading-relaxed max-w-3xl mt-4 text-left text-white">
              We&apos;re always looking for new and innovative ways to help you
              achieve your goals, and we&apos;re never afraid to push the
              boundaries of what&apos;s possible.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
