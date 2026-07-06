import Chart from "./Chart";
import Stat from "./Stat";

export default function History() {
  return (
    <div className=" flex flex-col gap-5 ">
      <div className="flex items-start gap-5 flex-col laptop:gap-0 laptop:flex-row lg:justify-between laptop:items-center">
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 sm:w-auto gap-2.5">
          <Stat />
          <Stat />
          <Stat className="text-green-500" />
          <Stat className="text-green-500" />
        </div>

        <div className="flex rounded-8 bg-neutral-700 p-0.5 h-10.5">
          <span className=" w-11.75 h-9.5 flex items-center justify-center px-4 py-3 border-0 text-neutral-200 uppercase text-xs">
            1D
          </span>
          <span className=" w-11.75 h-9.5 flex items-center justify-center px-4 py-3 border-0 text-neutral-200 uppercase text-xs">
            1W
          </span>
          <span className=" w-11.75 h-9.5 flex items-center justify-center px-4 py-3 border-0 text-neutral-200 uppercase text-xs">
            1M
          </span>
          <span className=" w-11.75 h-9.5 flex items-center hover:bg-neutral-500 hover:rounded-8 justify-center px-4 py-3 border-0 text-neutral-200 uppercase text-xs">
            3M
          </span>
          <span className=" w-11.75 h-9.5 flex items-center justify-center px-4 py-3 border-0 text-neutral-200 uppercase text-xs">
            1Y
          </span>
          <span className=" w-11.75 h-9.5 flex items-center justify-center px-4 py-3 border-0 text-neutral-200 uppercase text-xs">
            5Y
          </span>
        </div>
      </div>

      <Chart />
    </div>
  );
}

/* Open Label */

// width: 70px;
// height: 17px;

// /* text-preset-4 */
// font-family: 'JetBrains Mono';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 120%;
// /* identical to box height, or 17px */
// letter-spacing: 1px;

// color: #FFFFFF;

// opacity: 0.7;

// /* Inside auto layout */
// flex: none;
// order: 0;
// align-self: stretch;
// flex-grow: 0;
