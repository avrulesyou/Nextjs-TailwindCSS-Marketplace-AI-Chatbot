import { FC } from "react";
import Button from "./ui/Button";
import { Icons } from "./ui/Icons";
import Image from "next/image";

interface NftDetailsModalProps {}

const NftDetailsModal: FC<NftDetailsModalProps> = ({}) => {
  return (
    <div className=" flex flex-col items-center md:flex-row md:items-start md:justify-start">
      <div className="">
        <Image
          quality={80}
          width="0"
          height="0"
          className="md:w-[39.5rem] w-full h-[19.5rem] md:h-[37.5rem] object-cover"
          alt="nft image"
          src="/rectangle-16@2x.png"
        />
      </div>

      <div className=" md:rounded-tl-none md:rounded-bl-none md:rounded-tr-2xl md:rounded-br-2xl rounded-b-2xl bg-box w-full  md:w-[42rem] md:h-[37.5rem] flex flex-col p-4 md:py-[2.88rem] md:px-16 box-border items-start justify-start gap-6">
        <div className="self-stretch flex items-center justify-end gap-3">
          <div className="rounded-full bg-green flex  p-[0.63rem] items-start justify-start">
            <Icons.favorites className="text-black w-4 h-4" />
          </div>
          <div className="rounded-full bg-green flex p-[0.63rem] items-start justify-start">
            <Icons.share className="text-black w-4 h-4" />
          </div>
        </div>

        {/* nft details */}
        <div className=" flex flex-col w-full items-start justify-start gap-4 md:gap-8">
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="flex gap-2">
              <Icons.box className="text-green w-5 h-5 md:w-6 md:h-6 shrink-0" />
              <h3 className="tracking-[-0.02em] font-semibold">
                Cosmic Journey
              </h3>
            </div>

            <h1 className=" text-2xl md:text-[2rem] tracking-[-0.02em] md:leading-[3rem] font-semibold gardient-color-green ">
              Immersive Visions{" "}
            </h1>
            <div className=" text-base md:text-xl tracking-[-0.02em] md:leading-[1.88rem]">
              <span className="text-content_Grey">Owned by </span>{" "}
              <span className="font-semibold text-green">14987B</span>
            </div>
          </div>

          <div className="flex items-start justify-start gap-3 my-1 md:my-0 md:gap-12 text-base md:text-xl text-white tracking-[-0.02em] md:leading-[1.88rem]">
            <div className="flex items-center justify-start gap-2 ">
              <Icons.eye className="" />
              <h2>800 Views</h2>
            </div>
            <div className="flex items-center justify-start gap-2">
              <Icons.favorites />
              <h2>300 Favourites</h2>
            </div>
          </div>

          <div className="flex flex-col items-start w-full justify-start gap-4 text-content_Grey">
            <div className="flex flex-col items-start justify-start gap-2 ">
              <h3 className="tracking-[-0.02em]  ">Best Offer</h3>
              <div className="flex items-end justify-start gap-4 md:gap-7 text-[2.5rem] md:text-5xl tracking-[-0.02em] text-white">
                <h1 className=" leading-10 md:leading-[3rem] font-semibold">
                  119 XRP
                </h1>
                <h2 className=" text-xl md:text-2xl leading-9  text-content_Grey">
                  $50.67
                </h2>
              </div>
            </div>

            <div className="flex flex-row items-start w-full justify-start gap-4 text-black">
              <Button
                variant={"gradiend"}
                className="w-full md:w-36 md:text-base"
              >
                Buy Now
              </Button>
              <Button
                className="w-full md:w-40 md:text-base"
                variant={"darkgreen"}
              >
                Make Offer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftDetailsModal;
