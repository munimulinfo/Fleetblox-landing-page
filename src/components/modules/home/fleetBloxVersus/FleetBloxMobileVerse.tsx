import CheckIcon from "@/components/icons/CheckIcon";
import CrossIcon from "@/components/icons/CrossIcon";
import FleetbloxIcon2 from "@/components/icons/FleetbloxIcon2";

import { cards } from "@/Static_data/data";

const FleetBloxMobileVerse = () => {
  return (
    <div className="relative">
      {/* <div className="max-h-[200px] lg:h-[300px] md:h-[400px] filter blur-[200px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20  rounded-[520px] w-[200px] bg-[#FBEECA]  absolute "></div> */}
      <div className="px-5 pt-[80px] block lg:hidden">
        <h1 className="text-[28px] text-center md:text-left text-[#000E32] font-bold leading-[1.1]">
          Fleetblox <span className="text-[#0336BC]">Versus </span> <br />{" "}
          Traditional Solutions
        </h1>
        <p className="text-center text-[#333] text-[14px] leading-5 font-openSans mt-[10px] mb-10">
          Discover how Fleetblox revolutionizes fleet management, outperforming
          traditional solutions in efficiency, innovation, and performance
          across every key metric
        </p>
      </div>
      <div className="block lg:hidden mt-10 w-full">
        <div
          className="overflow-x-scroll pb-4 scrollbar-hide  hide-scroll"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div
            className="flex flex-nowrap gap-4 px-10"
            style={{ width: "max-content" }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex-shrink-0 max-w-[430px] w-[330px] md:w-full"
              >
                <div className="bg-white rounded-[16px] h-[450px] shadow-[0_4px_12px_0px_#00000024] p-6 flex flex-col gap-[10px]">
                  {/* Card Header */}
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-8 h-8 rounded-full border-2 border-[#0336BC] flex items-center justify-center mb-3">
                      <span className="text-[#0336BC] font-semibold">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-[#0336BC] text-lg font-bold text-center">
                      {card.title}
                    </h3>
                  </div>

                  {/* Fleetblox Advantage */}
                  <div className="bg-[#FEFAF0] p-4 rounded-xl flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <CheckIcon classname="w-6 h-6" />
                    </div>
                    <div>
                      <div className="w-[80px] h-[16px]">
                        <FleetbloxIcon2 />
                      </div>
                      <p className="text-[14px] my-2 font-openSans text-[#4A4A4A]">
                        {card.fleetbloxText}
                      </p>
                    </div>
                  </div>

                  {/* Traditional Solution */}
                  <div className="bg-[#F7F7F7] p-4 rounded-xl flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <CrossIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[#333333] font-semibold mb-1 text-sm">
                        Traditional Solutions
                      </div>
                      <p className="text-[14px] text-[#4A4A4A] font-openSans">
                        {card.traditionalText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="px-5 mt-10">
          <button className="lg:hidden bg-[#2D65F2] hover:bg-[#0336BC] text-white w-full flex px-4 py-3 text-[14px] font-openSans font-bold rounded-md justify-center">
            Calculate your savings
          </button>
        </div>
      </div>
    </div>
  );
};

export default FleetBloxMobileVerse;
