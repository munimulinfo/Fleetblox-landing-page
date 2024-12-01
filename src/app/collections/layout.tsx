"use client";

import Image from "next/image";
import start from "@/../public/images/start-with-us.jpg";
import Logo from "@/../public/images/Logo.png";
import ProgressBar from "@/components/shared/ProgressBar";
import { ProgressProvider } from "@/hooks/useProgress";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            
        }
    }, []);

    return (
        <div className="relative antialiased h-screen w-screen">
            <ProgressProvider>
                <Image
                    src={start}
                    alt="start with us"
                    className="absolute inset-0 h-screen w-screen object-cover hidden xl:block"
                />
                <Image
                    src={Logo}
                    alt="start with us"
                    className="absolute left-10 top-10 hidden xl:block"
                />
                <div className="z-[1000000] flex min-h-screen flex-col sm:items-center sm:justify-center overflow-auto bg-bg_white lg:p-4">
                    {(pathname !== '/collections/submit-details-early-interest' && pathname !== '/collections/submit-details' && pathname !== '/collections/price-plan') && <div className="relative z-[2000000] -mb-[5px] flex h-[5px] overflow-hidden w-full max-w-[650px] items-start justify-start sm:rounded-tl-lg sm:rounded-tr-lg">
                        <ProgressBar />
                    </div>}
                    {children}
                </div>
            </ProgressProvider>
        </div>
    );
}
