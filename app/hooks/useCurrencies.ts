import { useQuery } from '@tanstack/react-query';
import { getCurrencies } from '../api/data';
import { CurrrencyProp } from '@/types/fx';
import { POPULAR_CURRENCIES } from '../utils/constants';

const popularSet = new Set(POPULAR_CURRENCIES);

export default function useCurrencies() {
  return useQuery({
    queryKey: ['currency'],
    queryFn: getCurrencies,
    select: (data: CurrrencyProp[]) => {
      const groupedCurrencies = data.reduce(
        (
          acc: { popular: CurrrencyProp[]; others: CurrrencyProp[] },
          curItem: CurrrencyProp
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
