import { Rate } from '@/types/fx';

import { today } from '../utils/constants';

export default function transformTickerData(data: []) {
  //Group the data by today and yesterday
  const groupedData = data.reduce(
    (acc: Record<string, Rate[]>, curItem: Rate) => {
      if (curItem.date === today) {
        acc.today.push(curItem);
      } else {
        acc.yesterday.push(curItem);
      }

      return acc;
    },
    { today: [], yesterday: [] }
  );

  // Create a lookup object for yesterday's rates

  const yesterdayLookup = groupedData.yesterday.reduce(
    (acc: Record<string, number>, item: { quote: string; rate: number }) => {
      acc[item.quote] = item.rate;

      return acc;
    },
    {} as Record<string, number>
  );

  // Map over today's rates and calculate the percentage change from yesterday's rates

  const liveTicker = groupedData.today.map((item: Rate) => {
    const yesterdayRate = yesterdayLookup[item.quote];

    // Calculate the percentage

    const change =
      yesterdayRate !== undefined
        ? ((item.rate - yesterdayRate) / yesterdayRate) * 100
        : 0;

    // Return the new object

    return {
      quote: item.quote,
      rate: item.rate,
      percentageChange: Math.abs(change),
      direction: change >= 0 ? 'up' : 'down',
    };
  });

  return { liveTicker };
}
