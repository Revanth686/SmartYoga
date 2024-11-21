"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, Trash } from "lucide-react";

export default function ProductsAdmin() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Smart Yoga Mat",
      price: 199.99,
      category: "Mats",
    },
    {
      id: 2,
      name: "Yoga Tracker Watch",
      price: 149.99,
      category: "Wearables",
    },
  ]);

  return (
    <div>
      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input placeholder="Product Name" />
            <Input type="number" placeholder="Price" />
          </div>
          <Input placeholder="Category" />
          <Input type="file" />
          <Textarea placeholder="Description" />
          <Button>Add Product</Button>
        </form>
      </Card>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>${product.price}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button size="icon" variant="ghost">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}