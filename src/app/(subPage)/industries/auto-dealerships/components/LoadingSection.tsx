'use client'

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
const Deal = ({ Deals }: {
    Deals:
    Array<{ title: string; content: string; image: string }>
}) => {
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
                return prevProgress + (100 / 50); // Change from 150 to 50 - now ~2 seconds total
            });
        }, 100);

        // Cleanup interval on component unmount or when activeIndex changes
        return () => {
            if (progressIntervalRef.current) {
                clearInterval(progressIntervalRef.current);
            }
        };
    }, [activeIndex, Deals.length]);



    // Handle manual item selection
    const handleItemClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className="mx-auto max-w-[1200px]  py-[30px] px-5 xl:px-0">

            <div className="mt-[30px] flex flex-col lg:flex-row items-center justify-between gap-x-[40px]">
                <div className="lg:flex-[0.8] h-full lg:min-h-[240px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0 }}
                            className="w-full flex justify-center items-center"
                        >
                            <div className="relative flex justify-center items-center w-full max-w-[550px]">
                                <Image
                                    src={Deals[activeIndex].image}
                                    alt={Deals[activeIndex].title}
                                    width={420}
                                    height={240}
                                    className="object-contain w-full h-auto"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* loading deal section */}
                <div className="flex-1 space-y-[12px] ml-10 py-4">
                    {Deals.map((item, index) => (
                        <div
                            key={index}
                            className="overflow-hidden flex"
                        >
                            {/* Loader Indicator */}
                            <div className="w-[2px] relative rounded-lg bg-[#DFDFDF]">
                                {activeIndex === index && (
                                    <motion.div
                                        className="absolute top-0 left-0 w-full bg-[#2D65F2]"
                                        style={{
                                            borderRadius: '15px',
                                        }}
                                        initial={{ height: 0 }}
                                        animate={{ height: `${progress}%` }}
                                        transition={{ duration: 0.1, ease: "linear" }}
                                    />
                                )}
                            </div>

                            {/* Content Container */}
                            <div className="flex-1 px-[16px] py-[10px]">
                                {/* Question Section */}
                                <div
                                    onClick={() => handleItemClick(index)}
                                    className="cursor-pointer flex items-center justify-between"
                                >
                                    <h3 className="text-[16px] md:text-[18px] font-bold text-[#04082C] font-openSans">{item.title}</h3>
                                </div>

                                {/* Answer Section */}
                                {activeIndex === index && (
                                    <motion.div
                                        className="text-[#333333] font-openSans mt-[10px] text-[13px] md:text-[14px] leading-[1.5]"
                                        initial={{ opacity: 0, y: -1 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ ease: "easeInOut" }}
                                    >
                                        {item.content}
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