// context/ScrollContext.tsx
"use client";
import {
  createContext,
  useContext,
  useRef,
  useState,
  ReactNode,
  RefObject,
} from "react";

type ScrollContextType = {
  setScrollRef: (ref: RefObject<HTMLElement>) => void;
  scrollToRef: () => void;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const scrollRef = useRef<RefObject<HTMLElement> | null>(null);

  const setScrollRef = (ref: RefObject<HTMLElement>) => {
    scrollRef.current = ref;
  };

  const scrollToRef = () => {
    scrollRef.current?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScrollContext.Provider value={{ setScrollRef, scrollToRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context)
    throw new Error("useScrollContext must be used inside ScrollProvider");
  return context;
};
