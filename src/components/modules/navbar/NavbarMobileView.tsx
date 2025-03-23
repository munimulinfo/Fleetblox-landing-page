"use client";
import DownArrowNav from "@/components/icons/DownArrowNav";
import { motion } from "framer-motion";
import { useState } from "react";
import ProductSubpage from "./product/ProductSubpage";
import SolutionsSubpage from "./solutions/SolutionsSubpage";
import ResourcesSubpage from "./resources/ResourcesSubpage";
import TopArrow from "@/components/icons/TopArrow";
import Image from "next/image";
const NavbarMobileView = () => {
  const [isProduct, setIsProduct] = useState(false);
  const [isSolutions, setIsSolutions] = useState(false);
  const [isResources, setIsResources] = useState(false);
  const [isDemoRequest, setIsDemoRequest] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="lg:hidden absolute top-[63px] left-0 right-0 bg-white z-[0] flex flex-col"
    >
      {isDemoRequest && (
        <div className="!h-screen bg-white z-50 mt-10 px-5">
          <h1 className="text-[#04082C] text-center text-[28px] font-bold">
            Demo Coming Soon
          </h1>
          <p className="text-[#333] font-openSans text-[14px] leading-5 text-center mt-[10px] mb-[30px]">
            {` Hey there! We're committed to delivering an exceptional demo
            experience. Our team is fine-tuning every detail to ensure a
            seamless and inspiring journey through our app!`}
          </p>
          <div className="flex justify-center items-center -ml-5">
            <Image
              src="/images/requestDemo.png"
              alt="request demo"
              width={400}
              height={285}
              className="object-fill "
              priority
            />
          </div>
        </div>
      )}
      <div>
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
          <button
            onClick={() => setIsDemoRequest(true)}
            className="text-[#04082C] text-[14px] font-openSans font-bold py-[10px]"
          >
            Request Demo
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default NavbarMobileView;
