import React from "react";

// components
import FilterSideBar from "@/components/layout/FilterSideBar";
import NftExploreCard from "@/components/NftExploreModal";

// icons
import { Icons } from "@/components/ui/Icons";
import nftdemo1 from "@/assets/nft-demo-2.png";

type Props = {};

const LayoutChangeConfig = [
  {
    type: <Icons.grid className="h-7 w-7" />,
  },
  {
    type: <Icons.layoutGrid className="h-7 w-7" />,
  },
  {
    type: <Icons.layoutList className="h-7 w-7" />,
  },
  {
    type: <Icons.layoutPanelLeft className="h-7 w-7" />,
  },
];

const testCollectionData = [
  {
    url: nftdemo1,
    title: "Digital Dreams",
    price: "17 XRP",
  },
  {
    url: nftdemo1,
    title: "Digital Dreams",
    price: "17 XRP",
  },
  {
    url: nftdemo1,
    title: "Digital Dreams",
    price: "17 XRP",
  },
  {
    url: nftdemo1,
    title: "Digital Dreams",
    price: "17 XRP",
  },
  {
    url: nftdemo1,
    title: "Digital Dreams",
    price: "17 XRP",
  },

  {
    url: nftdemo1,
    title: "Digital Dreams",
    price: "17 XRP",
  },
  {
    url: nftdemo1,
    title: "Digital Dreams",
    price: "17 XRP",
  },
  {
    url: nftdemo1,
    title: "Digital Dreams",
    price: "17 XRP",
  },
];
export default function page({}: Props) {
  return (
    <main className=" px-6 py-8 md:px-[4.25rem] md:py-12 flex gap-10 ">
      <div className=" w-full  flex items-start justify-start gap-[2.5rem]">
        <FilterSideBar />

        <aside className="flex w-full  flex-col items-start justify-start gap-[2rem]">
          {/* explore title + sort */}
          <div className=" flex self-stretch  flex-row items-start justify-between text-left text-[2rem] text-white font-inter">
            <div className="flex flex-col items-start justify-start">
              <h1 className="tracking-[-0.02em] leading-[3rem] text-xl md:leading-9 md:text-4xl z-10  font-semibold gardient-color-green">
                Explore{" "}
              </h1>
            </div>
            <div className="flex flex-row justify-start items-center gap-[1rem] text-[1rem]">
              <div className="rounded-lg bg-box box-border w-[15.06rem] flex flex-row py-3 px-6 items-start justify-between border-[1px] border-solid border-line">
                <span className="relative -tracking-wide leading-[1.5rem]">
                  Sort By
                </span>
                <Icons.chevronDown className="h-7 w-7" />
              </div>
              <div className="rounded-lg bg-box overflow-hidden flex  items-center justify-start gap-4">
                {LayoutChangeConfig.map((item, i) => {
                  return (
                    <span className="p-2" key={i}>
                      {item.type}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="grid grid-flow-row gap-5 md:gap-10 grid-cols-2 md:grid-cols-5">
            {testCollectionData.map((item, i) => {
              return (
                <div key={i}>
                  <NftExploreCard data={item} />
                </div>
              );
            })}
          </div>
        </aside>
      </div>
    </main>
  );
}
