import Link from "next/link";
const SolutionsSubpage = () => {
  return (
    <div className="p-[30px] bg-white  grid grid-cols-1 lg:grid-cols-2 lg:gap-[60px] ">
      {/* Solutions page */}
      <div className="flex flex-col lg:space-y-[10px] space-y-[16px] border-b lg:border-none">
        <p className="text-[#7D7D7D] font-openSans text-[12px] pt-5 lg:pt-0">
          Solutions
        </p>
        <div className="flex flex-col lg:space-y-[8px] space-y-[5px]">
          <Link href="/solutions/cloud-telematic">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              Cloud Telematics
            </h1>
          </Link>
          <Link href="/solutions/remote-access">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              Remote Access
            </h1>
          </Link>
          <Link href="/solutions/remote-scalability">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              Remote Scalability
            </h1>
          </Link>
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              Cost Optimization
            </h1>
          </Link>
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              Compliance and Safety
            </h1>
          </Link>
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              EV Fleet Integration
            </h1>
          </Link>
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              Remote Inspection
            </h1>
          </Link>
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              Maintenance and Diagnostics
            </h1>
          </Link>
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              Workforce Connectivity
            </h1>
          </Link>
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              AI Fleet Assistant
            </h1>
          </Link>

          {/* <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D] flex gap-[10px]">
              Geofencing{" "}
              <button className="text-[8px] rounded-[4px] py-[0px] px-[6px] bg-[#2D65F2] text-white">
                Upcoming
              </button>
            </h1>
          </Link> */}
        </div>
      </div>
      {/* Industries page */}
      <div className="flex flex-col lg:space-y-[10px] space-y-[16px] border-b lg:border-none">
        <p className="text-[#7D7D7D] font-openSans text-[12px] pt-5 lg:pt-0">
          Industries
        </p>
        <div className="flex flex-col lg:space-y-[8px] space-y-[5px]">
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              Auto Dealerships
            </h1>
          </Link>
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              Car Sharing Services
            </h1>
          </Link>
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              Car Subscription Services
            </h1>
          </Link>
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              Auto Insurance Services
            </h1>
          </Link>
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              Car Rental Providers
            </h1>
          </Link>
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              E-Mobility Services
            </h1>
          </Link>
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              Fleet Management Services
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SolutionsSubpage;
