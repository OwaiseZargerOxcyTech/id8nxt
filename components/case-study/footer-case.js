import Link from "next/link";

export function FooterCase({ textColor }) {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/our-work", label: "Our Work" },
    { href: "/services", label: "Services" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <main className="w-full py-6 bg-[#da1f3d]">
      <div className="xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto px-4 sm:px-6 lg:px-16 flex justify-between items-center ">
        <nav className=" w-full ">
          <div className="flex flex-wrap md:flex-nowrap justify-start items-center gap-32">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:underline text-sm md:text-base whitespace-nowrap"
                style={{ color: textColor }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </main>
  );
}
