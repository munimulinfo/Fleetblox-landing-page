"use client";
import { Toaster } from 'react-hot-toast';
import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`antialiased bg-bg_white`}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}