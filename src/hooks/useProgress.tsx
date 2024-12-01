'use client'
import { useState, useEffect, createContext, useContext } from 'react';
import { usePathname } from 'next/navigation';

// Create context with progress value and setter
const ProgressContext = createContext<{
    progress: number;
    setProgress: (value: number) => void;
    setCustomProgress: (value: number) => void;
    apiResponse: unknown[]; // Explicitly type as an array
    setApiResponse: (response: unknown[]) => void;

}>({
    progress: 0,
    setProgress: () => { },
    setCustomProgress: () => { },
    apiResponse: [],
    setApiResponse: () => { }
});

export const useProgressUpdater = () => useContext(ProgressContext);


export const ProgressProvider = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const [currentPath, setCurrentPath] = useState('/collections/select-country');
    const [progress, setProgressState] = useState(1);
    const [apiResponse, setApiResponseState] = useState<unknown[]>([]); // Explicitly type as an array

    const setApiResponse = (response: unknown[]) => {
        setApiResponseState(response);
    };

    console.log(pathname);


    const setProgress = (value: number) => {
        setProgressState(prev => prev + value);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const steps = {
        SELECT_COUNTRY: '/collections/select-country',
        SELECT_BRAND: '/collections/select-brand',
        SELECT_BRAND_MODEL: (model: string) => `/collections/select-brand/${model}`,
        COMPATIBLE: '/collections/compatible',
        SUBMIT_DETAILS: '/collections/submit-details',
        VIN: '/collections/VIN'
    };

    // Function to update progress to a specific value directly
    const setCustomProgress = (value: number) => {
        if (value >= 0 && value <= 100) {
            setProgressState(value);
        } else if (pathname === steps.VIN) {
            setCustomProgress(30);
        } else if (pathname === steps.COMPATIBLE) {
            setProgressState(100);
        }
        else {
            console.warn('Progress value should be between 0 and 100');
        }
    };

    // Automatically updates progress based on current route
    useEffect(() => {
        setCurrentPath(pathname);

        // Update progress based on current path
        if (pathname === steps.COMPATIBLE) {
            setCustomProgress(100);
        } else if (pathname === steps.SUBMIT_DETAILS) {
            setCustomProgress(progress);
        }
    }, [pathname, steps, progress]);




    const value = {
        currentPath,
        steps,
        progress,
        setProgress, // Expose setProgress to children
        setCustomProgress,
        apiResponse,
        setApiResponse, // Expose setApiResponse to children
    };

    return (
        <ProgressContext.Provider value={value}>
            {children}
        </ProgressContext.Provider>
    );
};