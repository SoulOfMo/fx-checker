import { useCompare } from '@/app/hooks/useCompare';
import CompareItem from './CompareItem';
import { useFxCheckerContext } from '@/app/providers/FxCheckerProvider';
import { CompareItemProps } from '@/types/fx';

export default function CompareContainer() {
  const { amount, sendCurrency } = useFxCheckerContext();
  const { data } = useCompare();

  return (
    <div className="rounded-16 flex flex-col gap-4 border border-neutral-600 bg-neutral-700 p-4">
      <div className="flex w-full flex-col justify-between gap-2.5 sm:flex-row">
        <div className="flex h-4.75 items-center justify-between gap-3">
          <span className="text-sm text-neutral-200">MULTI-CURRENCY</span>
          <span className="text-normal text-neutral-50">
            {amount} FROM {sendCurrency}
          </span>
        </div>
        <span className="text-xs text-neutral-50/70">8 pairs</span>
      </div>

      <div className="flex flex-col gap-3">
        {data?.slice(0, 8).map((item: CompareItemProps) => (
          <CompareItem key={item.quote} item={item} />
        ))}
      </div>
    </div>
  );
}
