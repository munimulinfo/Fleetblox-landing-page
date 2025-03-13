import React from "react";
import Sidebar from "./components/sidebar";
import ContextProvider from "@/providers/contextProvider";

const GettingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen ">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 overflow-y-auto p-4">
        <ContextProvider>{children}</ContextProvider>
      </div>
    </main>
  );
};

export default GettingLayout;
