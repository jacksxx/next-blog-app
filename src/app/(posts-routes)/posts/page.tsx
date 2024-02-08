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
      {isLoading ? <p>Loading...</p> : posts && <PostList posts={posts} />}
      {posts && posts.length === 0 && (
        <h1 className="textH1 italic py-10">No posts available.</h1>
      )}
    </>
  );
};

export default Page;
