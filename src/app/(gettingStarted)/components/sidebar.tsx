"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // You can use any icon library
import FleetBloxIconWhite from "@/components/icons/FleetBloxIconWhite";

import { Stepper } from "@/components/ui/stepper";
import { useProgressUpdater } from "@/hooks/useProgress";

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
      description: "Verify Your Device's Compatibility",
    },
    {
      title: "Select Pricing",
      description: "Choose Your Subscription Plan",
    },
    {
      title: "Complete Checkout",
      description: "Review and Process Your Order",
    },
  ];

  return (
    <>
      {/* Mobile sidebar toggle */}
      <div className="hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-md bg-gray-100"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`min-w-[350px] bg-[#2D65F2] overflow-y-hidden transition-all duration-300  ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:static h-screen z-40`}
      >
        <div className="p-4">
          {/* <h2 className="text-xl font-bold">Sidebar</h2> */}
          <div className="flex items-center justify-center mt-10 ">
            <FleetBloxIconWhite />
          </div>
          <nav className="mt-6 flex justify-center">
            {/* Add your sidebar navigation here */}
            <Stepper steps={sidebarSteps} currentStep={currentStep} />
          </nav>
        </div>
        <div className="mt-8 flex justify-between">
          {/* <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={currentStep === sidebarSteps.length - 1}
          >
            Next
          </Button> */}
        </div>
      </aside>

      {/* Overlay for mobile when sidebar is open */}
      {/* {isSidebarOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )} */}
    </>
  );
};

export default Sidebar;
