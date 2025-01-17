export function FooterBanner({ color, textColor }) {
<<<<<<< HEAD
  // Determine background color based on hover color
  const bgColor = color?.toLowerCase() === "white" ? "black" : "white";

=======
>>>>>>> 1456e058d5d971c323f79d7d621db77a97301644
  return (
    <div className="relative mx-4 mt-24 mb-12 group cursor-pointer flex items-center justify-center">
      {/* Sliding background */}
      <div
        className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left"
        style={{ backgroundColor: bgColor }}
      ></div>

      {/* Text content */}
      <div
<<<<<<< HEAD
        className="relative z-10 text-[14vw] font-normal text-center tracking-widest transition-colors duration-300 ease-in-out leading-none"
=======
        className="relative z-10 text-[16vw] 4xl:text-[17vw] font-normal text-center tracking-widest transition-colors duration-300 ease-in-out leading-none"
>>>>>>> 1456e058d5d971c323f79d7d621db77a97301644
        style={{
          ["--hover-color"]: color,
          ["--text-color"]: textColor,
        }}
      >
        <style>{`
          .group .text-center {
            color: var(--text-color);
          }
          .group:hover .text-center {
            color: var(--hover-color);
          }
        `}</style>
        LET'S TALK
      </div>
    </div>
  );
}
