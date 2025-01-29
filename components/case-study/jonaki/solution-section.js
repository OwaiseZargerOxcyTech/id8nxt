export default function SolutionSection() {
  return (
    <div className="bg-[#33371a] py-20">
      <div className="xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto px-4 sm:px-6 lg:px-16 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12">
          {/* Heading */}
          <div className="md:col-span-1">
            <h2 className="text-3xl md:text-4xl text-white font-light">
              Results
            </h2>
          </div>

          {/* Content */}
          <div className="md:col-span-3">
            <p className="text-white text-lg md:text-xl leading-relaxed font-light">
              The new branding successfully brought Jonaki’s story to
              life,enhancing its market appeal and customer engagement.The
              minimalistic design and captivating narrative around fireflies
              boosted organic visibility and created a unique,sensory-driven
              experience for the brand's audience.The revitalised packaging and
              communication generated a strong emotional connection,leading to
              increased customer interest and brand loyalty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
