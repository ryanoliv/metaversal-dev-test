"use client";

import { useHeaderTitle } from "../contexts/HeaderTitleContext";

export default function Header() {
  const { title } = useHeaderTitle();

  return (
    <header className="fixed top-0 w-full z-30 bg-white100 py-3 px-2 border-b border-slate15 shadow">
      <h1 className="text-md text-center p-2">{title}</h1>
    </header>
  );
}
