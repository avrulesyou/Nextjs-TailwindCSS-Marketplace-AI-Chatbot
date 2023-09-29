// Note: FAQ Card Component
"use client";

import { FC, useState } from "react";

//icons

import { Icons } from "./ui/Icons";

// data props

type dataProps = {
  question: string;
  answer: string;
};

interface FAQCardProps {
  data: dataProps;
}

const FAQnftCard: FC<FAQCardProps> = ({ data }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-[20rem] md:w-[39.5rem] flex flex-col items-start justify-start gap-[1.25rem] text-left text-sm md:text-xl text-white font-inter">
      <div className="self-stretch flex flex-col pt-0 px-0 pb-4 items-start justify-center border-b-[1px] border-solid border-line border-y-zinc-500">
        <div className="self-stretch flex flex-col items-start justify-start gap-2">
          <div className="self-stretch flex flex-row items-center justify-start gap-4">
            {/* Questions */}
            <div className="flex-1 relative leading-[1.88rem]">
              {data.question}
            </div>
            {/* Icon modal */}
            <button onClick={() => setShow(!show)}>
              {show ? (
                <Icons.minus className="text-white w-4 h-4" />
              ) : (
                <Icons.add className="text-white w-4 h-4" />
              )}
            </button>
          </div>
          {/* Answer */}
          {show ? (
            <div className="self-stretch text-gray-500 relative text-[1rem] leading-6 text-content">
              {data.answer}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default FAQnftCard;
