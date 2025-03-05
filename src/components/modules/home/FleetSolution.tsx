import CostOperatingIcon from "@/components/icons/CostOperatingIcon";
import DecisionMakingIcon from "@/components/icons/DecisionMakingIcon";
import DriverAccountabilityIcon from "@/components/icons/DriverAccountabilityIcon";
import AnimatedCounter from "./../../ui/AnimatedCounter";
import fleetSolutionImg from "../../../assets/fleetSolution.png";
import Image from "next/image";
import NavigationIcon from "@/components/icons/NavigationIcon";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
const StatsSection = () => {
  return (
    <section className="py-[60px] flex flex-col items-center justify-center">
      {/* counter component */}
      <div className="flex flex-col lg:flex-row justify-center gap-20 py-[30px] mb-[60px]">
        <div className="text-center flex flex-col items-center">
          <DecisionMakingIcon />
          <h1 className="text-[#04082C] text-[36px] md:text-[52px] font-bold">
            <AnimatedCounter end={65} />
          </h1>
          <p className="text-[#333] font-openSans text-[16px] font-semibold leading-6">
            Faster Decision-Making and Setup
          </p>
        </div>
        <div className="text-center flex flex-col items-center">
          <CostOperatingIcon />
          <h1 className="text-[#04082C] text-[36px] md:text-[52px] font-bold">
            <AnimatedCounter end={25} />
          </h1>
          <p className="text-[#333] text-[16px] font-openSans font-semibold leading-6">
            Reduction in Operating Costs
          </p>
        </div>
        <div className="text-center flex flex-col items-center">
          <DriverAccountabilityIcon />
          <h1 className="text-[#04082C] text-[36px] md:text-[52px] font-bold ">
            <AnimatedCounter end={30} />
          </h1>
          <p className="text-[#333] text-[16px] font-openSans font-semibold leading-6">
            Boost in Driver Accountability
          </p>
        </div>
      </div>

      {/* Laptop View */}
      <div className="hidden md:flex lg:flex p-10 border mx-auto max-w-7xl border-[#DFDFDF] rounded-[24px]  flex-col md:flex-row lg:flex-row">
        <div>
          <h1 className="text-[#04082C] text-[36px] font-bold mb-5 font-montserrat leading-[1.1]">
            Experience a Smarter Way to Manage Your Fleet
          </h1>
          <button className="md:flex transition-all font-openSans bg-[#2D65F2] hover:bg-[#0336BC] text-white-primary text-white duration-300 hover:w-[144.16px] w-[122.16px]  items-center px-[13px] hover:px-4 py-3 text-base font-bold rounded-md group">
            <div className="z-20 whitespace-nowrap"> Start Today</div>
            <div className="z-10 transform transition-transform opacity-0 group-hover:opacity-100 -translate-x-4 duration-300 group-hover:translate-x-0">
              <RightArrowIcon />
            </div>
          </button>
          <div className="pt-10">
            <div className="flex gap-[16px] mb-[30px]">
              <NavigationIcon />
              <div className=" text-[14px]  leading-5 ">
                <h2 className="font-bold text-[#333]">Lower Costs</h2>
                <p className="text-[#7D7D7D]">
                  Eliminate expensive hardware installation and maintenance.
                </p>
              </div>
            </div>
            <div className="flex gap-[16px] mb-[30px]">
              <NavigationIcon />
              <div className=" text-[14px]  leading-5 ">
                <h2 className="font-bold text-[#333]">
                  Streamlined Operations
                </h2>
                <p className="text-[#7D7D7D]">
                  Manage everything from a cloud-based, all-in-one platform.
                </p>
              </div>
            </div>
            <div className="flex gap-[16px] mb-[30px]">
              <NavigationIcon />
              <div className=" text-[14px]  leading-5 ">
                <h2 className="font-bold text-[#333]">Scalability</h2>
                <p className="text-[#7D7D7D]">
                  Add or remove vehicles effortlessly, free from hardware
                  limitations.
                </p>
              </div>
            </div>
            <div className="flex gap-[16px] mb-[30px]">
              <NavigationIcon />
              <div className=" text-[14px]  leading-5 ">
                <h2 className="font-bold text-[#333]">Enhanced Security</h2>
                <p className="text-[#7D7D7D]">
                  Advanced encryption ensures your data stays protected.
                </p>
              </div>
            </div>
            <div className="flex gap-[16px] mb-[30px]">
              <NavigationIcon />
              <div className=" text-[14px]  leading-5 ">
                <h2 className="font-bold text-[#333]">Increased Efficiency</h2>
                <p className="text-[#7D7D7D]">
                  Leverage AI tools to optimize scheduling and reduce downtime.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Image src={fleetSolutionImg} alt="logo" className="w-full h-full" />
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden lg:hidden  p-4  mx-auto max-w-7xl    flex-col md:flex-row lg:flex-row">
        <div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[#04082C] text-[28px] text-center font-bold mb-5 font-montserrat leading-[1.1]">
              Experience a Smarter <br /> Way to Manage Your <br /> Fleet
            </h1>
            <div className="w-full">
              <Image
                src={fleetSolutionImg}
                alt="logo"
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="pt-10">
            <div className="flex gap-[16px] mb-[30px]">
              <NavigationIcon />
              <div className=" text-[14px]  leading-5 ">
                <h2 className="font-bold text-[#333] font-openSans">
                  Lower Costs
                </h2>
                <p className="text-[#7D7D7D] font-openSans">
                  Eliminate expensive hardware installation and maintenance.
                </p>
              </div>
            </div>
            <div className="flex gap-[16px] mb-[30px]">
              <NavigationIcon />
              <div className=" text-[14px]  leading-5 ">
                <h2 className="font-bold text-[#333] font-openSans">
                  Streamlined Operations
                </h2>
                <p className="text-[#7D7D7D] font-openSans">
                  Manage everything from a cloud-based, all-in-one platform.
                </p>
              </div>
            </div>
            <div className="flex gap-[16px] mb-[30px]">
              <NavigationIcon />
              <div className=" text-[14px]  leading-5 ">
                <h2 className="font-bold text-[#333] font-openSans">
                  Scalability
                </h2>
                <p className="text-[#7D7D7D]  font-openSans">
                  Add or remove vehicles effortlessly, free from hardware
                  limitations.
                </p>
              </div>
            </div>
            <div className="flex gap-[16px] mb-[30px]">
              <NavigationIcon />
              <div className=" text-[14px]  leading-5 ">
                <h2 className="font-bold text-[#333] font-openSans">
                  Enhanced Security
                </h2>
                <p className="text-[#7D7D7D] font-openSans">
                  Advanced encryption ensures your data stays protected.
                </p>
              </div>
            </div>
            <div className="flex gap-[16px] mb-[30px]">
              <NavigationIcon />
              <div className=" text-[14px]  leading-5 ">
                <h2 className="font-bold text-[#333] font-openSans">
                  Increased Efficiency
                </h2>
                <p className="text-[#7D7D7D] font-openSans">
                  Leverage AI tools to optimize scheduling and reduce downtime.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="transition-all bg-[#2D65F2] hover:bg-[#0336BC] text-white-primary text-white duration-300 w-[95%] hover:w-[100%] md:hover:w-[144.16px] md:w-[122.16px] flex items-center justify-center px-4 py-3 text-[16px] font-bold rounded-md group ">
                <div className="z-20 whitespace-nowrap font-openSans font-bold">
                  Getting Started
                </div>
                <div className="z-10 transform transition-transform opacity-0 group-hover:opacity-100 -translate-x-4 duration-300 group-hover:translate-x-0">
                  <RightArrowIcon />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
