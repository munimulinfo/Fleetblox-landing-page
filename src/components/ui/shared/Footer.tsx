import Image from "next/image";
import FooterLogo from "../../../../public/images/footerLogo.png";
import FacebookIcon from "@/components/icons/FacebookIcon";
// import InstagramIcon from "@/components/icons/InstagramIcon";
// import XIcon from "@/components/icons/XIcon";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import LinkdinIcon from "@/components/icons/LinkdinIcon";
import Link from "next/link";
import AppleStore from "@/components/icons/AppleStore";
import GoogleStore from "@/components/icons/GoogleStore";
import GoogleStoreMobile from "@/components/icons/GoogleStoreMobile";
const Footer = () => {
  return (
    <div className="bg-[#0A2540]">
      <div className="md:block h-auto w-full text-[#fff] max-w-[1440px] mx-auto px-4">
        <div className="">
          {/* animation */}
          <div className="relative flex flex-col items-center justify-center py-[120px]">
            <div className="max-w-[860px] w-full text-center z-[200] flex flex-col mt-[20px] lg:mt-[30px]">
              <h1 className="z-50 font-montserrat text-[28px] lg:text-[52px] font-bold mb-[32px] lg:mb-0 leading-[1.1]">
                Fleet Management Has Never Been This Easy
              </h1>

              <div className="md:flex hidden justify-center z-[100] lg:mt-8">
                <Link href="/getting-started">
                  <button className="transition-all bg-[#2D65F2] text-white-primary text-white duration-300 hover:w-[165.39px] w-[143.39px] flex items-center px-4 py-3 text-base font-bold rounded-md group">
                    <div className="z-20 whitespace-nowrap font-openSans">
                      Switch Today
                    </div>
                    {/* 143.39 */}
                    {/* hover:w-[165.39px]  */}
                    <div className="z-10 transform transition-transform opacity-0 group-hover:opacity-100 -translate-x-4 duration-300 group-hover:translate-x-0">
                      <RightArrowIcon />
                    </div>
                  </button>
                </Link>
              </div>
              <Link href="/getting-started">
                <button className="md:hidden bg-[#2D65F2] hover:bg-[#0336BC] text-white w-full flex px-4 py-3 text-[14px] font-openSans font-bold rounded-md justify-center">
                  Switch Today
                </button>
              </Link>
            </div>
            <div className="max-h-[520px] h-[400px] lg:h-[520px] md:h-[400px] filter blur-[210px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50  rounded-[520px] w-[400px] lg:w-[520px] bg-[#B8CBFC] absolute opacity-50 "></div>
            <div className="absolute z-[100] mix-blend-multiply -top-14 h-[500px] lg:h-[660px]">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="z-30 h-full object-cover object-center opacity-55 mix-blend-multiply"
              >
                <source src="/videos/Footer.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="flex items-center lg:items-start space-y-[30px] lg:space-y-0 lg:gap-[100px] gap-10 flex-col lg:flex-row justify-between mb-10 mt-[20px] lg:mt-[100px]">
            {/* logo section */}
            <div className="max-w-[400px] w-full flex flex-col lg:h-[400px] justify-between">
              <div className="cursor-pointer text-left space-y-[10px] ">
                <div className="flex justify-center lg:justify-start">
                  <Image src={FooterLogo} alt="footer_logo" />
                </div>
                <p className="mt-5 leading-6 text-[16px] font-openSans lg:block hidden">
                  Empowering Your Fleet With Artificial Intelligence. Cut Costs.
                  Minimize Downtime. Maximize Performance.
                </p>
              </div>
              <div className="hidden lg:block">
                <h2 className="mb-[10px] text-[14px] leading-5 text-[#DFDFDF] font-openSans">
                  Download Fleetblox Crew
                </h2>
                <div className="flex gap-[10px]">
                  <AppleStore />
                  <GoogleStore />
                </div>
              </div>
            </div>
            {/* pages section */}
            <div className=" grid grid-cols-2 lg:grid-cols-4 w-full  text-[16px] font-openSans font-normal text-white leading-6 gap-10 xl:gap-[60px]">
              {/* product section */}
              <div className="cursor-pointer text-[14px] leading-5">
                <h5 className=" font-openSans text-[#DFDFDF] text-[12px] leading-normal mb-[10px] ">
                  Products
                </h5>
                <h5 className=" font-openSans py-[2px] mb-[5px]">
                  Platform Overview
                </h5>
                <h5 className=" font-openSans py-[2px] mb-[5px]">
                  Connectivity
                </h5>
                <h5 className=" font-openSans py-[2px] mb-[5px]">AI</h5>
                <h5 className=" font-openSans py-[2px] mb-[5px]">Monitoring</h5>
                <h5 className=" font-openSans py-[2px] mb-[5px]">
                  Scalability
                </h5>
                <h5 className=" font-openSans py-[2px] mb-[5px]">Efficiency</h5>
                <h5 className=" font-openSans py-[2px] mb-[5px]">
                  Fleetblox Crew
                </h5>
                <h5 className=" font-openSans py-[2px] mb-[5px]">Compliance</h5>
              </div>
              {/* solutions */}
              <div className="cursor-pointer text-[14px] leading-5">
                <h5 className=" font-openSans text-[#DFDFDF] text-[12px] leading-normal mb-[10px] ">
                  Solutions
                </h5>
                <h5 className=" font-openSans py-[2px] mb-[5px]">
                  Cloud Garage
                </h5>
                <h5 className=" font-openSans py-[2px] mb-[5px]">
                  Remote Access
                </h5>
                <h5 className=" font-openSans py-[2px] mb-[5px]">
                  Remote Scale
                </h5>
                <h5 className=" font-openSans py-[2px] mb-[5px]">
                  Cost Optimization
                </h5>
                <h5 className=" font-openSans py-[2px] mb-[5px]">
                  Maintenance and Diagnostics
                </h5>
                <h5 className=" font-openSans py-[2px] mb-[5px]">
                  EV Fleet Integration
                </h5>
                <h5 className=" font-openSans py-[2px] mb-[5px]">
                  Compliance and Safety
                </h5>
                <h5 className=" font-openSans py-[2px] mb-[5px]">
                  Workforce Connectivity
                </h5>
                <h5 className=" font-openSans py-[2px] mb-[5px]">
                  AI Fleet Coordinator
                </h5>
                <h5 className=" font-openSans py-[2px] mb-[5px]">
                  AI Inspection
                </h5>
                <h5 className=" font-openSans py-[2px] mb-[5px]">
                  Trip Management
                </h5>
                <h5 className=" font-openSans py-[2px] mb-[5px]">Geofencing</h5>
              </div>
              {/* resources section */}
              <div className="cursor-pointer text-[14px] leading-5">
                <h5 className=" font-openSans text-[#DFDFDF] text-[12px] leading-normal mb-[10px] ">
                  Resources
                </h5>
                <h5 className=" font-openSans py-[2px] mb-[5px]">Blogs</h5>
                <h5 className=" font-openSans py-[2px] mb-[5px]">
                  Customer Stories
                </h5>
                <h5 className=" font-openSans py-[2px] mb-[5px]">Events </h5>
                <h5 className=" font-openSans py-[2px] mb-[5px]">
                  Next Updates
                </h5>
                <h5 className=" font-openSans py-[2px] mb-[5px]">What’s New</h5>
                <h5 className=" font-openSans py-[2px] mb-[5px]">
                  Help Center
                </h5>
                <h5 className=" font-openSans py-[2px] mb-[5px]">
                  Knowledge Base
                </h5>
              </div>
              {/* company section */}
              <div className="cursor-pointer text-[14px] leading-5">
                <h5 className=" font-openSans text-[#DFDFDF] text-[12px] leading-normal mb-[10px] ">
                  Company
                </h5>
                <h5 className=" font-openSans py-[2px] mb-[5px]">Pricings</h5>
                <h5 className=" font-openSans py-[2px] mb-[5px]">
                  Request Demo
                </h5>
                <h5 className=" font-openSans py-[2px] mb-[5px]">About</h5>
                <h5 className=" font-openSans py-[2px] mb-[5px]">Contact</h5>
              </div>
            </div>
          </div>
          <div className="lg:hidden block text-center">
            <h2 className="mb-[10px] text-[14px] leading-5 text-[#DFDFDF] font-openSans">
              Download Fleetblox Crew
            </h2>
            <div className="flex gap-[10px] justify-center">
              <AppleStore />
              <GoogleStoreMobile />
            </div>
          </div>
          <div className="flex items-center flex-col lg:flex-row justify-between pb-[40px] mt-10">
            <div className="flex md:space-x-[20px] space-y-[10px] md:space-y-0 items-center justify-center flex-col md:flex-row">
              <div className="flex cursor-pointer items-center gap-[10px]">
                <FacebookIcon />
                <LinkdinIcon />
                {/* <InstagramIcon />
            <XIcon /> */}
              </div>
              <div className="flex items-center space-x-[20px] -ml-[40px] md:ml-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="18"
                  viewBox="0 0 2 18"
                  fill="none"
                  className="hidden md:block"
                >
                  <path
                    d="M1 0.683594V16.6836"
                    stroke="#7D7D7D"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="text-[14px] font-openSans leading-5 font-normal text-white">
                  Terms of Service
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="18"
                  viewBox="0 0 2 18"
                  fill="none"
                >
                  <path
                    d="M1 0.683594V16.6836"
                    stroke="#7D7D7D"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="text-[14px] font-openSans leading-5 font-normal text-white">
                  Privacy Policy
                </p>
              </div>
            </div>
            <h5 className="font-openSans text-[16px] leading-6 mt-[10px] mt:mt-0">
              ©2025 Fleetblox. All Rights Reserved
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
