import { MdFacebook } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import CustomeButton from "@/components/shared/CustomButton";

const Index: React.FC = () => {
  return (
    <div>

      <div className="h-auto w-full   bg-bg_dark_blue">
        <div className="mx-auto  max-w-[1920px]">
          <div className="  pb-[50px]   sm:pb-[75px]   md:pb-[100px] custom_padding xl:px-[110px] xl:pb-[70px] 2xl:px-[170px] 2xl:pb-[125px] 3xl:px-[310px]">
            {/* animation */}
            <div className="relative flex flex-col items-center justify-center py-[120px]">
              <h1 className="footer_title z-[300] font-montserrat text-[36px] xl:text-[33px] 2xl:text-[40px] 2.5xl:text-[52px]">
                Get Up to 15% Off — Show Early <br /> Interest Before We Launch!
              </h1>
              <CustomeButton href="/collections/select-country" text="Get my discount" className=" capitalize z-[110] mt-[32px]" />


              <div className="absolute lg2:-top-[50px] z-[90] lg2:size-[450px] size-[300px] xxxs:size-[340px] rounded-full bg-p_light_blue opacity-20 lg2:blur-[210px] blur-[123px] 2xl:size-[600px]"></div>
            </div>

            <div className="flex items-center  justify-center flex-col gap-[10px]">
              <div className="flex cursor-pointer items-center gap-[10px] text-bg_white">
                <MdFacebook size={25} />
                <RiInstagramFill size={24} />
                <FaSquareXTwitter size={24} />
              </div>
              <h5 className="footer_text font-semibold">©2024 Llama Mind</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
