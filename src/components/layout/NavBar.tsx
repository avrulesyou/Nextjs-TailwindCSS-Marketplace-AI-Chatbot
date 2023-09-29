"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { usePathname } from "next/navigation";

// images
import logo from "@/assets/xrp-boys.svg";

// icons
import { Icons } from "../ui/Icons";

import heroBg from "@/assets/hero-bg.png";
import { useAppSelector } from "@/lib/redux/store";

type Props = {};

const pageLinks = [
  { name: "Explore", link: "/explore" },
  { name: "Mint", link: "/mint" },
  { name: "Launchpad", link: "/launchpad" },
];

export default function NavBar({}: Props) {
  const asPath = usePathname();
  const userData = useAppSelector((state) => state.userSlice.entities?.data);
  console.log(userData);
  return (
    <div className="relative w-full">
      {asPath === "/home" && (
        <Image src={heroBg} alt="" className=" absolute " />
      )}
      <nav className="flex flex-row items-center relative z-50 justify-between text-left text-xl px-6 md:px-10 py-7 bg-transparent text-white font-inter">
        {/* left side */}
        <Link href="home">
          <Image src={logo} alt="logo" className=" w-32 md:w-auto" />
        </Link>

        {/* pages-links */}
        <div className=" hidden md:flex flex-row items-start justify-start gap-[35px]">
          {pageLinks.map((item, i) => {
            return (
              <Link href={item.link} key={i}>
                <h1 className="hover:text-green-500">{item.name}</h1>
              </Link>
            );
          })}
        </div>

        {/* right side */}
        <div className="flex flex-row items-center justify-start md:gap-6 gap-3 text-base text-placeholder">
          {/* search input */}
          <div className=" relative ">
            <input
              placeholder="Search..."
              className=" hidden md:block rounded-lg bg-box box-border w-[25rem] py-3 pl-6  pr-9 focus:outline-none placeholder:text-gray-400"
            ></input>
            <Icons.search className=" h-6 w-6 shrink-0  md:absolute right-0 top-1/4  z-50  md:mx-2 text-green-500 " />
          </div>

          <div className="">
            {userData ? (
              <div className="hidden md:flex gap-4 items-center">
                <Button variant={"gradiend"}>
                  <Icons.wallet />
                  <h1>{userData.balance}</h1>
                </Button>
                <Link href="/profile">
                  <div className=" rounded-full relative w-10 h-10 ">
                    <Image
                      src={userData?.profilePicture}
                      fill
                      className="rounded-full"
                      alt="profilePicture"
                    />
                  </div>
                </Link>
              </div>
            ) : (
              <div className="hidden md:flex gap-4">
                <Link href="/sign-up">
                  <Button variant={"gradiend"}>Sign Up</Button>
                </Link>
                <Link href="/sign-in">
                  <Button
                    variant={"transparent"}
                    className=" py-3 px-0 text-sm "
                  >
                    Sign In
                  </Button>
                </Link>
              </div>
            )}
          </div>
          {/* cart */}
          <Icons.shoppingCart className=" w-6 h-6 overflow-hidden shrink-0" />
          <Icons.options className=" w-6 h-6 overflow-hidden shrink-0 md:hidden " />
        </div>
      </nav>
    </div>
  );
}
