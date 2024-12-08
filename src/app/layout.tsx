"use client";
import { Toaster } from 'react-hot-toast';
import "./globals.css";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (pathname === '/') {
        localStorage.clear()
      }
    }
  }, [pathname]);
  return (
    <html lang="en">
      <body className={`antialiased bg-bg_white`}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}