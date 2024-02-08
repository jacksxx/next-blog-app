"use client";

import { Post } from "@/types/Post";
import React, { useState } from "react";
import Modal from "@/components/Modal";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Input } from "@/components/Input";
import { TextArea } from "@/components/TextArea";
import { Button } from "@/components/Button";
import Card from "@/components/Card";

const Posts = ({ post }: { post: Post }) => {
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Post>({
    defaultValues: {
      title: post.title,
      description: post.description,
      image: post.image,
      tags: post.tags,
    },
  });
  const onSubmit: SubmitHandler<Post> = (data) => {
    axios
      .patch(`/api/posts/${post.id}`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setOpenModalEdit(false);
        router.refresh();
      });
  };
  const handleDelete = (id: String) => {
    axios
      .delete(`/api/posts/${post.id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setOpenModalDelete(false);
        router.refresh();
      });
  };

  return (
    <li
      className="my-5 rounded-md border-[1px] border-black bg-slate-50 p-1"
      key={post.id}
    >
      <Card
        description={post.description}
        image={post.image}
        tags={post.tags}
        title={post.title}
        id={post.id}
        createdAt={post.createdAt}
        updatedAt={post.updatedAt}
        key={post.id}
      />
      <div className="py-2 flex flex-row gap-10 place-content-center">
        {/*EDIT button and Form */}
        <Button
          name="Editar"
          className="bg-blue-700 text-white w-20 h-10 rounded-full"
          onClick={() => setOpenModalEdit(true)}
        />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmit(onSubmit)} className="formComponent">
            <Input
              label="Title"
              id="title"
              className="inputGeral w-[450px]"
              {...register("title")}
            />
            <Input
              //type='file'
              label="Imagem"
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
              placeholder="Insira as Tags"
              className="inputGeral w-[450px]"
              {...register("tags")}
            />
            <Button name="Submit" className="buttonRegister" />
          </form>
        </Modal>
        {/*DELETE button and Form */}
        <Button
          name="Deletar"
          className="bg-red-700 text-white w-20 h-10 rounded-full"
          onClick={() => setOpenModalDelete(true)}
        />
        <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
          <h1 className="textH1">Tem certeza que quer deletar esse post?</h1>
          <div>
            <Button
              name="Yes"
              className="bg-blue-700 text-white 
                            w-20 py-2 mb-1"
              onClick={() => handleDelete(post.id)}
            />
            <Button
              name="No"
              className="bg-red-700 text-white 
                            w-20 py-2"
              onClick={() => setOpenModalDelete(false)}
            />
          </div>
        </Modal>
      </div>
    </li>
  );
};

export default Posts;
