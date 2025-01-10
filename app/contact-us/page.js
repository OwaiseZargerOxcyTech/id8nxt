import ContactForm from "@/components/contact-us/contact-form";
import ContactSection from "@/components/contact-us/contact-section";
import HeroSection from "@/components/contact-us/hero-section";
import { Footer } from "@/components/footer/footer";

export default function TechSolutions() {
  return (
    <main>
      <HeroSection />
      <ContactSection />
      <ContactForm />
      <Footer color={"black"} textColor={"white"} />
    </main>
  );
}
