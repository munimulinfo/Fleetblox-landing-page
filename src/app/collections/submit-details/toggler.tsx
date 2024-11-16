import React, { useState } from 'react';

const PricingToggle = () => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <div className="flex items-center gap-4">
            <h1 className={`text-[14px] font-inter font-semibold text-p_blue`}>
                Monthly
            </h1>

            <button
                onClick={() => setIsYearly(!isYearly)}
                className="relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-200 ease-in-out bg-p_blue"
                 
                role="switch"
                aria-checked={isYearly}
            >
                <span
                    className={`inline-block size-4 transform rounded-full bg-bg_white shadow-lg transition-transform duration-200 ease-in-out ${isYearly ? 'translate-x-7' : 'translate-x-1'
                        }`}
                />
            </button>

            <h1 className={`text-[14px] font-inter font-semibold text-ti_grey`}>
                Yearly
            </h1>
        </div>
    );
};

export default PricingToggle;