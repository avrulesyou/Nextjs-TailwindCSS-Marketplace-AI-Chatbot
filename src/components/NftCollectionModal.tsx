import React, { FC } from "react";
import Image from "next/image";

import demoNft from "@/assets/nft-demo-1.png";

interface NftCollectionModalProps {
  data: any;
}

const NftCollectionModal: FC<NftCollectionModalProps> = ({ data }) => {
  const imageSrc = `https://phoenixrp-image.infura-ipfs.io/ipfs/${data?.tokenURI?.slice(
    7
  )}`;

  return (
    <div className="h-[11.6rem] min-w-[11.5rem] rounded-lg relative text-white overflow-hidden">
      <Image
        src={imageSrc}
        alt="nft"
        priority={true}
        width={400}
        height={400}
        className="object-cover h-full w-full"
      />

      {/*  info */}
      <div className="absolute w-full px-3 gap-1 bottom-0">
        <h1 className="text-base font-medium ">{data.name}</h1>
        <div className="flex justify-between text-xs">
          <div>
            <h2 className="text-content_Grey">Floor</h2>
            <span>15 XRP</span>
          </div>
          <div>
            <h2 className="text-content_Grey">Volume</h2>
            <span>138,190 XRP</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCollectionModal;
