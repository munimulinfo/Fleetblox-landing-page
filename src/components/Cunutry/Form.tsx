'use client'
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { countries } from '@/Static_data/data';
import Image from 'next/image';



const CountrySelector = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);



    const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleCountrySelect = (country: any) => {
        setSelectedCountry(country);
    };

    return (
        <div className="min-h-screen  z-[1000000] bg-bg_white flex items-center justify-center p-4">
            <div className=" absolute bg-bg_white rounded-lg shadow-lg w-full max-w-[650px] h-[760px] px-[60px] py-[60px]">
                <h2 className="text-[24px] font-semibold text-center mb-1">Select your country</h2>
                <p className="text-sm text-gray-500 text-center mb-6">
                    Select your country of residence or business location
                </p>

                <div className="relative mb-6">
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="space-y-2  h-[450px] overflow-y-scroll">
                    {filteredCountries.map((country) => (
                        <button
                            key={country.code}
                            className={`w-full flex items-center border border-bg_dusty_white p-[16px] rounded-lg hover:bg-gray-50 transition-colors ${selectedCountry?.code === country.code ? 'bg-blue-50' : ''
                                }`}
                            onClick={() => handleCountrySelect(country)}
                        >
                            <Image src={country.flag} alt={country.name} className='size-[28px] mr-3' />
                            <span className="flex-1 text-left text-ti_black  font-medium">{country.name}</span>
                        </button>
                    ))}
                </div>

                <div className="mt-6 flex items-center gap-4">
                    <button className="flex-1 px-4 py-2 text-gray-600 text-sm border border-gray-200 rounded-lg hover:bg-gray-50">
                        {`   I can't find my country`}
                    </button>
                    <button
                        className={`flex-1 px-4 py-2 text-white rounded-lg ${selectedCountry ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-300 cursor-not-allowed'
                            }`}
                        disabled={!selectedCountry}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CountrySelector;