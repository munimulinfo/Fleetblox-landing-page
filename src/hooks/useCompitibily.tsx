import { useState, useEffect } from 'react';
import axios from 'axios';
import { CarBrandsData } from '@/app/collections/select-brand/page';
import { getCode } from 'country-list';


const useBrandCarList = (initialCountry: string | null) => {
  const [brandCarList, setBrandCarList] = useState<CarBrandsData>([]);
  const [countrySelect, setCountrySelect] = useState<string | null>(initialCountry);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [storedBrandModels, setStoredBrandModels] = useState<Record<string, string | null>>({});
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const brands = localStorage.getItem('brands');
      const country = localStorage.getItem('country')
      setStoredBrandModels(JSON.parse(localStorage.getItem('brandModels') || '{}'));

      if (brands) {
        setSelectedBrands(JSON.parse(brands)); // Assuming you're storing brandCarList here
      }
      if (country) {
        const code = getCode(country);

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
        setLoading(true)
        const { data } = await axios(
          `https://backend.illama360.com/api/dummy/check-compatibility-matrix?region=${countrySelect}`
        );
        setBrandCarList(data.data);
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.error("Error fetching country data:", error);
      }
    };

    if (countrySelect) {
      fetchCountry();
    }
  }, [countrySelect]);

  return { loading, brandCarList, countrySelect, setCountrySelect, selectedBrands, setSelectedBrands, storedBrandModels };
};

export default useBrandCarList;
