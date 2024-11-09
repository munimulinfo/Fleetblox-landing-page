"use server";
import { cars } from "@/Static_data/data";
import Image from "next/image";

import image1 from "@/../public/images/New folder/1.svg"
import image2 from "@/../public/images/New folder/2.svg"
import image3 from "@/../public/images/New folder/3.svg"
import image4 from "@/../public/images/New folder/4.svg"
import image5 from "@/../public/images/New folder/5.svg"
import image6 from "@/../public/images/New folder/6.svg"
import image7 from "@/../public/images/New folder/7.svg"
import image8 from "@/../public/images/New folder/8.svg"
import image9 from "@/../public/images/New folder/9.svg"
import image10 from "@/../public/images/New folder/10.svg"
import image11 from "@/../public/images/New folder/11.svg"
import image12 from "@/../public/images/New folder/12.svg"
import image13 from "@/../public/images/New folder/13.svg"
import image14 from "@/../public/images/New folder/14.svg"
import image15 from "@/../public/images/New folder/15.svg"
import image16 from "@/../public/images/New folder/16.svg"
import image17 from "@/../public/images/New folder/17.svg"
import image18 from "@/../public/images/New folder/18.svg"
import image19 from "@/../public/images/New folder/19.svg"
import image20 from "@/../public/images/New folder/20.svg"
import image21 from "@/../public/images/New folder/21.svg"
import image22 from "@/../public/images/New folder/22.svg"
import image23 from "@/../public/images/New folder/23.svg"
import image24 from "@/../public/images/New folder/24.svg"
import image25 from "@/../public/images/New folder/25.svg"
import image26 from "@/../public/images/New folder/26.svg"
import image27 from "@/../public/images/New folder/27.svg"
import image28 from "@/../public/images/New folder/28.svg"
import image29 from "@/../public/images/New folder/29.svg"
import image30 from "@/../public/images/New folder/30.svg"
import image31 from "@/../public/images/New folder/31.svg"
import image32 from "@/../public/images/New folder/32.svg"



const Connecting_Global = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
     
  ];
  const images2 = [
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
    image27,
    image28,
    image29,
    image30,
    image31,
    image32
  ];
  const combinedImages = [...images2, ...images];

  return (
    <div className="mx-auto  -mt-[40px] max-w-[1920px] bg-bg_white px-4  sm:px-6 md:px-8 lg:px-10 xl:px-[60px] 2xl:px-[80px] 2.5xl:px-[100px]">
      <div className="z-[100] mx-auto w-[1000px] 2xl:w-[1300px] space-y-[20px]">
        <div className="relative -bottom-[100px] z-[1000] space-y-[20px]">
          <h1 className="connecting_global_title font-montserrat xl:text-[25px] 2xl:text-[30px] 2.5xl:text-[36px]">
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
            className="absolute mt-[300px] 2xl:mt-[450px] 2xl:h-[900px] 2xl:w-[4500px] 2.5xl:h-[1000px] 2.5xl:w-[4500px] object-cover"
          >
            <source src="/videos/global.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="connecting_global_image mx-auto relative -mt-[110px] 2xl:-mt-[150px] overflow-hidden ">
        <div className="flex animate-scroll items-center w-full space-x-3 md:space-x-8">
          {combinedImages.map((image, index) => (
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
