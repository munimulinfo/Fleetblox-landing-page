'use client'
import Image from "next/image";
import success from "@/../public/images/Icons.png";


import trueIcon from '@/../public/images/true.svg'
import falseIcon from '@/../public/images/false.svg'
import { BrandCarList } from "@/Static_data/data";
import { useRouter } from "next/navigation";
import { useProgressUpdater } from "@/hooks/useProgress";
import { useCallback, useEffect, useState } from "react";

const Compatible = () => {
  const router = useRouter();
  const [selectedBrands, setSelectedBrands] = useState('');
  const [storedBrandModels, setStoredBrandModels] = useState<Record<string, string | null>>({});


  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSelectedBrands(localStorage.getItem('brands') || '');
      setStoredBrandModels(JSON.parse(localStorage.getItem('brandModels') || '{}'));
    }
  }, []);

  const { setCustomProgress, progress } = useProgressUpdater();


  // Filter and determine compatibility status using `useMemo` for memoization
  const filteredCompatibleBrands = useCallback(() => {
    return BrandCarList.filter(brand => selectedBrands.includes(brand.brand)).map(brand => ({
      brand: brand.brand,
      brandLogo: brand.brandLogo,
      compatible: storedBrandModels[brand.brand] !== null
    }));
  }, [selectedBrands, storedBrandModels]);


  if (filteredCompatibleBrands().length > 0) {
    const areAllUncompatible = filteredCompatibleBrands()?.every(brand => brand.compatible === false);
    if (!areAllUncompatible) {
      console.log('areAllUncompatible', areAllUncompatible);
    } else {
      console.log(areAllUncompatible, 'areAllUncompatible');
      router.push('/result/not-compatible');
    }
  }




  const handleNext = () => {
    setCustomProgress(progress + 10);
    router.push('/collections/submit-details');
  }

  return (

    <div className="relative flex h-[780px] items-center justify-between  w-full max-w-[650px] flex-col rounded-lg bg-bg_white px-[20px] xs:px-[30px] sm:px-[60px] py-[20px] md:py-[60px] md:shadow-lg">
      <div>
        <div className="flex flex-shrink-0 flex-col items-center justify-center">
          <Image alt="failed image" className="mb-[10px]" src={success} />
          <h2 className="pre_landing_page_title font-inter">
            Your fleet is  compatible!
          </h2>
          <p className="pre_landing_page_text">
            {`The brands and models you selected are compatible with us! If a car isn’t on the list, it’s not supported. Share your details to receive up to 15% off!`}
          </p>
        </div>
        <div className="mt-[40px] w-full space-y-[5px] rounded-md">
          {
            filteredCompatibleBrands().map((brand) => (
              <div key={brand.brand} className="flex items-center justify-between border rounded-md px-[16px] py-[12px]">
                <div className=" flex items-center gap-[10px]">
                  <Image src={brand.brandLogo} alt={brand.brand} className="mix-blend-multiply flex items-center justify-center object-contain w-[70px] h-[40px]" />
                  <p className="font-inter text-[16px] font-semibold text-ti_black">{brand.brand}</p>
                </div>
                <div className="w-[110px]">
                  {brand.compatible ? (
                    <div className="flex items-center gap-[5px]">
                      <Image src={trueIcon} width={16} height={16} alt="success" />
                      <span className="font-inter text-[14px]  text-[#4DB429]">Compatible</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-[5px]">
                      <Image src={falseIcon} width={16} height={16} alt="failed" />
                      <span className="font-inter text-[14px]  text-[#F00]">Incompatible</span>
                    </div>
                  )}
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="w-full">
        <button onClick={handleNext} className="w-full rounded-md bg-p_blue px-[14px] py-[9.3px] font-inter text-[14px] font-semibold text-bg_white">
          Next
        </button>
      </div>
    </div >

  );
};

export default Compatible;
