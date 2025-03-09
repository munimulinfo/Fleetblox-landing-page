import CheckIcon from "@/components/icons/CheckIcon";
import CrossIcon from "@/components/icons/CrossIcon";
import FleetbloxIcon2 from "@/components/icons/FleetbloxIcon2";

import { cards } from "@/Static_data/data";

const FleetBloxMobileVerse = () => {
  return (
    <>
      {/* mobile slider */}
      <div className="">
        <div className="flex-1 block lg:hidden mt-10 w-full">
          <div
            className="overflow-x-scroll pb-4 scrollbar-hide -mx-4"
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
        </div>
      </div>
      ;
    </>
  );
};

export default FleetBloxMobileVerse;
