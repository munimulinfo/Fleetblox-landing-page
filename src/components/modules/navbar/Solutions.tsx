import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export function Solutions() {
  return (
    <Menubar className="border-none shadow-none !bg-transparent">
      <MenubarMenu>
        <MenubarTrigger className="border-none !bg-transparent focus:bg-transparent active:bg-transparent">
          {" "}
          <div className="flex cursor-pointer items-center gap-[2px] text-[16px] font-openSans font-semibold leading-6 transition-all duration-300 ease-in-out hover:text-[#7D7D7D] active:bg-transparent">
            <h1>Solutions</h1>
            <div className="mt-[3px] flex items-center justify-center">
              <ChevronDown size={18} />
            </div>
          </div>
        </MenubarTrigger>
        <MenubarContent
          className="border-none rounded-[24px] bg-white mt-[30px] z-[2000] -ml-10"
          style={{ boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.14)" }}
        >
          <div className="pt-[30px] pr-[30px] pl-[30px] pb-[60px] grid grid-cols-4 gap-[50px]">
            {/* Solutions page */}
            <div className="flex flex-col space-y-[10px]">
              <p className="text-[#7D7D7D] font-openSans text-[12px]">
                Solutions
              </p>
              <div className="flex flex-col space-y-[8px]">
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Cloud Garage
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Remote Access
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Remote Scale
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Cost Optimization
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Maintenance and Diagnostics
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    EV Fleet Integration
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Compliance and Safety
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Workforce Connectivity
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    AI Fleet Coordinator
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    AI Inspection
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D] flex gap-[10px]">
                    Trip Management{" "}
                    <button className="text-[8px] rounded-[4px] py-[0px] px-[6px] bg-[#2D65F2] text-white">
                      Upcoming
                    </button>
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D] flex gap-[10px]">
                    Geofencing{" "}
                    <button className="text-[8px] rounded-[4px] py-[0px] px-[6px] bg-[#2D65F2] text-white">
                      Upcoming
                    </button>
                  </h1>
                </Link>
              </div>
            </div>
            {/* Industries page */}
            <div className="flex flex-col space-y-[10px]">
              <p className="text-[#7D7D7D] font-openSans text-[12px]">
                Industries
              </p>
              <div className="flex flex-col space-y-[5px]">
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Rental Providers
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Mobility Services
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Dealerships
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Public Transit
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Green Logistics
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Transportation
                  </h1>
                </Link>
              </div>
            </div>
            {/* Roles page */}
            <div className="flex flex-col space-y-[10px]">
              <p className="text-[#7D7D7D] font-openSans text-[12px]">Roles</p>
              <div className="flex flex-col space-y-[5px]">
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Fleet Managers
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Fleet Technicians
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    IT Leaders
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Owners and Executive
                  </h1>
                </Link>
              </div>
            </div>
            {/* Use cases page */}
            <div className="flex flex-col space-y-[10px]">
              <p className="text-[#7D7D7D] font-openSans text-[12px]">
                Use cases
              </p>
              <div className="flex flex-col space-y-[5px]">
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Cost Optimization
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Compliance and Safety
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Efficiency and Productivity
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Hardware Free Fleet Connectivity
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    AI-powered Management
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    EV and Sustainability
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Remote Operations
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
