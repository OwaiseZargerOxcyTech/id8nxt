import HeroSection from "@/components/about/about-hero";
import OurTeam from "@/components/about/our-team";
import WhoWeAre from "@/components/about/whoweare";
import { ContactForm } from "@/components/footer/contact-form";
import { Footer } from "@/components/footer/homeFooter/footer";

export default function AboutPage() {
  return (
    <main className="bg-black pt-16">
      <HeroSection />
      <WhoWeAre />
      <OurTeam />
      <ContactForm backColor={"black"} />
      <Footer backColor={"black"} isAbout={true} />
    </main>
  );
}
