'use client'
import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Search } from 'lucide-react';
import Image from 'next/image';
import { BrandCarList } from '@/Static_data/data'
import { useRouter } from 'next/navigation';
import NotCompitable from '@/components/shared/NotCompitable';
import { useProgressUpdater } from '@/hooks/useProgress';

const BrandSelector = () => {
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState('');




    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const brands = localStorage.getItem('brands');
            if (brands) {
                setSelectedBrands(JSON.parse(brands));
            }
        }
    }, []);



    console.log(selectedBrands, 'selectedBrands');

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

    const filteredBrands = BrandCarList.filter(brand =>
        brand.brand.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const { setCustomProgress, progress } = useProgressUpdater();

    const handleNext = React.useCallback(() => {

        setCustomProgress(progress + 10);
        router.push(`/collections/select-brand/${selectedBrands.join(',')}`);
    }, [progress, setCustomProgress, router, selectedBrands]);

    const handleBack = () => {
        setCustomProgress(progress - 10);
        router.push(`/collections/select-country`);
    }

    return (

        <div className="relative bg-bg_white rounded-lg md:shadow-lg w-full max-w-[650px] h-[850px] md:h-[780px] flex flex-col px-[20px] xs:px-[30px] sm:px-[60px] py-[20px] md:py-[60px]">
            {/* Header Section */}
            <div onClick={handleBack} className='flex items-center gap-[5px] mb-[16px] cursor-pointer'>
                <ArrowLeft size={20} className=' text-ti_dark_grey' />
                <span className='text-ti_dark_grey font-inter font-semibold text-[14px] leading-[18px]'>{`Back`}</span>
            </div>


            <div className="mb-[40px] flex-shrink-0">
                <h2 className="pre_landing_page_title font-inter">Select your car brands</h2>
                <p className="pre_landing_page_text">
                    Choose your car brands currently in your fleet or those you wish to add
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

            <div className='flex items-center gap-[4px] font-inter font-medium leading-[18px] text-[14px] text-ti_light_black  mb-[16px]'>
                <span>{selectedBrands?.length}</span>
                <span>{` brands selected`}</span>
            </div>

            {/* Scrollable Countries List */}
            <div className="space-y-[10px]  w-full overflow-y-scroll max-h-[500px] md:max-h-[450px]" >
                {filteredBrands.map((brand) => (
                    <div
                        key={brand.brand}
                        className={` flex justify-between items-center border border-bg_dusty_white p-[16px] rounded-lg hover:bg-gray-50 transition-colors cursor-pointer ${selectedBrands.includes(brand.brand) ? 'select_car_collection_bg border-p_light_blue ' : ''
                            }`}
                        onClick={() => handleBrandSelect(brand.brand)}
                    >

                        <div className='flex items-center'>
                            <Image
                                src={brand.brandLogo}
                                alt={brand.brand}

                                className='mix-blend-multiply flex items-center justify-center object-contain w-[70px] h-[40px] mr-[15px]'
                            />
                            <div className=" leading-[18px]  font-semibold text-left text-ti_black font-inter text-[14px] ">
                                {brand.brand}
                            </div>
                        </div>
                        <div className=" leading-[18px]  font-medium  text-ti_dark_grey font-inter text-[14px] ">
                            {brand.year}
                        </div>
                    </div>
                ))}
            </div>


            {/* Footer Buttons */}
            <div className="mt-[40px] flex-shrink-0 flex lg:flex-row flex-col-reverse items-center gap-4">
                <NotCompitable href='/result/not-compatible' className=' w-full lg:w-1/2' text="I can’t find my car brand" />
                <button
                    onClick={handleNext}
                    className={` w-full lg:w-1/2 pre_landing_page_btn  text-bg_white   px-[14px] py-[10px] rounded-md ${selectedBrands.length ? ' bg-p_blue' : 'bg-p_blue/50  '
                        }`}
                    disabled={!selectedBrands.length}
                >
                    Next
                </button>
            </div>
        </div>

    );
};

export default BrandSelector;



