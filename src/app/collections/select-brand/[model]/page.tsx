'use client'
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { Country } from '@/Interface/interface';
import start from '@/../public/images/start-with-us.jpg'
import Link from 'next/link';
import { BrandCarList } from '@/Static_data/data';


const ModelSelector = ({ params }: { params: { model: string[] } }) => {
    const { model } = params;


    // const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);

    const filteredModels = BrandCarList.filter((brand, index) =>
        brand.brand.includes(model[index])
    );

    const modelData = filteredModels[1]


    const [selectedModels, setSelectedModels] = useState<string[]>([]);

    const handleModelSelect = (model: string) => {
        if (selectedModels.includes(model)) {
            setSelectedModels(selectedModels.filter(selectedModel => selectedModel !== model));
        } else {
            setSelectedModels([...selectedModels, model]);
        }
    };



    return (
        <div className='relative h-screen w-screen'>
            <Image
                src={start}
                alt="start with us"
                className="absolute inset-0 h-full w-full"
            />
            <div className="min-h-screen z-[1000000] bg-bg_white flex items-center justify-center p-4 overflow-auto">
                <div className="relative bg-bg_white rounded-lg shadow-lg w-full max-w-[650px] h-[780px] flex flex-col px-[60px] py-[60px]">
                    {/* Header Section */}
                    <Link href={`/collections/select-brand`} className='flex items-center gap-[5px] mb-[16px] cursor-pointer'>
                        <ArrowLeft size={20} className=' text-ti_dark_grey' />
                        <span className='text-ti_dark_grey font-inter font-semibold text-[14px] leading-[18px]'>{`Back`}</span>
                    </Link>


                    <div className="mb-[40px] flex-shrink-0">
                        <h2 className="pre_landing_page_title font-inter">Select your car models</h2>
                        <p className="pre_landing_page_text">
                            Choose your car models of each of your selected brands
                        </p>
                    </div>

                    {/* Search Section */}
                    <div className='  mb-[32px] flex items-center justify-center flex-col'>
                        <Image className=' h-[50px] w-auto object-contain' src={modelData.brandLogo} alt='model' />
                        <h1 className='text-p_dark_blue font-inter font-semibold text-[32px] mt-[2px]'>{modelData.brand}</h1>
                        <h3 className='text-ti_dark_grey  font-medium font-inter text-[14px] leading-[18px]'>{modelData.year}</h3>
                    </div>

                    {/* Scrollable Countries List */}
                    <div className="space-y-[10px]  w-full overflow-y-scroll" style={{ maxHeight: '450px' }}>
                        {modelData.models.map((model) => (
                            <div
                                key={model.name}
                                className={` flex justify-between items-center border border-bg_dusty_white p-[16px] rounded-lg hover:bg-gray-50 transition-colors cursor-pointer ${selectedModels.includes(model.name) ? 'select_car_collection_bg border-p_light_blue ' : ''
                                    }`}
                                onClick={() => handleModelSelect(model.name)}
                            >
                                <div className="flex items-center">
                                    <input type="checkbox" checked={selectedModels.includes(model.name)} onChange={() => handleModelSelect(model.name)} />
                                    <div className="ml-2 leading-[18px] font-semibold text-left text-ti_black font-inter text-[14px]">
                                        {model.name} {model.years}
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>


                    {/* Footer Buttons */}
                    <div className="mt-[40px] flex-shrink-0 flex items-center gap-4">
                        <button className=" w-1/2 pre_landing_page_btn border text-ti_grey px-[14px] py-[8px] border-ti_light_grey rounded-md">
                            <Link href='/collections/not-compatible'>{`I can’t find my country`}</Link>
                        </button>
                        <button
                            className={` w-1/2 pre_landing_page_btn  text-bg_white   px-[14px] py-[10px] rounded-md ${selectedModels.length ? ' bg-p_blue' : 'bg-p_blue/50  '
                                }`}
                            disabled={!selectedModels.length}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModelSelector;



