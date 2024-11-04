import Image from "next/image";
import success from "@/../public/images/success.svg";
import start from "@/../public/images/start-with-us.jpg";

const Successfull = () => {
    return (
        <div className="relative h-screen w-screen">
            <Image
                src={start}
                alt="start with us"
                className="absolute inset-0 h-full w-full"
            />

            <div className="z-[1000000] flex min-h-screen items-center justify-center overflow-auto bg-bg_white p-4">
                <div className="relative flex h-[780px] w-full max-w-[650px] flex-col rounded-lg bg-bg_white px-[60px] py-[60px] shadow-lg">
                    <div className="flex flex-shrink-0 flex-col items-center justify-center">
                        <Image alt="failed image" className="mb-[10px]" src={success} />
                        <h2 className="pre_landing_page_title font-inter">
                            Subscribed successfully!
                        </h2>
                        <p className="pre_landing_page_text">
                            {` You have successfully subscribed to our newsletter. We’ll send you future updates directly to your email. Please contact us if you have any questions.`}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Successfull;
