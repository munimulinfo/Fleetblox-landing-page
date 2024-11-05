'use client'
import { ChevronDown } from 'lucide-react';
import Image, { StaticImageData } from "next/image";
import start from "@/../public/images/start-with-us.jpg";
import Canada from "@/../public/images/canada.png";

import { useState } from "react";
import { countryCodes } from '@/Static_data/data';


const SubmitDetails = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        brandName: '',
        fleetSize: '',
        businessType: '',
        teamSize: '',
        location: '',
        country: '',
        state: '',
        city: '',
        postalCode: '',
        address: '',
        countryCode: '+1',
        flag: Canada
    });


    const [isDropdownOpen, setIsDropdownOpen] = useState(false);



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const selectCountryCode = (code: { code: string; flag: StaticImageData }) => {
        setFormData(prev => ({
            ...prev,
            countryCode: code.code,
            flag: code.flag
        }));
        setIsDropdownOpen(false);
    };



    return (
        <div className="relative h-screen w-screen">
            <Image
                src={start}
                alt="start with us"
                className="absolute inset-0 h-full w-full"
            />

            <div className="z-[1000000] flex min-h-screen  items-center justify-center overflow-auto bg-bg_white p-4">
                <div className="relative flex max-h-[800px] overflow-scroll items-center justify-between  w-full max-w-[650px] flex-col rounded-lg bg-bg_white px-[60px] py-[60px] shadow-lg">
                    <div className="flex flex-shrink-0 flex-col items-center justify-center">
                        <h2 className="pre_landing_page_title font-inter">
                            Submit your details
                        </h2>
                        <p className="pre_landing_page_text">
                            {`Provide your personal and brand information.  `}
                        </p>
                    </div>


                    <div className="w-full flex flex-col gap-[40px] pt-[40px] overflow-y-scroll overflow-hidden" style={{ maxHeight: '1000px' }}>
                        <div>
                            <h1 className=" mb-[20px] text-ti_light_black text-[18px] font-semibold font-inter">Personal info</h1>
                            <div>
                                <label
                                    htmlFor="fullName"
                                    className="block text-ti_dark_grey mb-[5px] text-[12px] font-semibold font-inter"
                                >
                                    Full name
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    placeholder="Enter name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className=" w-full outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-md text-[12px] font-inter leading-[16px] text-ti_grey"
                                />
                            </div>
                            <div className="flex gap-[20px] mt-[16px]">
                                <div className="w-full">
                                    <label
                                        htmlFor="fullName"
                                        className="block text-ti_dark_grey mb-[5px] text-[12px] font-semibold font-inter"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        placeholder="Enter email"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className=" w-full outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-md text-[12px] font-inter leading-[16px] text-ti_grey"
                                    />
                                </div>
                                <div className="w-full">
                                    <label
                                        htmlFor="phone"
                                        className="block text-ti_dark_grey mb-[5px] text-[12px] font-semibold font-inter"
                                    >
                                        Phone (optional)
                                    </label>
                                    <div className="relative flex">
                                        <div className="relative">
                                            <button
                                                type="button"
                                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                className="flex w-[80px] space-x-[5px] items-center h-[40px] px-[10px] bg-bg_dusty_white rounded-l-md border-r border-gray-200 text-[12px] font-inter text-ti_grey hover:bg-gray-100"
                                            >
                                                <Image src={formData.flag} alt="Canada" width={20} height={20} />
                                                <span className='text-ti_light_black'>{formData.countryCode}</span>
                                                <ChevronDown className="ml-1 h-4 w-4 text-ti_light_black" />
                                            </button>

                                            {isDropdownOpen && (
                                                <div className="absolute z-1000 mt-1 w-56 bg-bg_white rounded-md shadow-lg border border-gray-200">
                                                    <ul className="py-1 max-h-60 overflow-auto">
                                                        {countryCodes.map((country) => (
                                                            <li
                                                                key={country.country}
                                                                className="px-3 py-2 hover:bg-gray-50 cursor-pointer text-[12px] font-inter text-ti_light_black flex items-center gap-[10px] "
                                                                onClick={() => selectCountryCode(country)}
                                                            >
                                                                <Image src={country.flag} alt={country.country} width={20} height={20} />
                                                                <div>
                                                                    <span>{country.country}</span>
                                                                    <span className="ml-2 text-ti_grey">{country.code}</span>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>

                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="Enter number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="flex-1 outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-r-md text-[12px] font-inter leading-[16px] text-ti_grey"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className=" mb-[20px] text-ti_light_black text-[18px] font-semibold font-inter">Brand info</h1>
                            <div>
                                <label
                                    htmlFor="fullName"
                                    className="block text-ti_dark_grey mb-[5px] text-[12px] font-semibold font-inter"
                                >
                                    Brand name
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    placeholder="Enter name"
                                    value={formData.brandName}
                                    onChange={handleChange}
                                    className=" w-full outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-md text-[12px] font-inter leading-[16px] text-ti_grey"
                                />
                            </div>
                            <div className="flex gap-[20px] mt-[16px]">
                                <div className="w-full">
                                    <label
                                        htmlFor="fullName"
                                        className="block text-ti_dark_grey mb-[5px] text-[12px] font-semibold font-inter"
                                    >
                                        Fleet size
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        placeholder="Enter number"
                                        value={formData.fleetSize}
                                        onChange={handleChange}
                                        className=" w-full outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-md text-[12px] font-inter leading-[16px] text-ti_grey"
                                    />
                                </div>
                                <div className="w-full">
                                    <label
                                        htmlFor="fullName"
                                        className="block text-ti_dark_grey mb-[5px] text-[12px] font-semibold font-inter"
                                    >
                                        Business type (optional)
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        placeholder="Enter type"
                                        value={formData.businessType}
                                        onChange={handleChange}
                                        className=" w-full outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-md text-[12px] font-inter leading-[16px] text-ti_grey"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-[20px] mt-[16px]">
                                <div className="w-full">
                                    <label
                                        htmlFor="fullName"
                                        className="block text-ti_dark_grey mb-[5px] text-[12px] font-semibold font-inter"
                                    >
                                        Number of locations (if any)
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        placeholder="Enter number"
                                        value={formData.fleetSize}
                                        onChange={handleChange}
                                        className=" w-full outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-md text-[12px] font-inter leading-[16px] text-ti_grey"
                                    />
                                </div>
                                <div className="w-full">
                                    <label
                                        htmlFor="fullName"
                                        className="block text-ti_dark_grey mb-[5px] text-[12px] font-semibold font-inter"
                                    >
                                        Team size (if any)
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        placeholder="Enter type"
                                        value={formData.businessType}
                                        onChange={handleChange}
                                        className=" w-full outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-md text-[12px] font-inter leading-[16px] text-ti_grey"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-[20px] mt-[16px]">
                                <div className="w-full">
                                    <label
                                        htmlFor="fullName"
                                        className="block text-ti_dark_grey mb-[5px] text-[12px] font-semibold font-inter"
                                    >
                                        Country
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        placeholder="Enter number"
                                        value={formData.fleetSize}
                                        onChange={handleChange}
                                        className=" w-full outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-md text-[12px] font-inter leading-[16px] text-ti_grey"
                                    />
                                </div>
                                <div className="w-full">
                                    <label
                                        htmlFor="fullName"
                                        className="block text-ti_dark_grey mb-[5px] text-[12px] font-semibold font-inter"
                                    >
                                        State / Province
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        placeholder="Enter type"
                                        value={formData.businessType}
                                        onChange={handleChange}
                                        className=" w-full outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-md text-[12px] font-inter leading-[16px] text-ti_grey"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-[20px] mt-[16px]">
                                <div className="w-full">
                                    <label
                                        htmlFor="fullName"
                                        className="block text-ti_dark_grey mb-[5px] text-[12px] font-semibold font-inter"
                                    >
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        placeholder="Enter number"
                                        value={formData.fleetSize}
                                        onChange={handleChange}
                                        className=" w-full outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-md text-[12px] font-inter leading-[16px] text-ti_grey"
                                    />
                                </div>
                                <div className="w-full">
                                    <label
                                        htmlFor="fullName"
                                        className="block text-ti_dark_grey mb-[5px] text-[12px] font-semibold font-inter"
                                    >
                                        Postal code
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        placeholder="Enter type"
                                        value={formData.businessType}
                                        onChange={handleChange}
                                        className=" w-full outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-md text-[12px] font-inter leading-[16px] text-ti_grey"
                                    />
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="w-full mt-[20px]">
                        <button className="w-full rounded-md bg-p_blue px-[14px] py-[9.3px] font-inter text-[14px] font-semibold text-bg_white">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubmitDetails;
