"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
  description: string;
  benefits: string[];
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative h-64">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <Badge variant="secondary" className="mt-2">
                {product.category}
              </Badge>
            </div>
            <span className="font-bold text-lg">${product.price}</span>
          </div>
          <p className="text-muted-foreground mb-4 flex-1">{product.description}</p>
          <div className="space-y-2 mb-4">
            <h4 className="font-medium">Benefits:</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              {product.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
          <Button asChild className="w-full mt-auto">
            <Link href={`/products/${product.id}`}>View Details</Link>
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}