// src/page/Blog.jsx
import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";

const dummyBlogs = [
  {
    id: 1,
    title: "10 Easy Indian Dishes You Can Cook Tonight",
    image: "https://source.unsplash.com/600x400/?indian,food",
    snippet: "Explore the rich flavors of Indian cuisine with these simple recipes.",
    author: "Chef Ananya",
    date: "2024-05-22",
  },
  {
    id: 2,
    title: "Why Mediterranean Diet is the Healthiest",
    image: "https://source.unsplash.com/600x400/?mediterranean,food",
    snippet: "Learn about the benefits and sample meals of the Mediterranean diet.",
    author: "Dr. Kavya Singh",
    date: "2024-06-01",
  },
  {
    id: 3,
    title: "5 Italian Pastas You Must Try Once in Life",
    image: "https://source.unsplash.com/600x400/?italian,pasta",
    snippet: "Italy is famous for pasta — here are our top 5 must-try picks.",
    author: "Luca Romano",
    date: "2024-04-18",
  },
];

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Later: fetch from API
    setBlogs(dummyBlogs);
  }, []);

  return (
    <div className="min-h-screen bg-yellow-50 px-6 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-lime-800">
        Food Blogs & Stories 🍽️
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
