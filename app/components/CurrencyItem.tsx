import checkedIcon from '@/public/images/icon-check.svg';
import { CurrencyProp } from '@/types/fx';
import Image from 'next/image';
import cleanCountryCode from '../libs/cleanCountryCode';

export default function CurrencyItem({
  iso_code: code,
  name,
  active,
  onClick,
}: CurrencyProp) {
  const twoLetterCode = cleanCountryCode(code);

  return (
    <div
      onClick={onClick}
      className="flex h-11.5 items-center justify-between gap-3 px-2 py-3"
    >
      <span className="flex items-center gap-3">
        <Image
          src={`https://flagcdn.com/w40/${twoLetterCode}.png`}

          className="h-5 w-5 rounded-full object-cover"
          width={20}
          height={80}
          loading="lazy"

          alt="country icon"
        />

        <span className="text-sm text-neutral-50">{code}</span>
        <span className="text-xs text-neutral-200">{name}</span>
      </span>
      {active && (
        <span>
          <Image src={checkedIcon} width={12} height={12} alt="checked icon" />
        </span>
      )}
    </div>
  );
}
