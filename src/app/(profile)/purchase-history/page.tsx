import React from "react";

// components
import SideBar from "@/components/layout/SideBar";
import PurchaseHistoryCard from "@/components/PurchaseHistoryCard";

//images
import nftdemo3 from "@/assets/nft-demo-3.png";

// icons
// import { Icons } from "@/components/ui/Icons";

type Props = {};
const PurchaseHistory = [
  {
    name: "Cosmic Journey",
    url: nftdemo3,
    price: "1000.612 XRP",
    rarity: "--",
    quantity: "1",
    from: "Y1587P",
    to: "3Uhhehicecnien7373372bs9856",
    time: "3 days ago",
  },
  {
    name: "Cosmic Journey",
    url: nftdemo3,
    price: "1000 XRP",
    rarity: "--",
    quantity: "5",
    from: "Cosmic Labs",
    to: "Cosmic Labs",
    time: "Cosmic Labs",
  },
  {
    name: "Cosmic Journey",
    url: nftdemo3,
    price: "1000 XRP",
    rarity: "--",
    items: "10,000",
    quantity: "3",
    from: " Cosmic Labs",
    to: " Cosmic Labs",
    time: " Cosmic Labs",
  },
  {
    name: "Cosmic Journey",
    url: nftdemo3,
    price: "1000 XRP",
    rarity: "--",
    quantity: "7",
    from: "Cosmic Labs",
    to: "Cosmic Labs",
    time: "Cosmic Labs",
  },
];

export default function page({}: Props) {
  return (
    <div>
      {/* Main Content */}

      <div className="relative md:absolute md:top-[8rem] left-4 md:left-[18.25rem] w-[67.5rem] flex flex-col items-start justify-start gap-6">
        <div className="self-stretch flex flex-col md:flex-row md:items-center justify-between text-left text-[2rem] font-inter">
          {/* Heading */}

          <div className="relative text-[2rem] leading-[3rem] font-semibold gardient-color-green ">
            Purchase History{" "}
          </div>

          {/* Filter */}

          <div className="rounded-lg bg-box box-border w-[15.06rem] flex flex-row  text-white items-start justify-between text-[1rem]  border-solid border-line">
            <select
              name=""
              id=""
              className="w-full bg-box text-white border-none rounded-lg px-4 py-[0.63rem] md:py-3 md:px-6  active:outline-none "
            >
              <option value="">Last 7 Days</option>
              <option value="">Last 5 Days</option>
              <option value="">Last 3 Days</option>
            </select>
          </div>
        </div>
        <div className=" w-[30%] md:w-full md:scrollbar-hide overflow-x-scroll scrollbar-thin scrollbar-track-content_Grey  scrollbar-thumb-green ">
          <div>
            {/* Table Headings */}
            <div className="self-stretch flex flex-col items-start justify-start gap-4 text-left text-[1rem] text-white  font-inter ">
              <div className="self-stretch flex flex-row items-start justify-start text-gray-500 gap-4 text-content">
                <div className="relative  leading-[1.5rem] inline-block w-[12.75rem] shrink-0">
                  Item
                </div>
                <div className="relative leading-[1.5rem] inline-block w-[9.75rem] shrink-0">
                  Price
                </div>
                <div className="relative leading-[1.5rem] inline-block w-[9rem] shrink-0">
                  Rarity
                </div>
                <div className="relative  leading-[1.5rem] inline-block w-[5.44rem] shrink-0">
                  Quantity
                </div>
                <div className="relative leading-[1.5rem] inline-block w-[8.06rem] shrink-0">
                  From
                </div>
                <div className="relative  leading-[1.5rem] inline-block w-[8.38rem] shrink-0">
                  To
                </div>
                <div className="flex-1 relative  leading-[1.5rem]">Time</div>
              </div>

              {/* Purchase History Card */}

              <div className="self-stretch flex flex-col items-start justify-start">
                {PurchaseHistory.map((item, i) => {
                  return (
                    <div key={i}>
                      <PurchaseHistoryCard data={item} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
