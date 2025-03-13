/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { FaCircleCheck } from "react-icons/fa6";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/Container";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  brandFeatures,
  fleetFeatures,
  teamFeatures,
  vehicleFeatures,
} from "@/lib/constant";
import FAQSection from "@/components/modules/home/FAQSection";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Link from "next/link";
import AccurateSlider from "@/app/pricings/components/AccurateSlider";

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
  const [showFullFeatures, setShowFullFeatures] = useState(false);
  const [currentPlans, setCurrentPlans] = useState<{ data: any[] } | null>(
    null
  );

  const [showUpdatePlanModal, setShowUpdatePlanModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<TSelectedPlan | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch plans on mount
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch(
          "https://backend.illama360.com/api/subscription/plans"
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

  const calculateDiscount = (
    slotCount: number,
    basePrice: number,
    isAnnual: boolean = false
  ): number => {
    let discountPercentage = 0;
    if (slotCount >= 200) {
      discountPercentage = 30;
    } else if (slotCount >= 150) {
      discountPercentage = 18;
    } else if (slotCount >= 100) {
      discountPercentage = 10;
    } else if (slotCount >= 50) {
      discountPercentage = 5;
    }
    let discountedPrice = basePrice - (basePrice * discountPercentage) / 100;

    if (isAnnual) {
      discountedPrice = discountedPrice - (discountedPrice * 15) / 100;
    }
    return discountedPrice;
  };

  const handleBillingMonthly = () => {
    setBillingAnnually(!billAnnually);
    setBillingMonthly(!billMonthly);
  };

  console.log(selectedPlan, "checking selected plan");
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

    await localStorage.setItem("selectedPlan", JSON.stringify(selectedPlan));

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

  console.log(handleBillingMonthly, calculateDiscount);

  const TotalForModal = (selectedPlan?.price ?? 0) * (selectedPlan?.slot ?? 0);

  return (
    <main className="h-full mb-10">
      <section className="container mx-auto  flex flex-col justify-center items-center">
        <Container>
          <h1 className="text-center text-[22px] md:text-[22px] text-[#04082C] font-bold">
            Set Fleet Size & Choose a Plan
          </h1>
          <p className="text-center font-[400] text-[14px] md:text-[16px] text-[#7d7d7d] my-3 font-openSans">
            Slide the bar to see prices for different vehicle slot ranges. Enjoy
            transparent pricing with no hidden fees
          </p>
          {/* ****************Accurate Slider**************** */}
          <AccurateSlider value={slotCount} setValue={setSlotCount} />
        </Container>
      </section>

      <section className="container mx-auto  flex flex-col justify-center items-center">
        {/* ****************Billing Options**************** */}

        <div className=" flex flex-col justify-center gap-5 md:flex-row">
          {currentPlans?.data?.slice(0, 2).map((plan: any, index: number) => (
            <Card
              key={index}
              className="relative min-w-[350px] max-w-[400px] rounded-[16px] "
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
                        calculateDiscount(slotCount, plan?.price, billAnnually)
                      )}
                      <span className="text-[12px] font-montserrat font-medium text-[#04082C]">
                        .
                        {
                          calculateDiscount(
                            slotCount,
                            plan?.price,
                            billAnnually
                          )
                            ?.toFixed(2)
                            ?.split(".")[1]
                        }
                      </span>
                      <span className="ml-[1px] text-[12px] font-medium text-[#999]">
                        /month per slot
                      </span>
                    </div>
                    {billAnnually && (
                      <p className="text-[#04082C] font-openSans text-[14px] font-semibold">
                        5% discount + 15% annual discount
                      </p>
                    )}
                  </div>
                )}

                {/* <p className="text-sm text-[#999]">{plan.discount}</p> */}
                <ul className="mt-6 space-y-2">
                  {plan?.description.map((feature: any, i: number) => (
                    <li key={i} className="flex items-start gap-[10px]">
                      <FaCircleCheck className="text-[#2D65F2]" size={16} />
                      <p className="font-openSans text-[14px] font-[400]">
                        {feature}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-center">
                  {plan.name === "Eagle eye fleet" && (
                    <Button
                      variant="outline"
                      className="mt-8 w-full bg-[#2D65F2] text-[14px]  font-semibold text-[#FFF] hover:bg-[#2D65f2]/60 hover:text-bg_white"
                      onClick={async () => {
                        await handlePriceAndModal({
                          price: calculateDiscount(
                            slotCount,
                            plan?.price,
                            billAnnually
                          ),
                          fleet: plan?.name,
                          slot: slotCount,
                          annually: billAnnually,
                        });
                        await handleSubscriptionPlan();
                      }}
                    >
                      Choose Plan
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 mb-5 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2">
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
        <div className="font-openSans my-2 text-[12px] text-[#333]">
          *A one-time platform setup fee of $99 applies.
        </div>
      </section>
    </main>
  );
};

export default PricingPlan;
