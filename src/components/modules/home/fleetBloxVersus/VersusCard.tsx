import CheckIcon from "@/components/icons/CheckIcon";
import CrossIcon from "@/components/icons/CrossIcon";
import FleetbloxIcon from "@/components/icons/FleetbloxIcon";
import { motion, MotionStyle } from "framer-motion";
interface CardProps {
  number: number;
  title: string;
  fleetbloxText: string;
  traditionalText: string;
  style: MotionStyle;
}
const VersusCard: React.FC<CardProps> = ({
  number,
  title,
  fleetbloxText,
  traditionalText,
  style,
}) => {
  return (
    <motion.div
      style={style}
      transition={{ type: "spring" }}
      className="w-[500px] h-[500px] bg-[#fff] z-50 rounded-[16px] shadow-md p-8 flex flex-col gap-[10px] absolute top-0 left-0"
    >
      {/* Card Header */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-8 h-8 rounded-full border-2 border-[#0336BC] flex items-center justify-center mb-3">
          <span className="text-[#0336BC] font-semibold">{number}</span>
        </div>
        <h3 className="text-[#0336BC] text-xl font-bold">{title}</h3>
      </div>

      {/* Fleetblox Advantage */}
      <div className="bg-[#FEFAF0] p-5 rounded-xl flex items-center gap-4">
        <CheckIcon />
        <div>
          <FleetbloxIcon />

          <p className="text-[16px] font-openSans text-[#4A4A4A]">
            {fleetbloxText}
          </p>
        </div>
      </div>

      {/* Traditional Solution */}
      <div className="bg-[#F7F7F7] p-5 rounded-xl flex items-center justify-center gap-4">
        <CrossIcon />
        <div>
          <div className="text-[#333333] font-semibold mb-1">
            Traditional Solutions
          </div>
          <p className="text-[16px] text-[#4A4A4A] font-openSans">
            {traditionalText}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default VersusCard;
