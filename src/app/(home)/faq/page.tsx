import React from "react";

// components
import FAQnftCard from "../../../components/FAQnftCard";

// data of FAQ
const FAQ = [
  {
    question: "What is NFT?",
    answer:
      "NFT stands for Non-Fungible Token. It is a digital asset that represents real-world objects like art, music, in-game items and videos. They are bought and sold online, frequently with cryptocurrency, and they are generally encoded with the same underlying software as many cryptos.",
  },
  {
    question: "How do I buy an NFT?",

    answer:
      "You can buy NFTs on NFT marketplaces like OpenSea, Rarible, and Mintable. You can also buy NFTs on NFT auction sites like Foundation and SuperRare. You can also buy NFTs on NFT marketplaces like OpenSea, Rarible, and Mintable. You can also buy NFTs on NFT auction sites like Foundation and SuperRare.",
  },
  {
    question: "What is XRP Boys?",
    answer: "An NFT marketplace for the XRP community. ",
  },
  {
    question: "How do I sell an NFT in XRP Boys?",
    answer: "An NFT marketplace for the XRP community. ",
  },
  {
    question: "What is the 'Secondary Market'?",
    answer: "An NFT marketplace for the XRP community. ",
  },
  {
    question: "How can I verify the authenticity of an NFT?",
    answer: "An NFT marketplace for the XRP community. ",
  },
  {
    question: "Are there any restrictions on using NFT?",
    answer: "An NFT marketplace for the XRP community. ",
  },
  {
    question: "How do I connect my digital wallet to XRP Boys?",
    answer: "An NFT marketplace for the XRP community. ",
  },
  {
    question: "Can i sell a fractional ownership of an NFT?",
    answer: "An NFT marketplace for the XRP community. ",
  },
  {
    question: "How can I ensure the security of my NFTs?",
    answer: "An NFT marketplace for the XRP community. ",
  },
    

];

interface pageProps {}

// Note: FAQ Page

export default function Page({}: pageProps) {
  return (
    <main className="  bg-dark w-full h-full overflow-hidden text-left  text-sm md:text-base text-green font-inter  ">
      <div className="px-6 py-8 md:px-[4.25rem] md:py-8 md:mb-8 flex flex-col justify-center  items-center gap-10 text-left text-[2rem] text-content font-inter">
        <div className="w-[30.5rem] flex flex-col items-center justify-start gap-2">
          {/* Heading */}
          <h1 className=" text-xl md:leading-9 md:text-4xl z-10 font-semibold gardient-color-green">
            FAQ{" "}
          </h1>
          <div className="self-stretch relative text-sm md:text-xl text-gray-400 text-center">
            Frequently asked questions
          </div>
          {/* data props */}
          <div className="flex flex-col items-start justify-start gap-6 text-left  text-white font-inter">
            {FAQ.map((item, i) => {
              return (
                <div key={i}>
                  <FAQnftCard data={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
