import FeatureCards from "@/components/home/feature-cards";
import { ContactForm } from "@/components/footer/contact-form";
import { Footer } from "@/components/footer/homeFooter/footer";
import VideoBanner from "@/components/home/video-banner";
import WhoWeAre from "@/components/home/whoweare";
import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <main className="bg-black ">
      <Hero />
      <VideoBanner />
      <WhoWeAre />
      <FeatureCards />
      <ContactForm backColor={"#D2042D"}/>
      <Footer backColor={"#D2042D"} isAbout={false}/>
    </main>
  );
}