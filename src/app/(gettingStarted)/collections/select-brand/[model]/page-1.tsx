/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useProgressUpdater } from "@/hooks/useProgress";
import close from "@/../public/images/access_point/down.svg";
import open from "@/../public/images/access_point/up.svg";
import AccessPoint from "./Access";
import { getCode } from "country-list";
import axios from "axios";
import { CarBrandsData } from "@/app/(gettingStarted)/components/compatibility";
import Loader from "@/app/(gettingStarted)/components/Loader";

// Define Country interface (since country-list doesn't export it)
interface CountryObject {
  country: string;
  countryCode: string;
  countryFlag: string;
  countryShort: string;
  phoneCode: string;
}

const ModelSelector = ({ params }: any) => {
  const { setCustomProgress, progress } = useProgressUpdater();
  const [totalBrands, setTotalBrands] = useState(0);
  const [isOpen, setIsOpen] = useState("");
  const router = useRouter();
  const resolvedParams = React.use(params);
  const modelParam = (resolvedParams as { model: string }).model;
  const [loading, setLoading] = useState(false);

  const [brandCarList, setBrandCarList] = useState<CarBrandsData>([]);
  const [selectedCountryObj, setSelectedCountryObj] =
    useState<CountryObject | null>(null);

  useEffect(() => {
    let countrySelect: string;
    const countryName = localStorage.getItem("country");

    if (countryName) {
      const code = getCode(countryName);
      if (code === "US" || code === "CA") {
        countrySelect = code;
      } else {
        countrySelect = "EUROPE";
      }
    }

    const fetchCountry = async () => {
      try {
        setLoading(true);

        // First fetch all countries to get the flag info
        const countriesResponse = await axios.get(
          "https://backend.illama360.com/api/utils/all-countries"
        );

        // Find the selected country in the list
        if (countryName && countriesResponse.data?.data) {
          const foundCountry = countriesResponse.data.data.find(
            (c: CountryObject) => c.country === countryName
          );
          if (foundCountry) {
            setSelectedCountryObj(foundCountry);
          }
        }

        // Now fetch the brand data
        const { data } = await axios.get(
          `https://backend.illama360.com/api/dummy/check-compatibility-matrix?region=${
            countrySelect || "US"
          }`
        );
        setBrandCarList(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, []);

  // search filtering
  const filteredModels = React.useMemo(() => {
    return brandCarList.filter((brand) => {
      const decodedBrandNames = decodeURIComponent(modelParam).split(",");
      setTotalBrands(decodedBrandNames.length);
      return decodedBrandNames.includes(brand.brand);
    });
  }, [brandCarList, modelParam]);

  console.log(filteredModels, "filteredModels checking");

  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);
  const [selectedModels, setSelectedModels] = useState<string[]>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedBrandModels = JSON.parse(
        localStorage.getItem("brandModels") || "{}"
      );
      const currentBrand = filteredModels[currentBrandIndex]?.brand;
      return setSelectedModels(storedBrandModels[currentBrand] || []);
    }
    return setSelectedModels([]);
  }, [currentBrandIndex, filteredModels]);

  // select the model
  const handleModelSelect = (model: string) => {
    const currentBrand = modelData.brand;
    const storedModels = JSON.parse(
      localStorage.getItem("brandModels") || "{}"
    );

    // Initialize current brand's models if not exists
    if (!storedModels[currentBrand]) {
      storedModels[currentBrand] = [];
    }

    // Get current brand's selected models
    const currentBrandModels = storedModels[currentBrand] || [];

    let updatedModels;
    if (currentBrandModels.includes(model)) {
      // Remove model if already selected
      updatedModels = currentBrandModels.filter(
        (selectedModel: string) => selectedModel !== model
      );
    } else {
      // Add model if not selected
      updatedModels = [...currentBrandModels, model];
    }

    // Update state and localStorage
    setSelectedModels(updatedModels);
    storedModels[currentBrand] = updatedModels.length ? updatedModels : null;
    localStorage.setItem("brandModels", JSON.stringify(storedModels));
  };

  const calculateProgress = 60 / totalBrands;

  // handle Next Button
  const handleNext = () => {
    if (currentBrandIndex < filteredModels.length - 1) {
      setCurrentBrandIndex((prev) => prev + 1);
      setCustomProgress(progress + calculateProgress);
    } else {
      router.push("/collections/compatible");
    }
  };

  function checkAllNull(obj: Record<string, any>): boolean {
    // Check if all values are null
    return Object.values(obj).every((value) => value === null);
  }

  const handleNotFindModel = () => {
    if (currentBrandIndex < filteredModels.length - 1) {
      const storedModels = JSON.parse(
        localStorage.getItem("brandModels") || "{}"
      );
      storedModels[modelData.brand] = null;
      localStorage.setItem("brandModels", JSON.stringify(storedModels));
      setCurrentBrandIndex((prev) => prev + 1);
      setCustomProgress(progress + calculateProgress);
    } else {
      const storedModels = JSON.parse(
        localStorage.getItem("brandModels") || "{}"
      );
      storedModels[modelData.brand] = null;
      localStorage.setItem("brandModels", JSON.stringify(storedModels));
      const getModels = localStorage.getItem("brandModels");
      console.log(getModels, "brandModels checking for ");

      if (getModels) {
        const status = checkAllNull(JSON.parse(getModels));
        console.log(status, "brandModels checking");

        if (status) {
          return router.push("/result/not-compatible");
        } else {
          return router.push("/collections/compatible");
        }
      }
    }
  };

  const modelData = filteredModels[currentBrandIndex];

  const backButton = () => {
    if (currentBrandIndex > 0) {
      setCurrentBrandIndex((prev) => prev - 1);
      setCustomProgress(progress - calculateProgress);
    } else {
      router.push("/collections/select-brand");
      setCustomProgress(progress - 10);
    }
  };

  const currentBrandModels = JSON.parse(
    localStorage.getItem("brandModels") || "{}"
  )[modelData?.brand];

  const showAccessPoint = (modelName: string) => {
    if (isOpen === modelName) {
      setIsOpen("");
    } else {
      setIsOpen(modelName);
    }
  };

  console.log(modelData, "modelData checking");

  return (
    <main className="flex flex-col h-[92vh] w-full max-w-[900px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {/* Header Section - Fixed at top */}
      <div className="mb-8">
        <div
          onClick={backButton}
          className="mb-4 flex cursor-pointer items-center gap-1"
        >
          <ChevronLeft size={16} className="text-[#999]" />
          <span className="font-openSans text-sm font-semibold text-[#999]">
            Back
          </span>
        </div>

        <div className="text-center mb-6">
          <h2 className="font-bold text-2xl sm:text-[28px] font-openSans text-[#04082C] mb-2">
            Select Your Vehicle Models
          </h2>
          <p className="font-openSans text-base text-[#7D7D7D] mx-auto max-w-[500px]">
            Select vehicle models for each chosen make based on their registered
            countries
          </p>
        </div>

        {/* Brand Info */}
        <div className="mb-8 flex items-center flex-col">
          {modelData?.brandLogo && (
            <Image
              className="h-[60px] w-auto object-contain"
              src={modelData.brandLogo}
              alt="brand logo"
              width={100}
              height={100}
            />
          )}
          <h1 className="text-[#002D9F] font-openSans font-bold text-3xl mt-0.5">
            {modelData?.brand.replace(/[-_]/g, " ")}
          </h1>
        </div>
      </div>

      {/* Scrollable Content Area - Takes remaining space */}
      <div className="flex-1 min-h-[300px] overflow-y-auto border border-[#DFDFDF] rounded-[16px] p-5">
        {selectedCountryObj && (
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 w-[28px] h-[28px] rounded-full overflow-hidden mr-4 border border-gray-300">
              <Image
                src={selectedCountryObj.countryFlag}
                alt={selectedCountryObj.country}
                width={28}
                height={28}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-[600] text-[14px] font-openSans sm:text-[16px] text-[#04082C]">
              {selectedCountryObj.country}
            </span>
          </div>
        )}

        <div className="space-y-2.5">
          {loading ? (
            <Loader />
          ) : (
            modelData?.models.map((model) => {
              return (
                <div
                  key={model.name}
                  className={`flex justify-between flex-col items-center border-b border-[#F7F7F7] p-4   transition-colors cursor-pointer 
`}
                  onClick={(e) => e.stopPropagation()} // Prevent parent onClick
                >
                  <div className="flex items-center justify-between w-full">
                    <div
                      className="flex items-center w-full "
                      onClick={() => handleModelSelect(model.name)}
                    >
                      <input
                        type="checkbox"
                        checked={selectedModels?.includes(model.name)}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleModelSelect(model.name);
                        }}
                        className="mr-2 cursor-pointer"
                      />
                      <span className="font-semibold w-full text-[#333] font-openSans leading-relaxed text-sm">
                        {model?.name
                          ?.replace("(Unknown)", "")
                          ?.replace("Electric", "EV")}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        // e.stopPropagation();
                        showAccessPoint(model.name);
                      }}
                      className="w-5 h-5 flex items-center justify-center"
                    >
                      <Image
                        className="size-[18px] object-cover"
                        src={isOpen === model.name ? open : close}
                        alt="toggle"
                      />
                    </button>
                  </div>
                  {isOpen === model.name && (
                    <AccessPoint permission={model.endpoints} />
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Footer Section - Fixed at bottom */}
      {/* Fixed Footer */}
      <div className="flex-shrink-0 mt-6 flex flex-col-reverse items-center gap-4">
        <button
          onClick={handleNotFindModel}
          className="  w-full font-openSans text-[#7D7D7D] px-[14px] py-[8px]   text-[14px] rounded-md"
        >
          {`I can't find my car brand`}
        </button>
        <button
          className={`w-full   text-white px-[14px] py-[10px] font-openSans rounded-md ${
            currentBrandModels?.length > 0 ? "bg-[#2D65F2]" : "bg-[#2D65F2]/50"
          }`}
          disabled={!currentBrandModels || currentBrandModels.length <= 0}
          onClick={handleNext}
        >
          Next Step
        </button>
      </div>
    </main>
  );
};

export default ModelSelector;
