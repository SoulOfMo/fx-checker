'use client';

import { tickerProps } from '@/types/fx';
import { useTicker } from '../hooks/useTicker';

export default function Marquee() {
  const { isPending, data: exchangePairs } = useTicker();

  return (
    <div className="group max-phone:h-8.5 max-phone:text-xxs phone:text-xs relative flex h-10 w-full overflow-hidden bg-neutral-700 select-none">
      <div className="phone:w-34.5 phone:gap-2 phone:px-4 absolute top-0 z-20 flex w-25.5 items-center gap-1.5 bg-lime-500 px-2 py-3 font-medium text-neutral-900">
        <span className="h-1.5 w-1.5 rounded-full bg-neutral-900"></span>
        <span className="sm:tracking-small w-full uppercase">Live markets</span>
      </div>

      {!isPending && (
        <>
          <div className="animate-marquee flex whitespace-nowrap group-hover:[animation-play-state:paused]">
            {exchangePairs?.liveTicker.map((item: tickerProps, idx: number) => (
              <div
                key={`t1-${idx}`}
                className="flex justify-center gap-2.5 border-r border-neutral-500 px-5 py-3 font-bold tracking-wider"
              >
                <span className="text-neutral-200">{`USD/${item.quote}`}</span>
                <span className="text-neutral-50">
                  {Number(item.rate.toFixed(4))}
                </span>
                <span
                  className={`${item.direction === 'up' ? 'text-green-500' : 'text-red-500'}`}
                >
                  {`${item.direction === 'up' ? '▲' : '▼'} ${Number(item.percentageChange).toFixed(2)}%`}
                </span>
              </div>
            ))}
          </div>

          <div className="animate-marquee flex whitespace-nowrap group-hover:[animation-play-state:paused]">
            {exchangePairs?.liveTicker.map((item: tickerProps, idx: number) => (
              <div
                key={`t2-${idx}`}
                className="flex justify-center gap-2.5 border-r border-neutral-500 px-5 py-3 font-bold tracking-wider"
              >
                <span className="text-neutral-200">{`USD/${item.quote}`}</span>
                <span className="text-neutral-50">
                  {Number(item.rate.toFixed(4))}
                </span>
                <span
                  className={`${item.direction === 'up' ? 'text-green-500' : 'text-red-500'}`}
                >
                  {`${item.direction === 'up' ? '▲' : '▼'} ${item.percentageChange.toFixed(2)}%`}
                </span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
