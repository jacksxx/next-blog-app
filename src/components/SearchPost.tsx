import React from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { Post } from "@/types/Post";

const SearchPost = () => {
  const { register, handleSubmit } = useForm<Post>();
  const onSubmit: SubmitHandler<Post> = (data, event) => {
    event?.preventDefault();
    try {
    } catch {
      console.log("Error to POST");
    }
  };
  return (
    <form
      className="flex items-center justify-center py-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        className="inputSearch"
        placeholder="Busque por Tags Aqui"
        {...register("tags")}
      />
      <Button
        name="Buscar"
        className="border-[1px] border-emerald-300 rounded-md px-2 sm:w-[100px] sm:h-[50px] text-blue-500 outline-none bg-white hover:border-emerald-700  bg-lime-50/60 hover:text-blue-800 hover:font-semibold "
      />
    </form>
  );
};

export default SearchPost;
