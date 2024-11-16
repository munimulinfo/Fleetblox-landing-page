import meter from '@/../public/images/access_point/Meter.svg'
import fule from '@/../public/images/access_point/Fule.svg'
import life from '@/../public/images/access_point/Life.svg'
import location from '@/../public/images/access_point/Location.svg'
import tire from '@/../public/images/access_point/Tire.svg'
import lock from '@/../public/images/access_point/lock.svg'

import Image from 'next/image'

export default function Access() {

    const permissions = [
        { icon: meter, label: "Odometer" },
        { icon: tire, label: "Tire pressure" },
        { icon: fule, label: "Fuel tank level" },
        { icon: location, label: "Location" },
        { icon: life, label: "Engine oil life" },
        { icon: lock, label: "Lock & unlock" }
    ];

    return (
        <div className='w-full'>
            <h3 className=' mt-[20px] w-full font-inter font-semibold text-[10px] text-ti_dark_grey '>Access permissions</h3>
            <div className='grid grid-cols-2 mt-[10px]'>
                {permissions.map((permission, index) => (
                    <div key={index} className={`flex gap-[10px]  px-[10px] py-[8px] border border-bg_powerd_blue`}>
                        <Image className='size-[18px]' src={permission.icon} alt={permission.label} />
                        <span className='text-[10px] font-inter text-ti_light_black font-medium'>{permission.label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}