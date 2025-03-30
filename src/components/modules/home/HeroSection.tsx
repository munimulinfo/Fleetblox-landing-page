import CheckboxIcon from "@/components/icons/CheckboxIcon";
import heroCardImg from "../../../assets/heroCardImage.png";
import Image from "next/image";
import VerticalDividerIcon from "@/components/icons/VerticalDividerIcon";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-[#FAFAFF] flex flex-col justify-center items-center z-50 overflow-hidden">
      {/* <Container> */}
      <div className="mt-[120px] pb-3 flex flex-col items-center justify-center">
        <div className="max-w-[840px] w-full mx-auto text-center flex flex-col items-start md:items-center px-5">
          <p className="text-[18px] md:text-[28px] lg:text-[28px] text-left md:text-center font-bold text-[#0336BC] mb-[5px]">
            Instant Fleet Connectivity
          </p>
          <h1 className="text-[36px] md:text-[52px] lg:text-[52px] text-left md:text-center font-bold text-[#04082C] leading-[1.1] font-montserrat">
            Manage and Scale Without Boundaries
          </h1>
          <p className="text-left md:text-center font-openSans text-[#333] leading-6 text-[16px] mt-[10px]">
            Say goodbye to traditional hardware hassles! Fleetblox&apos;s
            AI-powered, cloud based fleet connectivity solution cuts costs,
            reduces downtime, and transforms the way you manage your fleet
          </p>
          <div className="flex flex-col md:flex-row lg:flex-row items-start md:items-center justify-center gap-4 mt-5 pb-[30px] font-openSans">
            <div className="flex gap-[5px] text-[16px] font-openSans leading-6 font-semibold text-[#7D7D7D] text-left md:text-center">
              <CheckboxIcon />
              <p>No Hardware</p>
            </div>
            <div className="flex gap-[5px] text-[16px] font-openSans leading-6 font-semibold text-[#7D7D7D]">
              <CheckboxIcon />
              <p>No Installations</p>
            </div>
            <div className="flex gap-[5px] text-[16px] font-openSans leading-6 font-semibold text-[#7D7D7D]">
              <CheckboxIcon />
              <p>No Additional Costs</p>
            </div>
          </div>
          <Link href="/getting-started">
            <button className="hidden md:flex transition-all font-openSans bg-[#2D65F2] hover:bg-[#0336BC] text-white-primary text-white duration-300 hover:w-[144.16px] w-[122.16px]  items-center px-[13px] hover:px-4 py-3 text-base font-bold rounded-md group">
              <div className="z-20 whitespace-nowrap"> Start Today</div>
              <div className="z-10 transform transition-transform opacity-0 group-hover:opacity-100 -translate-x-4 duration-300 group-hover:translate-x-0">
                <RightArrowIcon />
              </div>
            </button>
          </Link>
          <div className="w-full">
            <Link href="/getting-started">
              <button className="px-5 py-3 rounded-md w-full text-center bg-[#2D65F2] font-openSans text-[14px] font-bold text-[#fff] flex justify-center md:hidden">
                Start Today
              </button>
            </Link>
          </div>
        </div>

        {/* Animated section for laptop screen  */}
        <div className="hidden lg:block relative max-h-[800px] lg:h-[800px] md:h-[500px] lg:w-[1200px] xl:w-[1400px] z-[0] overflow-hidden">
          <div className="relative h-full w-full flex justify-center items-center">
            <Image
              src={heroCardImg}
              alt="logo"
              className="w-full h-auto max-w-[1200px] max-h-[80vh] -mt-[70px] z-30 absolute xl:max-w-[1200px] lg:max-w-[1000px]"
            />

            {/* Centered blur effect */}
            <div
              className="max-h-[400px] h-full filter blur-[100px] absolute 
                left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 rounded-[520px] 
                max-w-[520px] w-full bg-[#2D65F2]"
            ></div>

            {/* Centered video container */}
            <div className="absolute inset-0 flex justify-center items-center bg-[#FAFAFF] w-full max-w-[1600px] mx-auto left-1/2 -translate-x-1/2 overflow-hidden sm:max-w-[90%] md:max-w-[1100px] lg:max-w-[1200px] xl:max-w-[1600px]">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover object-center opacity-5 mix-blend-difference absolute inset-0"
              >
                <source src="/videos/hero.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Features section remains unchanged */}
          <div className="absolute -bottom-[10px] z-50 left-1/2 max-w-[880px] w-full gap-5 -translate-x-1/2 py-[30px] grid grid-cols-1 lg:grid-cols-3 text-center items-center justify-items-center">
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
              <div
                key={feature.title}
                className="flex items-center justify-center gap-5"
              >
                <div className="text-center">
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
      {/* </Container> */}

      {/* Animated section for mobile screen - MOVED OUTSIDE CONTAINER */}
      <div className="lg:hidden mt-8 relative w-full  flex flex-col items-center justify-center">
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
              src="/images/hero-2.webp"
              priority
              alt="Mobile hero"
              width={272}
              height={550}
              quality={75}
              className="object-contain"
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
