"use client";
import { useState, useEffect, createContext, useContext } from "react";
import { usePathname } from "next/navigation";

interface ProgressContextType {
  progress: number;
  setProgress: (value: number) => void;
  setCustomProgress: (value: number) => void;
  apiResponse: unknown[];
  setApiResponse: (response: unknown[]) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  steps: {
    SELECT_COUNTRY: string;
    SELECT_BRAND: string;
    SELECT_BRAND_MODEL: (model: string) => string;
    COMPATIBLE: string;
    SUBMIT_DETAILS: string;
    VIN: string;
  };
}

const ProgressContext = createContext<ProgressContextType>({
  progress: 0,
  setProgress: () => {},
  setCustomProgress: () => {},
  apiResponse: [],
  setApiResponse: () => {},
  currentStep: 0,
  setCurrentStep: () => {},
  steps: {
    SELECT_COUNTRY: "/getting-started",
    SELECT_BRAND: "/collections/select-brand",
    SELECT_BRAND_MODEL: (model: string) => `/collections/select-brand/${model}`,
    COMPATIBLE: "/collections/compatible",
    SUBMIT_DETAILS: "/collections/submit-details",
    VIN: "/collections/VIN",
  },
});

export const useProgressUpdater = () => useContext(ProgressContext);

export const ProgressProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentPath, setCurrentPath] = useState("/collections/select-country");
  const [progress, setProgressState] = useState(1);
  const [apiResponse, setApiResponseState] = useState<unknown[]>([]);

  // Initialize currentStep from localStorage (if available)
  const [currentStep, setCurrentStep] = useState<number>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("currentStep");
      return saved ? Number(saved) : 0;
    }
    return 0;
  });

  // Persist currentStep to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("currentStep", currentStep.toString());
    }
  }, [currentStep]);

  const setApiResponse = (response: unknown[]) => {
    setApiResponseState(response);
  };

  const setProgress = (value: number) => {
    setProgressState((prev) => prev + value);
  };

  const steps = {
    SELECT_COUNTRY: "/getting-started",
    SELECT_BRAND: "/collections/select-brand",
    SELECT_BRAND_MODEL: (model: string) => `/collections/select-brand/${model}`,
    COMPATIBLE: "/collections/compatible",
    SUBMIT_DETAILS: "/collections/submit-details",
    VIN: "/collections/VIN",
  };

  const setCustomProgress = (value: number) => {
    if (value >= 0 && value <= 100) {
      setProgressState(value);
    } else if (pathname === steps.VIN) {
      setCustomProgress(30);
    } else if (pathname === steps.COMPATIBLE) {
      setProgressState(100);
    } else {
      console.warn("Progress value should be between 0 and 100");
    }
  };

  useEffect(() => {
    setCurrentPath(pathname);

    if (pathname === steps.COMPATIBLE) {
      setCustomProgress(100);
    } else if (pathname === steps.SUBMIT_DETAILS) {
      setCustomProgress(progress);
    }
  }, [pathname, progress]);

  const value: ProgressContextType = {
    progress,
    setProgress,
    setCustomProgress,
    apiResponse,
    setApiResponse,
    currentStep,
    setCurrentStep,
    steps,
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};
