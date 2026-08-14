import Image from "next/image";

import arrowRight from "@/public/images/icon-arrow-right.svg";
import StarIcon from "../../components/StarIcon";
import { FavPairProps } from "@/types/fx";

export default function FavPair({
  fromCode,
  toCode,
  rate,
  change,
}: FavPairProps) {
  return (
    <div className="p-3 sm:px-4 rounded-10 bg-neutral-600 border border-neutral-500 flex items-center justify-between gap-2.5">
      {/*pairs*/}

      <div className="flex text-sm gap-2 uppercase items-center h-4.25">
        <span className=" tracking-normal text-neutral-50">{fromCode}</span>
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

      {/* RATE */}
      <div className="flex items-center gap-2.5 sm:gap-5">
        <div className=" flex flex-col gap-1.5 items-end">
          <span className="h-4.75 tracking-normal text-neutral-50 text-normal">
            {rate.toFixed(2)}
          </span>
          <span
            className={`h-2.5  tracking-normal ${change > 0 ? "text-green-500" : "text-red-500"}  text-xxs item-end leading-none`}
          >
            {change > 0 ? "▲" : "▼"}
            {Math.abs(change).toFixed(2)}%
          </span>
        </div>

        <div className="h-7.5 w-7.5 border border-lime-500 rounded-8 flex items-center justify-center">
          <StarIcon className={`fill-lime-500`} />
        </div>
      </div>
    </div>
  );
}
