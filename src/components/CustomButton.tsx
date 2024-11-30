import { GoChevronRight } from "react-icons/go";

interface ButtonProps {
  text: string;
  style?: React.CSSProperties;
  className?: string;
  position?: string;
  bg?: boolean;
  offHover?: boolean; 
}

const CustomeButton = ({
  text,
  style,
  className,
  position,
  bg,
  offHover, 
}: ButtonProps) => {
  return (
    <button
      className={`hero_btn group ${offHover && "bg-p_blue"} relative ${bg ? "border border-p_light_blue bg-bg_white text-p_blue hover:bg-none" : "bg-p_blue text-bg_white hover:bg-p_dark_blue"} transition-all duration-500 ease-in-out ${!offHover && "hover:pl-[22px] hover:pr-[26px]"} ${className} `}
      style={style}
    >
      <span className={`${!offHover && "group-hover:mr-[10px]"}`}>{text}</span>
      {!offHover && (
        <GoChevronRight
          className={`absolute right-0 mr-[9px] hidden font-bold ${bg ? "text-p_blue" : "text-bg_white"} transition-all duration-700 ease-in-out group-hover:block ${position}`}
          size={24}
        />
      )}
    </button>
  );
};

export default CustomeButton;
