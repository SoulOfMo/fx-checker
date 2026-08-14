import { StaticImageData } from 'next/image';

export interface exchangeProps {
  amount?: number;
  type: string;
  code: string;
  sendValue?: number | string;
  sendCurrency: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSendCurrency: (value: string) => void;
  isPending: boolean;
}

export interface ExchangeContainerProps {
  handleSendCurrency: (value: string) => void;
}

export interface IconProps {
  className?: string;
}

//Difference between type and interface

export type Rate = {
  date: string;
  base: string;
  quote: string;
  rate: number;
};

export type CurrrencyProp = {
  iso_code: string;
  iso_numeric?: string;
  name: string;
  active?: boolean;
  onClick?: () => void;
};
// {iso_code: 'AED', iso_numeric: '784', name: 'United Arab Emirates Dirham', symbol: 'د.إ', start_date: '1996-04-11', …}

export interface StatProps {
  className?: string;
}

export interface compareProps {
  flag: StaticImageData;
  code: string;
  currency: string;
  name: string;
  rate: number;
  amount: number;
}

export interface FavPairProps {
  fromCode: string;
  toCode: string;
  rate: number;
  change: number;
}

export interface LogProps {
  fromCode: string;
  toCode: string;
  amountFrom: number;
  amountTo: number;
}

export interface tickerProps {
  quote: string;
  rate: number;
  percentageChange: number;
  direction: string;
}

export interface TabsContainerProps {
  handleChange: (value: string) => void;
  activeTab: string;
}
