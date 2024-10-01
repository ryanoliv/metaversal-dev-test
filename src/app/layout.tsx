import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const robotoFlex = localFont({
  src: "./fonts/RobotoFlex-VariableFont.ttf",
  variable: "--font-roboto-flex",
  weight: "500 800",
});

export const metadata: Metadata = {
  title: "Metaversal Frontend Test",
  description: "Build a user posts feed and user profiles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${robotoFlex.variable} antialiased`}>
      <body className="relative">
        <header className="fixed top-0 w-full z-30 bg-white/100 py-3 px-2 border-b border-slate/15 shadow">
          <h1 className="text-md text-center p-2">Feed</h1>
        </header>
        <main className="pt-[59px]">{children}</main>
      </body>
    </html>
  );
}
