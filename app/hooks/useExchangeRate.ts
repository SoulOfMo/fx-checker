import { useQuery } from '@tanstack/react-query';
import { getExchangeRate } from '../api/data';

interface UseExchangeRateProps {
  sendCur?: string;
  receiveCur?: string;
  value?: number;
}

export function useExchangeRate({
  sendCur,
  receiveCur,
  value = 200,
}: UseExchangeRateProps = {}) {
  return useQuery({
    queryKey: ['exchangeRate', sendCur, receiveCur, value],
    queryFn: () => getExchangeRate({ sendCur, receiveCur }),

    select: (data) => {
      const currentRate = data[0].rate ?? 0;
      const convertedValue = currentRate * value;

      return { convertedValue, currentRate };
    },
  });
}
