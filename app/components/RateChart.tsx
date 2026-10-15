'use client';

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import { useGetHistory } from '../libs/useGetHistory';
import { useFxCheckerContext } from '../providers/FxCheckerProvider';
import CustomTooltip from './CustomTooltip';

export default function RateChart({ range }: { range: string }) {
  const { sendCurrency, receiveCurrency } = useFxCheckerContext();
  const { data } = useGetHistory({
    sendCur: sendCurrency,
    receiveCur: receiveCurrency,
    range: range,
  });

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data?.formattedData}>
        <defs>
          <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#cef739" stopOpacity={0.6} />
            <stop offset="100%" stopColor="#171719" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid
          vertical={false}
          stroke="#263241"
          strokeDasharray="3 3"
          opacity={0.5}
        />

        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tick={{ fill: '#94A3B8', fontSize: 11 }}
          minTickGap={80}
        />

        <YAxis
          axisLine={false}
          tickLine={false}
          domain={['dataMin', 'dataMax']}
          tick={{ fill: '#9d9d9d', fontSize: 12 }}
          // padding={{ top: 10, bottom: 10 }}
        />

        <Area
          type="monotone"
          dataKey="rate"
          stroke="#cef739"
          strokeWidth={1.5}
          activeDot={{ r: 5, fill: '#cef739' }}
          fillOpacity={1}
          fill="url(#colorRate)"
        />

        <Tooltip content={<CustomTooltip />} />
      </AreaChart>
    </ResponsiveContainer>
  );
}
