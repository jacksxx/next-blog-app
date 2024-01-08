import { getServerSession } from "next-auth";
import { Options } from "../api/auth/[...nextauth]/option";

export function getSession() {
  return getServerSession(Options);
}

export async function getCurrentUser() {
  const session = await getSession();
  return session?.user;
}
