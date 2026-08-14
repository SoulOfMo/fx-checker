import { useQuery } from '@tanstack/react-query';
import { getCurrencies } from '../api/data';
import { CurrencyProp } from '@/types/fx';
import { POPULAR_CURRENCIES } from '../utils/constants';

const popularSet = new Set(POPULAR_CURRENCIES);

export default function useCurrencies() {
  return useQuery({
    queryKey: ['currency'],
    queryFn: getCurrencies,
    select: (data: CurrencyProp[]) => {
      const groupedCurrencies = data.reduce(
        (
          acc: { popular: CurrencyProp[]; others: CurrencyProp[] },
          curItem: CurrencyProp
        ) => {
          if (popularSet.has(curItem.iso_code)) {
            acc.popular.push(curItem);
          } else {
            acc.others.push(curItem);
          }

          return acc;
        },
        { popular: [], others: [] }
      );

      return groupedCurrencies;
    },
  });
}
