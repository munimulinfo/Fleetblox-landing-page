import RightArrowIcon from "@/components/icons/RightArrowIcon";
import Image from "next/image";
import Link from "next/link";
import GlobeSection from "@/components/modules/home/globe";
const AutoDealership = () => {

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

            {/* vehicle might be smarter section */}
            <GlobeSection
                title="Take Command of Your Fleet— Day One"
                description="Add your first vehicles today and watch your business expand with precision"
            />
        </div>
    );
};

export default AutoDealership;


