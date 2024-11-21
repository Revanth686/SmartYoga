"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Instagram } from "lucide-react";
import Image from "next/image";

const instagramPosts = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&auto=format&fit=crop&q=60",
    likes: 234,
    comments: 12,
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=800&auto=format&fit=crop&q=60",
    likes: 187,
    comments: 8,
  },
  {
    id: 3,
    imageUrl: "https://imgs.search.brave.com/A6VjtCb9YxvId2NAbLxMgP5TNLTp-hwBkdcoHAw7iE0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE4/NDg1MzE0Ni9waG90/by95b3VuZy1zcG9y/dHktd29tYW4tcHJh/Y3RpY2luZy15b2dh/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1JaUtNMGtONGdG/cXBUcnRERExDUFNR/LUUxazNiakxhTTls/Y21FclN5X2ZFPQ",
    likes: 342,
    comments: 15,
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=800&auto=format&fit=crop&q=60",
    likes: 156,
    comments: 6,
  },
];

export default function InstagramFeed() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Instagram className="h-6 w-6" />
          <h2 className="text-3xl font-bold">@smartyoga</h2>
        </div>
        <p className="text-muted-foreground">Follow us on Instagram for daily inspiration</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {instagramPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="overflow-hidden group relative">
              <div className="relative aspect-square">
                <Image
                  src={post.imageUrl}
                  alt="Instagram post"
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <div className="text-center">
                    <p>{post.likes} likes</p>
                    <p>{post.comments} comments</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
