import BlogCards from "@/components/blog/blog-cards";
import { blog_data1, blog_data2 } from "@/components/blog/blog-data";
import HeroBlog from "@/components/blog/hero-blog";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <main>
      <HeroBlog />
      <BlogCards data={blog_data1} />
      <BlogCards data={blog_data2} />
      <Footer color={"white"} textColor={"black"} />
    </main>
  );
}
