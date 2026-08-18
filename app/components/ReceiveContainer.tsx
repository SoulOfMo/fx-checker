import Image from 'next/image';

import carretDown from '@/public/images/icon-chevron-down.svg';
import cleanCountryCode from '../libs/cleanCountryCode';
import { useDropdown } from '../hooks/useDropdown';
import CurrencyPicker from './CurrencyPicker';
import { useFxCheckerContext } from '../providers/FxCheckerProvider';

export default function ReceiveContainer({
  convertedValue,
}: {
  convertedValue: number;
}) {
  const { receiveCurrency, setReceiveCurrency } = useFxCheckerContext();

  function changeReceiveCurrency(value: string) {
    setReceiveCurrency(value);
  }

  const twoLetterCode = cleanCountryCode(receiveCurrency);
  const { open, setOpen, ref } = useDropdown<HTMLDivElement>();

  function toggle() {
    setOpen((prev) => !prev);
  }

  return (
    <div
      ref={ref}
      className="rounded-16 relative flex flex-col gap-4 border border-neutral-500 bg-neutral-600 p-4 md:w-73 md:p-5 xl:w-112.5 xl:gap-6 xl:p-5"
    >
      <p className="text-sm text-neutral-100 uppercase">receive</p>
      <div className="flex justify-between xl:h-10.25 xl:items-center">
        <span
          className={` ${convertedValue === 0 ? 'text-neutral-200' : 'text-lime-500'} text-sm text-[32px] tracking-normal uppercase focus:outline-0 xl:text-[40px]`}
        >
          {convertedValue ? convertedValue.toFixed(2) : '0'}
        </span>

        <button
          onClick={() => toggle()}
          className="rounded-8 .recieved flex items-center gap-2 border border-neutral-400 bg-neutral-500 p-2.5 xl:h-10 xl:w-24"
        >
          <span className="relative h-5 w-5 overflow-hidden rounded-full">
            <Image
              src={`https://flagcdn.com/w40/${twoLetterCode}.png`}
              fill
              sizes="20px"
              alt="country flag"
            />
          </span>
          <span className={`text-sm tracking-normal uppercase`}>
            {receiveCurrency}
          </span>
          <span className="h-3 w-3">
            <Image src={carretDown} width={20} height={20} alt="carret down" />
          </span>
        </button>
      </div>

      {open && (
        <CurrencyPicker
          currency={receiveCurrency}
          changeCurrency={changeReceiveCurrency}
          setOpen={setOpen}
        />
      )}
    </div>
  );
}
