"use client";
import React, { useEffect, useRef } from "react";

// components
import HomeHeroBanner from "@/components/HomeHeroBanner";
import NftRanksNobelModal from "@/components/NftRanksNobelModal";
import NftNewsModal from "@/components/NftNewsModal";
import Slider from "@/components/Slider";

// icons
import { FiChevronRight } from "react-icons/fi";
import NftCollectionModal from "@/components/NftCollectionModal";
import { makeApiCall } from "@/helpers/apiCall";

type Props = {};
const collectionNft = [
  {
    name: "Immersive Visions",
    src: "/assets/nft-demo-1.png",
  },
];

const trendingTime = ["1h", "6h", "12h", "1d"];

const ranking = ["1", "2", "3", "4", "5"];

export default function Page({}: Props) {
  const [allNfts, setAllNfts] = React.useState<any[]>([]);

  useEffect(() => {
    const fetcPosts = async () => {
      makeApiCall("/v1/nfts")
        .then((data) => setAllNfts(data))
        .catch((err) => console.log(err));
    };
    fetcPosts();
  }, []);

  return (
    <main className=" pt-12 pb-24 pl-6 md:pl-[4.3rem] bg-background border-none flex flex-col gap-10 md:gap-14 text-white overflow-hidden ">
      {/*  Carousel / Slider */}
      <div className="pr-6 md:pr-[4.3rem] z-10">
        <Slider data="" />
      </div>

      {/* collection */}
      <section className="flex flex-col items-start justify-start gap-4">
        <h1 className="tracking-[-0.02em] leading-7 text-xl md:leading-9 md:text-2xl z-10  font-semibold gardient-color-green">
          Collections{" "}
        </h1>
        <div className="w-full overflow-x-scroll scrollbar-hide h-full flex gap-4">
          {allNfts.map((items, i) => {
            return (
              <div key={i}>
                <NftCollectionModal data={items} />
              </div>
            );
          })}
        </div>
      </section>

      {/* trending */}
      <section className=" flex flex-col gap-6 pr-6 md:pr-[4.3rem]">
        <div className="flex w-full flex-wrap  justify-between">
          <div className="flex text-xl md:text-2xl font-semibold gap-5 md:gap-6 ">
            <h1 className="gardient-color-green">Trending</h1>
            <h1 className="text-content_Grey">Top</h1>
          </div>

          <div className="flex order-1 md:order-2  items-center gap-5">
            <div className="flex group text-base  text-green gap-2 items-center">
              <h2> See All</h2>
              <FiChevronRight className="h-5 w-5  group-hover:translate-x-1" />
            </div>
          </div>
          {/* <div className="rounded-lg order-2 md:order-1 flex bg-box ">
            {trendingTime.map((_, i) => {
              return (
                <span className="py-3 px-[10px] active:bg-green">
                {trendingTime[i]}
                </span>
                );
              })}
            </div> */}
        </div>

        {/* rankings */}
        <div className="grid gap-y-8 gap-x-10 grid-col-1 md:grid-rows-4 md:grid-flow-col ">
          {ranking.map((item, i) => {
            return (
              <div
                className="flex items-center text-base md:text-xl gap-8"
                key={i}
              >
                <h1>#{ranking[i]}</h1>
                <NftRanksNobelModal data="" />
              </div>
            );
          })}
        </div>
      </section>

      {/* Notable Collections  */}
      <section className="text-xl md:text-2xl font-semibold gap-4 flex flex-col">
        <div>
          <h1 className=" gardient-color-green ">Notable Collections</h1>
        </div>
        <div className="flex gap-4 md:gap-10 overflow-x-scroll scrollbar-hide h-full">
          {/* <NftCollectionModal data="" />
          <NftCollectionModal data="" />
          <NftCollectionModal data="" />
          <NftCollectionModal data="" />
          <NftCollectionModal data="" /> */}
        </div>
      </section>

      {/* Notable & banner section */}
      <section className=" pr-6  md:pr-[4.3rem] w-full  flex gap-10 flex-col md:flex-row">
        <div className=" grid gap-4 md:gap-9 grid-cols-1 md:grid-cols-2 md:w-1/2">
          <NftRanksNobelModal data="" />
          <NftRanksNobelModal data="" />
          <NftRanksNobelModal data="" />
          <NftRanksNobelModal data="" />
        </div>
        <div className="md:w-1/2">
          <HomeHeroBanner />
        </div>
      </section>

      {/* Latest Articles */}
      <section className="flex flex-col gap-4 pr-6 md:pr-[4.3rem]">
        <div className="text-2xl flex items-center justify-between font-semibold">
          <h1 className="gardient-color-green">Latest Articles</h1>
          <div className="flex group text-base  text-green gap-2 items-center">
            <h2> See All</h2>
            <FiChevronRight className="h-5 w-5  group-hover:translate-x-1" />
          </div>
        </div>
        <div className=" grid grid-flow-col gap-5 w-full  place-content-between grid-rows-2 md:grid-rows-1 md:gap-10">
          <NftNewsModal data="" />
          <NftNewsModal data="" />
          <NftNewsModal data="" />
          <NftNewsModal data="" />
        </div>
      </section>
    </main>
  );
}
