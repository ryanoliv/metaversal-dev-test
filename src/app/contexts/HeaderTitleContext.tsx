"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface HeaderTitleContextType {
  title: string;
  setTitle: (title: string) => void;
}

const HeaderTitleContext = createContext<HeaderTitleContextType | undefined>(
  undefined
);

function HeaderTitleProvider({ children }: { children: ReactNode }) {
  const [title, setTitle] = useState("Feed");

  return (
    <HeaderTitleContext.Provider value={{ title, setTitle }}>
      {children}
    </HeaderTitleContext.Provider>
  );
}

function useHeaderTitle() {
  const context = useContext(HeaderTitleContext);
  if (!context) {
    throw new Error("useHeaderTitle must be used within a HeaderTitleProvider");
  }
  return context;
}

export { HeaderTitleProvider, useHeaderTitle };
