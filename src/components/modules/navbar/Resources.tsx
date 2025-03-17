import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export function Resources() {
  return (
    <Menubar className="border-none shadow-none !bg-transparent">
      <MenubarMenu>
        <MenubarTrigger className="border-none !bg-transparent focus:bg-transparent active:bg-transparent">
          {" "}
          <div className="flex cursor-pointer items-center gap-[2px] text-[16px] font-openSans font-semibold leading-6 transition-all duration-300 ease-in-out hover:text-[#7D7D7D] active:bg-transparent">
            <h1>Resources</h1>
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
            {/* Learn page */}
            <div className="flex flex-col space-y-[10px]">
              <p className="text-[#7D7D7D] font-openSans text-[12px]">Learn</p>
              <div className="flex flex-col space-y-[8px]">
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Blogs
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Customer Stories
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Events
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Next Updates
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    What’s New
                  </h1>
                </Link>
              </div>
            </div>
            {/* Company page */}
            <div className="flex flex-col space-y-[10px]">
              <p className="text-[#7D7D7D] font-openSans text-[12px]">
                Company
              </p>
              <div className="flex flex-col space-y-[5px]">
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    About
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Contact
                  </h1>
                </Link>
              </div>
            </div>
            {/* Support page */}
            <div className="flex flex-col space-y-[10px]">
              <p className="text-[#7D7D7D] font-openSans text-[12px]">
                Support
              </p>
              <div className="flex flex-col space-y-[5px]">
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Help Center
                  </h1>
                </Link>
                <Link href={"/#"}>
                  <h1 className="text-[#333] text-[14px] leading-5 font-openSans font-semibold hover:text-[#7D7D7D]">
                    Knowledge Base
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
