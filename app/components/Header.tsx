import Logo from '@/public/images/logo.svg';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="phone:px-6 phone: flex items-center justify-between gap-2.5 p-4 py-5">
      <div className="phone:hidden h-5 w-[107.15px]">
        <Image src={Logo} height={26} width={139} alt="project logo" />
      </div>

      <div className="max-phone:hidden phone:block">
        <Image src={Logo} height={26} width={139} alt="project logo" />
      </div>

      <span className="max-phone:text-xxs phone:text-xs font-normal text-neutral-200 sm:text-sm">
        55 CURRENCIES · EOD · ECB DATA
      </span>
    </header>
  );
}
