'use client';

import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react';

type FxCheckerContextType = {
  amount: string;
  setAmount: Dispatch<SetStateAction<string>>;
  setReceiveCurrency: Dispatch<SetStateAction<string>>;
  setSendCurrency: Dispatch<SetStateAction<string>>;
  sendCurrency: string;
  receiveCurrency: string;
};

// const initialState = {
//   favs: [],
//   amount: '',
//   sendCurrency: '',
//   receiveCurrency: '',
//   logs: '',
// };

const fxCheckerContext = createContext<FxCheckerContextType | null>(null);

function FxCheckerProvider({ children }: { children: ReactNode }) {
  const [amount, setAmount] = useState<string>('100');
  const [sendCurrency, setSendCurrency] = useState<string>('USD');
  const [receiveCurrency, setReceiveCurrency] = useState<string>('EUR');

  return (
    <fxCheckerContext.Provider
      value={{
        amount,
        sendCurrency,
        setAmount,
        receiveCurrency,
        setReceiveCurrency,
        setSendCurrency,
      }}
    >
      {children}
    </fxCheckerContext.Provider>
  );
}

function useFxCheckerContext() {
  const context = useContext(fxCheckerContext);
  if (context === null) {
    throw new Error(
      'useFxCheckerContext must be used within FxCheckerProvider'
    );
  }

  return context;
}

export { useFxCheckerContext, FxCheckerProvider };
