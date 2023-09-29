import NavBar from "@/components/layout/NavBar";
import SideBar from "@/components/layout/SideBar";
import { FC, ReactNode } from "react";
import Footer from "@/components/layout/Footer";

interface layoutProps {
  children: ReactNode;
}
const layout = ({ children }: layoutProps) => {
  return (
    <div className="flex flex-col w-full bg-background">
      <NavBar />
      <div className="min-h-screen w-full flex">
        <SideBar />
        <div className="w-full">{children}</div>
      </div>
      <Footer />
    </div>
  );
};
export default layout;
