import React from "react";

const Solutions = () => {
  const menuItems = [
    { text: "Brand Solutions", href: "#brand" },
    { text: "Tech Solutions", href: "#tech" },
    { text: "Media Solutions", href: "#media" },
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
    <div className="relative min-h-screen bg-black text-white overflow-hidden py-20">
      {/* Background container */}
      <div className="absolute inset-0">
        {/* First background layer */}
        <div className="absolute inset-10" style={{ zIndex: 0 }}>
          <img
            src="/images/solutions/bg-1.png"
            alt="Background 1"
            className="absolute right-0 top-0 h-full w-auto object-contain"
          />
          <div className="absolute inset-0 bg-black/10" /> {/* Dark overlay */}
        </div>

        {/* Second background layer - statue with headphones */}
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          <img
            src="/images/solutions/bg-2.png"
            alt="Background 2"
            className="absolute right-20 xl:top-10 4xl:top-20 h-full w-auto object-contain"
          />
          <div className="absolute inset-0 bg-black/70" /> {/* Dark overlay */}
        </div>
      </div>

      {/* Content container */}
      <div className="relative z-10 xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto px-4 py-12">
        {/* Menu Items */}
        <nav className="mb-16">
          <ul className="space-y-4">
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
          <hr className="mt-16" />
        </nav>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 xl:max-w-screen-lg 2xl:max-w-screen-lg 4xl:max-w-screen-xl gap-8 mt-8">
          {projectCards.map((card) => (
            <a key={card.id} href={card.href} className="group block">
              <div className="relative overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 border border-white"
                />
                <div className="">
                  <p className="text-sm md:text-base">{card.title}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
