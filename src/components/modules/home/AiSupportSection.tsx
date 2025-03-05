import Container from "@/components/ui/Container";
import aiSupportImg from "../../../assets/aiSupportImg.svg";
import Image from "next/image";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
const AiSupportSection = () => {
  return (
    <div className="bg-[#0A2540]">
      <Container>
        <section className="py-[60px] flex flex-col md:flex-row justify-between items-center gap-[40px]">
          <div className="text-white max-w-[570px]">
            <h1 className="text-[36px] font-bold mb-[10px] font-montserrat leading-[1.1]">
              AI Support to Elevate Fleet Management
            </h1>
            <p className="text-[16px] leading-6 font-openSans mb-[30px]">
              Your AI Garage Assistant works 24/7, providing real-time insights
              and proactive support. From scheduling maintenance to optimizing
              vehicle performance, ensure uninterrupted operations with smarter
              tools that keep every vehicle at its best.
            </p>
            <button className="transition-all hidden bg-[#2D65F2] hover:bg-[#0336BC] text-white-primary text-white duration-300 hover:w-[144.16px] w-[122.16px] md:flex items-center px-4 py-3 text-base font-bold rounded-md group">
              <div className="z-20 whitespace-nowrap">Learn More</div>
              <div className="z-10 transform transition-transform opacity-0 group-hover:opacity-100 -translate-x-4 duration-300 group-hover:translate-x-0">
                <RightArrowIcon />
              </div>
            </button>
          </div>
          <div className="relative md:py-[0px] py-[100px]">
            <Image
              src={aiSupportImg}
              className="relative z-[200]"
              alt="ai support img"
            />
            {/* Blue blur effect below */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[410px] md:w-[350px] lg:w-[410px] max-h-[237px] md:h-[150px] lg:h-[237px] opacity-50 rounded-[410px] bg-[#2D65F2] blur-[106px] z-[10]"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[550px] w-full md:w-full md:h-full lg:w-[550px] mx-auto max-h-[310px] h-full lg:h-[310px]  bg-[#0A2540] ">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className=" z-50 h-full object-contain mix-blend-plus-lighter "
              >
                <source src="/videos/ai_support.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <button className="md:hidden bg-[#2D65F2] hover:bg-[#0336BC] text-white w-full flex px-4 py-3 text-[14px] font-openSans font-bold rounded-md justify-center">
            Learn More
          </button>
        </section>
      </Container>
    </div>
  );
};

export default AiSupportSection;
