import CompareItem from "./CompareItem";

export default function CompareContainer() {
  return (
    <div className="p-4 rounded-16 bg-neutral-700 border flex border-neutral-600 flex-col gap-4">
      <div className="w-full gap-2.5 flex sm:flex-row flex-col justify-between">
        <div className="flex gap-3 items-center justify-between h-4.75">
          <span className="text-neutral-200 text-sm">MULTI-CURRENCY</span>
          <span className="text-normal text-neutral-50">1,000 FROM USD</span>
        </div>
        <span className="text-xs text-neutral-50/70">8 pairs</span>
      </div>
      <div className="flex flex-col gap-3 ">
        <CompareItem />
        <CompareItem />
      </div>
    </div>
  );
}
