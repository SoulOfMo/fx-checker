import { StatProps } from "@/types/fx";

export default function Stat({ className = "text-neutral-50" }: StatProps) {
  return (
    <div className="sm:w-35 h-20.25 bg-neutral-700 flex flex-col px-5 py-3 gap-4 rounded-16 border border-neutral-600 uppercase">

      <span className="h-4.25 tracking-[1px] text-[14px] text-neutral-50/70">
        Open
      </span>
      <span className={`h-6 tracking-[-0.5px] text-xl ${className}`}>0.1876</span>
    </div>
  );
}
