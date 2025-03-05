// hooks/useScrollAnimations.ts
import { TCards } from "@/types/types";
import { useTransform, MotionValue } from "framer-motion";

interface CardStyle {
  opacity: MotionValue<number>;
  y: MotionValue<number>;
  scale: MotionValue<number>;
}

const useScrollAnimations = (
  cards: TCards[],
  scrollYProgress: MotionValue<number>
): CardStyle[] => {
  return cards.map((_, index) => {
    const start = index / cards.length;
    const end = (index + 1) / cards.length;

    return {
      /* eslint-disable react-hooks/rules-of-hooks */
      opacity: useTransform(
        scrollYProgress,
        index === 0
          ? [0, start + 0.2, end, end + 0.1]
          : [start, start + 0.2, end, end + 0.1],
        index === 0 ? [1, 1, 1, 0] : [0, 1, 1, 0]
      ),
      y: useTransform(scrollYProgress, [start, end], [80, 0]),
      scale: useTransform(
        scrollYProgress,
        [start, start + 0.5, end],
        [0.9, 1, 0.95]
      ),
    };
  });
};

export default useScrollAnimations;
