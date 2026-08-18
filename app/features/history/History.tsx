import Chart from './Chart';
import Stat from '../../components/Stat';

export default function History() {
  return (
    <div className="flex flex-col gap-5">
      <div className="laptop:gap-0 laptop:flex-row laptop:items-center flex flex-col items-start gap-5 lg:justify-between">
        <div className="grid w-full grid-cols-2 gap-2.5 sm:w-auto sm:grid-cols-4">
          <Stat />
          <Stat />
          <Stat className="text-green-500" />
          <Stat className="text-green-500" />
        </div>

        <div className="rounded-8 flex h-10.5 bg-neutral-700 p-0.5">
          <span className="flex h-9.5 w-11.75 items-center justify-center border-0 px-4 py-3 text-xs text-neutral-200 uppercase">
            1D
          </span>
          <span className="flex h-9.5 w-11.75 items-center justify-center border-0 px-4 py-3 text-xs text-neutral-200 uppercase">
            1W
          </span>
          <span className="flex h-9.5 w-11.75 items-center justify-center border-0 px-4 py-3 text-xs text-neutral-200 uppercase">
            1M
          </span>
          <span className="hover:rounded-8 flex h-9.5 w-11.75 items-center justify-center border-0 px-4 py-3 text-xs text-neutral-200 uppercase hover:bg-neutral-500">
            3M
          </span>
          <span className="flex h-9.5 w-11.75 items-center justify-center border-0 px-4 py-3 text-xs text-neutral-200 uppercase">
            1Y
          </span>
          <span className="flex h-9.5 w-11.75 items-center justify-center border-0 px-4 py-3 text-xs text-neutral-200 uppercase">
            5Y
          </span>
        </div>
      </div>

      <Chart />
    </div>
  );
}
