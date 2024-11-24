"use client";

import Image from "next/image";
import { motion } from "framer-motion";


import image1 from "@/../public/images/New folder/1.svg"
import image2 from "@/../public/images/New folder/2.svg"
import image3 from "@/../public/images/New folder/3.png"
import image4 from "@/../public/images/New folder/4.svg"
import image5 from "@/../public/images/New folder/5.svg"
import image6 from "@/../public/images/New folder/6.png"
import image7 from "@/../public/images/New folder/7.svg"
import image8 from "@/../public/images/New folder/8.svg"
import image9 from "@/../public/images/New folder/9.svg"
import image10 from "@/../public/images/New folder/10.svg"
import image11 from "@/../public/images/New folder/11.svg"
import image12 from "@/../public/images/New folder/12.svg"
import image13 from "@/../public/images/New folder/13.svg"
import image14 from "@/../public/images/New folder/14.svg"
import image15 from "@/../public/images/New folder/15.svg"
import image16 from "@/../public/images/New folder/16.svg"
import image17 from "@/../public/images/New folder/17.svg"
import image18 from "@/../public/images/New folder/18.svg"
import image19 from "@/../public/images/New folder/19.svg"
import image20 from "@/../public/images/New folder/20.svg"
import image21 from "@/../public/images/New folder/21.svg"
import image22 from "@/../public/images/New folder/22.svg"
import image23 from "@/../public/images/New folder/23.svg"
import image24 from "@/../public/images/New folder/24.svg"
import image25 from "@/../public/images/New folder/25.svg"
import image26 from "@/../public/images/New folder/26.svg"
import image27 from "@/../public/images/New folder/27.svg"
import image28 from "@/../public/images/New folder/28.svg"
import image29 from "@/../public/images/New folder/29.svg"
import image30 from "@/../public/images/New folder/30.svg"
import image31 from "@/../public/images/New folder/31.svg"
import image32 from "@/../public/images/New folder/32.svg"


const MarquryScroller = () => {

    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
        image13,
        image14,
        image15,
        image16,
        image17,
        image18,
        image19,
        image20,
        image21,
        image22,
        image23,
        image24,
        image25,
        image26,
        image27,
        image28,
        image29,
        image30,
        image31,
        image32
    ];
    const images2 = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
        image13,
        image14,
        image15,
        image16,
        image17,
        image18,
        image19,
        image20,
        image21,
        image22,
        image23,
        image24,
        image25,
        image26,
        image27,
        image28,
        image29,
        image30,
        image31,
        image32
    ];

    return <>
        <motion.div className="flex flex-shrink-0"
            initial={{ translateX: "-100%" }}
            animate={{ translateX: "0%" }}
            transition={{
                duration: 40,
                ease: "linear",
                repeat: Infinity
            }}>
            {images.map((image, index) => (
                <motion.div key={index} className=" size-[100px] sm:size-[80px] lg2:size-[100px]  mr-5 xl:mr-10 flex items-center justify-center">
                    <Image src={image} alt="image" className=' ' width={100} height={100} />
                </motion.div>
            ))}
        </motion.div>
        <motion.div className="flex flex-shrink-0"
            initial={{ translateX: "-100%" }}
            animate={{ translateX: "0%" }}
            transition={{
                duration: 40,
                ease: "linear",
                repeat: Infinity
            }}>
            {images2.map((image, index) => (
                <motion.div key={index} className=" size-[100px] sm:size-[80px] lg2:size-[100px] mr-5 xl:mr-10 flex items-center justify-center">
                    <Image src={image} alt="image" className=' ' width={100} height={100} />
                </motion.div>
            ))}
        </motion.div>
    </>;
};

export default MarquryScroller;

