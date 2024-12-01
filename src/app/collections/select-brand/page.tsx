'use client'
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Search } from 'lucide-react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
// import NotCompitable from '@/components/shared/NotCompitable';
import { useProgressUpdater } from '@/hooks/useProgress';
import useBrandCarList from '@/hooks/useCompitibily';
import Loader from '@/components/Loader';
interface CarModel {
    name: string;
    endpoints: string[];  // Array of endpoint names like 'Fuel tank', 'Location', etc.
}

interface CarBrand {
    brand: string;
    brandLogo: string;
    models: CarModel[];
    year: string;
}

export type CarBrandsData = CarBrand[];

const BrandSelector = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const country = searchParams.get('country')
    const [searchQuery, setSearchQuery] = useState('');
    const [disabled, setDisabled] = useState(false)

    const { brandCarList, selectedBrands, setSelectedBrands, loading } = useBrandCarList(country)

    const handleBrandSelect = (brand: string) => {
        if (selectedBrands.includes(brand)) {
            const updatedBrands = selectedBrands.filter(selectedBrand => selectedBrand !== brand);
            setSelectedBrands(updatedBrands);
            localStorage.setItem('brands', JSON.stringify(updatedBrands));

            // Get existing brand models from localStorage
            const storedBrandModels = JSON.parse(localStorage.getItem('brandModels') || '{}');
            // Remove the unselected brand's models
            delete storedBrandModels[brand];
            // Update localStorage
            localStorage.setItem('brandModels', JSON.stringify(storedBrandModels));
        } else {
            const updatedBrands = [...selectedBrands, brand];
            setSelectedBrands(updatedBrands);
            localStorage.setItem('brands', JSON.stringify(updatedBrands));
        }
    };


    const filteredBrands = brandCarList.filter(brand =>
        brand.brand.toLowerCase().includes(searchQuery.toLowerCase())
    );


    const { setCustomProgress, progress } = useProgressUpdater();

    const handleNext = React.useCallback(() => {
        setDisabled(true)
        if (disabled) {
            return
        }
        setCustomProgress(progress + 10);
        router.push(`/collections/select-brand/${selectedBrands.join(',')}`);
    }, [progress, setCustomProgress, router, selectedBrands]);

    const handleBack = () => {
        setCustomProgress(progress - 10);
        router.push(`/collections/compatibility`);
    }

    return (

        <div className="relative bg-bg_white rounded-lg md:shadow-lg w-full max-w-[650px] 
        md:h-[780px] h-screen flex flex-col px-4 xs:px-6 sm:px-12 py-[20px] md:py-[60px]">
            {/* Fixed Header */}
            <div className="flex-shrink-0">
                <div onClick={handleBack} className="flex items-center gap-1 mb-4 cursor-pointer">
                    <ArrowLeft size={20} className="text-ti_dark_grey" />
                    <span className="text-ti_dark_grey font-inter font-semibold text-sm leading-[18px]">Back</span>
                </div>

                <div className="mb-8">
                    <h2 className="pre_landing_page_title font-inter">Select your car brands</h2>
                    <p className="pre_landing_page_text">
                        Choose your car brands currently in your fleet or those you wish to add
                    </p>
                </div>

                <div className="relative mb-4 bg-bg_dusty_white py-[8px] px-2.5 flex items-center gap-2 rounded-md">
                    <Search className="text-ti_grey" size={18} />
                    <input
                        type="text"
                        placeholder="Search"
                        className={`w-full bg-bg_dusty_white font-inter text-xs leading-4 outline-none ${searchQuery ? "text-ti_light_black" : "text-ti_grey"
                            }`}

                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="flex items-center gap-1 font-inter text-[14px] font-medium leading-[18px] text-ti_light_black mb-4">
                    <span>{selectedBrands?.length}</span>
                    <span> brands selected</span>
                </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto min-h-0">
                <div className="space-y-2.5 ">
                    {loading ? (
                        <Loader />
                    ) : (
                        filteredBrands.map((brand) => (
                            <div
                                key={brand.brand}
                                className={`flex justify-between items-center border border-bg_dusty_white p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer ${selectedBrands.includes(brand.brand) ? 'select_car_collection_bg border-p_light_blue' : ''
                                    }`}
                                onClick={() => handleBrandSelect(brand.brand)}
                            >
                                <div className="flex items-center">
                                    {brand.brandLogo ? (
                                        <Image
                                            className="mix-blend-multiply flex items-center justify-center object-contain w-[70px] h-[40px] mr-4"
                                            src={brand.brandLogo}
                                            alt="brand logo"
                                            width={100}
                                            height={100}
                                        />
                                    ) : (
                                        <div className="w-[70px] h-[40px] mr-4" />
                                    )}
                                    <div className="leading-[18px] font-semibold text-left text-ti_black font-inter text-sm">
                                        {brand?.brand.replace(/[-_]/g, ' ')}
                                    </div>
                                </div>
                                <div className="leading-[18px] font-medium text-ti_dark_grey font-inter text-sm">
                                    {brand.year}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Fixed Footer */}
            <div className="flex-shrink-0 mt-6 flex lg:flex-row flex-col-reverse items-center gap-4">
                <button className=" lg:w-1/2 pre_landing_page_btn w-full font-inter text-ti_grey px-[14px] py-[8px]   text-[14px] rounded-md">
                    {`I can't find my car brand`}
                </button>
                <button
                    onClick={handleNext}
                    className={`w-full lg:w-1/2 pre_landing_page_btn text-bg_white px-[14px] py-[10px] font-inter rounded-md ${selectedBrands.length ? 'bg-p_blue' : 'bg-p_blue/50'
                        }`}
                    disabled={!selectedBrands.length && disabled}
                >
                    Next
                </button>
            </div>
        </div>

    );
};

export default BrandSelector;



