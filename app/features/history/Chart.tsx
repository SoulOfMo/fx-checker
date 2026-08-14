export default function Chart() {
  return (
    <div className="flex flex-col bg-neutral-700 border border-neutral-600 px-3 py-4 gap-5 rounded-16 ">
      <div className="h-4.75 uppercase flex items-center justify-between">
        <span className="text-neutral-50 text-normal font-medium">USD/EUR</span>
        <span className="text-neutral-50/70 text-xs">
          0.8530 · MAY 14 16:00 CET
        </span>
      </div>
      <div>Chart</div>
    </div>
  );
}
