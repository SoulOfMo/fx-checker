import Image from 'next/image';
import { exchangeProps } from '@/types/fx';

import carretDown from '@/public/images/icon-chevron-down.svg';
import CurrencyPicker from '@/app/components/CurrencyPicker';
import cleanCountryCode from '@/app/libs/cleanCountryCode';
import { useDropdown } from '@/app/hooks/useDropdown';
import { useFxCheckerContext } from '../providers/FxCheckerProvider';

export default function SendContainer({ isPending }: exchangeProps) {
  const { amount, setAmount, sendCurrency, setSendCurrency } =
    useFxCheckerContext();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const cleanInput = e.target.value.replace(/[^0-9.]/g, '');
    setAmount(cleanInput);
  }

  function handleSendCurrency(value: string) {
    setSendCurrency(value);
  }
  const twoLetterCode = cleanCountryCode(sendCurrency);

  const { open, setOpen, ref } = useDropdown<HTMLDivElement>();

  function toggle() {
    setOpen((prev) => !prev);
  }

  return (
    <div
      ref={ref}
      className="rounded-16 relative flex flex-col gap-4 border border-neutral-500 bg-neutral-600 p-4 md:w-73 md:p-5 xl:w-112.5 xl:gap-6 xl:p-5"
    >
      <p className="text-sm text-neutral-100 uppercase">send</p>
      <div className="flex justify-between xl:h-10.25 xl:items-center">
        <input
          value={amount === '0.00' ? '0' : amount}
          type="text"
          placeholder="0"
          onChange={handleChange}
          className={`w-full text-[32px] transition-all duration-300 ease-out focus:outline-0 xl:text-[40px] ${amount === '0' ? 'text-neutral-200' : 'text-neutral-50'} ${isPending ? 'opacity-40 blur-[1px]' : 'blur-0 opacity-100'}`}
        />

        <button
          onClick={() => toggle()}
          className="rounded-8 flex w-24 items-center gap-2 border border-neutral-400 bg-neutral-500 p-2.5 xl:h-10"
        >
          <span className="relative h-5 w-5 overflow-hidden rounded-full">
            <Image
              src={`https://flagcdn.com/w40/${twoLetterCode}.png`}
              fill
              sizes="20px"
              alt="country flag"
            />
          </span>
          <span className="text-sm tracking-normal uppercase">
            {sendCurrency}
          </span>
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
