"use client";

import DashHeader from "@/Commons/Shared/DashHeader";
import DashFooter from "@/Commons/Shared/DashFooter";

export default function Layout({ children }) {
  return (
    <div className={`bg-base-100`}>
      <DashHeader />
      <div className="px-4 md:px-8 lg:px-12 pt-4 md:pt-8 lg:pt-12 pb-24 md:pb-8 lg:pb-12 bg-slate-50 ">
        {children}
      </div>
      <DashFooter />
    </div>
  );
}
