import Image from "next/image";

import arrowRight from "@/public/images/icon-arrow-right.svg";
import deleteIcon from "@/public/images/icon-delete.svg";

import { LogProps } from "@/types/fx";

export default function Log({
  fromCode,
  toCode,
  amountFrom,
  amountTo,
}: LogProps) {
  return (
    <div className="p-3 sm:px-4 rounded-10 bg-neutral-600 border border-neutral-500 flex items-center justify-between gap-2.5">
      {/*pairs*/}
      <div className=" flex flex-col sm:flex-row sm:items-center sm:gap-4 h-8.5">
        <span className="uppercase text-sm text-neutral-200 sm:w-16 ">20m</span>
        <div className="flex text-sm gap-2 uppercase items-center h-4.25">
          <span className="tracking-normal text-neutral-50">{fromCode}</span>
          <span>
            <Image
              src={arrowRight}
              alt="arrow right"
              width={10.49}
              height={10.37}
            />
          </span>
          <span className="tracking-normal text-neutral-50">{toCode}</span>
        </div>
      </div>

      {/* RATE */}
      <div className="flex items-center gap-2.5 sm:gap-5">
        <div className=" flex flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-5 items-end h-10">
          <span className="h-4.75 tracking-normal text-neutral-100 text-normal">
            {amountFrom.toFixed(2)}
          </span>
          <span
            className={`h-4.75 tracking-normal text-lime-500 text-normal item-end`}
          >
            {Math.abs(amountTo).toFixed(2)}
          </span>
        </div>

        <div className="h-8 w-8 border border-neutral-500 rounded-8 flex items-center justify-center">
          <Image src={deleteIcon} alt="delete icon" width={16} height={16} />
        </div>
      </div>
    </div>
  );
}
