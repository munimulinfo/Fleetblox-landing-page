"use server";
import { cars } from "@/Static_data/data";
import MarquryScroller from "./MarquryScroller";



const Connecting_Global = () => {

  return (
    <div className="mx-auto lg2:-mt-[100px] max-w-[1920px] bg-bg_white  relative overflow-hidden  xl:px-[60px] 2xl:px-[80px] 2.5xl:px-[100px]">
      <div className="z-[100] mx-auto  space-y-[20px] lg2:w-[1000px] 2xl:w-[1300px] ">
        <div className="relative  -bottom-[100px] z-[1000] space-y-[20px]">
          <h1 className="connecting_global_title font-montserrat text-[26px] 2xl:text-[30px] 2.5xl:text-[36px]">
            Globally Compatible with Leading Car Brands
          </h1>
          <div className="z-[100] flex items-center justify-center">
            {cars.map((car, index) => (
              <div
                key={index}
                className="flex w-[247px] flex-col items-center justify-between border-r-[3px] border-r-bg_yellow px-[20px] py-[10px] last:border-r-0"
              >
                <h1 className="connecting_global_title text-[22px] text-p_dark_blue">
                  {car.value}
                </h1>
                <p className="connecting_global_text text-[14px] text-ti_grey">
                  {car.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex h-[400px] 2xl:h-[550px] w-full items-center justify-center overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute h-[550px] mt-[300px] 2xl:mt-[452px] xl:h-[680px] 2xl:h-[900px] 2xl:w-[4500px] 2.5xl:h-[1000px] 2.5xl:w-[4500px] object-cover"
          >
            <source src="/videos/global.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="  xl:connecting_global_image  mx-auto w-[1300px] absolute left-0 right-0 bottom-[20px]  ">
        <div className="flex w-full overflow-hidden ">
          <MarquryScroller />
        </div>
        <div className="from-bg_white to-transparent xl:block hidden absolute left-0 top-0 z-[1001] h-full w-32 bg-gradient-to-r"></div>
        <div className="from-bg_white to-transparent xl:block hidden absolute right-0 top-0 z-[1001] h-full w-32 bg-gradient-to-l"></div>
      </div>
    </div>
  );
};

export default Connecting_Global;
