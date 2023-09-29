"use client";
import { FC, useState } from "react";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { Icons } from "@/components/ui/Icons";
import Link from "next/link";
import QrPopUpModal from "@/components/QrPopUpModal";
interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const [connectWallet, setConnectWallet] = useState<boolean>(false);
  const router = useRouter();

  const AuthLogin = (provider: string) => {
    window.open(
      `${process.env.NEXT_PUBLIC_SERVERURL}/v1/auth/${provider}`,
      "_self"
    );
  };

  return (
    <main className="w-full h-full  flex flex-col justify-center md:items-center gap-4 px-6 mt-10 md:mt-0 ">
      <div className="flex flex-col gap-4 w-full max-w-[25.5rem] ">
        <h1 className="gardient-color-green text-[2rem] font-semibold">
          Connect Wallet or Sign Up
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
        </div>

        {/* seperator */}
        <div className="flex items-center ">
          <div className="w-full h-[1px] bg-content_Grey" />
          <span className="text-content_Grey px-2">OR</span>
          <div className="w-full h-[1px] bg-content_Grey" />
        </div>

        {/* anonymous user*/}
        <div className=" flex flex-col gap-5">
          <Button
            className=" w-full"
            onClick={() => setConnectWallet((prev) => !prev)}
          >
            Continue with Xumm
          </Button>

          <h1 className="text-content_Grey">
            Already have an account?{" "}
            <span
              onClick={() => router.push("/sign-in")}
              className="text-green ml-2 cursor-pointer"
            >
              Login here
            </span>
          </h1>
        </div>
      </div>
      {connectWallet && (
        <QrPopUpModal
          onClose={() => setConnectWallet(false)}
          endpoint={"/v1/auth/xumm"}
          method={"POST"}
          socketChannel={"accountCreated"}
        />
      )}
    </main>
  );
};

export default Page;
