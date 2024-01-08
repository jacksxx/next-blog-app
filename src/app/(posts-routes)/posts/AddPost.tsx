"use client";
import { Button } from "@/components/Button";
import Modal from "@/components/Modal";
import React, { useState } from "react";
import PostForm from "./PostForm";

const AddPost = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <Button
        name="Add Post"
        onClick={() => setModalOpen(true)}
        className="buttonRegister"
      />
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <PostForm setModalOpen={setModalOpen} />
      </Modal>
    </div>
  );
};

export default AddPost;
