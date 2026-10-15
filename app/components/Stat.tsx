import { StatProps } from '@/types/fx';

export default function Stat({
  className = 'text-neutral-50',
  type,
  value,
  percentChange,
  isPending,
}: StatProps) {
  return (
    <div className="rounded-16 flex h-20.25 flex-col gap-4 border border-neutral-600 bg-neutral-700 px-5 py-3 uppercase sm:w-35">
      <span className="h-4.25 text-[14px] tracking-normal text-neutral-50/70">
        {type}
      </span>
      <span
        className={`tracking-small h-6 text-xl ${className} ${isPending ? 'opacity-40 blur-[1px]' : 'blur-0 opacity-100'}`}
      >
        {value && value >= 1 ? value?.toFixed(2) : value?.toFixed(4)}
        {percentChange}
      </span>
    </div>
  );
}
