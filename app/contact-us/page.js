import ContactForm from "@/components/contact-us/contact-form";
import ContactSection from "@/components/contact-us/contact-section";
import Hero from "@/components/contact-us/hero";
import { Footer } from "@/components/footer/footer";

export default function Contact() {
  return (
    <main>
      <Hero />
      <ContactSection />
      <ContactForm />
      <Footer color={"black"} textColor={"white"} />
    </main>
  );
}
