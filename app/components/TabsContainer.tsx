import angleDown from '@/public/images/angle-down.svg';
import Image from 'next/image';
import { TabsContainerProps } from '@/types/fx';

export default function TabsContainer({
  handleChange,
  activeTab,
}: TabsContainerProps) {
  return (
    <div>
      {/* MOBILE VERSION */}
      <div className="text-normal rounded-8 flex h-10 items-center justify-between border border-neutral-400 bg-neutral-700 px-3 sm:hidden">
        <span>History</span>
        <Image src={angleDown} width={10} height={19} alt="dropdown button" />
      </div>

      {/* DESKTOP */}
      <div className="hidden w-full gap-2 border-b border-neutral-600 sm:flex">
        <button
          className="text-normal border-0 border-lime-500 px-4 py-[10.5px] tracking-normal text-neutral-50 uppercase focus:border-b sm:h-10.5"
          onClick={() => handleChange('history')}
        >
          History
        </button>

        <button
          className="text-normal flex items-center gap-2 border-0 border-lime-500 px-4 py-[10.5px] text-neutral-50 uppercase hover:border-b sm:h-10.5"
          onClick={() => handleChange('compare')}
        >
          <span className="tracking-normal">compare</span>
        </button>

        <button
          className={`text-normal flex items-center gap-2 border-lime-500 px-4 py-[10.5px] text-neutral-50 uppercase hover:border-b sm:h-10.5 ${activeTab === 'favorites' ? 'border-b border-lime-500' : 'border-0'}`}
          onClick={() => handleChange('favorites')}
        >
          <span className="tracking-normal">favorites</span>
          <span className="text-xxs flex h-5 w-5 items-center justify-center rounded-full bg-lime-800 text-lime-500">
            10
          </span>
        </button>

        <button
          className="text-normal flex items-center gap-2 border-0 border-lime-500 px-4 py-[10.5px] text-neutral-50 uppercase focus:border-b sm:h-10.5"
          onClick={() => handleChange('log')}
        >
          <span className="tracking-normal">log</span>

          <span className="text-xxs flex h-5 w-5 items-center justify-center rounded-full bg-lime-800 text-lime-500">
            5
          </span>
        </button>
      </div>
    </div>
  );
}
