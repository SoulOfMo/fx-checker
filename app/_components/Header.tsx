import Logo from "@/public/images/logo.svg";
import Image from "next/image";

export default function Header() {
  return (
    <header className="p-4 phone:px-6 phone: py-5 flex justify-between gap-2.5 items-center">
      <div className="h-5 w-[107.15px] phone:hidden">
        <Image src={Logo} height={26} width={139} alt="project logo" />
      </div>

      <div className="max-phone:hidden phone:block">
        <Image src={Logo} height={26} width={139} alt="project logo" />
      </div>

      <span className=" max-phone:text-xxs phone:text-xs sm:text-sm text-neutral-200 font-normal">
        55 CURRENCIES · EOD · ECB DATA
      </span>
    </header>
  );
}
