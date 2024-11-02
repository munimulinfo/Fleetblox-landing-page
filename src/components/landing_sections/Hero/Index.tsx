import React from "react";

import CustomeButton from "@/components/shared/CustomButton";
import { HeroSection } from "@/Static_data/data";
import Image from "next/image";

// hero backend
import HeroBanner from "@/../public/images/HeroBanner.svg";
import HeroPng from "@/../public/images/PHN.png";
import Tab from "@/../public/images/Tab.png";

const Hero: React.FC = () => {
  return (
    <div className="mx-auto w-full">
      <Image
        alt="image"
        src={HeroBanner}
        className="absolute left-0 right-0 top-0 z-[-1] mx-auto w-full"
      />
      <div className="absolute -top-[150px] right-0 size-[500px] rounded-full bg-p_blue opacity-60 blur-[160px]"></div>

      <div className="relative mx-auto flex max-w-[1980px] items-start justify-between gap-[60px] overflow-hidden">
        <div className="absolute -top-[150px] left-[150px] size-[500px] rounded-full bg-bg_yellow opacity-50 blur-[160px] 2.5xl:left-[200px]"></div>
        <div className="z-[1] mt-[130px] w-3/5  max-w-[1920px] sm:px-6 md:px-8 lg:px-10 xl:px-[60px] 2xl:pl-[80px] 2xl:pr-[0px] 3xl:mx-auto 3xl:px-[100px] 3xl:ml-[30px]">
          <h5 className="hero_title font-openSans text-[14px] text-ti_dark_grey sm:text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px]">
            Complete Brand Solution
          </h5>
          <h1 className="hero_title pt-[10px] font-montserrat text-[30px] text-ti_royel_blue xl:text-[33px] 2xl:text-[40px] 2.5xl:text-[48px] 3xl:text-[52px]">
            The First Ever Cloud-Based <br /> Platform for Car Rentals
          </h1>

          <p className="hero_text mt-[16px] max-w-[500px] text-[16px] text-ti_dark_grey xl:w-[500px] 2xl:w-[800px] 2xl:max-w-[600px] 2.5xl:w-[800px] 2.5xl:max-w-[700px] 3xl:max-w-[900px]">
            Introducing FleetBlox, the Revolutionary Subscription-Based Rental
            Platform Designed to Maximize Fleet Revenu nce.
          </p>
          <div className="mt-[32px] flex items-center gap-[20px]">
            <CustomeButton href="/start-with-us" text="Show early interest" className="" />
            <div className="group cursor-pointer font-openSans text-[16px] font-semibold text-p_dark_blue">
              And Get Up to 15% Discount
            </div>
          </div>
          <div className="mt-[50px]">
            <h4 className="font-openSans text-[16px] font-semibold text-ti_grey">
              What We Provide
            </h4>
            <div className="mt-[10px] space-y-[10px]">
              {HeroSection.map((item, idx) => (
                <div
                  className="flex items-center gap-[10px] py-[5px]"
                  key={idx}
                >
                  <Image
                    className="size-[20px]"
                    alt={item.title}
                    src={item.icon}
                  />
                  <h1 className="font-openSans text-[16px] font-semibold leading-[24px] text-ti_dark_grey">
                    {item.title}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative mt-[130px] h-[690px] w-1/2">
          <Image
            alt="Tab"
            src={Tab}
            className="absolute top-0 ml-[4px] mt-[3px] h-[550px] min-w-[860px]"
          />

          <div className="absolute left-6 top-4 flex h-[468px] w-[780px] items-end justify-end">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="h-full w-full rounded-3xl object-fill"
            >
              <source
                src="/videos/HeroVideo.mp4"
                className=""
                type="video/mp4"
              />
            </video>
          </div>

          <Image
            alt="image"
            // className="absolute -left-[120px] object-contain xl:bottom-[10px] xl:h-[350px] xl:w-[300px] 2xl:-left-[180px] 2xl:bottom-[110px] 2xl:h-[400px] 2xl:w-[400px] 2.5xl:-left-[185px] 2.5xl:bottom-[0px] 2.5xl:h-[550px] 2.5xl:w-[500px]"
            className="absolute -left-[150px] bottom-[25px] h-[550px] w-[330px]"
            src={HeroPng}
            quality={60}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
