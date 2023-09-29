"use client";
import { FC, useState, useRef, ChangeEvent } from "react";
import Button from "@/components/ui/Button";
import { Icons } from "@/components/ui/Icons";
import Image from "next/image";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Input from "@/components/ui/Input";
import { makeApiCall } from "@/helpers/apiCall";
import QrPopUpModal from "@/components/QrPopUpModal";

interface pageProps {}

type nftData = {};

const Page: FC<pageProps> = ({}) => {
  const [selectedImage, setSelectedImage] = useState<string[]>([]);
  const [showQRCode, setShowQRCode] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const inputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<File>();
  const [formData, setFormData] = useState<FormData>();
  const [nftData, setNftData] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e: any) => {
    setNftData({ ...nftData, [e.target.name]: e.target.value });
  };

  // handle the image change
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const filesArray = Array.from(files); //?makes the files into an array
      const imagesArray = filesArray.map((file) => {
        return URL.createObjectURL(file); //?creates a url for each file
      });
      setSelectedImage(imagesArray);
      setImage(files[0]);
    }
  };

  // handle the div click
  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("nftFile", image!);
    formData.append("name", nftData.name);
    formData.append("description", nftData.description);
    setShowQRCode((prev) => !prev);
    setFormData(formData);
  };

  return (
    <main className="h-full w-full  md:inline-flex md:px-60 md:flex-col md:items-center ">
      <div className="px-6 py-8 md:py-12 md:mb-10 flex flex-col gap-5 md:gap-6">
        {/* back button */}
        <div className="flex flex-col gap-3">
          <Button
            variant={"darkgreen"}
            className="gap-2 min-w-[11rem] max-w-[12rem]"
          >
            <Icons.chevronLeft />
            Back to Previous
          </Button>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold  text-2xl md:text-[2rem] leading-10 gardient-color-green">
              Minting NFT
            </h1>
            <span className="text-base md:text-xl text-content_Grey">
              Create new Items
            </span>
          </div>
        </div>
        {/* nft upload component */}
        <div className="flex flex-col gap-3">
          <h2 className="text-white text-base md:text-xl font-medium">
            Image, Video, Audio, or 3D Model{" "}
            <span className="text-red-600">*</span>
          </h2>
          <p className="text-base text-content_Grey">
            FIle types supported: JPG, PNG, GIF, MP4, WEBM, GLB,GLTF.
          </p>

          <div>
            {selectedImage.length > 0 ? (
              <div className="flex gap-4 md:gap-6 w-full md:w-[50vw] overflow-x-scroll scrollbar-thin scrollbar-track-content_Grey  scrollbar-thumb-green ">
                {selectedImage.map((image, i) => {
                  return (
                    <div
                      key={i}
                      className="w-full max-w-[20rem] shrink-0 relative py-1"
                    >
                      <Image
                        src={image}
                        alt="Selected"
                        width="0"
                        height="0"
                        quality={80}
                        className=" w-full max-h-[18.5rem] object-cover rounded-lg"
                      />
                      <button
                        className="absolute top-2 right-1 bg-white opacity-25 rounded-full p-1 hover:scale-110 hover:opacity-100 transition-all"
                        onClick={() =>
                          setSelectedImage(
                            selectedImage.filter((item) => item !== image)
                          )
                        }
                      >
                        <Icons.X className="h-6 w-6 text-black " />
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div
                className="w-full bg-box  md:max-w-[20rem] rounded-lg"
                onClick={handleClick}
              >
                <div className="text-content_Grey px-6 py-[4.5rem] md:py-24 flex flex-col gap-4 md:gap-6 items-center">
                  <Icons.nft className="h-10 w-10 md:h-14 md:w-14" />
                  <h2 className="text-placeholder  text-sm md:text-base">
                    Drag file or click to upload
                  </h2>
                </div>
              </div>
            )}

            <input
              type="file"
              accept="image/x-png,image/gif,image/jpeg"
              multiple
              ref={inputRef}
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
        </div>
        {/* name */}
        <div className="flex flex-col gap-3">
          <h2 className="text-white text-base md:text-xl font-medium">
            Name <span className="text-red-600">*</span>
          </h2>
          <Input placeholder="Item name" onChange={handleChange} name="name" />
        </div>
        {/* description */}
        <div className="flex flex-col gap-3">
          <div className="gap-2 flex flex-col">
            <h2 className="text-white text-base md:text-xl font-medium">
              Descriptions <span className="text-red-600">*</span>
            </h2>
            <p className="text-content_Grey text-base">
              The description will be included on the item&apos;s detail page
              underneath its image.{" "}
              <span className="gardient-color-green font-semibold">
                Markdown
              </span>{" "}
              syntax is supported.
            </p>
          </div>

          <textarea
            placeholder="Item description"
            onChange={handleChange}
            name="description"
            className="bg-box px-4 py-[0.63rem] md:py-3 md:px-6   border-none outline-none rounded-lg w-full h-36 resize-none text-white"
          />
        </div>
        {/* external link */}
        <div className="flex flex-col gap-3">
          <h2 className="text-white text-base md:text-xl font-medium">
            External Link
          </h2>
          <Input placeholder="https://yournftsite.io/items/nft-1" />
        </div>
        {/* collection */}
        <div className="flex flex-col gap-3">
          <h2 className="text-white text-base md:text-xl font-medium">
            Collection
          </h2>
          <select
            name=""
            id=""
            className="w-full bg-box text-white border-none rounded-lg px-4 py-[0.63rem] md:py-3 md:px-6  active:outline-none "
          >
            <option value="">Select Collection</option>
          </select>
        </div>
        {/* royalties */}
        <div className="flex flex-col gap-3">
          <h2 className="text-white text-base md:text-xl font-medium">
            Royalties
          </h2>
          <Input
            type="number"
            placeholder="Ex: 10"
            min="0"
            max="100"
            className="max-w-[10rem]  "
          />
        </div>
        {/* launching time */}
        <div className="flex flex-col gap-3">
          <h2 className="text-white text-base md:text-xl font-medium">
            Launching time
          </h2>
          <DatePicker
            selected={startDate}
            className="bg-box px-4 py-[0.63rem] md:py-3 md:px-6  border-none outline-none rounded-lg text-white"
            onChange={(date) => setStartDate(date)}
          />
        </div>
        {/* unlockable content */}
        <div className="flex gap-4">
          <Icons.unlock className="h-8 w-8 text-content_Grey shrink-0" />
          <div className="flex flex-col gap-2 w-full">
            <h2 className="text-white text-base md:text-xl font-medium ">
              Unlockable Content
            </h2>
            <p className="text-content_Grey ">
              Include unlockable content that can only be revealed by the other
              of the item.
            </p>
          </div>
          <input
            type="checkbox"
            className="bg-box h-9 w-9 md:h-10 md:w-10 rounded-lg outline-none"
          />
        </div>
        {/* explicit & sensitive content */}
        <div className="flex gap-3">
          <Icons.alert className="h-8 w-8 text-content_Grey shrink-0" />
          <h2 className="text-white  text-base md:text-xl font-medium w-full">
            Explicit & sensitive content{" "}
          </h2>
          <input
            type="checkbox"
            className="bg-box h-9 w-9 md:h-10 md:w-10  rounded-lg outline-none"
          />
        </div>
        {/* supply */}
        <div className="flex flex-col gap-3">
          <h2 className="text-white text-base md:text-xl font-medium">
            Supply
          </h2>
          <Input />
        </div>
        {/* buttons */}
        <div className="gap-6 flex w-full md:justify-end flex-1">
          <Button variant={"darkgreen"} className="w-full md:w-fit ">
            Preview
          </Button>
          <Button className="w-full md:w-fit" onClick={handleSubmit}>
            Minting Now
          </Button>
        </div>
      </div>
      {/* qr code */}
      {showQRCode && (
        <QrPopUpModal
          endpoint="/v1/nfts/mint"
          method="POST"
          data={formData}
          onClose={() => setShowQRCode((prev) => !prev)}
          socketChannel="nftMinted"
        />
      )}
    </main>
  );
};

export default Page;
