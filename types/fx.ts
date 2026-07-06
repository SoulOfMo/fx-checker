import { StaticImageData } from "next/image";

export interface exchangeProps {
  flag: StaticImageData;
  amount: number;
  type: string;
  code: string;
}

export interface IconProps {
  className?: string;
}

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
