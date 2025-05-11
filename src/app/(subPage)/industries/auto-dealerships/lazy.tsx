'use client';
import Loader from '@/app/(gettingStarted)/components/Loader';
import dynamic from 'next/dynamic';



export const LazyAutoDealership = dynamic(
    () => import("./AutoDealership").then((mod) => mod.default),
    {
        ssr: false,
        loading: () => (
            <div className="flex flex-col justify-center items-center h-screen">
                <Loader />
                <p className="text-2xl font-bold text-gray-700 mt-4">Loading Auto Dealership...</p>
            </div>
        ),
    },
); 