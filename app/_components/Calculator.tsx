import usdFlag from "@/public/images/flags/us.webp";
import ngnFlag from "@/public/images/flags/ng.webp";
import ExchangeContainer from "./ExchangeContainer";
import SwapButton from "./SwapButton";
import StarIcon from "./StarIcon";

export default function Calculator() {
  return (
    <>
      <h1 className="uppercase text-xl font-mono">check the rate</h1>

      <div className="mt-4 rounded-20 bg-neutral-700 flex flex-col md:items-center sm:justify-between">
        <div className="flex justify-between m-4 xl:m-5 sm:gap-6 flex-col md:flex-row md:items-center">
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

        <div className="border-t mx-auto border-dashed w-full border-neutral-500 flex gap-4 flex-col justify-center items-center p-4 md:flex-row md:justify-between">
          <p className="text-xxs">1 USD = 0.8530 EUR</p>

          <div className="flex gap-3 text-xs">
            <button className="rounded-8 bg-lime-500 uppercase text-neutral-900 flex gap-2 px-3 py-2 items-center">
              <StarIcon className="fill-neutral-500 w-4 h-4" />
              <span>FAVORITED</span>
            </button>

            <button className="px-3 py-2 rounded-8 border border-lime-500 h-8 w-33 uppercase hover:bg-lime-500/20">
              LOG CONVERSION
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

/* Bottom Container */

// box-sizing: border-box;

// /* Auto layout */
// display: flex;
// flex-direction: column;
// align-items: center;
// padding: 16px;
// gap: 16px;

// width: 343px;
// height: 91px;

// border-top: 1px dashed #2E2E2E;

// /* Inside auto layout */
// flex: none;
// order: 1;
// align-self: stretch;
// flex-grow: 0;
