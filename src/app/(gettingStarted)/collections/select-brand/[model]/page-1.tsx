/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useProgressUpdater } from "@/hooks/useProgress";
import close from "@/../public/images/access_point/down.svg";
import open from "@/../public/images/access_point/up.svg";
import AccessPoint from "./Access";
import axios from "axios";
import { CarBrandsData as OriginalCarBrandsData } from "@/app/(gettingStarted)/components/compatibility";

// Extended type with region property
interface CarBrandsData extends OriginalCarBrandsData {
  region: string;
}
import Loader from "@/app/(gettingStarted)/components/Loader";
import toast from "react-hot-toast";

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

  const [expandedCountry, setExpandedCountry] = useState<string | null>(null);
  const [expandedModel, setExpandedModel] = useState<string | null>(null);
  const router = useRouter();
  const resolvedParams = React.use(params);
  const modelParam = (resolvedParams as { model: string }).model;
  const [loading, setLoading] = useState(false);
  const [regionData, setRegionData] = useState<{
    [key: string]: CarBrandsData;
  }>({});
  const [regionsWithCountryData, setRegionsWithCountryData] = useState<{
    [key: string]: CountryObject[];
  }>({});
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);
  const [selectedModels, setSelectedModels] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const selectedCountriesData = localStorage.getItem("selectedCountries");
        const selectedCountries = selectedCountriesData
          ? JSON.parse(selectedCountriesData)
          : [];

        const regionsWithCountries = selectedCountries.reduce(
          (acc: { [key: string]: string[] }, country: string) => {
            let region: string;
            if (country === "United States") region = "US";
            else if (country === "Canada") region = "CA";
            else region = "EUROPE";
            if (!acc[region]) acc[region] = [];
            acc[region].push(country);
            return acc;
          },
          {}
        );

        const countriesResponse = await axios.get(
          "https://api.fleetblox.com/api/utils/all-countries"
        );
        const allCountries = countriesResponse.data.data;

        const regionsWithCountryData = Object.entries(
          regionsWithCountries
        ).reduce((acc, [region, countryNames]) => {
          const countries = (countryNames as string[])
            .map((name) =>
              allCountries.find((c: CountryObject) => c.country === name)
            )
            .filter(Boolean);
          acc[region] = countries;
          return acc;
        }, {} as { [key: string]: CountryObject[] });

        setRegionsWithCountryData(regionsWithCountryData);

        const regions = Object.keys(regionsWithCountries);
        const regionPromises = regions.map((region) =>
          axios.get(
            `https://api.fleetblox.com/api/dummy/check-compatibility-matrix?region=${region}`
          )
        );

        const responses = await Promise.all(regionPromises);
        const regionData = responses.reduce((acc, res, index) => {
          const region = regions[index];
          acc[region] = res.data.data.map((brand: any) => ({
            ...brand,
            region,
          }));
          return acc;
        }, {} as { [key: string]: CarBrandsData });

        setRegionData(regionData);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Error loading vehicle data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredModels = React.useMemo(() => {
    if (!Object.keys(regionData).length) return [];
    const allBrands = Object.values(regionData).flat();
    const decodedBrandNames = decodeURIComponent(modelParam).split(",");
    setTotalBrands(decodedBrandNames.length);
    return allBrands.filter((brand) =>
      decodedBrandNames.some(
        (name) =>
          brand.brand.toLowerCase().replace(/[_\-\s]/g, "") ===
          name.toLowerCase().replace(/[_\-\s]/g, "")
      )
    );
  }, [regionData, modelParam]);

  useEffect(() => {
    if (
      filteredModels.length > 0 &&
      currentBrandIndex < filteredModels.length
    ) {
      const currentBrandKey = `${filteredModels[currentBrandIndex].brand}-${filteredModels[currentBrandIndex].region}`;
      const storedBrandModels = JSON.parse(
        localStorage.getItem("brandModels") || "{}"
      );
      setSelectedModels(storedBrandModels[currentBrandKey] || []);
    }
  }, [currentBrandIndex, filteredModels]);

  const handleModelSelect = (model: string) => {
    const currentBrand = filteredModels[currentBrandIndex].brand;
    const currentRegion = filteredModels[currentBrandIndex].region;
    const currentBrandKey = `${currentBrand}-${currentRegion}`;
    const storedModels = JSON.parse(
      localStorage.getItem("brandModels") || "{}"
    );
    const updatedModels = storedModels[currentBrandKey]?.includes(model)
      ? storedModels[currentBrandKey].filter((m: string) => m !== model)
      : [...(storedModels[currentBrandKey] || []), model];

    setSelectedModels(updatedModels);
    localStorage.setItem(
      "brandModels",
      JSON.stringify({ ...storedModels, [currentBrandKey]: updatedModels })
    );
  };

  const calculateProgress = 60 / totalBrands;

  const handleNext = () => {
    if (currentBrandIndex < filteredModels.length - 1) {
      setCurrentBrandIndex((prev) => prev + 1);
      setCustomProgress(progress + calculateProgress);
    } else {
      router.push("/collections/compatible");
    }
  };

  const handleNotFindModel = () => {
    if (currentBrandIndex < filteredModels.length - 1) {
      setCurrentBrandIndex((prev) => prev + 1);
      setCustomProgress(progress + calculateProgress);
    } else {
      router.push("/collections/compatible");
    }
  };

  const backButton = () => {
    if (currentBrandIndex > 0) {
      setCurrentBrandIndex((prev) => prev - 1);
      setCustomProgress(progress - calculateProgress);
    } else {
      router.push("/collections/select-brand");
      setCustomProgress(progress - 10);
    }
  };

  const currentBrandData = filteredModels[currentBrandIndex];
  const currentCountries = currentBrandData?.region
    ? regionsWithCountryData[currentBrandData.region] || []
    : [];

  return (
    <main className="flex flex-col h-[94vh] w-full max-w-[900px] mx-auto px-4 sm:px-6 ">
      <div className="flex-none">
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
          <h2 className="font-bold text-[20px] sm:text-[28px] font-openSans text-[#04082C] ">
            Select Your Vehicle Models
          </h2>
          <p className="font-openSans text-base text-[#7D7D7D] mx-auto ">
            Select vehicle models for each chosen make based on their registered
            countries
          </p>
        </div>

        {currentBrandData && (
          <div className="mb-8 flex items-center flex-col">
            {currentBrandData.brandLogo && (
              <Image
                className="h-[60px] w-auto object-contain"
                src={currentBrandData.brandLogo}
                alt="brand logo"
                width={100}
                height={100}
              />
            )}
            <h1 className="text-[#002D9F] font-openSans font-bold text-3xl mt-0.5">
              {currentBrandData.brand.replace(/[-_]/g, " ")}
            </h1>
          </div>
        )}
      </div>
      <section className="flex flex-col flex-grow gap-4">
        {currentCountries.map((country) => (
          <div
            key={country.countryCode}
            className="border border-[#DFDFDF] rounded-[16px] overflow-hidden"
          >
            <div
              className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
              onClick={() =>
                setExpandedCountry((prev) =>
                  prev === country.countryCode ? null : country.countryCode
                )
              }
            >
              <div className="flex  items-center">
                {expandedCountry === country.countryCode ? (
                  <ChevronDown className="size-[18px] mr-5 transition-transform" />
                ) : (
                  <ChevronUp size={16} className="mr-5 transition-transform" />
                )}
                <div className="flex-shrink-0 w-[28px] h-[28px] rounded-full overflow-hidden mr-2 border border-gray-300">
                  <Image
                    src={country.countryFlag}
                    alt={country.country}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-semibold text-[#04082C] font-openSans">
                  {country.country}
                </span>
              </div>
            </div>

            {expandedCountry === country.countryCode && (
              <div className=" p-4 space-y-2.5">
                {loading ? (
                  <Loader />
                ) : (
                  currentBrandData?.models?.map((model) => (
                    <div
                      key={model.name}
                      className="flex justify-between flex-col items-center p-4 cursor-pointer hover:bg-gray-50 rounded-lg"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center justify-between w-full">
                        <div
                          className="flex items-center w-full"
                          onClick={() => handleModelSelect(model.name)}
                        >
                          <input
                            type="checkbox"
                            checked={selectedModels.includes(model.name)}
                            className="mr-2 cursor-pointer"
                            onChange={() => {}}
                          />
                          <span className="font-semibold w-full text-[#333] font-openSans leading-relaxed text-sm">
                            {model.name
                              .replace("(Unknown)", "")
                              .replace("Electric", "EV")}
                          </span>
                        </div>
                        <button
                          onClick={() =>
                            setExpandedModel((prev) =>
                              prev === model.name ? null : model.name
                            )
                          }
                          className="w-5 h-5 flex items-center justify-center"
                        >
                          <Image
                            src={expandedModel === model.name ? open : close}
                            alt="toggle"
                            className="size-[18px]"
                          />
                        </button>
                      </div>
                      {expandedModel === model.name && (
                        <AccessPoint permission={model.endpoints} />
                      )}
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        ))}
      </section>

      <div className="flex-none mt-6 flex flex-col-reverse items-center gap-4">
        <button
          onClick={handleNotFindModel}
          className="w-full font-openSans text-[#7D7D7D] px-[14px] py-[8px] font-bold text-[14px] rounded-md"
        >
          {`I can't find my car brand`}
        </button>
        <button
          className={`w-full text-white px-[14px] py-[10px] font-openSans rounded-md ${
            selectedModels.length > 0 ? "bg-[#2D65F2]" : "bg-[#2D65F2]/50"
          }`}
          disabled={selectedModels.length === 0}
          onClick={handleNext}
        >
          Next Step
        </button>
      </div>
    </main>
  );
};

export default ModelSelector;
