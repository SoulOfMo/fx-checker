import { CurrencyProp } from '@/types/fx';
import CurrencyItem from './CurrencyItem';

interface CurrencyPickerProps {
  currencies?: CurrencyProp[];
  changeCurrency: (value: string) => void;
  activeCurrency: string;
  setOpen: (arg0: boolean) => void;
}

export default function PopularCurrencies({
  currencies,
  changeCurrency,
  setOpen,
  activeCurrency,
}: CurrencyPickerProps) {
  return (
    <>
      <div className="flex justify-between gap-2.5 border-b border-neutral-500 py-2 text-xs font-medium text-neutral-200">
        <span className="tracking-wider uppercase">Popular</span>
        <span>{currencies?.length ?? 0}</span>
      </div>

      <div className="picker-scroll flex h-34.5 flex-col overflow-y-auto">
        {currencies?.map((curitem: CurrencyProp) => (
          <CurrencyItem
            key={`pop-${curitem.iso_code}`}
            iso_code={curitem.iso_code}
            name={curitem.name}
            active={curitem.iso_code === activeCurrency}
            onClick={() => {
              changeCurrency(curitem.iso_code);
              setOpen(false);
            }}
          />
        ))}
      </div>
    </>
  );
}
