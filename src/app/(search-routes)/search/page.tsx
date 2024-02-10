"use client";

import PostListHome from "@/components/PostListHome";
import { Post } from "@/types/Post";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";

const getPosts = async () => {
  const res = await axios.get(`/api/posts`);
  //const res = await axios.get(`/api/posts=${tags}`);
  return res.data;
};

const Page = () => {
  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    refetchOnWindowFocus: true,
  });
  return (
    <div>
      <h1 className="textH1 text-center py-2">RESULTADOS DA BUSCA</h1>
      <div className="flex flex-col items-center">
        <ul className="grid grid-cols-1 gap-5 h-full w-full max-w-[600px]">
          {posts.map((post: Post) => (
            <li
              className="rounded-lg border-[1px] border-black shadow-sm shadow-black"
              key={post.tags}
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
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
