import Image from "next/image";
import { FC } from "react";

// image
import demoNft from "@/assets/nft-demo-1.png";

interface NftNewsModalProps {
  data: string;
}

const NftNewsModal: FC<NftNewsModalProps> = ({ data }) => {
  return (
    <div className="  flex flex-col h-full gap-3  md:gap-4">
      <div className=" rounded-lg overflow-hidden  w-[9rem] md:w-[18.5rem]">
        <Image
          src={demoNft}
          alt="nftNews"
          className="object-cover w-[9rem] md:w-[18.5rem] h-20 md:h-[10.312rem] "
        />
      </div>
      <div className=" flex flex-col gap-2 md:gap-3 w-[9rem] md:w-[18rem]">
        <h1 className="text-sm md:text-xl font-medium ">
          The Rise of NFTs: Exploring the Future of Digital Ownership
        </h1>
        <span className="text-xs md:text-sm text-content_Grey">
          May 05, 2023
        </span>
      </div>
    </div>
  );
};

export default NftNewsModal;
