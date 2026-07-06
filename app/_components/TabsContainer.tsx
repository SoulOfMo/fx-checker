import angleDown from "@/public/images/angle-down.svg";
import Image from "next/image";

export default function TabsContainer() {
  return (
    <div>
      {/* MOBILE VERSION */}
      <div className="flex h-10 text-normal px-3 rounded-8 justify-between items-center bg-neutral-700 border border-neutral-400  sm:hidden">
        <span>History</span>
        <Image src={angleDown} width={10} height={19} alt="dropdown button" />
      </div>

      {/* DESKTOP */}
      <div className="hidden sm:flex w-full gap-2 border-b border-neutral-600">
        <button className=" uppercase border-0  sm:h-10.5 px-4 py-[10.5px] text-neutral-50 text-normal tracking-normal focus:border-b border-lime-500">
          History
        </button>
        <button className=" flex gap-2 items-center uppercase border-0 sm:h-10.5 px-4 py-[10.5px] text-neutral-50 text-normal focus:border-b border-lime-500">
          <span className="tracking-normal">FAVORITES</span>
          <span className=" flex items-center justify-center w-5 h-5 bg-lime-800 text-lime-500 text-xxs rounded-full">
            10
          </span>
        </button>
        <button className=" flex gap-2 items-center uppercase border-0 sm:h-10.5 px-4 py-[10.5px] text-neutral-50 text-normal focus:border-b border-lime-500">
          <span className="tracking-normal">log</span>
          <span className=" flex items-center justify-center w-5 h-5 bg-lime-800 text-lime-500 text-xxs rounded-full">
            5
          </span>
        </button>
      </div>
    </div>
  );
}
