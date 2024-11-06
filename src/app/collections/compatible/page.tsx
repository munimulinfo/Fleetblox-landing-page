'use client'
import Image from "next/image";
import success from "@/../public/images/success.svg";
// import start from "@/../public/images/start-with-us.jpg";

import trueIcon from '@/../public/images/true.svg'
import falseIcon from '@/../public/images/false.svg'
import { BrandCarList } from "@/Static_data/data";
import { useRouter } from "next/navigation";

const Compatible = () => {
  const router = useRouter();
  const selectedBrands = localStorage.getItem('brands');
  const storedBrandModels = JSON.parse(localStorage.getItem('brandModels') || '{}');

  console.log(storedBrandModels, 'storedBrandModels');

  const filteredCompatibleBrands = BrandCarList.filter((brand) => {
    const isSelected = selectedBrands?.includes(brand.brand);
    if (isSelected) {
      return {
        brand: brand.brand,
        brandLogo: brand.brandLogo,
        compatible: storedBrandModels[brand.brand] !== null
      }
    }
    return false;
  }).filter(Boolean).map(brand => ({
    brand: brand.brand,
    brandLogo: brand.brandLogo,
    compatible: storedBrandModels[brand.brand] !== null
  }));

  console.log(filteredCompatibleBrands, 'filteredCompatibleBrands');

  return (

    <div className="relative flex h-[780px] items-center justify-between  w-full max-w-[650px] flex-col rounded-lg bg-bg_white px-[60px] py-[60px] shadow-lg">
      <div>
        <div className="flex flex-shrink-0 flex-col items-center justify-center">
          <Image alt="failed image" className="mb-[10px]" src={success} />
          <h2 className="pre_landing_page_title font-inter">
            Your fleet is compatible!
          </h2>
          <p className="pre_landing_page_text">
            {`The brands and models you selected are compatible with us! If a car isn’t on the list, it’s not supported. Share your details to receive up to 15% off!`}
          </p>
        </div>
        <div className="mt-[40px] w-full space-y-[5px] rounded-md">
          {
            filteredCompatibleBrands.map((brand) => (
              <div key={brand.brand} className="flex items-center justify-between border rounded-md px-[16px] py-[12px]">
                <Image src={brand.brandLogo} alt={brand.brand} className="h-[40px] w-auto object-contain" />
                <p className="font-inter text-[16px] font-semibold text-ti_black">{brand.brand}</p>
                {brand.compatible ? <Image src={trueIcon} width={16} height={16} alt="success" /> : <Image src={falseIcon} width={16} height={16} alt="failed" />}
              </div>
            ))
          }
        </div>
      </div>
      <div className="w-full">
        <button onClick={() => router.push(`/collections/submit-details`)} className="w-full rounded-md bg-p_blue px-[14px] py-[9.3px] font-inter text-[14px] font-semibold text-bg_white">
          Next
        </button>
      </div>
    </div>

  );
};

export default Compatible;
