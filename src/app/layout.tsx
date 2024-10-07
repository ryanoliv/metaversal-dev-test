import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./components/Header";
import "./globals.css";
import { HeaderTitleProvider } from "./contexts/HeaderTitleContext";
import Providers from "./components/Providers";

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
        <Providers>
          <HeaderTitleProvider>
            <Header />
            <main className="pt-[59px]">{children}</main>
          </HeaderTitleProvider>
        </Providers>
      </body>
    </html>
  );
}
