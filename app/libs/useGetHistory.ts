import { useQuery } from '@tanstack/react-query';
import { getHistory } from '../api/data';
import { Rate, FormattedRate } from '@/types/fx';

interface UseExchangeRateProps {
  sendCur?: string;
  receiveCur?: string;
  value?: number;
}

export function useGetHistory({
  sendCur,
  receiveCur,
  range,
}: UseExchangeRateProps & { range: string }) {
  return useQuery({
    queryFn: () => getHistory({ sendCur, receiveCur, range }),
    queryKey: [sendCur, receiveCur, range],
    select: (data) => {
      const formattedData: FormattedRate[] = data.map((item: Rate) => {
        const date = new Date(item.date);
        const shortDate = new Intl.DateTimeFormat(navigator.language, {
          month: 'short',
          day: '2-digit',
        }).format(date);

        const fullDate = new Intl.DateTimeFormat(navigator.language, {
          month: 'short',
          day: '2-digit',
          year: 'numeric',
        }).format(date);

        return { date: shortDate, fullDate, rate: item.rate };
      });

      return { formattedData };
    },
  });
}
