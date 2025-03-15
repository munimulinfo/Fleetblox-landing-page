"use client";
import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useProgressUpdater } from "@/hooks/useProgress";

import { getCode } from "country-list";
import toast from "react-hot-toast";
import Loader from "./Loader";
import NotCompatibilityDialog from "./NotCompatibilityDialog";

export interface Country {
  country: string;
  countryCode: string;
  countryFlag: string;
  countryShort: string;
  phoneCode: string;
}

const SelectCountry = () => {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [countries, setCountries] = useState<Country[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCountry = localStorage.getItem("country");
      if (savedCountry) {
        setSelectedCountry(savedCountry);
      }
    }

    const getCountries = async () => {
      try {
        setLoading(true);
        const countries = await fetch(
          "https://backend.illama360.com/api/utils/all-countries"
        );
        const response = await countries.json();
        setCountries(response.data);
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch countries");
      } finally {
        setLoading(false);
      }
    };

    getCountries();
  }, []);

  const filteredCountries = countries?.filter((country) =>
    country.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCountrySelect = (country: Country) => {
    // If the country is already selected, deselect it; otherwise select the new country
    if (selectedCountry === country.country) {
      setSelectedCountry(null);
      localStorage.removeItem("country");
      localStorage.removeItem("selectedCountry");
    } else {
      setSelectedCountry(country.country);
      localStorage.setItem("country", country.country);
    }
  };

  const { setCustomProgress, progress } = useProgressUpdater();

  const handleNext = () => {
    setDisabled(true);
    if (disabled) {
      return;
    }

    // Handle routing based on selected country
    let countryCode;
    if (selectedCountry) {
      localStorage.setItem("selectedCountry", selectedCountry);
      countryCode = getCode(selectedCountry);
      if (countryCode === "US" || countryCode === "CA") {
        // countryCode remains same
      } else {
        countryCode = "EUROPE";
      }
    }

    setCustomProgress(progress + 10);

    if (countryCode === "US") {
      router.push(`/collections/compatibility?country=${countryCode}`);
    } else {
      router.push(`/collections/select-brand?country=${countryCode}`);
    }

    localStorage.removeItem("brands");
    localStorage.removeItem("brandModels");
    localStorage.removeItem("VINS");
    localStorage.removeItem("VINS_RESULT");
    localStorage.removeItem("compatibility");
    localStorage.removeItem("selectedPlan");
  };

  return (
    <main className="flex flex-col min-h-screen w-full max-w-[900px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="font-bold text-[24px] sm:text-[28px] font-openSans text-[#04082C] mb-2">
          Select Registered Country
        </h2>
        <p className="font-openSans text-[14px] leading-[155%] sm:text-[16px] text-[#7D7D7D] mx-auto">
          Choose the country where your fleet vehicles were originally
          registered.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-4 w-full">
        <div className="flex items-center w-full bg-[#F7F7F7] rounded-md px-4 py-4">
          <Search className="text-[#7D7D7D] mr-3" size={20} />
          <input
            type="text"
            placeholder="Search country"
            className="w-full bg-[#F7F7F7] font-openSans text-[14px] text-[#333] outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Selected Country */}
      {selectedCountry && (
        <div className="my-3 mx-1">
          <p className="font-openSans text-sm font-[600]">1 country selected</p>
        </div>
      )}

      {/* Scrollable Country List */}
      <div className="flex-grow">
        <div className="h-[50vh] overflow-y-auto pb-2 scrollbar-hidden">
          <div className="space-y-3">
            {loading ? (
              <div className="flex justify-center items-center h-[200px]">
                <Loader />
              </div>
            ) : filteredCountries && filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <div
                  key={country.country}
                  className={`flex items-center p-4 rounded-[12px] cursor-pointer transition-all duration-200 hover:bg-[#F5F9FC] border ${
                    selectedCountry === country.country
                      ? "border-[#B8CBFC] bg-[#2D65F20F]"
                      : "border-[#F7F7F7]"
                  }`}
                  onClick={() => handleCountrySelect(country)}
                >
                  <div className="flex-shrink-0 w-[28px] h-[28px] rounded-full overflow-hidden mr-4 border border-gray-300">
                    <Image
                      src={country.countryFlag}
                      alt={country.country}
                      width={28}
                      height={28}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-[600] text-[14px] font-openSans sm:text-[16px] text-[#04082C]">
                    {country.country}
                  </span>
                </div>
              ))
            ) : (
              <div className="flex justify-center items-center h-[200px] text-[#6F6464]">
                No countries found matching your search
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="pt-4 flex flex-col justify-center items-center gap-4">
        <button
          className={`order-1 w-full sm:order-2 py-3 px-4 rounded-md font-medium text-[14px] text-white transition-colors ${
            selectedCountry
              ? "bg-[#2D65F2] hover:bg-[#2D65F2]/90"
              : "bg-[#2D65F2]/50 cursor-not-allowed"
          }`}
          disabled={!selectedCountry || disabled}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      <NotCompatibilityDialog title="can’t find my country" />
    </main>
  );
};

export default SelectCountry;
