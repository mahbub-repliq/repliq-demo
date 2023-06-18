"use client";

import DashHeader from '@/Commons/Shared/DashHeader'
import DashFooter from '@/Commons/Shared/DashFooter'

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={`inter.className bg-base-100`}>
        <DashHeader />
        <div className="p-4 md:p-8 lg:p-12">{children}</div>
        <DashFooter />
      </body>
    </html>
  );
}
