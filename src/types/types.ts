import { MotionValue } from "framer-motion";

export interface CardProps {
  icon: string;
  title: string;
  description: string;
  image: string;
  index: number;
  targetScale: number;
  range: number[];
  progress: MotionValue<number>; // Updated to MotionValue<number>
}

export type TCards = {
  number: number;
  title: string;
  fleetbloxText: string;
  traditionalText: string;
};
