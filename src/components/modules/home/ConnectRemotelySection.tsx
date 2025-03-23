import RightArrowIcon from "@/components/icons/RightArrowIcon";
import Image from "next/image";
import Link from "next/link";

const ConnectRemotelySection = () => {
  return (
    <>
      <main className="pt-10 md:pt-[70px] bg-white md:pb-[40px]">
        <div className="container mx-auto w-full px-4 lg:max-w-7xl">
          <div className="flex flex-col z-50">
            {/* Connect Remotely Section */}
            <section className="">
              <h1 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-[#04082C] leading-tight font-montserrat">
                Connect Your Fleet Remotely -{" "}
                <span className="md:block">Anytime, Anywhere</span>
              </h1>

              <p className="my-4 md:my-5 text-[#333] leading-6 font-openSans text-left  text-[15px] md:text-[16px]">
                Manage your fleet with unparalleled ease and flexibility.
                Perform comprehensive vehicle checks, unlock vehicles,
                <span className="hidden md:inline">
                  <br />
                </span>{" "}
                coordinate repairs, and more without ever being physically
                present. With the Virtual Parking Slot technology,
                <span className="hidden md:inline">
                  <br />
                </span>{" "}
                you remain in control, no matter where you are.
              </p>
              <Link href="/getting-started">
                <button className="hidden md:flex lg:flex transition-all bg-[#2D65F2] hover:bg-[#0336BC] text-white duration-300 hover:w-[144.16px] w-[122.16px] items-center px-4 py-3 text-[16px] font-bold rounded-md group">
                  <div className="z-20 whitespace-nowrap font-openSans font-bold">
                    Start Today
                  </div>
                  <div className="z-10 transform transition-transform opacity-0 group-hover:opacity-100 -translate-x-4 duration-300 group-hover:translate-x-0">
                    <RightArrowIcon />
                  </div>
                </button>
              </Link>
            </section>

            {/* Video Section */}
            <section className="my-8 md:my-10 border border-[#DFDFDF] h-[250px] xs:h-[280px] sm:h-[350px] md:h-[425px] rounded-[24px] bg-white overflow-hidden">
              <div className="relative w-full h-full">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source
                    src="/videos/connect-remotely.webm"
                    type="video/mp4"
                  />
                  {/* <source src="/videos/connect-remotely.mp4" type="video/mp4" /> */}
                </video>
              </div>
            </section>

            {/* <div className=" flex md:hidden lg:hidden justify-center w-full"> */}
            <Link href="/getting-started">
              <button className="lg:hidden bg-[#2D65F2] hover:bg-[#0336BC] text-white w-full flex px-4 py-3 text-[14px] font-openSans font-bold rounded-md justify-center">
                Start Today
              </button>
            </Link>
            {/* </div> */}
            <div className="border-b block md:hidden mt-[80px]  mb-[60px] border-[#DFDFDF]"></div>
          </div>
        </div>
      </main>
      {/* Optimize section */}
      <div className="bg-[#FAFAFF] pt-[90px] pb-[120px] md:pt-[0px] md:pb-[0px] md:py-10">
        <section className="flex mx-auto w-full lg:max-w-7xl flex-col md:flex-row p-0 rounded-[24px] px-5 items-center gap-[60px] h-auto md:h-[500px] md:rounded-[24px]">
          <div className="lg:w-[570px] w-full">
            <h1 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-[#04082C] leading-tight font-montserrat">
              Optimize Fleet Safety
              <span className="md:block"> and Stay Compliant</span>
            </h1>
            <p className="my-4 md:my-5 text-[#333] leading-6 text-[15px] font-openSans md:text-[16px]">
              Stay ahead with dynamic reminders for registrations and insurance
              renewals, ensuring your fleet&apos;s compliance. Simplify repairs,
              access vehicles with digital keys, and keep your fleet in peak
              condition. Utilize GPS tracking, customize trips, and review
              detailed vehicle condition reports, including diagnostic diagrams,
              all from a single platform.
            </p>
            <Link href="/under-development">
              <button className="hidden md:flex font-openSans transition-all bg-[#2D65F2] text-white-primary text-white duration-300 hover:w-[144.16px] w-[122.16px]  items-center px-[13px] hover:px-4 py-3 text-base font-bold rounded-md group">
                <div className="z-20 whitespace-nowrap">Learn More</div>
                <div className="z-10 transform transition-transform opacity-0 group-hover:opacity-100 -translate-x-4 duration-300 group-hover:translate-x-0">
                  <RightArrowIcon />
                </div>
              </button>
            </Link>
          </div>

          <div className="flex-1 flex justify-center">
            <Image
              src="/images/aI-assistant.png"
              alt="AI assistant for fleet optimization"
              width={548}
              height={294}
              className="w-full max-w-[400px] md:max-w-none object-contain"
              priority
            />
          </div>

          <div className="md:hidden lg:hidden block w-full">
            <Link href="/under-development">
              <button className="bg-[#2D65F2] mt-5 hover:bg-[#0336BC] text-white w-full flex px-4 py-3 text-[14px] font-openSans font-bold rounded-md justify-center">
                Learn More
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConnectRemotelySection;
