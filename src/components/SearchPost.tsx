import React from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { Post } from "@/types/Post";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";

const SearchPost = () => {
  const router = useRouter();

  const { register, handleSubmit } = useForm<Post>();

  const onSubmit: SubmitHandler<Post> = async (data, event) => {
    event?.preventDefault();
    try {
      const tagsArray = data.tags
        .split(" ")
        .map((tag) => tag.trim().toLowerCase())
        .filter((tag) => tag.toLowerCase())
        .join(" ");

      console.log(tagsArray);
      router.push(`/search?${tagsArray}`);
    } catch (error) {
      console.log("Error to SearchPost", error);
    }
  };

  return (
    <form
      className="flex items-center justify-center gap-1 py-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FaSearch />
      <Input
        className="inputSearch bg-lime-50/60 "
        placeholder="Busque por Tags Aqui"
        {...register("tags")}
      />
      <Button
        name={"Buscar"}
        className="border-[1px] border-emerald-300 rounded-md px-2 sm:w-[100px] sm:h-[50px] text-blue-500 outline-none hover:border-emerald-700  bg-lime-50/60 hover:text-blue-800 hover:font-semibold "
      />
    </form>
  );
};

export default SearchPost;
