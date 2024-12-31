import { Toaster } from 'react-hot-toast';
import "./globals.css";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: 'FleetBlox',
    default: 'FleetBlox', // Default title
  },
  description: '🚗 Fleetblox Cloud Garage is compatible with 43 car makes, seamlessly connecting to over 177 million vehicles through a single platform. 🌍 With global coverage across North America and Europe, our advanced AI-driven solution 🤖 optimizes fleet management, ensuring maximum operational efficiency ⚙️ and streamlined performance—all in one powerful platform.',
  keywords: ['#fleetmanagement', '#advancedfleetmanagement',
    '#fleetmanagementsolutions', '#fleetmanagementsystems', '#gpsfleetmanagement',
    '#customerservice', '#autotransport', '#usedtrucks', '#logisticssolutions',
    '#gpstracking', '#trucksforsale', '#truckerslife', '#commercialvehicles',
    '#fuelsolutions', '#fuelmanagementsystems', '#autowatchghost', '#fleetsolutions',
    '#fleettechnology', '#fleetblox', '#aibasedsolution', '#canada', '#northamerica'
  ],
  icons: {
    icon: 'https://ibb.co.com/9HsF4Vm',
    apple: [
      { url: 'https://ibb.co.com/9HsF4Vm', sizes: '180x180' },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },


  openGraph: {
    title: 'AI-POWERED FLEET MANAGEMENT',
    description: '🚗 Fleetblox Cloud Garage is compatible with 43 car makes, seamlessly connecting to over 177 million vehicles through a single platform. 🌍 With global coverage across North America and Europe, our advanced AI-driven solution 🤖 optimizes fleet management, ensuring maximum operational efficiency ⚙️ and streamlined performance—all in one powerful platform.',
    url: 'https://www.fleetblox.com/',
    siteName: 'Fleetblox',
    images: [
      {
        url: 'https://ibb.co.com/ZLrrC8T',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'AI-POWERED FLEET MANAGEMENT',
    description: '🚗 Fleetblox Cloud Garage is compatible with 43 car makes, seamlessly connecting to over 177 million vehicles through a single platform. 🌍 With global coverage across North America and Europe, our advanced AI-driven solution 🤖 optimizes fleet management, ensuring maximum operational efficiency ⚙️ and streamlined performance—all in one powerful platform.',
  },
};

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