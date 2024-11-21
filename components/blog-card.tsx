"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { formatDistance } from "date-fns";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: string;
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-64 md:h-full">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
            <p className="text-muted-foreground mb-6">{post.excerpt}</p>
            <div className="flex justify-between items-center text-sm text-muted-foreground mb-6">
              <span>{post.author}</span>
              <span>{formatDistance(new Date(post.date), new Date(), { addSuffix: true })}</span>
            </div>
            <Button variant="outline" asChild>
              <Link href={`/blog/${post.id}`}>Read More</Link>
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}