'use client'
import { ChevronDown } from 'lucide-react';
import Image, { StaticImageData } from "next/image";
import Canada from "@/../public/images/canada.png";



import trueIcon from '@/../public/images/true.svg'
import falseIcon from '@/../public/images/false.svg'

import { useCallback, useEffect, useState } from "react";
import { BrandCarList, countryCodes, pricingPlan } from '@/Static_data/data';
import { useRouter } from 'next/navigation';
import { useProgressUpdater } from '@/hooks/useProgress';
import BillingToggle from './toggler';
const SubmitDetails = () => {
    const router = useRouter();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { setCustomProgress } = useProgressUpdater();
    const [loading, setLoading] = useState(false);

    const [selectedPlan, setSelectedPlan] = useState('');

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        cardHolderName: '',
        cardNumber: '',
        expiryDate: '',
        cvc: '',
        countryCode: '+1',
        flag: Canada
    });
    const [brandModels, setBrandModels] = useState<Record<string, string | null>>({});
    const [brands, setBrands] = useState('');


    useEffect(() => {
        if (typeof window !== 'undefined') {
            setBrandModels(JSON.parse(localStorage.getItem('brandModels') || '{}'));
            setBrands(localStorage.getItem('brands') || '');
        }
    }, []);
    // const submitData = {
    //     email: formData.email,
    //     fullName: formData.fullName,
    //     brandName: formData.brandName,
    //     fleetSize: formData.fleetSize,
    //     businessType: formData.businessType,
    //     teamSize: formData.teamSize,
    //     locations: formData.locations,
    //     country: formData.country,
    //     state: formData.state,
    //     city: formData.city,
    //     postalCode: formData.postalCode,
    //     address: formData.address,
    //     contactNumber: `${formData.countryCode} ${formData.phone}`,
    //     brandModels: JSON.parse(brandModels || '{}'),
    //     brands: JSON.parse(brands || '[]'),
    //     brandCountry: formData.country,
    //     selectedCountry: country,
    // }

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
            // body: JSON.stringify(submitData),
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

    const handlePlanSelect = (plan: string) => {
        if (plan !== 'Dynamic Fleet' && plan !== 'Ultimate Fleet') {
            if (selectedPlan === plan) {
                setSelectedPlan('');
            } else {
                setSelectedPlan(plan);
            }
        }
    };
    const filteredCompatibleBrands = useCallback(() => {
        return BrandCarList.filter(brand => brands.includes(brand.brand)).map(brand => ({
            brand: brand.brand,
            brandLogo: brand.brandLogo,
            compatible: brandModels[brand.brand] !== null,
            models: brand.models.filter(model => brandModels[brand.brand]?.includes(model.name))
        }));
    }, [brandModels, brands]);

    console.log(filteredCompatibleBrands(), 'filteredCompatibleBrands');




    return (
        <div className="relative flex  overflow-scroll  justify-between  w-full max-w-[1360px] flex-col rounded-lg bg-bg_white px-[20px] xs:px-[30px] sm:px-[50px] py-[20px] md:py-[50px] md:shadow-lg">
            <div className="flex flex-shrink-0 flex-col ">
                <h2 className="pre_landing_page_title text-left font-inter text-ti_light_black">
                    Complete your purchase
                </h2>
                <p className="pre_landing_page_text text-left">
                    {`Confirm your vehicle compatibility and choose your plan, then continue to payment. `}
                </p>
            </div>
            <div className=' flex items-start  gap-[60px] mt-[40px]'>
                <div className=' flex-1 flex flex-col  '>
                    <div>
                        <div className=' flex items-center justify-between'>
                            <h1 className=' text-ti_dark_grey text-[14px] font-bold font-inter'>Choose your pricing plan</h1>
                            <BillingToggle />
                        </div>

                        <div className=' grid grid-cols-3 gap-[10px] mt-[16px]'>
                            {pricingPlan.map((plan) => (
                                <div key={plan.title} className='relative'>
                                    <div onClick={() => handlePlanSelect(plan.title)} className={`flex cursor-pointer flex-col border border-bg_dusty_white rounded-md   p-[16px] ${plan.title !== 'Smart Fleet' ? 'opacity-50' : ''}  ${selectedPlan === plan.title ? 'select_car_collection_bg border-p_light_blue ' : ''}`}>
                                        <Image src={plan.image} alt={plan.title} className='size-[40px]' />
                                        <h1 className=' text-ti_light_black  mt-[5px]   text-[16px] font-semibold font-inter'>{plan.title}</h1>
                                        <p className=' text-ti_dark_grey text-[12px] font-normal font-inter'>{plan.description}</p>
                                        <h1 className=' text-ti_light_black mt-[20px] text-[24px] font-bold font-inter '>${plan.price}<span className=" font-inter text-[14px] font-medium">
                                            .99<span className='text-ti_grey'>/month</span>
                                        </span></h1>


                                    </div>
                                    {plan.title !== 'Smart Fleet' && <div className='bg-[#02636F] absolute top-[10px] right-0  text-bg_white text-[12px] font-medium leading-[16px] px-[10px] py-[4px] rounded'>Upcomming</div>}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className=' my-[20px] w-full border border-bg_dusty_white'></div>

                    <div>
                        <div className=' flex items-center justify-between'>
                            <h1 className=' text-ti_dark_grey text-[14px] font-bold font-inter'>Selected vehicles</h1>
                        </div>
                        <div className='mt-[16px] space-y-[10px] max-h-[350px] overflow-y-scroll'>
                            {
                                filteredCompatibleBrands().map((brand) => (
                                    <div key={brand.brand} className="flex items-center  justify-between border rounded-md px-[16px] py-[12px]">
                                        <div className=" flex items-center gap-[15px]">
                                            <Image src={brand.brandLogo} alt={brand.brand} className="mix-blend-multiply flex items-center justify-center object-contain w-[70px] h-[40px]" />
                                            <div className='w-[550px]'>
                                                <h1 className="font-inter text-[16px] font-semibold text-ti_black">{brand.brand}</h1>
                                                <p className="font-inter text-[12px] font-normal text-ti_dark_grey">{brand.models.map(model => model.name).join(', ')}</p>
                                            </div>
                                        </div>
                                       <div className='w-[110px]'>
                                            {brand.compatible ? (
                                                <div className="flex items-center gap-[5px]">
                                                    <Image src={trueIcon} width={16} height={16} alt="success" />
                                                    <span className="font-inter text-[14px]  text-[#4DB429]">Compatible</span>
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-[5px]">
                                                    <Image src={falseIcon} width={16} height={16} alt="failed" />
                                                    <span className="font-inter text-[14px]  text-[#F00]">Incompatible</span>
                                                </div>
                                            )}
                                       </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit} id='submitForm' className=" shadow-lg  pb-[20px] rounded-lg  px-[20px] max-w-[360px] flex flex-col    justify-between h-[670px] flex-initial   " >
                    <div>
                        <div className=''>
                            <h1 className=" mb-[10px] text-ti_dark_grey text-[14px] font-bold font-inter">Contact info</h1>
                            <div>
                                <input
                                    type="text"
                                    id="fullName"
                                    required
                                    name="fullName"
                                    placeholder="Full name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className=" w-full outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-sm text-[12px] font-inter leading-[16px] text-ti_black"
                                />
                            </div>
                            <div className="w-full my-[5px]">
                                <input
                                    type="text"
                                    id="email"
                                    required
                                    name="email"
                                    placeholder=" Business email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className=" w-full outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-sm text-[12px] font-inter leading-[16px] text-ti_black"
                                />
                            </div>
                            <div className="w-full">
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
                                            <div className="absolute z-1000 mt-1 w-56 bg-bg_white rounded-sm shadow-lg border border-gray-200">
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

                        <div className=' my-[20px] w-full border border-bg_dusty_white'></div>

                        <div className=''>
                            <h1 className=" mb-[10px] text-ti_dark_grey text-[14px] font-bold font-inter">Payment method</h1>
                            <div>
                                <input
                                    type="text"
                                    id="cardHolderName"
                                    required
                                    name="cardHolderName"
                                    placeholder="Card holder name"
                                    value={formData.cardHolderName}
                                    onChange={handleChange}
                                    className=" w-full outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-sm text-[12px] font-inter leading-[16px] text-ti_black"
                                />
                            </div>
                            <div className="w-full my-[5px]">
                                <input
                                    type="text"
                                    id="cardNumber"
                                    required
                                    name="cardNumber"
                                    placeholder="Credit or debit card number"
                                    value={formData.cardNumber}
                                    onChange={handleChange}
                                    className=" w-full outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-sm text-[12px] font-inter leading-[16px] text-ti_black"
                                />
                            </div>
                            <div className="w-full my-[5px]">
                                <input
                                    type="text"
                                    id="expiryDate"
                                    required
                                    name="expiryDate"
                                    placeholder="MM/YY"
                                    value={formData.expiryDate}
                                    onChange={handleChange}
                                    className=" w-full outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-sm text-[12px] font-inter leading-[16px] text-ti_black"
                                />
                            </div>
                            <div className="w-full my-[5px]">
                                <input
                                    type="text"
                                    id="cvc"
                                    required
                                    name="cvc"
                                    placeholder="CVC / CVV"
                                    value={formData.cvc}
                                    onChange={handleChange}
                                    className=" w-full outline-none bg-bg_dusty_white px-[10px] py-[12px] rounded-sm text-[12px] font-inter leading-[16px] text-ti_black"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <div className=' w-full flex items-center justify-between text-[12px] font-inter font-medium text-ti_dark_grey leading-[16px]'>
                                <h1>Smart Fleet</h1>
                                <h1 className=' text-ti_black'>${pricingPlan.find(plan => plan.title === selectedPlan)?.price || '0'}</h1>
                            </div>
                            <div className='w-full flex items-center mt-[5px] justify-between text-[12px] font-inter font-medium text-ti_dark_grey leading-[16px]'>
                                <h1>Platform setup (One time)</h1>
                                <h1 className=' text-ti_black'>$99</h1>
                            </div>
                            <div className=' font-inter text-[14px] font-bold text-ti_black mt-[16px] w-full flex items-center justify-between'>
                                <h1>Total</h1>
                                <h1 className=' text-[24px] text-ti_black'>${Number(99) + Number(pricingPlan.find(plan => plan.title === selectedPlan)?.price || 0) + (selectedPlan ? .99 : 0)}</h1>
                            </div>
                        </div>
                        <div className="w-full mt-[20px] ">
                            <button disabled={loading} type='submit' form='submitForm' className={`w-full rounded-md ${selectedPlan ? 'bg-p_blue' : 'bg-p_blue/50'} px-[14px] py-[9.3px] font-inter text-[14px] font-semibold text-bg_white`}

                            >
                                {loading ? 'Submitting...' : 'Pay'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default SubmitDetails;
