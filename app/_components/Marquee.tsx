type fxPairs = string[];

const EXCHANGE_PAIRS: fxPairs = [
  "💡 Live Rates —",
  "USD/EUR",
  "GBP/USD",
  "USD/JPY",
  "AUD/USD",
  "BTC/USD",
  "💡 Live Rates 2",
  "USD/EUR",
  "GBP/USD",
  "USD/JPY",
  "AUD/USD",
  "BTC/USD",
  "💡 Live Rates 3",
  "USD/EUR",
  "GBP/USD",
  "USD/JPY",
  "AUD/USD",
  "BTC/USD",
];

// border-y border-neutral-700

export default function Marquee() {
  return (
    <div className="group w-full overflow-hidden bg-neutral-700 flex select-none relative h-10 max-phone:h-8.5 max-phone:text-xxs phone:text-xs">
      <div className="absolute z-20 top-0 bg-lime-500 w-25.5 phone:w-34.5 flex items-center gap-1.5 phone:gap-2 text-neutral-900 font-medium px-2 phone:px-4 py-3">
        <span className="bg-neutral-900 rounded-full w-1.5 h-1.5"></span>
        <span className="uppercase sm:tracking-[0.5px] w-full">
          Live markets
        </span>
      </div>

      <div className="flex whitespace-nowrap animate-marquee pr-6 group-hover:[animation-play-state:paused]">
        {EXCHANGE_PAIRS.map((text, idx) => (
          <div
            key={`t1-${idx}`}
            className="tracking-wider font-bold justify-center py-3 px-5 border-r border-neutral-500 flex gap-2.5"
          >
            <span className="text-neutral-200">{text}</span>
            <span className="text-neutral-50"> 157.91</span>
            <span className="text-green-500">▲ +0.04%</span>
          </div>
        ))}
      </div>

      <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
        {EXCHANGE_PAIRS.map((text, idx) => (
          <div
            key={`t1-${idx}`}
            className="tracking-wider font-bold justify-center py-3 px-5 border-r border-neutral-500 flex gap-2.5"
          >
            <span className="text-neutral-200">{text}</span>
            <span className="text-neutral-50"> 157.91</span>
            <span className="text-red-500">▲ +0.04%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
