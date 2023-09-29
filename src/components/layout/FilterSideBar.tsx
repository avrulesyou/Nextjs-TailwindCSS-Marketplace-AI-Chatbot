"use client";
import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Icons } from "../ui/Icons";
import { LuSearch } from "react-icons/lu";
import Button from "../ui/Button";

const CollectionsConfig = [
  {
    name: "The Digital Art",
    total: "2098",
  },
  {
    name: "Crypto Beats",
    total: "2098",
  },
  {
    name: "Reality Beyond",
    total: "2098",
  },
  {
    name: "Cosmic Journey",
    total: "2098",
  },
  {
    name: "Nature’s Symphony",
    total: "2098",
  },
];

const statusConfig = [
  {
    name: "On Sale",
  },
  {
    name: "Bundles",
  },
  {
    name: "Offers",
  },
];

const categoryConfig = [
  {
    name: "Art",
  },
  {
    name: "Virtual Reality",
  },
  {
    name: "Rare Virtual Items",
  },
  {
    name: "Gaming",
  },
  {
    name: "Sport Collection",
  },
];

const FilterSideBar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className=" hidden  md:flex flex-col items-start justify-start gap-5 text-left text-2xl text-white font-inter">
      <div className=" flex items-center justify-start gap-2">
        <Icons.filter className="h-6 w-6 text-green" />
        <h1 className="font-semibold">Filter</h1>
      </div>
      <div className="flex flex-col items-start justify-start gap-8 text-xl  ">
        {/* collection */}
        <div
          className={`flex flex-col items-start justify-start gap-3  h-full ${
            !open && "h-8 overflow-hidden"
          }`}
        >
          <div className="w-[11.5rem] flex flex-row items-center justify-start gap-[0.5rem]">
            <h1 className="flex-1 relative -tracking-wide leading-[1.88rem] font-semibold">
              Collections
            </h1>
            <Icons.minus
              className="cursor-pointer"
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-3 text-base">
            <div className=" relative  ">
              <input
                placeholder="Search..."
                className=" rounded-lg bg-box box-border w-[11.5rem] py-2 pl-6 pr-9 focus:outline-none placeholder:text-gray-400"
              ></input>
              <LuSearch className=" h-6 w-6 shrink-0 absolute right-0 top-1/4  z-10  md:mx-2  text-green-700 " />
            </div>
            {CollectionsConfig.map((item, i) => {
              return (
                <div
                  key={i}
                  className="self-stretch flex flex-row items-center justify-start gap-[0.63rem]"
                >
                  <input
                    type="checkbox"
                    className="w-9 h-9 bg-box rounded-lg checked:bg-green hover:bg-green"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start gap-1">
                    <h2 className="self-stretch relative -tracking-wide ">
                      {item.name}
                    </h2>
                    <span className="self-stretch relative text-xs tracking-[-0.02em] text-placeholder">
                      {item.total}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* status */}
        <div className="flex flex-col items-start justify-start gap-3">
          <div className="w-[11.5rem] flex flex-row items-center justify-start gap-2">
            <div className="flex-1 relative -tracking-wide leading-[1.88rem] font-semibold">
              Status
            </div>
            <Icons.minus
              className="cursor-pointer"
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-3 text-base">
            {statusConfig.map((item, i) => {
              return (
                <div
                  key={i}
                  className="self-stretch flex flex-row items-center justify-start gap-[0.63rem]"
                >
                  <input
                    type="checkbox"
                    className="w-9 h-9 bg-box rounded-lg checked:bg-green hover:bg-green"
                  />
                  <h1 className=" -tracking-wide leading-6 w-[8.63rem] shrink-0">
                    {item.name}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>

        {/* price */}
        <div className="flex flex-col items-start justify-start gap-3">
          <div className="w-[11.5rem] flex flex-row items-center justify-start gap-2">
            <h1 className="flex-1 relative tracking-wide leading-[1.88rem] font-semibold">
              Price
            </h1>
            <Icons.minus className="cursor-pointer" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-3 text-center text-sm text-placeholder">
            <div className=" flex flex-row items-center justify-start gap-2">
              <input
                type="text"
                placeholder="MIN"
                className="rounded-lg bg-box flex w-14 flex-row py-[0.5rem] px-1 items-center justify-start border-[1px] border-solid border-line"
              />
              <h3 className=" text-base -tracking-wide text-white ">to</h3>
              <input
                type="text"
                placeholder="MAX"
                className="rounded-lg bg-box flex w-14 flex-row py-[0.5rem] px-1 items-center justify-start border-[1px] border-solid border-line"
              />
              <h2 className=" text-base -tracking-wide font-medium text-white ">
                XRP
              </h2>
            </div>
            <Button className="self-stretch -tracking-wide leading-5 font-semibold">
              Apply
            </Button>
          </div>
        </div>

        {/* category */}
        <div className="flex flex-col items-start justify-start gap-3">
          <div className="w-[11.5rem] flex flex-row items-center justify-start gap-2">
            <h1 className="flex-1  tracking-wide leading-[1.88rem] font-semibold">
              Category
            </h1>
            <Icons.minus className="cursor-pointer" />
          </div>
          <div className="flex flex-col items-start justify-start gap-3 text-base">
            {categoryConfig.map((item, i) => {
              return (
                <div
                  key={i}
                  className="self-stretch flex flex-row items-center justify-start gap-[0.63rem]"
                >
                  <input type="checkbox" className="w-9 h-9 bg-transparent" />
                  <div className=" tracking-wide  inline-block w-[8.63rem] shrink-0">
                    {item.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    // <Transition.Root show={open} as={Fragment}>
    //   <Dialog as="div" className="relative z-10" onClose={setOpen}>
    //     <Transition.Child
    //       as={Fragment}
    //       enter="ease-in-out duration-500"
    //       enterFrom="opacity-0"
    //       enterTo="opacity-100"
    //       leave="ease-in-out duration-500"
    //       leaveFrom="opacity-100"
    //       leaveTo="opacity-0"
    //     >
    //       <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
    //     </Transition.Child>

    //     <div className="fixed inset-0 overflow-hidden">
    //       <div className="absolute inset-0 overflow-hidden">
    //         <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
    //           <Transition.Child
    //             as={Fragment}
    //             enter="transform transition ease-in-out duration-500 sm:duration-700"
    //             enterFrom="translate-x-full"
    //             enterTo="translate-x-0"
    //             leave="transform transition ease-in-out duration-500 sm:duration-700"
    //             leaveFrom="translate-x-0"
    //             leaveTo="translate-x-full"
    //           >
    //             <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
    //               <Transition.Child
    //                 as={Fragment}
    //                 enter="ease-in-out duration-500"
    //                 enterFrom="opacity-0"
    //                 enterTo="opacity-100"
    //                 leave="ease-in-out duration-500"
    //                 leaveFrom="opacity-100"
    //                 leaveTo="opacity-0"
    //               >
    //                 <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
    //                   <button
    //                     type="button"
    //                     className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
    //                     onClick={() => setOpen(false)}
    //                   >
    //                     <span className="sr-only">Close panel</span>
    //                     <Icons.close className="h-6 w-6" aria-hidden="true" />
    //                   </button>
    //                 </div>
    //               </Transition.Child>
    //               <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
    //                 <div className="px-4 sm:px-6">
    //                   <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
    //                     Panel title
    //                   </Dialog.Title>
    //                 </div>
    //                 <div className="relative mt-6 flex-1 px-4 sm:px-6">
    //                   {/* Your content */}
    //                 </div>
    //               </div>
    //             </Dialog.Panel>
    //           </Transition.Child>
    //         </div>
    //       </div>
    //     </div>
    //   </Dialog>
    // </Transition.Root>
  );
};

export default FilterSideBar;
