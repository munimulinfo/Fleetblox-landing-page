"use client";
import React, { useCallback, useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useProgressUpdater } from "@/hooks/useProgress";
import AddIcon from "@/../public/images/add.svg";
import { RxCross2 } from "react-icons/rx";
// import Vin from '@/../public/images/vinsvg.svg'
import { getCode } from "country-list";
import transformCompatibilityData from "@/utils/transformCompatibilityData";
import toast from "react-hot-toast";
import search from "@/../public/images/search.svg";

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

const VIN = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [vinList, setVinList] = useState<string[]>([]); // Initialize vinList as an empty array
  const { setCustomProgress, progress, setApiResponse } = useProgressUpdater();
  const [loading, setLoading] = useState(false);
  const [selectedCountry, SetSelectedCountry] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedVinList = localStorage.getItem("VINS");
      const storedCountry = localStorage.getItem("country");
      setVinList(storedVinList ? JSON.parse(storedVinList) : []);
      if (storedCountry) {
        const countryCode = getCode(storedCountry);
        if (countryCode) {
          SetSelectedCountry(countryCode);
        } else {
          SetSelectedCountry("US"); // Default to US if the country code is invalid
        }
      } else {
        SetSelectedCountry("US"); // Default to US if no country is stored
      }
    }
  }, []);

  const isValidVIN = (vin: string): boolean => {
    if (vin.length !== 17) {
      toast.error("Invalid VIN: Must be exactly 17 characters long.");
      return false;
    }

    if (/[^A-Z0-9]/.test(vin)) {
      toast.error(
        "Invalid VIN: Only uppercase letters (A-Z) and digits (0-9) are allowed. No special characters or lowercase letters."
      );
      return false;
    }

    // toast.success('Valid VIN.');
    return true;
  };

  const handleAddVin = () => {
    if (searchQuery) {
      const vins = searchQuery.split(/\s+/).filter(Boolean); // Split by whitespace and filter out empty strings

      const newVins = vins.filter((vin) => {
        const trimmedVin = vin.trim();
        return isValidVIN(trimmedVin) && !vinList.includes(trimmedVin);
      });

      if (newVins.length > 0) {
        const updatedVinList = [...vinList, ...newVins];
        setVinList(updatedVinList);
        setSearchQuery("");
        localStorage.setItem("VINS", JSON.stringify(updatedVinList));
      } else {
        toast.error("All VINs are either invalid or already in the list.");
      }
    } else {
      toast.error("Please enter at least one VIN.");
    }
  };

  const handleBack = () => {
    setCustomProgress(progress - 10);
    router.push(`/collections/compatibility`);
  };

  const handleVinProcessing = async () => {
    if (vinList.length === 0) {
      alert("Please add VIN(s) before proceeding.");
      return;
    }
    setLoading(true);

    try {
      const response = await fetch(
        `https://backend.illama360.com/api/dummy/compatibility-bulk?vin=${vinList.join(
          ","
        )}&country=${selectedCountry}`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();

      if (data.statusCode === 200) {
        setApiResponse(data);
        const areAllUncompatible = data.data?.every(
          (brand: { isCompatible: boolean }) => brand.isCompatible === false
        );
        console.log(areAllUncompatible, "uncompatible");
        console.log(data.data, "data is not compatible");

        if (areAllUncompatible) {
          return router.push("/result/not-compatible");
        }
        localStorage.setItem(
          "VINS_RESULT",
          JSON.stringify(transformCompatibilityData(data.data))
        );
        setLoading(false);
        handleNext();
        router.push(`/collections/compatible`);
      }
      setCustomProgress(progress + 10);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching compatibility data:", error);
    }
  };

  const handleNext = useCallback(async () => {
    setCustomProgress(progress + 60);
  }, [progress, setCustomProgress]);

  const removeFromVinList = (vinToRemove: string) => {
    setVinList((prev) => {
      const updatedVinList = prev.filter((vin) => vin !== vinToRemove);
      localStorage.setItem("VINS", JSON.stringify(updatedVinList)); // Update localStorage
      return updatedVinList;
    });
  };

  return (
    <main className="flex flex-col h-[92vh] w-full max-w-[900px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {loading ? (
        <SearchingVins />
      ) : (
        <>
          {/* Fixed Header */}
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

            <div className="mb-8 text-center">
              <h2 className="font-bold text-[24px] sm:text-[28px] font-openSans text-[#04082C] ">
                Enter Your Vehicles’ VIN
              </h2>
              <p className="font-openSans text-[14px] leading-[155%] sm:text-[16px] text-[#7D7D7D] mx-auto">
                Enter the VINs of your preferred vehicles to check
                compatibility. Add them in bulk and review all at once
              </p>
            </div>
          </div>

          {/* Search Bar - Fixed */}
          <div className="relative mb-[16px] flex flex-shrink-0 items-center gap-[8px] rounded-md">
            <input
              type="text"
              placeholder="Enter VIN"
              // className="w-full bg-bg_dusty_white text-ti_grey font-openSans text-[12px] leading-[16px] outline-none"
              className={`w-3/4 rounded-md bg-[#F7F7F7] p-3 font-openSans text-sm leading-[155%] outline-none ${
                searchQuery ? "text-[#333]" : "text-[#7D7D7D]"
              }`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              onClick={handleAddVin}
              className="flex w-1/4 items-center justify-center gap-1 rounded-md border border-p_light_blue px-[10px] py-[12px] outline-none"
            >
              <Image src={AddIcon} alt="Add Icon" />
              <h1 className="font-openSans text-[#2D65F2] text-[14px] font-semibold text-p_blue">
                Add
              </h1>
            </button>
          </div>

          <div className="border-b border-[#DFDFDF] px-2 my-4"></div>
          <div className="mb-4 flex flex-shrink-0 items-center gap-1 font-openSans text-[14px] font-bold leading-[18px] text-[#7d7d7d]">
            <span>Added VINs</span>
          </div>

          {/* Scrollable Content */}
          <div className="min-h-0 flex-1 overflow-y-auto scrollbar-hidden">
            <div className="space-y-2.5">
              {vinList.length === 0 ? (
                <div className="mt-[60px] flex flex-col items-center">
                  <Image src={search} alt="searching image" />
                  <h2 className="mt-[10px] text-center font-openSans text-[16px] font-semibold text-[#333333]">
                    Nothing to show here!
                  </h2>
                  <h2 className="text-center font-openSans text-[12px] leading-[16px] text-[#7d7d7d]">
                    Start adding VINs in bulk to check compatibility
                  </h2>
                </div>
              ) : (
                vinList.map((vin, index) => (
                  <div
                    key={index}
                    className={`hover:bg-gray-50 flex cursor-pointer items-center justify-between rounded-lg border border-bg_dusty_white p-4 transition-colors`}
                  >
                    <div className="flex items-center">
                      <div className="text-left font-openSans text-sm font-medium leading-[18px] text-ti_black">
                        {`VIN - ${vin}`}
                      </div>
                    </div>
                    <div
                      className="text-ti_dark_grey"
                      onClick={() => removeFromVinList(vin)}
                    >
                      <RxCross2 size={20} />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Fixed Footer */}
          <div className="mt-6 flex flex-shrink-0 flex-col-reverse items-center gap-4 lg:flex-row">
            <button
              onClick={handleVinProcessing}
              className={` w-full rounded-md px-[14px] py-[10px] font-openSans text-white ${
                vinList.length !== 0 ? "bg-[#2D65F2]" : "bg-[#2D65F2]/50"
              }`}
              disabled={vinList.length === 0 || loading}
            >
              {loading ? "loading......" : "Check compatibility"}
            </button>
          </div>
        </>
      )}
    </main>
  );
};

export default VIN;

const SearchingVins = () => {
  return (
    // className={`cursor-pointer rounded-lg w-full flex items-center justify-center flex-col p-[20px] mt-[60px]`}>
    <div
      className={`flex w-[600px] h-[400px] cursor-pointer flex-col mx-auto my-auto shadow-2xl items-center justify-center rounded-xl px-[40px] py-[60px]`}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="h-[140px] w-[204.092px] object-fill"
      >
        <source src="/videos/sacning.mp4" className="" type="video/mp4" />
      </video>
      <h4 className="mt-[32px] text-center font-openSans text-[22px] font-bold text-[#04082C]">
        Scanning VINs
      </h4>
      <h4 className="text-center font-openSans text-[14px] text-[#7d7d7d] leading-relaxed">{`Please wait while we finish scanning your provides VINs. This won't take long. Thank you for your patience!`}</h4>
    </div>
  );
};
