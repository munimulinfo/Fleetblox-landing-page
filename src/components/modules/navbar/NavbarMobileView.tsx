"use client";
import DownArrowNav from "@/components/icons/DownArrowNav";
import { motion } from "framer-motion";
import { useState } from "react";
import ProductSubpage from "./product/ProductSubpage";
import SolutionsSubpage from "./solutions/SolutionsSubpage";
import ResourcesSubpage from "./resources/ResourcesSubpage";
import TopArrow from "@/components/icons/TopArrow";
const NavbarMobileView = () => {
  const [isProduct, setIsProduct] = useState(false);
  const [isSolutions, setIsSolutions] = useState(false);
  const [isResources, setIsResources] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="lg:hidden absolute top-[63px] left-0 right-0 bg-white z-[0] flex flex-col"
    >
      {/* Pages div - Takes up remaining space */}
      <div className="flex flex-col pb-[100px] h-[calc(100vh-170px)] overflow-y-auto bg-[#FAFAFF] scrollbar-hidden">
        {/* product */}
        <div className="border-b">
          <div
            onClick={() => setIsProduct(!isProduct)}
            className="flex justify-between items-center py-5  text-[#04082C] text-[18px] font-bold font-openSans px-5"
          >
            <h1>Product</h1>
            {isProduct ? <TopArrow /> : <DownArrowNav />}
          </div>
          {isProduct && <ProductSubpage />}
        </div>
        {/* solutions */}
        <div className="border-b">
          <div
            onClick={() => setIsSolutions(!isSolutions)}
            className="flex justify-between items-center py-5  text-[#04082C] text-[18px] font-bold font-openSans px-5"
          >
            <h1>Solutions</h1>
            {isSolutions ? <TopArrow /> : <DownArrowNav />}
          </div>
          {isSolutions && <SolutionsSubpage />}
        </div>
        {/* Resources */}
        <div className="border-b">
          <div
            onClick={() => setIsResources(!isResources)}
            className="flex justify-between items-center py-5  text-[#04082C] text-[18px] font-bold font-openSans px-5"
          >
            <h1>Resources</h1>
            {isResources ? <TopArrow /> : <DownArrowNav />}
          </div>
          {isResources && <ResourcesSubpage />}
        </div>
        <div className="flex justify-between items-center py-5 border-b text-[#04082C] text-[18px] font-bold font-openSans px-5">
          <h1>Pricings</h1>
        </div>
      </div>

      {/* Get Started Button - Sticks to bottom */}
      <div className=" flex flex-col items-center justify-center text-center p-5 bg-[#FAFAFF]">
        <button className="py-3 px-5 bg-[#2D65F2] rounded-md text-[14px] font-openSans font-bold w-full text-white">
          Get Started
        </button>
        <button className="text-[#04082C] text-[14px] font-openSans font-bold py-[10px]">
          Request Demo
        </button>
      </div>
    </motion.div>
  );
};

export default NavbarMobileView;
