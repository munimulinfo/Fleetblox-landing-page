"use client";

import { motion, AnimatePresence } from "framer-motion";
import useScrollSpy from "@/hooks/useScrollSpy";

import Image from "next/image";

const ScrollingSection = () => {
    // Force Next.js to revalidate these images by adding timestamp


    const animationItems = [
        {
            title: "Keep All Vehicle Sales Ready and in Excellent Condition",
            content: "Check the condition of every vehicle in your inventory on a consistent basis, whether it is a demo, loaner, or new vehicle. Use checks to track wear-and-tear, damage, or service needed, so that your inventory remains sale-ready.",
            image: `/images/industries/slide-animation-1.svg`
        },
        {
            title: "Ensure Every Vehicle Is Compliant and Road-Ready",
            content: "Monitor registrations, insurance, and servicing with a system that will maintain your entire fleet in immaculate compliance. Automated monitoring and on-time reminders ensure nothing slips through the cracks - so every vehicle remains legal, safe, and ready to roll.",
            image: `/images/industries/slide-animation-2.svg`
        },
        {
            title: "Maximize Customer Satisfaction and Fleet Health",
            content: "Lease cars, demos, and courtesy cars shouldn't keep you in suspense - they should leave you with potential. Fleetblox gives you real-time visibility into the status, utilization, and health of every unit. Look to the future for service requirements, sidestep costly delays, and keep each vehicle road-ready and revenue-ready - no matter where it is in its life cycle.",
            image: `/images/industries/slide-animation-3.svg`
        }
    ];
    const { activeIndex, componentRef } = useScrollSpy(".scroll-section", 1);

    // Debug logging to see active index changes
    // console.log("ScrollingSection activeIndex:", animationItems[activeIndex].image);

    return (
        <div className="flex bg-white" ref={componentRef}>
            {/* Left Side - Video */}
            <div className="sticky top-0 flex h-screen w-1/2 items-center justify-center bg-gradient-to-b from-[#FFFFFF] to-[#FEFAF0] ">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="relative flex h-[430px] w-[630px] items-center justify-center">
                            <Image
                                key={`slide-image-${activeIndex}`}
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
            <div className="relative flex w-1/2 flex-col items-start justify-center">
                <div className="to-transparent absolute left-0 top-0 h-[200px] w-full bg-gradient-to-b from-bg_white"></div>
                <div className="to-transparent absolute bottom-0 left-0 h-[200px] w-full bg-gradient-to-t from-bg_white"></div>
                {animationItems.map((data, index) => (
                    <div
                        key={index}
                        className="scroll-section flex h-[1200px] min-h-screen items-center p-8"
                    >
                        <div className="xl:max-w-[540px] 2xl:max-w-[590px]">

                            <h2 className=" pb-[16px] pt-[10px] font-montserrat xl:text-[26px] 2xl:text-[36px] lg:text-[36px] text-lg font-bold leading-[30px] text-[#04082C]">
                                {data.title}
                            </h2>
                            <p className=" font-openSans text-[16px] text-[#333] ">{data.content}</p>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScrollingSection;