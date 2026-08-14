'use client';
import { useQuery } from '@tanstack/react-query';
import { getLiveTicket } from '../api/data';
import transformTickerData from '../libs/transformTickerData';

export function useTicker() {
  return useQuery({
    queryKey: ['ticker'],
    queryFn: getLiveTicket,
    select: transformTickerData,
  });
}
