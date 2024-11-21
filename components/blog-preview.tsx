"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { formatDistance } from "date-fns";

const posts = [
  {
    id: 1,
    title: "Getting Started with Smart Yoga Practice",
    excerpt: "Learn how to integrate smart technology into your yoga routine for better results.",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=60",
    author: "Sarah Johnson",
    date: new Date("2024-03-01"),
  },
  {
    id: 2,
    title: "The Benefits of Tech-Enhanced Meditation",
    excerpt: "Discover how modern technology can deepen your meditation practice.",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",
    author: "Michael Chen",
    date: new Date("2024-02-28"),
  },
];

export default function BlogPreview() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Latest from Our Blog</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Insights, tips, and news from the world of smart yoga
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="overflow-hidden h-full">
              <div className="relative h-48">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>{post.author}</span>
                  <span>{formatDistance(post.date, new Date(), { addSuffix: true })}</span>
                </div>
                <Button variant="ghost" asChild className="mt-4">
                  <Link href={`/blog/${post.id}`}>Read More</Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button size="lg" variant="outline" asChild>
          <Link href="/blog">View All Posts</Link>
        </Button>
      </div>
    </section>
  );
}