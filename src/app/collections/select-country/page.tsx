'use client'
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { countries } from '@/Static_data/data';
import Image from 'next/image';
import { Country } from '@/Interface/interface';
import { useRouter } from 'next/navigation';
import { useProgressUpdater } from '@/hooks/useProgress';




const SelectCountry = () => {
    const router = useRouter();

    const country = localStorage.getItem('country');
    const [selectedCountry, setSelectedCountry] = useState<string | null>(country);
    const [searchQuery, setSearchQuery] = useState('');




    const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleCountrySelect = (country: Country) => {
        if (selectedCountry === country.name) {
            setSelectedCountry(null);
            localStorage.removeItem('country');
        } else {
            setSelectedCountry(country.name);
            localStorage.setItem('country', country.name);
        }
    };

    const { setCustomProgress, progress } = useProgressUpdater();

    const handleNext = () => {
        router.push(`/collections/select-brand?country=${selectedCountry}`);
        setCustomProgress(progress + 10);
    };

    return <div className=" relative bg-bg_white rounded-lg shadow-lg w-full max-w-[650px] h-[780px] flex flex-col px-[60px] py-[60px]">
        {/* Header Section */}
        <div className="mb-[40px] flex-shrink-0">
            <h2 className="pre_landing_page_title font-inter">Select your country</h2>
            <p className="pre_landing_page_text">
                Select your country of residence or business location
            </p>
        </div>

        {/* Search Section */}
        <div className="relative mb-[16px] flex-shrink-0 bg-bg_dusty_white py-[10px] px-[10px] flex items-center gap-[8px] rounded-md">
            <Search className="text-ti_grey" size={18} />
            <input
                type="text"
                placeholder="Search"
                className="w-full bg-bg_dusty_white text-ti_grey font-inter text-[12px] leading-[16px] outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>

        {/* Scrollable Countries List */}
        <div className="space-y-[10px]  overflow-y-scroll" style={{ maxHeight: '450px' }}>
            {filteredCountries.map((country) => (
                <div
                    key={country.name}
                    className={`w-full flex items-center border border-bg_dusty_white p-[16px] rounded-lg hover:bg-gray-50 transition-colors cursor-pointer ${selectedCountry === country.name ? 'select_car_collection_bg border-p_light_blue ' : ''
                        }`}
                    onClick={() => handleCountrySelect(country as unknown as Country)}
                >
                    <Image
                        src={country.flag.src}
                        alt={country.name}
                        width={28}
                        height={28}
                        className="mr-3"
                    />
                    <span className="flex-1 leading-[18px]  font-medium text-left text-ti_black font-inter text-[14px] ">
                        {country.name}
                    </span>
                </div>
            ))}
        </div>


        {/* Footer Buttons */}
        <div className="mt-[40px] flex-shrink-0 flex items-center gap-4">
            <button onClick={() => router.push('/result/not-compatible')} className=" w-1/2 pre_landing_page_btn border text-ti_grey px-[14px] py-[8px] border-ti_light_grey rounded-md">
                {`I can’t find my country`}
            </button>
            <button
                className={` w-1/2 pre_landing_page_btn  text-bg_white   px-[14px] py-[10px] rounded-md ${selectedCountry ? ' bg-p_blue' : 'bg-p_blue/50  '
                    }`}
                disabled={!selectedCountry}
                onClick={handleNext}
            >
                Next
            </button>
        </div>
    </div>

};

export default SelectCountry;
