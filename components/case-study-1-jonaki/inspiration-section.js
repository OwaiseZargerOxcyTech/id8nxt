import Image from 'next/image'

export default function InspirationSection() {
  return (
    <div className="bg-[#33371a] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {/* Quote Section */}
          <div className="bg-[#0a3d3d] md:col-span-2 rounded-lg shadow-lg flex flex-col justify-center items-center h-[300px] p-8 order-1 md:order-none">
            <blockquote className="text-[#f0e68c] text-lg sm:text-xl font-light text-center leading-relaxed">
              &ldquo;MY FANCIES ARE FIREFLIES,<br />
              SPECKS OF LIVING LIGHT<br />
              TWINKLING IN THE DARK&rdquo;
            </blockquote>
            <p className="text-[#f0e68c] mt-6 italic text-center">- Tagore</p>
          </div>

          {/* Images Section */}
          <div
            className="bg-transparent md:bg-white p-0 md:p-6 md:shadow-lg md:col-span-3 relative overflow-hidden order-2 md:order-none"
            style={{ paddingTop: 0, paddingBottom: '1rem' }}
          >
            {/* First Image Container */}
            <div className="relative md:ml-[5%] md:mr-[30%]">
              <div className="relative w-full h-[300px]">
                <Image
                  src="/images/case-study-1-jonaki/paris-image.jpg"
                  alt="Firefly on a blade of grass"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Inspiration Text */}
              <p className="text-white md:text-black text-lg mt-4 mb-8 text-center md:text-left md:ml-56">Inspiration</p>
            </div>

            {/* Second Image */}
            <div
              className="relative md:absolute w-full md:w-[40%] h-[200px] md:h-[53%] mt-8 md:mt-0 md:top-[40%] md:right-[3.5%] md:z-10"
              style={{
                transform: 'translateY(0) md:translateY(-20%)',
              }}
            >
              <Image
                src="/images/case-study-1-jonaki/usa-image.jpg"
                alt="Glass jars with fireflies"
                fill
                className="shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

