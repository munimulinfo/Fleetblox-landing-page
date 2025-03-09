import { MotionValue } from "framer-motion";
import { StaticImageData } from "next/image";

export interface CardProps {
  icon: string;
  title: string;
  description: string;
  image: StaticImageData;
  index: number;
  targetScale: number;
  range: number[];
  progress: MotionValue<number>; // Updated to MotionValue<number>
}
export type TVersesCard = {
  number: number;
  title: string;
  fleetBloxDes: string;
  traditionDes: string;
  index: number;
  targetScale: number;
  range: number[];
  progress: MotionValue<number>;
};
export type TCards = {
  number: number;
  title: string;
  fleetbloxText: string;
  traditionalText: string;
};
