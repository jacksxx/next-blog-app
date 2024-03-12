"use client";
import { Post } from "@/types/Post";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Image from "next/image";

const getPostById = async (id: string) => {
  console.log("Consulta");
  console.log(id);
  const res = await axios.get(`/api/posts/${id}`);

  return res.data;
};

const DynamicPage = (params: any) => {
  console.log(params);

  const { data: posts, isLoading } = useQuery<Post>({
    queryKey: ["post"],
    queryFn: () => getPostById(params.params.id),
    refetchOnWindowFocus: true,
  });

  if (isLoading) {
    return <p> LOADING!</p>;
  }
  if (!posts) {
    return <p> Post not found!</p>;
  }
  return (
    <div className="flex flex-col place-items-center ">
      <div
        className="rounded-lg border-[1px] border-black shadow-sm shadow-black
        max-w-[600px]"
        key={posts.id}
      >
        <div className="overflow-hidden rounded-t-lg">
          <Image
            alt={posts.title}
            src={posts.image}
            width={500}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="m-2 flex flex-col gap-1">
          <h1 className="textH1">{posts.title}</h1>
          <h2 className="textP italic">{posts.description}</h2>
          <p className="textP text-[10px] text-gray-600">
            #
            {posts.tags
              .split(" ")
              .map((tag) => tag.trim().toLowerCase())
              .join("#")}
          </p>
          <p className="text-[15px] italic text-end">
            {new Date(posts.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DynamicPage;
