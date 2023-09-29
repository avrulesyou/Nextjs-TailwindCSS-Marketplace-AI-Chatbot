import Image from "next/image";
import { FC } from "react";

import demoNft from "@/assets/banner-demo.png";
import Button from "./ui/Button";
import { useAppSelector } from "@/lib/redux/store";
interface SliderProps {
  data: string;
}

const Slider: FC<SliderProps> = ({ data }) => {
  return (
    <div className=" flex flex-col relative gap-2">
      <div>
        <Image
          src={demoNft}
          alt=""
          className=" w-full min-h-[11.6rem] md:min-h-[20.5rem] rounded-2xl"
        />
      </div>

      <div className="flex flex-col md:absolute md:bottom-10 md:px-16  md:w-full gap-4">
        {/* info */}
        <div className=" flex flex-col gap-1">
          <h1 className="text-sm text-green">Cosmic Journey</h1>
          <h2 className="text-xl md:text-[2rem]">Immersive Visions</h2>
          <div className="flex items-center mt-1 gap-2">
            <h3 className="text-lg md:text-xl text-content_Grey">Floor</h3>
            <span className="text-xl">10 XRP</span>
          </div>
        </div>

        {/* buttons */}
        <div className="flex gap-3 justify-between items-center  text-base ">
          <Button className="w-full md:max-w-max">Minting Now</Button>
          <Button className="w-full md:max-w-max">View Collections</Button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
