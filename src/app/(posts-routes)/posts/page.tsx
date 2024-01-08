"use client";
import React from "react";
import AddPost from "./AddPost";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PostList from "./PostLists";

const getPosts = async () => {
  const res = await axios.get("/api/posts");
  return res.data;
};

const Page = () => {
  const {
    data: posts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    refetchOnWindowFocus: true,
  });
  refetch();
  return (
    <>
      <h1 className="textH1">POSTS PAGE</h1>
      <AddPost />
      <ul>
        {isLoading ? (
          <p>Loading...</p>
        ) : posts ? (
          <PostList posts={posts} />
        ) : (
          <p className="textP">No posts available.</p>
        )}
      </ul>
    </>
  );
};

export default Page;
