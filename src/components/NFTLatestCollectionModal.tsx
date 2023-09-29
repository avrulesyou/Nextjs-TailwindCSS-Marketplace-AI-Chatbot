import { FC } from "react";
import Image from "next/image";
import background from "@/assets/banner-demo.png";
import Button from "./ui/Button";
import { Icons } from "./ui/Icons";
import nftdemo from "@/assets/nft-demo-1.png";

interface NFTLatestCollectionModalProps {}

const NFTLatestCollectionModal: FC<NFTLatestCollectionModalProps> = () => {
  return (
    <div className="w-full md:max-w-[20.8rem] h-[9.5rem] flex flex-col gap-[-24px]">
      <Image src={background} alt="background" className="object-cover  " />
      <div className="w-[18.6rem] mx-auto flex items-center gap-3 py-3 px-[0.9rem] bg-box ">
        <Image src={nftdemo} alt="nftdemo" className="h-[3.7rem] w-[3.7rem]" />
        <div className=" flex flex-col gap-2">
          <h1 className="text-base text-white">Cosmic Journey</h1>
          <div className="flex items-center gap-2">
            <h1 className="text-green text-sm font-medium">Discover</h1>
            <Icons.chevronRight className="h-6 w-6 text-green" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTLatestCollectionModal;
