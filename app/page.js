import FeatureCards from "@/components/home/feature-cards";
import { ContactForm } from "@/components/footer/contact-form";
import { Footer } from "@/components/footer/homeFooter/footer";
import VideoBanner from "@/components/home/video-banner";
import WhoWeAre from "@/components/home/whoweare";
import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <main className="bg-black ">
      <Hero/>
      <VideoBanner />
      <WhoWeAre />
      <FeatureCards />
      <main className=" bg-[#D2042D]">
        <div className="container mx-auto py-16">
          <ContactForm />
        </div>
        <Footer />
      </main>
    </main>
  );
}
