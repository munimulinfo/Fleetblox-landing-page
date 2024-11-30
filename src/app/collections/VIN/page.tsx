'use client'
import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useProgressUpdater } from '@/hooks/useProgress';
import AddIcon from '@/../public/images/add.svg'
import { RxCross2 } from "react-icons/rx";
import Vin from '@/../public/images/vinsvg.svg'
import { getCode } from 'country-list';
import transformCompatibilityData from '@/utils/transformCompatibilityData';
import toast from 'react-hot-toast';
import search from '@/../public/images/search.svg'

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

const VIN = () => {
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState('');
    const [vinList, setVinList] = useState<string[]>([]); // Initialize vinList as an empty array
    const { setCustomProgress, progress, setApiResponse, } = useProgressUpdater();
    const [loading, setLoading] = useState(false)
    const [selectedCountry, SetSelectedCountry] = useState('')

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedVinList = localStorage.getItem('VINS');
            const storedCountry = localStorage.getItem('country');
            setVinList(storedVinList ? JSON.parse(storedVinList) : []);
            if (storedCountry) {
                const countryCode = getCode(storedCountry);
                if (countryCode) {
                    SetSelectedCountry(countryCode);
                } else {
                    SetSelectedCountry('US'); // Default to US if the country code is invalid
                }
            } else {
                SetSelectedCountry('US'); // Default to US if no country is stored
            }
        }
    }, []);

    const handleAddVin = () => {
        if (searchQuery) {
            const trimmedVin = searchQuery.trim();
            if (!vinList.includes(trimmedVin)) {
                const updatedVinList = [...vinList, trimmedVin];
                setVinList(updatedVinList);
                setSearchQuery('')
                localStorage.setItem('VINS', JSON.stringify(updatedVinList));
            } else {
                toast.error('This VIN is already in the list.');
            }
        } else {
            toast.error('This VIN is already in the list.');
        }
    }

    const handleBack = () => {
        setCustomProgress(progress - 10);
        router.push(`/collections/select-country`);
    }


    const handleVinProcessing = async () => {
        if (vinList.length === 0) {
            alert("Please add VIN(s) before proceeding.");
            return;
        }
        setLoading(true)

        try {
            const response = await fetch(`https://backend.illama360.com/api/dummy/compatibility-bulk?vin=${vinList.join(',')}&country=${selectedCountry}`);
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            const data = await response.json();
            if (data.statusCode === 200) {
                setApiResponse(data);
                router.push(`/collections/compatible`);
                handleNext()
                localStorage.setItem('VINS_RESULT', JSON.stringify(transformCompatibilityData(data.data)))
                setLoading(false)
            }
            setCustomProgress(progress + 10);
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.error('Error fetching compatibility data:', error);
            alert('Failed to fetch compatibility data. Please try again.');
        }
    }

    const handleNext = React.useCallback(async () => {
        setCustomProgress(progress + 60);
    }, [progress, setCustomProgress]);

    const removeFromVinList = (vinToRemove: string) => {
        setVinList((prev) => {
            const updatedVinList = prev.filter((vin) => vin !== vinToRemove);
            localStorage.setItem('VINS', JSON.stringify(updatedVinList)); // Update localStorage
            return updatedVinList;
        });
    };

    return (
        <div className="relative bg-bg_white rounded-lg md:shadow-lg w-full max-w-[650px] 
        md:h-[800px] h-screen flex flex-col px-4 xs:px-6 sm:px-12 py-[20px] md:py-[60px]">
            {loading ? <SearchingVins /> :
                <>
                    {/* Fixed Header */}
                    <div className="flex-shrink-0">
                        <div onClick={handleBack} className="flex items-center gap-1 mb-4 cursor-pointer">
                            <ArrowLeft size={20} className="text-ti_dark_grey" />
                            <span className="text-ti_dark_grey font-inter font-semibold text-sm leading-[18px]">Back</span>
                        </div>

                        <div className="mb-8">
                            <h2 className="pre_landing_page_title font-inter">Enter your vehicles’ VIN</h2>
                            <p className="pre_landing_page_text">
                                Enter the VINs of your preferred vehicles to check compatibility. Add them in bulk and review all at once
                            </p>
                        </div>

                    </div>

                    {/* Search Bar - Fixed */}
                    <div className="flex-shrink-0 relative mb-[16px]  flex items-center gap-[8px] rounded-md">

                        <input
                            type="text"
                            placeholder="Enter VIN"
                            // className="w-full bg-bg_dusty_white text-ti_grey font-inter text-[12px] leading-[16px] outline-none"
                            className={`w-3/4 bg-bg_dusty_white font-inter rounded-md  py-[12px] px-[10px] text-xs leading-4 outline-none ${searchQuery ? "text-ti_light_black" : "text-ti_grey"
                                }`}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button onClick={handleAddVin} className=" border rounded-md border-p_light_blue w-1/4 py-[8px] px-[10px] flex items-center justify-center gap-1 outline-none">
                            <Image src={AddIcon} alt='Add Icon' />
                            <h1 className=' text-[14px] font-semibold text-p_blue font-inter'>Add</h1>
                        </button>
                    </div>
                    <div className=" flex-shrink-0  flex items-center gap-1 font-inter text-[14px] font-bold leading-[18px] text-ti_dark_grey mb-4">
                        <span>Added VINs</span>
                    </div>


                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto min-h-0">
                        <div className='space-y-2.5 '>
                            {vinList.length === 0 ? <div className='  mt-[60px] flex flex-col items-center'>
                                <Image src={search} alt='searching image' />
                                <h2 className=' mt-[10px] text-center text-ti_light_black text-[16px] font-semibold font-inter'>Nothing to show here!</h2>
                                <h2 className=' text-center text-ti_grey leading-[16px] text-[12px] font-inter'>Start adding VINs in bulk to check compatibility</h2>
                            </div> :
                                vinList.map((vin, index) => (
                                    <div
                                        key={index}
                                        className={`flex justify-between items-center border border-bg_dusty_white p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer `}
                                    >
                                        <div className="flex items-center">

                                            <div className="leading-[18px] font-medium text-left text-ti_black font-inter text-sm">
                                                {`VIN - ${vin}`}
                                            </div>
                                        </div>
                                        <div className=' text-ti_dark_grey ' onClick={() => removeFromVinList(vin)}>
                                            <RxCross2 size={20} />
                                        </div>

                                    </div>
                                ))
                            }
                        </div>

                    </div>



                    {/* Fixed Footer */}
                    <div className="flex-shrink-0 mt-6 flex lg:flex-row flex-col-reverse items-center gap-4">
                        <button
                            onClick={handleVinProcessing}
                            className={`w-full pre_landing_page_btn text-bg_white px-[14px] py-[10px] font-inter rounded-md ${vinList
                                .length !== 0 ? 'bg-p_blue' : 'bg-p_blue/50'
                                }`}
                            disabled={vinList.length === 0 || loading}
                        >
                            {loading ? 'loading......' : 'Check compatibility'}
                        </button>
                    </div>
                </>}
        </div>

    );
};

export default VIN;



const SearchingVins = () => {
    return (

        <div
            className={`cursor-pointer rounded-lg w-full flex items-center justify-center flex-col p-[20px] mt-[60px]`}>
            <Image src={Vin} alt='' />
            <h4 className=' font-inter mt-[32px]  text-[18px] font-semibold text-ti_black text-center'>Scanning VINs</h4>
            <h4 className=' text-ti_dark_grey   text-[14px] font-inter text-center'>{`Please wait while we finish scanning your provides VINs. This won't take long. Thank you for your patience!`}</h4>
        </div>
    )
}