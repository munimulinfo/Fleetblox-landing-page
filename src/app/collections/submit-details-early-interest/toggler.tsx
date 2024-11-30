const PricingToggle = ({
    isYearly,
    setIsYearly
}: {
    isYearly: boolean;
    setIsYearly: (planType: boolean) => void;
}) => {
    return (
        <div className="flex items-center gap-4">
            <h1 className={`text-[14px] font-inter font-semibold  text-ti_grey`}>
                Bill annually
            </h1>
            <button
                onClick={() => setIsYearly(!isYearly)} // Toggle `isYearly` on click
                className={`relative inline-flex h-6 w-12  items-center rounded-full transition-colors duration-200 ease-in-out ${isYearly ? 'bg-p_blue' : 'bg-ti_light_grey'} `}
                role="switch"
                aria-checked={isYearly}
            >
                <span
                    className={`inline-block size-4 transform rounded-full bg-bg_white shadow-lg transition-transform duration-200 ease-in-out ${isYearly ? 'translate-x-7' : 'translate-x-1'
                        }`}
                />
            </button>


        </div>
    );
};

export default PricingToggle;