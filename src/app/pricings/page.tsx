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

type TSelectedPlan = {
  price: number;
  fleet: string;
  slot: number;
  annually: boolean;
};

const Page = () => {
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
      <section className="w-full  bg-[#FAFAFF] h-[400px] flex flex-col justify-center items-center">
        <Container>
          <h1 className="  text-center text-[52px] text-[#04082C] font-bold ">
            Best Pricing for Businesses
          </h1>
          <p className="text-center font-[400] text-[16px] text-[#333] my-3 font-openSans">
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
        <Container>
          {/* ****************Billing Options**************** */}

          <div className="my-2 flex flex-col justify-center gap-6 md:flex-row">
            {currentPlans?.data?.slice(0, 2).map((plan: any, index: number) => (
              <Card
                key={index}
                className="relative min-w-[300px] max-w-[450px] overflow-hidden p-4"
              >
                {/* Ribbon */}
                {/* <div className="absolute right-0 top-0 h-32 w-32 overflow-hidden">
                  <div
                    className="absolute right-[-40px] top-6 w-48 rotate-[45deg] py-1 text-center text-sm font-bold text-[#FFF]"
                    style={{
                      backgroundColor:
                        plan?.name === "Eagle eye fleet"
                          ? "#45c817"
                          : "#2d65f2",
                      boxShadow: "0 5px 10px rgba(0,0,0,0.23)",
                    }}
                  >
                    {plan?.name === "Eagle eye fleet" ? "Active" : "Releasing"}
                  </div>
                </div> */}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <p className="text-sm text-[#999]">{plan?.subHeading}</p>
                </CardHeader>
                <CardContent>
                  {plan?.name === "Smart fleet" ? (
                    <div className="mt-5">
                      <h1 className="text-[32px] font-semibold text-[#999]">
                        Custom
                      </h1>
                    </div>
                  ) : (
                    <div>
                      <div className="mt-5 text-[32px] font-semibold text-[#202020]">
                        $
                        {Math.floor(
                          calculateDiscount(
                            slotCount,
                            plan?.price,
                            billAnnually
                          )
                        )}
                        <span className="text-[12px] font-medium text-[#202020]">
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
                        <p className="text-black-primary text-[12px] font-medium">
                          15% annual discount
                        </p>
                      )}
                    </div>
                  )}

                  {/* <p className="text-sm text-[#999]">{plan.discount}</p> */}
                  <ul className="mt-4 space-y-2">
                    {plan?.description.map((feature: any, i: number) => (
                      <li key={i} className="flex items-center gap-2">
                        <FaCircleCheck className="text-[#2D65F2]" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-center">
                    {plan.name === "Eagle eye fleet" && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="mt-4 w-full bg-[#2D65F2] text-[14px] font-semibold text-[#FFF] hover:bg-[#2D65f2]/60 hover:text-bg_white"
                            onClick={() =>
                              handlePriceAndModal({
                                price: calculateDiscount(
                                  slotCount,
                                  plan?.price,
                                  billAnnually
                                ),
                                fleet: plan?.name,
                                slot: slotCount,
                                annually: billAnnually,
                              })
                            }
                          >
                            Choose Plan
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="min-w-[500px] max-w-[550px]">
                          <div className="p-2">
                            <div className="flex w-full flex-col items-center justify-center">
                              <div className="flex items-center justify-center gap-x-[5px]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="25"
                                  height="24"
                                  viewBox="0 0 25 24"
                                  fill="none"
                                >
                                  <path
                                    d="M7.80469 19.2982V17.8992H17.2037V19.2982H7.80469ZM11.8047 15.8079V7.354L8.89216 10.2588L7.92104 9.2829L12.5018 4.70215L17.0873 9.2829L16.1114 10.2588L13.2037 7.354V15.8079H11.8047Z"
                                    fill="#2D65F2"
                                  />
                                </svg>
                                <h1 className="text-[18px] font-[700] text-p_blue">
                                  Update fleet plan
                                </h1>
                              </div>
                              <h1 className="text-[12px] font-[500] text-[#999]">
                                Make sure to go through all the details before
                                you update your plan
                              </h1>
                            </div>
                            <div className="my-5 flex flex-col items-center justify-center py-[10px]">
                              <h1 className="text-[32px] font-[700] text-black">
                                ${TotalForModal.toFixed(2)}
                              </h1>
                              <p className="text-[12px] font-[500] text-[#999]">
                                Total monthly billing
                              </p>
                            </div>

                            <div className="flex justify-between rounded-md border border-[#F6F6F6] p-4">
                              <div className="flex justify-start gap-x-[10px]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="25"
                                  viewBox="0 0 24 25"
                                  fill="none"
                                >
                                  <path
                                    d="M4.40775 21.737C3.9352 21.737 3.53296 21.5711 3.20103 21.2391C2.86909 20.9072 2.70312 20.505 2.70312 20.0324V10.7648C2.70312 10.2922 2.86909 9.88999 3.20103 9.55806C3.53296 9.22613 3.9352 9.06016 4.40775 9.06016H19.5946C20.0672 9.06016 20.4694 9.22613 20.8013 9.55806C21.1333 9.88999 21.2992 10.2922 21.2992 10.7648V20.0324C21.2992 20.505 21.1333 20.9072 20.8013 21.2391C20.4694 21.5711 20.0672 21.737 19.5946 21.737H4.40775ZM10.3118 18.8159L15.4377 15.3986L10.3118 11.9813V18.8159ZM4.39253 7.63513V6.23613H19.6098V7.63513H4.39253ZM7.35215 4.81111V3.41211H16.6502V4.81111H7.35215Z"
                                    fill="#2D65F2"
                                  />
                                </svg>
                                <div>
                                  <h1 className="text to-black text-[12px] font-bold">
                                    {selectedPlan?.fleet} (
                                    {selectedPlan?.annually
                                      ? "Annually"
                                      : "Monthly"}
                                    )
                                  </h1>
                                  <p className="text-[12px] font-normal text-[#999]">
                                    Pricing plan
                                  </p>
                                </div>
                              </div>
                              <h1>
                                <span className="text-[18px] font-[700] text-black">
                                  ${Math.floor(selectedPlan?.price ?? 0)}
                                </span>
                                <span className="text-[12px] font-[500] text-[#999]">
                                  .
                                  {
                                    selectedPlan?.price
                                      ?.toFixed(2)
                                      .split(".")[1]
                                  }{" "}
                                  / month per slot
                                </span>
                              </h1>
                            </div>
                            <div className="mt-[10px] flex justify-between rounded-md border border-[#F6F6F6] p-4">
                              <div className="flex items-start justify-start gap-x-[10px]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M8 11.5263L9.5 7.26316H18.5L20 11.5263M18.5 16.2632C18.1022 16.2632 17.7206 16.1134 17.4393 15.8469C17.158 15.5804 17 15.219 17 14.8421C17 14.4652 17.158 14.1038 17.4393 13.8373C17.7206 13.5708 18.1022 13.4211 18.5 13.4211C18.8978 13.4211 19.2794 13.5708 19.5607 13.8373C19.842 14.1038 20 14.4652 20 14.8421C20 15.219 19.842 15.5804 19.5607 15.8469C19.2794 16.1134 18.8978 16.2632 18.5 16.2632ZM9.5 16.2632C9.10218 16.2632 8.72064 16.1134 8.43934 15.8469C8.15804 15.5804 8 15.219 8 14.8421C8 14.4652 8.15804 14.1038 8.43934 13.8373C8.72064 13.5708 9.10218 13.4211 9.5 13.4211C9.89782 13.4211 10.2794 13.5708 10.5607 13.8373C10.842 14.1038 11 14.4652 11 14.8421C11 15.219 10.842 15.5804 10.5607 15.8469C10.2794 16.1134 9.89782 16.2632 9.5 16.2632ZM19.92 6.78947C19.71 6.22105 19.14 5.84211 18.5 5.84211H9.5C8.86 5.84211 8.29 6.22105 8.08 6.78947L6 12.4737V20.0526C6 20.3039 6.10536 20.5449 6.29289 20.7225C6.48043 20.9002 6.73478 21 7 21H8C8.26522 21 8.51957 20.9002 8.70711 20.7225C8.89464 20.5449 9 20.3039 9 20.0526V19.1053H19V20.0526C19 20.3039 19.1054 20.5449 19.2929 20.7225C19.4804 20.9002 19.7348 21 20 21H21C21.2652 21 21.5196 20.9002 21.7071 20.7225C21.8946 20.5449 22 20.3039 22 20.0526V12.4737L19.92 6.78947ZM14.92 3.94737C14.71 3.37895 14.14 3 13.5 3H4.5C3.86 3 3.29 3.37895 3.08 3.94737L1 9.63158V17.2105C1 17.4618 1.10536 17.7028 1.29289 17.8804C1.48043 18.0581 1.73478 18.1579 2 18.1579H3C3.26522 18.1579 3.51957 18.0581 3.70711 17.8804C3.89464 17.7028 4 17.4618 4 17.2105V13.3358C3.81541 13.2731 3.64569 13.1765 3.50053 13.0516C3.35538 12.9267 3.23764 12.7759 3.15405 12.6078C3.07046 12.4397 3.02266 12.2577 3.01339 12.0722C3.00411 11.8866 3.03355 11.7011 3.1 11.5263C3.32 10.9579 3.87 10.5789 4.5 10.5789H4.57L5.27 8.68421H3L4.5 4.42105H15.09L14.92 3.94737Z"
                                    fill="#2D65F2"
                                  />
                                </svg>

                                <h1 className="text to-black text-[12px] font-bold">
                                  {selectedPlan?.fleet} (
                                  {selectedPlan?.annually
                                    ? "Annually"
                                    : "Monthly"}
                                  )
                                </h1>
                              </div>
                              <h1>
                                <span className="text-[18px] font-semibold text-black">
                                  {selectedPlan?.slot}
                                </span>
                                <span className="ml-1 text-[12px] font-normal text-[#999]">
                                  slots
                                </span>
                              </h1>
                            </div>
                            <div className="mt-5 grid w-full grid-cols-2 gap-[10px]">
                              <DialogClose asChild>
                                <Button className="h-[38px] rounded-md bg-[#F5F9FC] text-[14px] font-semibold text-[#2D65F2] hover:bg-black hover:text-[#FFF]">
                                  Cancel
                                </Button>
                              </DialogClose>
                              <Button
                                onClick={handleSubscriptionPlan}
                                className="h-[38px] rounded-md bg-[#2D65F2] text-[14px] font-semibold text-[#FFF]"
                              >
                                Proceed
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="my-5 flex items-center justify-center space-x-2">
            <Switch
              id="bill-monthly"
              checked={billMonthly}
              onCheckedChange={handleBillingMonthly}
              className="cursor-pointer bg-p_blue"
            />
            <Label htmlFor="bill-monthly">Bill monthly</Label>
          </div>

          {/* ***************Full features comparison************ */}
          <div className="mt-8 flex w-full items-center justify-center">
            <div className="max-w-[1200px] w-full">
              {/* Sticky Header */}
              <div className="sticky top-0 grid grid-cols-3 p-3 h-[60px] items-center bg-[#FAFAFF] rounded-lg z-10">
                <h1 className="text-[14px] font-[600] ml-5 text-[#999]">
                  Usage
                </h1>
                <h1 className="text-center text-[14px] font-bold text-black/95">
                  Eagle eye fleet
                </h1>
                <h1 className="text-center text-[14px] font-bold text-black/95">
                  Dynamic fleet
                </h1>
              </div>
              {/* Scrollable Container without overflow-hidden */}
              <div className="hide-scroll h-full overflow-y-auto scroll-smooth">
                <div className="rounded-md px-5 py-4">
                  <h1 className="text-[18px] font-[700] text-[#7D7D7D] font-openSans">
                    Vehicles
                  </h1>
                </div>
                {vehicleFeatures?.map((featuers, index: number) => (
                  <FeaturesPermissionRow
                    key={index}
                    featuresPermissions={featuers}
                  />
                ))}
                <div className="rounded-md px-5 py-4">
                  <h1 className="text-[18px] font-[700] text-[#7D7D7D] font-openSans">
                    Fleet
                  </h1>
                </div>
                {fleetFeatures?.map((featuers, index: number) => (
                  <FeaturesPermissionRow
                    key={index}
                    featuresPermissions={featuers}
                  />
                ))}
                <div className="rounded-md px-5 py-4">
                  <h1 className="text-[18px] font-[700] text-[#7D7D7D] font-openSans">
                    Brand
                  </h1>
                </div>
                {brandFeatures?.map((featuers, index: number) => (
                  <FeaturesPermissionRow
                    key={index}
                    featuresPermissions={featuers}
                  />
                ))}
                <div className="rounded-md px-5 py-4">
                  <h1 className="text-[18px] font-[700] text-[#7D7D7D] font-openSans">
                    Team
                  </h1>
                </div>
                {teamFeatures?.map((featuers, index: number) => (
                  <FeaturesPermissionRow
                    key={index}
                    featuresPermissions={featuers}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FAQSection />
    </main>
  );
};

export default Page;

export const AccurateSlider = ({
  value,
  setValue,
}: {
  value: number;
  setValue: (value: number) => void;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (newValue <= 201 || newValue < value) {
      setValue(newValue);
    }
  };

  const getPercentage = (value: number) => ((value - 10) / 240) * 100;

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-center p-6">
      {/* Slot Display */}
      <div className="mt-[10px] text-center">
        <span className="text-[28px] font-bold text-[#04082C]">{value}</span>
        <span className="ml-1 text-[14px] font-normal text-[#6F6464]">
          slots
        </span>
        <div className="">
          <span className="ml-1 text-[14px] font-normal font-openSans leading-[150%] text-[#6F6464]">
            Total Vehicle Slots (Fleet Size)
          </span>
        </div>
      </div>

      {/* Slider */}
      <div className="mx-auto mt-5 w-[610px]">
        {/* Labels */}
        <div className="flex text-sm text-ti_grey">
          <span className="text-[12px] font-medium text-black">10</span>
          <span
            className={`ml-[208px] text-[12px] font-medium ${
              value > 99 ? "text-black" : "text-[#999]"
            } `}
          >
            100
          </span>
          <span
            className={`ml-[231px] text-[12px] font-medium ${
              value > 199 ? "text-black" : "text-[#999]"
            } `}
          >
            200
          </span>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Track */}
          <div className="absolute top-1/2 z-10 h-[12px] w-full -translate-y-1/2 transform rounded-full bg-[#F6F6F6]"></div>

          {/* Dots */}
          {[50, 100, 150, 200].map((dotValue) => (
            <div
              key={dotValue}
              className="absolute top-1/2 z-20 h-[6px] w-[6px] -translate-y-1/2 transform rounded-full bg-[#DDD]"
              style={{ left: `${((dotValue - 10) / 240) * 100}%` }}
            ></div>
          ))}
          {/* Progress */}
          <div
            className="absolute top-1/2 z-30 h-3 -translate-y-1/2 rounded-full bg-p_dark_blue"
            style={{ width: `${getPercentage(value)}%` }}
          ></div>

          {/* Slider Input */}
          <input
            type="range"
            min="10"
            max="200"
            step="10"
            value={value}
            onChange={handleChange}
            className="relative z-40 h-3 w-full cursor-pointer appearance-none bg-transparent"
            style={{
              outline: "none",
              WebkitAppearance: "none",
            }}
          />

          {/* Custom Handle */}
          <div
            className="pointer-events-none absolute top-1/2 z-30 h-[24px] w-[32px] -translate-y-1/2 transform rounded-md border-2 border-white bg-p_blue shadow-md"
            style={{
              left: `${getPercentage(value)}%`,
              transform: "translate(-50%, -50%)",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.14)",
            }}
          >
            {/* Simplified handle icons */}
            <div className="flex h-full w-full items-center justify-center">
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 5.00141C0.5 5.10055 0.517399 5.19257 0.552198 5.27709C0.587 5.36162 0.641928 5.44007 0.716982 5.51239L4.48092 9.27639C4.59334 9.39139 4.73041 9.45034 4.89242 9.45298C5.05446 9.45566 5.19693 9.39568 5.31979 9.27285C5.43989 9.15265 5.49993 9.0129 5.49993 8.85357C5.49993 8.69434 5.44059 8.55391 5.32187 8.43251L1.88878 5.00346L5.32187 1.57037C5.43517 1.45705 5.49316 1.31947 5.49584 1.15736C5.49854 0.995357 5.43989 0.85297 5.31979 0.73014C5.19693 0.60991 5.05581 0.54987 4.8965 0.54987C4.73718 0.54987 4.59868 0.60883 4.48092 0.72652L0.716982 4.49048C0.641928 4.56563 0.587 4.6446 0.552198 4.72782C0.517399 4.81093 0.5 4.90214 0.5 5.00141Z"
                  fill="white"
                />
                <path
                  d="M13.5 5.00141C13.5 5.10055 13.4826 5.19257 13.4478 5.27709C13.413 5.36162 13.3581 5.44007 13.283 5.51239L9.51908 9.27639C9.40667 9.39139 9.26959 9.45034 9.10758 9.45298C8.94554 9.45566 8.80307 9.39568 8.68021 9.27285C8.56011 9.15265 8.50007 9.0129 8.50007 8.85357C8.50007 8.69434 8.55941 8.55391 8.67813 8.43251L12.1112 5.00346L8.67813 1.57037C8.56483 1.45705 8.50684 1.31947 8.50416 1.15736C8.50146 0.995357 8.56011 0.85297 8.68021 0.73014C8.80307 0.60991 8.94419 0.54987 9.1035 0.54987C9.26282 0.54987 9.40132 0.60883 9.51908 0.72652L13.283 4.49048C13.3581 4.56563 13.413 4.6446 13.4478 4.72782C13.4826 4.81093 13.5 4.90214 13.5 5.00141Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface PermissionItem {
  permission: boolean;
  message?: string | null;
  plan?: string | null;
}

interface FeaturesPermissionRowProps {
  title: string;
  permissions: PermissionItem[];
  border?: boolean;
}

interface FeaturesPermissionRowComponentProps {
  featuresPermissions: FeaturesPermissionRowProps;
}

const FeaturesPermissionRow: React.FC<FeaturesPermissionRowComponentProps> = ({
  featuresPermissions,
}) => {
  return (
    <div
      className={`w-full ${
        featuresPermissions?.border ? "" : "border-b"
      } grid grid-cols-3 border-[#F6F6F6] px-5 py-5`}
    >
      <div>
        <h1 className="text-[13px] font-[600] text-[#202020]">
          {featuresPermissions?.title}
        </h1>
      </div>
      {featuresPermissions.permissions.map((permissionItem, index) => (
        <div
          className="flex items-center justify-center space-x-[7px]"
          key={index}
        >
          {permissionItem?.permission ? (
            <FaCircleCheck className="text-[#2D65F2]" size={16} />
          ) : (
            <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#F6F6F6] p-[3px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M6.99919 7.55973L4.16397 10.395C4.08609 10.4728 3.99342 10.5115 3.88596 10.511C3.77852 10.5104 3.68495 10.4703 3.60526 10.3906C3.52846 10.3109 3.49078 10.219 3.49223 10.1148C3.49367 10.0106 3.53279 9.92008 3.60959 9.84328L6.44049 7.00103L3.60959 4.15877C3.53639 4.08558 3.49889 3.99598 3.49709 3.88996C3.49529 3.78396 3.53279 3.69112 3.60959 3.61143C3.68639 3.53174 3.77762 3.49073 3.88326 3.48838C3.98891 3.48604 4.08248 3.52471 4.16397 3.6044L6.99919 6.44232L9.83711 3.6044C9.91319 3.52832 10.005 3.49055 10.1124 3.49108C10.2199 3.49163 10.3143 3.53174 10.3958 3.61143C10.4708 3.69112 10.5076 3.78306 10.5062 3.88727C10.5047 3.99147 10.4656 4.08197 10.3888 4.15877L7.55789 7.00103L10.3888 9.84328C10.462 9.91647 10.4995 10.0061 10.5013 10.1121C10.5031 10.2181 10.4656 10.3109 10.3888 10.3906C10.312 10.4703 10.2208 10.5113 10.1151 10.5137C10.0095 10.516 9.9168 10.4764 9.83711 10.395L6.99919 7.55973Z"
                  fill="#151515"
                />
              </svg>
            </div>
          )}
          {permissionItem?.message && (
            <div>
              <div className="flex items-center gap-[2px] text-[12px] font-medium leading-4 text-[#202020]">
                <h1> {permissionItem?.message}</h1>
                <h1 className="text-[#999]"> {permissionItem?.plan}</h1>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
