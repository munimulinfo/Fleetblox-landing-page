import CheckIcon from "@/components/icons/CheckIcon";
import CrossIcon from "@/components/icons/CrossIcon";
import FleetbloxIcon from "@/components/icons/FleetbloxIcon";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import Container from "@/components/ui/Container";

const FleetBloxVerseSection = () => {
  return (
    <div className="h-[100vh]  bg-[#FAFAFF] py-10 overflow-hidden ">
      <Container>
        <div className="relative w-full flex flex-col md:flex-row items-center justify-between">
          {/* left card start */}
          <div className="flex-1">
            <h1 className=" text-[28px] md:text-[36px] text-center md:text-left text-[#000E32] font-bold">
              Fleetblox <span className="text-[#0336BC]">Versus</span> <br />{" "}
              Traditional Solutions
            </h1>
            <p className="text-[#000E32] text-center md:text-left font-openSans font-normal text-base mt-4">
              Discover how Fleetblox revolutionizes fleet management,
              outperforming traditional solutions in efficiency, innovation, and
              performance across every key metric
            </p>
            {/* <button className="mt-8 bg-[#2D65F2] hover:bg-[#2D65F2]/80 text-[16px] font-bold text-white px-5 py-3 rounded-md">
              Calculate your savings
            </button> */}

            <button className="hidden md:flex mt-8 transition-all bg-[#2D65F2] hover:bg-[#0336BC] text-white-primary text-white duration-300 hover:w-[110%] max-w-[250px]  items-center px-4 py-3 text-[16px] font-bold rounded-md group ">
              <div className="z-20 whitespace-nowrap">
                Calculate your savings
              </div>
              <div className="z-10 transform transition-transform opacity-0 group-hover:opacity-100 -translate-x-4 duration-300 group-hover:translate-x-0">
                <RightArrowIcon />
              </div>
            </button>

            {/* Calculate section */}
            <div className=" hidden md:flex gap-x-6 mt-20 items-center ">
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
          {/* left side card end*/}

          {/* right side card start */}
          <div className="hidden md:block flex-1 ml-20">
            {/* <div className="w-[500px] h-[500px] bg-[#FFE1BF] opacity-30 blur-[100px] rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div> */}
            <div className="w-[500px] h-[500px] bg-white rounded-[24px] shadow-xl p-8 flex flex-col gap-[10px]">
              {/* Card Header */}
              <div className="flex flex-col items-center mb-8">
                <div className="w-8 h-8 rounded-full border-2 border-[#0336BC] flex items-center justify-center mb-3">
                  <span className="text-[#0336BC] font-semibold">1</span>
                </div>
                <h3 className="text-[#0336BC] text-xl font-bold">
                  Hardware Installation
                </h3>
              </div>

              {/* Fleetblox Advantage */}
              <div className="bg-[#FEFAF0] p-5 rounded-xl flex items-center gap-4">
                <CheckIcon />
                <div>
                  <FleetbloxIcon />

                  <p className="text-[16px] font-openSans text-[#4A4A4A]">
                    No hardware needed; fully cloud-based
                  </p>
                </div>
              </div>

              {/* Traditional Solution */}
              <div className="bg-[#F7F7F7] p-5 rounded-xl flex items-center justify-center gap-4">
                <CrossIcon />
                <div>
                  <div className="text-[#333333] font-semibold mb-1">
                    Traditional Solutions
                  </div>
                  <p className="text-[16px] text-[#4A4A4A] font-openSans">
                    Requires costly, time-consuming hardware setups
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* right side card end */}
        </div>
      </Container>
    </div>
  );
};

export default FleetBloxVerseSection;
