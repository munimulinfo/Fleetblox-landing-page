import { CardProps } from "@/types/types";
import { useTransform, motion } from "framer-motion";
import Image from "next/image";

const VirtualCard: React.FC<CardProps> = ({
  index,
  icon,
  title,
  description,
  image,
  targetScale,
  progress,
  range,
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      key={index}
      className="sticky z-50 top-[0vh] flex h-[100vh] flex-col items-center justify-center xl:top-[13vh] 2xl:top-[12vh] 2.5xl:top-[15vh] 3xl:top-[8vh] "
    >
      <motion.div
        className={`relative z-[200] top-[0px] mx-auto transform flex-col gap-x-[30px] max-h-[560px] h-full lg:h-[560px] max-w-[900px] w-full lg:w-[900px]`}
        style={{ top: `calc(-5vh + ${index * 30}px)`, scale: scale }}
      >
        {index === 0 && (
          <div
            className={`absolute left-1/2 top-1/2 mt-[90px] size-[664px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffe1bf] opacity-40 blur-[200px]`}
          ></div>
        )}
        <div className="absolute -top-[5vh] z-[200] flex rounded-[24px] bg-white p-[10px] w-full justify-between h-full">
          {/* left side */}
          <div className="flex flex-col items-start bg-white px-[20px] pb-[20px] max-w-[340px] w-full pt-[70px] font-openSans">
            <Image className="" src={icon} alt="icon" />
            <h1 className="text-[28px] font-bold text-[#04082C] font-montserrat leading-[1.1] mb-4 mt-[10px]">
              {title}
            </h1>
            <p className="text-[14px] font-openSans font-normal leading-[20px] text-[#333] mb-[30px]">
              {description}
            </p>
            {/* <button className="text-[16px] border group cursor-pointer font-openSans font-bold bg-[#2D65F2] px-5 py-3 rounded-md text-white transition-all duration-500">
              Read More
            </button> */}
          </div>
          {/* right side */}
          <Image
            src={image}
            className="object-scale-down rounded-[16px]"
            alt="image"
          />
        </div>

        <div
          className="absolute -top-[5vh] z-[20] rounded-[2px] bg-black opacity-[0.07] blur-[7px] h-full"
          style={{ width: "calc(100% - 30px)" }}
        ></div>
        <div
          className="absolute bottom-[10px] left-[60px] z-[20] rounded-[15px] bg-black opacity-[0.07] blur-[20px] h-full"
          style={{ width: "calc(100% - 30px)" }}
        ></div>
      </motion.div>
    </div>
  );
};

export default VirtualCard;
