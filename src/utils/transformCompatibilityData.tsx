// Interface for the capability object in the API response
interface Capability {
    permission: string;
    endpoint: string;
    capable: boolean;
    reason: string | null;
}

// Interface for each car object in the API response
interface ApiCarResponse {
    vin: string;
    compatible: boolean;
    capabilities: Capability[];
    isCompatible: boolean;
    message: string;
}

// Interface for the transformed car data
export interface TransformedCarData {
    vin: string;
    isCompatible: boolean;
    endpoints: string[];
}


const transformCompatibilityData = (data: ApiCarResponse[]): TransformedCarData[] => {
    return data.map((car) => ({
        vin: car.vin,
        isCompatible: car.isCompatible,
        endpoints: car.capabilities?.map((capability) => capability.endpoint),
    }));
};

export default transformCompatibilityData;