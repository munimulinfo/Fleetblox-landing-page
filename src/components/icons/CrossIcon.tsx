import React from "react";

const CrossIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="32"
      height="29"
      viewBox="0 0 32 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M29.9102 0.5H23.9962C23.7223 0.5 23.4624 0.620975 23.2861 0.830542L0 28.5H8.35401L30.6205 2.02569C31.1284 1.4219 30.6991 0.5 29.9102 0.5Z"
        fill="#D35500"
      />
      <path
        d="M2.08984 0.5H8.00376C8.27766 0.5 8.53758 0.620975 8.71395 0.830542L32 28.5H23.646L1.37947 2.02569C0.871637 1.4219 1.30088 0.5 2.08984 0.5Z"
        fill="#FF0000"
        fillOpacity="0.6"
      />
    </svg>
  );
};

export default CrossIcon;
