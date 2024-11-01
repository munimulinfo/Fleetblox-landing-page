import React from "react";
import Image from "next/image";
import start from '@/../public/images/start-with-us.jpg'
import Form from './Form'

const Index = () => {
    return <div className="relative w-screen h-screen">
        <Image src={start} alt="start with us" className="absolute inset-0 w-full h-full" />
        <Form />
    </div>;
};

export default Index;
