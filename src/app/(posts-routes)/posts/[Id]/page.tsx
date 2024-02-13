"use client";
import { Post } from "@/types/Post";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Image from "next/image";
import Card from "@/components/Card";

const getPostById = async (id: string) => {
  const res = await axios.get(`/api/posts/${id}`);
  return res.data;
};

const DynamicPage = ({ id }: { id: string }) => {
  const { data: posts, isLoading } = useQuery<Post>({
    queryKey: ["posts"],
    queryFn: () => getPostById(id),
    refetchOnWindowFocus: true,
  });

  if (!posts) {
    return <p> Post not found!</p>;
  }
  if (isLoading) {
    return <p> LOADING!</p>;
  }
  return (
    <Card
      description={posts.description}
      image={posts.image}
      tags={posts.tags}
      title={posts.title}
      id={posts.id}
      createdAt={posts.createdAt}
      updatedAt={posts.updatedAt}
      key={posts.id}
    />
  );
};

export default DynamicPage;
