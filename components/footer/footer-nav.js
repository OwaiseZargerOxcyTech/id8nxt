import Link from "next/link";

export function FooterNav() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/our-work", label: "Our Work" },
    { href: "/services", label: "Services" },
    { href: "/contact-us", label: "Contact Us" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & conditions" },
  ];

  return (
    <main className="w-full">
      <div className="max-w-7xl 3xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center ">
        <nav className=" w-full ">
          <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:underline text-sm md:text-base whitespace-nowrap">
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </main>
  );
}