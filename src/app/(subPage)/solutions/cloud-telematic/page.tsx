import RightArrowIcon from "@/components/icons/RightArrowIcon";
import TickIcon from "@/components/icons/TickIcon";
import FeatureCard from "@/components/ui/FeatureCard";
import { WhyCloudData } from "@/Static_data/solution";
import Image from "next/image";

const page = () => {
  const items = [
    {
      id: 1,
      title: "One-Click Connectivity",
      description:
        "Effortlessly  connect or disconnect vehicles in seconds—right from your dashboard.",
    },
    {
      id: 2,
      title: "Real-Time Data Updates",
      description:
        "Track vehicle location, performance, and status—anytime, anywhere",
    },
    {
      id: 3,
      title: "Global Accessibility",
      description:
        "Access fleet data anytime—at the office, at home, or on the go.",
    },
    {
      id: 4,
      title: "User-Friendly Interface",
      description:
        "Intuitive design lets fleet managers monitor and control everything from one place.",
    },
    {
      id: 5,
      title: "Instant Scalability",
      description:
        "Easily add or remove vehicles as your fleet grows—no hassle, just simple management.",
    },
  ];
  return (
    <div>
      {/* hero section */}
      <section className="bg-[#FAFAFF] pt-[140px] pb-[10px]">
        <div className="lg:max-w-[calc(100vw-30px)] xxl:max-w-[1440px] mx-auto w-full flex items-center justify-between">
          <div className="pl-[130px]">
            <h3 className="text-[#0336BC] font-openSans font-bold text-[22px]">
              Cloud Telematics
            </h3>
            <h1 className="text-[#04082C] text-[52px] font-bold leading-[1.1]">
              The Future of Fleet Management at Your Fingertips
            </h1>
            <p className="text-[#333] text-[16px] leading-6 mt-4 mb-5 font-openSans">
              Experience smarter fleet management with Fleetblox Cloud
              Telematics. Connect and control your fleet from anywhere in just a
              few clicks with our seamless, cloud-based solution.
            </p>
            <button className="transition-all bg-[#2D65F2] hover:bg-[#0336BC] font-openSans text-white-primary text-white duration-300 hover:w-[144.16px] w-[122.16px] flex items-center px-4 py-3 text-base font-bold rounded-md group">
              <div className="z-20 whitespace-nowrap">Start today</div>
              <div className="z-10 transform transition-transform opacity-0 group-hover:opacity-100 -translate-x-4 duration-300 group-hover:translate-x-0">
                <RightArrowIcon />
              </div>
            </button>
          </div>
          <div className=" w-full py-10 pl-[60px]">
            <Image
              src="/images/coludTalematics-hero.png"
              alt="AI assistant for fleet optimization"
              width={700}
              height={491}
              className="object-contain w-full"
            />
          </div>
        </div>
      </section>
      {/* hero section end */}
      <section className="max-w-[1200px] mx-auto w-full mt-[100px]">
        <div className="max-w-[840px] mx-auto w-full text-center">
          <h1 className="text-[#04082C] text-[36px] font-bold text-center leading-[1.1] mb-[10px]">
            How Cloud Telematics Sets Us Apart with Innovative Fleet Solutions
          </h1>
          <p className="text-[#333] text-[16px] leading-6 font-openSans">
            Unlocking the power of real-time data, advanced insights, and
            seamless fleet management for unmatched efficiency and control
          </p>
        </div>
        <div className="flex items-center py-[60px] justify-between">
          <div className="py-10">
            <Image
              src="/images/howTelamaticsSet.png"
              alt="AI assistant for fleet optimization"
              width={520}
              height={387}
              className="object-contain w-full"
            />
          </div>
          <div className="flex flex-col w-[350px] md:w-[600px] mx-auto md:ml-10 pt-10 gap-5">
            {items.map((item) => (
              <div key={item.id} className="flex items-center w-full gap-x-4">
                {/* Consistent icon container */}
                <div className="w-8 h-8 min-w-[32px]">
                  <TickIcon />
                </div>
                <div>
                  <h1 className="text-[18px] font-openSans font-bold text-[#333]">
                    {item.title}
                  </h1>
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
      <section className="max-w-[1200px] mx-auto w-full my-[100px]">
        <h1 className="mb-[60px] text-center text-[#04082C] text-[36px] font-bold">
          Why Cloud Telematics is the Future
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
          {WhyCloudData?.slice(0, 3).map((data, index) => (
            <FeatureCard
              key={index}
              icon={<data.icon />}
              title={data.title}
              description={data.description}
              className="w-[380px]"
            />
          ))}
        </div>
        <div className="flex justify-center mt-[30px] gap-[30px]">
          {WhyCloudData?.slice(3, 5).map((data, index) => (
            <FeatureCard
              key={index}
              icon={<data.icon />}
              title={data.title}
              description={data.description}
              className="w-[380px]"
            />
          ))}
        </div>
      </section>
      {/* why Cloud section end */}
    </div>
  );
};

export default page;
