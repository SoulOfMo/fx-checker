import { CurrrencyProp } from '@/types/fx';
import CurrencyItem from './CurrencyItem';

interface CurrencyPickerProps {
  currencies?: CurrrencyProp[];
  changeCurrency: (value: string) => void;
  activeCurrency: string;
  setOpen: (arg0: boolean) => void;
}

export default function CurrenciesGroup({
  currencies,
  changeCurrency,
  setOpen,
  activeCurrency,
}: CurrencyPickerProps) {
  return (
    <div className="picker-scroll flex h-34.5 flex-col overflow-y-auto">
      {currencies?.map((curitem: CurrrencyProp) => (
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
  );
}
