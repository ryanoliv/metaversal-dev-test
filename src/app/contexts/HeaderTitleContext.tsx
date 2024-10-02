"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface HeaderTitleContextType {
  title: string;
  setTitle: (title: string) => void;
  showBackArrow: boolean;
  setShowBackArrow: (show: boolean) => void;
}

const HeaderTitleContext = createContext<HeaderTitleContextType | undefined>(
  undefined
);

function HeaderTitleProvider({ children }: { children: ReactNode }) {
  const [title, setTitle] = useState("Feed");
  const [showBackArrow, setShowBackArrow] = useState(false);

  return (
    <HeaderTitleContext.Provider
      value={{ title, setTitle, showBackArrow, setShowBackArrow }}
    >
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
