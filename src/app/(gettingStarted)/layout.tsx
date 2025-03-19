"use client";
import React, { useEffect } from "react";
import Sidebar from "./components/sidebar";
import ContextProvider from "@/providers/contextProvider";
import { usePathname } from "next/navigation";
import ProgressBar from "@/components/ui/shared/ProgressBar";

const GettingLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  // This effect ensures scroll events properly propagate
  useEffect(() => {
    // Prevent any global scroll blockers
    const preventDefaultForScrollKeys = (e: KeyboardEvent) => {
      if (
        [
          "Space",
          "PageUp",
          "PageDown",
          "End",
          "Home",
          "ArrowLeft",
          "ArrowUp",
          "ArrowRight",
          "ArrowDown",
        ].includes(e.code)
      ) {
        return;
      }
    };

    // Add event listeners to ensure scrolling works properly
    window.addEventListener("keydown", preventDefaultForScrollKeys, false);

    return () => {
      window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
    };
  }, []);

  return (
    <ContextProvider>
      <div className="flex h-screen w-full overflow-hidden">
        {/* Sidebar Component */}
        <Sidebar />

        {/* Main content */}
        <div className="flex-1 flex flex-col relative overflow-hidden">
          {/* Progress Bar - Add conditional rendering based on path */}
          {pathname !== "/collections/price-plan/v2" && (
            <div className="relative h-[5px] w-full bg-gray-200">
              <ProgressBar />
            </div>
          )}

          {/* Scrollable Content Area */}
          <div
            className="flex-1 h-full overflow-y-scroll p-4 relative"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "thin",
              msOverflowStyle: "auto",
              willChange: "transform", // Hardware acceleration
            }}
            onWheel={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      </div>
    </ContextProvider>
  );
};

export default GettingLayout;
