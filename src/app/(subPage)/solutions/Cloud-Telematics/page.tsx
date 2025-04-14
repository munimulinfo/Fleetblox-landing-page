import RightArrowIcon from "@/components/icons/RightArrowIcon";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="bg-[#FAFAFF] pt-[140px] pb-[10px]">
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
      </div>
    </div>
  );
};

export default page;
