import React from "react";

export const Loader = () => {
    return (<div className="flex items-center justify-center p-4">
        <div className="relative w-12 h-12">
            Loading...
            {/* <div className="absolute w-full h-full border-4 border-black/5 rounded-full"></div>
            <div className="absolute w-full h-full border-4 border-ti_black rounded-full border-t-transparent animate-spin"></div> */}
        </div>
    </div>)
};
