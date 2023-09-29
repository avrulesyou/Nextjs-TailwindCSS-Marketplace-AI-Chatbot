// "use client";
// import "@corbado/webcomponent/pkg/auth_cui.css";
// import { useEffect, useState } from "react";

export default function Home() {
  // const [session, setSession] = useState(null);

  // useEffect(() => {
  //   // This will run only on client-side
  //   import("@corbado/webcomponent")
  //     .then((module) => {
  //       const Corbado = module.default || module;
  //       setSession(new Corbado.Session(process.env.NEXT_PUBLIC_PROJECT_ID));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // useEffect(() => {
  //   // Refresh the session whenever it changes
  //   if (session) {
  //     // @ts-ignore
  //     session.refresh(() => {});
  //   }
  // }, [session]);
  return (
    // <div className="min-h-screen w-full bg-background relative flex flex-col">
    //   <div className="h-72 w-72 absolute rounded-full animate-breath top-1/2 bg-green right-8" />
    //   <div className="absolute bg-background backdrop-blur-xl h-full z-10 w-full bg-opacity-60" />
    // </div>
    <div className="">
      {/* <div className="flex whitespace-nowrap gap-10 w-1/3 overflow-scroll">
        <div className="h-20 w-20 bg-green" />
        <div className="h-20 w-20 bg-green" />
        <div className="h-20 w-20 bg-green" />
        <div className="h-20 w-20 bg-green" />
        <div className="h-20 w-20 bg-green" />
        <div className="h-20 w-20 bg-green" />
        <div className="h-20 w-20 bg-green" />
        <div className="h-20 w-20 bg-green" />
        <div className="h-20 w-20 bg-green" />
      </div> */}
    </div>
  );
}
