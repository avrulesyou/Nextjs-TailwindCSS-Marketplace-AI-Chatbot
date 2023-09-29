import { FC } from "react";

// icons
import { FiChevronRight } from "react-icons/fi";

interface HomeHeroBannerProps {}

const HomeHeroBanner: FC<HomeHeroBannerProps> = ({}) => {
  return (
    <div className="w-full flex flex-col gap-4 md:gap-6 items-center rounded-lg justify-center h-full p-6 md:px-[4.5rem] md:py-16 gradient-background-green">
      <h1 className="text-center text-2xl md:text-5xl  font-semibold text-dark">
        Start Collecting Unique NFTs Today!
      </h1>
      <button className="rounded-md px-4 py-[0.63rem] md:py-3 flex items-center gap-2 hover:shadow-2xl hover:scale-105  bg-dark_Green text-green">
        Find Out More
        <FiChevronRight className="h-6 w-6 text-green" />
      </button>
    </div>
  );
};

export default HomeHeroBanner;
