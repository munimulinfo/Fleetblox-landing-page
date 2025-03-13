import Image from "next/image";
import FooterLogo from "../../../../public/images/footerLogo.png";
import FacebookIcon from "@/components/icons/FacebookIcon";
// import InstagramIcon from "@/components/icons/InstagramIcon";
// import XIcon from "@/components/icons/XIcon";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import LinkdinIcon from "@/components/icons/LinkdinIcon";
import Link from "next/link";
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
          <div className="flex items-center space-y-[30px] lg:space-y-0 flex-col lg:flex-row justify-between mb-10">
            <div className="cursor-pointer text-center space-y-[10px]">
              <div className="flex justify-center lg:justify-start">
                <Image src={FooterLogo} alt="footer_logo" />
              </div>
            </div>
            <div className="flex justify-between flex-col lg:flex-row text-[16px] font-openSans font-normal text-white leading-6 font-opensans gap-x-[200px] sm:gap-x-[50px] xl:gap-x-[60px] 2xl:gap-x-[80px] 2.5xl:gap-x-[100px]">
              {/* <div className="cursor-pointer space-y-[10px]">
              <h5 className=" font-openSans">Pricings</h5>
              <h5 className=" font-openSans">Blogs</h5>
              <h5 className=" font-openSans">Contact</h5>
            </div>
            <div className="cursor-pointer space-y-[10px]">
              <h5 className=" font-openSans">Terms and Conditions</h5>
              <h5 className=" font-openSans">Privacy Policy</h5>
            </div> */}
              <div className="cursor-pointer space-y-[10px]">
                <h5 className=" font-openSans text-[#fff]">
                  +1 (888) 870 2004
                </h5>
                <h5 className=" font-openSans">info@fleetblox.com</h5>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col lg:flex-row justify-between pb-[40px]">
            <div className="flex cursor-pointer items-center gap-[10px]">
              <FacebookIcon />
              <LinkdinIcon />
              {/* <InstagramIcon />
            <XIcon /> */}
            </div>
            <h5 className="font-semibold font-openSans">©2025 Fleetblox</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
