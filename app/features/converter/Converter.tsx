'use client';

import SendContainer from '../../components/SendContainer';
import SwapButton from '../../components/SwapButton';
import StarIcon from '../../components/StarIcon';

import { useExchangeRate } from '@/app/hooks/useExchangeRate';

import ReceiveContainer from '@/app/components/ReceiveContainer';
import { useFxCheckerContext } from '@/app/providers/FxCheckerProvider';

export default function Converter() {
  const {
    amount,
    setAmount,
    sendCurrency,
    setSendCurrency,
    receiveCurrency,
    setReceiveCurrency,
  } = useFxCheckerContext();

  const { data, isPending } = useExchangeRate({
    sendCur: sendCurrency,
    receiveCur: receiveCurrency,
    value: Number(amount) || 0,
  });

  const { currentRate, convertedValue } = data || {
    currentRate: 0,
    convertedValue: 0,
  };

  function handleSwap() {
    const temp = sendCurrency;
    setSendCurrency(receiveCurrency);
    setReceiveCurrency(temp);
    setAmount(convertedValue?.toFixed(2).toString());
  }

  return (
    <>
      <h1 className="font-mono text-xl uppercase">check the rate</h1>

      <div className="rounded-20 mt-4 flex flex-col bg-neutral-700 sm:justify-between md:items-center">
        <div className="m-4 flex flex-col justify-between sm:gap-6 md:flex-row md:items-center xl:m-5">
          <SendContainer isPending={isPending} />

          <SwapButton onClick={handleSwap} />

          {/* Recieve Container */}

          <ReceiveContainer convertedValue={convertedValue} />
        </div>

        <div className="mx-auto flex w-full flex-col items-center justify-center gap-4 border-t border-dashed border-neutral-500 p-4 md:flex-row md:justify-between">
          <p className="text-xxs flex min-h-4 items-center justify-center font-medium tracking-wide text-neutral-200 md:justify-start">
            <span
              className={`transform transition-all duration-300 ease-out ${
                isPending
                  ? 'scale-95 opacity-40 blur-[1px]'
                  : 'blur-0 scale-100 opacity-100'
              }`}
            >
              {isPending
                ? `Fetching ${sendCurrency}/${receiveCurrency}`
                : `1 ${sendCurrency} = ${Number(currentRate ?? 0).toFixed(4)} ${receiveCurrency}`}
            </span>
          </p>

          <div className="flex gap-3 text-xs">
            <button className="rounded-8 flex items-center gap-2 bg-lime-500 px-3 py-2 text-neutral-900 uppercase">
              <StarIcon className="h-4 w-4 fill-neutral-500" />
              <span>FAVORITED</span>
            </button>

            <button className="rounded-8 h-8 w-33 border border-lime-500 px-3 py-2 uppercase hover:bg-lime-500/20">
              LOG CONVERSION
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
