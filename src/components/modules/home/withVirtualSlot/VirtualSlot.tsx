"use client";
import { full_control_with_virtual_slot_data } from "@/Static_data/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import VirtualCard from "./VirtualCard";
import Container from "@/components/ui/Container";
import Image from "next/image";
import RightArrowIcon from "@/components/icons/RightArrowIcon";

const VirtualSlot = () => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const headerOpacity = useTransform(scrollYProgress, [0.0, 0.09], [1, 0]);
  return (
    <div className="bg-[#FAFAFF]">
      <Container>
        {/* heading start */}
        <motion.div
          style={{ opacity: headerOpacity }}
          className={`sticky -top-[170px] z-10 flex md:h-[80vh] flex-col items-center justify-center gap-[10px] pb-[10px]`}
        >
          {/* Centered Soft Blurred Ellipse */}
          <div className="hidden md:block absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#ffe1bf] opacity-30 blur-[100px] rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>

          {/* Content */}
          <div className=" hidden md:block  relative text-center">
            <h1 className="text-[28px] z-10 lg:text-[52px] text-[#000E32] font-bold">
              Take <span className="text-[#0336BC]">Full Control</span> with
              Virtual <br className="hidden md:block " />
              Parking Slot Technology
            </h1>
          </div>
        </motion.div>
        {/* heading end */}
        <div
          ref={container}
          className=" hidden md:block lg:block relative mt-[20px]  w-full"
        >
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
        {/* Mobile view */}
        <div className="md:hidden">
          <h1 className="text-[28px] text-center mb-8 text-[#000E32] font-bold">
            Take <span className="text-[#0336BC]">Full Control</span> with
            Virtual <br className="hidden md:block " />
            Parking Slot Technology
          </h1>
          {full_control_with_virtual_slot_data.map((item) => {
            return (
              <section
                key={item?.id}
                className="relative bg-white max-h-[630px] my-5 w-full flex flex-col rounded-[16px] items-center justify-center gap-5 "
              >
                <div className="flex-1 overflow-hidden  w-full h-full rounded-t-[16px]">
                  <Image
                    src={item.mobile}
                    className="object-fill w-full h-full "
                    alt="image"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-y-[5px] text-left p-5">
                  <Image src={item.icon} alt="icon" />
                  <h1 className="text-[22px] text-left text-[#000E32] font-openSans font-bold ">
                    {item.title}
                  </h1>
                  <p className="text-[14px] text-left font-openSans text-[#333] leading-[20px]">
                    {item.description}
                  </p>

                  <button className="transition-all mt-4 bg-[#2D65F2] hover:bg-[#0336BC] text-white-primary text-white duration-300 w-[95%] hover:w-[100%] md:hover:w-[144.16px] md:w-[122.16px] flex items-center justify-center px-4 py-3 text-[16px] font-bold rounded-md group ">
                    <div className="z-20 whitespace-nowrap font-openSans font-bold">
                      Learn More
                    </div>
                    <div className="z-10 transform transition-transform opacity-0 group-hover:opacity-100 -translate-x-4 duration-300 group-hover:translate-x-0">
                      <RightArrowIcon />
                    </div>
                  </button>

                  <div className="absolute drop-shadow-2xl top-[220px] right-2 w-[250px] h-[120px]">
                    <Image src={item.absolute} alt={item.title}></Image>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default VirtualSlot;
