//Notification mail component

import { FC } from "react";

//icons

import { Icons } from "./ui/Icons";

// data props

type dataProps = {
  heading: string;
  time: string;
  content: string;
};

interface FAQCardProps {
  data: dataProps;
}

const NotificationCard1: FC<FAQCardProps> = ({ data }) => {
  return (
    <div>
      <div className="flex flex-col items-start justify-start gap-[2rem] text-left text-[1.5rem] text-white font-public-sans">
        <div className="flex flex-col items-start justify-start gap-[1.25rem] text-[1.25rem] font-inter">
          <div className="box-border w-[20rem] md:w-[32.5rem] flex flex-col pt-[0rem] px-[0rem] pb-[1rem] items-start justify-center border-stone-700 border-b-[1px] border-solid border-line">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
              <div className="self-stretch flex flex-row items-center justify-start gap-[1rem]">
                {/* Icon for new email :  has to add the function to show only to new mail */}
                <Icons.circleDot className="text-green h-4 w-4" />

                {/* Heading of notification mail */}
                <div className="flex-1 relative tracking-[-0.02em] leading-[1.88rem] font-semibold">
                  {data.heading}
                </div>
                {/* time of recieve */}
                <div className="relative text-[1rem] text-gray-500 tracking-[-0.02em] leading-[1.5rem] text-content">
                  {data.time}
                </div>

                {/* Delete Icon : has to add the functionality*/}

                <button>
                  <Icons.trash2 className="text-red-600 h-6 w-6" />
                </button>
              </div>
              {/* Content of mail , only 180 characters */}
              <div className="self-stretch relative text-[1rem] text-gray-500  leading-[1.5rem]  text-content">
                <span>{data.content.slice(0, 180)}...</span>

                {/* link to open this mail on user's email*/}
                <button>
                  <b className="text-green">Open in your email</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard1;
