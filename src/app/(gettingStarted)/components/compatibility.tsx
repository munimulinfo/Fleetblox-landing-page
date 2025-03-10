/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useProgressUpdater } from "@/hooks/useProgress";
import Vin from "@/../public/images/vinsvg.svg";
import vehicle from "@/../public/images/vehicle.svg";
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

const Compatibility = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const country = searchParams.get("country");
  const [mode, setMode] = useState("");
  const [compatibility, setCompatibility] = useState<string | null>(null);

  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const compatibility = localStorage.getItem("compatibility");
      setCompatibility(compatibility);
    }
  }, []);

  const handleModeSelect = (mode: string) => {
    if (mode === "vin") {
      localStorage.removeItem("brandModels");
      localStorage.removeItem("brands");
    }

    if (mode === "vehicle") {
      localStorage.removeItem("VINS");
      localStorage.removeItem("VINS_RESULT");
    }

    if (compatibility === mode) {
      localStorage.removeItem("compatibility");
      setMode("");
      setCompatibility(null);
      localStorage.removeItem("");
    } else {
      setCompatibility(mode);
      setMode(mode);
      localStorage.setItem("compatibility", mode);
    }
  };

  const { setCustomProgress, progress } = useProgressUpdater();

  const handleNext = React.useCallback(() => {
    setDisabled(true);
    if (disabled) {
      return;
    }
    if (mode === "vin") {
      router.push(`/collections/VIN?country=${country}`);
    } else {
      router.push(`/collections/select-brand?country=${country}`);
    }
    setCustomProgress(progress + 10);
  }, [mode, setCustomProgress, progress, router, country]);

  const handleBack = () => {
    setCustomProgress(progress - 10);
    router.push(`/collections/select-country`);
  };

  return (
    <div className="relative flex h-[90vh] w-full max-w-[650px] flex-col rounded-lg bg-bg_white px-4 py-[20px] xs:px-6 sm:px-12 md:h-[90vh] md:py-[60px] md:shadow-lg">
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
            Check your vehicle compatibility
          </h2>
          <p className="pre_landing_page_text">
            Before proceeding, we need to ensure your vehicles are compatible
            with our platform. Please select one of the following methods
          </p>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="min-h-0 flex-1 overflow-y-auto">
        <div className="">
          <div className="mb-4 flex items-center gap-1 font-inter text-[14px] font-bold leading-[18px] text-ti_dark_grey">
            <span>Select your method</span>
          </div>
        </div>

        <div className="flex flex-col gap-[10px]">
          <div
            onClick={() => handleModeSelect("vin")}
            className={`flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border border-bg_dusty_white p-[20px] ${
              compatibility === "vin"
                ? "select_car_collection_bg border-p_light_blue"
                : ""
            }`}
          >
            <Image src={Vin} alt="" />
            <h4 className="mt-[32px] text-center font-inter text-[18px] font-semibold text-ti_black">
              Test by VIN
            </h4>
            <h4 className="text-center font-inter text-[14px] text-ti_dark_grey">
              Use your vehicles’ VIN
            </h4>
          </div>
          <div
            onClick={() => handleModeSelect("vehicle")}
            className={`flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border border-bg_dusty_white p-[20px] ${
              compatibility === "vehicle"
                ? "select_car_collection_bg border-p_light_blue"
                : ""
            }`}
          >
            <Image src={vehicle} alt="" />
            <h4 className="mt-[32px] text-center font-inter text-[18px] font-semibold text-ti_black">
              Test by vehicle models
            </h4>
            <h4 className="text-center font-inter text-[14px] text-ti_dark_grey">
              Go through our compatible list
            </h4>
          </div>
        </div>
      </div>

      {/* Fixed Footer */}
      <div className="mt-[40px] flex flex-shrink-0 flex-col-reverse items-center gap-4 lg:flex-row">
        <button
          onClick={handleNext}
          className={`pre_landing_page_btn w-full rounded-md px-[14px] py-[10px] font-inter text-bg_white ${
            compatibility ? "bg-p_blue" : "bg-p_blue/50"
          }`}
          disabled={!compatibility || disabled}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Compatibility;
