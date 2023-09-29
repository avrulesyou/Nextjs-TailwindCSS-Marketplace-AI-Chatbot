"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// icons
import { MdSpeed } from "react-icons/md";
import { LuImage } from "react-icons/lu";
import { CgHeart, CgBell } from "react-icons/cg";
import { FaMoneyBill } from "react-icons/fa";
import { TbUser } from "react-icons/tb";
import { RiLogoutCircleLine } from "react-icons/ri";

type Props = {};

const sideBarIcons = [
  {
    name: "Dashboard",
    icons: <MdSpeed className="text-white h-7 w-7" />,
    link: "/",
  },
  {
    name: "My collections",
    icons: <MdSpeed className="text-white h-7 w-7" />,
    link: "/",
  },
  {
    name: "MyNFTs",
    icons: <LuImage className="text-white h-7 w-7 " />,
    link: "/",
  },
  {
    name: "Favorites",
    icons: <CgHeart className="text-white h-7 w-7" />,
    link: "/favorites",
  },
  {
    name: "Purchase history",
    icons: <FaMoneyBill className="text-white h-7 w-7" />,
    link: "/purchase-history",
  },
  {
    name: "Notification",
    icons: <CgBell className="text-white h-7 w-7" />,
    link: "/notification",
  },
  {
    name: "Profile",
    icons: <TbUser className="text-white h-7 w-7" />,
    link: "/",
  },
  {
    name: "Logout",
    icons: <RiLogoutCircleLine className="text-[#FF4B61] h-7 w-7" />,
    link: "/",
    space: true,
  },
];

export default function SideBar({}: Props) {
  const router = useRouter();
  return (
    <main className=" hidden w-full min-h-screen md:flex flex-col grow max-w-[17rem] text-white bg-background gap-8">
      <ul className=" mt-8 flex flex-col items-center justify-center gap-2">
        {sideBarIcons.map((item, index) => {
          const arrLen = sideBarIcons.length;
          return (
            // items
            <div className="w-full" key={index}>
              {/* seperation bar */}
              {item.space && (
                <div className="h-[2px] bg-[#272B34] w-[11.5rem] my-10 mx-auto " />
              )}

              <Link href={item.link} className="w-full ">
                <li
                  className={`flex items-center justify-center h-12 w-full  hover:scale-105 `}
                >
                  <div className="flex gap-[0.63rem] justify-start w-[12rem] items-center">
                    <div className="hover:text-green-400">{item.icons}</div>
                    <div
                      className={`text-lg hover:text-green-400 ${
                        index + 1 == arrLen ? "text-[#FF4B61]" : "text-white"
                      }`}
                    >
                      {item.name}
                    </div>
                  </div>
                </li>
              </Link>
            </div>
          );
        })}
      </ul>
    </main>
  );
}
