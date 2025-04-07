/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { FaCircleCheck } from "react-icons/fa6";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/Container";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import FAQSection from "@/components/modules/home/FAQSection";
import AccurateSlider from "./AccurateSlider";
import FeaturesComparison from "./FeaturesComparison";
import Link from "next/link";
import VehicleIcon from "@/components/icons/VehicleIcon";
import DollarIcon from "@/components/icons/DollarIcon";
import CheckIcon2 from "@/components/icons/CheckIcon2";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import axios from "axios";
import { TStaterPlanData } from "@/types/types";

type TSelectedPlan = {
  price: number;
  fleet: string;
  slot: number;
  annually: boolean;
};

const PricingPlan = () => {
  const router = useRouter();
  const [slotCount, setSlotCount] = useState(10);
  const [billAnnually, setBillingAnnually] = useState(true);
  const [billMonthly, setBillingMonthly] = useState(false);
  const [currentPlans, setCurrentPlans] = useState<{ data: any[] } | null>(
    null
  );
  const [showUpdatePlanModal, setShowUpdatePlanModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<TSelectedPlan | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [starterPlan, setStarterPlan] = useState<TStaterPlanData[]>([]);
  const [staterPlanLoading, setStarterPlanLoading] = useState(true);
  const [staterPlanError, setStarterPlanError] = useState<string | null>(null);

  useEffect(() => {
    // Add client-side check
    if (typeof window !== "undefined") {
      localStorage.removeItem("country");
      localStorage.removeItem("countries");
      localStorage.removeItem("selectedPlan");
      localStorage.removeItem("brands");
      localStorage.removeItem("brandCarList");
      localStorage.removeItem("brandModels");
      localStorage.removeItem("VINS");
      localStorage.removeItem("VINS_RESULT");
      localStorage.removeItem("compatibility");
      localStorage.removeItem("selectedCountries");
    }
  }, []);

  // Fetch plans on mount
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch(
          "https://api.fleetblox.com/api/subscription/plans"
        );
        if (!response.ok) throw new Error("Failed to fetch plans");
        const data = await response.json();
        setCurrentPlans(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPlans();
  }, []);

  // Improved calculation function with better precision handling
  const calculateDiscount = (
    totalSlot: number,
    isAnnual: boolean,
    planPrice: number
  ): number => {
    // Calculate slot-based discount percentage
    let slotDiscountPercentage = 0;
    if (totalSlot >= 200) {
      slotDiscountPercentage = 30;
    } else if (totalSlot >= 150) {
      slotDiscountPercentage = 18;
    } else if (totalSlot >= 100) {
      slotDiscountPercentage = 10;
    } else if (totalSlot >= 50) {
      slotDiscountPercentage = 5;
    }

    // Calculate annual discount percentage
    const annualDiscountPercentage = isAnnual ? 15 : 0;

    // Calculate effective discount percentage (not just adding percentages)
    const effectiveDiscount =
      1 -
      (1 - slotDiscountPercentage / 100) * (1 - annualDiscountPercentage / 100);

    // Apply total discount
    const discountedPrice = planPrice * (1 - effectiveDiscount);

    // Return with exactly 2 decimal places
    return parseFloat(discountedPrice.toFixed(2));
  };

  const handleBillingMonthly = () => {
    setBillingAnnually(!billAnnually);
    setBillingMonthly(!billMonthly);
  };

  const handleSubscriptionPlan = async () => {
    // try {
    //   const subscriptionInfo = {
    //     userId: "sarkarsoumik215@gmail.com",
    //     customerId: "cus_RgQvMiKISS0OAX",
    //     newPlanId: "cm4vhz3pu0001oniuypx7p2uh",
    //     totalSlot: slotCount,
    //     price: Number(selectedPlan?.price?.toFixed(2)),
    //     interval: billAnnually ? "year" : "month",
    //   };

    //   const response = await fetch("/payment/subscription/upgrade", {
    //     method: "PUT",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(subscriptionInfo),
    //   });

    //   if (!response.ok) throw new Error("Update failed");

    //   const res = await response.json();
    //   if (res?.success) {
    //     toast.success("Subscription plan updated successfully");
    //     setShowUpdatePlanModal(false);
    //   }
    // } catch (error: any) {
    //   console.log(error);
    //   toast.error("Failed to update subscription plan");
    // }

    // For now, just close the modal

    localStorage.setItem("selectedPlan", JSON.stringify(selectedPlan));

    // toast.success("Subscription plan updated successfully");

    router.push("/collections/checkout");
  };

  const handlePriceAndModal = ({ fleet, slot, annually, price }: any) => {
    setSelectedPlan({
      price: price,
      fleet: fleet,
      slot: slot,
      annually: annually,
    });
    setShowUpdatePlanModal(true);
  };
  // get starter plan data fetching start
  useEffect(() => {
    const fetchStaterPlanData = async () => {
      try {
        const response = await axios.get(
          "https://backend.illama360.com/api/subscription/plan/starter"
        );
        setStarterPlan(response.data.data);
      } catch (err) {
        if (err instanceof Error) {
          setStarterPlanError(err.message);
        } else {
          setStarterPlanError("Unexpected error!! Please try again later.");
        }
      } finally {
        setStarterPlanLoading(false);
      }
    };

    fetchStaterPlanData();
  }, []);

  let whole = "";
  let decimal = "";

  if (starterPlan[0]?.price !== undefined) {
    const parts = starterPlan[0].price.toString().split(".");
    whole = parts[0];
    decimal = parts[1] || "00";
  }

  // get starter plan data fetching end
  return (
    <main className="h-full">
      {/* <section className="w-full bg-[#FAFAFF] py-10 md:h-[400px] flex flex-col justify-center items-center">
        <Container>
          <h1 className="text-center text-[32px] md:text-[52px] text-[#04082C] font-bold">
            Best Pricing for Businesses
          </h1>
          <p className="text-center font-[400] text-[14px] md:text-[16px] text-[#333] my-3 font-openSans">
            Slide the bar to explore prices for different slot ranges. Enjoy
            clear, transparent pricing with no hidden fees!
          </p>
        </Container>
      </section> */}
      {/* connect vehicle section start */}
      <section className="bg-[#FAFAFF] pt-10 md:pt-[80px] pb-[80px] md:mb-[60px]">
        {staterPlanLoading ? (
          <div className="flex justify-center items-center h-[400px]">
            <p className="text-[#0336BC] font-openSans text-[32px] font-bold">
              Loading....
            </p>
          </div>
        ) : (
          <div className="max-w-[1200px] w-full mx-auto px-5 pt-12 md:pt-[100px] md:pb-[60px] flex flex-col md:flex-row gap-[60px] items-center relative">
            <div className="absolute top-[10vh] right-[30px] hidden md:block z-[10] rounded-[24px] bg-[#000] opacity-[0.07] blur-[20px] h-[430px] w-[340px] "></div>
            <div className="">
              <h1 className="text-[#0336BC] font-openSans text-[18px] lg:text-[22px] font-bold">
                {starterPlan[0]?.name}
              </h1>
              <h2 className="text-[#04082C] font-bold text-[36px] lg:text-[52px] leading-[1.1] my-[10px]">
                {starterPlan[0]?.subHeading}
              </h2>
              <p className="text-[#333] font-openSans text-[14px] lg:text-[16px] leading-6">
                {starterPlan[0]?.extraDescription}
              </p>
            </div>
            {/* right card */}
            <div className="max-w-[360px] z-50 p-[20px] bg-white w-full rounded-[24px] shadow-lg md:shadow-none ">
              <div className="">
                <div className="text-[36px] lg:text-[52px] font-montserrat font-bold text-[#04082C]">
                  ${whole}
                  <span className="text-[14px] lg:text-[16px] font-montserrat font-semibold text-[#04082C] leading-[150%]">
                    .{decimal}
                  </span>
                  <span className="text-[14px] lg:text-[16px] font-semibold text-[#999] leading-[150%]">
                    {" "}
                    /month per slot
                  </span>
                </div>
                <div className="mb-[20px] mt-[10px]">
                  <div className="flex items-center gap-[5px]">
                    <VehicleIcon />
                    <p className="text-[#333] text-[14px] font-openSans font-normal leading-5">
                      {starterPlan[0]?.slotMinimum} vehicle slots
                    </p>
                  </div>
                  <div className="flex items-center gap-[5px]">
                    <DollarIcon />
                    <p className="text-[#333] text-[14px] font-openSans font-normal leading-5">
                      Monthly subscription
                    </p>
                  </div>
                  <div className="flex items-center gap-[5px]">
                    <VehicleIcon />
                    <p className="text-[#333] text-[14px] font-openSans font-normal leading-5">
                      01 fleet location
                    </p>
                  </div>
                </div>
                <div className="my-[20px]">
                  {starterPlan[0]?.description.map(
                    (feature: string, i: number) => (
                      <div key={i} className="flex items-center gap-[5px]">
                        <CheckIcon2 />
                        <p className="text-[#333] text-[14px] font-openSans font-normal leading-5">
                          {feature}
                        </p>
                      </div>
                    )
                  )}
                </div>
                <div className="w-full border flex justify-center  bg-[#2D65F2] hover:bg-[#0336BC] rounded-md mt-[30px]">
                  <button
                    aria-label="Get started with Starter Fleet"
                    onClick={() => {
                      const planData = {
                        price: 9.79,
                        fleet: "Starter Fleet",
                        slot: 10,
                        annually: false,
                        id: "cm95qsolw0000nbt4jd77z8kd", // Replace with actual ID from your backend
                      };

                      localStorage.setItem(
                        "selectedPlan",
                        JSON.stringify(planData)
                      );
                      router.push("/getting-started");
                    }}
                    className="transition-all font-openSans text-white-primary text-white duration-300 hover:w-[144.16px] w-[122.16px] flex items-center px-4 py-3 text-base font-bold  group"
                  >
                    <div className="z-20 whitespace-nowrap">Get Started</div>
                    <div className="z-10 transform transition-transform opacity-0 group-hover:opacity-100 translate-x-0 duration-300 group-hover:translate-x-0">
                      <RightArrowIcon />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <section className="flex justify-center flex-col items-center px-5 pt-[60px] md:pt-0">
        <h2 className="text-[#333] text-[28px] font-bold text-center leading-[1.1] mb-[2px]">
          Scale Your Fleet Seamlessly
        </h2>
        <p className="text-[#7D7D7D] text-center leading-5">
          Slide the bar to explore pricing based on vehicle slots - Clear and
          transparent with no hidden fees
        </p>
      </section>
      <section className="container mx-auto  flex flex-col justify-center items-center">
        <Container>
          {/* ****************Accurate Slider**************** */}
          <AccurateSlider value={slotCount} setValue={setSlotCount} />
        </Container>
      </section>
      {/* pricing plane start */}
      <section className="container mx-auto  flex flex-col justify-center items-center">
        {/* ****************Billing Options**************** */}

        <div className=" flex flex-col justify-center gap-5 md:flex-row">
          {currentPlans?.data?.slice(0, 2).map((plan: any, index: number) => (
            <Card
              key={index}
              className="relative min-w-[350px] max-w-[400px] shadow-none rounded-[16px] "
            >
              {/* Ribbon */}
              {plan && plan?.name !== "Eagle eye fleet" && (
                <div className="absolute -top-2  -right-2 bg-[#0A2540] rounded-[4px] z-50 text-[#000] p-2">
                  <p className="text-[12px] font-normal text-white">
                    Launching Soon
                  </p>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-sm font-bold font-openSans leading-[20px]">
                  {plan.name}
                </CardTitle>
                <p className="text-sm font-openSans text-[#999]">
                  {plan?.subHeading}
                </p>
              </CardHeader>
              <CardContent>
                {plan?.name === "Smart fleet" ? (
                  <div className="">
                    <h1 className="text-[32px] font-semibold text-[#999]">
                      Custom
                    </h1>
                  </div>
                ) : (
                  <div>
                    <div className=" text-[36px] font-montserrat font-bold text-[#04082C]">
                      $
                      {Math.floor(
                        calculateDiscount(slotCount, billAnnually, plan?.price)
                      )}
                      <span className="text-[12px] font-montserrat font-medium text-[#04082C]">
                        .
                        {
                          calculateDiscount(
                            slotCount,
                            billAnnually,
                            plan?.price
                          )
                            ?.toFixed(2)
                            ?.split(".")[1]
                        }
                      </span>
                      <span className="ml-[1px] text-[12px] font-medium text-[#999]">
                        /month per slot
                      </span>
                    </div>
                    {/* Dynamic discount message based on slot count */}
                    <div className="flex ">
                      {slotCount >= 50 && (
                        <p className="text-[#04082C] font-openSans text-[14px] leading-[155%]  font-semibold flex items-center">
                          {slotCount >= 200
                            ? "30%"
                            : slotCount >= 150
                            ? "18%"
                            : slotCount >= 100
                            ? "10%"
                            : "5%"}{" "}
                          discount {billAnnually && "+"}
                        </p>
                      )}

                      {billAnnually && (
                        <p className="text-[#04082C] font-openSans text-[14px] leading-[155%] font-semibold flex items-center">
                          {""} 15% annual discount
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {plan?.name !== "Eagle eye fleet" && (
                  <div className="flex items-center mt-5 justify-between">
                    <h1 className="text-[14px] font-openSans leading-[155%] font-normal text-[#999]">
                      All features in Eagle eye fleet
                    </h1>
                  </div>
                )}

                {/* <p className="text-sm text-[#999]">{plan.discount}</p> */}
                <ul
                  className={`${
                    plan?.name !== "Eagle eye fleet" ? "mt-2 " : "mt-5"
                  } space-y-2`}
                >
                  {plan?.description.map((feature: any, i: number) => (
                    <li key={i} className="flex items-start gap-[10px]">
                      <FaCircleCheck className="text-[#2D65F2]" size={16} />
                      <p className="font-openSans text-[14px] font-[400]">
                        {feature}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="w-full mt-8">
                  {plan.name === "Eagle eye fleet" && (
                    <div className="w-full">
                      <Link href="/getting-started">
                        <button
                          aria-label="Get started with FleetBlox"
                          className="bg-[#2D65F2] px-4 py-3 rounded-md text-white text-[16px] w-full font-openSans font-bold"
                        >
                          Get Started
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 mb-[10px] flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2">
          <Label
            className="font-openSans text-[#333333] font-bold text-[14px]"
            htmlFor="bill-monthly"
          >
            Bill monthly
          </Label>
          <Switch
            id="bill-monthly"
            checked={billMonthly}
            onCheckedChange={handleBillingMonthly}
            className="cursor-pointer bg-[#2D65F2]"
          />
        </div>
        <div className="font-openSans text-[12px] text-[#333]">
          *A one-time platform setup fee of $99 applies.
        </div>
      </section>
      {/* pricing plane end */}

      {/* connect vehicle section end */}

      {/* ***************Full features comparison************ */}
      <FeaturesComparison />
      <FAQSection />
    </main>
  );
};

export default PricingPlan;
