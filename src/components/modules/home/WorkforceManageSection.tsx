import RightArrowIcon from "@/components/icons/RightArrowIcon";
import TickIcon from "@/components/icons/TickIcon";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";

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
          <div className="flex flex-col items-start md:items-center justify-center">
            <h1 className="text-[28px] md:text-[36px] font-bold text-[#04082C] leading-[1.1] text-left  lg:text-center font-montserrat ">
              Complete Workforce Management - <br /> Seamlessly Connected
            </h1>
            <p className="my-5 text-[#333] font-openSans leading-6 text-[14px] md:text-[16px] mt-[10px] text-left lg:text-center">
              Enhance communication and data sharing across your team with the
              Fleetblox Crew App. Empower your <br /> workforce with tools and
              insights to perform their duties efficiently, no matter where they
              are
            </p>
            <Link href="/features/team-management">
              <button className=" hidden md:flex lg:flex transition-all bg-[#2D65F2] hover:bg-[#0336BC] text-white-primary text-white duration-300 hover:w-[144.16px] w-[122.16px] items-center px-4 py-3 text-[16px] font-bold rounded-md group ">
                <div className="z-20 whitespace-nowrap font-openSans font-bold">
                  Learn More
                </div>
                <div className="z-10 transform transition-transform opacity-0 group-hover:opacity-100 -translate-x-4 duration-300 group-hover:translate-x-0">
                  <RightArrowIcon />
                </div>
              </button>
            </Link>
          </div>
          {/* */}
          <div className="flex flex-col items-center lg:items-start lg:flex-row md:justify-between mt-20">
            {/* Image Section */}
            <div className="hidden md:block lg:block w-full">
              <Image
                src="/images/workforce.png"
                alt="image"
                width={720}
                height={500}
                quality={100}
                className="object-cover w-full h-auto"
              />
            </div>

            <div className="md:hidden w-full mb-8">
              <Image
                src="/images/workforce-2.webp"
                alt="Workforce management mobile view"
                width={350}
                height={500}
                className="object-cover w-full h-auto"
                priority
              />
            </div>

            {/* Benefit section */}
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
            <div className="mt-5 mb-10 md:hidden lg:hidden w-full">
              <Link href="/features/team-management">
                <button className="bg-[#2D65F2] mt-5 hover:bg-[#0336BC] text-white w-full flex px-4 py-3 text-[14px] font-openSans font-bold rounded-md justify-center">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default WorkforceManageSection;
