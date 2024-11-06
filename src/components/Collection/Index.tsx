import React from "react";
import Image from "next/image";
import start from '@/../public/images/start-with-us.jpg'
import Link from "next/link";

const Index = () => {
    return <div className="relative w-screen h-screen">
        <Link href="/">
            <Image
                src={start}
                alt="start with us"
                className="absolute inset-0 h-full w-full"
            />
        </Link> 
    </div>;
};

export default Index;
