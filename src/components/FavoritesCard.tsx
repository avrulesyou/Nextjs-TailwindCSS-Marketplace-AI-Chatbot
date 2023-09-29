// Note: Favorites Card Component
import Image from "next/image";
import { FC } from "react";

// data props

type dataProps = {
  url: any;
  name: string;
  volume: string;
  change: string;
  floorprice: string;
  sales: string;
  uniqueowner: string;
  itemlisted: string;
};

interface FavoritesCardProps {
  data: dataProps;
}


const FavoritesCard: FC<FavoritesCardProps> = ({ data }) => {
  return (
    <div>
      <div className="self-stretch flex flex-row items-center justify-start gap-4">
        <div className="w-[12.75rem] flex flex-row items-center justify-start gap-[0.63rem]">
          {/* Image of NFT */}

          <Image
            className=" my-2 rounded-lg w-[2.75rem] h-[2.75rem] object-cover"
            alt=""
            src={data.url}
          />

          {/* Name of NFT */}

          <div className="flex-1 text-green  tracking-[-0.02em] leading-[1.5rem]">
            {data.name}
          </div>
        </div>

        {/* Price of NFT */}

        <div className=" tracking-[-0.02em] leading-[1.5rem] inline-block w-[9.75rem] shrink-0">
          {data.volume}
        </div>

        {/* Rarity of NFT */}

        <div className="r tracking-[-0.02em] leading-[1.5rem] inline-block w-[8rem] shrink-0">
          {data.change}
        </div>
        {/* Quantity of NFT */}

        <div className=" tracking-[-0.02em] leading-[1.5rem] inline-block w-[7.44rem] shrink-0">
          {data.floorprice}
        </div>

        {/* From Address of NFT */}

        <div className=" tracking-[-0.02em] leading-[1.5rem] font-medium  inline-block w-[8.06rem] shrink-0">
          {data.sales}
        </div>

        {/* To Address of NFT */}

        <div className=" tracking-[-0.02em] leading-[1.5rem] font-medium  inline-block w-[8.38rem] shrink-0">
          
          {data.uniqueowner}
        </div>

        {/* Time of Purchase */}

        <div className="flex-1 tracking-[-0.02em] leading-[1.5rem] font-medium ">
          {data.itemlisted}
        </div>
      </div>
    </div>
  );
};

export default FavoritesCard;
