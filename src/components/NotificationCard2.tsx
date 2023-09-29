//Notification settings component

import { FC, useState } from "react";

//icons

import { Icons } from "./ui/Icons";
import Input from "./ui/Input";

// data props

type dataProps = {
  heading: string;
  time: string;
  content: string;
};

interface FAQCardProps {
  data: dataProps;
}

const NotificationCard2: FC<FAQCardProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-start justify-start gap-[2rem] text-left text-[1.5rem] text-white font-public-sans">
      <div className="w-[20rem] md:w-[28rem] flex flex-col items-start justify-start gap-[0.5rem]">
        {/* Heading */}
        <div className="relative tracking-[-0.02em] leading-[2.25rem] font-semibold">
          Notification setting
        </div>
        <div className="self-stretch relative text-[1rem] text-gray-500 leading-[1.5rem] font-inter text-content">
          Select which notification you would like to receive in email
        </div>
      </div>
      <div className=" w-[20rem] md:w-[28rem] flex flex-col items-start justify-start gap-[1.25rem] text-[1rem] font-inter">
        {/* Item sold section */}
        <div className="self-stretch flex flex-row pt-0 px-0 pb-4 items-center justify-start gap-3 border-stone-700 border-b-[1px] border-solid border-line">
          <div className="rounded-lg bg-green flex flex-row items-center justify-start">
            <input
              type="checkbox"
              className="bg-box h-8 w-8 md:h-9 md:w-9  rounded-lg outline-none"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-1">
            <div className="self-stretch relative tracking-[-0.02em] leading-[1.5rem] font-medium">
              Item sold
            </div>
            <div className="self-stretch relative text-gray-500 leading-[1.5rem] text-content">
              When someone purchased one of your items
            </div>
          </div>
        </div>
        {/* Bid activity section */}
        <div className="self-stretch flex flex-row pt-0 px-0 pb-4 items-center justify-start gap-3 border-stone-700 border-b-[1px] border-solid border-line">
          <div className="rounded-lg bg-green flex flex-row items-center justify-start">
            <input
              type="checkbox"
              className="bg-box h-8 w-8 md:h-9 md:w-9  rounded-lg outline-none"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-1">
            <div className="self-stretch relative tracking-[-0.02em] leading-[1.5rem] font-medium">
              Bid activity
            </div>
            <div className="self-stretch relative text-gray-500 leading-[1.5rem] text-content">
              When someone bids on one of your items
            </div>
          </div>
        </div>
        {/* Price change section */}
        <div className="self-stretch flex flex-row pt-0 px-0 pb-4 items-center justify-start gap-3 border-stone-700 border-b-[1px] border-solid border-line">
          <div className="rounded-lg bg-green flex flex-row items-center justify-start">
            <input
              type="checkbox"
              className="bg-box h-8 w-8 md:h-9 md:w-9  rounded-lg outline-none"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-1">
            <div className="self-stretch relative tracking-[-0.02em] leading-[1.5rem] font-medium">
              Price change
            </div>
            <div className="self-stretch relative text-gray-500 leading-[1.5rem] text-content">
              When an item you made an offer on changes in price
            </div>
          </div>
        </div>
        {/* Auction expiration section */}
        <div className="self-stretch flex flex-row pt-0 px-0 pb-4 items-center justify-start gap-3 border-stone-700 border-b-[1px] border-solid border-line">
          <div className="rounded-lg bg-green flex flex-row  items-center justify-start">
            <input
              type="checkbox"
              className="bg-box h-8 w-8 md:h-9 md:w-9  rounded-lg outline-none"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-1">
            <div className="self-stretch relative tracking-[-0.02em] leading-[1.5rem] font-medium">
              Auction expiration
            </div>
            <div className="self-stretch relative text-gray-500 leading-[1.5rem] text-content">
              When a timed auction you created ends
            </div>
          </div>
        </div>
        {/* Outbid sextion */}
        <div className="self-stretch flex flex-row pt-0 px-0 pb-4 items-center justify-start gap-3 border-stone-700 border-b-[1px] border-solid border-line">
          <div className="rounded-lg bg-green flex flex-row  items-center justify-start">
            <input
              type="checkbox"
              className="bg-box h-8 w-8 md:h-9 md:w-9  rounded-lg outline-none"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-1">
            <div className="self-stretch relative leading-[1.5rem] font-medium">
              Outbid
            </div>
            <div className="self-stretch relative tracking-[-0.02em] text-gray-500 leading-[1.5rem] text-content">
              When an offer you placed is exceeded by another user
            </div>
          </div>
        </div>
        {/* Owned item updates section */}
        <div className="self-stretch flex flex-row pt-0 px-0 pb-4 items-center justify-start gap-3 border-stone-700 border-b-[1px] border-solid border-line">
          <div className="rounded-lg bg-green flex flex-row  items-center justify-start">
            <input
              type="checkbox"
              className="bg-box h-8 w-8 md:h-9 md:w-9  rounded-lg outline-none"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-1">
            <div className="self-stretch relative  leading-[1.5rem] font-medium">
              Owned item updates
            </div>
            <div className="self-stretch relative text-gray-500  leading-[1.5rem] text-content">
              When a significant update occurs for one of the items you have
              purchased on this platform
            </div>
          </div>
        </div>
        {/* Successful purchase section */}
        <div className="self-stretch flex flex-row pt-0 px-0 pb-4 items-center justify-start gap-3 border-stone-700  border-b-[1px] border-solid border-line">
          <div className="rounded-lg bg-green flex flex-row  items-center justify-start">
            <input
              type="checkbox"
              className="bg-box h-8 w-8 md:h-9 md:w-9  rounded-lg outline-none"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-1">
            <div className="self-stretch relative  leading-[1.5rem] font-medium">
              Successful purchase
            </div>
            <div className="self-stretch text-gray-500 relative leading-[1.5rem] text-content">
              When you successfully buy an item
            </div>
          </div>
        </div>
        {/* Minimum Bid threshold section */}
        <div className="self-stretch flex flex-row pt-0 px-0 pb-4 items-center justify-start border-stone-700 border-b-[1px] border-solid border-line">
          <div className="flex-1 flex flex-col items-start justify-start gap-4">
            <div className="flex  flex-col items-start justify-start gap-1">
              <div className="relative  leading-[1.5rem] font-medium inline-block ">
                Minimum Bid Threshold
              </div>
              <div className="relative text-gray-500  leading-[1.5rem] text-content inline-block ">
                Receive notifications only when you receive offers with a value
                greater than or equal to this amount of ETH.
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-box flex flex-row items-center justify-start gap-4 ">
              <div className="rounded-lg bg-gray-800 flex flex-row py-3 px-4 items-center justify-start gap-2">
                {/* XRP Icon alternative */}
                <Icons.X className="text-white h-4 w-6" />
                <div className="relative leading-[1.5rem]">
                  XRP
                </div>
              </div>
              {/* Input for minimum threshold */}
              <Input placeholder="25" />
              {/* Update button */}
              <button className="rounded-lg [background:linear-gradient(90deg,_#78ffdf,_#1ebe5e)] flex flex-row py-3 px-4 items-center justify-start text-black">
                <div className="relative  leading-[1.5rem] font-semibold">
                  Update
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard2;
