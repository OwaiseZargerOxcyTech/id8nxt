import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="w-full bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 pb-8 md:pb-12 pt-12 md:pt-28 space-y-12">
        {" "}
        {/* Reduced space-y */}
        {/* Heading */}
        <div className="space-y-2">
          <h2 className="text-4xl md:text-6xl font-semibold leading-[0.9]">
            Our doors (and DMs)
            <br />
            are always open.
            <br />
            Come on in!
          </h2>
        </div>
        {/* Contact Details */}
        <div className="space-y-6">
          {" "}
          {/* Reduced space-y */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="text-gray-800 text-xl md:text-2xl">Phone</div>
            <Link
              href="tel:+917715025820"
              className="text-black hover:text-gray-600 text-xl md:text-2xl"
            >
              +91 7715 025 820
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="text-gray-800 text-xl md:text-2xl">Email</div>
            <Link
              href="mailto:brewing@id8nxt.com"
              className="text-black hover:text-gray-600 text-xl md:text-2xl"
            >
              brewing@id8nxt.com
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="text-gray-800 text-xl md:text-2xl">Let's Meet</div>
            <address className="not-italic text-black text-xl md:text-2xl">
              ID8NXT I LP, 1016, 1st floor,
              <br />
              DTC Building Sitaram Mills Compound,
              <br />
              NM Joshi Marg, Lower Parel East, Mumbai,
              <br />
              Maharashtra 400 011
            </address>
          </div>
        </div>
        {/* CTA Section */}
        <div className="space-y-6">
          {" "}
          {/* Reduced space-y */}
          <button className="bg-black text-white hover:bg-black/90 rounded-none px-6 py-2 border border-black text-xl md:text-lg">
            Drop us an email
          </button>
          <p className="text-sm text-black">
            <span className="block md:w-1/2 text-xl">
              We're excited to work with you soon! Please drop an email with
            </span>
            <span className="block text-xl">
              your details & requirements to brewing@id8nxt.com
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}