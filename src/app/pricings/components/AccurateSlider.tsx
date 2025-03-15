import { ChevronLeft, ChevronRight } from "lucide-react";

export const AccurateSlider = ({
  value,
  setValue,
}: {
  value: number;
  setValue: (value: number) => void;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
  };

  // Correct percentage calculation (for a range from 10 to 200)
  const getPercentage = (value: number) => ((value - 10) / 190) * 100;

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-center px-2 sm:px-6">
      {/* Slot Display */}
      <div className="mt-[10px] text-center">
        <span className="text-[24px] md:text-[28px] font-bold text-[#04082C]">
          {value}
        </span>
        <span className="ml-1 text-[12px] md:text-[14px] font-normal text-[#6F6464]">
          slots
        </span>
        <div>
          <span className="ml-1 text-[12px] md:text-[14px] font-normal font-openSans leading-[150%] text-[#6F6464]">
            Total Vehicle Slots (Fleet Size)
          </span>
        </div>
      </div>

      {/* Slider */}
      <div className="mx-auto mt-5 w-full max-w-full sm:max-w-[610px]">
        {/* Top Labels */}
        <div className="flex justify-between text-sm">
          <span className="text-[10px] sm:text-[12px] font-medium text-black">
            10
          </span>
          <span
            className={`text-[10px] sm:text-[12px] font-medium ${
              value >= 100 ? "text-black" : "text-[#999]"
            }`}
          >
            100
          </span>
          <span
            className={`text-[10px] sm:text-[12px] font-medium ${
              value >= 200 ? "text-black" : "text-[#999]"
            }`}
          >
            200
          </span>
        </div>

        {/* Slider Container */}
        <div className="relative h-[32px] my-2">
          {/* Track */}
          <div className="absolute top-1/2 z-10 h-[12px] w-full -translate-y-1/2 transform rounded-full bg-[#F6F6F6]"></div>

          {/* Dots */}
          {[50, 100, 150, 200].map((dotValue) => (
            <div
              key={dotValue}
              className="absolute top-1/2 z-20 h-[6px] w-[6px] -translate-y-1/2 transform rounded-full bg-[#DDD]"
              style={{ left: `${((dotValue - 10) / 190) * 100}%` }}
            ></div>
          ))}

          {/* Progress (filled with #0336BC) */}
          <div
            className="absolute top-1/2 z-30 h-3 -translate-y-1/2 rounded-full"
            style={{
              width: `${getPercentage(value)}%`,
              backgroundColor: "#0336BC",
            }}
          ></div>

          {/* Slider Input */}
          <input
            type="range"
            min="10"
            max="200"
            step="1"
            value={value}
            onChange={handleChange}
            className="relative z-40 h-[32px] w-full cursor-pointer appearance-none bg-transparent"
            style={{
              outline: "none",
              WebkitAppearance: "none",
              MozAppearance: "none",
            }}
          />

          {/* Custom Handle (using #2D65F2) */}
          <div
            className="pointer-events-none absolute top-1/2 z-40 h-[20px] w-[24px] sm:h-[24px] sm:w-[32px] -translate-y-1/2 transform rounded-md border-2 border-white shadow-md"
            style={{
              left: `${getPercentage(value)}%`,
              transform: "translate(-50%, -50%)",
              backgroundColor: "#2D65F2",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.14)",
            }}
          >
            {/* Double Chevron Icon */}
            <div className="flex h-full w-full items-center justify-center p-1 text-white">
              <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Discount Labels (without the gradient) */}
      {/* <div className="flex w-full relative mt-[2px] text-sm text-gray-500">
        <span className="text-[12px] font-medium text-black">Price</span>
        <span
          className={`text-[12px] font-medium ml-[67px] ${
            value >= 50 ? "text-black" : "text-[#999]"
          }`}
        >
          -5%
        </span>
        <span
          className={`text-[12px] font-medium ml-[67px] ${
            value >= 100 ? "text-black" : "text-[#999]"
          }`}
        >
          -10%
        </span>
        <span
          className={`text-[12px] font-medium ml-[67px] ${
            value >= 150 ? "text-black" : "text-[#999]"
          }`}
        >
          -18%
        </span>
        <span
          className={`text-[12px] font-medium ml-[67px] ${
            value >= 200 ? "text-black" : "text-[#999]"
          }`}
        >
          -30%
        </span>
      </div> */}

      {/* Cross-browser slider styling */}
      <style jsx global>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 20px;
          background: transparent;
          cursor: pointer;
        }

        @media (min-width: 640px) {
          input[type="range"]::-webkit-slider-thumb {
            width: 32px;
            height: 24px;
          }
        }

        input[type="range"]::-moz-range-thumb {
          width: 24px;
          height: 20px;
          background: transparent;
          cursor: pointer;
          border: none;
        }

        @media (min-width: 640px) {
          input[type="range"]::-moz-range-thumb {
            width: 32px;
            height: 24px;
          }
        }

        input[type="range"]:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default AccurateSlider;
