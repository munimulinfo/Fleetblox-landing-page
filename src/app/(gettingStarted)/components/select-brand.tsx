/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Search } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
// import NotCompitable from '@/components/shared/NotCompitable';
import { useProgressUpdater } from "@/hooks/useProgress";
import useBrandCarList from "@/hooks/useCompatibility";
import Loader from "./Loader";

interface CarModel {
  name: string;
  endpoints: string[]; // Array of endpoint names like 'Fuel tank', 'Location', etc.
}

interface CarBrand {
  brand: string;
  brandLogo: string;
  models: CarModel[];
  year: string;
}

export type CarBrandsData = CarBrand[];

const BrandSelector = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const country = searchParams.get("country");
  const [searchQuery, setSearchQuery] = useState("");
  const [disabled, setDisabled] = useState(false);

  const { brandCarList, selectedBrands, setSelectedBrands, loading } =
    useBrandCarList(country);

  const handleBrandSelect = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      const updatedBrands = selectedBrands.filter(
        (selectedBrand) => selectedBrand !== brand
      );
      setSelectedBrands(updatedBrands);
      localStorage.setItem("brands", JSON.stringify(updatedBrands));

      // Get existing brand models from localStorage
      const storedBrandModels = JSON.parse(
        localStorage.getItem("brandModels") || "{}"
      );
      // Remove the unselected brand's models
      delete storedBrandModels[brand];
      // Update localStorage
      localStorage.setItem("brandModels", JSON.stringify(storedBrandModels));
    } else {
      const updatedBrands = [...selectedBrands, brand];
      setSelectedBrands(updatedBrands);
      localStorage.setItem("brands", JSON.stringify(updatedBrands));
    }
  };

  const filteredBrands = brandCarList.filter((brand: any) =>
    brand.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const { setCustomProgress, progress } = useProgressUpdater();

  const handleNext = React.useCallback(() => {
    setDisabled(true);
    if (disabled) {
      return;
    }
    setCustomProgress(progress + 10);
    router.push(`/collections/select-brand/${selectedBrands.join(",")}`);
  }, [progress, setCustomProgress, router, selectedBrands]);

  const handleBack = () => {
    setCustomProgress(progress - 10);
    router.back();
  };

  return (
    <div className="relative flex h-[92vh] w-full max-w-[650px] flex-col rounded-lg bg-bg_white px-4 py-[20px] xs:px-6 sm:px-12 md:h-[80vh] md:py-[60px] md:shadow-lg">
      {/* Fixed Header */}
      <div className="flex-shrink-0">
        <div
          onClick={handleBack}
          className="mb-4 flex cursor-pointer items-center gap-1"
        >
          <ArrowLeft size={20} className="text-ti_dark_grey" />
          <span className="font-inter text-sm font-semibold leading-[18px] text-ti_dark_grey">
            Back
          </span>
        </div>

        <div className="mb-8">
          <h2 className="pre_landing_page_title font-inter">
            Select your car brands
          </h2>
          <p className="pre_landing_page_text">
            Choose your car brands currently in your fleet or those you wish to
            add
          </p>
        </div>

        <div className="relative mb-4 flex items-center gap-2 rounded-md bg-bg_dusty_white px-2.5 py-[8px]">
          <Search className="text-ti_grey" size={18} />
          <input
            type="text"
            placeholder="Search"
            className={`w-full bg-bg_dusty_white font-inter text-xs leading-4 outline-none ${
              searchQuery ? "text-ti_light_black" : "text-ti_grey"
            }`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="mb-4 flex items-center gap-1 font-inter text-[14px] font-medium leading-[18px] text-ti_light_black">
          <span>{selectedBrands?.length}</span>
          <span> brands selected</span>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="min-h-0 flex-1 overflow-y-auto">
        <div className="space-y-2.5">
          {loading ? (
            <Loader />
          ) : (
            filteredBrands.map((brand: any) => (
              <div
                key={brand.brand}
                className={`hover:bg-gray-50 flex cursor-pointer items-center justify-between rounded-lg border border-bg_dusty_white p-4 transition-colors ${
                  selectedBrands.includes(brand.brand)
                    ? "select_car_collection_bg border-p_light_blue"
                    : ""
                }`}
                onClick={() => handleBrandSelect(brand.brand)}
              >
                <div className="flex items-center">
                  {brand.brandLogo ? (
                    <Image
                      className="mr-4 flex h-[40px] w-[70px] items-center justify-center object-contain mix-blend-multiply"
                      src={brand.brandLogo}
                      alt="brand logo"
                      width={100}
                      height={100}
                    />
                  ) : (
                    <div className="mr-4 h-[40px] w-[70px]" />
                  )}
                  <div className="text-left font-inter text-sm font-semibold leading-[18px] text-ti_black">
                    {brand?.brand.replace(/[-_]/g, " ")}
                  </div>
                </div>
                <div className="font-inter text-sm font-medium leading-[18px] text-ti_dark_grey">
                  {brand.year}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Fixed Footer */}
      <div className="mt-6 flex flex-shrink-0 flex-col-reverse items-center gap-4 lg:flex-row">
        <button
          onClick={() => router.push("/result/not-compatible")}
          className="pre_landing_page_btn w-full rounded-md px-[14px] py-[8px] font-inter text-[14px] text-ti_grey lg:w-1/2"
        >
          {`I can't find my car brand`}
        </button>
        <button
          onClick={handleNext}
          className={`pre_landing_page_btn w-full rounded-md px-[14px] py-[10px] font-inter text-bg_white lg:w-1/2 ${
            selectedBrands.length ? "bg-p_blue" : "bg-p_blue/50"
          }`}
          disabled={!selectedBrands.length || disabled}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BrandSelector;
