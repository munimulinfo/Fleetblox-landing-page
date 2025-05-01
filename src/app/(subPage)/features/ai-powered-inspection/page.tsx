import RightArrowIcon from "@/components/icons/RightArrowIcon";

import Image from "next/image";
import Link from "next/link";
import proofOfCondition from "../icons/proofofCondition";
import stayCompliant from "../icons/stayCompliant";
import zeroPaper from "../icons/zeroPaper";
import GlobeSection from "@/components/modules/home/globe";
import FeatureCard from "@/components/ui/FeatureCard";
import CentralizedControlIcon from "@/components/icons/solution/remoteScalability/CentralizedControlIcon";
import ReducedDowntime from "@/components/icons/solution/MaintenanceDiagnostics/ReducedDowntime";

const page = () => {
    const items = [
        {
            id: 1,
            title: "Proof of Condition",
            icon: proofOfCondition

        },
        {
            id: 2,
            title: "Zero Paper",
            icon: zeroPaper

        }, {
            id: 3,
            title: "Stay Compliant",
            icon: stayCompliant

        },

    ];



    const whyFleetManager = [
        {
            icon: NoHardware,
            title: "No Hardware, No Hassle",
            description:
                "Manage your entire fleet with zero device installations — fast setup, no extra cost.",
        },
        {
            icon: RealtimeVisibility,
            title: "Full Real-Time Visibility",
            description:
                "Access vital vehicle stats and locations instantly, from anywhere.",
        },
        {
            icon: CentralizedControlIcon,
            title: "Smarter Fleet Control",
            description:
                "Take real-time action with remote lock/unlock and charge control.",
        },
        {
            icon: LowerOperation,
            title: "Lower Operational Overhead",
            description:
                "Eliminate hardware costs, reduce maintenance, and simplify fleet tech stacks.",
        },
        {
            icon: ReducedDowntime,
            title: "Stay Proactive, Not Reactive",
            description:
                "Receive alerts before issues escalate — reducing breakdowns and improving performance.",
        },
    ];
    return (
        <div>
            {/* hero section */}
            <section className="bg-[#FAFAFF] pt-[100px] lg:pt-[140px] pb-[30px] ">
                <div className="lg:max-w-[calc(100vw-30px)] xxl:max-w-[1440px] mx-auto w-full flex flex-col px-5 lg:flex-row items-center justify-between">
                    <div className="lg:pl-[130px]">
                        <h3 className="text-[#0336BC] font-openSans font-bold text-[22px]">
                            Inspections
                        </h3>
                        <h1 className="text-[#04082C] text-[36px] lg:text-[52px] font-bold leading-[1.1]">
                            Smarter Inspections Powered by AI
                        </h1>
                        <p className="text-[#333] text-[16px] leading-6 mt-[10px] lg:mt-4 mb-5 font-openSans">
                            Ensure every vehicle meets your standards before it hits the road. Capture vehicle condition, performance, compliance, and documentation—right from the start.
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
                            src="/images/ai-powered-inspectionHero.png"
                            alt="AI assistant for fleet optimization"
                            width={700}
                            height={491}
                            className="object-contain w-full"
                        />
                    </div>
                </div>
            </section>
            {/* hero section end */}
            <section className="max-w-[1200px] mx-auto w-full mt-[60px] lg:mt-[100px] px-5">
                <div className="max-w-[840px] mx-auto w-full text-center">
                    <h1 className="text-[#04082C] text-[28px] lg:text-[36px] font-bold text-center leading-[1.1] mb-[10px]">
                        Compliance Made Simple for Smarter Fleets
                    </h1>
                    <p className="text-[#333] text-[16px] leading-6 font-openSans">
                        Enjoy a cleaner, smarter fleet experience that keeps future problems out of the way.
                    </p>
                </div>
                <div className="flex items-center my-5  justify-center gap-4">
                    {/* Additional content can be added here */}
                    {items.map((item) => (
                        <IconCard
                            key={item.id}
                            icon={<item.icon />}
                            title={item.title}
                            className="max-w-[300px] w-full border mt-8 border-[#DFDFDF] rounded-[16px] p-[30px] flex flex-col items-center justify-center"
                        />
                    ))}
                </div>

            </section>
            {/* why Cloud section */}
            <section className="bg-[#FAFAFF] py-[100px]">
                <h3 className="text-[#04082C] text-[36px] font-bold leading-[1.1] text-center ">
                    Simplify Inspections in 3 Easy Steps
                </h3>
                <p className="text-[#333] text-[16px] mt-[10px] leading-6 text-center font-openSans">
                    Quick, accurate, and AI-powered inspections with easy steps for <br />
                    complete vehicle health
                </p>
                <div className="max-w-[1200px] w-full mx-auto mt-[60px] mb-10 px-5">
                    <Image
                        src="/images/features/connect-fleet-step.svg"
                        alt="Remote Scalability Hero"
                        width={700}
                        height={491}
                        className="object-contain w-full"
                        quality={100}
                    />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 relative max-w-[1200px] mx-auto w-full gap-5 justify-items-center items-center px-5">
                    <div className="absolute hidden lg:block left-1/2 top-1/2 mt-[90px] max-w-[664px] max-h-[664px] h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FBEECA] opacity-40 blur-[200px]"></div>
                    <div
                        className={`relative z-[200] top-[0px] mx-auto transform flex-col h-[540px] w-full`}
                    >
                        <div className=" bg-white absolute z-50 rounded-[24px] py-10 px-[30px] flex flex-col gap-[10px] w-full h-full">
                            {/* Card Header */}
                            <div className="font-openSans text-center lg:text-left">
                                <h3 className="text-[#04082C] text-[22px] font-bold">
                                    Assign a Technician
                                </h3>
                                <p className="text-[14px] text-[#7D7D7D] leading-5 mt-[5px]">
                                    Choose a team member or partner to handle the inspection.
                                </p>
                            </div>
                            <div className="w-full mt-10 ">
                                <Image
                                    src="/images/ai-powered-inspection.png"
                                    alt="Remote Scalability Hero"
                                    width={327}
                                    height={344}
                                    className="object-contain w-full h-[344px]"
                                    quality={100}
                                />
                            </div>
                        </div>
                        <div className="absolute top-[1vh] z-[20] rounded-[2px] bg-black opacity-[0.07] blur-[20px] h-[610px] lg:h-[565px] w-full max-w-[358px] left-[8px]"></div>
                    </div>
                    <div
                        className={`relative z-[200] top-[0px] mx-auto transform flex-col h-[600px] lg:h-[540px] w-full`}
                    >
                        <div className=" bg-white absolute z-50 rounded-[24px] py-10 px-[30px] flex flex-col gap-[10px] w-full h-full">
                            {/* Card Header */}
                            <div className="font-openSans text-center lg:text-left">
                                <h3 className="text-[#04082C] text-[22px] font-bold">
                                    Perform the Inspection
                                </h3>
                                <p className="text-[14px] text-[#7D7D7D] leading-5 mt-[5px]">
                                    Complete the digital checklist, capture photos, and test the vehicle’s performance.
                                </p>
                            </div>
                            <div className="w-full mt-10">
                                <Image
                                    src="/images/ai-powered-inspection2.png"
                                    alt="Remote Scalability Hero"
                                    width={327}
                                    height={344}
                                    className="object-contain w-full h-[344px]"
                                    quality={100}
                                />
                            </div>
                        </div>
                        <div className="absolute top-[1vh] z-[20] rounded-[2px] bg-black opacity-[0.07] blur-[20px] h-[610px] lg:h-[565px] w-full max-w-[358px] left-[8px]"></div>
                    </div>
                    <div
                        className={`relative z-[200] top-[0px] mx-auto transform flex-col h-[600px] lg:h-[536px] w-full`}
                    >
                        <div className=" bg-white absolute z-50 rounded-[24px] pt-10 px-[30px] flex flex-col gap-[10px] w-full h-full">
                            {/* Card Header */}
                            <div className="font-openSans text-center lg:text-left">
                                <h3 className="text-[#04082C] text-[22px] font-bold">
                                    Generate Report
                                </h3>
                                <p className="text-[14px] text-[#7D7D7D] leading-5 mt-[5px]">
                                    Generate a seamless report showcasing the full status and condition of your vehicle.
                                </p>
                            </div>
                            <div className="w-full mt-10 overflow-hidden">
                                <Image
                                    src="/images/ai-powered-inspection3.png"
                                    alt="Remote Scalability Hero"
                                    width={327}
                                    height={700}
                                    className="object-contain w-full h-[550px] lg:h-[400px]"
                                    quality={100}
                                />
                            </div>
                        </div>
                        <div className="absolute top-[1vh] z-[20] rounded-[2px] bg-black opacity-[0.07] blur-[20px] h-[610px] lg:h-[565px] w-full max-w-[358px] left-[8px]"></div>
                    </div>
                </div>
            </section>

            {/* why Cloud section end */}

            <section className="py-[100px] ">
                <div className="max-w-[840px] w-full mx-auto text-center px-5">
                    <h3 className="text-[#04082C] text-[18px] md:text-[36px] font-bold leading-[1.1]">
                        A Seamless Process to Ensure Vehicle Compliance and Condition
                    </h3>
                    <p className="text-[#333] text-[16px] font-normal leading-6 font-openSans mt-[5px] ">
                        An easy and streamlined process guiding you through inspections, compliance tracking, and overall vehicle condition assessment.
                    </p>
                </div>
                <div className="max-w-[1200px] hidden md:block w-full mx-auto mt-[60px] px-5">
                    <Image
                        src="/images/features/Fleetblox-connect.svg"
                        alt="Remote Scalability Hero"
                        width={700}
                        height={491}
                        className="object-contain w-full"
                        quality={100}
                    />
                </div>
                <div className="max-w-[1200px] md:hidden block w-full mx-auto mt-[40px] px-5">
                    <Image
                        src="/images/features/fleetblox-connect-mobile.svg"
                        alt="Remote Scalability Hero"
                        width={700}
                        height={491}
                        className="object-contain w-full"
                        quality={100}
                    />
                </div>
            </section>

            {/* Brand Globe Section */}
            <GlobeSection />

            {/* Brand Globe Section End */}
            <section className="max-w-[1200px] mx-auto w-full mb-[60px] px-5">
                <h1 className="mb-[40px] lg:mb-[60px] text-center max-w-[840px] w-full mx-auto text-[#04082C] text-[28px] lg:text-[36px] font-bold">
                    {`Every Fleet Owner’s Reliable Partner - Here's Why`}
                </h1>
                <div className="lg:grid hidden grid-cols-1 lg:grid-cols-3 justify-items-center items-center gap-[30px]">
                    {whyFleetManager?.slice(0, 3).map((data, index) => (
                        <FeatureCard
                            key={index}
                            icon={<data.icon />}
                            title={data.title}
                            description={data.description}
                        // className="lg:max-w-[380px] lg:w-full"
                        />
                    ))}
                </div>
                <div className="grid lg:hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center lg:gap-[30px] gap-[20px]">
                    {whyFleetManager?.map((data, index) => (
                        <FeatureCard
                            key={index}
                            icon={<data.icon />}
                            title={data.title}
                            description={data.description}
                            className={`w-full ${index === 4 && "md:col-span-2 md:max-w-[380px] mx-auto"
                                }`}
                        />
                    ))}
                </div>
                <div className="lg:flex hidden flex-col items-center justify-items-center justify-center lg:flex-row mt-[30px] gap-[30px]">
                    {whyFleetManager?.slice(3, 5).map((data, index) => (
                        <FeatureCard
                            key={index}
                            icon={<data.icon />}
                            title={data.title}
                            description={data.description}
                            className="lg:max-w-[380px] lg:w-full"
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default page;


const IconCard = ({ icon, title, className }: { icon: React.ReactNode; title: string; className: string; }) => {
    return (
        <div className={`flex flex-col items-center justify-center ${className}`}>
            <div className="flex items-center justify-center w-[60px] h-[60px] bg-[#F2F4FF] rounded-full mb-4">
                {icon}
            </div>
            <h2 className="text-[18px] font-openSans font-bold text-[#333]">
                {title}
            </h2>
        </div>
    );
}


const LowerOperation = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
        >
            <g clipPath="url(#clip0_7466_31960)">
                <path
                    d="M7.21433 12.853C7.4091 12.5057 7.67714 12.2727 8.01846 12.154C8.35976 12.0352 8.69989 12.0489 9.03885 12.195L12.5708 13.7671C12.725 13.6 13.0539 13.3552 13.5575 13.0326C14.061 12.71 14.663 12.3568 15.3635 11.9729L15.935 7.93779C15.9842 7.53989 16.1489 7.21707 16.429 6.96933C16.7091 6.72157 17.0345 6.58957 17.4053 6.57333L22.3958 6.54588C22.7609 6.53976 23.079 6.66911 23.3501 6.93391C23.6212 7.19868 23.7764 7.52738 23.8158 7.92003L24.1923 11.9974C24.425 12.0858 24.6482 12.1877 24.8619 12.3032C25.0756 12.4188 25.3068 12.5537 25.5554 12.7081C25.7433 12.8247 25.9438 12.9621 26.1569 13.1203C26.3699 13.2786 26.6129 13.4671 26.886 13.6858L30.4451 12.0348C30.7862 11.8783 31.132 11.8616 31.4826 11.9848C31.8331 12.1079 32.0936 12.3456 32.264 12.6978L34.6008 17.2465C34.7666 17.5958 34.8155 17.9568 34.7477 18.3294C34.6798 18.7021 34.4946 19.0087 34.192 19.2493L31.0663 21.7689C31.138 22.2994 31.1677 22.8558 31.1555 23.4382C31.1432 24.0206 31.0841 24.5985 30.9779 25.1719L34.0148 27.6975C34.2956 27.9361 34.4721 28.2431 34.5444 28.6186C34.6168 28.994 34.5555 29.3554 34.3608 29.7027L31.7955 34.2763C31.6036 34.6185 31.3355 34.8514 30.9914 34.9753C30.6472 35.0991 30.3066 35.0919 29.9694 34.9539L26.4165 33.3686C25.9744 33.7568 25.5345 34.0789 25.0967 34.3348C24.6589 34.5908 24.1726 34.8169 23.6377 35.0133L23.0073 39.1906C22.9563 39.5805 22.7975 39.9001 22.5309 40.1495C22.2644 40.3988 21.9458 40.5316 21.575 40.5479L16.6236 40.5832C16.251 40.5914 15.9287 40.4639 15.6568 40.2007C15.3848 39.9374 15.2315 39.6109 15.1968 39.2212L14.8255 34.9458C14.5609 34.8514 14.3321 34.7493 14.139 34.6398C13.9459 34.5302 13.7297 34.4011 13.4904 34.2526C13.2651 34.1128 13.0549 33.9754 12.8596 33.8405C12.6643 33.7056 12.4563 33.5327 12.2356 33.3218L8.59795 35.0082C8.25403 35.1699 7.9094 35.1934 7.56404 35.079C7.21867 34.9645 6.95936 34.7304 6.78612 34.3764L4.39602 29.7946C4.2256 29.4424 4.18038 29.0732 4.26034 28.6868C4.34031 28.3005 4.53249 27.991 4.83687 27.7583L7.95788 25.2809C7.88076 24.7443 7.8448 24.2142 7.84999 23.6904C7.8552 23.1666 7.90696 22.5834 8.00526 21.9408L4.97523 19.44C4.69264 19.1935 4.51966 18.8818 4.45629 18.505C4.39289 18.1282 4.45714 17.7688 4.64906 17.4266L7.21433 12.853ZM15.2932 20.8775C14.5779 22.1528 14.3809 23.4921 14.7021 24.8954C15.0233 26.2987 15.771 27.3647 16.945 28.0934C18.119 28.8221 19.3675 28.9951 20.6905 28.6123C22.0135 28.2296 23.0326 27.4006 23.7479 26.1253C24.4677 24.8419 24.6659 23.5006 24.3424 22.1014C24.0189 20.7022 23.2701 19.6382 22.0961 18.9095C20.922 18.1807 19.6747 18.0057 18.354 18.3844C17.0333 18.7631 16.013 19.5941 15.2932 20.8775Z"
                    fill="#B8CBFC"
                />
                <path
                    d="M36.1226 35.1984V30.7857C36.1226 30.6697 36.1565 30.5749 36.2244 30.5013C36.2925 30.4278 36.3846 30.3911 36.5007 30.3911C36.6168 30.3911 36.7146 30.4296 36.7939 30.5065C36.8732 30.5836 36.9129 30.6828 36.9129 30.804V35.1984L38.7382 33.356C38.8064 33.2878 38.894 33.2568 39.0011 33.263C39.1082 33.269 39.1967 33.3072 39.2667 33.3777C39.3367 33.448 39.3716 33.5357 39.3716 33.6409C39.3716 33.7459 39.337 33.8353 39.2677 33.9091L37.005 36.1698C36.8681 36.3003 36.7071 36.3655 36.5221 36.3655C36.337 36.3655 36.1792 36.3003 36.0488 36.1698L33.7752 33.8962C33.6957 33.8074 33.6575 33.7163 33.6605 33.623C33.6635 33.5297 33.7 33.448 33.7699 33.3777C33.8399 33.3072 33.9295 33.272 34.0386 33.272C34.1478 33.272 34.2384 33.3101 34.3104 33.3862L36.1226 35.1984ZM36.5055 25C35.3321 25 34.2292 25.2239 33.1967 25.6716C32.1642 26.1193 31.2632 26.7276 30.4937 27.4966C29.7241 28.2656 29.1161 29.1645 28.6697 30.1933C28.2232 31.2222 28 32.3226 28 33.4945C28 34.6703 28.2239 35.7765 28.6716 36.8131C29.1193 37.8496 29.7276 38.7512 30.4966 39.5182C31.2656 40.2851 32.1645 40.8904 33.1933 41.3341C34.2222 41.778 35.3226 42 36.4945 42C37.6703 42 38.7765 41.7769 39.8131 41.3306C40.8497 40.8843 41.7515 40.2786 42.5184 39.5134C43.2852 38.7484 43.8904 37.8494 44.3341 36.8164C44.778 35.7835 45 34.6798 45 33.5055C45 32.3321 44.7775 31.2292 44.3325 30.1967C43.8873 29.1642 43.2816 28.2632 42.5153 27.4937C41.749 26.7241 40.8494 26.1161 39.8164 25.6697C38.7835 25.2232 37.6798 25 36.5055 25Z"
                    fill="#2D65F2"
                    fillOpacity="0.5"
                />
            </g>
            <defs>
                <clipPath id="clip0_7466_31960">
                    <rect width="48" height="48" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};
const RealtimeVisibility = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
        >
            <path
                d="M6.63875 41.1108C5.92681 41.1108 5.30903 40.849 4.78542 40.3254C4.26181 39.8018 4 39.184 4 38.4721V34.7567C4 34.3969 4.12889 34.0883 4.38667 33.8308C4.64444 33.5731 4.95694 33.4442 5.32417 33.4442C5.69139 33.4442 6.00222 33.5731 6.25667 33.8308C6.51139 34.0883 6.63875 34.3969 6.63875 34.7567V38.4721H10.3542C10.7139 38.4721 11.0225 38.6014 11.28 38.86C11.5378 39.1186 11.6667 39.4285 11.6667 39.7896C11.6667 40.1613 11.5378 40.4744 11.28 40.7292C11.0225 40.9836 10.7139 41.1108 10.3542 41.1108H6.63875ZM22.0312 33.5554C19.0612 33.5554 16.3506 32.7765 13.8992 31.2188C11.4478 29.6607 9.51139 27.509 8.09 24.7638C7.94667 24.4999 7.8425 24.2256 7.7775 23.9408C7.71278 23.6561 7.68042 23.3656 7.68042 23.0692C7.68042 22.7683 7.71514 22.4721 7.78458 22.1804C7.85403 21.8888 7.95583 21.611 8.09 21.3471C9.51 18.596 11.4439 16.4349 13.8917 14.8638C16.3392 13.2924 19.0489 12.5067 22.0208 12.5067C24.9858 12.5067 27.7039 13.2914 30.175 14.8608C32.6461 16.4303 34.5919 18.5918 36.0125 21.3454C36.1475 21.6104 36.2497 21.8888 36.3192 22.1804C36.3886 22.4721 36.4233 22.7638 36.4233 23.0554C36.4233 23.3471 36.3886 23.6388 36.3192 23.9304C36.2497 24.2221 36.1475 24.5008 36.0125 24.7667C34.5872 27.5003 32.6385 29.6485 30.1663 31.2113C27.6943 32.774 24.9826 33.5554 22.0312 33.5554ZM22.065 28.5346C23.5911 28.5346 24.8911 27.9988 25.965 26.9271C27.0392 25.8554 27.5763 24.5617 27.5763 23.0458C27.5763 21.5197 27.0401 20.2197 25.9679 19.1458C24.8954 18.0717 23.5956 17.5346 22.0683 17.5346C20.5411 17.5346 19.244 18.0707 18.1771 19.1429C17.1099 20.2154 16.5763 21.5153 16.5763 23.0425C16.5763 24.5697 17.1121 25.8668 18.1837 26.9338C19.2554 28.001 20.5492 28.5346 22.065 28.5346ZM22.0554 25.8958C21.2546 25.8958 20.581 25.6217 20.0346 25.0733C19.4882 24.525 19.215 23.8524 19.215 23.0554C19.215 22.2546 19.4892 21.574 20.0375 21.0138C20.5858 20.4535 21.2585 20.1733 22.0554 20.1733C22.8563 20.1733 23.5368 20.4515 24.0971 21.0079C24.6574 21.5643 24.9375 22.2468 24.9375 23.0554C24.9375 23.8563 24.6593 24.5299 24.1029 25.0763C23.5465 25.6226 22.864 25.8958 22.0554 25.8958ZM40.1108 7.63875V11.3333C40.1108 11.7036 39.981 12.0149 39.7213 12.2671C39.4613 12.5196 39.1497 12.6458 38.7867 12.6458C38.4236 12.6458 38.1138 12.5196 37.8571 12.2671C37.6004 12.0149 37.4721 11.7036 37.4721 11.3333V7.63875H33.7775C33.4072 7.63875 33.096 7.50875 32.8438 7.24875C32.5912 6.98903 32.465 6.67764 32.465 6.31458C32.465 5.95153 32.5912 5.64167 32.8438 5.385C33.096 5.12833 33.4072 5 33.7775 5H37.4721C38.184 5 38.8018 5.26181 39.3254 5.78542C39.849 6.30903 40.1108 6.92681 40.1108 7.63875ZM6.63875 5H10.3333C10.7036 5 11.0172 5.12931 11.2742 5.38792C11.5311 5.64625 11.6596 5.95597 11.6596 6.31709C11.6596 6.68903 11.5311 7.00222 11.2742 7.25667C11.0172 7.51139 10.7036 7.63875 10.3333 7.63875H6.63875V11.3333C6.63875 11.7036 6.50875 12.0149 6.24875 12.2671C5.98903 12.5196 5.67764 12.6458 5.31458 12.6458C4.95153 12.6458 4.64167 12.5196 4.385 12.2671C4.12833 12.0149 4 11.7036 4 11.3333V7.63875C4 6.92681 4.26181 6.30903 4.78542 5.78542C5.30903 5.26181 5.92681 5 6.63875 5Z"
                fill="#B8CBFC"
            />
            <path
                d="M32.4279 33.3882L30.8489 31.8373C30.6384 31.6359 30.3981 31.533 30.1281 31.5284C29.8581 31.5239 29.6178 31.6268 29.4073 31.8373C29.1968 32.0477 29.0892 32.2879 29.0846 32.5578C29.0801 32.8278 29.183 33.068 29.3936 33.2784L31.6865 35.5706C31.897 35.781 32.1418 35.8863 32.421 35.8863C32.7002 35.8863 32.945 35.781 33.1556 35.5706L37.5903 31.1373C37.7917 30.9268 37.8946 30.6843 37.8992 30.4098C37.9038 30.1353 37.8008 29.8928 37.5903 29.6824C37.3798 29.4719 37.1372 29.3667 36.8626 29.3667C36.588 29.3667 36.3455 29.4719 36.1349 29.6824L32.4279 33.3882ZM33.5674 41.1294C31.1784 41.1294 29.1533 40.299 27.492 38.6382C25.8307 36.9775 25 34.9529 25 32.5647C25 30.1765 25.8307 28.152 27.492 26.4912C29.1533 24.8304 31.1784 24 33.5674 24C35.9564 24 37.9793 24.8304 39.6361 26.4912C41.2928 28.152 42.1212 30.1765 42.1212 32.5647C42.1212 33.5712 41.9633 34.5206 41.6475 35.4127C41.3317 36.3049 40.8855 37.117 40.3088 37.849L44.4554 42.0588C44.6567 42.2601 44.7597 42.498 44.7643 42.7725C44.7689 43.0471 44.6659 43.2895 44.4554 43.5C44.2448 43.7105 44.0023 43.8157 43.7277 43.8157C43.4531 43.8157 43.2105 43.7105 43 43.5L38.8535 39.3039C38.1212 39.8804 37.3088 40.3288 36.4164 40.649C35.524 40.9693 34.5743 41.1294 33.5674 41.1294Z"
                fill="#2D65F2"
                fillOpacity="0.5"
            />
        </svg>
    );
};
const NoHardware = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
        >
            <path
                d="M9.64844 35.4769V27.8229H15.9268L22.6245 21.1223V15.7746C21.6734 15.4403 20.8959 14.8757 20.2919 14.0807C19.6879 13.2858 19.3859 12.3908 19.3859 11.3959C19.3859 10.1139 19.8351 9.02429 20.7336 8.12707C21.6324 7.22986 22.7236 6.78125 24.0071 6.78125C25.2908 6.78125 26.3784 7.22959 27.2697 8.12627C28.161 9.02295 28.6067 10.1119 28.6067 11.3931C28.6067 12.392 28.3091 13.2885 27.7139 14.0823C27.119 14.8762 26.346 15.4403 25.3949 15.7746V21.1223L32.0722 27.8229H38.3441V35.4769H30.6976V30.4777L23.9963 23.7971L17.295 30.4777V35.4769H9.64844Z"
                fill="#B8CBFC"
            />
            <path
                d="M24.0046 46C20.9588 46 18.1013 45.4171 15.432 44.2513C12.7627 43.0856 10.4355 41.5033 8.45057 39.5045C6.46562 37.5057 4.89429 35.1639 3.73658 32.4788C2.57886 29.7943 2 26.9216 2 23.8608C2 18.4866 3.68505 13.7555 7.05516 9.66745C10.4253 5.57896 14.7453 3.02727 20.0154 2.01239C20.4186 1.96237 20.7825 2.06385 21.1072 2.31685C21.4316 2.57026 21.5937 2.9078 21.5937 3.32947C21.5937 3.65481 21.5069 3.92827 21.3332 4.14985C21.1596 4.37102 20.9506 4.48532 20.7064 4.49276C16.0431 5.23936 12.184 7.44668 9.12919 11.1147C6.07438 14.7824 4.54698 19.0311 4.54698 23.8608C4.54698 29.2754 6.44263 33.8914 10.2339 37.7087C14.0249 41.5264 18.6151 43.4353 24.0046 43.4353C26.8685 43.4353 29.6232 42.8276 32.2687 41.6122C34.9138 40.3964 37.1644 38.6955 39.0204 36.5095C39.1867 36.2622 39.4162 36.1083 39.7089 36.0475C40.0016 35.9867 40.2648 36.0252 40.4984 36.1628C40.8436 36.3551 41.0218 36.6709 41.0329 37.1103C41.0444 37.5498 40.9026 37.9679 40.6074 38.3648C38.4939 40.8695 36.0178 42.7683 33.1789 44.061C30.3404 45.3537 27.2824 46 24.0046 46ZM43.4986 23.8515C43.4986 19.0817 41.9683 14.8715 38.9078 11.2208C35.8476 7.5705 31.9896 5.33423 27.3337 4.51198C27.0734 4.47726 26.8531 4.3551 26.6729 4.14551C26.4927 3.93592 26.4026 3.667 26.4026 3.33877C26.4026 2.93075 26.5639 2.60478 26.8866 2.36088C27.2093 2.11697 27.5825 2.01445 28.0061 2.05331C33.1424 2.91896 37.4255 5.4136 40.8555 9.53723C44.2852 13.6609 46 18.4089 46 23.7814C46 25.1167 45.8974 26.4104 45.6921 27.6626C45.4864 28.9152 45.1724 30.083 44.7499 31.1661C44.5898 31.5452 44.3406 31.8168 44.0023 31.9809C43.664 32.1446 43.304 32.1446 42.9222 31.9809C42.6295 31.8445 42.4256 31.6434 42.3107 31.3776C42.1962 31.1122 42.2134 30.8234 42.3624 30.5113C42.7061 29.4662 42.9813 28.3792 43.1882 27.2502C43.3951 26.1212 43.4986 24.9883 43.4986 23.8515Z"
                fill="#2D65F2"
                fillOpacity="0.5"
            />
        </svg>
    );
};
