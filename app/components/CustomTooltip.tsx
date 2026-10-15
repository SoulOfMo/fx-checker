'use client';

export default function CustomTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: [
    {
      payload: {
        date: string;
        fullDate: string;
        rate: number;
      };
    },
  ];
}) {
  if (!active || !payload || !payload.length) {
    return null;
  }

  const data = payload[0].payload;

  return (
    <div className="rounded-md bg-black px-3 py-2">
      <p>{data.fullDate}</p>
      <p>{data.rate}</p>
    </div>
  );
}
