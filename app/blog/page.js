import HeroBlog from "@/components/blog/hero-blog";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <main>
      <HeroBlog />
      <Footer color={"white"} textColor={"black"} />
    </main>
  );
}
