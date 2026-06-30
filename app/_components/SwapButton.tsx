import Image from "next/image";

import swapIconVertical from "@/public/images/icon-exchange-vertical.svg";

import swapIconHorizontal from "@/public/images/icon-exchange.svg";

export default function SwapButton() {
  return (
    <div className="w-12 h-12 my-4 mx-auto md:mx-0 bg-neutral-600 border border-neutral-500 rounded-8 flex justify-center items-center">
      <Image
        src={swapIconVertical}
        className=" block sm:hidden"
        height={20}
        width={20}
        alt="swap currency"
      />

      <Image
        src={swapIconHorizontal}
        className="hidden sm:block"
        height={20}
        width={20}
        alt="swap currency"
      />
    </div>
  );
}
