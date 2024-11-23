"use client";
import EmailTypeConstant from '@/app/collections/submit-details/constant'
import { ChevronDown } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Canada from "@/../public/images/canada.png";
import paymentIcon from "@/../public/images/payment.svg";
import trueIcon from "@/../public/images/true.svg";
import falseIcon from "@/../public/images/false.svg";
import axios from 'axios';
import toast from 'react-hot-toast';


import React, { useCallback, useEffect, useState } from "react";
import { BrandCarList, countryCodes, pricingPlan } from "@/Static_data/data";
import { useRouter } from "next/navigation";
import BillingToggle from "@/app/collections/submit-details/toggler";

import {
    CardExpiryElement,
    CardCvcElement,
    CardNumberElement,
    // useElements,
    // useStripe
} from "@stripe/react-stripe-js";




const SubmitDetails = () => {
    const router = useRouter();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState("");
    const [brandModels, setBrandModels] = useState<Record<string, string | null>>({});
    const [brands, setBrands] = useState("");
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        cardHolderName: "",
        cardNumber: "",
        expiryDate: "",
        cvc: "",
        countryCode: "+1",
        flag: Canada,
        plan: "",
        planPrice: 0,
        planType: EmailTypeConstant.PlanTypeConstant.MONTHLY,
    });



    useEffect(() => {
        if (typeof window !== "undefined") {
            setBrandModels(JSON.parse(localStorage.getItem("brandModels") || "{}"));
            setBrands(localStorage.getItem("brands") || "");
        }
    }, []);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const selectCountryCode = (code: { code: string; flag: StaticImageData }) => {
        setFormData((prev) => ({
            ...prev,
            countryCode: code.code,
            flag: code.flag,
        }));
        setIsDropdownOpen(false);
    };

    const handlePlanSelect = (plan: string, constant: string) => {
        if (plan !== "Dynamic Fleet" && plan !== "Ultimate Fleet") {
            if (selectedPlan === plan) {
                setSelectedPlan("");
                setFormData((prev) => ({
                    ...prev,
                    plan: '',
                    planPrice: 0
                }));
            } else {
                setSelectedPlan(plan);
                setFormData((prev) => ({
                    ...prev,
                    plan: constant,
                    planPrice: Number(pricingPlan.find((p) => p.title === plan)?.price)
                }));
            }
        }
    };

    const filteredCompatibleBrands = useCallback(() => {
        return BrandCarList.filter((brand) => brands.includes(brand.brand)).map(
            (brand) => ({
                brand: brand.brand,
                brandLogo: brand.brandLogo,
                compatible: brandModels[brand.brand] !== null,
                models: brand.models.filter((model) =>
                    brandModels[brand.brand]?.includes(model.name),
                ),
            }),
        );
    }, [brandModels, brands]);


    const submitData = {
        fullName: formData.fullName,
        businessEmail: formData.email,
        phone: formData.phone,
        emailType: EmailTypeConstant.EmailTypeConstant.PLAN_PURCHASE,
        cardHolderName: formData.cardHolderName,
        cardNumber: formData.cardNumber,
        expiryDate: formData.expiryDate,
        cvv: formData.cvc,
        planPrice: formData.planPrice,
        plan: formData.plan,
        planType: formData.planType,
        selectedVehicle: filteredCompatibleBrands()
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();

        try {
            const { data } = await axios.post("https://backend.illama360.com/api/purchasePlan/create", submitData);
            if (data.statusCode === 201) {
                setLoading(false);
                toast.success("Purchase completed");
                router.push("/result/submitted-successfully");
            } else {
                toast.error("Something went wrong");
                setLoading(false);
            }
        } catch (error) {
            setLoading(false);
            console.log('There was a problem with the fetch operation:', error);
        }
    };



    return (
        <div className="relative flex w-full max-w-[1360px] flex-col justify-between overflow-scroll rounded-lg bg-bg_white px-[20px] py-[20px] xs:px-[30px] sm:px-[50px] md:py-[50px] md:shadow-lg">
            <div className="flex flex-shrink-0 flex-col">
                <h2 className="pre_landing_page_title text-left font-inter text-ti_light_black">
                    Complete your purchase
                </h2>
                <p className="pre_landing_page_text text-left">
                    {`Confirm your vehicle compatibility and choose your plan, then continue to payment. `}
                </p>
            </div>
            <div className="mt-[40px] flex items-start gap-[60px]">
                <div className="flex flex-1 flex-col">
                    <div>
                        <div className="flex items-center justify-between">
                            <h1 className="font-inter text-[14px] font-bold text-ti_dark_grey">
                                Choose your pricing plan
                            </h1>
                            <BillingToggle setPlanType={(planType) => setFormData(prevState => ({ ...prevState, planType }))} />
                        </div>

                        <div className="mt-[16px] grid grid-cols-3 gap-[10px]">
                            {pricingPlan.map((plan) => (
                                <div key={plan.title} className="relative">
                                    <div
                                        onClick={() => handlePlanSelect(plan.title, plan.constant)}
                                        className={`flex cursor-pointer flex-col rounded-md border border-bg_dusty_white p-[16px] ${plan.title !== "Smart Fleet" ? "opacity-50" : ""} ${selectedPlan === plan.title ? "select_car_collection_bg border-p_light_blue" : ""}`}
                                    >
                                        <Image
                                            src={plan.image}
                                            alt={plan.title}
                                            className="size-[40px]"
                                        />
                                        <h1 className="mt-[5px] font-inter text-[16px] font-semibold text-ti_light_black">
                                            {plan.title}
                                        </h1>
                                        <p className="font-inter text-[12px] font-normal text-ti_dark_grey">
                                            {plan.description}
                                        </p>
                                        <h1 className="mt-[20px] font-inter text-[24px] font-bold text-ti_light_black">
                                            ${plan.price}
                                            <span className="font-inter text-[14px] font-medium">
                                                .99<span className="text-ti_grey">/month</span>
                                            </span>
                                        </h1>
                                    </div>
                                    {plan.title !== "Smart Fleet" && (
                                        <div className="absolute right-0 top-[10px] rounded bg-[#02636F] px-[10px] py-[4px] text-[12px] font-medium leading-[16px] text-bg_white">
                                            Upcomming
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="my-[20px] w-full border border-bg_dusty_white"></div>

                    <div>
                        <div className="flex items-center justify-between">
                            <h1 className="font-inter text-[14px] font-bold text-ti_dark_grey">
                                Selected vehicles
                            </h1>
                        </div>
                        <div className="mt-[16px] max-h-[350px] space-y-[10px] overflow-y-scroll">
                            {filteredCompatibleBrands().map((brand) => (
                                <div
                                    key={brand.brand}
                                    className="flex items-center justify-between rounded-md border px-[16px] py-[12px]"
                                >
                                    <div className="flex items-center gap-[15px]">
                                        <Image
                                            src={brand.brandLogo}
                                            alt={brand.brand}
                                            className="flex h-[40px] w-[70px] items-center justify-center object-contain mix-blend-multiply"
                                        />
                                        <div className="w-[550px]">
                                            <h1 className="font-inter text-[16px] font-semibold text-ti_black">
                                                {brand.brand}
                                            </h1>
                                            <p className="font-inter text-[12px] font-normal text-ti_dark_grey">
                                                {brand.models.map((model) => model.name).join(", ")}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-[110px]">
                                        {brand.compatible ? (
                                            <div className="flex items-center gap-[5px]">
                                                <Image
                                                    src={trueIcon}
                                                    width={16}
                                                    height={16}
                                                    alt="success"
                                                />
                                                <span className="font-inter text-[14px] text-[#4DB429]">
                                                    Compatible
                                                </span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-[5px]">
                                                <Image
                                                    src={falseIcon}
                                                    width={16}
                                                    height={16}
                                                    alt="failed"
                                                />
                                                <span className="font-inter text-[14px] text-[#F00]">
                                                    Incompatible
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="flex h-[670px] max-w-[360px] flex-initial flex-col justify-between rounded-lg px-[20px] pb-[20px] shadow-lg"
                >
                    <div>
                        <div className="">
                            <h1 className="mb-[10px] font-inter text-[14px] font-bold text-ti_dark_grey">
                                Contact info
                            </h1>
                            <div>
                                <input
                                    type="text"
                                    id="fullName"
                                    required
                                    name="fullName"
                                    placeholder="Full name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full rounded-sm bg-bg_dusty_white px-[10px] py-[12px] font-inter text-[12px] leading-[16px] text-ti_black outline-none"
                                />
                            </div>
                            <div className="my-[5px] w-full">
                                <input
                                    type="text"
                                    id="email"
                                    required
                                    name="email"
                                    placeholder=" Business email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full rounded-sm bg-bg_dusty_white px-[10px] py-[12px] font-inter text-[12px] leading-[16px] text-ti_black outline-none"
                                />
                            </div>
                            <div className="w-full">
                                <div className="relative flex">
                                    <div className="relative">
                                        <button
                                            type="button"
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                            className="border-gray-200 hover:bg-gray-100 flex h-[40px] w-[80px] items-center space-x-[5px] rounded-l-md border-r bg-bg_dusty_white px-[10px] font-inter text-[12px] text-ti_grey"
                                        >
                                            <Image
                                                src={formData.flag}
                                                alt="Canada"
                                                width={20}
                                                height={20}
                                            />
                                            <span className="text-ti_light_black">
                                                {formData.countryCode}
                                            </span>
                                            <ChevronDown className="ml-1 h-4 w-4 text-ti_light_black" />
                                        </button>

                                        {isDropdownOpen && (
                                            <div className="z-1000 border-gray-200 absolute mt-1 w-56 rounded-sm border bg-bg_white shadow-lg">
                                                <ul className="max-h-60 overflow-auto py-1">
                                                    {countryCodes.map((country) => (
                                                        <li
                                                            key={country.country}
                                                            className="hover:bg-gray-50 flex cursor-pointer items-center gap-[10px] px-3 py-2 font-inter text-[12px] text-ti_light_black"
                                                            onClick={() => selectCountryCode(country)}
                                                        >
                                                            <Image
                                                                src={country.flag}
                                                                alt={country.country}
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <div>
                                                                <span>{country.country}</span>
                                                                <span className="ml-2 text-ti_black">
                                                                    {country.code}
                                                                </span>
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
                                        className="flex-1 rounded-r-md bg-bg_dusty_white px-[10px] py-[12px] font-inter text-[12px] leading-[16px] text-ti_black outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="my-[20px] w-full border border-bg_dusty_white"></div>

                        <div>
                            <h1 className="mb-[10px] font-inter text-[14px] font-bold text-ti_dark_grey">
                                Payment method
                            </h1>
                            <div>
                                <input
                                    type="text"
                                    id="cardHolderName"
                                    required
                                    name="cardHolderName"
                                    placeholder="Card holder name"
                                    value={formData.cardHolderName}
                                    onChange={handleChange}
                                    className="w-full rounded-sm bg-bg_dusty_white px-[10px] py-[12px] font-inter text-[12px] leading-[16px] text-ti_black outline-none"
                                />
                            </div>
                            <div className="my-[5px] flex w-full items-center justify-between rounded-sm bg-bg_dusty_white px-[10px] py-[12px]">
                                <CardNumberElement className="w-full bg-bg_dusty_white font-inter text-[12px] leading-[16px] text-ti_black outline-none" />

                                <Image src={paymentIcon} alt="card" width={20} height={20} />
                            </div>
                            <div className="my-[5px] w-full">
                                <CardExpiryElement className="w-full rounded-sm bg-bg_dusty_white px-[10px] py-[12px] font-inter text-[12px] leading-[16px] text-ti_black outline-none" />

                            </div>
                            <div className="my-[5px] w-full">
                                <CardCvcElement className="w-full rounded-sm bg-bg_dusty_white px-[10px] py-[12px] font-inter text-[12px] leading-[16px] text-ti_black outline-none" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <div className="flex w-full items-center justify-between font-inter text-[12px] font-medium leading-[16px] text-ti_dark_grey">
                                <h1>Smart Fleet</h1>
                                <h1 className="text-ti_black">
                                    $
                                    {pricingPlan.find((plan) => plan.title === selectedPlan)
                                        ?.price || "0"}
                                </h1>
                            </div>
                            <div className="mt-[5px] flex w-full items-center justify-between font-inter text-[12px] font-medium leading-[16px] text-ti_dark_grey">
                                <h1>Platform setup (One time)</h1>
                                <h1 className="text-ti_black">$99</h1>
                            </div>
                            <div className="mt-[16px] flex w-full items-center justify-between font-inter text-[14px] font-bold text-ti_black">
                                <h1>Total</h1>
                                <h1 className="text-[24px] text-ti_black">
                                    $
                                    {Number(99) +
                                        Number(
                                            pricingPlan.find((plan) => plan.title === selectedPlan)
                                                ?.price || 0,
                                        ) +
                                        (selectedPlan ? 0.99 : 0)}
                                </h1>
                            </div>
                        </div>
                        <div className="mt-[20px] w-full">
                            <button
                                disabled={loading}
                                type="submit"
                                className={`w-full rounded-md ${selectedPlan ? "bg-p_blue" : "bg-p_blue/50"} px-[14px] py-[9.3px] font-inter text-[14px] font-semibold text-bg_white`}
                            >
                                {loading ? "Submitting..." : "Pay"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SubmitDetails;

