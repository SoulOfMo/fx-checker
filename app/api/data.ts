import { POPULAR_CURRENCIES } from '../utils/constants';

const BASE_URL = 'https://api.frankfurter.dev/v2/';

import { yesterday } from '../utils/constants';

export async function getData() {
  const data = await fetch(BASE_URL);

  const results = await data.json();

  return results;
}

// https://api.frankfurter.dev/v2/currencies
export async function getCurrencies() {
  const res = await fetch(`${BASE_URL}currencies`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'Failed to fetch currencies');
  }

  return data;
}

export async function getLatestRates({ base = 'USD' }: { base?: string } = {}) {
  const res = await fetch(`${BASE_URL}rates?base=${base}`);
  const data = await res.json();
  return data;
  console.log('getLatestRates data:', data);
}

// https://api.frankfurter.dev/v2/rate/EUR/USD

export async function getExchangeRate({
  sendCur = 'USD',
  receiveCur = 'GBP',
}: {
  sendCur?: string;
  receiveCur?: string;
}) {
  const res = await fetch(
    `${BASE_URL}rates?base=${sendCur}&quotes=${receiveCur}`
  );
  const data = await res.json();
  return data;
}

/* https://api.frankfurter.dev/v2/rates?from=2026-01-01&quotes=USD */
export async function getHistory({
  sendCur = 'USD',
  receiveCur = 'EUR',
  range = '1M',
}) {
  const today = new Date();
  let fromDate: Date;

  switch (range) {
    case '1D':
      fromDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 1
      );
      break;
    case '1W':
      fromDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 7
      );
      break;
    case '1M':
      fromDate = new Date(
        today.getFullYear(),
        today.getMonth() - 1,
        today.getDate()
      );
      break;
    case '3M':
      fromDate = new Date(
        today.getFullYear(),
        today.getMonth() - 3,
        today.getDate()
      );
      break;
    case '1Y':
      fromDate = new Date(
        today.getFullYear() - 1,
        today.getMonth(),
        today.getDate()
      );
      break;
    default:
      fromDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 7
      );
  }

  const res = await fetch(
    `${BASE_URL}rates?base=${sendCur}&from=${fromDate.toISOString().split('T')[0]}&quotes=${receiveCur}`
  );

  const data = await res.json();

  return data;
}

//For the Live ticket

export async function getLiveTicket() {
  const res = await fetch(
    `${BASE_URL}rates?base=USD&from=${yesterday}&quotes=${POPULAR_CURRENCIES}`
  );
  const data = await res.json();
  return data;
}
