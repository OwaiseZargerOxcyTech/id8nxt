export default function Results({ title, text }) {
  return (
    <div className="py-20">
      <div className="xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto px-4 sm:px-6 lg:px-16 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12">
          {/* Heading */}
          <div className="md:col-span-1">
            <h2 className="text-3xl md:text-4xl text-white font-light">
              {title}
            </h2>
          </div>

          {/* Content */}
          <div className="md:col-span-3">
            <p className="text-white text-lg md:text-lg leading-relaxed font-light">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
