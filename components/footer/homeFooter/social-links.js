import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import Link from "next/link"

export function SocialLinks() {
  const socialLinks = [
    { href: "#", icon: FaFacebookF, label: "Facebook" },
    { href: "#", icon: FaTwitter, label: "Twitter" },
    { href: "#", icon: FaInstagram, label: "Instagram" },
    { href: "#", icon: FaLinkedinIn, label: "LinkedIn" },
  ]

  return (
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
  )
}

