import { useQuery } from '@tanstack/react-query';
import { getLatestRates, getCurrencies } from '../api/data';
import { useFxCheckerContext } from '../providers/FxCheckerProvider';
import { CompareItemProps } from '@/types/fx';

export function useCompare() {
  const { sendCurrency, amount } = useFxCheckerContext();

  return useQuery({
    queryKey: ['compare', sendCurrency, amount],

    queryFn: async () => {
      const [rates, currencies] = await Promise.all([
        getLatestRates({ base: sendCurrency }),
        getCurrencies(),
      ]);

      return { rates, currencies };
    },

    select: ({ rates, currencies }) => {
      const currencyLookup = Object.fromEntries(
        currencies.map((currency: { iso_code: string; name: string }) => [
          currency.iso_code,
          currency.name,
        ])
      );

      return rates.map((item: CompareItemProps) => ({
        rate: item.rate,
        quote: item.quote,
        name: item.quote
          ? (currencyLookup[item.quote] ?? item.quote)
          : 'Unknown currency',
        amount: item.rate * Number(amount),
      }));
    },
  });
}
