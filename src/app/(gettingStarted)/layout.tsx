"use client";

import React from "react";
import Sidebar from "./components/sidebar";
import ContextProvider from "@/providers/contextProvider";

import { usePathname } from "next/navigation";
import ProgressBar from "@/components/ui/shared/ProgressBar";

const GettingLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <main className="flex h-screen">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 overflow-y-auto p-4">
        <ContextProvider>
          {/* Progress Bar - Add conditional rendering based on path */}
          {pathname !== "/collections/submit-details-early-interest" &&
            pathname !== "/collections/submit-details" &&
            pathname !== "/collections/price-plan" &&
            pathname !== "/collections/price-plan/v2" && (
              <div className="relative z-[2000000] -mb-[5px] flex h-[5px] w-full items-start justify-start overflow-hidden">
                <ProgressBar />
              </div>
            )}

          {children}
        </ContextProvider>
      </div>
    </main>
  );
};

export default GettingLayout;
