import Link from "next/link";

const ProductSubpage = () => {
  return (
    <div className="p-[30px] bg-white grid grid-cols-1 lg:grid-cols-3 lg:gap-[60px]">
      {/* platform page */}
      <div className="flex flex-col lg:space-y-[10px] space-y-[16px] border-b lg:border-none">
        <p className="text-[#7D7D7D] font-openSans text-[12px] pt-5 lg:pt-0">
          Platform
        </p>
        <div className="flex flex-col  space-y-[5px] lg:space-y-[8px]">
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              Overview
            </h1>
          </Link>
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              Onboarding
            </h1>
          </Link>
          <Link href="/features/fleet-connectivity">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              Connectivity
            </h1>
          </Link>
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              Scalability
            </h1>
          </Link>
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D] flex gap-[10px]">
              Inspections
              <button className="text-[8px] rounded-[4px] py-[0px] px-[6px] bg-[#2D65F2] text-white">
                Upcoming
              </button>
            </h1>
          </Link>
          <Link href="/features/dynamic-maintenancet">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              Maintenance
            </h1>
          </Link>
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              Expenses
            </h1>
          </Link>
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              Compliance
            </h1>
          </Link>
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              Alerts
            </h1>
          </Link>
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              Teams
            </h1>
          </Link>
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              AI Assistant
            </h1>
          </Link>
          {/* <div className="mt-[20px] text-[#2D65F2] text-[14px] font-openSans leading-5 font-semibold">
            <button className="pt-2">View All Features</button>
          </div> */}
        </div>
      </div>
      {/* Mobile apps */}
      <div className="flex flex-col lg:space-y-[10px] space-y-[16px] border-b lg:border-none">
        <p className="text-[#7D7D7D] font-openSans text-[12px] pt-5 lg:pt-0">
          Mobile Apps
        </p>
        <div className="flex flex-col space-y-[5px] lg:space-y-[8px]">
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              Fleetblox Crew
            </h1>
          </Link>
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D] flex gap-[10px]">
              Fleetblox Gos{" "}
              <button className="text-[8px] rounded-[4px] py-[0px] px-[6px] bg-[#2D65F2] text-white">
                Upcoming
              </button>
            </h1>
          </Link>
        </div>
        {/* <button className="transition-all mt-[5px]  leading-5 font-openSans text-[#2D65F2] duration-300 hover:w-[144.16px] w-[131.94px] flex items-center text-[14px] font-semibold group">
          <div className="z-20 whitespace-nowrap text-left font-openSans">
            View All Features
          </div>
          <div className="z-10 transform transition-transform opacity-0 group-hover:opacity-100 -translate-x-0 duration-300 group-hover:translate-x-0">
            <RightArrowIcon fill="#2D65F2" />
          </div>
        </button> */}
      </div>
      {/* Subscription page */}
      <div className="flex flex-col lg:space-y-[10px] space-y-[16px] ">
        <p className="text-[#7D7D7D] font-openSans text-[12px] pt-5 lg:pt-0">
          Subscription
        </p>
        <div className="flex flex-col lg:space-y-[8px] space-y-[5px]">
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              Starter Fleet
            </h1>
          </Link>
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              Eagle Eye Fleet
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductSubpage;
