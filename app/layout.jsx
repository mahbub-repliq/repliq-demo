"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../Commons/Shared/Header";
import Footer from "../Commons/Shared/Footer";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`inter.className`}>
        <ClientOnly>
          <QueryClientProvider client={queryClient}>
            {!pathname.includes("/dashboard") && <Header />}
            <div className={`${!pathname.includes("/dashboard") && 'pt-4 md:pt-20'}`}>{children}</div>
            {!pathname.includes("/dashboard") && <Footer />}
            <Toaster />
          </QueryClientProvider>
        </ClientOnly>
      </body>
    </html>
  );
}
