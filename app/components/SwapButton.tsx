import Image from 'next/image';

import swapIconVertical from '@/public/images/icon-exchange-vertical.svg';

import swapIconHorizontal from '@/public/images/icon-exchange.svg';

export default function SwapButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="rounded-8 mx-auto my-4 flex h-12 w-12 items-center justify-center border border-neutral-500 bg-neutral-600 md:mx-0"
    >
      <Image
        src={swapIconVertical}
        className="block sm:hidden"
        height={20}
        width={20}
        alt="swap currency"
      />

      <Image
        src={swapIconHorizontal}
        className="hidden sm:block"
        height={20}
        width={20}
        alt="swap currency"
      />
    </button>
  );
}
