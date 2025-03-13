/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import success from "@/../public/images/Icons.png";

import trueIcon from "@/../public/images/true.svg";
import falseIcon from "@/../public/images/false.svg";
import { useRouter } from "next/navigation";
import { useProgressUpdater } from "@/hooks/useProgress";
import { useCallback, useState } from "react";

import close from "@/../public/images/access_point/down.svg";
import open from "@/../public/images/access_point/up.svg";
import Loader from "../../components/Loader";
import Access from "./AccessPoint";
import useBrandCarList from "@/hooks/useCompatibility";
import { ChevronLeft } from "lucide-react";

const Compatible = () => {
  const router = useRouter();
  const { selectedBrands, storedBrandModels, brandCarList, loading, vins } =
    useBrandCarList(null);
  const { setCustomProgress, progress } = useProgressUpdater();
  const [isOpen, setIsOpen] = useState("");

  const showAccessPoint = (modelName: string) => {
    if (isOpen === modelName) {
      setIsOpen("");
    } else {
      setIsOpen(modelName);
    }
  };

  const handleBack = () => {
    setCustomProgress(progress - 10);
    router.push(`/collections/compatibility`);
  };

  // Filter and determine compatibility status using `useMemo` for memoization
  const filteredCompatibleBrands = useCallback(() => {
    return brandCarList
      .filter((brand: any) => selectedBrands.includes(brand.brand))
      .map((brand: any) => ({
        brand: brand.brand,
        brandLogo: brand.brandLogo,
        compatible: storedBrandModels[brand.brand] !== null,
      }));
  }, [selectedBrands, storedBrandModels, brandCarList]);

  if (filteredCompatibleBrands().length > 0) {
    const areAllUncompatible = filteredCompatibleBrands()?.every(
      (brand: any) => brand.compatible === false
    );
    if (!areAllUncompatible) {
      console.log("areAllUncompatible", areAllUncompatible);
    } else {
      console.log(areAllUncompatible, "areAllUncompatible");
      router.push("/result/not-compatible");
    }
  }

  if (vins && vins?.length > 0) {
    const areAllUncompatible = vins?.every(
      (brand) => brand.isCompatible === false
    );
    if (!areAllUncompatible) {
      console.log("areAllUncompatible", areAllUncompatible);
    } else {
      console.log(areAllUncompatible, "areAllUncompatible");
      router.push("/result/not-compatible");
    }
  }

  const handleNext = () => {
    setCustomProgress(progress + 10);
    router.push("/collections/pricing-plan");
  };

  return (
    <main className="flex flex-col min-h-screen w-full max-w-[900px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <div className="flex-shrink-0">
        <div
          onClick={handleBack}
          className="mb-4 flex cursor-pointer items-center gap-1"
        >
          <ChevronLeft size={16} className="text-[#999]" />
          <span className="font-openSans text-sm font-semibold leading-[18px] text-[#999]">
            Back
          </span>
        </div>
      </div>

      <div className="mb-[40px] flex flex-shrink-0 flex-col items-center">
        <Image alt="failed image" className="mb-[10px]" src={success} />
        <div className="mb-8 text-center">
          <h2 className="font-bold text-[24px] sm:text-[28px] font-openSans text-[#04082C] ">
            Your Fleet is Compatible!
          </h2>
          <p className="font-openSans text-[14px] leading-[155%] sm:text-[16px] text-[#7D7D7D] mx-auto">
            The VINs you shared are compatible with us! Proceed to complete
            checkout.
          </p>
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto">
          <div className="space-y-[10px] font-openSans">
            {loading && !vins ? (
              <Loader />
            ) : (
              filteredCompatibleBrands().map((brand: any) => (
                <div
                  key={brand.brand}
                  className="flex items-center justify-between rounded-md border px-[16px] py-[12px]"
                >
                  <div className="flex items-center gap-[10px]">
                    <Image
                      src={brand.brandLogo}
                      alt={brand.brand}
                      width={100}
                      height={100}
                      className="flex h-[40px] w-[70px] items-center justify-center object-contain mix-blend-multiply"
                    />
                    <p className="font-openSans text-[16px] font-semibold text-[#04082C]">
                      {brand.brand}
                    </p>
                  </div>
                  <div className="w-[110px]">
                    {brand.compatible ? (
                      <div className="flex items-center gap-[5px]">
                        <Image
                          src={trueIcon}
                          width={16}
                          height={16}
                          alt="success"
                        />
                        <span className="font-openSans text-[12px] text-[#2D65F2]">
                          Compatible
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-[5px]">
                        <Image
                          src={falseIcon}
                          width={16}
                          height={16}
                          alt="failed"
                        />
                        <span className="font-openSans text-[14px] text-[#F00]">
                          Incompatible
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}

            {vins &&
              vins.map((vin, idx) => (
                <div
                  key={idx}
                  className="rounded-md border border-bg_dusty_white px-[16px] py-[12px]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[10px]">
                      {vin.isCompatible ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            showAccessPoint(vin.vin);
                          }}
                          className="flex h-5 w-5 items-center justify-center"
                        >
                          <Image
                            className="size-[20px] object-cover"
                            src={isOpen === vin.vin ? open : close}
                            alt="toggle"
                          />
                        </button>
                      ) : (
                        <div className="h-5 w-5"></div>
                      )}
                      <div className="text-left font-openSans text-sm font-[600] leading-[18px] text-[#04082C]">
                        {`VIN - ${vin.vin}`}
                      </div>
                    </div>
                    <div className="w-[110px]">
                      {vin.isCompatible ? (
                        <div className="flex items-center gap-[5px]">
                          <Image
                            src={trueIcon}
                            width={16}
                            height={16}
                            alt="success"
                          />
                          <span className="font-openSans text-[14px] text-[#2D65F2]">
                            Compatible
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-[5px]">
                          <Image
                            src={falseIcon}
                            width={16}
                            height={16}
                            alt="failed"
                          />
                          <span className="font-openSans text-[14px] text-[#F00]">
                            Incompatible
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  {isOpen === vin.vin && vin.endpoints && (
                    <Access
                      endpoints={vin.endpoints.map((endpoint) => ({
                        endpoint: endpoint.endpoint,
                        capable: endpoint.capable,
                      }))}
                    />
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Fixed Footer Buttons */}
      <div className="mt-[40px] flex w-full flex-shrink-0 flex-col-reverse items-center gap-4 lg:flex-row">
        <button
          onClick={handleNext}
          className="w-full rounded-md bg-[#2D65F2] px-[14px] py-[10px] font-openSans text-[14px] font-semibold text-white"
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default Compatible;
