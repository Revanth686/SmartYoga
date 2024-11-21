"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductsAdmin from "@/components/admin/products-admin";
import BlogAdmin from "@/components/admin/blog-admin";
import AnalyticsAdmin from "@/components/admin/analytics-admin";

export default function AdminDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <Tabs defaultValue="products">
        <TabsList className="mb-8">
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="blog">Blog</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="products">
          <ProductsAdmin />
        </TabsContent>

        <TabsContent value="blog">
          <BlogAdmin />
        </TabsContent>

        <TabsContent value="analytics">
          <AnalyticsAdmin />
        </TabsContent>
      </Tabs>
    </div>
  );
}