"use client"

import RightArrowIcon from "@/components/icons/RightArrowIcon";
import Image from "next/image";
import Link from "next/link";
import GlobeSection from "@/components/modules/home/globe";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AutoDealership = () => {
    const triggerRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);


    const animationItems = [
        {
            title: "Keep All Vehicle Sales Ready and in Excellent Condition",
            content: "Check the condition of every vehicle in your inventory on a consistent basis, whether it is a demo, loaner, or new vehicle. Use checks to track wear-and-tear, damage, or service needed, so that your inventory remains sale-ready.",
            image: "/images/industries/slide-annimation-1.png"
        },
        {
            title: "Ensure Every Vehicle Is Compliant and Road-Ready",
            content: "Monitor registrations, insurance, and servicing with a system that will maintain your entire fleet in immaculate compliance. Automated monitoring and on-time reminders ensure nothing slips through the cracks - so every vehicle remains legal, safe, and ready to roll.",
            image: "/images/industries/slide-annimation-2.png"
        },
        {
            title: "Maximize Customer Satisfaction and Fleet Health",
            content: "Lease cars, demos, and courtesy cars shouldn't keep you in suspense - they should leave you with potential. Fleetblox gives you real-time visibility into the status, utilization, and health of every unit. Look to the future for service requirements, sidestep costly delays, and keep each vehicle road-ready and revenue-ready - no matter where it is in its life cycle.",
            image: "/images/industries/slide-annimation-3.png"
        }
    ];

    useGSAP(() => {
        // Pin the image container
        ScrollTrigger.create({
            trigger: triggerRef.current,
            start: "top 20%",
            end: "bottom bottom-=100",
            pin: imageRef.current,
            pinSpacing: false,
            markers: false, // Set to false in production
            scrub: true,
        });

        // Animate content sections
        const contentElements = Array.from(contentRef.current.children);

        contentElements.forEach((content, index) => {
            gsap.fromTo(content,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: content,
                        start: "top 70%", // Trigger earlier
                        end: "center 40%", // End animation sooner
                        scrub: 0.5,
                        onEnter: () => {
                            setActiveIndex(index);
                            contentElements.forEach((el, i) => {
                                gsap.to(el, {
                                    filter: i === index ? "blur(0px)" : "blur(2px)",
                                    duration: 0.3
                                });
                            });
                        },
                        onLeaveBack: () => {
                            if (index > 0) {
                                setActiveIndex(index - 1);
                            }
                            contentElements.forEach((el, i) => {
                                gsap.to(el, {
                                    filter: i === (index - 1) ? "blur(0px)" : "blur(2px)",
                                    duration: 0.3
                                });
                            });
                        }
                    },
                    duration: 0.5
                }
            );
        });
    }, []);

    return (
        <div>
            {/* hero section */}
            <section className="bg-[#FAFAFF] pt-[100px] lg:pt-[120px] pb-[30px] ">
                <div className="lg:max-w-[calc(100vw-30px)] xxl:max-w-[1440px] mx-auto w-full flex flex-col px-5 lg:flex-row items-center justify-between">
                    <div className="lg:pl-[130px] max-w-[700px] w-full">
                        <h3 className="text-[#0336BC] font-openSans font-bold text-[22px] w-full">
                            Fleetblox for Auto Dealerships
                        </h3>
                        <h1 className="text-[#04082C] text-[36px] lg:text-[50px] font-bold leading-[1.1] w-full">
                            Build and Link Your Fleet Across Brands and Locations
                        </h1>
                        <p className="text-[#333] text-[16px] leading-6 mt-[10px] lg:mt-4 mb-5 font-openSans">
                            Be in total control of your dealership&apos;s inventory - no matter how many locations or brands you have. See availability in real time, move vehicles between branches effortlessly, and keep every unit sale-ready from one, integrated platform.
                        </p>
                        <Link
                            aria-label="Get started with FleetBlox"
                            href="/getting-started"
                        >
                            <button className="hidden transition-all bg-[#2D65F2] hover:bg-[#0336BC] font-openSans text-white-primary text-white duration-300 hover:w-[144.16px] w-[122.16px] lg:flex items-center px-4 py-3 text-base font-bold rounded-md group">
                                <div className="z-20 whitespace-nowrap">Start today</div>
                                <div className="z-10 transform transition-transform opacity-0 group-hover:opacity-100 -translate-x-4 duration-300 group-hover:translate-x-0">
                                    <RightArrowIcon />
                                </div>
                            </button>
                        </Link>
                        <Link
                            aria-label="Get started with FleetBlox"
                            href="/getting-started"
                        >
                            <button className="lg:hidden bg-[#2D65F2] hover:bg-[#0336BC] text-white w-full flex px-4 py-3 text-[14px] font-openSans font-bold rounded-md justify-center">
                                Start today
                            </button>
                        </Link>
                    </div>
                    <div className=" w-full py-10 lg:pl-[60px]">
                        <Image
                            src="/images/industries/auto-dealership-hero.svg"
                            alt="Remote Scalability Hero"
                            width={700}
                            height={491}
                            priority
                            className="object-contain w-full"
                        />
                    </div>
                </div>
            </section>

            {/* smart dealership section */}

            <section className="max-w-[1200px] mx-auto w-full mt-[60px] lg:mt-[100px] px-5">
                <div className="max-w-[840px] mx-auto w-full text-center">
                    <h1 className="text-[#04082C] text-[28px] lg:text-[36px] font-bold text-center leading-[1.1] mb-[10px]">
                        Smarter Dealerships Network
                    </h1>
                    <p className="text-[#333] text-[16px] leading-6 font-openSans">
                        Sync stock, move faster, and manage every branch with ease
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center my-8 gap-6 lg:gap-10">
                    {/* Left side - Image */}
                    <div className="flex items-center justify-center">
                        <Image
                            src="/images/industries/auto-dealership-2.svg"
                            alt="Remote Scalability Hero"
                            width={450}
                            height={260}
                            priority
                            className="object-contain w-full lg:max-w-[450px] max-h-[260px]"
                        />
                    </div>
                    {/* Right side - Accordions */}
                    <div className="flex-1 space-y-4">
                        {[
                            {
                                title: "Centralized Inventory",
                                content: "Manage your entire fleet from one dashboard. Monitor health, availability, and readiness across all locations in real time."
                            },
                            {
                                title: "Multi-Brand Sync",
                                content: "Easily manage vehicles from different brands. Our platform integrates seamlessly with various manufacturers, ensuring a smooth experience."
                            },
                            {
                                title: "Cross-Location Logistics",
                                content: "Effortlessly move vehicles between branches. Our platform simplifies logistics, ensuring your fleet is always where it needs to be."
                            },

                        ].map((item, index) => (
                            <div key={index} className="border-l-2 border-[#DFDFDF] pl-4">
                                <button
                                    className="flex justify-between items-center w-full text-left font-bold text-[#04082C]"
                                    onClick={() => {
                                        const content = document.getElementById(`content-${index}`);
                                        content?.classList.toggle('hidden');
                                    }}
                                >
                                    <span className="text-lg">{item.title}</span>

                                </button>
                                <div id={`content-${index}`} className="mt-2 text-[#333333] text-[16px] leading-[150%] font-openSans hidden">
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* animations section with GSAP scrolling */}
            <section className="max-w-[1200px] mx-auto w-full mt-[60px] lg:mt-[100px] px-5 mb-[100px]" ref={triggerRef}>
                <div className="max-w-[900px] mx-auto w-full text-center mb-6">
                    <h2 className="text-[#04082C] text-[28px] lg:text-[36px] font-bold text-center leading-[1.1] mb-[10px]">
                        Smart Fleet Management That Adapts
                    </h2>
                    <p className="text-[#333] text-[16px] leading-6 font-openSans">
                        From vehicle maintenance to compliance management, our platform delivers end-to-end solutions
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 relative">
                    {/* Sticky Image Container */}
                    <div className="hidden lg:block" ref={imageRef}>
                        <div className="rounded-lg overflow-hidden flex items-center justify-center p-8 h-[500px]">
                            {animationItems.map((item, index) => (
                                <div
                                    key={`image-${index}`}
                                    className={`transition-opacity duration-500 ${activeIndex === index ? 'opacity-100' : 'opacity-0'} absolute`}
                                >
                                    <Image
                                        src={item.image}
                                        alt={`Auto Dealership Feature ${index + 1}`}
                                        width={500}
                                        height={380}
                                        className="object-contain max-w-[500px] max-h-[380px]"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Scrolling Content */}
                    <div className="lg:min-h-[500px] space-y-[30px]" ref={contentRef}>
                        {animationItems.map((item, index) => (
                            <div
                                key={`content-${index}`}
                                className="content-section bg-white rounded-lg p-8 mb-[20px]"
                            >
                                {/* Mobile-only image */}
                                <div className="lg:hidden mb-6">
                                    <Image
                                        src={item.image}
                                        alt={`Auto Dealership Feature ${index + 1}`}
                                        width={400}
                                        height={300}
                                        className="object-contain w-full"
                                    />
                                </div>

                                <h3 className="text-[#04082C] mt-2 leading-[120%] font-bold text-[28px] lg:text-[32px] font-montserrat">
                                    {item.title}
                                </h3>
                                <p className="text-[#333333] mt-4 text-[16px] leading-[150%] font-openSans">
                                    {item.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* fill the gap section */}

            <section className="max-w-[1200px] mx-auto w-full mt-[60px] lg:mt-[100px] px-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-10">
                    {/* Left side - Content */}
                    <div className="flex items-center justify-center">
                        <div className="max-w-[500px] w-full">
                            <h3 className="text-[#04082C] leading-[100%] font-bold text-[36px] font-montserrat">Fill the Gaps Between
                                Your Locations</h3>
                            <p className="text-[#333333] mt-4 text-[16px] leading-[150%] font-openSans text-justify">Transferring vehicles from one location to another should never be a guess. Give the right employees the right tasks, schedule the pick-ups and drop-offs, and track each move - from dispatch to delivery. Streamline internal processes and close the loop on vehicle movement with smart task management and real-time visibility.</p>
                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className=" rounded-lg overflow-hidden flex items-center justify-center py-12">
                        <Image
                            src="/images/industries/fill-the-gaps.png"
                            alt="Auto Dealership Management System"
                            width={600}
                            height={440}
                            priority
                            className="object-contain w-full max-w-[600px]"
                        />
                    </div>
                </div>
            </section>
            {/* maximize customer satisfaction section */}
            <section className="bg-[#FAFAFF] w-full mt-[60px] lg:mt-[100px] py-12">
                <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-10">
                    {/* Left side - Image */}
                    <div className="flex items-center justify-center">
                        <Image
                            src="/images/industries/maximize-customer.png"
                            alt="Auto Dealership Management System"
                            width={550}
                            height={400}
                            priority
                            className="object-contain w-full max-w-[550px]"
                        />
                    </div>

                    {/* Right side - Content */}
                    <div className="flex items-center justify-center">
                        <div className="max-w-[500px] w-full">
                            <h3 className="text-[#04082C] leading-[100%] font-bold text-[36px] font-montserrat">Maximize Customer Satisfaction and Fleet Health</h3>
                            <p className="text-[#333333] mt-4 text-[16px] leading-[150%] font-openSans">Monitor leased and demo vehicles in real-time to enable timely maintenance and service. Let Your customers know exactly when their vehicle needs service, and you maintain your fleet in prime condition, reducing costs and maintaining vehicle value for resale.</p>
                        </div>
                    </div>
                </div>
            </section>
            <GlobeSection
                title="Unify Your Dealership Network, Elevate Your Fleet Operations."
                description="No more blind spots, missed inspections, or inventory imbalances. Fleetblox gives you total control of all brands and branches - so you can manage smarter, move faster, and sell more."
            />
        </div>
    );
};

export default AutoDealership;


