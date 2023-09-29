import React from "react";

// components
import SideBar from "@/components/layout/SideBar";
import PurchaseHistoryCard from "@/components/PurchaseHistoryCard";
import FavoritesCard from "@/components/FavoritesCard";

//images
import nftdemo3 from "@/assets/nft-demo-3.png";
import nftdemo6 from "@/assets/nft-demo-6.png";
import nftdemo5 from "@/assets/nft-demo-5.png";
import nftdemo4 from "@/assets/nft-demo-4.png";

// icons
import { Icons } from "@/components/ui/Icons";

type Props = {};
const Favorites = [
  {
    name: "Cosmic Journey",
    url: nftdemo6,
    volume: "6,128,000 XRP",
    change: "+2.33%",
    floorprice: "123 XRP",
    sales: "15",
    uniqueowner: "24%",
    itemlisted: "9%",
  },
  {
    name: "Cosmic Journey",
    url: nftdemo3,
    volume: "144,000 XRP",
    change: "+1.21%",
    floorprice: "547 XRP",
    sales: "9",
    uniqueowner: "12%",
    itemlisted: "31%",
  },
  {
    name: "Cosmic Journey",
    url: nftdemo5,
    volume: "32,199,000 XRP",
    change: "-9.21%",
    floorprice: "321 XRP",
    sales: " 21",
    uniqueowner: " 31%",
    itemlisted: " 2%",
  },
  {
    name: "Cosmic Journey",
    url: nftdemo4,
    volume: "633,000 XRP",
    change: "-1.78%",
    floorprice: "755 XRP",
    sales: "22",
    uniqueowner: "16%",
    itemlisted: "12%",
  },
];

export default function page({}: Props) {
  return (
    <div>
      <div className="relative md:absolute md:top-[8rem] left-4 md:left-[18.25rem] w-[67.5rem] flex flex-col items-start justify-start gap-6">
        <div className="self-stretch flex flex-col md:flex-row md:items-center justify-between text-left text-[2rem] font-inter">
          {/* Heading */}

          <div className="relative text-[2rem] leading-[3rem] font-semibold gardient-color-green ">
            Favorites{" "}
          </div>
        </div>
        <div className="w-[30%] md:w-full md:scrollbar-hide overflow-x-scroll scrollbar-thin scrollbar-track-content_Grey  scrollbar-thumb-green ">
          {/* Table Headings */}
          <div className="self-stretch flex flex-col items-start justify-start gap-4 text-left text-[1rem] text-white  font-inter">
            <div className="self-stretch flex flex-row items-start justify-start text-gray-500 gap-4 text-content">
              <div className="relative  leading-[1.5rem] inline-block w-[12.75rem] shrink-0">
                Item
              </div>
              <div className="relative leading-[1.5rem] inline-block w-[8.75rem] shrink-0">
                Volume
              </div>
              <div className="relative leading-[1.5rem] inline-block w-[9rem] shrink-0">
                % Change
              </div>
              <div className="relative  leading-[1.5rem] inline-block w-[7.14rem] shrink-0">
                Floor price
              </div>
              <div className="relative leading-[1.5rem] inline-block w-[6.06rem] shrink-0">
                Sales
              </div>
              <div className="relative  leading-[1.5rem] inline-block w-[8.98rem] shrink-0">
                % Unique Owner
              </div>
              <div className="flex-1 relative  leading-[1.5rem]">
                % Item listed
              </div>
            </div>

            {/* Purchase History Card */}

            <div className="self-stretch flex flex-col items-start justify-start">
              {Favorites.map((item, i) => {
                return (
                  <div key={i}>
                    <FavoritesCard data={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
