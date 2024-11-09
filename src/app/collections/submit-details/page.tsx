'use client'
import { ChevronDown } from 'lucide-react';
import Image, { StaticImageData } from "next/image";
import Canada from "@/../public/images/canada.png";

import { useEffect, useState } from "react";
import { countryCodes } from '@/Static_data/data';
import { useRouter } from 'next/navigation';
import { useProgressUpdater } from '@/hooks/useProgress';
const SubmitDetails = () => {
    const router = useRouter();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { setCustomProgress } = useProgressUpdater();
    const [loading, setLoading] = useState(false);


    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        brandName: '',
        fleetSize: '',
        businessType: '',
        teamSize: '',
        locations: '',
        country: '',
        state: '',
        city: '',
        postalCode: '',
        address: '',
        phone: '',
        countryCode: '+1',
        flag: Canada
    });



    const [brandModels, setBrandModels] = useState('');
    const [brands, setBrands] = useState('');
    const [country, setCountry] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setBrandModels(localStorage.getItem('brandModels') || '');
            setBrands(localStorage.getItem('brands') || '');
            setCountry(localStorage.getItem('country') || '');
        }
    }, []);

 

    const submitData = {
        email: formData.email,
        fullName: formData.fullName,
        brandName: formData.brandName,
        fleetSize: formData.fleetSize,
        businessType: formData.businessType,
        teamSize: formData.teamSize,
        locations: formData.locations,
        country: formData.country,
        state: formData.state,
        city: formData.city,
        postalCode: formData.postalCode,
        address: formData.address,
        contactNumber: `${formData.countryCode} ${formData.phone}`,
        brandModels: JSON.parse(brandModels || '{}'),
        brands: JSON.parse(brands || '[]'),
        brandCountry: formData.country,
        selectedCountry: country,
    }

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();
        console.log(formData, 'formData');
        setCustomProgress(100);
        const response = await fetch('/api', {
            method: 'POST',
            body: JSON.stringify(submitData),
        });

        const data = await response.json();

        if (data.status === 201) {
            setLoading(false);
            return router.push('/result/submitted-successfully');
        } else {
            setLoading(false);
            alert('Something went wrong');
        }
        setLoading(false);
    };

    return (

        <div className="relative flex max-h-[800px] overflow-scroll items-center justify-between  w-full max-w-[650px] flex-col rounded-lg bg-bg_white px-[60px] py-[60px] shadow-lg">
            <div className="flex flex-shrink-0 flex-col items-center justify-center">
                <h2 className="pre_landing_page_title font-inter">
                    Submit your details
                </h2>
                <p className="pre_landing_page_text">
                    {`Provide your personal and brand information.  `}
                </p>
            </div>


            <form onSubmit={handleSubmit} id='submitForm' className="w-full flex flex-col gap-[40px] pt-[40px] overflow-y-scroll overflow-hidden  scroll-mt-[120px]" style={{ maxHeight: '1000px' }}>
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
                            required
                            name="fullName"
                            placeholder="Enter name"
                            value={formData.fullName}
                            onChange={handleChange}
                            className=" w-full outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-md text-[12px] font-inter leading-[16px] text-ti_black"
                        />
                    </div>
                    <div className="flex gap-[20px] mt-[16px]">
                        <div className="w-full">
                            <label
                                htmlFor="email"
                                className="block text-ti_dark_grey mb-[5px] text-[12px] font-semibold font-inter"
                            >
                                Email
                            </label>
                            <input
                                type="text"
                                id="email"
                                required
                                name="email"
                                placeholder="Enter email"
                                value={formData.email}
                                onChange={handleChange}
                                className=" w-full outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-md text-[12px] font-inter leading-[16px] text-ti_black"
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
                                                            <span className="ml-2 text-ti_black">{country.code}</span>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                <input
                                    type="number"
                                    id="phone"
                                    name="phone"
                                    placeholder="Enter number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="flex-1 outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-r-md text-[12px] font-inter leading-[16px] text-ti_black"
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
                            id="brandName"
                            required
                            name="brandName"
                            placeholder="Enter name"
                            value={formData.brandName}
                            onChange={handleChange}
                            className=" w-full outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-md text-[12px] font-inter leading-[16px] text-ti_black"
                        />
                    </div>
                    <div className="flex gap-[20px] mt-[16px]">
                        <div className="w-full">
                            <label
                                htmlFor="fleetSize"
                                className="block text-ti_dark_grey mb-[5px] text-[12px] font-semibold font-inter"
                            >
                                Fleet size
                            </label>
                            <input
                                type="number"
                                required
                                id="fleetSize"
                                name="fleetSize"
                                placeholder="Enter number"
                                value={formData.fleetSize}
                                onChange={handleChange}
                                className=" w-full outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-md text-[12px] font-inter leading-[16px] text-ti_black"
                            />
                        </div>
                        <div className="w-full">
                            <label
                                htmlFor="businessType"
                                className="block text-ti_dark_grey mb-[5px] text-[12px] font-semibold font-inter"
                            >
                                Business type (optional)
                            </label>
                            <input
                                type="text"
                                id="businessType"
                                name="businessType"
                                placeholder="Enter type"
                                value={formData.businessType}
                                onChange={handleChange}
                                className=" w-full outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-md text-[12px] font-inter leading-[16px] text-ti_black"
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
                                type="number"

                                id="locations"
                                name="locations"
                                placeholder="Enter number"
                                value={formData.locations}
                                onChange={handleChange}
                                className=" w-full outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-md text-[12px] font-inter leading-[16px] text-ti_black"
                            />
                        </div>
                        <div className="w-full">
                            <label
                                htmlFor="teamSize"
                                className="block text-ti_dark_grey mb-[5px] text-[12px] font-semibold font-inter"
                            >
                                Team size (if any)
                            </label>
                            <input
                                type="number"

                                id="teamSize"
                                name="teamSize"
                                placeholder="Enter type"
                                value={formData.teamSize}
                                onChange={handleChange}
                                className=" w-full outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-md text-[12px] font-inter leading-[16px] text-ti_black"
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
                                id="country"
                                required
                                name="country"
                                placeholder="Canada"
                                value={formData.country}
                                onChange={handleChange}
                                className=" w-full outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-md text-[12px] font-inter leading-[16px] text-ti_black"
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
                                id="state"
                                required
                                name="state"
                                placeholder="Enter type"
                                value={formData.state}
                                onChange={handleChange}
                                className=" w-full outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-md text-[12px] font-inter leading-[16px] text-ti_black"
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
                                id="city"
                                name="city"
                                required
                                placeholder="Enter city"
                                value={formData.city}
                                onChange={handleChange}
                                className=" w-full outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-md text-[12px] font-inter leading-[16px] text-ti_black"
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
                                type="number"
                                required
                                id="postalCode"
                                name="postalCode"
                                placeholder="Enter code"
                                value={formData.postalCode}
                                onChange={handleChange}
                                className=" w-full outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-md text-[12px] font-inter leading-[16px] text-ti_black"
                            />
                        </div>
                    </div>
                </div>

            </form>
            <div className="w-full mt-[20px]">
                <button disabled={loading} type='submit' form='submitForm' className="w-full rounded-md bg-p_blue px-[14px] py-[9.3px] font-inter text-[14px] font-semibold text-bg_white">
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </div>


        </div>

    );
};

export default SubmitDetails;
