"use client";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { User } from "@/types/User";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const RegisterForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = (data, event) => {
    event?.preventDefault();
    if (data.name == "") {
      setError("name", {
        message: "Nome Requerido",
      });
      return;
    }
    if (data.email == "") {
      setError("email", {
        message: "Email Requerido",
      });
      return;
    }
    if (data.password == "" || data.password.length < 8) {
      setError("password", {
        message: "Senha minima de 8 digitos",
      });
      return;
    }
    axios
      .post("/api/register", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        router.push("/");
      });
  };

  return (
    <>
      <div className="flex flex-col items-center py-3">
        <h1 className="textH1">Cadastre-se</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="formComponent">
          <Input
            label="Name"
            id="Name"
            placeholder="UserName"
            className="inputGeral"
            {...register("name")}
          />{" "}
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
          <Input
            type="email"
            label="Email"
            id="Email"
            placeholder="Email"
            className="inputGeral"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
          <Input
            type="password"
            label="Password"
            id="Password"
            placeholder="Password"
            className="inputGeral"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-600">{errors.password.message}</p>
          )}
          <Button name="Submit" className="buttonRegister" />
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
