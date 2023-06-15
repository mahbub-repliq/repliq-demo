"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../Commons/Header";
import Footer from "../Commons/Footer";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Repliq Test",
  description: "Basic E-Commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`inter.className`}>
        <QueryClientProvider client={queryClient}>
          <Header />
          <div className="pt-4 md:pt-20 lg:pt-28">{children}</div>
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
