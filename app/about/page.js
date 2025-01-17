import HeroAbout from "@/components/about/hero";
import HeroSection from "@/components/about/new";
import OurTeam from "@/components/about/our-team";
import WhoWeAre from "@/components/about/whoweare";
import { ContactForm } from "@/components/footer/contact-form";
import { Footer } from "@/components/footer/footer";

export default function AboutPage() {
  return (
    <main>
      {/* <HeroSection /> */}
      <HeroAbout />
      <WhoWeAre />
      <OurTeam />
      <ContactForm backColor={"black"} />
      <Footer color={"black"} textColor={"white"} />
    </main>
  );
}
