"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import dynamic from "next/dynamic";

const SmartYogaMat = dynamic(() => import("@/components/3d/model"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
    </div>
  ),
});

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute left-[50rem] -z-10">
        <div className="absolute bg-gradient-to-r from-background/90 to-background/50 pointer-events-none" />
        <div className="h-full w-full">
          <SmartYogaMat />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl font-bold mb-6">
            Transform Your Yoga Practice with Smart Technology
          </h1>
          <p className="text-xl mb-8 text-muted-foreground">
            Discover our revolutionary smart yoga products that combine ancient
            wisdom with modern innovation to enhance your practice.
          </p>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <Link href="/products">Shop Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/blog">Read Our Blog</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
