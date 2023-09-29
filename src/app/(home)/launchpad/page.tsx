import React from "react";

// components

import Slider from "@/components/Slider";
import LiveLaunchesCard from "@/components/LiveLaunchesCard";
import UpcomingProjectsCard from "@/components/UpcomingProjectsCard";
import nftdemo3 from "@/assets/nft-demo-3.png";
import nftdemo4 from "@/assets/nft-demo-4.png";

// icons

type Props = {};
const LiveLaunchesNft = [
  {
    name: "Cosmic Journey",
    url: nftdemo3,
    floor: "10 XRP",
    whitelistDate: "May 5,2023",
    items: "10,000",
    by: "Cosmic Labs",
  },
  {
    name: "Cosmic Journey",
    url: nftdemo3,
    floor: "10 XRP",
    whitelistDate: "May 5,2023",
    items: "10,000",
    by: "Cosmic Labs",
  },
  {
    name: "Cosmic Journey",
    url: nftdemo3,
    floor: "10 XRP",
    whitelistDate: "May 5,2023",
    items: "10,000",
    by: "Cosmic Labs",
  },
  {
    name: "Cosmic Journey",
    url: nftdemo3,
    floor: "10 XRP",
    whitelistDate: "May 5,2023",
    items: "10,000",
    by: "Cosmic Labs",
  },
];

const UpcomingProjectsNft = [
  {
    name: "Dreamy Cool",
    url: nftdemo4,
    floor: "10 XRP",
    whitelistDate: "May 5,2023",
    LaunchDays: "2",
    LaunchHours: "3",
    LaunchMin: "18",
    LaunchSec: "10",
    by: "Digital Dreams",
    items : "30,000"
  },
  {
    name: "Dreamy Cool",
    url: nftdemo4,
    floor: "20 XRP",
    whitelistDate: "May 5,2023",
    LaunchDays: "2",
    LaunchHours: "3",
    LaunchMin: "18",
    LaunchSec: "10",
    by: "Digital Dreams",
    items : "30,000"
  },
  {
    name: "Dreamy Cool",
    url: nftdemo4,
    floor: "10 XRP",
    whitelistDate: "May 5,2023",
    LaunchDays: "2",
    LaunchHours: "3",
    LaunchMin: "18",
    LaunchSec: "10",
    by: "Digital Dreams",
    items : "30,000"
  },
  {
    name: "Dreamy Cool",
    url: nftdemo4,
    floor: "10 XRP",
    whitelistDate: "May 5,2023",
    LaunchDays: "2",
    LaunchHours: "3",
    LaunchMin: "18",
    LaunchSec: "10",
    by: "Digital Dreams",
    items : "30,000"
  },
  {
    name: "Dreamy Cool",
    url: nftdemo4,
    floor: "10 XRP",
    whitelistDate: "May 5,2023",
    LaunchDays: "2",
    LaunchHours: "3",
    LaunchMin: "18",
    LaunchSec: "10",
    by: "Digital Dreams",
    items : "30,000"
  },
  {
    name: "Dreamy Cool",
    url: nftdemo4,
    floor: "10 XRP",
    whitelistDate: "May 5,2023",
    LaunchDays: "2",
    LaunchHours: "3",
    LaunchMin: "18",
    LaunchSec: "10",
    by: "Digital Dream",
    items : "30,000"
  },
];

export default function page({}: Props) {
  return (
    <main className=" pt-12 pb-24 pl-6 md:pl-[4.3rem] bg-background border-none flex flex-col gap-10 md:gap-14 text-white overflow-hidden ">
      {/*  Carousel / Slider */}
      <div className="pr-6 md:pr-[4.3rem] z-10">
        <Slider data="" />
      </div>
      {/* NFT Live Launches Heading */}
      <div className="pt-4">
        <h1 className=" leading-7 text-xl  md:text-2xl z-10  font-semibold gardient-color-green">
          Live Launches{" "}
        </h1>
      </div>
      {/* NFT Live Launches Card */}
      <div className="flex flex-col md:flex-row items-start justify-start gap-10 text-left text-[1.13rem] text-white font-inter">
        {LiveLaunchesNft.map((item, i) => {
          return (
            <div key={i}>
              <LiveLaunchesCard data={item} />
            </div>
          );
        })}
      </div>
      {/* NFT Upcoming Projects Heading */}
      <div className="pt-4">
        <h1 className=" text-xl  md:text-2xl z-10  font-semibold gardient-color-green">
          Upcoming Projects{" "}
        </h1>
        {/* NFT Upcoming Projects Card */}
      </div>
      <div className=" pb-20">
        <div className="flex flex-col items-start justify-start gap-[2.5rem] text-left text-[0.88rem] text-content font-inter">
          <div className="grid grid-flow-row gap-5 md:gap-10 grid-cols-1 md:grid-cols-4">
          {UpcomingProjectsNft.map((item, i) => {
          return (
            <div key={i}>
              <UpcomingProjectsCard data={item} />
            </div>
          );
        })}
            
          </div>
        </div>
      </div>
    </main>
  );
}
