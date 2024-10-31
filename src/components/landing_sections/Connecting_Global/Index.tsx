"use server";
import { cars } from "@/Static_data/data";
import Image from "next/image";

import image2 from "@/../public/images/brands/Frame 1707481648.png";
import image3 from "@/../public/images/brands/Frame 1707481649.svg";
import image4 from "@/../public/images/brands/Frame 1707481650.png";
import image5 from "@/../public/images/brands/Frame 1707481651.svg";
import image6 from "@/../public/images/brands/Frame 1707481652.svg";



const Connecting_Global = () => {
  const images = [
    image2,
    image3,
    image4,
    image5,
    image6,
    image2,
    image3,
    image4,
    image5,
    image6,
    image2,
    image3,
    image4,
    image5,
    image6,
    image2,
    image3,
    image4,
    image5,
    image6,
    image2,
    image3,
    image4,
    image5,
    image6,
    image2,
    image3,
    image4,
    image5,
    image6,
  ];

  return (
    <div className="mx-auto  -mt-[40px] max-w-[1920px] bg-bg_white px-4  sm:px-6 md:px-8 lg:px-10 xl:px-[60px] 2xl:px-[80px] 2.5xl:px-[100px]">
      <div className="z-[100] mx-auto w-[1000px] 2xl:w-[1300px] space-y-[20px]">
        <div className="relative -bottom-[100px] z-[1000] space-y-[20px]">
          <h1 className="connecting_global_title font-montserrat xl:text-[25px] 2xl:text-[30px] 2.5xl:text-[36px]">
            Connecting Globally with Leading Car Brands
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
            className="absolute mt-[300px] 2xl:mt-[450px] 2xl:h-[900px] 2xl:w-[4500px] 2.5xl:h-[1000px] 2.5xl:w-[4500px] object-cover"
          >
            <source src="/videos/global.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="connecting_global_image mx-auto relative -mt-[110px] 2xl:-mt-[150px] w-[1000px] 2xl:w-[1300px] overflow-hidden whitespace-nowrap">
        <div className="flex animate-scroll items-center space-x-3 md:space-x-8">
          {images.map((image, index) => (
            <div key={index} className="z-[1000] flex-shrink-0">
              <Image
                src={image}
                alt="image"
                className="z-[1000] mix-blend-multiply xl:w-[80%] 2xl:w-[90%]"
              />
            </div>
          ))}
        </div>
        <div className="from-bg_white to-transparent absolute left-0 top-0 z-[1001] h-full w-32 bg-gradient-to-r"></div>
        <div className="from-bg_white to-transparent absolute right-0 top-0 z-[1001] h-full w-32 bg-gradient-to-l"></div>
      </div>
    </div>
  );
};

export default Connecting_Global;
