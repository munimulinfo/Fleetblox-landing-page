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
import AccurateSlider from "./AccurateSlider";
import FeaturesComparison from "./FeaturesComparison";
import Link from "next/link";

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

  // console.log(handleBillingMonthly, calculateDiscount);

  const TotalForModal = (selectedPlan?.price ?? 0) * (selectedPlan?.slot ?? 0);

  return (
    <main className="h-full">
      <section className="w-full bg-[#FAFAFF] py-10 md:h-[400px] flex flex-col justify-center items-center">
        <Container>
          <h1 className="text-center text-[32px] md:text-[52px] text-[#04082C] font-bold">
            Best Pricing for Businesses
          </h1>
          <p className="text-center font-[400] text-[14px] md:text-[16px] text-[#333] my-3 font-openSans">
            Slide the bar to explore prices for different slot ranges. Enjoy
            clear, transparent pricing with no hidden fees!
          </p>
        </Container>
      </section>
      <section className="container mx-auto  flex flex-col justify-center items-center">
        <Container>
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
                        <button className="bg-[#2D65F2] px-4 py-3 rounded-md text-white text-[16px] w-full font-openSans font-bold">
                          Get Started
                        </button>
                      </Link>
                    </div>

                    // <Dialog>
                    //   <DialogTrigger asChild>
                    //     <Button
                    //       variant="outline"
                    //       className="mt-8 w-full bg-[#2D65F2] text-[14px]  font-semibold text-[#FFF] hover:bg-[#2D65f2]/60 hover:text-bg_white"
                    //       onClick={() =>
                    //         handlePriceAndModal({
                    //           price: calculateDiscount(
                    //             slotCount,
                    //             plan?.price,
                    //             billAnnually
                    //           ),
                    //           fleet: plan?.name,
                    //           slot: slotCount,
                    //           annually: billAnnually,
                    //         })
                    //       }
                    //     >
                    //       Choose Plan
                    //     </Button>
                    //   </DialogTrigger>
                    //   <DialogContent className="w-[95%] max-w-[550px] p-2 sm:p-4">
                    //     <div className="p-2">
                    //       <div className="flex w-full flex-col items-center justify-center">
                    //         <div className="flex items-center justify-center gap-x-[5px]">
                    //           <svg
                    //             xmlns="http://www.w3.org/2000/svg"
                    //             width="25"
                    //             height="24"
                    //             viewBox="0 0 25 24"
                    //             fill="none"
                    //           >
                    //             <path
                    //               d="M7.80469 19.2982V17.8992H17.2037V19.2982H7.80469ZM11.8047 15.8079V7.354L8.89216 10.2588L7.92104 9.2829L12.5018 4.70215L17.0873 9.2829L16.1114 10.2588L13.2037 7.354V15.8079H11.8047Z"
                    //               fill="#2D65F2"
                    //             />
                    //           </svg>
                    //           <h1 className="text-[18px] font-[700] text-p_blue">
                    //             Update fleet plan
                    //           </h1>
                    //         </div>
                    //         <h1 className="text-[12px] font-[500] text-[#999]">
                    //           Make sure to go through all the details before you
                    //           update your plan
                    //         </h1>
                    //       </div>
                    //       <div className="my-5 flex flex-col items-center justify-center py-[10px]">
                    //         <h1 className="text-[32px] font-[700] text-black">
                    //           ${TotalForModal.toFixed(2)}
                    //         </h1>
                    //         <p className="text-[12px] font-[500] text-[#999]">
                    //           Total monthly billing
                    //         </p>
                    //       </div>

                    //       <div className="flex justify-between rounded-md border border-[#F6F6F6] p-4">
                    //         <div className="flex justify-start gap-x-[10px]">
                    //           <svg
                    //             xmlns="http://www.w3.org/2000/svg"
                    //             width="24"
                    //             height="25"
                    //             viewBox="0 0 24 25"
                    //             fill="none"
                    //           >
                    //             <path
                    //               d="M4.40775 21.737C3.9352 21.737 3.53296 21.5711 3.20103 21.2391C2.86909 20.9072 2.70312 20.505 2.70312 20.0324V10.7648C2.70312 10.2922 2.86909 9.88999 3.20103 9.55806C3.53296 9.22613 3.9352 9.06016 4.40775 9.06016H19.5946C20.0672 9.06016 20.4694 9.22613 20.8013 9.55806C21.1333 9.88999 21.2992 10.2922 21.2992 10.7648V20.0324C21.2992 20.505 21.1333 20.9072 20.8013 21.2391C20.4694 21.5711 20.0672 21.737 19.5946 21.737H4.40775ZM10.3118 18.8159L15.4377 15.3986L10.3118 11.9813V18.8159ZM4.39253 7.63513V6.23613H19.6098V7.63513H4.39253ZM7.35215 4.81111V3.41211H16.6502V4.81111H7.35215Z"
                    //               fill="#2D65F2"
                    //             />
                    //           </svg>
                    //           <div>
                    //             <h1 className="text to-black text-[12px] font-bold">
                    //               {selectedPlan?.fleet} (
                    //               {selectedPlan?.annually
                    //                 ? "Annually"
                    //                 : "Monthly"}
                    //               )
                    //             </h1>
                    //             <p className="text-[12px] font-normal text-[#999]">
                    //               Pricing plan
                    //             </p>
                    //           </div>
                    //         </div>
                    //         <h1>
                    //           <span className="text-[18px] font-[700] text-black">
                    //             ${Math.floor(selectedPlan?.price ?? 0)}
                    //           </span>
                    //           <span className="text-[12px] font-[500] text-[#999]">
                    //             .{selectedPlan?.price?.toFixed(2).split(".")[1]}{" "}
                    //             / month per slot
                    //           </span>
                    //         </h1>
                    //       </div>
                    //       <div className="mt-[10px] flex justify-between rounded-md border border-[#F6F6F6] p-4">
                    //         <div className="flex items-start justify-start gap-x-[10px]">
                    //           <svg
                    //             xmlns="http://www.w3.org/2000/svg"
                    //             width="24"
                    //             height="24"
                    //             viewBox="0 0 24 24"
                    //             fill="none"
                    //           >
                    //             <path
                    //               d="M8 11.5263L9.5 7.26316H18.5L20 11.5263M18.5 16.2632C18.1022 16.2632 17.7206 16.1134 17.4393 15.8469C17.158 15.5804 17 15.219 17 14.8421C17 14.4652 17.158 14.1038 17.4393 13.8373C17.7206 13.5708 18.1022 13.4211 18.5 13.4211C18.8978 13.4211 19.2794 13.5708 19.5607 13.8373C19.842 14.1038 20 14.4652 20 14.8421C20 15.219 19.842 15.5804 19.5607 15.8469C19.2794 16.1134 18.8978 16.2632 18.5 16.2632ZM9.5 16.2632C9.10218 16.2632 8.72064 16.1134 8.43934 15.8469C8.15804 15.5804 8 15.219 8 14.8421C8 14.4652 8.15804 14.1038 8.43934 13.8373C8.72064 13.5708 9.10218 13.4211 9.5 13.4211C9.89782 13.4211 10.2794 13.5708 10.5607 13.8373C10.842 14.1038 11 14.4652 11 14.8421C11 15.219 10.842 15.5804 10.5607 15.8469C10.2794 16.1134 9.89782 16.2632 9.5 16.2632ZM19.92 6.78947C19.71 6.22105 19.14 5.84211 18.5 5.84211H9.5C8.86 5.84211 8.29 6.22105 8.08 6.78947L6 12.4737V20.0526C6 20.3039 6.10536 20.5449 6.29289 20.7225C6.48043 20.9002 6.73478 21 7 21H8C8.26522 21 8.51957 20.9002 8.70711 20.7225C8.89464 20.5449 9 20.3039 9 20.0526V19.1053H19V20.0526C19 20.3039 19.1054 20.5449 19.2929 20.7225C19.4804 20.9002 19.7348 21 20 21H21C21.2652 21 21.5196 20.9002 21.7071 20.7225C21.8946 20.5449 22 20.3039 22 20.0526V12.4737L19.92 6.78947ZM14.92 3.94737C14.71 3.37895 14.14 3 13.5 3H4.5C3.86 3 3.29 3.37895 3.08 3.94737L1 9.63158V17.2105C1 17.4618 1.10536 17.7028 1.29289 17.8804C1.48043 18.0581 1.73478 18.1579 2 18.1579H3C3.26522 18.1579 3.51957 18.0581 3.70711 17.8804C3.89464 17.7028 4 17.4618 4 17.2105V13.3358C3.81541 13.2731 3.64569 13.1765 3.50053 13.0516C3.35538 12.9267 3.23764 12.7759 3.15405 12.6078C3.07046 12.4397 3.02266 12.2577 3.01339 12.0722C3.00411 11.8866 3.03355 11.7011 3.1 11.5263C3.32 10.9579 3.87 10.5789 4.5 10.5789H4.57L5.27 8.68421H3L4.5 4.42105H15.09L14.92 3.94737Z"
                    //               fill="#2D65F2"
                    //             />
                    //           </svg>

                    //           <h1 className="text to-black text-[12px] font-bold">
                    //             {selectedPlan?.fleet} (
                    //             {selectedPlan?.annually
                    //               ? "Annually"
                    //               : "Monthly"}
                    //             )
                    //           </h1>
                    //         </div>
                    //         <h1>
                    //           <span className="text-[18px] font-semibold text-black">
                    //             {selectedPlan?.slot}
                    //           </span>
                    //           <span className="ml-1 text-[12px] font-normal text-[#999]">
                    //             slots
                    //           </span>
                    //         </h1>
                    //       </div>
                    //       <div className="mt-5 grid w-full grid-cols-2 gap-[10px]">
                    //         <DialogClose asChild>
                    //           <Button className="h-[38px] rounded-md bg-[#F5F9FC] text-[14px] font-semibold text-[#2D65F2] hover:bg-black hover:text-[#FFF]">
                    //             Cancel
                    //           </Button>
                    //         </DialogClose>
                    //         <Button
                    //           onClick={handleSubscriptionPlan}
                    //           className="h-[38px] rounded-md bg-[#2D65F2] text-[14px] font-semibold text-[#FFF]"
                    //         >
                    //           Proceed
                    //         </Button>
                    //       </div>
                    //     </div>
                    //   </DialogContent>
                    // </Dialog>
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
      {/* ***************Full features comparison************ */}
      <FeaturesComparison />
      <FAQSection />
    </main>
  );
};

export default PricingPlan;
