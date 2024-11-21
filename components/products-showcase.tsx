"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Smart Yoga Mat",
    price: 199.99,
    category: "Mats",
    imageUrl: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&auto=format&fit=crop&q=60",
    description: "Advanced sensors for posture correction and real-time feedback.",
  },
  {
    id: 2,
    name: "Yoga Tracker Watch",
    price: 149.99,
    category: "Wearables",
    imageUrl: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&auto=format&fit=crop&q=60",
    description: "Track your practice with precision and get personalized insights.",
  },
  {
    id: 3,
    name: "Smart Meditation Headband",
    price: 129.99,
    category: "Meditation",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=60",
    description: "Enhance your meditation with real-time brain activity tracking.",
  },
];

export default function ProductsShowcase() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover our innovative smart yoga products designed to enhance your practice
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <Badge variant="secondary" className="mt-2">
                      {product.category}
                    </Badge>
                  </div>
                  <span className="font-bold text-lg">${product.price}</span>
                </div>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <Button asChild className="w-full">
                  <Link href={`/products/${product.id}`}>Learn More</Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button size="lg" asChild>
          <Link href="/products">View All Products</Link>
        </Button>
      </div>
    </section>
  );
}