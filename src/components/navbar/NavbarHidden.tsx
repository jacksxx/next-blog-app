import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import NavbarItens from "./NavbarItens";
import { useSession } from "next-auth/react";

interface INav {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarHidden = (nav: INav) => {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <>
      {nav.showNav && (
        <div
          className={`md:hidden ${
            nav.showNav ? "pb-4 px-5" : "h-0 invisible opacity-0"
          }`}
        >
          <ul className="flex flex-col px-2 opacity-75 text-[15px]">
            {NavbarItens.map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <Link
                  href={item.href}
                  className={` py-3 inline-block w-full ${
                    pathname === item.href
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {session?.user && (
              <li className="flex items-center space-x-2">
                <Link href={"/posts"} className=" py-3 inline-block w-full">
                  My Posts
                </Link>
              </li>
            )}
            {session?.user && (
              <li className="navComponents">
                <Link href={"/dashboard"} className=" py-3 inline-block w-full">
                  My Dashboard
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default NavbarHidden;
