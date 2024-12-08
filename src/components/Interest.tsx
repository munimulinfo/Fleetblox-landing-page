'use client'
import { ChevronDown } from 'lucide-react';
import Image, { StaticImageData } from "next/image";
import Canada from "@/../public/images/canada.png";
import toast from 'react-hot-toast'
import { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/navigation';
import { useProgressUpdater } from '@/hooks/useProgress';
import axios from 'axios';
import { Country } from '@/app/collections/select-country/page';
import { AxiosErrorResponse } from '@/Interface/AxiosErrorResponse';

const SubmitDetails = () => {
    const router = useRouter();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { setCustomProgress } = useProgressUpdater();
    const [loading, setLoading] = useState(false);
    const [brandModels, setBrandModels] = useState('');
    const [brands, setBrands] = useState('');
    const [country, setCountry] = useState('');
    const [countries, setCountries] = useState<Country[] | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);


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
    // console.log();


    const [plan, setPlan] = useState('');
    const [vinsResult, setVinsResult] = useState('')
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setBrandModels(localStorage.getItem('brandModels') || '');
            setBrands(localStorage.getItem('brands') || '');
            setCountry(localStorage.getItem('country') || '');
            setPlan(localStorage.getItem('price_plan') || '')
            setVinsResult(localStorage.getItem('VINS_RESULT') || '')
        }

        const getCountries = async () => {
            const countries = await fetch('https://backend.illama360.com/api/utils/all-countries');
            const response = await countries.json()

            setCountries(response.data);
        }

        getCountries()
    }, []);

    useEffect(() => {
        if (countries?.length && country) {
            const selectedCountryFetch = countries.find(c => c.country === country);
            setFormData((prev) => ({
                ...prev,
                countryCode: selectedCountryFetch?.phoneCode.toString() || '+1',
                flag: selectedCountryFetch?.countryFlag as unknown as StaticImageData,
            }));
        }
    }, [countries, country]);



    const contactNumber = `${formData.countryCode}${formData.phone}`;

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
        address: `${formData.state},${formData.city},${formData.country},`,
        contactNumber: contactNumber,
        brandModels: JSON.parse(brandModels || '{}'),
        brands: JSON.parse(brands || '[]'),
        brandCountry: formData.country,
        selectedCountry: country,
        selectedVin: JSON.parse(vinsResult || '[]'),
        plan: JSON.parse(plan || '{}'),
        isFromPreLunching: true
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const selectCountryCode = (data: Country) => {
        setFormData((prev) => ({
            ...prev,
            countryCode: data.phoneCode,
            flag: data.countryFlag as unknown as StaticImageData
        }));
        setIsDropdownOpen(false);
    };



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();
        setCustomProgress(100);
        try {
            setLoading(true);
            const { data } = await axios.post('https://backend.illama360.com/api/InterestedUser/create', submitData)
            console.log(data);
            if (data.statusCode === 201) {
                localStorage.clear()
                return router.push('/result/submitted-successfully');
            }
            setLoading(false);
        } catch (error) {
            const axiosError = error as AxiosErrorResponse;
            setLoading(false);
            setFormData({
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
            })
            console.log(error);

            const errorMessage = axiosError?.response?.data?.error?.message || 'An unexpected error occurred';
            console.error(errorMessage);
            toast.error(errorMessage);
        }
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);




    return (

        <div className="flex  h-[92vh] md:h-[80vh] w-full items-center justify-center p-4">
            <div className="relative flex h-full w-full max-w-[650px] flex-col rounded-lg bg-bg_white md:shadow-lg">
                {/* Header Section - Fixed */}
                <div className="flex-shrink-0 px-[20px] pt-[20px] xs:px-[30px] sm:px-[60px] md:pt-[60px]">
                    <div className="text-center">
                        <h2 className="pre_landing_page_title font-inter">
                            Submit your details
                        </h2>
                        <p className="pre_landing_page_text">
                            Provide your personal and brand information.
                        </p>
                    </div>
                </div>

                {/* Form Section - Scrollable */}
                <div className="flex-1 overflow-hidden px-[20px] xs:px-[30px] sm:px-[60px] mt-[40px]">
                    <div className="h-full overflow-y-auto "> {/* Added padding bottom to ensure content doesn't hide behind button */}
                        <form onSubmit={handleSubmit} id="submitForm" className=" flex flex-col gap-[40px]">
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
                                        maxLength={50}
                                        name="fullName"
                                        placeholder="Enter name"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className=" w-full outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-md text-[12px] font-inter leading-[16px] text-ti_black"
                                    />
                                </div>
                                <div className="flex  sm:flex-row flex-col gap-[20px] mt-[16px]">
                                    <div className="w-full">
                                        <label
                                            htmlFor="email"
                                            className="block text-ti_dark_grey mb-[5px] text-[12px] font-semibold font-inter"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            name="email"
                                            maxLength={50}
                                            placeholder="Enter email"
                                            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className=" w-full outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-md text-[12px] font-inter leading-[16px] text-ti_black"
                                        />
                                    </div>
                                    <div className="sm:w-1/2  w-full sm:flex-shrink-0">
                                        <label
                                            htmlFor="phone"
                                            className="block text-ti_dark_grey mb-[5px] text-[12px] font-semibold font-inter"
                                        >
                                            Phone
                                        </label>
                                        <div className="relative flex">
                                            <div className="relative" ref={dropdownRef}>
                                                <button
                                                    type="button"
                                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                    className="flex w-[95px] items-center h-[42px] px-[10px] bg-bg_dusty_white rounded-l-md border-r border-gray-200 text-[12px] font-inter text-ti_grey hover:bg-gray-100"
                                                >
                                                    <Image src={formData.flag} alt="Canada" className='mr-2 w-[24px] h-[20px] rounded-[6px]' width={20} height={20} />
                                                    <span className='text-ti_light_black'>{formData.countryCode}</span>
                                                    <ChevronDown className=" ml-1 h-4 w-4 text-ti_light_black" />
                                                </button>

                                                {isDropdownOpen && (
                                                    <div className="absolute z-1000 mt-1 w-56 bg-bg_white rounded-md shadow-lg border border-gray-200">
                                                        <ul className="py-1 max-h-60 overflow-auto">
                                                            {countries?.map((country) => (
                                                                <li
                                                                    key={country.country}
                                                                    className="px-3 py-2 hover:bg-gray-50 cursor-pointer text-[12px] font-inter text-ti_light_black flex items-center gap-[10px] "
                                                                    onClick={() => selectCountryCode(country)}
                                                                >
                                                                    <Image src={country.countryFlag} alt={country.country} className="mr-3 w-[24px] h-[20px] rounded-[6px]" width={20} height={20} />
                                                                    <div>
                                                                        <span>{country.country}</span>
                                                                        <span className="ml-2 text-ti_black">{country.countryCode}</span>
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
                                                maxLength={17}
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
                                        maxLength={50}
                                        placeholder="Enter name"
                                        value={formData.brandName}
                                        onChange={handleChange}
                                        className=" w-full outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-md text-[12px] font-inter leading-[16px] text-ti_black"
                                    />
                                </div>
                                <div className="flex sm:flex-row flex-col gap-[20px] mt-[16px]">
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
                                            maxLength={50}
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
                                            Business type
                                        </label>
                                        <input
                                            type="text"
                                            id="businessType"
                                            name="businessType"
                                            placeholder="Enter type"
                                            maxLength={50}
                                            value={formData.businessType}
                                            onChange={handleChange}
                                            className=" w-full outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-md text-[12px] font-inter leading-[16px] text-ti_black"
                                        />
                                    </div>
                                </div>
                                <div className="flex sm:flex-row flex-col gap-[20px] mt-[16px]">
                                    <div className="w-full">
                                        <label
                                            htmlFor="fullName"
                                            className="block text-ti_dark_grey mb-[5px] text-[12px] font-semibold font-inter"
                                        >
                                            Number of locations (if any)
                                        </label>
                                        <input
                                            type="number"
                                            maxLength={50}
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
                                            maxLength={50}
                                            id="teamSize"
                                            name="teamSize"
                                            placeholder="Enter type"
                                            value={formData.teamSize}
                                            onChange={handleChange}
                                            className=" w-full outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-md text-[12px] font-inter leading-[16px] text-ti_black"
                                        />
                                    </div>
                                </div>
                                <div className="flex sm:flex-row flex-col gap-[20px] mt-[16px]">
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
                                            // placeholder="Canada"
                                            value={country}
                                            disabled
                                            // onChange={handleChange}
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
                                            maxLength={50}
                                            placeholder="Enter State"
                                            value={formData.state}
                                            onChange={handleChange}
                                            className=" w-full outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-md text-[12px] font-inter leading-[16px] text-ti_black"
                                        />
                                    </div>
                                </div>
                                <div className="flex sm:flex-row flex-col gap-[20px] mt-[16px]">
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
                                            maxLength={50}
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
                                            maxLength={50}
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
                    </div>
                </div>

                {/* Button Section - Fixed at Bottom */}
                <div className="flex-shrink-0  p-4 md:px-[60px] md:py-[30px] md:pb-[60px]">
                    <button
                        disabled={loading}
                        type="submit"
                        form="submitForm"
                        className="w-full rounded-md bg-p_blue px-[14px] py-[10px] font-inter text-[14px] font-semibold text-bg_white"
                    >
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </div>
        </div>

    );
};

export default SubmitDetails;



