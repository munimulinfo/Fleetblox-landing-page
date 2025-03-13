import CostOperatingIcon from "@/components/icons/CostOperatingIcon";
import DecisionMakingIcon from "@/components/icons/DecisionMakingIcon";
import DriverAccountabilityIcon from "@/components/icons/DriverAccountabilityIcon";
import AnimatedCounter from "./../../ui/AnimatedCounter";
import fleetSolutionImg from "../../../assets/fleetSolution.png";
import Image from "next/image";
import NavigationIcon from "@/components/icons/NavigationIcon";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import Link from "next/link";
const StatsSection = () => {
  return (
    <section className="py-[60px] flex flex-col items-center justify-center mx-auto max-w-[1200px] px-4">
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
      <div className="hidden md:flex lg:flex border mx-auto max-w-[1200px] border-[#DFDFDF] rounded-[24px] flex-col lg:flex-row">
        <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 p-10 mx-auto">
          <h1 className="text-[#04082C] text-[36px] text-center lg:text-left font-bold mb-5 font-montserrat leading-[1.1]">
            Experience a Smarter Way to Manage Your Fleet
          </h1>
          <Link href="/upcoming-page">
            <button className="md:flex transition-all font-openSans bg-[#2D65F2] hover:bg-[#0336BC] text-white-primary text-white duration-300 hover:w-[144.16px] w-[122.16px]  items-center px-[13px] hover:px-4 py-3 text-base font-bold rounded-md group">
              <div className="z-20 whitespace-nowrap"> Start Today</div>
              <div className="z-10 transform transition-transform opacity-0 group-hover:opacity-100 -translate-x-4 duration-300 group-hover:translate-x-0">
                <RightArrowIcon />
              </div>
            </button>
          </Link>
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
        <div className="lg:w-1/2 w-full mx-auto lg:mt-10 xl:mt-20 flex justify-center items-center relative">
          <Image
            src={fleetSolutionImg}
            alt="logo"
            className="w-full h-auto object-contain"
          />
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
              <div className=" text-[14px] leading-5 ">
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
            <Link href="/upcoming-page">
              <button className="lg:hidden bg-[#2D65F2] hover:bg-[#0336BC] text-white w-full flex px-4 py-3 text-[14px] font-openSans font-bold rounded-md justify-center">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
