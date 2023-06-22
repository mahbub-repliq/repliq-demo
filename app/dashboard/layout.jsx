"use client";

import DashHeader from "@/Commons/Shared/DashHeader";
import DashFooter from "@/Commons/Shared/DashFooter";
import ClientOnly from "@/Components/ClientOnly";

export default function Layout({ children }) {
  return (
      <body className={` bg-base-100`}>
        {/* <ClientOnly> */}
          <DashHeader />
          <div className="p-4 md:p-8 lg:p-12 bg-slate-50">{children}</div>
          <DashFooter />
        {/* </ClientOnly> */}
      </body>
  );
}
