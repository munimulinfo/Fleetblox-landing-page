import RightArrowIcon from "@/components/icons/RightArrowIcon";
import TickIcon from "@/components/icons/TickIcon";
import FeatureCard from "@/components/ui/FeatureCard";
import { WhyComplianceAndSafetyData } from "@/Static_data/solution";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const items = [
    {
      id: 1,
      title: "Fleet Document System",
      description:
        "Easily store, manage, and access all necessary fleet documents, including registration, insurance, and compliance certifications.",
    },
    {
      id: 2,
      title: "Automated Document Alerts",
      description:
        "Receive notifications when documents are nearing expiration, ensuring you stay up-to-date on important compliance deadlines.",
    },
    {
      id: 3,
      title: "Driver Verification",
      description:
        "Securely verify driver credentials and certifications to ensure that only qualified individuals are operating your fleet vehicles.",
    },
    {
      id: 4,
      title: "Real-Time Compliance Tracking",
      description:
        "Monitor your fleet’s compliance status in real time, making it easy to spot any gaps and take corrective action promptly.",
    },
    {
      id: 5,
      title: "Issue Reporting System through Employee App",
      description:
        "Allow drivers and fleet managers to report safety concerns or incidents directly through the employee app. Streamline issue resolution and track safety performance in real time.",
    },
  ];
  return (
    <div>
      {/* hero section */}
      <section className="bg-[#FAFAFF] pt-[100px] lg:pt-[140px] pb-[30px] ">
        <div className="lg:max-w-[calc(100vw-30px)] xxl:max-w-[1440px] mx-auto w-full flex flex-col px-5 lg:flex-row items-center justify-between">
          <div className="lg:pl-[130px]">
            <h3 className="text-[#0336BC] font-openSans font-bold text-[22px]">
              Compliance and Safety
            </h3>
            <h1 className="text-[#04082C] text-[36px] lg:text-[52px] font-bold leading-[1.1]">
              Streamlined Document Management, Driver Verification, and Safety
              Tracking
            </h1>
            <p className="text-[#333] text-[16px] leading-6 mt-[10px] lg:mt-4 mb-5 font-openSans">
              Fleetblox’s Compliance and Safety Assurance tools simplify fleet
              document management and ensure your drivers meet all regulatory
              requirements. With an intuitive document system, secure driver
              verification, and an issue reporting system through the employee
              app.
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
              src="/images/compliance-and safety-hero.png"
              alt="compliance and safety"
              width={700}
              height={491}
              priority
              className="object-contain w-full"
            />
          </div>
        </div>
      </section>
      {/* hero section end */}
      <section className="max-w-[1200px] mx-auto w-full mt-[60px] lg:mt-[100px] px-5">
        <div className="max-w-[840px] mx-auto w-full text-center">
          <h2 className="text-[#04082C] text-[28px] lg:text-[36px] font-bold text-center leading-[1.1] mb-[10px]">
            Fleetblox Powers Proactive Safety & Seamless Compliance
          </h2>
          <p className="text-[#333] text-[16px] leading-6 font-openSans">
            Stay compliant and keep your fleet operating safely while minimizing
            risk.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center py-8 lg:py-[60px] justify-between">
          <div className="py-10">
            <Image
              src="/images/compliance-and safety2.png"
              alt="compliance and safety"
              width={600}
              height={387}
              priority
              className="object-contain w-full"
            />
          </div>
          <div className="flex flex-col w-[350px] md:w-[600px] mx-auto md:ml-10 gap-5">
            {items.map((item) => (
              <div key={item.id} className="flex items-center w-full gap-x-4">
                {/* Consistent icon container */}
                <div className="w-8 h-8 min-w-[32px]">
                  <TickIcon />
                </div>
                <div>
                  <h2 className="text-[18px] font-openSans font-bold text-[#333]">
                    {item.title}
                  </h2>
                  <p className="text-[#7D7D7D] leading-6 font-normal font-openSans text-[14px] ">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* why Cloud section */}
      <section className="max-w-[1200px] mx-auto w-full my-10 lg:my-[100px] lg:px-20 px-5">
        <h2 className="mb-[40px] lg:mb-[60px] text-center text-[#04082C] text-[28px] lg:text-[36px] font-bold">
          Why Compliance and Safety Assurance Matters
        </h2>
        <div className="lg:grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-[30px]">
          {WhyComplianceAndSafetyData?.map((data, index) => (
            <FeatureCard
              key={index}
              icon={<data.icon />}
              title={data.title}
              description={data.description}
              className="max-w-[500px] w-full mt-[30px] lg:mt-0"
            />
          ))}
        </div>
      </section>
      {/* why Cloud section end */}
    </div>
  );
};

export default page;
