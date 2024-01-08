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
import { queryClient } from "@/app/lib/queryClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Posts = ({ post }: { post: Post }) => {
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const router = useRouter();
  const client = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Post>();

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
    <li className="p-3 my-5 bg-slate-200" key={post.id}>
      <h1 className="textH1">{post.title}</h1>
      <p className="textP">{post.description}</p>
      <div className="pt-3 ">
        <Button
          name="Editar"
          className="bg-blue-700 text-white w-20 mb-1"
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
              {...register("Tags")}
            />
            <Button name="Submit" className="buttonRegister" />
          </form>
        </Modal>

        <Button
          name="Deletar"
          className="bg-red-700 text-white w-20"
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
