// Solutions.jsx
"use client";

const Solutions = ({ isOpen }) => {
  const menuItems = [
    { text: "Brand Solutions", href: "brand-solutions" },
    { text: "Tech Solutions", href: "tech-solutions" },
    { text: "Media Solutions", href: "media-solutions" },
    { text: "Community build", href: "#community" },
  ];

  const projectCards = [
    {
      id: 1,
      image: "/images/solutions/metva.png",
      title: `"Me & Tva" is a children's brand dedicated to preserving the magic of childhood`,
      href: "#me-and-tva",
    },
    {
      id: 2,
      image: "/images/solutions/jonaki.png",
      title:
        "The fragrance brand Jonaki makes magnificent stories with smell and aroma, drawing motivation from the interest of fireflies.",
      href: "#jonaki",
    },
  ];

  return (
    <div
      className={`fixed inset-0 bg-black transform transition-all duration-500 ease-in-out z-40 ${
        isOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <div className="relative min-h-screen text-white overflow-hidden">
        {/* Background container */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ zIndex: 0 }}>
            <img
              src="/images/media-solutions/media-hero.png"
              alt="Background 1"
              className="absolute right-0 top-0 h-full w-auto object-contain"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>

        {/* Content container */}
        <div className="relative z-10 xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto px-4 lg:px-16 xl:pt-10 2xl:pt-20">
          {/* Menu Items */}
          <nav className=" pt-8">
            {/* Added pt-16 to account for navbar height */}
            <ul className="xl:space-y-4 4xl:space-y-8">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-3xl 3xl:text-4xl 4xl:text-6xl font-light hover:text-gray-300 transition-colors duration-300"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
            <hr className="mt-8 4xl:mt-16" />
          </nav>

          {/* Project Cards Grid */}
          <div className="grid md:grid-cols-2 xl:max-w-3xl 2xl:max-w-screen-lg 4xl:max-w-screen-xl gap-8 mt-8 4xl:mt-16">
            {projectCards.map((card) => (
              <a key={card.id} href={card.href} className="group block">
                <div className="relative overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 border border-white"
                  />
                  <div className="mt-2">
                    <p className="text-sm 2xl:text-base">{card.title}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
