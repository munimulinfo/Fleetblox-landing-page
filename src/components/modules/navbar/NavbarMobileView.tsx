"use client";
import DownArrowNav from "@/components/icons/DownArrowNav";
import { motion } from "framer-motion";
import { useState } from "react";
const NavbarMobileView = () => {
  const [isProduct, setIsProduct] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="md:hidden absolute top-[63px] left-0 right-0 bg-[#FAFAFF] z-[0] h-screen flex flex-col px-5 overflow-y-auto"
    >
      {/* Pages div - Takes up remaining space */}
      <div className="flex flex-col flex-1 pb-[100px]">
        <div>
          <div
            onClick={() => setIsProduct(!isProduct)}
            className="flex justify-between items-center py-5 border-b text-[#04082C] text-[18px] font-bold font-openSans"
          >
            <h1>Product</h1>
            <DownArrowNav />
          </div>
          {isProduct && (
            <div className="h-[500px]">
              <h1>Expanded</h1>
            </div>
          )}
        </div>
        <div className="flex justify-between items-center py-5 border-b text-[#04082C] text-[18px] font-bold font-openSans">
          <h1>Solutions</h1>
          <DownArrowNav />
        </div>
        <div className="flex justify-between items-center py-5 border-b text-[#04082C] text-[18px] font-bold font-openSans">
          <h1>Resources</h1>
          <DownArrowNav />
        </div>
        <div className="flex justify-between items-center py-5 border-b text-[#04082C] text-[18px] font-bold font-openSans">
          <h1>Pricings</h1>
        </div>
      </div>

      {/* Get Started Button - Sticks to bottom */}
      <div className="absolute bottom-12 left-0 right-0 bg-white py-5">
        <div className="flex flex-col items-center justify-center text-center px-5">
          <button className="py-3 px-5 bg-[#2D65F2] rounded-md text-[14px] font-openSans font-bold w-full text-white">
            Get Started
          </button>
          <button className="text-[#04082C] text-[14px] font-openSans font-bold py-[10px]">
            Request Demo
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default NavbarMobileView;
