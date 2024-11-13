import Link from "next/link";

import React from "react";

interface NotCompitableProps {
    href: string;
    text: string;
    className?: string;
}

const NotCompitable = ({ href, text, className }: NotCompitableProps) => {
    return <button className={` w-1/2 pre_landing_page_btn font-inter   text-ti_grey px-[14px] py-[8px]   rounded-md ${className}`}>
        <Link href={href}>{text}</Link>
    </button>;
};

export default NotCompitable;
