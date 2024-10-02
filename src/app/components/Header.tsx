"use client";

import Link from "next/link";
import { useHeaderTitle } from "../contexts/HeaderTitleContext";
import BackArrow from "@svgs/back-arrow.svg";

export default function Header() {
  const { title, showBackArrow } = useHeaderTitle();

  return (
    <header className="fixed top-0 w-full z-30 bg-white100 py-3 px-2 border-b border-slate15 shadow">
      {showBackArrow && (
        <Link href="/" className="absolute left-2 group">
          <BackArrow className="text-textLight transition-all group-hover:bg-greyCold20 group-hover:text-greyCold900 fill-transparent rounded-full" />
        </Link>
      )}
      <h1 className="text-md text-center p-2">{title}</h1>
    </header>
  );
}
