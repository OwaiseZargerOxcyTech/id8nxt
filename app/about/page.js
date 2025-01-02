import { ContactForm } from "@/components/footer/contact-form";
import { Footer } from "@/components/footer/homeFooter/footer";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <main className=" bg-black">
        <div className="container mx-auto py-16">
          <ContactForm />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default AboutPage;
