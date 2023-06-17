"use client";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={`inter.className`}>
        <QueryClientProvider client={queryClient}>
          <div className="">{children}</div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
