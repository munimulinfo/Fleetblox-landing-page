"use client";
import { useState, useEffect } from "react";
import axios from "axios";

import { getCode } from "country-list";
import { TransformedCarData } from "@/utils/transformCompatibilityData";
import { CarBrandsData } from "@/app/(gettingStarted)/components/compatibility";

const useBrandCarList = (initialCountry: string | null) => {
  const [brandCarList, setBrandCarList] = useState<CarBrandsData>([]);
  const [countrySelect, setCountrySelect] = useState<string | null>(
    initialCountry
  );
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [storedBrandModels, setStoredBrandModels] = useState<
    Record<string, string | null>
  >({});
  const [loading, setLoading] = useState(false);
  const [vins, setVins] = useState<TransformedCarData[] | null>(null);
  const [country, setCountry] = useState<string>("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const brands = localStorage.getItem("brands");
      const country = localStorage.getItem("country");
      const VINS = localStorage.getItem("VINS_RESULT");

      if (VINS) {
        const parsedVins: TransformedCarData[] = JSON.parse(VINS);
        setVins(parsedVins); // Set parsed data into state
      }
      setStoredBrandModels(
        JSON.parse(localStorage.getItem("brandModels") || "{}")
      );

      if (brands) {
        setSelectedBrands(JSON.parse(brands)); // Assuming you're storing brandCarList here
      }
      if (country) {
        const code = getCode(country);
        setCountry(country);

        if (code === "US" || code === "CA") {
          setCountrySelect(code);
        } else {
          setCountrySelect("EUROPE"); // Set a default for Europe
        }
      }
    }
  }, []);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        setLoading(true);
        const { data } = await axios(
          `https://api.fleetblox.com/api/dummy/check-compatibility-matrix?region=${countrySelect}`
        );
        setBrandCarList(data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching country data:", error);
      }
    };

    if (countrySelect) {
      fetchCountry();
    }
  }, [countrySelect]);

  return {
    vins,
    loading,
    brandCarList,
    countrySelect,
    setCountrySelect,
    selectedBrands,
    setSelectedBrands,
    storedBrandModels,
    country,
  };
};

export default useBrandCarList;
