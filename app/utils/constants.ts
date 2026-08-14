export const POPULAR_CURRENCIES = [
  'USD',
  'EUR',
  'GBP',
  'JPY',
  'CAD',
  'AUD',
  'CHF',
  'CNY',
  'NGN',
  'ZAR',
  'INR',
  'MXN',
];

export const TICKER_PAIRS: [string, string][] = [
  ['USD', 'EUR'],
  ['EUR', 'USD'],
  ['USD', 'GBP'],
  ['GBP', 'USD'],
  ['USD', 'JPY'],
  ['EUR', 'JPY'],
  ['EUR', 'GBP'],
  ['AUD', 'USD'],
  ['USD', 'CAD'],
  ['USD', 'CHF'],
  ['NZD', 'USD'],
  ['USD', 'CNY'],
  ['USD', 'MXN'],
  ['USD', 'SEK'],
  ['USD', 'SGD'],
  ['USD', 'INR'],
];

const date = new Date();

export const today = date.toISOString().split('T')[0];

date.setDate(date.getDate() - 1);

export const yesterday = date.toISOString().split('T')[0];
