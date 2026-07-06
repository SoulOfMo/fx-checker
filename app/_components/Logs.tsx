import Log from "./Log";

export default function Logs() {
  return (
    <div className="p-4 rounded-16 bg-neutral-700 border flex border-neutral-600 flex-col gap-4">
      <div className="w-full gap-2.5 flex sm:flex-row flex-col justify-between uppercase ">
        <span className=" text-normal font-medium text-neutral-50 tracking-normal">
          CONVERSION LOG
        </span>
        <div className="flex gap-3 h-7.5 items-center justify-between">
          <span className="text-neutral-50/70 text-xs tracking-small">
            8 logged
          </span>
          <button
            className="py-2 px-3 h-7.5 bg-neutral-600 border border-neutral-400 rounded-8 text-xs tracking-small text-neutral-200 uppercase"
            aria-label="clear all logs"
          >
            Clear all
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3 ">
        <Log fromCode="USD" toCode="EUR" amountFrom={1000} amountTo={853} />
        <Log fromCode="EUR" toCode="USD" amountFrom={500} amountTo={832} />
        <Log fromCode="GBP" toCode="USD" amountFrom={250} amountTo={270} />
      </div>
    </div>
  );
}

/* Clear Button */

/* Chart Date Info */

// width: 69px;
// height: 14px;

// /* text-preset-5 */
// font-family: 'JetBrains Mono';
// font-style: normal;
// font-weight: 400;
// font-size: 12px;
// line-height: 120%;
// /* or 14px */
// text-align: center;
// letter-spacing: 0.5px;

// color: #9D9D9D;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;
