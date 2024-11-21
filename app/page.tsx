import Hero from "@/components/hero";
import ProductsShowcase from "@/components/products-showcase";
import BlogPreview from "@/components/blog-preview";
import InstagramFeed from "@/components/instagram-feed";
import Newsletter from "@/components/newsletter";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <ProductsShowcase />
      <BlogPreview />
      <InstagramFeed />
      <Newsletter />
    </div>
  );
}