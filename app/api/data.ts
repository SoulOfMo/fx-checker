import { POPULAR_CURRENCIES } from '../utils/constants';

const BASE_URL = 'https://api.frankfurter.dev/v2/';

import { yesterday } from '../utils/constants';

export async function getData() {
  const data = await fetch(BASE_URL);

  const results = await data.json();
  console.log('result', results);
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
export async function getHistory() {
  const res = await fetch(
    `${BASE_URL}rates?base=USD&from=${yesterday}&quotes=${POPULAR_CURRENCIES}`
  );
  console.log(res);
  const data = await res.json();
  return data;
}

export async function getLiveTicket() {
  const res = await fetch(
    `${BASE_URL}rates?base=USD&from=${yesterday}&quotes=${POPULAR_CURRENCIES}`
  );
  const data = await res.json();
  return data;
}
