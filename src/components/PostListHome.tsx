"use client";
import React from "react";
import { Post } from "@/types/Post";
import Image from "next/image";

const PostListHome = ({ posts }: { posts: Post[] }) => {
  return (
    <ul className="grid grid-cols-1 gap-5 h-full w-full max-w-[600px]">
      {posts.map((post) => (
        <li
          className="rounded-lg border-[1px] border-black shadow-sm shadow-black"
          key={post.id}
        >
          <div className="overflow-hidden rounded-t-lg">
            <Image
              alt={post.title}
              src={post.image}
              width={500}
              height={600}
              className="h-full w-full"
            />
          </div>
          <div className="m-2 flex flex-col gap-1">
            <h1 className="textH1">{post.title}</h1>
            <h2 className="textP italic">{post.description}</h2>
            <p className="textP text-[10px] text-gray-600">
              #
              {post.tags
                .split(" ")
                .map((tag) => tag.trim().toLowerCase())
                .join("#")}
            </p>
            <p className="text-[15px] italic text-end">
              {new Date(post.createdAt).toDateString()}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PostListHome;
