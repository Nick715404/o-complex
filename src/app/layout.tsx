import "./globals.css";

import Header from "@/components/Header/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Generation Market",
  description: "",
  authors: [{ name: "nicklllson", url: "" }]
};

interface Props {
  children: Readonly<React.ReactNode>;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
