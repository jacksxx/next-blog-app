import React from "react";
import { Post } from "@/types/Post";
import Posts from "./Posts";

const PostList = ({ posts }: { posts: Post[] }) => {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {posts.map((post) => (
        <Posts key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostList;
