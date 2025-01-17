import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";

export function SocialLinks({ textColor }) {
  const socialLinks = [
    { href: "#", icon: FaFacebookF, label: "Facebook" },
    { href: "#", icon: FaTwitter, label: "Twitter" },
    { href: "#", icon: FaInstagram, label: "Instagram" },
    { href: "#", icon: FaLinkedinIn, label: "LinkedIn" },
  ];

  return (
    <main className=" w-full">
      <div className="xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto px-4 sm:px-6 lg:px-0 flex flex-col justify-center items-end ">
        <div className="flex justify-end gap-4">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              className="text-white hover:text-gray-200 transition-colors duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </Link>
          ))}
        </div>
        <div
          className="w-full my-6"
          style={{
            borderTop: `1px solid ${textColor}`,
            opacity: 0.2,
          }}
        />
      </div>
    </main>
  );
}
