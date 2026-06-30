import Image, { StaticImageData } from "next/image";

import carretDown from "@/public/images/icon-chevron-down.svg";

interface exchangeProps {
  flag: StaticImageData;
  amount: number;
  type: string;
  code: string;
}
export default function ExchangeContainer({
  flag,
  amount,
  type,
  code,
}: exchangeProps) {
  return (
    <div className="bg-neutral-600 p-4 xl:p-5 rounded-16 border border-neutral-500 flex flex-col gap-4 xl:gap-5 md:w-73 xl:w-112.5">
      <p className="uppercase text-neutral-100 text-sm">{type}</p>
      <div className="flex justify-between xl:items-center xl:h-10.25">
        <p
          className={`${type === "receive" ? "text-lime-500" : "text-neutral-50"}  text-[32px] xl:text-[40px]`}
        >
          {amount}
        </p>
        <div className="rounded-8 p-2.5 bg-neutral-500 border border-neutral-400 flex gap-2 items-center xl:w-24 xl:h-10">
          <span>
            <Image
              src={flag}
              width={20}
              height={20}
              alt="country flag"
              className="rounded-full"
            />
          </span>
          <span className="uppercase tracking-[1px] text-sm">{code}</span>
          <span className="w-3 h-3">
            <Image src={carretDown} width={20} height={20} alt="carret down" />
          </span>
        </div>
      </div>
    </div>
  );
}
