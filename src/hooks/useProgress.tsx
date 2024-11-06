'use client'
import { useState, useEffect, createContext, useContext } from 'react';
import { usePathname } from 'next/navigation';

// Create context with progress value and setter
const ProgressContext = createContext<{
    progress: number;
    setProgress: (value: number) => void;
    setCustomProgress: (value: number) => void;
}>({
    progress: 0,
    setProgress: () => { },
    setCustomProgress: () => { }
});

// Hook to use the progress context
export const useProgressUpdater = () => useContext(ProgressContext);

// Example usage:
// const { progress, setProgress } = useProgress();
// setProgress(50); // Sets progress to 50%

export const ProgressProvider = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const [currentPath, setCurrentPath] = useState('/collections/select-country');
    const [progress, setProgressState] = useState(1);

    console.log(progress, 'checking the progress in progress provider');

    // Function to update progress value
    const setProgress = (value: number) => {
        setProgressState(prev => prev + value);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const steps = {
        SELECT_COUNTRY: '/collections/select-country',
        SELECT_BRAND: '/collections/select-brand',
        SELECT_BRAND_MODEL: (model: string) => `/collections/select-brand/${model}`,
        COMPATIBLE: '/collections/compatible',
        SUBMIT_DETAILS: '/collections/submit-details'
    };

    // Function to update progress to a specific value directly
    const setCustomProgress = (value: number) => {
        if (value >= 0 && value <= 100) {
            setProgressState(value);
        } else {
            console.warn('Progress value should be between 0 and 100');
        }
    };

    // Automatically updates progress based on current route
    useEffect(() => {
        setCurrentPath(pathname);

        // Update progress based on current path
       if (pathname === steps.COMPATIBLE) {
            setCustomProgress(90);
        } else if (pathname === steps.SUBMIT_DETAILS) {
            setCustomProgress(100);
        }
    }, [pathname, steps]);

    const value = {
        currentPath,
        steps,
        progress,
        setProgress, // Expose setProgress to children
        setCustomProgress
    };

    return (
        <ProgressContext.Provider value={value}>
            {children}
        </ProgressContext.Provider>
    );
};