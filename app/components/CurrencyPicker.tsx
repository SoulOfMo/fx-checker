'use client';

import searchIcon from '@/public/images/icon-search.svg';
import Image from 'next/image';
import useCurrencies from '../hooks/useCurrencies';
import CurrencyItem from '../components/CurrencyItem';
import CurrenciesGroup from '../components/CurrenciesGroup';

interface CurrencyPickerProps {
  changeCurrency: (value: string) => void;
  currency: string;
  setOpen: (arg0: boolean) => void;
  pos?: string;
}

export default function CurrencyPicker({
  changeCurrency,
  currency,
  setOpen,
}: CurrencyPickerProps) {
  const { isPending, data: currencyGroup } = useCurrencies();

  if (isPending) {
    return (
      <div className="rounded-8 absolute top-28 right-0 flex h-114.5 w-77.75 items-center justify-center border border-neutral-400 bg-neutral-600 text-xs text-neutral-200 shadow-[0_20px_60px_rgba(10,10,10,0.5)]">
        Loading currencies...
      </div>
    );
  }

  return (
    <div className="rounded-8 :h-114.5 absolute top-28 right-0 z-30 flex w-94 flex-col gap-2.5 border border-neutral-400 bg-neutral-600 px-2 pt-2 shadow-[0_20px_60px_rgba(10,10,10,0.5)]">
      {/* Search Container */}
      <div className="flex items-center gap-2.5 rounded-md border border-neutral-200 p-3">
        <span className="flex h-5 w-3.75 items-center justify-center">
          <Image src={searchIcon} width={16} height={16} alt="search icon" />
        </span>
        <input
          type="text"
          className="w-full bg-transparent text-xs text-neutral-50 placeholder-neutral-400 outline-0"
          placeholder="Search currencies..."
        />
      </div>

      {/* Currencies Layout Wrapper Track */}
      <div className="flex h-98.5 flex-col gap-1 overflow-hidden">
        {/* Popular Currency Section Header check (CHECK THE FIGMA FILE) */}
        <div className="flex justify-between gap-2.5 border-b border-neutral-500 py-2 text-xs font-medium text-neutral-200">
          <span className="tracking-wider uppercase">Popular</span>
          <span>{currencyGroup?.popular?.length ?? 0}</span>
        </div>

        {/* Popular List Container */}

        <CurrenciesGroup
          changeCurrency={changeCurrency}
          setOpen={setOpen}
          activeCurrency={currency}
          currencies={currencyGroup?.popular}
        />

        {/* Other Currencies Section Header */}
        <div className="mt-1 flex justify-between gap-2.5 border-b border-neutral-500 py-2 text-xs font-medium text-neutral-200">
          <span className="tracking-wider uppercase">Others</span>
          <span>{currencyGroup?.others?.length ?? 0}</span>
        </div>

        {/* Others List Container */}

        <CurrenciesGroup
          changeCurrency={changeCurrency}
          setOpen={setOpen}
          activeCurrency={currency}
          currencies={currencyGroup?.others}
        />
      </div>
    </div>
  );
}
