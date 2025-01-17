"use client";

import { useState, useEffect, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { contactFormSchema } from "@/lib/contact-form-schema";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ContactForm({ backColor }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Handle form submission here
    console.log(data);
    setIsSubmitting(false);
  };

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <main className="w-full" style={{ backgroundColor: backColor }}>
      <div className="xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto px-4 sm:px-6 pt-16 lg:px-0 flex justify-between items-center min-h-screen">
        <div ref={formRef} className="w-full mx-auto ">
          <div className="space-y-4 mt-8 sm:mt-0 mb-8">
            <h1 className="text-3xl font-bold text-white">How can we help?</h1>
            <p className="text-gray-200">
              Request a no-obligation appointment. Our team will contact you as
              soon as possible to discuss your needs.
              <br />
              Or just drop us an email at{" "}
              <Link href="mailto:brewing@id8nxt.com" className="underline">
                brewing@id8nxt.com
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-gray-200">
                  Name & Surname*
                </label>
                <input
                  id="name"
                  placeholder="Enter your full name"
                  {...register("name")}
                  className="w-full px-3 py-2 bg-transparent border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                {errors.name && (
                  <p className="text-sm text-red-300">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-gray-200">
                  Work email*
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  {...register("email")}
                  className="w-full px-3 py-2 bg-transparent border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                {errors.email && (
                  <p className="text-sm text-red-300">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm text-gray-200">
                  Phone number*
                </label>
                <input
                  id="phone"
                  placeholder="Enter your phone number"
                  {...register("phone")}
                  className="w-full px-3 py-2 bg-transparent border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                {errors.phone && (
                  <p className="text-sm text-red-300">{errors.phone.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm text-gray-200">
                  Company*
                </label>
                <input
                  id="company"
                  placeholder="Enter the name of the company you work for"
                  {...register("company")}
                  className="w-full px-3 py-2 bg-transparent border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                {errors.company && (
                  <p className="text-sm text-red-300">
                    {errors.company.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-gray-200">
                Write your business request
              </label>
              <textarea
                id="message"
                placeholder="your message"
                {...register("message")}
                className="w-full px-3 py-2 bg-transparent border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent min-h-[150px]"
              />
              {errors.message && (
                <p className="text-sm text-red-300">{errors.message.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-2">
                <label htmlFor="privacy" className="text-sm text-gray-200">
                  I give my consent, in accordance with the{" "}
                  <Link href="/privacy-policy" className="underline">
                    Privacy Policy
                  </Link>
                  *
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  {...register("newsletter")}
                  className="w-4 h-4 text-red-600 bg-transparent border-white/20 rounded focus:ring-red-500"
                />
                <label htmlFor="newsletter" className="text-sm text-gray-200">
                  I want to receive regular updates on Playground activities
                </label>
              </div>
            </div>

            {errors.privacy && (
              <p className="text-sm text-red-300">{errors.privacy.message}</p>
            )}

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-white text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Get Started"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
