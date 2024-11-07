"use client";

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
      </body>
    </html>
  );
}