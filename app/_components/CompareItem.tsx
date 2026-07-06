import Image from "next/image";
import USAflag from "@/public/images/flags/us.webp";
import StarIcon from "./StarIcon";

export default function CompareItem() {
  return (
    <div className="p-3 sm:px-4 rounded-10 bg-neutral-600 border border-neutral-500 flex items-center justify-between gap-2.5">
      {/* flag & code */}
      <div className="flex items-center gap-2.5 sm:gap-5">
        <span>
          <Image
            src={USAflag}
            width={24}
            height={24}
            alt="country flag"
            className="rounded-full"
          />
        </span>

        <div className="flex flex-col gap-1.5">
          <span className="uppercase text-sm tracking-normal text-neutral-50 h-4.25">
            USA
          </span>
          <span className="text-neutral-200 text-xs tracking-small h-3.5">
            Dollar
          </span>
        </div>
      </div>

      {/* RATE */}
      <div className="flex items-center gap-2.5 sm:gap-5">
        <div className=" flex flex-col gap-1.5 items-end">
          <span className="h-4.75 tracking-normal text-neutral-50 text-normal">
            736.45
          </span>
          <span className="h-2.5 tracking-normal text-neutral-200 text-xxs item-end">
            @ 0.7366
          </span>
        </div>

        <div className="h-7.5 w-7.5 border hover:border-lime-500 rounded-8 flex items-center justify-center">
          <StarIcon className={`fill-lime-500`} />
        </div>
      </div>
    </div>
  );
}
