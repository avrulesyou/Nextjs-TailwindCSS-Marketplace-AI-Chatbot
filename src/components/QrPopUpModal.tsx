"use client";
import { FC, useEffect, useState } from "react";
import { QRCode } from "react-qrcode-logo";
import socket from "@/lib/socket";
// images
import xummLogo from "@/assets/xumm-logo.png";
import playStore from "@/assets/play-store.png";
import appleStore from "@/assets/apple-store.png";
import Image from "next/image";
import { Icons } from "./ui/Icons";
import { isDesktop, isMobile } from "react-device-detect";
import { redirect, useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { makeApiCall, nftMintApiCall } from "@/helpers/apiCall";
import { v4 } from "uuid";

interface QrPopUpModal {
  endpoint: string;
  data?: any; //! need to fix this before production
  method: string;
  onClose: () => void;
  socketChannel: "accountCreated" | "nftMinted";
}

const QrPopUpModal: FC<QrPopUpModal> = ({
  onClose,
  endpoint,
  data,
  method,
  socketChannel,
}) => {
  const [qrcode, setQrcode] = useState("");
  const router = useRouter();
  const [showBarCode, setShowBarCode] = useState<boolean>(false);
  console.log(endpoint, data, method, socketChannel);
  useEffect(() => {
    const connectWallet = () => {
      try {
        const id = v4();
        if (socketChannel == "nftMinted") {
          nftMintApiCall(endpoint, data, id).then((data) => {
            if (isDesktop) {
              socket.on(`${socketChannel}-${id}`, (data) => {
                if (data.status === "failed") {
                  toast.error(data.message);
                } else if (data.status == "success") {
                  toast.success("NFT minted successfully");
                  setTimeout(() => {
                    router.push("/");
                  }, 0);
                }
              });
              setQrcode(data.url);
              setShowBarCode(true);
            } else if (isMobile) {
              router.push(data.url);
            }
          });
        } else {
          makeApiCall(endpoint, id, method, data).then((data) => {
            if (isDesktop) {
              socket.on(`${socketChannel}-${id}`, (data) => {
                if (data.status === "failed") {
                  toast.error(data.message);
                } else if (data.status == "success") {
                  toast.success("Wallet connected successfully");
                  setTimeout(() => {
                    router.push("/home");
                  }, 0);
                }
              });
              setQrcode(data.url);
              setShowBarCode(true);
            } else if (isMobile) {
              router.push(data.url);
            }
          });
        }
      } catch (error) {
        console.error("Error connecting the wallet:", error);
      }
    };
    connectWallet();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("toekn")) {
      router.push("/home");
    }
  }, []);

  console.log(qrcode);
  return (
    <main className="fixed inset-0 bg-dark bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-900 rounded-lg shadow-lg max-w-[19.5rem] md:max-w-[25.5rem] w-full">
        <div className="w-full px-4 py-6 md:px-6 md:py-8 flex flex-col gap-6">
          {/* top section */}
          <section className="flex w-full items-center">
            <div className=" flex items-center gap-2 mx-auto">
              <h1 className="text-xl md:text-2xl leading-9 gardient-color-green font-semibold ">
                Continue with
              </h1>
              <Image
                src={xummLogo}
                alt="xummLogo"
                className="max-w-[5.8rem] h-4"
              />
            </div>

            <Icons.X
              className="h-6 w-6 cursor-pointer text-white"
              onClick={onClose}
            />
          </section>

          {/* middle section */}
          <section className="w-full">
            {showBarCode ? (
              <div>
                <div className="hidden md:flex">
                  <QRCode value={qrcode} quietZone={10} size={340} />
                </div>
                <div className="flex md:hidden">
                  <div className="flex items-center justify-center w-full min-h-[calc(100vh-12rem)] md:min-h-screen   ">
                    <Icons.loader className="animate-spin h-20 w-20  text-white" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center w-full  md:min-h-screen   ">
                <Icons.loader className="animate-spin h-20 w-20  text-white" />
              </div>
            )}
          </section>

          {/* bottom section */}
          <section className=" flex flex-col items-center gap-3">
            <div className="flex items-center gap-1 ">
              <h1 className="text-base text-content_Grey">Download</h1>
              <Image
                src={xummLogo}
                alt="xummLogo"
                className="max-w-[4.7rem] h-3"
              />
            </div>
            <div className="flex gap-3 md:gap-4 items-center">
              <Image
                src={appleStore}
                alt="appleStore"
                className="max-w-[8.3rem] md:max-w-[10.75rem]"
              />
              <Image
                src={playStore}
                alt="playStore"
                className="max-w-[8.3rem] md:max-w-[10.75rem]"
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default QrPopUpModal;
