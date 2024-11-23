'use client';
import Image from "next/image";
import success from "@/../public/images/success.svg";
import start from "@/../public/images/start-with-us.jpg";
import { useEffect } from "react";

const Successfull = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('brands');
            localStorage.removeItem('brandModels');
            localStorage.removeItem('country');
        }
    }, []);

    return (
        <div className="relative h-screen w-screen">
            <Image
                src={start}
                alt="start with us"
                className="absolute inset-0 h-full w-full hidden lg:block "
            />

            <div className="z-[1000000]  min-h-screen items-center justify-center overflow-auto bg-bg_white  flex">
                <div className="relative flex h-[780px] w-full max-w-[650px] flex-col rounded-lg bg-bg_white px-[20px] xs:px-[30px] sm:px-[60px]  py-[20px] md:py-[60px] lg:shadow-lg">
                    <div className="flex flex-shrink-0 flex-col items-center justify-center">
                        <Image alt="failed image" className="mb-[10px]" src={success} />
                        <h2 className="pre_landing_page_title font-inter">
                            Submitted successfully!
                        </h2>
                        <p className="pre_landing_page_text">
                            {`Your details have been submitted successfully. We’ll be in touch soon.`}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Successfull;
