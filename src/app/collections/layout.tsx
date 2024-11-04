import Image from "next/image";
import Logo from '@/../public/images/Logo.png'


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
            <body className={``}>
                {children}
                <Image src={Logo} alt="start with us" className="absolute top-10 left-10" />
            </body>
        </html>
    );
}