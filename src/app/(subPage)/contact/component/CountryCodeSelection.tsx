"use client";
import { ChevronDown } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import Canada from "@/../public/images/canada.png";
import { Country } from "@/app/(gettingStarted)/components/SelectCountry";

const CountryCodeSelection = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [countries, setCountries] = useState<Country[] | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      //   setBrandModels(localStorage.getItem("brandModels") || "");
      //   setBrands(localStorage.getItem("brands") || "");
      //   setCountry(localStorage.getItem("country") || "");
      //   setPlan(localStorage.getItem("price_plan") || "");
      //   setVinsResult(localStorage.getItem("VINS_RESULT") || "");
    }

    const getCountries = async () => {
      const countries = await fetch(
        "https://api.fleetblox.com/api/utils/all-countries"
      );
      const response = await countries.json();

      setCountries(response.data);
    };

    getCountries();
  }, []);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    brandName: "",
    fleetSize: "",
    businessType: "",
    teamSize: "",
    locations: "",
    country: "",
    state: "",
    city: "",
    postalCode: "",
    address: "",
    phone: "",
    countryCode: "+1",
    flag: Canada,
  });
  const selectCountryCode = (data: Country) => {
    setFormData((prev) => ({
      ...prev,
      countryCode: data.phoneCode,
      flag: data.countryFlag as unknown as StaticImageData,
    }));
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative h-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="h-full flex items-center pr-1 bg-white border-r border-[#e5e5e5]"
      >
        <Image
          src={formData.flag}
          alt="Flag"
          className="mr-1 h-[20px] w-[24px] rounded-[6px]"
          width={20}
          height={20}
        />
        <span className="text-[14px] text-[#04082C]">
          {formData.countryCode}
        </span>
        <ChevronDown className="ml-1 h-[14px] w-[14px] text-[#6F6464]" />
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute z-10 mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 shadow-lg border w-[100px]">
          {countries?.map((country) => (
            <li
              key={country.country}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 cursor-pointer list-none"
              onClick={() => selectCountryCode(country)}
            >
              <Image
                src={country.countryFlag}
                alt={country.country}
                className="h-[20px] w-[24px] rounded-[6px]"
                width={20}
                height={20}
              />
              <span className="text-[14px] text-[#04082C]">
                {country.countryCode}
              </span>
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountryCodeSelection;
