import React from "react";
import Image from "next/image";
import Link from "next/link";

// images
import logo from "@/assets/xrp-boys.svg";

// icons
import { FiTwitter, FiYoutube } from "react-icons/fi";
import { FaDiscord, FaTiktok } from "react-icons/fa";
import { SlSocialReddit } from "react-icons/sl";

type Props = {};

const socialLinks = [
  {
    icons: <FaDiscord className=" h-4 w-4 md:w-5 md:h-5 text-dark_Green" />,
    link: "/",
  },
  {
    icons: <FiTwitter className="h-4 w-4 md:w-5 md:h-5 text-dark_Green" />,
    link: "/",
  },
  {
    icons: <FiYoutube className="h-4 w-4 md:w-5 md:h-5 text-dark_Green" />,
    link: "/",
  },
  {
    icons: <SlSocialReddit className="h-4 w-4 md:w-5 md:h-5 text-dark_Green" />,
    link: "/",
  },
  {
    icons: <FaTiktok className="h-4 w-4 md:w-5 md:h-5 text-dark_Green" />,
    link: "/",
  },
];

const marketPlaceLinks = [
  { name: "All NFTs", link: "/" },
  { name: "Art", link: "/" },
  { name: "Virtual Reality", link: "/" },
  { name: "Rare Virtual Items", link: "/" },
  { name: "Gaming", link: "/" },
  { name: "Sport Collection", link: "/" },
];

const accountLinks = [
  { name: "My Profile", link: "/" },
  { name: "Collection", link: "/" },
  { name: "Favorites", link: "/favorites" },
  { name: "Watchlist", link: "/" },
  { name: "Create", link: "/" },
  { name: "Settings", link: "/" },
];

const pagesLinks = [
  { name: "About", link: "/" },
  { name: "Blog", link: "/" },
  { name: "Docs", link: "/" },
  { name: "Newsletter", link: "/" },
  { name: "FAQs", link: "/faq" },
  { name: "Support", link: "/" },
];
export default function Footer({}: Props) {
  return (
    <footer className="bg-footer overflow-hidden w-full flex flex-col pt-8 px-8 md:px-[4.29rem] pb-10 text-left  text-white font-inter border-t-[1px] border-solid border-box">
      <div className="flex flex-col w-full items-start justify-start gap-12">
        {/* top section */}
        <div className="flex gap-6 md:gap-0 flex-col md:flex-row items-start justify-between w-full">
          {""}
          {/* left container */}
          <div className="flex flex-col items-center justify-center md:items-start md:justify-start gap-4">
            <Image src={logo} alt="logo" />
            <p className=" text-sm tracking-[-0.02em] leaading-5 text-content_Grey text-center inline-block md:max-w-[18.5rem]">
              {`NFT XRP's innovative platform for exploring, buying, and selling
              unique and valuable digital artwork.`}
            </p>

            <ul className="flex flex-row items-start justify-start gap-3">
              {socialLinks.map((item, i) => {
                return (
                  <Link href={item.link} key={i}>
                    <li className=" rounded-full bg-primary_Colour transition-all ease-in-out p-2 md:p-3 outline-2 outline hover:outline-offset-2 outline-primary_Colour ">
                      {item.icons}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>

          {/* right container */}
          <div className="flex flex-wrap  flex-row items-start justify-start gap-10 text-base ">
            {/* market secction */}
            <div className="flex flex-col items-start justify-start gap-3">
              <h1 className=" tracking-[-0.02em] text-content_Grey font-medium inline-block w-36 md:w-[11.5rem]">
                Marketplace
              </h1>
              <div className="flex flex-col items-start justify-start gap-[0.9rem] ">
                {marketPlaceLinks.map((item, i) => {
                  return (
                    <Link href={item.link} key={i}>
                      <h2 className="">{item.name}</h2>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Account Section */}
            <div className="flex flex-col items-start justify-start gap-3">
              <h1 className=" tracking-[-0.02em] text-content_Grey  font-medium inline-block md:w-[11.5rem]">
                Account
              </h1>
              <div className="flex flex-col items-start justify-start gap-[0.9rem] ">
                {accountLinks.map((item, i) => {
                  return (
                    <Link href={item.link} key={i}>
                      <h2>{item.name}</h2>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Pages Section  */}
            <div className="flex flex-col items-start justify-start gap-3">
              <h1 className=" tracking-[-0.02em] text-content_Grey  font-medium inline-block w-[11.5rem]">
                Pages
              </h1>
              <div className="flex flex-col items-start justify-start gap-[14px] ">
                {pagesLinks.map((item, i) => {
                  return (
                    <Link href={item.link} key={i}>
                      <h2>{item.name}</h2>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom  Section */}
        <div className="box-border w-full flex flex-row pt-8 px-0 pb-0 items-center justify-center text-center text-base border-t-[1px] border-solid border-line">
          <h1 className="">© 2023 . XRP Boys | Alright Reserved</h1>
        </div>
      </div>
    </footer>
  );
}
