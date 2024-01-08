import { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Options } from "../api/auth/[...nextauth]/option";

interface PrivateLProps {
  children: ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLProps) {
  const session = await getServerSession(Options);

  if (!session) {
    redirect("/");
  }

  return <>{children}</>;
}
