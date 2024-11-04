import Image from "next/image";
import success from "@/../public/images/success.svg";
import start from "@/../public/images/start-with-us.jpg";

import trueIcon from '@/../public/images/true.svg'
import falseIcon from '@/../public/images/false.svg'
import { compatibleBrands } from "@/Static_data/data";
import Link from "next/link";

const NotCompatible = () => {


  return (
    <div className="relative h-screen w-screen">
      <Link href="/">
        <Image
          src={start}
          alt="start with us"
          className="absolute inset-0 h-full w-full"
        />
     </Link>

      <div className="z-[1000000] flex min-h-screen items-center justify-center overflow-auto bg-bg_white p-4">
        <div className="relative flex h-[780px] items-center justify-between  w-full max-w-[650px] flex-col rounded-lg bg-bg_white px-[60px] py-[60px] shadow-lg">
          <div>
            <div className="flex flex-shrink-0 flex-col items-center justify-center">
              <Image alt="failed image" className="mb-[10px]" src={success} />
              <h2 className="pre_landing_page_title font-inter">
                Your fleet is compatible!
              </h2>
              <p className="pre_landing_page_text">
                {`Your cars are compatible with our platform! Send us your personal and brand information, and get up to 15% discount!`}
              </p>
            </div>
            <div className="mt-[40px] w-full space-y-[5px] rounded-md">
              {
                compatibleBrands.map((brand) => (
                  <div key={brand.name} className="flex items-center justify-between border rounded-md px-[16px] py-[12px]">
                    <Image src={brand.image} alt={brand.name} className=" w-[70px] h-[40px]  object-cover" />
                    <p className="font-inter text-[16px] font-semibold text-ti_black">{brand.name}</p>
                    {brand.compatible ? <Image src={trueIcon} width={16} height={16} alt="success" /> : <Image src={falseIcon} width={16} height={16} alt="failed" />}
                  </div>
                ))
              }
            </div>
          </div>
          <div className="w-full">
            <button className="w-full rounded-md bg-p_blue px-[14px] py-[9.3px] font-inter text-[14px] font-semibold text-bg_white">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotCompatible;
