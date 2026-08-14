import Image from 'next/image';
import { exchangeProps } from '@/types/fx';

import carretDown from '@/public/images/icon-chevron-down.svg';
import CurrencyPicker from '@/app/components/CurrencyPicker';
import cleanCountryCode from '@/app/libs/cleanCountryCode';
import { useDropdown } from '@/app/hooks/useDropdown';

export default function ExchangeContainer({
  type,
  code,
  sendValue,
  handleChange,
  sendCurrency,
  handleSendCurrency,
  isPending,
}: exchangeProps) {
  const twoLetterCode = cleanCountryCode(code);

  const { open, setOpen, ref } = useDropdown<HTMLDivElement>();

  function toggle() {
    setOpen((prev) => !prev);
  }

  return (
    <div
      ref={ref}
      className="rounded-16 relative flex flex-col gap-4 border border-neutral-500 bg-neutral-600 p-4 md:w-73 md:p-5 xl:w-112.5 xl:gap-6 xl:p-5"
    >
      <p className="text-sm text-neutral-100 uppercase">{type}</p>
      <div className="flex justify-between xl:h-10.25 xl:items-center">
        <input
          value={sendValue === '0.00' ? '0' : sendValue}
          type="text"
          placeholder="0"
          onChange={handleChange}
          className={`w-full text-[32px] transition-all duration-300 ease-out focus:outline-0 xl:text-[40px] ${sendValue === '0' ? 'text-neutral-200' : 'text-neutral-50'} ${isPending ? 'opacity-40 blur-[1px]' : 'blur-0 opacity-100'}`}
        />

        <button
          onClick={() => toggle()}
          className="rounded-8 flex w-24 items-center gap-2 border border-neutral-400 bg-neutral-500 p-2.5 xl:h-10"
        >
          <span className="h-5 w-5">
            <Image
              src={`https://flagcdn.com/w40/${twoLetterCode}.png`}
              width={20}
              height={80}
              alt="country flag"
              className="h-5 w-5 rounded-full object-cover"
            />
          </span>
          <span className="text-sm tracking-normal uppercase">{code}</span>
          <span className="h-3 w-3">
            <Image src={carretDown} width={20} height={20} alt="carret down" />
          </span>
        </button>
      </div>

      {open && (
        <CurrencyPicker
          currency={sendCurrency}
          changeCurrency={handleSendCurrency}
          setOpen={setOpen}
        />
      )}
    </div>
  );
}
