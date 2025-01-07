export function FooterMainBanner() {
  return (
    <div className="relative mx-4 mt-24 mb-12 pb-[2vw] group cursor-pointer flex items-center justify-center">
      {/* Sliding background */}
      <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left"></div>

      {/* Text content */}
      <div className="relative z-10 text-[14vw] font-normal text-white group-hover:text-primary-red text-center tracking-widest transition-colors duration-300 ease-in-out leading-none">
        LET'S TALK
      </div>
    </div>
  );
}
