"use client";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import { getUserData } from "@/lib/redux/slices/userSlice";
import { useRef } from "react";

import { AppDispatch, store, useAppSelector } from "@/lib/redux/store";
import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

interface layoutProps {
  children: ReactNode;
}

const Layout = ({ children }: layoutProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const userRef = useRef<boolean>(false);
  useEffect(() => {
    if (userRef.current == false) {
      dispatch(getUserData());
    }
    return () => {
      userRef.current = true;
    };
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col  relative bg-background">
      {/* render bg only on home page */}
      <NavBar />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
};
export default Layout;
