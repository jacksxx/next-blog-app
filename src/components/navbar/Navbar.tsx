"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsChevronCompactUp } from "react-icons/bs";
import React, { useState } from "react";
import Image from "next/image";
import usericon from "@/images/user.jpg";
import NavbarHidden from "./NavbarHidden";
import { signIn, signOut, useSession } from "next-auth/react";
import SignOut from "../SignOut";
import NavbarItens from "./NavbarItens";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);
  const { data: session } = useSession();
  return (
    <div className="px-5 mx-5 border-b-[1px] border-black">
      <div className="flex items-center justify-between py-4 relative">
        <div className="items-center md:space-x-5 lg:space-x-10 flex">
          <div className="textH1">
            <Link href={"/"}>Mini Blog</Link>
          </div>
          <nav className="max-md:hidden">
            <ul className="flex items-center lg:space-x-10 space-x-7 opacity-70 text-[15px]">
              {NavbarItens.map((item, index) => (
                <li key={index} className="navComponents">
                  <Link
                    href={item.href}
                    className={` py-3 inline-block w-full 
                                        ${
                                          pathname === item.href
                                            ? "font-bold"
                                            : ""
                                        }
                                         hover:text-neutral-500 transition-colors duration-100`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {session?.user && (
                <li className="navComponents">
                  <Link
                    href={"/posts"}
                    className={` py-3 inline-block w-full 
                                        ${
                                          pathname === "/posts"
                                            ? "font-bold"
                                            : ""
                                        }
                                         hover:text-neutral-500 transition-colors duration-100`}
                  >
                    My Posts
                  </Link>
                </li>
              )}              
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4 pr-2">
          <div
            onClick={() => setShowProfile(!showProfile)}
            className="relativa cursor-pointer"
          >
            <Image
              src={usericon}
              width={35}
              height={35}
              className="rounded-full object-cover"
              alt=""
            />
            <SignOut showProfile={showProfile} />
          </div>
          <span
            onClick={() => setShowNav(!showNav)}
            className={`p-[9px] bg-gray-200 rounded-full md:hidden transition ease-in duration-150 ${
              showNav ? "rotate-180" : "0"
            }`}
          >
            <BsChevronCompactUp />
          </span>
        </div>
      </div>
      <NavbarHidden showNav={showNav} setShowNav={setShowNav} />
    </div>
  );
};

export default Navbar;
