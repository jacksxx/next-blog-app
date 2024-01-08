import React from "react";
import { Post } from "@/types/Post";
import Posts from "./Posts";

const PostList = ({ posts }: { posts: Post[] }) => {
  return (
    <ul>
      {posts.map((post) => (
        <Posts key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostList;
