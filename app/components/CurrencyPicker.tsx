'use client';

import searchIcon from '@/public/images/icon-search.svg';
import Image from 'next/image';
import useCurrencies from '../hooks/useCurrencies';
import PopularCurrencies from '../components/PopularCurrencies';
import OtherCurrencies from '../components/OtherCurrencies';
import { useState } from 'react';
import SearchCurrencies from './SearchCurrencies';

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
  const [search, setSearch] = useState('');

  const { isPending, data: currencyGroup } = useCurrencies();

  const allCurrencies = [
    ...(currencyGroup?.others ?? []),
    ...(currencyGroup?.popular ?? []),
  ];

  const searchCurrencies = allCurrencies?.filter((curitem) => {
    const query = search?.toLowerCase();

    return (
      curitem.iso_code.toLowerCase().includes(query) ||
      curitem.name.toLowerCase().includes(query)
    );
  });

  if (isPending) {
    return (
      <div className="rounded-8 absolute top-28 right-0 flex h-114.5 w-77.75 items-center justify-center border border-neutral-400 bg-neutral-600 text-xs text-neutral-200 shadow-[0_20px_60px_rgba(10,10,10,0.5)]">
        Loading currencies...
      </div>
    );
  }

  return (
    <div className="rounded-8 absolute top-28 right-0 z-30 flex h-114.5 w-77.75 flex-col gap-2.5 border border-neutral-400 bg-neutral-600 px-2 pt-2 shadow-[0_20px_60px_rgba(10,10,10,0.5)] sm:h-116.5 sm:w-94">
      {/* Search Container */}
      <div className="flex h-11.5 items-center gap-2.5 rounded-md border border-neutral-200 p-3">
        <span className="flex h-5 w-3.75 items-center justify-center">
          <Image
            src={searchIcon}
            width={16}
            height={16}
            alt="search icon"
            loading="lazy"
          />
        </span>
        <input
          type="text"
          className="w-full bg-transparent text-xs text-neutral-50 placeholder-neutral-200 outline-0"
          placeholder="Search currencies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex h-98.5 flex-col gap-1 overflow-hidden">
        {/* Popular List Container */}

        {search ? (
          <SearchCurrencies
            changeCurrency={changeCurrency}
            setOpen={setOpen}
            activeCurrency={currency}
            currencies={searchCurrencies}
          />
        ) : (
          <>
            <PopularCurrencies
              changeCurrency={changeCurrency}
              setOpen={setOpen}
              activeCurrency={currency}
              currencies={currencyGroup?.popular}
            />

            {/* Others List Container */}

            <OtherCurrencies
              changeCurrency={changeCurrency}
              setOpen={setOpen}
              activeCurrency={currency}
              currencies={currencyGroup?.others}
            />
          </>
        )}
      </div>
    </div>
  );
}
