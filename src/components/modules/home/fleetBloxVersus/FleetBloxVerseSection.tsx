"use client";
import Container from "@/components/ui/Container";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import { full_control_with_virtual_slot_data } from "@/Static_data/data";
import VirtualCard from "../withVirtualSlot/VirtualCard";

const FleetBloxVerseSection = () => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div className="bg-[#FAFAFF]">
      <Container>
        <div className="flex justify-between items-center w-full">
          {/* first section */}
          <div className="sticky top-20 self-start h-fit ">
            <h1 className="text-[36px] text-[#000E32] font-bold">
              Fleetblox Versus <br /> Traditional Solutions
            </h1>
            <p className="text-[#000E32] font-normal text-base mt-4">
              Discover how Fleetblox revolutionizes fleet management,
              outperforming traditional solutions in efficiency, innovation, and
              performance across every key metric
            </p>
            {/* <button className="mt-8 bg-[#2D65F2] hover:bg-[#2D65F2]/80 text-[16px] font-bold text-white px-5 py-3 rounded-md">
              Calculate your savings
            </button> */}

            <button className="mt-8 transition-all bg-[#2D65F2] hover:bg-[#0336BC] text-white-primary text-white duration-300 hover:w-[110%] max-w-[250px] flex items-center px-4 py-3 text-[16px] font-bold rounded-md group ">
              <div className="z-20 whitespace-nowrap">
                Calculate your savings
              </div>
              <div className="z-10 transform transition-transform opacity-0 group-hover:opacity-100 -translate-x-4 duration-300 group-hover:translate-x-0">
                <RightArrowIcon />
              </div>
            </button>

            {/* Calculate section */}
            <div className="flex gap-x-6 mt-20 items-center ">
              <div className="flex flex-col items-center gap-2">
                <span className="text-[52px] text-[#7D7D7D] font-bold  font-montserrat">
                  1
                </span>
                <span className="text-[18px] text-[#7D7D7D] font-bold font-montserrat">
                  Fleetblox
                </span>
              </div>
              <div className="-mt-5">
                <svg
                  width="20"
                  height="6"
                  viewBox="0 0 20 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width="20" height="5" rx="2" fill="#7D7D7D" />
                </svg>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-[52px] text-[#7D7D7D] font-bold font-montserrat">
                  0
                </span>
                <span className="text-[18px] text-[#7D7D7D] font-bold font-montserrat">
                  Traditional
                </span>
              </div>
            </div>
          </div>
          {/* firs section end */}
          {/* heading end */}
          <div ref={container} className="relative w-full border">
            {full_control_with_virtual_slot_data.map((item, index) => {
              const targetScale =
                1 - (full_control_with_virtual_slot_data.length - index) * 0.05;
              return (
                <VirtualCard
                  image={item.image}
                  key={index}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  index={index}
                  progress={scrollYProgress}
                  range={[index * 0.25, 1]}
                  targetScale={targetScale}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FleetBloxVerseSection;
