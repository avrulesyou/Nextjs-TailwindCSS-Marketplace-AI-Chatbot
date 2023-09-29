import { Icons } from "@/components/ui/Icons";
import { FC } from "react";
// images
import background from "@/assets/profile-bg.png";
import Image from "next/image";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

import NFTLatestCollectionModal from "@/components/NFTLatestCollectionModal";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <main className="px-6 md:pr-[4.3rem] md:pl-10 flex flex-col gap-10">
      {/* profile section */}
      <section className="flex flex-col gap-6">
        <h1 className="text-[2rem] font-semibold leading-[3rem] gardient-color-green">
          Profile
        </h1>
        <div className="flex flex-col md:flex-row gap-5 justify-between ">
          <div>
            {/* profile card */}
            <div className="w-full md:max-w-[32.5rem] h-44 md:h-[18.5rem] flex items-center justify-center bg-box rounded-lg relative ">
              <Image
                src={background}
                alt="background"
                className="object-cover  h-full rounded-lg "
              />
              <div className="flex gap-5 px-10 py-12 md:flex-col md:items-center  absolute  ">
                <div className="w-[4.3rem] h-[4.3rem] md:w-[5.6rem] md:h-[5.6rem] rounded-full bg-gray-300" />
                <div className="flex flex-col gap-2 ">
                  <h1 className="text-base md:text-xl  text-white md:text-center">
                    Samantha
                  </h1>
                  <h2 className="text-sm md:text-base text-green md:text-center">
                    03x579y9iuTuyukjhkk
                  </h2>
                  <div className="flex items-center md:justify-center gap-2 text-sm text-content_Grey">
                    <h2>samantha</h2>
                    <Icons.edit className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Edit profile */}
          <div className="text-white flex flex-col gap-3 md:gap-4 md:max-w-[25rem] ">
            <h1 className="text-xl md:text-2xl leading-[1.9rem] font-semibold">
              Edit profile
            </h1>
            <div className=" flex flex-col gap-[0.9rem] md:gap-4">
              <div className="flex flex-col gap-2">
                <h2 className="text-sm md:text-base">Name</h2>
                <Input />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-sm md:text-base">Email</h2>
                <Input />
              </div>
              <Button variant={"gradiend"} className="w-full">
                Update profile
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* latest collections */}
      <section className="flex flex-col gap-3 md:gap-6">
        <h1 className="text-xl md:text-2xl md:leading-9 leading-[1.9rem] font-semibold text-white">
          Latest collections
        </h1>
        <div className="flex flex-col justify-between gap-8 md:gap-10 md:flex-row">
          <NFTLatestCollectionModal />
          <NFTLatestCollectionModal />
          <NFTLatestCollectionModal />
        </div>
      </section>
    </main>
  );
};

export default page;
