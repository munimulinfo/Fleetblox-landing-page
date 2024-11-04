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


import Acura from '@/../public/images/Car_brands/Acura.svg'
import Alfa_romo from '@/../public/images/Car_brands/Alfa_romo.png'
import Audi from '@/../public/images/Car_brands/Audi.png'
import BMW from '@/../public/images/Car_brands/Bmw.png'
import Buick from '@/../public/images/Car_brands/Buick.png'
import Cadillac from '@/../public/images/Car_brands/Cadillac.png'

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

const BrandCarList = [
    {
        brand: "Acura",
        brandLogo: Acura,
        year: "2014+",
        models: [
            { name: "ILX", years: "2018-2022" },
            { name: "Integra", years: "2023+" },
            { name: "MDX", years: "2018+" },
            { name: "NSX", years: "2018-2022" },
            { name: "RDX", years: "2018+" },
            { name: "RLX", years: "2017-2020" },
            { name: "TLX", years: "2014+" },
            { name: "ZDX", years: "2024+" }
        ]
    },
    {
        brand: "Alfa Romeo",
        brandLogo: Alfa_romo,
        year: "2020+",
        models: [
            { name: "Giulia", years: "2020+" },
            { name: "Stelvio", years: "2020+" },
            { name: "Tonale", years: "2023+" }
        ]
    },
    {
        brand: "Audi",
        brandLogo: Audi,
        year: "2019+",
        models: [
            { name: "A3", years: "2019+" },
            { name: "A4", years: "2017+" },
            { name: "A5", years: "2018+" },
            { name: "A5 PHEV", years: "2022+" },
            { name: "A6", years: "2019+" },
            { name: "A7", years: "2019+" },
            { name: "A7 PHEV", years: "2021+" },
            { name: "A8", years: "2019+" },
            { name: "A8 PHEV", years: "2020+" },
            { name: "Allroad", years: "2017-2021" },
            { name: "e-tron", years: "2019+" },
            { name: "Q3", years: "2019+" },
            { name: "Q4 e-tron", years: "2022+" },
            { name: "Q5", years: "2019+" },
            { name: "Q5 PHEV", years: "2020+" },
            { name: "Q7", years: "2019+" },
            { name: "Q8", years: "2019+" },
            { name: "Q8 e-tron", years: "2024+" },
            { name: "Q8 Sportback e-tron", years: "2024+" },
            { name: "R8", years: "2023+" },
            { name: "RS5", years: "2019+" },
            { name: "RS7", years: "2019+" },
            { name: "S4", years: "2017+" },
            { name: "S5", years: "2018+" },
            { name: "S6", years: "2019+" },
            { name: "S7", years: "2019+" },
            { name: "S8", years: "2019+" },
            { name: "SQ5", years: "2018+" },
            { name: "SQ7", years: "2017+" },
            { name: "SQ8", years: "2023+" },
            { name: "TT", years: "2021+" },
            { name: "TTS", years: "2023+" }
        ]
    },
    {
        brand: "BMW",
        brandLogo: BMW,
        year: "2016+",
        models: [
            { name: "2 Series", years: "2016+" },
            { name: "3 Series", years: "2016+" },
            { name: "3 Series PHEV", years: "2016+" },
            { name: "4 Series", years: "2016+" },
            { name: "5 Series", years: "2016+" },
            { name: "5 Series PHEV", years: "2017+" },
            { name: "6 Series", years: "2016-2019" },
            { name: "7 Series", years: "2016+" },
            { name: "7 Series PHEV", years: "2017+" },
            { name: "8 Series", years: "2018+" },
            { name: "i3", years: "2017-2021" },
            { name: "i3 REX", years: "2017-2021" },
            { name: "i4", years: "2021+" },
            { name: "i5", years: "2024+" },
            { name: "i7", years: "2023+" },
            { name: "i8", years: "2016-2020" },
            { name: "iX", years: "2021+" },
            { name: "M2", years: "2016+" },
            { name: "M3", years: "2016+" },
            { name: "M4", years: "2016+" },
            { name: "M5", years: "2018+" },
            { name: "M6", years: "2016-2019" },
            { name: "M8", years: "2020+" },
            { name: "X1", years: "2016+" },
            { name: "X2", years: "2018+" },
            { name: "X3", years: "2016+" },
            { name: "X3 PHEV", years: "2020-2021" },
            { name: "X3 M", years: "2020+" },
            { name: "X4", years: "2016+" },
            { name: "X4 M", years: "2020+" },
            { name: "X5", years: "2016+" },
            { name: "X5 PHEV", years: "2016+" },
            { name: "X5 M", years: "2017+" },
            { name: "X6", years: "2016+" },
            { name: "X6 M", years: "2017+" },
            { name: "X7", years: "2019+" },
            { name: "Z4", years: "2016+" }
        ]
    },
    {
        brand: "Buick",
        brandLogo: Buick,
        year: "2014+",
        models: [
            { name: "Cascada", years: "2016-2019" },
            { name: "Enclave", years: "2015+" },
            { name: "Encore", years: "2015+" },
            { name: "Encore GX", years: "2020+" },
            { name: "Encore GX ST", years: "2020+" },
            { name: "Envision", years: "2016+" },
            { name: "LaCrosse", years: "2015-2019" },
            { name: "Regal", years: "2015-2017" },
            { name: "Regal Sportback", years: "2018-2020" },
            { name: "Regal TourX", years: "2018-2020" },
            { name: "Verano", years: "2014-2017" }
        ]
    },
    {
        brand: "Cadillac",
        brandLogo: Cadillac,
        year: "2014+",
        models: [
            { name: "ATS", years: "2015-2019" },
            { name: "CT4", years: "2020+" },
            { name: "CT4 V", years: "2020+" },
            { name: "CT5", years: "2020+" },
            { name: "CT5 V", years: "2020+" },
            { name: "CT6", years: "2016-2019" },
            { name: "CT6 PHEV", years: "2017-2018" },
            { name: "CT6", years: "2020" },
            { name: "Escalade", years: "2021+" },
            { name: "XT4", years: "2019+" },
            { name: "XT5", years: "2017+" },
            { name: "XT6", years: "2020+" }
        ]
    },
];

export { HeroSection, cars, countries, compatibleBrands, countryCodes, BrandCarList }