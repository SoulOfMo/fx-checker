import usdFlag from "@/public/images/flags/us.webp";
import ngnFlag from "@/public/images/flags/ng.webp";
import ExchangeContainer from "./ExchangeContainer";
import SwapButton from "./SwapButton";

export default function Calculator() {
  return (
    <div className="mt-8 mx-4 xl:mx-42.5">
      <h1 className="uppercase text-xl font-mono">check the rate</h1>

      <div className="w-full mt-4 rounded-20 bg-neutral-700 p-4 md:p-5 flex flex-col md:flex-row md:gap-6 md:items-center md:justify-between">
        <ExchangeContainer
          flag={usdFlag}
          amount={1000}
          type="send"
          code="USD"
        />

        <SwapButton />

        <ExchangeContainer
          flag={ngnFlag}
          amount={15000}
          type="receive"
          code="NGN"
        />
      </div>
    </div>
  );
}
