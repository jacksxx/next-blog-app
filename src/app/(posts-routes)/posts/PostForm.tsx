"use client";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { TextArea } from "@/components/TextArea";
import { Post } from "@/types/Post";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Imodals {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostForm = (modal: Imodals) => {
  const router = useRouter();
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Post>();

  const onSubmit: SubmitHandler<Post> = (data, event) => {
    event?.preventDefault();

    //URL check
    try {
      new URL(data.image);
    } catch {
      setError("image", { message: "A imagem precisa ser uma URL" });
      return;
    }
    //Check values on fields is no empty
    if (!data.title || !data.image || !data.tags || !data.description) {
      setError("root", { message: "Preencha todos os campos" });
      return;
    }
    data.tags = data.tags
      .split(" ")
      .map((tag) => tag.trim().toLowerCase())
      .join(" ");    
    try {
      axios
        .post("/api/posts", data)
        .then((res) => {
          console.log(res);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          modal.setModalOpen(false);
          router.refresh();
        });
    } catch {
      console.log("Error to POST");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center py-3">
        <h1 className="textH1">Faça seu Post aqui mesmo.</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="formComponent">
          <Input
            label="Title"
            id="title"
            className="inputGeral w-[450px]"
            {...register("title")}
          />
          <Input
            //type='file'
            label="URL da Imagem"
            id="image"
            className="inputGeral w-[450px]"
            {...register("image")}
          />
          <TextArea
            label="Description"
            id="description"
            placeholder="Insira o conteúdo do seu post."
            className="inputGeral w-[450px]"
            {...register("description")}
          />
          <TextArea
            label="Tags"
            id="Tags"
            placeholder="Insira as Tags separadas por virgula"
            className="inputGeral w-[450px]"
            {...register("tags")}
          />
          {/*Adicionar Input que cadastra Nome do User que criou o post */}
          <Button name="Submit" className="buttonRegister" />
          {errors.image && (
            <p className="text-black font-semibold px-2 border-2 border-black bg-red-400">
              {errors.image.message}
            </p>
          )}
          {errors.root && (
            <p className="text-black font-semibold px-2 border-2 border-black bg-red-400">
              {errors.root.message}
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default PostForm;
