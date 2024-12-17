import Image from 'next/image';
import meter from '@/../public/images/access_point/Meter.svg'
import fule from '@/../public/images/access_point/Fule.svg'
import life from '@/../public/images/access_point/Life.svg'
import location from '@/../public/images/access_point/Location.svg'
import tire from '@/../public/images/access_point/Tire.svg'
import lock from '@/../public/images/access_point/lock.svg'

// Define all possible permissions
const permissions = [
    { key: '/odometer', icon: meter, label: 'Odometer' },
    { key: '/tires/pressure', icon: tire, label: 'Tire pressure' },
    { key: '/fuel', icon: fule, label: 'Fuel tank level' },
    { key: '/location', icon: location, label: 'Location' },
    { key: '/engine/oil', icon: life, label: 'Engine oil life' },
    { key: '/security', icon: lock, label: 'Lock & unlock' },
];

interface EndpointStatus {
    endpoint: string;
    capable: boolean;
}

export default function Access({ endpoints }: { endpoints: EndpointStatus[], }) {

    // Filter permissions based on the provided endpoints and ensure they are capable
    const allowedPermissions = permissions.filter(permission =>
        endpoints.some(endpoint => endpoint.endpoint === permission.key && endpoint.capable)
    );

    return (
        <div className="w-full">
            <h3 className="mt-[20px] w-full font-inter font-bold text-[12px] text-ti_grey">
                Access permissions
            </h3>
            <div className="grid grid-cols-2 mt-[10px] gap-[10px]">
                {allowedPermissions.map((permission, index) => (
                    <div
                        key={index}
                        className="flex gap-[10px] px-[10px] py-[8px] border border-bg_powerd_blue"
                    >
                        <Image
                            className="size-[18px]"
                            src={permission.icon}
                            alt={permission.label}
                        />
                        <span className="text-[12px] font-inter text-ti_light_black font-medium">
                            {permission.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
