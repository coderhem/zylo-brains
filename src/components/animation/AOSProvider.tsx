"use client";
import { createContext, useContext, useEffect, ReactNode } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSContext = createContext({});

export const AOSProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return <AOSContext.Provider value={{}}>
    {children}
  </AOSContext.Provider>;
};

export const useAOSContext = () => useContext(AOSContext);