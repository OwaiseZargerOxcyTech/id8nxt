"use client";

import { useState } from "react";

const services = [
  "Branding",
  "Social Media Management",
  "Content Creation & Marketing",
  "Ad Film/Video Production",
  "SEO",
  "Website Transformation",
  "Mobile App Development & UI/UX",
  "CRM/Sales Pipeline Development",
  "Influencer Marketing",
  "IP Creation",
  "Email & SMS Marketing",
  "Automation",
  "Performance Media",
  "Growth via Media Buying",
  "Social Listening & ORM",
  "Consumer & Market Research",
  "Integrated Campaigns",
  "Others",
];

export default function ContactForm() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleServiceToggle = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData, selectedServices);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
    setSelectedServices([]);
  };

  return (
    <section className="w-full bg-white mb-10">
      <form
        onSubmit={handleSubmit}
        className="xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto px-4 sm:px-6 lg:px-16 space-y-12 bg-white"
      >
        {/* Name and Email */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <label
              htmlFor="name"
              className="block text-lg font-medium text-black"
            >
              1/ Name & Surname*
            </label>
            <input
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full px-4 py-3 border border-black bg-white text-lg text-black focus:outline-none focus:border-black focus:ring-0"
            />
          </div>
          <div className="space-y-4">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-black"
            >
              2/ Email*
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
              className="w-full px-4 py-3 border border-black bg-white text-lg text-black focus:outline-none focus:border-black focus:ring-0"
            />
          </div>
        </div>

        {/* Phone and Company */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <label
              htmlFor="phone"
              className="block text-lg font-medium text-black"
            >
              3/ Phone number*
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              className="w-full px-4 py-3 border border-black bg-white text-lg text-black focus:outline-none focus:border-black focus:ring-0"
            />
          </div>
          <div className="space-y-4">
            <label
              htmlFor="company"
              className="block text-lg font-medium text-black"
            >
              4/ Company
            </label>
            <input
              id="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Enter the name of the company you work for"
              className="w-full px-4 py-3 border border-black bg-white text-lg text-black focus:outline-none focus:border-black focus:ring-0"
            />
          </div>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <label className="block text-lg font-medium text-black">
            5/ Which services are you interested in?
          </label>
          <div className="flex flex-wrap gap-4">
            {services.map((service) => (
              <button
                key={service}
                type="button"
                onClick={() => handleServiceToggle(service)}
                className={`px-4 py-2 text-lg border border-black transition-colors ${
                  selectedServices.includes(service)
                    ? "bg-black text-white"
                    : "bg-white text-gray-500 hover:bg-black hover:text-white"
                }`}
              >
                {service}
              </button>
            ))}
          </div>
        </div>

        {/* Leave a Message */}
        <div className="space-y-4">
          <label
            htmlFor="message"
            className="block text-lg font-medium text-black"
          >
            6/ Leave a message*
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            required
            className="w-full px-4 py-3 border border-black bg-white text-lg text-black min-h-[150px] focus:outline-none focus:border-black focus:ring-0"
          />
        </div>

        {/* Consent Checkboxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center space-x-2">
            <input
              id="consent"
              type="checkbox"
              required
              className="h-4 w-4 border focus:outline-none"
            />
            <label htmlFor="consent" className="text-lg text-black">
              I give my consent, in accordance with the Privacy Policy*
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              id="updates"
              type="checkbox"
              className="h-4 w-4 border focus:outline-none"
            />
            <label htmlFor="updates" className="text-lg text-black">
              I want to receive regular updates on Playground activities
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-black text-white hover:bg-black/90 px-6 py-2 text-lg border border-black"
          >
            Get Started
          </button>
        </div>
      </form>
    </section>
  );
}
