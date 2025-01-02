'use client'

import React, { useEffect, useRef, useState } from "react";
import deal from "@/../public/images/deals.png";
import Image from "next/image";
import { Deals } from "@/Static_data/data";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
const Deal = () => {
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (pathname === '/') {
        localStorage.clear()
      }
    }
  }, [pathname]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const progressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Reset and start progress for the current active index
    setProgress(0);

    // Clear any existing interval
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    // Create new interval for progress and auto-progression
    progressIntervalRef.current = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          // Move to next FAQ item
          clearInterval(progressIntervalRef.current!);
          setActiveIndex(prev => (prev + 1) % Deals.length);
          return 0;
        }
        // Increment progress
        return prevProgress + (100 / 100); // 5 seconds = 50 * 100ms intervals
      });
    }, 100);

    // Cleanup interval on component unmount or when activeIndex changes
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [activeIndex]);



  // Handle manual item selection
  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="mx-auto max-w-[1920px]   py-[100px]  custom_padding custom_padding xl:px-[110px] xl:pb-[70px] 2xl:px-[170px] 2xl:pb-[125px] 3xl:px-[310px]">
      <div className="space-y-[10px]">
        <h5 className="stronger_security_title font-openSans text-p_dark_blue xl:text-[18px] 2.5xl:text-[22px]">
          No More Hardware
        </h5>
        <h1 className="stronger_security_title font-montserrat text-ti_royel_blue text-[40px] 2.5xl:text-[52px]">
          FleetBlox Outshines Traditional<br /> Fleet  Management Systems
        </h1>
      </div>

      <div className="mt-[60px] flex flex-col lg:flex-row  items-center justify-center gap-x-[80px] ">
        <div className="flex-1 lg:-ml-[60px]  mb-[40px]  flex items-center justify-center">
          <Image src={deal} alt="deal" />
        </div>
        <div className="flex-1 mt-[20px] space-y-[20px]">
          {Deals.map((item, index) => (
            <div
              key={index}
              className={`
              overflow-hidden flex 
          `}
            >
              {/* Loader Indicator */}
              <div className=" w-[2px] relative rounded-lg bg-ti_light_grey ">
                {activeIndex === index && (
                  <motion.div
                    className="absolute top-0 left-0 w-full bg-p_blue"
                    style={{
                      borderRadius: '15px',
                      // opacity: progress / 100,
                    }}
                    initial={{ height: 0 }}
                    animate={{ height: `${progress}%` }}
                    transition={{ duration: 0.1, ease: "linear" }}
                  />
                )}
              </div>

              {/* Content Container */}
              <div className="flex-1 px-[20px] py-[10px]">
                {/* Question Section */}
                <div
                  onClick={() => handleItemClick(index)}
                  className="cursor-pointer flex items-center justify-between"
                >
                  <h3 className="text-[20px] md:text-[22px] font-bold text-ti_royel_blue font-openSans">{item.title}</h3>
                </div>

                {/* Answer Section */}
                {activeIndex === index && (
                  <motion.div
                    className="text-website_text_color_dark_grey font-openSans mt-[16px] text-[14px] md:text-[16px]"
                    initial={{ opacity: 0, y: -1 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ ease: "easeInOut" }}
                  >
                    {item.description}
                  </motion.div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deal;