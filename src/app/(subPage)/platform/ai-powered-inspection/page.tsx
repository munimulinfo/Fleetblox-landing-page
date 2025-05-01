import RightArrowIcon from "@/components/icons/RightArrowIcon";

import Image from "next/image";
import Link from "next/link";
import proofOfCondition from "../icons/proofofCondition";
import stayCompliant from "../icons/stayCompliant";
import zeroPaper from "../icons/zeroPaper";

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

    const cardData = [
        {
            title: "Assign a Technician",
            description: "Choose a team member or partner to handle the inspection.",
            image: "/images/ai-powered-inspection.png",
        },
        {
            title: "Perform the Inspection",
            description: "Complete the digital checklist, capture photos, and test the vehicle’s performance.",
            image: "/images/ai-powered-inspection2.png",
        },
        {
            title: "Generate Report",
            description: "Generate a seamless report showcasing the full status and condition of your vehicle.",
            image: "/images/ai-powered-inspection3.png",
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
            <section className=" bg-[#FAFAFF] mx-auto w-full my-10 py-16 lg:my-[100px] px-5">
                <div className="max-w-[1200px] mx-auto w-full">
                    <div className="max-w-[840px] mx-auto w-full text-center">
                        <h1 className="text-[#04082C] text-[28px] lg:text-[36px] font-bold text-center leading-[1.1] mb-[10px]">
                            Simplify Inspections in 3 Easy Steps
                        </h1>
                        <p className="text-[#333] text-[16px] leading-6 font-openSans">
                            Quick, accurate, and AI-powered inspections with easy steps for <br />
                            complete vehicle health
                        </p>
                    </div>
                    {/* stepper */}
                    <div className="flex items-center my-5 justify-center gap-4">
                        <div className="border border-[#0336BC] w-10 h-10 font-bold font-openSans flex items-center justify-center text-[#0336BC] rounded-full">1</div>
                        <div className="border w-80 border-dashed border-[#B8CBFC]"></div>

                        <div className="border border-[#0336BC] w-10 h-10 font-bold font-openSans flex items-center justify-center text-[#0336BC] rounded-full">2</div>
                        <div className="border w-80 border-dashed border-[#B8CBFC]"></div>

                        <div className="border border-[#0336BC] w-10 h-10 font-bold font-openSans flex items-center justify-center text-[#0336BC] rounded-full">3</div>
                    </div>
                    <div className="flex items-center my-8 justify-center gap-4">

                        {cardData.map((item, index) => (
                            <FeatureCard
                                key={index}
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                className="max-w-[380px] h-[500px] shadow-2xl rounded-2xl  w-full"
                            />
                        ))}
                    </div>
                </div>

            </section>
            {/* why Cloud section end */}
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

const FeatureCard = ({
    title,
    description,
    image,
    className = "",
}: {
    title: string;
    description: string;
    image: string;
    className?: string;
}) => {
    return (
        <div className={`flex relative ${className}`}>
            {/* <div className="absolute top-[8px] left-[8px] right-[8px] z-[10] rounded-[24px] bg-[rgba(0,0,0,0.08)] blur-[10px] h-[calc(100%+8px)]"></div> */}
            {/* right card */}
            <div className="z-50 p-[30px] bg-white w-full rounded-[16px] flex flex-col">

                <h2 className="text-black text-[18px] font-bold font-openSans mt-[10px] mb-[5px]">
                    {title}
                </h2>
                <p className="text-[#7D7D7D] font-openSans text-left text-[14px] leading-5">
                    {description}
                </p>
                <div className="w-full flex items-center justify-center mt-4">
                    <Image
                        src={image}
                        alt={title}
                        width={500}
                        height={500}
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
}