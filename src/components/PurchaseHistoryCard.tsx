// Note: Purchase History Card Component
import Image from "next/image";
import { FC } from "react";

// data props

type dataProps = {
  url: any;
  name: string;
  price: string;
  rarity: string;
  quantity: string;
  from: string;
  to: string;
  time: string;
};

interface PurchaseHistoryCardProps {
  data: dataProps;
}


const PurchaseHistoryCard: FC<PurchaseHistoryCardProps> = ({ data }) => {
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

          <div className="flex-1  tracking-[-0.02em] leading-[1.5rem]">
            {data.name}
          </div>
        </div>

        {/* Price of NFT */}

        <div className=" tracking-[-0.02em] leading-[1.5rem] inline-block w-[9.75rem] shrink-0">
          {data.price}
        </div>

        {/* Rarity of NFT */}

        <div className="r tracking-[-0.02em] leading-[1.5rem] inline-block w-[9rem] shrink-0">
          {data.rarity}
        </div>
        {/* Quantity of NFT */}

        <div className=" tracking-[-0.02em] leading-[1.5rem] inline-block w-[5.44rem] shrink-0">
          {data.quantity}
        </div>

        {/* From Address of NFT */}

        <div className=" tracking-[-0.02em] leading-[1.5rem] font-medium text-green inline-block w-[8.06rem] shrink-0">
          {data.from}
        </div>

        {/* To Address of NFT */}

        <div className=" tracking-[-0.02em] leading-[1.5rem] font-medium text-green inline-block w-[8.38rem] shrink-0">
          
          {data.to.slice(0, 3)}...{data.to.slice(data.to.length - 4)}
        </div>

        {/* Time of Purchase */}

        <div className="flex-1 tracking-[-0.02em] leading-[1.5rem] font-medium text-green">
          {data.time}
        </div>
      </div>
    </div>
  );
};

export default PurchaseHistoryCard;
