"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import Container from "@/components/ui/Container";
import { cards } from "@/static_data/data";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import VersusCard from "./VersusCard";
import FleetBloxMobileVerse from "./FleetBloxMobileVerse";

const FleetBloxVerseSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const cardStyles = useScrollAnimations(cards, scrollYProgress);
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const visibleIndex = cards.findIndex((_, index) => {
      const start = index / cards.length;
      const end = (index + 1) / cards.length;
      return latest >= start && latest < end;
    });

    if (visibleIndex !== -1) {
      setActiveIndex(visibleIndex);
    }
  });

  return (
    <>
      <section
        ref={sectionRef}
        className="relative hidden md:block"
        style={{ height: `${cards.length * 120}vh` }}
      >
        <div className="hidden md:block sticky top-0 min-h-screen bg-[#FAFAFF] py-20">
          <Container>
            <div className="w-full flex flex-col md:flex-row items-start justify-between">
              <motion.div className="flex-1 sticky top-20">
                <div className="flex-1">
                  <h1 className="text-[36px] text-[#000E32] font-bold">
                    Fleetblox <span className="text-[#0336BC]">Versus</span>{" "}
                    <br />
                    Traditional Solutions
                  </h1>
                  <p className="text-[#000E32] font-normal text-base mt-4">
                    Discover how Fleetblox revolutionizes fleet management,
                    outperforming traditional solutions in efficiency,
                    innovation, and performance across every key metric
                  </p>
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
                        {activeIndex + 1}
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
                        <rect
                          y="0.5"
                          width="20"
                          height="5"
                          rx="2"
                          fill="#7D7D7D"
                        />
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
              </motion.div>

              {/* Card container */}
              <div className="flex-1 ml-20 relative h-[500px]">
                {cards.map((item, index) => (
                  <VersusCard key={index} {...item} style={cardStyles[index]} />
                ))}

                <div className="w-[664px] h-[664px] bg-[#FFE1BF] opacity-30 blur-[200px] rounded-[664px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Mobile */}

      <FleetBloxMobileVerse />
    </>
  );
};

export default FleetBloxVerseSection;
