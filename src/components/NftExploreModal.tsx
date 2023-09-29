import Image from "next/image";
import { FC } from "react";
import nftdemo1 from "@/assets/nft-demo-2.png";

type dataProps = {
  url: any;
  title: string;
  price: string;
};

interface NftExploreModalProps {
  data: dataProps;
}

const NftExploreModal: FC<NftExploreModalProps> = ({ data }) => {
  return (
    <div>
      {" "}
      <div className="w-[9.125rem] h-[9.125rem] md:w-[11.5rem] md:h-[11.69rem] relative overflow-hidden">
        <Image
          src={data.url}
          alt="nft"
          className="object-cover cursor-pointer w-full h-full hover:scale-110 "
        />
        <div className="absolute text-white bottom-0 px-3 gap-1 ">
          <h1 className="text-[0.875rem] font-medium">{data.title}</h1>
          <span className="text-[0.75rem] font-semibold">{data.price}</span>
        </div>
      </div>
    </div>
  );
};

export default NftExploreModal;
