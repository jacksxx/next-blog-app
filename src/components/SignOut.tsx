import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const SignOut = ({ showProfile }: { showProfile: boolean }) => {
  const { data: session } = useSession();
  if (session && session?.user) {
    return (
      <ul
        className={`py-2 px-1 text-neutral-600 absolute bg-white z-[2] rounded-lg shadow-lg ${
          showProfile ? "" : "hidden"
        }`}
      >
        <li className="hover:bg-gray-100 hover:text-black py-1 cursor-pointer">
          {session.user.name}
        </li>
        <li
          onClick={() => signOut()}
          className="whitespace-nowrap hover:text-red-600 py-1 cursor-pointer"
        >
          Sign Out
        </li>
      </ul>
    );
  }
  return (
    <ul
      className={`py-2 px-2 text-neutral-600 absolute border-[1px] border-black bg-white z-[2] rounded-lg shadow-lg ${
        showProfile ? "" : "hidden"
      }`}
    >
      <li className="hover:bg-gray-100 hover:text-black py-1 cursor-pointer">
        <Link href={"/register"}>Register</Link>
      </li>
      <li className="hover:bg-gray-100 hover:text-black py-1 cursor-pointer">
        <Link onClick={() => signIn()} href={"/login"}>
          Login
        </Link>
      </li>
    </ul>
  );
};

export default SignOut;
