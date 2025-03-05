"use client";
import RightArrowIcon from "../icons/RightArrowIcon";

const PrimaryButton = ({ title }: { title: string }) => {
  return (
    <button className="transition-all bg-[#2D65F2] hover:bg-[#0336BC] font-openSans text-white-primary text-white duration-300 hover:w-[144.16px] w-[122.16px] flex items-center px-4 py-3 text-base font-bold rounded-md group">
      <div className="z-20 whitespace-nowrap">{title}</div>
      <div className="z-10 transform transition-transform opacity-0 group-hover:opacity-100 -translate-x-4 duration-300 group-hover:translate-x-0">
        <RightArrowIcon />
      </div>
    </button>
  );
};

export default PrimaryButton;

// hover:w-[150.89px]
