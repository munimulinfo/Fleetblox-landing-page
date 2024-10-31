"use client";
import Navbar from "@/components/shared/Navbar/Index";
import Footer from "@/components/shared/Footer/Index";
import "./globals.css";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // Import and initialize Locomotive Scroll dynamically
    import("locomotive-scroll").then((locomotiveModule) => {
      const LocomotiveScroll = locomotiveModule.default;
      new LocomotiveScroll({
        lenisOptions: {
          duration: 1.5,
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 0.75,
          touchMultiplier: 1.5,
          easing: (t: number) => 1 - Math.pow(1 - t, 5),
        },
      });
    });
  }, []);
  return (
    <html lang="en">
      <body className={`antialiased bg-bg_white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}