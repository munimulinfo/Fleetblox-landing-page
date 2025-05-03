import RightArrowIcon from "@/components/icons/RightArrowIcon";
import ReducedDowntime from "@/components/icons/solution/MaintenanceDiagnostics/ReducedDowntime";
import CentralizedControlIcon from "@/components/icons/solution/remoteScalability/CentralizedControlIcon";
import FeatureCard from "@/components/ui/FeatureCard";
import Image from "next/image";
import Link from "next/link";
import image1 from "../../../../../public/brand/Frame 1707481648.svg";
import image2 from "../../../../../public/brand/Frame 1707481652.svg";
import image3 from "../../../../../public/brand/Frame 1707481662.png";
import image4 from "../../../../../public/brand/Frame 1707481651.svg";
import image5 from "../../../../../public/brand/Frame 1707481669.svg";
import image6 from "../../../../../public/brand/Frame 1707481649.png";
import image7 from "../../../../../public/brand/Frame 1707481650.svg";
import image8 from "../../../../../public/brand/Frame 1707481653.svg";
import image9 from "../../../../../public/brand/Frame 1707481670.png";
import image10 from "../../../../../public/brand/Frame 1707481671.svg";
import image11 from "../../../../../public/brand/Frame 1707481655.svg";
import image12 from "../../../../../public/brand/Frame 1707481668.svg";
import image13 from "../../../../../public/brand/Frame 1707481656.svg";
import image14 from "../../../../../public/brand/Frame 1707481664.svg";
import image15 from "../../../../../public/brand/Frame 1707481654.svg";
import image16 from "../../../../../public/brand/Frame 1707481666.svg";
import image17 from "../../../../../public/brand/Frame 1707481672.svg";
import image18 from "../../../../../public/brand/Frame 1707481657.svg";
import image19 from "../../../../../public/brand/Frame 1707481658.svg";
import image20 from "../../../../../public/brand/Frame 1707481665.svg";
import image21 from "../../../../../public/brand/Frame 1707481659.svg";
import image22 from "../../../../../public/brand/Frame 1707481660.svg";
import image23 from "../../../../../public/brand/Frame 1707481663.svg";
import image24 from "../../../../../public/brand/Frame 1707481673.svg";
import image25 from "../../../../../public/brand/Frame 1707481674.svg";
import image26 from "../../../../../public/brand/Frame 1707481675.svg";
import image27 from "../../../../../public/brand/Frame 1707481667.svg";
import image28 from "../../../../../public/brand/Frame 1707481676.svg";
import image29 from "../../../../../public/brand/Frame 1707481677.svg";
import image30 from "../../../../../public/brand/Frame 1707481678.svg";
import image31 from "../../../../../public/brand/Frame 1707481679.svg";
import image32 from "../../../../../public/brand/Frame 1707481680.svg";
import image33 from "../../../../../public/brand/Frame 1707481661.svg";
const page = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
    image27,
    image28,
    image29,
    image30,
    image31,
    image32,
    image33,
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
      <section className="bg-[#FAFAFF] pt-[100px] lg:pt-[120px] pb-[30px] ">
        <div className="lg:max-w-[calc(100vw-30px)] xxl:max-w-[1440px] mx-auto w-full flex flex-col px-5 lg:flex-row items-center justify-between">
          <div className="lg:pl-[130px] max-w-[700px] w-full">
            <h3 className="text-[#0336BC] font-openSans font-bold text-[22px] w-full">
              Dynamic Maintenance
            </h3>
            <h1 className="text-[#04082C] text-[36px] lg:text-[50px] font-bold leading-[1.1] w-full">
              Smarter Maintenance That Thinks Ahead
            </h1>
            <p className="text-[#333] text-[16px] leading-6 mt-[10px] lg:mt-4 mb-5 font-openSans">
              Optimize your fleet’s performance and increase revenue with
              intelligent maintenance that keeps your vehicles running smoothly.
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
              src="/images/features/maintenance-hero.svg"
              alt="Remote Scalability Hero"
              width={700}
              height={491}
              className="object-contain w-full"
            />
          </div>
        </div>
      </section>
      {/* Fleet management section */}
      <section className="py-[80px]">
        <div className="max-w-[840px] mx-auto w-full text-center">
          <h2 className="text-[#04082C] text-[28px] lg:text-[36px] font-bold text-center leading-[1.1] mb-[10px]">
            Smart Maintenance, Stronger Fleets
          </h2>
          <p className="text-[#333] text-[16px] leading-6 font-openSans">
            Ensure optimal fleet health and unlock maximum uptime.
          </p>
        </div>
        <div className="mt-[60px] grid grid-cols-1 lg:grid-cols-3 max-w-[1200px] mx-auto w-full px-5 gap-4">
          <div className="p-10 text-center flex flex-col items-center rounded-[16px] border border-[#DFDFDF]">
            <FleetMonitoringAlertIcon />
            <h4 className="text-[#333] text-[22px] font-bold font-openSans mt-4">
              24/7 Fleet Monitoring
            </h4>
          </div>
          <div className="p-10 text-center flex flex-col items-center rounded-[16px] border border-[#DFDFDF]">
            <PredictiveDiagonosticIcon />
            <h4 className="text-[#333] text-[22px] font-bold font-openSans mt-4">
              Predictive Diagnostics
            </h4>
          </div>
          <div className="p-10 text-center flex flex-col items-center rounded-[16px] border border-[#DFDFDF]">
            <IntelligenceAlertIcon />
            <h4 className="text-[#333] text-[22px] font-bold font-openSans mt-4">
              Intelligent Alerts
            </h4>
          </div>
        </div>
      </section>
      {/* how to connect and connect step started */}
      <section className="bg-[#FAFAFF] py-[100px]">
        <h3 className="text-[#04082C] text-[36px] font-bold leading-[1.1] text-center ">
          Simplify Maintenance in 3 Easy Steps
        </h3>
        <p className="text-[#333] text-[16px] mt-[10px] leading-6 text-center font-openSans">
          Fast, precise, and AI-driven maintenance that ensures your fleet
          operates at peak performance.
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
                  Choose a team member or partner to handle the maintenance.
                </p>
              </div>
              <div className="w-full mt-10 ">
                <Image
                  src="/images/features/assignTecnisian.svg"
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
                  Perform the Maintenance
                </h3>
                <p className="text-[14px] text-[#7D7D7D] leading-5 mt-[5px]">
                  Follow digital guidelines to complete vehicle maintenance as
                  specified by the owner.
                </p>
              </div>
              <div className="w-full mt-10">
                <Image
                  src="/images/features/platformMaintenance.svg"
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
                  Approve or Resend
                </h3>
                <p className="text-[14px] text-[#7D7D7D] leading-5 mt-[5px]">
                  Review what has been done and other details and approve
                  completion or request rechecks.
                </p>
              </div>
              <div className="w-full mt-10 overflow-hidden">
                <Image
                  src="/images/features/approvedOrResend.svg"
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
      {/* how fleetblox connected section */}
      <section className="py-[100px] ">
        <div className="max-w-[840px] w-full mx-auto text-center px-5">
          <h3 className="text-[#04082C] text-[18px] md:text-[36px] font-bold leading-[1.1]">
            Optimized Maintenance Workflow that Reduces Downtime
          </h3>
          <p className="text-[#333] text-[16px] font-normal leading-6 font-openSans mt-[5px] ">
            Minimize downtime with predictive alerts, custom workflows, and
            quick repairs for efficient fleet management.
          </p>
        </div>
        <div className="max-w-[1200px] hidden md:block w-full mx-auto mt-[60px] px-5">
          <Image
            src="/images/features/optimizedMaintenanceWorkflow.svg"
            alt="Remote Scalability Hero"
            width={700}
            height={491}
            className="object-contain w-full"
            quality={100}
          />
        </div>
        <div className="max-w-[1200px] md:hidden block w-full mx-auto mt-[40px] px-5">
          <Image
            src="/images/features/optimizedMaintenanceWorkflowMobile.svg"
            alt="Remote Scalability Hero"
            width={700}
            height={491}
            className="object-contain w-full"
            quality={100}
          />
        </div>
      </section>
      {/* why fleet owner partner section*/}
      <section className="max-w-[1200px] mx-auto w-full mb-[60px] px-5">
        <h1 className="mb-[40px] lg:mb-[60px] text-center max-w-[840px] w-full mx-auto text-[#04082C] text-[28px] lg:text-[36px] font-bold">
          Keep Fleets Fit, Keep Profits Up
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
              className={`w-full ${
                index === 4 && "md:col-span-2 md:max-w-[380px] mx-auto"
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
      {/* vehicle might be smarter section */}
      {/* <section className="pt-[100px]">
        <div className="z-[100] mx-auto max-w-[1300px] lg:w-[1000px] 2xl:w-[1300px] space-y-[20px] overflow-hidden">
          <div className="relative z-[1000] px-5 max-w-[840px] w-full mx-auto text-center">
            <h1 className="font-montserrat text-[#04082C] text-[28px] md:text-[36px] font-bold  text-center leading-[1.1]">
              Your Vehicles Might Be Smarter <br /> Than You Think
            </h1>
            <p className="mt-[10px] text-[#333] text-[16px] font-normal leading-6 font-openSans mb-5">
              Check your fleet’s compatibility and take the first step toward
              smarter, cloud-powered solutions designed for greater efficiency,
              flexibility, and future readiness.
            </p>
            <Link href={"/under-development"}>
              <button className="bg-[#2D65F2] rounded-[6px] px-5 py-3 text-white font-openSans text-[16px] font-bold">
                Check Compatibility
              </button>
            </Link>
          </div>
          <div className="flex relative h-[376px] w-full items-center justify-center overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute mt-[450px] h-[916px] object-cover"
            >
              <source src="/videos/global.webm" type="video/webm" />
              <source src="/videos/global.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="mx-auto relative -mt-[88px] lg:-mt-[80px] xl:-mt-[90px] xxl:-mt-[100px] w-full lg:w-[1000px] 2xl:w-[1300px] overflow-hidden whitespace-nowrap">
          <div className="flex animate-scroll items-center space-x-3 md:space-x-8">
            {images.map((image, index) => (
              <div key={index} className="z-[1000] flex-shrink-0">
                <Image
                  src={image}
                  alt="image"
                  className="z-[1000] mix-blend-multiply w-[80px] xl:w-[80%] 2xl:w-[90%]"
                />
              </div>
            ))}
          </div>
          <div className="to-transparent absolute hidden md:block left-0 top-0 z-[1001] h-full w-32 bg-gradient-to-r from-white"></div>
          <div className="to-transparent absolute hidden md:block right-0 top-0 z-[1001] h-full w-32 bg-gradient-to-l from-white"></div>
        </div>
      </section> */}
    </div>
  );
};

export default page;

const FleetMonitoringAlertIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="53"
      height="53"
      viewBox="0 0 53 53"
      fill="none"
    >
      <path
        d="M12.3091 47.6018C12.4622 47.9731 12.535 48.3683 12.535 48.7715C12.535 49.1106 12.4784 49.4492 12.3738 49.7882C11.9301 51.063 10.7361 51.9099 9.39651 51.9099C8.57382 51.9099 7.77492 51.5871 7.16967 50.9983C6.57286 50.4011 6.25 49.6108 6.25 48.7715C6.25 47.9322 6.57286 47.1419 7.16159 46.5447C7.7669 45.9555 8.55722 45.625 9.39649 45.625C10.2277 45.625 11.0342 45.964 11.6153 46.5527C11.8973 46.8271 12.1394 47.1819 12.3091 47.6018Z"
        fill="#2D65F2"
        fillOpacity="0.5"
      />
      <path
        d="M28.5525 46.7224C29.1578 47.3107 29.4803 48.1019 29.4803 48.9492C29.4803 49.7966 29.1578 50.5869 28.5525 51.1761C27.9634 51.7652 27.1726 52.0957 26.3337 52.0957C25.4945 52.0957 24.7041 51.7648 24.1069 51.1761C23.5177 50.5707 23.1953 49.7804 23.1953 48.9492C23.1953 47.634 24.018 46.448 25.2443 46.0043C25.9624 45.738 26.7613 45.7461 27.4388 46.0124C27.8344 46.1574 28.2134 46.3914 28.5525 46.7224Z"
        fill="#2D65F2"
        fillOpacity="0.5"
      />
      <path
        d="M46.4256 48.7715C46.4256 49.6188 46.1027 50.4092 45.4978 50.9983C44.9087 51.5875 44.1179 51.9099 43.2791 51.9099C42.4479 51.9099 41.6413 51.5781 41.0522 50.9983C40.7213 50.6512 40.4631 50.2399 40.3099 49.7881C40.1968 49.4491 40.1406 49.1105 40.1406 48.7715C40.1406 48.3763 40.2134 47.9807 40.3584 47.6017C40.8425 46.3996 41.9881 45.625 43.279 45.625C44.1098 45.625 44.9006 45.9559 45.4978 46.5447C46.1031 47.1338 46.4256 47.9246 46.4256 48.7715Z"
        fill="#2D65F2"
        fillOpacity="0.5"
      />
      <path
        d="M12.3656 2.30929C12.4784 2.64832 12.5349 2.98692 12.5349 3.32594C12.5349 3.7292 12.4622 4.1248 12.3091 4.49572C11.8331 5.67355 10.6633 6.46436 9.39651 6.46436C8.5734 6.46436 7.77492 6.1415 7.16967 5.55277C6.57286 4.95553 6.25 4.1652 6.25 3.32593C6.25 2.48666 6.57286 1.69628 7.16159 1.09909C7.76691 0.509933 8.55722 0.1875 9.39649 0.1875C10.2277 0.1875 11.0342 0.518449 11.6153 1.10717C11.9543 1.4462 12.204 1.84946 12.3656 2.30929Z"
        fill="#2D65F2"
        fillOpacity="0.5"
      />
      <path
        d="M28.5601 0.927729C29.1574 1.52497 29.4798 2.30724 29.4798 3.14651C29.4798 4.45371 28.6571 5.63155 27.4308 6.09142C27.0756 6.22031 26.7127 6.28496 26.3418 6.28496C25.9543 6.28496 25.5834 6.2203 25.2363 6.08333C24.833 5.93828 24.4455 5.69623 24.115 5.37337C23.5177 4.77614 23.1953 3.9858 23.1953 3.14653C23.1953 2.30726 23.5182 1.51688 24.1069 0.927751C24.7122 0.330514 25.5025 0 26.3418 0C27.1726 0 27.9791 0.338584 28.5601 0.927729Z"
        fill="#2D65F2"
        fillOpacity="0.5"
      />
      <path
        d="M46.4256 3.32203C46.4256 4.16938 46.1027 4.95973 45.4978 5.54887C44.9006 6.1461 44.1179 6.46854 43.2791 6.46854C42.4559 6.46854 41.6494 6.13759 41.0522 5.54887C40.7455 5.22601 40.5116 4.87123 40.3665 4.48372C40.2134 4.12087 40.1406 3.72527 40.1406 3.322C40.1406 2.98297 40.1972 2.64437 40.3019 2.30535C40.7374 1.03049 41.9315 0.183594 43.2791 0.183594C44.1099 0.183594 44.9007 0.506453 45.4979 1.09518C46.1032 1.68434 46.4256 2.47513 46.4256 3.32203Z"
        fill="#2D65F2"
        fillOpacity="0.5"
      />
      <path
        d="M52.2744 25.8744C52.2097 25.7774 45.2956 16.604 35.7188 12.4005V5.62338C35.7188 5.10697 36.1382 4.67946 36.6546 4.67946H39.793C39.6237 4.28428 39.5348 3.81636 39.5348 3.32423C39.5348 2.93713 39.5995 2.53345 39.7203 2.13017C39.7203 2.12209 39.7283 2.11401 39.7283 2.10593H36.6545C34.7102 2.10593 33.1285 3.67938 33.1285 5.62385V11.4166C31.2807 10.8113 29.4414 10.4485 27.6339 10.3353L27.6343 6.65623C27.2149 6.80936 26.787 6.89019 26.3434 6.89019C25.8835 6.89019 25.4479 6.81745 25.0442 6.65623V10.3353C23.2367 10.4485 21.3894 10.8032 19.5496 11.4086L19.55 5.62339C19.55 3.67903 17.9688 2.10547 16.024 2.10547H12.9421C13.0791 2.51681 13.1438 2.9205 13.1438 3.32381C13.1438 3.79981 13.0629 4.25965 12.8856 4.67904H16.024C16.5404 4.67904 16.9598 5.10655 16.9598 5.62296V12.392C7.38329 16.596 0.469515 25.7777 0.396554 25.8746C0.315732 25.9797 0.315732 26.1247 0.396554 26.2298C0.469294 26.3268 7.3834 35.5001 16.9609 39.7113V46.4723C16.9609 46.9887 16.5415 47.4081 16.0251 47.4081H12.8866C13.064 47.8275 13.1449 48.2874 13.1449 48.7715C13.1449 49.1586 13.0802 49.5623 12.9594 49.9656C12.9594 49.9736 12.9513 49.9817 12.9513 49.9898H16.0252C17.9695 49.9898 19.5511 48.4163 19.5511 46.4719L19.5507 40.6871C21.3905 41.2844 23.246 41.6472 25.0453 41.7604V45.4395C25.4567 45.2863 25.8923 45.2055 26.3445 45.2055C26.7962 45.2055 27.2318 45.2863 27.6354 45.4395V41.7604C29.4429 41.6472 31.2822 41.2844 33.1301 40.6871V46.4719C33.1301 48.4162 34.7113 49.9898 36.6561 49.9898H39.738V49.9817C39.6006 49.5785 39.5363 49.1748 39.5363 48.7715C39.5363 48.3036 39.6252 47.8438 39.7864 47.4081H36.6561C36.1316 47.4081 35.7041 46.9887 35.7041 46.4723V39.7033C45.2892 35.5078 52.2031 26.3263 52.2761 26.2294C52.356 26.1243 52.356 25.9793 52.2752 25.8742M26.3381 36.5555C20.658 36.5555 16.0473 31.9444 16.0473 26.2647C16.0473 20.5846 20.6584 15.9739 26.3381 15.9739C32.0182 15.9739 36.6289 20.5851 36.6289 26.2647C36.6293 31.9448 32.0182 36.5555 26.3381 36.5555Z"
        fill="#2D65F2"
        fillOpacity="0.5"
      />
      <path
        d="M29.5289 25.352C28.2702 25.352 27.2455 24.3272 27.2455 23.0766C27.2455 22.544 27.4309 22.0195 27.77 21.6243C27.3182 21.4712 26.8341 21.3984 26.3338 21.3984C23.6471 21.3984 21.4688 23.5849 21.4688 26.2635C21.4688 28.9502 23.6471 31.1367 26.3338 31.1367C29.0206 31.1367 31.207 28.9502 31.207 26.2635C31.207 25.7633 31.1343 25.2792 30.9811 24.8274C30.5774 25.1664 30.061 25.3519 29.5289 25.3519"
        fill="#2D65F2"
        fillOpacity="0.5"
      />
      <path
        d="M29.5297 21.3984C29.0861 21.3984 28.6824 21.5677 28.3841 21.8583C28.0532 22.1569 27.8516 22.5925 27.8516 23.0766C27.8516 23.9963 28.61 24.7467 29.5297 24.7467C30.0057 24.7467 30.4413 24.545 30.748 24.2222C31.0385 23.9316 31.2078 23.5203 31.2078 23.0766C31.2078 22.1488 30.4575 21.3984 29.5297 21.3984Z"
        fill="#2D65F2"
        fillOpacity="0.5"
      />
    </svg>
  );
};
const IntelligenceAlertIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="53"
      height="53"
      viewBox="0 0 53 53"
      fill="none"
    >
      <path
        d="M14.9145 12.5947C14.6254 12.8848 14.5531 13.32 14.8422 13.6102C15.7096 14.5532 16.9378 15.278 18.4558 15.6406C17.9498 16.5111 17.2269 18.1064 17.4438 19.9923C17.6606 21.7327 18.6726 23.3286 20.4068 24.6336C20.5514 24.7062 20.6959 24.7787 20.8405 24.7787C21.0573 24.7787 21.2742 24.7062 21.4188 24.4886C21.6356 24.1984 21.6356 23.6906 21.2742 23.473C19.8285 22.3849 19.034 21.1524 18.8894 19.8467C18.6003 17.7437 19.9737 15.9302 19.9737 15.9302H20.8411C23.2258 15.9302 25.3214 14.4075 26.6226 12.594V30.9421C24.1656 31.0872 17.5889 30.9421 16.0715 26.3734C15.9269 26.0107 15.4932 25.7931 15.1318 25.9381C14.7704 26.0832 14.5535 26.5185 14.6981 26.8812C15.0595 27.8967 15.6378 28.7666 16.2878 29.492C14.9144 30.0723 11.4459 31.9578 9.78336 37.3245C9.63879 37.6872 9.85564 38.1224 10.2171 38.2675H10.4339C10.723 38.2675 11.0122 38.0499 11.0845 37.7597C12.891 31.9577 17.0105 30.7246 17.2274 30.7246C17.2997 30.7246 17.4442 30.6521 17.5165 30.5795C19.9013 32.1748 23.1535 32.5376 25.3937 32.5376H26.6225V47.0422C26.6225 47.3324 26.6225 47.6225 26.5502 47.8401C26.1888 50.2334 24.0208 52.0469 21.5638 52.0469C20.1904 52.0469 18.9621 51.5391 18.0224 50.5241C18.0947 49.2185 18.7452 44.1419 23.8763 43.6342C24.2377 43.5616 24.5991 43.2715 24.5268 42.8362C24.4545 42.401 24.0931 42.1108 23.7317 42.1834C18.8898 42.6911 17.2996 46.5351 16.7936 48.9283C15.9262 47.55 14.9871 45.8822 14.5534 44.8666C15.3486 44.1413 16.8659 42.1832 17.8057 38.4844C17.8779 38.1217 17.6611 37.6864 17.2997 37.6139C16.9383 37.5414 16.5046 37.759 16.4323 38.1217C15.348 42.5453 13.3247 44.0686 13.3247 44.0686C13.1078 44.2862 12.891 44.4313 12.6741 44.5764C11.373 45.4469 9.92783 45.6645 8.55448 45.3018C7.25339 44.9391 6.1697 44.0686 5.51917 42.836C4.5072 40.878 4.79633 38.2673 6.16972 36.3812C6.38657 36.091 6.31429 35.5833 6.02516 35.3657C5.95288 35.2931 5.8806 35.2931 5.80831 35.2206C2.7007 33.3351 -0.623801 30.0714 1.18333 24.8498C1.97845 22.6017 3.56812 21.0058 5.59142 20.4262C6.02512 21.079 6.9648 22.2391 8.40985 22.8194C8.48213 22.8919 8.62669 22.8919 8.69898 22.8919C8.98811 22.8919 9.27723 22.7468 9.34953 22.4567C9.49409 22.094 9.34953 21.6587 8.98812 21.5137C7.39845 20.8608 6.60333 19.3381 6.60333 19.2656V19.193V19.1205C5.4468 17.5252 5.22995 15.204 5.8805 13.1735C6.38647 11.5782 7.54246 10.3451 8.77122 10.1275C9.56634 9.98242 10.3609 10.1275 11.0114 10.5627H11.0837C11.156 10.5627 11.156 10.6353 11.2283 10.6353H11.3005H11.3728H11.4451H11.5174C11.5174 10.6353 11.5897 10.6353 11.5897 10.5627C11.662 10.5627 11.662 10.4902 11.7342 10.4902C11.8065 10.4902 11.8065 10.4176 11.8788 10.3451L11.9511 10.2726C11.9511 10.2 11.9511 10.2 12.0234 10.1275C12.0234 10.055 12.0234 10.0549 12.0957 9.98241V9.83734V9.69226C11.8788 9.03941 11.8065 8.31403 11.8065 7.58926C11.8065 3.45509 15.2033 0.046875 19.3224 0.046875C23.2974 0.046875 26.6936 3.67318 26.6936 7.95188V9.03996C26.3322 11.143 23.7306 14.2615 20.912 14.2615C18.8887 14.2615 17.0093 13.5362 15.9979 12.3761C15.7093 12.3761 15.2033 12.3035 14.9142 12.5937L14.9145 12.5947Z"
        fill="#2D65F2"
        fillOpacity="0.5"
      />
      <path
        d="M44.1554 7.66016C41.6899 7.66016 39.6727 9.68409 39.6727 12.1579C39.6727 12.9226 39.852 13.5971 40.1657 14.2269L36.4451 18.0051H30.259C29.4969 18.0051 28.9141 18.5898 28.9141 19.3546C28.9141 20.1192 29.4969 20.704 30.259 20.704H36.983C37.3416 20.704 37.7002 20.5692 37.9244 20.2992L42.0933 16.1161C42.7211 16.4308 43.4383 16.6107 44.1553 16.6107C46.6208 16.6107 48.638 14.5868 48.638 12.1129C48.638 9.63942 46.6209 7.66016 44.1554 7.66016ZM44.1554 13.9573C43.169 13.9573 42.3625 13.1476 42.3625 12.1584C42.3625 11.1687 43.1695 10.3595 44.1554 10.3595C45.1417 10.3595 45.9482 11.1692 45.9482 12.1584C45.9487 13.1476 45.1417 13.9573 44.1554 13.9573Z"
        fill="#2D65F2"
        fillOpacity="0.5"
      />
      <path
        d="M52.6727 26.1032C52.6727 23.6294 50.6556 21.6055 48.1901 21.6055C46.173 21.6055 44.4695 22.9098 43.9316 24.7539H30.259C29.4969 24.7539 28.9141 25.3387 28.9141 26.1034C28.9141 26.8681 29.4969 27.4528 30.259 27.4528H43.9316C44.5144 29.2969 46.2178 30.6012 48.1901 30.6012C50.656 30.6012 52.6731 28.5773 52.6731 26.1035L52.6727 26.1032ZM48.1901 27.9022C47.2038 27.9022 46.3972 27.0924 46.3972 26.1032C46.3972 25.1136 47.2042 24.3043 48.1901 24.3043C49.1764 24.3043 49.9829 25.1141 49.9829 26.1032C49.9829 27.0924 49.1759 27.9022 48.1901 27.9022Z"
        fill="#2D65F2"
        fillOpacity="0.5"
      />
      <path
        d="M32.4983 10.3588C34.9638 10.3588 36.9809 8.3349 36.9809 5.86106C36.9809 3.38722 34.9638 1.36328 32.4983 1.36328C30.0327 1.36328 28.0156 3.38722 28.0156 5.86106C28.0156 8.3349 30.0327 10.3588 32.4983 10.3588ZM32.4983 4.06167C33.4846 4.06167 34.2911 4.87142 34.2911 5.8606C34.2911 6.85025 33.4841 7.65953 32.4983 7.65953C31.5119 7.65953 30.7054 6.84978 30.7054 5.8606C30.7054 4.87142 31.512 4.06167 32.4983 4.06167Z"
        fill="#2D65F2"
        fillOpacity="0.5"
      />
      <path
        d="M44.1553 44.5438C46.6208 44.5438 48.638 42.5199 48.638 40.046C48.638 37.5722 46.6208 35.5482 44.1553 35.5482C43.3932 35.5482 42.721 35.7281 42.0933 36.0428L37.9244 31.8598C37.7001 31.6348 37.3416 31.5 36.983 31.5H30.259C29.4969 31.5 28.9141 32.0848 28.9141 32.8495C28.9141 33.6141 29.4969 34.199 30.259 34.199H36.4451L40.2105 37.9771C39.8969 38.607 39.7176 39.3266 39.7176 40.0461C39.6727 42.5199 41.6897 44.5438 44.1553 44.5438ZM44.1553 38.2466C45.1416 38.2466 45.9482 39.0564 45.9482 40.0456C45.9482 41.0352 45.1412 41.8445 44.1553 41.8445C43.169 41.8445 42.3625 41.0348 42.3625 40.0456C42.3625 39.0564 43.169 38.2466 44.1553 38.2466Z"
        fill="#2D65F2"
        fillOpacity="0.5"
      />
      <path
        d="M36.9809 46.3415C36.9809 43.8677 34.9638 41.8438 32.4982 41.8438C30.0327 41.8438 28.0156 43.8677 28.0156 46.3415C28.0156 48.8154 30.0327 50.8393 32.4982 50.8393C34.9638 50.8398 36.9809 48.8154 36.9809 46.3415ZM30.7053 46.3415C30.7053 45.3519 31.5123 44.5426 32.4981 44.5426C33.4845 44.5426 34.291 45.3523 34.291 46.3415C34.291 47.3312 33.484 48.1405 32.4981 48.1405C31.5118 48.1409 30.7053 47.3312 30.7053 46.3415Z"
        fill="#2D65F2"
        fillOpacity="0.5"
      />
    </svg>
  );
};
const PredictiveDiagonosticIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="53"
      viewBox="0 0 52 53"
      fill="none"
    >
      <path
        d="M45.0794 43.8563L48.3742 40.5616L35.8225 30.25C35.246 31.1084 34.6037 31.9211 33.9062 32.6831L45.0794 43.8563Z"
        fill="#2D65F2"
        fillOpacity="0.52"
      />
      <path
        d="M43.809 45.1259L32.6363 33.9531C31.8743 34.6514 31.061 35.2932 30.2031 35.8698L40.5147 48.4215L43.809 45.1259Z"
        fill="#2D65F2"
        fillOpacity="0.52"
      />
      <path
        d="M51.4476 44.1299H51.4472C51.019 43.245 50.4304 42.4333 49.7305 41.7383L41.6875 49.7812C42.3822 50.4811 43.1942 51.0697 44.0791 51.498C46.191 52.5196 48.7241 52.0914 50.3828 50.4332C52.041 48.7746 52.4688 46.2414 51.4475 44.13L51.4476 44.1299Z"
        fill="#2D65F2"
        fillOpacity="0.52"
      />
      <path
        d="M46.1032 15.2148C44.4357 15.2148 43.0347 16.3607 42.6351 17.9045L37.4922 17.9049V19.6982H42.6351C43.0346 21.2424 44.436 22.3878 46.1032 22.3878C48.0804 22.3878 49.6894 20.7787 49.6894 18.8016C49.6894 16.824 48.0808 15.2148 46.1032 15.2148Z"
        fill="#2D65F2"
        fillOpacity="0.52"
      />
      <mask
        id="mask0_7777_36363"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="38"
        height="38"
      >
        <path d="M0 0.046875H37.5601V37.607H0V0.046875Z" fill="white" />
      </mask>
      <g mask="url(#mask0_7777_36363)">
        <path
          d="M7.09993 14.7673C9.01618 14.7673 10.6212 16.1115 11.0305 17.9052H14.4837L16.7366 12.0373C17.0305 11.2701 18.1619 11.2943 18.4235 12.0736L21.5985 21.5506L22.9895 18.4361C23.1339 18.1131 23.4544 17.9051 23.808 17.9051H28.8751L31.6034 11.9833C31.928 11.2797 32.9758 11.3108 33.2548 12.0369L35.5078 17.9047H37.4889C37.0184 7.97856 28.7964 0.046875 18.7548 0.046875C8.41287 0.046875 0 8.46077 0 18.8017C0 29.1436 8.41349 37.5575 18.7548 37.5575C28.7962 37.5575 37.0183 29.6254 37.4879 19.6986H34.8911C34.5197 19.6986 34.1871 19.47 34.0541 19.1232L32.3418 14.6641L30.2634 19.1773C30.117 19.495 29.7989 19.6986 29.449 19.6986H24.3899L22.2986 24.3827C21.9728 25.1137 20.8834 25.0593 20.6298 24.3017L17.517 15.0098L15.9373 19.1233C15.8042 19.4696 15.4712 19.6986 15.1003 19.6986H11.031C10.6218 21.4928 9.01631 22.8365 7.10048 22.8365C4.87573 22.8365 3.06589 21.0267 3.06589 18.8019C3.06549 16.578 4.8749 14.7673 7.10006 14.7673L7.09993 14.7673Z"
          fill="#2D65F2"
          fillOpacity="0.52"
        />
      </g>
      <path
        d="M9.37357 18.8038C9.37357 20.0419 8.37006 21.0454 7.13189 21.0454C5.89416 21.0454 4.89062 20.0419 4.89062 18.8038C4.89062 17.566 5.89413 16.5625 7.13189 16.5625C8.37003 16.5625 9.37357 17.566 9.37357 18.8038Z"
        fill="#2D65F2"
        fillOpacity="0.52"
      />
    </svg>
  );
};
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
