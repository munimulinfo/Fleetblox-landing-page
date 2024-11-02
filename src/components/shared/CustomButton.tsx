import Link from "next/link";
import { GoChevronRight } from "react-icons/go";

interface ButtonProps {
  text: string;
  style?: React.CSSProperties;
  className?: string;
  href?: string;
}

const CustomeButton = ({ text, style, className, href = "/" }: ButtonProps) => {
  return( 
    <Link href={`${href}`} className={`hero_btn group relative  bg-p_blue transition-all duration-500 ease-in-out hover:bg-p_dark_blue hover:pl-[22px] hover:pr-[26px] ${className}`} style={style}>
      <span className="group-hover:mr-[10px]">{text}</span>
      <GoChevronRight
        className="absolute right-0 mr-[9px] hidden font-bold text-bg_white transition-all duration-700 ease-in-out group-hover:block"
        size={24}
      />
    </Link>
  );
};

export default CustomeButton;
