import star from '../../public/images/1.svg'
import wifi from '../../public/images/2.svg'
import chart from '../../public/images/3.svg'
import circle_chart from '../../public/images/4.svg'

import US from '@/../public/images/united-states.png'
import AT from '@/../public/images/austria.png'
import BE from '@/../public/images/belgium.png'
import CA from '@/../public/images/canada.png'
import HR from '@/../public/images/croatia.png'
import CZ from '@/../public/images/czech-republic.png'
import DK from '@/../public/images/denmark.png'
import EE from '@/../public/images/estonia.png'


const HeroSection =
    [
        {
            "icon": star,
            "title": "Advanced Sales and Brand Management"
        },
        {
            "icon": wifi,
            "title": "Secured AI-Driven Fleet Management"
        },
        {
            "icon": chart,
            "title": "Targeted Marketing, Sales Booster"
        },
        {
            "icon": circle_chart,
            "title": "Superior Branding, Pro Website Builder"
        }
    ]
const cars = [
    { value: "20+", title: "Car Brands" },
    { value: "400+", title: " Cars Models" },
    { value: "20", title: "Countries" },
];

const countries = [
    { code: 'US', name: 'United States of America', flag: US },
    { code: 'AT', name: 'Austria', flag: AT },
    { code: 'BE', name: 'Belgium', flag: BE },
    { code: 'CA', name: 'Canada', flag: CA },
    { code: 'HR', name: 'Croatia', flag: HR },
    { code: 'CZ', name: 'Czech Republic', flag: CZ },
    { code: 'DK', name: 'Denmark', flag: DK },
    { code: 'EE', name: 'Estonia', flag: EE },
];

export { HeroSection, cars, countries }