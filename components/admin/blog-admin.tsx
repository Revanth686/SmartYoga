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

export default function BlogAdmin() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Getting Started with Smart Yoga",
      author: "Sarah Johnson",
      date: "2024-03-01",
    },
    {
      id: 2,
      title: "Benefits of Tech-Enhanced Meditation",
      author: "Michael Chen",
      date: "2024-02-28",
    },
  ]);

  return (
    <div>
      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Create New Post</h2>
        <form className="space-y-4">
          <Input placeholder="Post Title" />
          <Input placeholder="Author" />
          <Input type="file" />
          <Textarea placeholder="Content" className="min-h-[200px]" />
          <Button>Publish Post</Button>
        </form>
      </Card>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.author}</TableCell>
                <TableCell>{post.date}</TableCell>
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