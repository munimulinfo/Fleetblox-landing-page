import RightArrowIcon from "@/components/icons/RightArrowIcon";
import Container from "@/components/ui/Container";
import Image from "next/image";

const WorkforceManageSection = () => {
  const items = [
    {
      id: 1,
      title: "Productivity Hub",
      description:
        "Assign tasks, share updates, and monitor progress in real time.",
    },
    {
      id: 2,
      title: "Fast & Easy Navigation",
      description: "Centralize team management with an intuitive interface.",
    },
    {
      id: 3,
      title: "Unified Team Control",
      description:
        "Improve collaboration and keep everyone aligned, from drivers to administrators.",
    },
  ];
  return (
    <main className="bg-white h-full -mt-10 md:mt-0">
      <Container>
        <section className="flex flex-col items-center justify-center">
          {/* header */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[28px] md:text-[36px] font-bold text-[#04082C] leading-[1.1] text-left lg:text-center font-montserrat ">
              Complete Workforce Management - <br /> Seamlessly Connected
            </h1>
            <p className="my-5 text-[#333] font-openSans leading-6 text-[14px] md:text-[16px] mt-[10px] text-left lg:text-center">
              Enhance communication and data sharing across your team with the
              Fleetblox Crew App. Empower your <br /> workforce with tools and
              insights to perform their duties efficiently, no matter where they
              are
            </p>

            <button className=" hidden md:flex lg:flex transition-all bg-[#2D65F2] hover:bg-[#0336BC] text-white-primary text-white duration-300 hover:w-[144.16px] w-[122.16px] items-center px-4 py-3 text-[16px] font-bold rounded-md group ">
              <div className="z-20 whitespace-nowrap font-openSans font-bold">
                Learn More
              </div>
              <div className="z-10 transform transition-transform opacity-0 group-hover:opacity-100 -translate-x-4 duration-300 group-hover:translate-x-0">
                <RightArrowIcon />
              </div>
            </button>
          </div>
          {/* */}
          <div className="flex flex-col items-center lg:items-start lg:flex-row md:justify-between mt-20">
            {/* Image Section */}
            <div className="hidden md:block lg:block max-w-[800px] w-full">
              <Image
                src="/images/workforce.png"
                alt="image"
                width={720}
                height={500}
                className="object-cover w-full h-auto"
              />
            </div>

            <div className="md:hidden w-full mb-8">
              <Image
                src="/images/workforce-2.png"
                alt="Workforce management mobile view"
                width={350}
                height={500}
                className="object-cover w-full h-auto"
                priority
              />
            </div>

            {/* Benefit section */}
            <div className="flex flex-col w-[350px] ml-10 pt-10 gap-5">
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

            <div className="flex mt-10 md:hidden lg:hidden justify-center items-center w-full">
              <button className="transition-all bg-[#2D65F2] hover:bg-[#0336BC] text-white-primary text-white duration-300 w-full hover:w-full md:hover:w-[144.16px] md:w-[122.16px] lg:hover:w-[144.16px] lg:w-[122.16px] flex items-center justify-center px-4 py-3 text-[16px] font-bold rounded-md group ">
                <div className="z-20 whitespace-nowrap font-openSans font-bold">
                  Learn More
                </div>
                <div className="z-10 transform transition-transform opacity-0 group-hover:opacity-100 -translate-x-4 duration-300 group-hover:translate-x-0">
                  <RightArrowIcon />
                </div>
              </button>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
};

const TickIcon = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 32 29"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      className="scale-90" // Optional: Adjust scale if needed
    >
      <path
        d="M30.5133 0.183594H25.4525C25.2003 0.183594 24.9639 0.306511 24.8191 0.51297L5.41211 28.1836H12.3742L31.1467 1.40117C31.5061 0.888506 31.1393 0.183594 30.5133 0.183594Z"
        fill="#4DB429"
      />
      <path
        d="M1.1446 14.7305H6.42778C6.74347 14.7305 7.02749 14.9223 7.14539 15.2152L12.3652 28.182H5.40314L0.426774 15.7924C0.222623 15.2841 0.596859 14.7305 1.1446 14.7305Z"
        fill="#939607"
        fillOpacity="0.6" // Changed to React-compatible prop
      />
    </svg>
  );
};
export default WorkforceManageSection;
