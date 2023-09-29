// Note: Live Launches Card Component
import Image from "next/image";
import { FC } from "react";

// data props

type dataProps = {
  url: any;
  name: string;
  floor: string;
  whitelistDate: string;
  items: string;
  by: string;
};

interface LiveLaunchesCardProps {
  data: dataProps;
}

const LiveLaunchesCard: FC<LiveLaunchesCardProps> = ({ data }) => {
  return (
    <div className="rounded-lg bg-box w-[18.5rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[1rem]">
      {/* NFT Image */}
      <Image
        className="w-[18.5rem] h-[15.31rem] relattive  object-cover"
        alt="nft"
        src={data.url}
      />
      <div className="self-stretch flex flex-col py-[0rem] px-[1.5rem] items-start justify-start gap-[0.88rem]">
        <div className="flex flex-col items-start justify-start gap-[0.5rem]">
          {/* NFT Name */}
          <div className="relative tracking-[-0.02em] leading-[1.69rem] font-medium inline-block w-[15.5rem]">
            {data.name}
          </div>
          <div className="relative text-[1rem] tracking-[-0.02em] leading-[1.5rem]">
            <span>{`by `}</span>
            {/* NFT Creator */}
            <button>
              <span className="font-semibold text-green">{data.by}</span>
            </button>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[1rem] text-[0.88rem] text-content">
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
            <div className="text-gray-500 relative tracking-[-0.02em] leading-[1.31rem]">
              Floor
            </div>
            {/* NFT Floor Value */}
            <div className="relative text-[1rem] tracking-[-0.02em] leading-[1.5rem] font-semibold text-white">
              {data.floor}
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
            <div className="text-gray-500 relative tracking-[-0.02em] leading-[1.31rem]">
              Whitelist date
            </div>
            {/* NFT Whitelist Date */}
            <div className="relative text-[1rem] tracking-[-0.02em] leading-[1.5rem] font-semibold text-white">
              {data.whitelistDate}
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-gray-700 self-stretch bg-line flex flex-col py-[1rem] px-[1.5rem] items-start justify-start gap-[0.88rem] text-[0.88rem]">
        <div className="self-stretch flex flex-row pt-[0rem] px-[0rem] pb-[0.75rem] items-start justify-between border-b-[1px] border-solid border-gray-600">
          <h2 className="relative tracking-[-0.02em] leading-[1.31rem]">
            Items
          </h2>
          {/* NFT Items Amount */}
          <span className="relative text-[1rem] tracking-[-0.02em] leading-[1.5rem] font-semibold">
            {data.items}
          </span>
        </div>
        <div className="  self-stretch flex flex-col items-start justify-center text-green">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-start gap-[0.5rem]">
              {/* NFT Discover Button */}
              <button className="relative tracking-[-0.02em] leading-[1.31rem] font-medium">
                Discover
              </button>
              <button>
                <img
                  className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                  alt=""
                  src="/chevronrightgreen.svg"
                />
              </button>
            </div>
            {/* NFT Minting Button */}
            <button className="rounded-lg [background:linear-gradient(90deg,_#78ffdf,_#1ebe5e)] flex flex-row py-[0.75rem] px-[1rem] items-center justify-start text-dark-green">
              <h3 className=" text-black relative tracking-[-0.02em] leading-[1.31rem] font-semibold">
                Minting Now
              </h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveLaunchesCard;
