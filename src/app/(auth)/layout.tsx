import Image from "next/image";
import { FC, ReactNode } from "react";

import authBg from "@/assets/ath-bg.png";
import logo from "@/assets/xrp-boys.svg";

interface layoutProps {
  children: ReactNode;
}

const layout: FC<layoutProps> = async ({ children }) => {
  return (
    <main className="h-[100svh] w-full  flex flex-col md:flex-row bg-background">
      {/* left side */}
      <div className="relative  flex items-center justify-center w-full md:w-1/2">
        <Image
          src={authBg}
          alt="authBg"
          className="  max-h-[8.563rem] md:max-h-screen object-cover"
        />
        <div className="text-white absolute">
          <Image src={logo} alt="logo" />
        </div>
      </div>
      <div className=" w-full  md:w-1/2">{children}</div>
    </main>
  );
};

export default layout;
