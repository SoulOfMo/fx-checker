import Image from 'next/image';
import { CompareItemProps } from '@/types/fx';
import StarIcon from '../../components/StarIcon';
import cleanCountryCode from '@/app/libs/cleanCountryCode';

export default function CompareItem({
  rate,
  quote,
  name,
  amount,
}: CompareItemProps) {
  const twoLetterCode = cleanCountryCode(quote);

  return (
    <div className="rounded-10 flex items-center justify-between gap-2.5 border border-neutral-500 bg-neutral-600 p-3 sm:px-4">
      {/* flag & code */}
      <div className="flex items-center gap-2.5 sm:gap-5">
        <span className="relative h-5 w-5 overflow-hidden rounded-full">
          <Image
            src={`https://flagcdn.com/w40/${twoLetterCode}.png`}
            fill
            sizes="20px"
            loading="lazy"

            alt="country icon"
          />
        </span>
        <div className="flex flex-col gap-1.5">
          <span className="h-4.25 text-sm tracking-normal text-neutral-50 uppercase">
            {quote}
          </span>
          <span className="tracking-small h-3.5 text-xs text-neutral-200">
            {name}
          </span>
        </div>
      </div>

      {/* RATE */}
      <div className="flex items-center gap-2.5 sm:gap-5">
        <div className="flex flex-col items-end gap-1.5">
          <span className="text-normal h-4.75 tracking-normal text-neutral-50">
            {amount.toFixed(2)}
          </span>
          <span className="text-xxs item-end h-2.5 tracking-normal text-neutral-200">
            @ {rate.toFixed(4)}
          </span>
        </div>

        <div className="rounded-8 flex h-7.5 w-7.5 items-center justify-center border hover:border-lime-500">
          <StarIcon className={`fill-lime-500`} />
        </div>
      </div>
    </div>
  );
}
