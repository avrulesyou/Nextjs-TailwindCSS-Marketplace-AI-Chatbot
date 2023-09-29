"use client";
import { FC, useState } from "react";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { Icons } from "@/components/ui/Icons";
import socket from "@/lib/socket";

import { QRCode } from "react-qrcode-logo";
import { isDesktop, isMobile } from "react-device-detect";
import logo from "@/assets/xrp-boys.svg";

import QrPopUpModal from "@/components/QrPopUpModal";
import { toast } from "react-hot-toast";

interface pageProps {}

const makeapikey = async () => {};

const Page: FC<pageProps> = ({}) => {
  const [connectWallet, setConnectWallet] = useState(false);
  const [qrcode, setQrcode] = useState("");
  const router = useRouter();

  const AuthLogin = (provider: string) => {
    window.open(
      `${process.env.NEXT_PUBLIC_SERVERURL}/v1/auth/${provider}`,
      "_self"
    );
  };

  const handleClick = () => {
    setConnectWallet(true);
  };
  return (
    <main className="w-full h-full  flex flex-col justify-center items-center gap-4 px-6 mt-10 md:mt-0 ">
      <div className="flex flex-col gap-4 w-full max-w-[25.5rem] ">
        <h1 className="gardient-color-green text-[2rem] font-semibold">
          Sign In
        </h1>

        {/* button container */}
        <div className="flex flex-col gap-[0.9rem] md:gap-4 ">
          <Button
            variant={"transparent"}
            className="bg-[#1DA1F2] gap-2 text-white"
            onClick={() => AuthLogin("twitter")}
          >
            <Icons.twitter className="h-6 w-6" />
            Continue with Twitter
          </Button>
          <Button
            variant={"transparent"}
            className="bg-[#5865F2]  gap-2 text-white"
            onClick={() => AuthLogin("discord")}
          >
            <Icons.discord className="h-6 w-6" />
            Continue with Discord
          </Button>
          <Button
            // isLoading={true}
            variant={"transparent"}
            className="bg-box text-white gap-2"
            onClick={() => AuthLogin("google")}
          >
            <Icons.google className="h-6 w-6" />
            Continue with Google
          </Button>
          <Button onClick={() => router.push("/passkeys")} className="gap-2">
            <Icons.key className=" h-6 w-6" />
            Continue with Passkeys
          </Button>
        </div>

        {/* seperator */}
        <div className="flex items-center ">
          <div className="w-full h-[1px] bg-content_Grey" />
          <span className="text-content_Grey px-2">OR</span>
          <div className="w-full h-[1px] bg-content_Grey" />
        </div>

        {/* anonymous user*/}
        <div className=" flex flex-col gap-5">
          <Button onClick={handleClick} className=" w-full">
            Continue with Xumm
          </Button>

          <div className="text-content_Grey">
            Don&apos;t have an account yet?{" "}
            <span
              onClick={() => router.push("/sign-up")}
              className="text-green ml-2 cursor-pointer"
            >
              Register here
            </span>
          </div>
        </div>
      </div>

      {/* popup modal for qrcode */}
      {connectWallet && (
        <QrPopUpModal
          onClose={() => setConnectWallet(false)}
          endpoint={"/v1/auth/xumm"}
          method={"POST"}
          socketChannel="accountCreated"
        />
      )}
    </main>
  );
};
export default Page;
