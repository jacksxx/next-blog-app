"use client";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { User } from "@/types/User";
import { signIn } from "next-auth/react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = (data, event) => {
    event?.preventDefault();
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
    try {
      signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: true,
        callbackUrl: "/",
      });
    } catch {
      console.log("Error while Logging in");
    }
  };

  return (
    <div className="flex flex-col items-center py-3">
      <h1 className="textH1">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="formComponent">
        <Input
          type="email"
          label="Email"
          placeholder="Email"
          className="inputGeral"
          {...register("email")}
        />
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
        <Input
          type="password"
          label="Password"
          placeholder="Password"
          className="inputGeral"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-600">{errors.password.message}</p>
        )}
        <Button name="Login" className="buttonRegister" />
      </form>
    </div>
  );
};

export default LoginForm;
