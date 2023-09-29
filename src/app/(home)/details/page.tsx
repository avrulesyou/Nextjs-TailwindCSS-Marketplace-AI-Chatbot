import { FiChevronRight } from "react-icons/fi";
import NftCollectionModal from "@/components/NftCollectionModal";
import NftDetailsModal from "@/components/NftDetailsModal";
import { Icons } from "@/components/ui/Icons";

type Props = {};

export default function page({}: Props) {
  return (
    <main className=" bg-dark w-full h-full overflow-hidden text-left  text-sm md:text-base text-green font-inter">
      <div className=" px-6 py-8 md:px-[4.25rem] md:py-12 md:mb-8 flex flex-col justify-center items-center ">
        <section>
          <NftDetailsModal />
        </section>

        {/* Description Details Section  */}
        <section className="flex flex-col md:flex-row w-full mt-10 text-lg md:text-xl gap-10  text-white ">
          <div className="flex flex-col gap-10  w-full md:max-w-[32.5rem] ">
            <div className="flex items-center justify-between pb-4 md:pb-6 border-b-[1px] border-solid border-line">
              <div className="flex items-center gap-2">
                <Icons.fileText />
                <h1 className=" tracking-[-0.02em] leading-7  md:leading-[1.88rem] font-semibold">
                  Descriptions
                </h1>
              </div>
              <Icons.add />
            </div>
            <div className="flex  items-center justify-between pb-4 md:pb-6 border-b-[1px] border-solid border-line">
              <div className="flex items-center gap-2">
                <Icons.hexagon />
                <h1 className=" tracking-[-0.02em] leading-7  md:leading-[1.88rem] font-semibold">
                  Traits
                </h1>
              </div>
              <Icons.add />
            </div>
            <div className="flex  items-center justify-between pb-4 md:pb-6 border-b-[1px] border-solid border-line">
              <div className="flex items-center gap-2">
                <Icons.fileBadge2 />
                <h1 className=" tracking-[-0.02em] leading-7  md:leading-[1.88rem] font-semibold">
                  About
                </h1>
              </div>
              <Icons.add />
            </div>
            <div className="flex  items-center justify-between pb-4 md:pb-6 border-b-[1px] border-solid border-line">
              <div className="flex items-center gap-2">
                <Icons.fileSpreadsheet />
                <h1 className=" tracking-[-0.02em] leading-7  md:leading-[1.88rem] font-semibold">
                  Details
                </h1>
              </div>
              <Icons.add />
            </div>
          </div>
          {/* 2nd section */}
          <div className="flex flex-col gap-10   w-full ">
            <div className="flex  items-center justify-between pb-4 md:pb-6 border-b-[1px] border-solid border-line">
              <div className="flex items-center gap-2">
                <Icons.fileBarChart />
                <h1 className=" tracking-[-0.02em] leading-7  md:leading-[1.88rem] font-semibold">
                  Listing
                </h1>
              </div>
              <Icons.add />
            </div>
            <div className="flex items-center justify-between pb-4 md:pb-6 border-b-[1px] border-solid border-line">
              <div className="flex items-center gap-2">
                <Icons.nft_offers />
                <h1 className=" tracking-[-0.02em] leading-7  md:leading-[1.88rem] font-semibold">
                  Offers
                </h1>
              </div>
              <Icons.add />
            </div>
            <div className="flex  items-center justify-between pb-4 md:pb-6 border-b-[1px] border-solid border-line">
              <div className="flex items-center gap-2">
                <Icons.circleDot />
                <h1 className=" tracking-[-0.02em] leading-7  md:leading-[1.88rem] font-semibold">
                  Items Activity
                </h1>
              </div>
              <Icons.add />
            </div>
          </div>
        </section>

        {/* Price Graph Section  */}
        {/* <div className="flex flex-col items-start justify-start gap-[1.25rem]">
            <div className="flex flex-row items-center justify-start gap-[0.5rem]">
              <Icons.lineChart />
              <div className=" tracking-[-0.02em] leading-[1.88rem] font-semibold">
                Price History
              </div>
            </div>
            <div className="w-[81.5rem] flex flex-row items-center justify-start gap-[0.75rem] text-center text-[0.63rem] text-content">
              <div className="flex flex-row items-center justify-start gap-[0.5rem] text-white">
                <div className=" tracking-[-0.02em] leading-[0.94rem] font-semibold [transform:_rotate(-90deg)] [transform-origin:0_0]">
                  Volume (XRP)
                </div>
                <div className="flex flex-col items-center justify-start gap-[1.13rem] text-content">
                  <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                    160K
                  </div>
                  <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                    140K
                  </div>
                  <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                    120K
                  </div>
                  <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                    100K
                  </div>
                  <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                    90K
                  </div>
                  <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                    60K
                  </div>
                  <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                    30K
                  </div>
                  <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                    0
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[0.81rem] text-left">
                <div className="self-stretch flex-1 relative">
                  <div className="absolute top-[0rem] left-[0rem] w-[74.13rem] h-[13.37rem] flex flex-col items-start justify-start gap-[1.88rem]">
                    <img
                      className="self-stretch relative max-w-full overflow-hidden h-[0.06rem] shrink-0"
                      alt=""
                      src="/vector-3.svg"
                    />
                    <img
                      className="self-stretch relative max-w-full overflow-hidden h-[0.06rem] shrink-0"
                      alt=""
                      src="/vector-3.svg"
                    />
                    <img
                      className="self-stretch relative max-w-full overflow-hidden h-[0.06rem] shrink-0"
                      alt=""
                      src="/vector-3.svg"
                    />
                    <img
                      className="self-stretch relative max-w-full overflow-hidden h-[0.06rem] shrink-0"
                      alt=""
                      src="/vector-3.svg"
                    />
                    <img
                      className="self-stretch relative max-w-full overflow-hidden h-[0.06rem] shrink-0"
                      alt=""
                      src="/vector-3.svg"
                    />
                  </div>
                  <img
                    className="absolute top-[0.11rem] left-[0rem] w-[74.16rem] h-[13.55rem]"
                    alt=""
                    src="/group-2.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-between">
                  <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                    May 06
                  </div>
                  <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                    May 08
                  </div>
                  <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                    May 10
                  </div>
                  <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                    May 12
                  </div>
                  <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                    May 14
                  </div>
                  <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                    May 16
                  </div>
                  <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                    May 18
                  </div>
                  <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                    May 20
                  </div>
                  <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                    May 22
                  </div>
                  <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                    May 24
                  </div>
                  <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                    May 26
                  </div>
                  <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                    May 28
                  </div>
                  <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                    May 30
                  </div>
                  <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                    June 01
                  </div>
                  <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                    June 03
                  </div>
                </div>
              </div>
            </div>
          </div> */}

        {/* More for this collection section  */}
        {/* <section className=" pt-6 text-xl md:text-2xl font-semibold gap-4 flex flex-col">
            <div className="flex md:gap-96">
              <h1 className=" gardient-color-green ">
                More for this collection
              </h1>
              <div className="flex group text-base md:pl-80 text-green gap-2 items-center">
                <h2> See All Collections</h2>
                <FiChevronRight className="h-5 w-5  group-hover:translate-x-1" />
              </div>
            </div>
            <div className="flex gap-4 md:gap-10 overflow-x-scroll scrollbar-hide h-full">
              <NftCollectionModal data="" />
              <NftCollectionModal data="" />
              <NftCollectionModal data="" />
              <NftCollectionModal data="" />
              <NftCollectionModal data="" />
            </div>
          </section> */}
      </div>
      {/* </div> */}
    </main>
  );
}
//
