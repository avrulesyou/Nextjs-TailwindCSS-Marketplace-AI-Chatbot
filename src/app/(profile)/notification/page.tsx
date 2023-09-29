import React from "react";

// components

import NotificationCard1 from "@/components/NotificationCard1";
import NotificationCard2 from "@/components/NotificationCard2";

type Props = {};

//Notification mail card => we are passing data to NotificationCard1 i.e. NotificationLeft
// Notication setting card => we are importing from NotificationCard2 i.e. NotificationRight

const NotificationLeft = [
  {
    heading: "Your NFT Bid Accepted!",
    time: "10m",
    content:
      "Congratulations! Your bid on an NFT has been accepted, and you are now the proud owner of a one-of-a-kind digital asset. Dive into the world of digital collectibles and enjoy the exclusivity and value of your new acquisition",
  },
  {
    heading: "New NFT Collection Launch",
    time: "25m",
    content:
      "Discover our newest NFT collection featuring captivating digital artwork from talented artists. Immerse yourself in a world of unique and limited-edition digital assets that push the boundaries of creativity...",
  },
  {
    heading: "Limited Edition NFT Drop",
    time: "1h",
    content:
      "A new limited-edition NFT drop is coming soon! Stay tuned for more details on this exciting new collection of digital assets. Be sure to follow us on social media for the latest updates and announcements...",
  },
  {
    heading: "The Value of Your NFT Has Increased!",
    time: "1d",
    content:
      "Exciting news! The value of your NFT has increased significantly. Stay updated on the ever-changing market dynamics and enjoy the thrill of seeing your digital asset appreciate in value. Keep an eye on the evolving NFT marketplace...",
  },
];

//we are not passing data to NotificationCard2 because it is static.
const NotificationRight = [
  {
    heading: "Your NFT Bid Accepted!",
    time: "20m",
    content:
      "Congratulations! Your bid on an NFT has been accepted, and you are now the proud owner of a one-of-a-kind digital asset. Dive into the world of digital collectibles and enjoy the exclusivity and value of your new acquisition",
  },
];

export default function page({}: Props) {
  return (
    <main className=" bg-dark w-full h-full overflow-hidden text-left  text-sm md:text-base   font-inter ">
      <div className="px-6 py-8 md:px-[4.25rem] mx-2 md:mx-3 md:py-8 md:mb-8 flex flex-col justify-center  items-start gap-10 text-left text-[2rem] ">
        {/* Heading */}
        <h1 className=" text-2xl md:leading-9 md:text-4xl z-10 font-semibold gardient-color-green">
          Notifications{" "}
        </h1>

        <div className="flex flex-col items-start justify-start gap-[0.5rem]">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="relative text-xl md:text-2xl text-white tracking-[-0.02em] leading-[2.25rem] font-semibold">
              My notification
            </div>
            {/* Clear notification button */}
            <button className="relative text-[1rem] tracking-[-0.02em] leading-[1.5rem] font-semibold font-inter text-green">
              Clear notifications
            </button>
          </div>
          <div className="relative   text-[1rem] text-gray-500 font-inter text-content inline-block w-[20rem] md:w-[32.5rem]">
            Notification details have been sent to your account email
          </div>
        </div>

        {/* Notification mail cards */}

        <div className="flex flex-col md:flex-row items-start justify-start gap-12">
          <div className="flex flex-col items-start justify-start gap-6 text-left  text-white ">
            {NotificationLeft.map((item, i) => {
              return (
                <div key={i}>
                  <NotificationCard1 data={item} />
                </div>
              );
            })}
          </div>

          {/* Notification setting card */}

          <div className="flex mt-1 md:mt-[-6rem] flex-col items-start justify-start gap-6 text-left  text-white ">
            {NotificationRight.map((item, i) => {
              return (
                <div key={i}>
                  <NotificationCard2 data={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
