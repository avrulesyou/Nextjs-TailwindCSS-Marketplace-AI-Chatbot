import Image from "next/image";
import { FC } from "react";
// images
import demoNft from "@/assets/nft-demo-1.png";

interface NftRanksNobelModalProps {
  data: string;
}

const NftRanksNobelModal: FC<NftRanksNobelModalProps> = ({ data }) => {
  return (
    <div className="flex gap-[1.13rem] w-fit shrink-0">
      <div className="rounded-lg w-[5.37rem] h-[5.437rem] overflow-hidden">
        <Image src={demoNft} alt="nft " className="object-cover " />
      </div>

      {/* details section */}
      <div className="flex flex-col gap-2">
        <h1 className="text-lg">Immersive Visions</h1>
        <div className="flex flex-col gap-1 text-sm">
          <div className="flex gap-2">
            <h2>Floor</h2>
            <span>11 XRP</span>
          </div>
          <div className="flex gap-2">
            <h2>Volume</h2>
            <span>121,111 XRP</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftRanksNobelModal;
