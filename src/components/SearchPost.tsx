import React from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { Post } from "@/types/Post";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";

interface SearchPostProps{
  filterPosts: (tag: string)=>void;
}
const SearchPost = ({filterPosts}:SearchPostProps) => {
  const router = useRouter();

  const { register, handleSubmit,watch } = useForm<Post>();
  const tagsValue = watch("tags");

  const onSubmit: SubmitHandler<Post> = async (data, event) => {
    event?.preventDefault();
    console.log(data.tags);
    filterPosts(data.tags);

  };
  // const handleTagsChange = (event:any) => {
  //   filterPosts(event.target.value);
  // }


  return (
    <form
      className="flex items-center justify-center gap-1 py-5"
      onSubmit={handleSubmit(onSubmit)}
    >      
      <Input
        className="inputSearch bg-lime-50/60 "
        placeholder="Busque por Tags Aqui"
        {...register("tags")}
        // onChange={handleTagsChange}
      />
      <Button
        name={"Buscar"}
        className="border-[1px] border-emerald-300 rounded-md px-2 sm:w-[100px] sm:h-[50px] text-blue-500 outline-none hover:border-emerald-700  bg-lime-50/60 hover:text-blue-800 hover:font-semibold "
      />
    </form>
  );
};

export default SearchPost;
