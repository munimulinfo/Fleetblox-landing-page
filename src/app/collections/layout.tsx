"use client";

import Image from "next/image";
import Link from "next/link";
import start from "@/../public/images/start-with-us.jpg";
import Logo from "@/../public/images/Logo.png";
import ProgressBar from "@/components/shared/ProgressBar";
import { ProgressProvider } from "@/hooks/useProgress";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`relative h-screen w-screen`}>
                <ProgressProvider>
                    <Link href="/" className=" ">
                        <Image
                            src={start}
                            alt="start with us"
                            className="absolute inset-0 h-full w-full"
                        />
                    </Link>
                    <Image
                        src={Logo}
                        alt="start with us"
                        className="absolute left-10 top-10"
                    />

                    <div className="z-[1000000] flex min-h-screen flex-col items-center justify-center overflow-auto bg-bg_white p-4">
                        <div className="relative z-[2000000] -mb-[5px] flex h-[5px] overflow-hidden w-full max-w-[650px] items-start justify-start rounded-tl-lg rounded-tr-lg ">
                            <ProgressBar />
                        </div>
                        {children}
                    </div>
                </ProgressProvider>
            </body>
        </html>
    );
}
