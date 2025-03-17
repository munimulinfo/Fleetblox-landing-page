import RightArrowIcon from "@/components/icons/RightArrowIcon";
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export function Product() {
  return (
    <Menubar className="border-none shadow-none !bg-transparent">
      <MenubarMenu>
        <MenubarTrigger className="border-none !bg-transparent focus:bg-transparent active:bg-transparent">
          {" "}
          <div className="flex cursor-pointer items-center gap-[2px] text-[16px] font-openSans font-semibold leading-6 transition-all duration-300 ease-in-out hover:text-[#7D7D7D] active:bg-transparent">
            <h1>Products</h1>
            <div className="mt-[3px] flex items-center justify-center">
              <ChevronDown size={18} />
            </div>
          </div>
        </MenubarTrigger>
        <MenubarContent
          className="border-none rounded-[24px] bg-white mt-[30px] z-[2000]"
          style={{ boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.14)" }}
        >
          <div className="pt-[30px] pr-[30px] pl-[30px] pb-[60px] grid grid-cols-3 gap-[60px]">
            {/* platform page */}
            <div className="flex flex-col space-y-[10px]">
              <p className="text-[#7D7D7D] font-openSans text-[12px]">
                Platform
              </p>
              <div className="flex flex-col space-y-[8px]">
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Overview
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Connectivity
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    AI
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Monitoring
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Scalability
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Efficiency
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Fleetblox Crew
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Compliance and Safety
                  </h1>
                </Link>
              </div>
            </div>
            {/* Features page */}
            <div className="flex flex-col space-y-[10px]">
              <p className="text-[#7D7D7D] font-openSans text-[12px]">
                Features
              </p>
              <div className="flex flex-col space-y-[5px]">
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Vehicle Compatibility
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Real-time Telematics
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    AI-powered Inspection
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Predictive Maintenance
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Dynamic Expense Management
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Vehicle Profiles
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    GPS Fleet Tracking
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Remote Digital Key
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Dynamic Fleet Alerts
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Advanced Team Management
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Multi-fleet Management
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    BEE - AI Chat Bot
                  </h1>
                </Link>
              </div>
              {/* <button className="text-left text-[#2D65F2] text-[14px] font-semibold font-openSans leading-5">
                View All Features
              </button> */}
              <button className="transition-all mt-[5px]  leading-5 font-openSans text-[#2D65F2] duration-300 hover:w-[144.16px] w-[131.94px] flex items-center text-[14px] font-semibold group">
                <div className="z-20 whitespace-nowrap text-left font-openSans">
                  View All Features
                </div>
                <div className="z-10 transform transition-transform opacity-0 group-hover:opacity-100 -translate-x-0 duration-300 group-hover:translate-x-0">
                  <RightArrowIcon fill="#2D65F2" />
                </div>
              </button>
            </div>
            {/* Subscription page */}
            <div className="flex flex-col space-y-[10px]">
              <p className="text-[#7D7D7D] font-openSans text-[12px]">
                Subscription
              </p>
              <div className="flex flex-col space-y-[5px]">
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Eagle Eye Fleet
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Dynamic Fleet
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
