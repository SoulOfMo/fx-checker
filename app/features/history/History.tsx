'use client';

import Chart from './Chart';
import Stat from '../../components/Stat';
import { useState } from 'react';
import { useGetHistory } from '@/app/libs/useGetHistory';
import { useFxCheckerContext } from '@/app/providers/FxCheckerProvider';

const ranges = ['1D', '1W', '1M', '3M', '1Y', '5Y'] as const;

export default function History() {
  const [range, setRange] = useState<(typeof ranges)[number]>('1M');

  const { sendCurrency, receiveCurrency } = useFxCheckerContext();

  const { data, isError, isPending } = useGetHistory({
    sendCur: sendCurrency,
    receiveCur: receiveCurrency,
    range: range,
  });

  const open = data?.formattedData?.at(0)?.rate || 0;
  const close = data?.formattedData?.at(-1)?.rate || 0;

  const change =
    open !== undefined && close !== undefined
      ? Number(close) - Number(open)
      : 0;

  const percentChange = ((close - open) / open) * 100 || 0;

  return (
    <div className="flex flex-col gap-5">
      <div className="laptop:gap-0 laptop:flex-row laptop:items-center flex flex-col items-start gap-5 lg:justify-between">
        <div className="grid w-full grid-cols-2 gap-2.5 sm:w-auto sm:grid-cols-4">
          <Stat type="Open" value={open} isPending={isPending} />
          <Stat type="Close" value={close} isPending={isPending} />
          <Stat
            className={change < 0 ? 'text-red-500' : 'text-green-500'}
            type="Change"
            value={change}
            isPending={isPending}
          />
          <Stat
            className={percentChange < 0 ? 'text-red-500' : 'text-green-500'}
            type="% Change"
            percentChange={`${percentChange.toFixed(2)}%`}
            isPending={isPending}
          />
        </div>

        <div className="rounded-8 flex h-10.5 bg-neutral-700 p-0.5">
          {ranges.map((item) => (
            <button
              className={`${range === item ? 'bg-neutral-500 text-white' : 'hover:bg-neutral-500'} flex h-9.5 w-11.75 items-center justify-center border-0 px-4 py-3 text-xs text-neutral-200 uppercase`}
              key={item}
              onClick={() => setRange(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <Chart range={range} />
    </div>
  );
}
