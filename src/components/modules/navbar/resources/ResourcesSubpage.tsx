import Link from "next/link";
const ResourcesSubpage = () => {
  return (
    <div className="lg:pt-[30px] pr-[30px] pl-5 lg:pl-[30px] bg-white lg:pb-[60px] grid grid-cols-1 lg:grid-cols-3 lg:gap-[60px]">
      {/* Learn page */}
      <div className="flex flex-col lg:space-y-[10px] space-y-[16px] pb-5 border-b lg:border-none">
        <p className="text-[#7D7D7D] font-openSans text-[12px]">Learn</p>
        <div className="flex flex-col lg:space-y-[8px] space-y-[5px]">
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              Blogs
            </h1>
          </Link>
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              Customer Stories
            </h1>
          </Link>
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              Events
            </h1>
          </Link>
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              Next Updates
            </h1>
          </Link>
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              What’s New
            </h1>
          </Link>
        </div>
      </div>
      {/* Company page */}
      <div className="flex flex-col lg:space-y-[10px] space-y-[16px] pb-5 border-b lg:border-none">
        <p className="text-[#7D7D7D] font-openSans text-[12px]">Company</p>
        <div className="flex flex-col lg:space-y-[8px] space-y-[5px]">
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              About
            </h1>
          </Link>
          <Link href="/contact">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              Contact
            </h1>
          </Link>
        </div>
      </div>
      {/* Support page */}
      <div className="flex flex-col lg:space-y-[10px] space-y-[16px] pb-5">
        <p className="text-[#7D7D7D] font-openSans text-[12px]">Support</p>
        <div className="flex flex-col lg:space-y-[8px] space-y-[5px]">
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              Help Center
            </h1>
          </Link>
          <Link href="/under-development">
            <h1 className="text-[#333] text-[14px] leading-5 font-openSans py-[10px] lg:py-0 font-bold lg:font-semibold hover:text-[#7D7D7D]">
              Knowledge Base
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResourcesSubpage;
