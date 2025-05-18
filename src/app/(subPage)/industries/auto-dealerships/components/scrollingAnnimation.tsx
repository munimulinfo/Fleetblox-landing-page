"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import useScrollSpy from "@/hooks/useScrollSpy";

import Image from "next/image";

const ScrollingSection = ({ animationItems }: { animationItems: Array<{ title: string; content: string; image: string }> }) => {
    // Force Next.js to revalidate these images by adding timestamp


    // Updated to trigger at 0.05 (just at the top of viewport) for desired behavior
    const { activeIndex, componentRef } = useScrollSpy(".scroll-section",);

    // Debug the active index changes
    useEffect(() => {
        console.log("Active index changed to:", activeIndex);
    }, [activeIndex]);

    return (
        <div className="flex bg-white" ref={componentRef}>
            {/* Left Side - Image */}

            <div className="sticky top-0 flex h-screen w-1/2 items-center justify-center bg-gradient-to-b from-white via-[#FEFAF0] to-white">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.1 }}
                    >
                        <div className="relative flex h-[430px] w-[630px] md:mr-10 md2:mr-12 lg:mr-10 xl:ml-20 xxl:ml-28 items-center justify-center">
                            <Image
                                src={animationItems[activeIndex].image}
                                alt={`Animation slide ${activeIndex + 1}`}
                                width={630}
                                height={430}
                                className="h-full w-full"
                                priority
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Right Side - Text Content */}
            <div className="relative flex w-1/2 flex-col">
                {/* Top fade gradient */}
                <div className="to-transparent absolute left-0 top-0 h-[200px] w-full bg-gradient-to-b from-bg_white z-10"></div>

                {/* Bottom fade gradient */}
                <div className="to-transparent absolute bottom-0 left-0 h-[200px] w-full bg-gradient-to-t from-bg_white z-10"></div>

                {/* Text content sections */}
                <div className="flex flex-col">
                    {animationItems.map((data, index) => (
                        <div
                            key={index}
                            className={`scroll-section flex h-screen items-center p-8 ${activeIndex === index ? 'active-section' : ''}`}
                            data-index={index}
                        >
                            <div className="xl:max-w-[540px] 2xl:max-w-[590px]">
                                <h2 className="pb-[16px] pt-[10px] font-montserrat xl:text-[26px] 2xl:text-[36px] lg:text-[36px] text-lg font-bold leading-[30px] text-[#04082C]">
                                    {data.title}
                                </h2>
                                <p className="font-openSans text-[16px] text-[#333]">
                                    {data.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ScrollingSection;