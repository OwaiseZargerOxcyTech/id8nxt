import HeroAbout from "@/components/about/hero";
import OurTeam from "@/components/about/our-team";
import WhoWeAre from "@/components/about/whoweare";
import { ContactForm } from "@/components/footer/contact-form";
import { Footer } from "@/components/footer/footer";

export default function AboutPage() {
  return (
    <main>
      <HeroAbout />
      <WhoWeAre />
      <OurTeam />
      <ContactForm backColor={"black"} />
      <Footer color={"black"} textColor={"white"} />
    </main>
  );
}
