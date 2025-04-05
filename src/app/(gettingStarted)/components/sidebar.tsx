"use client";
import React, { useState, useEffect } from "react";

import FleetBloxIconWhite from "@/components/icons/FleetBloxIconWhite";

import { Stepper } from "@/components/ui/stepper";
import { useProgressUpdater } from "@/hooks/useProgress";
import Link from "next/link";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { currentStep } = useProgressUpdater();
  console.log(isMobile, currentStep);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const sidebarSteps = [
    {
      title: "Check Compatibility",
      description: "Verify Your Fleet's Compatibility",
    },
    {
      title: "Select Pricing",
      description: "Choose Your Subscription Plan",
    },
    {
      title: "Complete Checkout",
      description: "Review and Provide Your Info",
    },
  ];

  return (
    <>
      {/* Mobile sidebar toggle */}

      {/* Sidebar */}
      <aside
        className={`min-w-[350px] bg-[#2D65F2] overflow-y-hidden transition-all duration-300 
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          fixed lg:static h-screen z-40
          hidden lg:block`} // Hide by default, only show on large screens
      >
        <div className="p-4">
          {/* <h2 className="text-xl font-bold">Sidebar</h2> */}
          <Link href="/">
            <div className="flex items-center justify-center mt-10 ">
              <FleetBloxIconWhite />
            </div>
          </Link>
          <nav className="mt-6 flex justify-center">
            {/* Add your sidebar navigation here */}
            <Stepper steps={sidebarSteps} currentStep={currentStep} />
          </nav>
        </div>
        <div className="mt-8 flex justify-between"></div>
      </aside>
    </>
  );
};

export default Sidebar;
