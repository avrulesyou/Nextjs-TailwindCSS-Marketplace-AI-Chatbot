// Note : Upcoming Projects Card Component
import Image from "next/image";
import { FC } from "react";

// data props

type dataProps = {
  url: any;
  name: string;
  floor: string;
  whitelistDate: string;
  LaunchDays: string;
  LaunchHours: string;
  LaunchMin: string;
  LaunchSec: string;
  items: string;
  by: string;
};

interface UpcomingProjectsCardProps {
  data: dataProps;
}

const UpcomingProjectsCard: FC<UpcomingProjectsCardProps> = ({ data }) => {
  return (
    <div>
      <div className="rounded-lg bg-box w-[18.5rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[1rem]">
        {/* NFT Image */}
        <Image
          className="relative w-[18.5rem] h-[15.31rem] object-cover"
          alt="nft"
          src={data.url}
        />
        <div className="self-stretch flex flex-col py-[0rem] px-[1.5rem] items-start justify-start gap-[0.88rem]">
          <div className="flex flex-col items-start justify-start gap-[0.5rem] text-[1.13rem] text-white">
            {/* NFT Name */}
            <div className="relative tracking-[-0.02em] leading-[1.69rem] font-medium inline-block w-[15.5rem]">
              {data.name}
            </div>
            <div className="relative text-[1rem] tracking-[-0.02em] leading-[1.5rem]">
              <span>{`by `}</span>
              {/* NFT Creator Name */}
              <button>
                <span className="font-semibold text-green">{data.by}</span>
              </button>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[1rem]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
              <div className=" text-gray-500 relative tracking-[-0.02em] leading-[1.31rem]">
                Floor
              </div>
              {/* NFT Floor Value */}
              <div className=" relative text-[1rem] tracking-[-0.02em] leading-[1.5rem] font-semibold text-white">
                {data.floor}
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
              <div className=" text-gray-500 relative tracking-[-0.02em] leading-[1.31rem]">
                Whitelist date
              </div>
              {/* NFT Whitelist Date */}
              <div className="relative text-[1rem] tracking-[-0.02em] leading-[1.5rem] font-semibold text-white">
                {data.whitelistDate}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.5rem]">
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className=" text-gray-500 relative tracking-[-0.02em] leading-[1.31rem]">
                Launching in :
              </div>
              <button>
                <img
                  className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                  alt=""
                  src="/notification.svg"
                />
              </button>
            </div>
            {/* NFT Launching in Section */}
            <div className="flex flex-row items-start justify-start gap-[0.5rem] text-center text-[1rem] text-white">
              <div className="flex flex-col items-center justify-start gap-[0.5rem]">
                <div className=" bg-gray-700 rounded bg-line overflow-hidden flex flex-col p-[1rem] items-start justify-start">
                  <div className="relative tracking-[-0.02em] leading-[1.5rem] font-semibold inline-block w-[1.5rem]">
                    {data.LaunchDays}
                  </div>
                </div>
                <div className=" text-gray-500 relative text-[0.75rem] tracking-[-0.02em] leading-[1.13rem] text-content inline-block w-[3.5rem]">
                  Days
                </div>
              </div>
              <div className="flex flex-col items-center justify-start gap-[0.5rem]">
                <div className=" bg-gray-700 rounded bg-line overflow-hidden flex flex-col p-[1rem] items-start justify-start">
                  <div className=" relative tracking-[-0.02em] leading-[1.5rem] font-semibold inline-block w-[1.5rem]">
                    {data.LaunchHours}
                  </div>
                </div>
                <div className=" text-gray-500 relative text-[0.75rem] tracking-[-0.02em] leading-[1.13rem] text-content inline-block w-[3.5rem]">
                  Hours
                </div>
              </div>
              <div className="flex flex-col items-center justify-start gap-[0.5rem]">
                <div className="bg-gray-700 rounded bg-line overflow-hidden flex flex-col p-[1rem] items-start justify-start">
                  <div className="relative tracking-[-0.02em] leading-[1.5rem] font-semibold inline-block w-[1.5rem]">
                    {data.LaunchMin}
                  </div>
                </div>
                <div className=" text-gray-500 relative text-[0.75rem] tracking-[-0.02em] leading-[1.13rem] text-content inline-block w-[3.5rem]">
                  Minutes
                </div>
              </div>
              <div className="flex flex-col items-center justify-start gap-[0.5rem]">
                <div className="bg-gray-700 rounded bg-line overflow-hidden flex flex-col p-[1rem] items-start justify-start">
                  <div className="relative tracking-[-0.02em] leading-[1.5rem] font-semibold inline-block w-[1.5rem]">
                    {data.LaunchSec}
                  </div>
                </div>
                <div className="text-gray-500 relative text-[0.75rem] tracking-[-0.02em] leading-[1.13rem] text-content inline-block w-[3.5rem]">
                  Seconds
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-700 self-stretch bg-line flex flex-col py-[1rem] px-[1.5rem] items-start justify-start text-white">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="flex flex-col items-start justify-start gap-[0.25rem]">
              <div className="relative tracking-[-0.02em] leading-[1.31rem]">
                Items
              </div>
              {/* NFT Items Amount */}
              <div className="relative text-[1rem] tracking-[-0.02em] leading-[1.5rem]">
                {data.items}
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[1rem] text-green">
              <button className="relative tracking-[-0.02em] leading-[1.5rem] font-medium">
                Discover
              </button>
              <img
                className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
                alt=""
                src="/frame4.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingProjectsCard;
