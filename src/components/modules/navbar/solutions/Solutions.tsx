import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ChevronDown } from "lucide-react";
import SolutionsSubpage from "./SolutionsSubpage";

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
          <SolutionsSubpage />
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
