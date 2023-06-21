"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../Commons/Shared/Header";
import Footer from "../Commons/Shared/Footer";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import ClientOnly from "@/Components/ClientOnly";
import { Toaster } from "react-hot-toast";

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
        <ClientOnly>
          <QueryClientProvider client={queryClient}>
            <Header />
            <div className="pt-4 md:pt-20">{children}</div>
            <Footer />
            <Toaster />
          </QueryClientProvider>
        </ClientOnly>
      </body>
    </html>
  );
}
