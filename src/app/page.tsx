"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import SearchPost from "@/components/SearchPost";
import PostListHome from "@/components/PostListHome";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";


const getPosts = async () => {
  const res = await axios.get("/api/posts");
  return res.data;
};

export default function Home() {
  const { data: session } = useSession();
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    refetchOnWindowFocus: false,
  });
  const [postsFilters, setPostsFilters] = useState<any[]>([]);

  useEffect(() => {
    setPostsFilters((_) => posts);
  }, [isLoading, posts]);

  function filterPosts(tag: string) {
    setPostsFilters((_) => {
      return posts.filter((e: any) =>
        e.tags.includes(tag.trim().toLowerCase())
      );      
    });
  }

  console.log(posts);

  return (
    <>
      {session && (
        <div>
          <div className="border-b-[1px] border-black pb-2 border-dashed">
            <h1 className="textH1 text-center pb-3">
              VEJA NOSSOS POSTS MAIS RECENTES
            </h1>
            <SearchPost filterPosts={filterPosts} />
          </div>
          <h1 className="textH1 text-center py-2">P O S T S </h1>

          <div className="flex flex-col items-center">
            {isLoading ? (
              <p className="text-center">Loading...</p>
            ) : (
              postsFilters !== undefined && (
                <PostListHome posts={postsFilters} />
              )
            )}

            {postsFilters && postsFilters.length === 0 && (
              <div className="text-center">
                <h1 className="textH1 italic py-10">No posts available.</h1>
                <Link
                  href="/posts"
                  className="py-5 border-2 border-emerald-300 rounded-lg px-2 sm:w-[100px] sm:h-[50px] text-blue-500 outline-none bg-lime-50/60 hover:border-emerald-700 hover:text-blue-800 hover:font-semibold"
                >
                  Crie um novo Post
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
      {!session && (
        <div>
          <p className="flex flex-col items-center">
            Logue-se para poder ver seus Posts do seu Blog
          </p>
        </div>
      )}
    </>
  );
}
