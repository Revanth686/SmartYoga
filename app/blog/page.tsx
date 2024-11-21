import { Metadata } from "next";
import BlogCard from "@/components/blog-card";

export const metadata: Metadata = {
  title: "Blog | SmartYoga",
  description: "Latest insights and tips from the world of smart yoga",
};

const posts = [
  {
    id: 1,
    title: "The Future of Yoga: How Technology is Transforming Practice",
    excerpt:
      "Explore how smart technology is revolutionizing traditional yoga practice and making it more accessible and effective for practitioners of all levels.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=60",
    author: "Sarah Johnson",
    date: "2024-03-01",
  },
  {
    id: 2,
    title: "Maximizing Your Practice with Smart Yoga Equipment",
    excerpt:
      "Learn how to integrate smart yoga equipment into your routine for better form, deeper awareness, and improved results.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl:
      "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=800&auto=format&fit=crop&q=60",
    author: "Michael Chen",
    date: "2024-02-28",
  },
  {
    id: 3,
    title: "The Science Behind Smart Yoga: Research and Benefits",
    excerpt:
      "Dive into the scientific research supporting the benefits of technology-enhanced yoga practice and its impact on physical and mental well-being.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: "science.webp",
    author: "Dr. Emily Parker",
    date: "2024-02-25",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

