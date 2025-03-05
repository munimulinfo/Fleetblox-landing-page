import CheckboxIcon from "@/components/icons/CheckboxIcon";
import Container from "@/components/ui/Container";
import heroCardImg from "../../../assets/heroCardImage.png";
import Image from "next/image";
import VerticalDividerIcon from "@/components/icons/VerticalDividerIcon";
import RightArrowIcon from "@/components/icons/RightArrowIcon";

const HeroSection = () => {
  return (
    <section className="bg-[#FAFAFF] flex flex-col justify-center items-center z-50">
      <Container>
        <div className="lg:mt-[60px] mt-10 md:mt-12 pb-3">
          <div className="max-w-[840px] w-full mx-auto text-center">
            <p className="text-[18px] md:text-[28px] lg:text-[28px] text-left   lg:text-center md:text-center  font-bold text-[#0336BC]">
              Instant Fleet Connectivity
            </p>
            <h1 className="text-[36px] md:text-[52px] lg:text-[52px] text-left lg:text-center md:text-center font-bold text-[#04082C] leading-[1.1] font-montserrat">
              Manage and Scale Without Boundaries
            </h1>
            <p className="flex-center text-left lg:text-center md:text-center font-openSans text-[#333] leading-6 text-[16px] mt-[10px]">
              Say goodbye to traditional hardware hassles! Fleetblox&apos;s
              AI-powered, cloud based fleet connectivity solution cuts costs,
              reduces downtime, and transforms the way you manage your fleet
            </p>
            <div className="flex flex-col md:flex-row lg:flex-row items-start md:items-center lg:items-center justify-center gap-4 mt-5 pb-[30px] font-openSans">
              <div className="flex gap-[5px] text-[16px] font-openSans leading-6 font-semibold text-[#7D7D7D] text-center">
                <CheckboxIcon />
                <p>No Hardware</p>
              </div>
              <div className="flex gap-[5px] text-[16px] font-openSans leading-6 font-semibold text-[#7D7D7D]">
                <CheckboxIcon />
                <p>No Installations</p>
              </div>
              <div className="flex gap-[5px] text-[16px] font-openSans leading-6 font-semibold text-[#7D7D7D]">
                <CheckboxIcon />
                <p>No additional costs</p>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="hidden z-[200] md:flex transition-all font-openSans bg-[#2D65F2] hover:bg-[#0336BC] text-white-primary text-white duration-300 hover:w-[144.16px] w-[122.16px]  items-center px-[13px] hover:px-4 py-3 text-base font-bold rounded-md group">
                <div className="z-20 whitespace-nowrap"> Start Today</div>
                <div className="z-10 transform transition-transform opacity-0 group-hover:opacity-100 -translate-x-4 duration-300 group-hover:translate-x-0">
                  <RightArrowIcon />
                </div>
              </button>

              <button className="md:hidden transition-all bg-[#2D65F2] hover:bg-[#0336BC] text-white-primary text-white duration-300 w-[95%] hover:w-[100%] md:hover:w-[144.16px] md:w-[122.16px] lg:hover:w-[144.16px] lg:w-[122.16px] flex items-center justify-center px-4 py-3 text-[16px] font-bold rounded-md group ">
                <div className="z-20 whitespace-nowrap font-openSans font-bold">
                  Start Today
                </div>
                <div className="z-10 transform transition-transform opacity-0 group-hover:opacity-100 -translate-x-4 duration-300 group-hover:translate-x-0">
                  <RightArrowIcon />
                </div>
              </button>
            </div>
          </div>

          {/* Animated section for laptop screen  */}
          <div className="hidden md:block lg:block relative max-h-[700px] lg:h-[600px] md:h-[500px] max-w-[1200px] lg:w-[1200px] md:w-[1000px] z-[100] mx-auto ">
            <Image
              src={heroCardImg}
              alt="logo"
              className="scale-[.8] max-h-[80vh] z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute"
            />
            <div className="max-h-[520px] lg:h-[300px] md:h-[400px] filter blur-[100px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20  rounded-[520px] w-[520px] bg-[#2D65F2]  absolute "></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  w-full bg-[#FAFAFF] ">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className=" z-10 h-full object-contain opacity-5 mix-blend-difference "
              >
                <source src="/videos/hero.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="absolute -bottom-20 left-1/2 max-w-[880px] w-full gap-5 -translate-x-1/2 py-[30px] grid grid-cols-1 lg:grid-cols-3 text-center items-center justify-items-center">
              {[
                {
                  title: "Easy Set Up",
                  description:
                    "No hardware, no hassle - just create your account",
                },
                {
                  title: "Instant Fleet Build",
                  description: "Upload your vehicles with just a few clicks",
                },
                {
                  title: "Smarter Control",
                  description:
                    "Use AI-powered tools for better efficiency and safety",
                },
              ].map((feature, index, arr) => (
                <div key={feature.title} className="flex items-center gap-5">
                  <div>
                    <h1 className="text-gray-900 font-bold text-[18px] font-openSans">
                      {feature.title}
                    </h1>
                    <p className="text-gray-700 text-[14px] leading-5 font-openSans">
                      {feature.description}
                    </p>
                  </div>
                  {index !== arr.length - 1 && <VerticalDividerIcon />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Animated section for mobile screen - MOVED OUTSIDE CONTAINER */}
      <div className="md:hidden mt-8 relative w-full lg:hidden">
        <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
          {/* Background blur */}
          <div className="h-[150px] w-[150px] filter blur-[100px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 rounded-full bg-[#2D65F2] opacity-50 absolute"></div>

          {/* Background video */}
          <div className="absolute h-full w-full inset-0 bg-[#FAFAFF]">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute top-0 left-0 w-full h-full object-cover opacity-5 mix-blend-difference"
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Hero image - properly centered */}
          <div className="relative z-30 flex justify-center items-center h-full">
            <Image
              src="/images/hero-2.png"
              alt="Mobile hero"
              width={272}
              height={550}
              className="object-contain max-h-[500px]"
            />
          </div>
        </div>

        {/* Features section with proper spacing */}
        <div className="px-4 pt-10 pb-6 space-y-6">
          {[
            {
              title: "Easy Set Up",
              description: "No hardware, no hassle - just create your account",
            },
            {
              title: "Instant Fleet Build",
              description: "Upload your vehicles with just a few clicks",
            },
            {
              title: "Smarter Control",
              description:
                "Use AI-powered tools for better efficiency and safety",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex flex-col pb-4 items-center last:border-0"
            >
              <h3 className="text-[#04082C] font-bold text-[18px] font-openSans">
                {feature.title}
              </h3>
              <p className="text-[#333333] text-center text-[14px] font-openSans leading-5">
                {feature.description}
              </p>

              <div className="mt-5">
                <svg
                  width="27"
                  height="3"
                  viewBox="0 0 27 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.5 1.03906H1.5"
                    stroke="#2D65F2"
                    strokeOpacity="0.6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
