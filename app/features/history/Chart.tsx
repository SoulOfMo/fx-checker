import RateChart from '@/app/components/RateChart';
import { useFxCheckerContext } from '@/app/providers/FxCheckerProvider';

export default function Chart({ range }: { range: string }) {
  const { sendCurrency, receiveCurrency } = useFxCheckerContext();

  const date = new Date();
  const today = new Intl.DateTimeFormat(navigator.language, {
    month: 'short',
    day: '2-digit',
  }).format(date);

  const time = new Intl.DateTimeFormat(navigator.language, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date);

  return (
    <div className="rounded-16 mb-12 flex h-94.25 flex-col gap-5 border border-neutral-600 bg-neutral-700 px-3 py-4">
      <div className="flex h-4.75 items-center justify-between uppercase">
        <span className="text-normal font-medium text-neutral-50">
          {`${sendCurrency}/${receiveCurrency}`}
        </span>
        <span className="text-xs text-neutral-50/70">
          0.8530 · {today} {time} CET
        </span>
      </div>
      <RateChart range={range} />
    </div>
  );
}
