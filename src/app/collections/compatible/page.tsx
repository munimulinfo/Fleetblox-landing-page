'use client'
import Image from "next/image";
import success from "@/../public/images/Icons.png";


import trueIcon from '@/../public/images/true.svg'
import falseIcon from '@/../public/images/false.svg'
import { useRouter } from "next/navigation";
import { useProgressUpdater } from "@/hooks/useProgress";
import { useCallback, useState } from "react";
import useBrandCarList from "@/hooks/useCompitibily";
import Loader from '@/components/Loader'
import close from '@/../public/images/access_point/down.svg'
import open from '@/../public/images/access_point/up.svg'
import AccessPoint from './AccessPoint'

const Compatible = () => {
  const router = useRouter();
  const { selectedBrands, storedBrandModels, brandCarList, loading, vins } = useBrandCarList(null)
  const { setCustomProgress, progress } = useProgressUpdater();
  const [isOpen, setIsOpen] = useState('');

  const showAccessPoint = (modelName: string) => {
    if (isOpen === modelName) {
      setIsOpen('')
    } else {
      setIsOpen(modelName)
    }
  }



  // Filter and determine compatibility status using `useMemo` for memoization
  const filteredCompatibleBrands = useCallback(() => {
    return brandCarList.filter(brand => selectedBrands.includes(brand.brand)).map(brand => ({
      brand: brand.brand,
      brandLogo: brand.brandLogo,
      compatible: storedBrandModels[brand.brand] !== null
    }));
  }, [selectedBrands, storedBrandModels, brandCarList]);


  if (filteredCompatibleBrands().length > 0) {
    const areAllUncompatible = filteredCompatibleBrands()?.every(brand => brand.compatible === false);
    if (!areAllUncompatible) {
      console.log('areAllUncompatible', areAllUncompatible);
    } else {
      console.log(areAllUncompatible, 'areAllUncompatible');
      router.push('/result/not-compatible');
    }
  }

  if (vins && vins?.length > 0) {
    const areAllUncompatible = vins?.every(brand => brand.isCompatible === false);
    if (!areAllUncompatible) {
      console.log('areAllUncompatible', areAllUncompatible);
    } else {
      console.log(areAllUncompatible, 'areAllUncompatible');
      router.push('/result/not-compatible');
    }
  }

  const handleNext = () => {
    setCustomProgress(progress + 10);
    router.push('/collections/submit-details-early-interest');
  }

  return (

    <div className="relative bg-bg_white rounded-lg md:shadow-lg w-full max-w-[650px]  h-[92vh] md:h-[80vh] flex flex-col px-[20px] xs:px-[30px] sm:px-[60px] py-[20px] md:py-[60px]">

      <div className="  mb-[40px] flex-shrink-0 flex flex-col items-center">
        <Image alt="failed image" className="mb-[10px]" src={success} />
        <h2 className="pre_landing_page_title font-inter">
          Your fleet is  compatible!
        </h2>
        <p className="pre_landing_page_text">
          {`The VINs you shared are compatible with us! Proceed to checkout.`}
        </p>
      </div>

      <div className="flex-1 min-h-0 overflow-hidden">
        <div className="h-full overflow-y-auto">
          <div className="space-y-[10px] font-inter">
            {loading && !vins ? <Loader /> :
              filteredCompatibleBrands().map((brand) => (
                <div key={brand.brand} className="flex items-center justify-between border rounded-md px-[16px] py-[12px]">
                  <div className=" flex items-center gap-[10px]">
                    <Image src={brand.brandLogo} alt={brand.brand} width={100} height={100} className="mix-blend-multiply flex items-center justify-center object-contain w-[70px] h-[40px]" />
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

            {vins && vins.map((vin, idx) => (
              <div key={idx} className="border px-[16px] py-[12px] rounded-md  border-bg_dusty_white">
                <div className="flex items-center justify-between  ">
                  <div className=" flex items-center gap-[10px]">
                    {vin.isCompatible ? <button
                      onClick={(e) => {
                        e.stopPropagation();
                        showAccessPoint(vin.vin);
                      }}
                      className="w-5 h-5 flex items-center justify-center"
                    >
                      <Image
                        className="size-[20px] object-cover"
                        src={isOpen === vin.vin ? open : close}
                        alt="toggle"
                      />
                    </button> : <div className=" w-5 h-5"></div>}
                    <div className="leading-[18px] font-medium text-left text-ti_black font-inter text-sm">
                      {`VIN - ${vin.vin}`}
                    </div>
                  </div>
                  <div className="w-[110px]">
                    {vin.isCompatible ? (
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
                {isOpen === vin.vin && vin.endpoints && <AccessPoint endpoints={vin.endpoints.map(endpoint => ({endpoint: endpoint.endpoint, capable: endpoint.capable}))} />

                }
              </div>
            ))}

          </div>
        </div>
      </div>



      {/* Fixed Footer Buttons */}
      <div className="flex-shrink-0 w-full mt-[40px] flex lg:flex-row flex-col-reverse items-center gap-4">
        <button
          onClick={handleNext} className="w-full rounded-md bg-p_blue px-[14px] py-[10px] font-inter text-[14px] font-semibold text-bg_white"
        >
          Next
        </button>
      </div>
    </div >

  );
};

export default Compatible;

