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



import brand1 from '@/../public/images/New folder/Frame 1707481648.svg'
import brand2 from '@/../public/images/New folder/Frame 1707481650.svg'
import brand3 from '@/../public/images/New folder/Frame 1707481652.svg'



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


const compatibleBrands = [
    {
        name: 'Acura',
        image: brand1,
        compatible: true
    },
    {
        name: 'Alfa Romeo',
        image: brand2,
        compatible: true
    },
    {
        name: 'Audi',
        image: brand3,
        compatible: false
    }
]


const countries = [
    { name: 'United States of America', flag: US },
    { name: 'Austria', flag: AT },
    { name: 'Belgium', flag: BE },
    { name: 'Canada', flag: CA },
    { name: 'Croatia', flag: HR },
    { name: 'Czech Republic', flag: CZ },
    { name: 'Denmark', flag: DK },
    { name: 'Estonia', flag: EE },
];

const countryCodes = [
    { flag: US, code: '+1', country: '🇺🇸 United States' },
    { flag: AT, code: '+43', country: '🇦🇹 Austria' },
    { flag: BE, code: '+32', country: '🇧🇪 Belgium' },
    { flag: CA, code: '+1', country: '🇨🇦 Canada' },
    { flag: HR, code: '+385', country: '🇭🇷 Croatia' },
    { flag: CZ, code: '+420', country: '🇨🇿 Czech Republic' },
    { flag: DK, code: '+45', country: '🇩🇰 Denmark' },
    { flag: DK, code: '+372', country: '🇪🇪 Estonia' },
    { flag: EE, code: '+358', country: '🇫🇮 Finland' },
    { flag: EE, code: '+33', country: '🇫🇷 France' },
    { flag: EE, code: '+49', country: '🇩🇪 Germany' },
    { flag: EE, code: '+36', country: '🇭🇺 Hungary' },
    { flag: EE, code: '+353', country: '🇮🇪 Ireland' },
    { flag: EE, code: '+39', country: '🇮🇹 Italy' },
    { flag: EE, code: '+371', country: '🇱🇻 Latvia' },
    { flag: EE, code: '+370', country: '🇱🇹 Lithuania' },
    { flag: EE, code: '+386', country: '🇸🇮 Slovenia' },
    { flag: EE, code: '+34', country: '🇪🇸 Spain' },
    { flag: EE, code: '+46', country: '🇸🇪 Sweden' },
    { flag: EE, code: '+41', country: '🇨🇭 Switzerland' },
    { flag: EE, code: '+44', country: '🇬🇧 United Kingdom' },
    { flag: EE, code: '+352', country: '🇱🇺 Luxembourg' },
    { flag: EE, code: '+356', country: '🇲🇹 Malta' },
    { flag: EE, code: '+31', country: '🇳🇱 Netherlands' },
    { flag: EE, code: '+47', country: '🇳🇴 Norway' },
    { flag: EE, code: '+48', country: '🇵🇱 Poland' },
    { flag: EE, code: '+351', country: '🇵🇹 Portugal' },
    { flag: EE, code: '+40', country: '🇷🇴 Romania' },
    { flag: EE, code: '+421', country: '🇸🇰 Slovakia' },
];


export { HeroSection, cars, countries, compatibleBrands, countryCodes }