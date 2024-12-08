'use client'
import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useProgressUpdater } from '@/hooks/useProgress';
import Vin from '@/../public/images/vinsvg.svg'
import vehicle from '@/../public/images/vehicle.svg'
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

const Compatibility = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const country = searchParams.get('country')
    const [mode, setMode] = useState('')
    const [compatibility, setCompatibility] = useState<string | null>(null);

    const [disabled, setDisabled] = useState(false)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const compatibility = localStorage.getItem('compatibility');
            setCompatibility(compatibility)
        }
    }, []);



    const handleModeSelect = (mode: string) => {

        if (mode === 'vin') {
            localStorage.removeItem('brandModels')
            localStorage.removeItem('brands')
        }

        if (mode === 'vehicle') {
            localStorage.removeItem('VINS')
            localStorage.removeItem('VINS_RESULT')
        }

        if (compatibility === mode) {
            localStorage.removeItem('compatibility');
            setMode('')
            setCompatibility(null)
            localStorage.removeItem('')
        } else {
            setCompatibility(mode);
            setMode(mode)
            localStorage.setItem('compatibility', mode);
        }
    };




    const { setCustomProgress, progress } = useProgressUpdater();

    const handleNext = React.useCallback(() => {
        setDisabled(true)
        if (disabled) {
            return
        }
        if (mode === 'vin') {
            router.push(`/collections/VIN?country=${country}`);
        } else {
            router.push(`/collections/select-brand?country=${country}`);
        }
        setCustomProgress(progress + 10);

    }, [mode, setCustomProgress, progress, router, country]);

    const handleBack = () => {
        setCustomProgress(progress - 10);
        router.push(`/collections/select-country`);
    }

    return (

        <div className="relative bg-bg_white rounded-lg md:shadow-lg w-full max-w-[650px] 
         h-[90vh] md:h-[90vh] flex flex-col px-4 xs:px-6 sm:px-12 py-[20px] md:py-[60px]">
            {/* Fixed Header */}
            <div className="flex-shrink-0">
                <div onClick={handleBack} className="flex items-center gap-1 mb-4 cursor-pointer">
                    <ArrowLeft size={20} className="text-ti_dark_grey" />
                    <span className="text-ti_dark_grey font-inter font-semibold text-sm leading-[18px]">Back</span>
                </div>

                <div className="mb-8">
                    <h2 className="pre_landing_page_title font-inter">Check your vehicle compatibility</h2>
                    <p className="pre_landing_page_text">
                        The brands and models you selected are compatible with us! If a car isn’t on the list, it’s not supported. Share your details to proceed.  </p>
                </div>
            </div>


            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto min-h-0">
                <div className=''>
                    <div className="flex items-center gap-1 font-inter text-[14px] font-bold leading-[18px] text-ti_dark_grey mb-4">
                        <span>Select your method</span>
                    </div>
                </div>

                <div className=' flex flex-col gap-[10px]'>
                    <div
                        onClick={() => handleModeSelect('vin')}
                        className={`border cursor-pointer border-bg_dusty_white rounded-lg w-full flex items-center justify-center flex-col p-[20px] ${compatibility === 'vin' ? 'select_car_collection_bg border-p_light_blue' : ''}`}>
                        <Image src={Vin} alt='' />
                        <h4 className=' font-inter mt-[32px]  text-[18px] font-semibold text-ti_black text-center'>Test by VIN</h4>
                        <h4 className=' text-ti_dark_grey   text-[14px] font-inter text-center'>Use your vehicles’ VIN</h4>
                    </div>
                    <div
                        onClick={() => handleModeSelect('vehicle')}
                        className={`cursor-pointer border border-bg_dusty_white rounded-lg w-full flex items-center justify-center flex-col p-[20px] ${compatibility === 'vehicle' ? 'select_car_collection_bg border-p_light_blue' : ''}`}>
                        <Image src={vehicle} alt='' />
                        <h4 className=' font-inter mt-[32px]  text-[18px] font-semibold text-ti_black text-center'>Test by vehicle models</h4>
                        <h4 className=' text-ti_dark_grey   text-[14px] font-inter text-center'>Go through our compatible list</h4>
                    </div>

                </div>
            </div>



            {/* Fixed Footer */}
            <div className="flex-shrink-0 mt-[40px] flex lg:flex-row flex-col-reverse items-center gap-4">
                <button
                    onClick={handleNext}
                    className={`w-full pre_landing_page_btn text-bg_white px-[14px] py-[10px] font-inter rounded-md ${compatibility ? 'bg-p_blue' : 'bg-p_blue/50'
                        }`}
                    disabled={!compatibility || disabled}
                >
                    Next
                </button>
            </div>
        </div>

    );
};

export default Compatibility;



