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
import DK from '@/../public/images/denmark.png';
import EE from '@/../public/images/estonia.png';



import brand1 from '@/../public/images/New folder/1.svg';
import brand2 from '@/../public/images/New folder/2.svg';
import brand3 from '@/../public/images/New folder/3.png';


import Acura from '@/../public/images/Car_brands/Acura.svg';
import Alfa_romo from '@/../public/images/Car_brands/Alfa_romo.png';
import Audi from '@/../public/images/Car_brands/Audi.png';
import BMW from '@/../public/images/Car_brands/Bmw.png';
import Buick from '@/../public/images/Car_brands/Buick.png';
import Cadillac from '@/../public/images/Car_brands/Cadillac.png';

import { PricingPlan } from '@/app/collections/price-plan/Card';

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
    { value: "20+", title: "Countries" },
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

const
    countryCodes = [
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
            { name: "ILX 2018-2022" },
            { name: "Integra 2023+" },
            // { name: "MDX 2018+" },
            // { name: "NSX 2018-2022" },
            // { name: "RDX 2018+" },
            // { name: "RLX 2017-2020" },
            // { name: "TLX 2014+" },
            // { name: "ZDX 2024+" }
        ]
    },
    {
        brand: "Alfa Romeo",
        brandLogo: Alfa_romo,
        year: "2020+",
        models: [
            { name: "Giulia 2020+" },
            { name: "Stelvio 2020+" },
            { name: "Tonale 2023+" }
        ]
    },
    {
        brand: "Audi",
        brandLogo: Audi,
        year: "2019+",
        models: [
            { name: "A3 2019+" },
            { name: "A4 2017+" },
            // { name: "A5 2018+" },
            // { name: "A5 PHEV 2022+" },
            // { name: "A6 2019+" },
            // { name: "A7 2019+" },
            // { name: "A7 PHEV 2021+" },
            // { name: "A8 2019+" },
            // { name: "A8 PHEV 2020+" },
            // { name: "Allroad 2017-2021" },
            // { name: "e-tron 2019+" },
            // { name: "Q3 2019+" },
            // { name: "Q4 e-tron 2022+" },
            // { name: "Q5 2019+" },
            // { name: "Q5 PHEV 2020+" },
            // { name: "Q7 2019+" },
            // { name: "Q8 2019+" },
            // { name: "Q8 e-tron 2024+" },
            // { name: "Q8 Sportback e-tron 2024+" },
            // { name: "R8 2023+" },
            // { name: "RS5 2019+" },
            // { name: "RS7 2019+" },
            // { name: "S4 2017+" },
            // { name: "S5 2018+" },
            // { name: "S6 2019+" },
            // { name: "S7 2019+" },
            // { name: "S8 2019+" },
            // { name: "SQ5 2018+" },
            // { name: "SQ7 2017+" },
            // { name: "SQ8 2023+" },
            // { name: "TT 2021+" },
            // { name: "TTS 2023+" }
        ]
    },
    {
        brand: "BMW",
        brandLogo: BMW,
        year: "2016+",
        models: [
            { name: "2 Series 2016+" },
            { name: "3 Series 2016+" },
            // { name: "3 Series PHEV 2016+" },
            // { name: "4 Series 2016+" },
            // { name: "5 Series 2016+" },
            // { name: "5 Series PHEV 2017+" },
            // { name: "6 Series 2016-2019" },
            // { name: "7 Series 2016+" },
            // { name: "7 Series PHEV 2017+" },
            // { name: "8 Series 2018+" },
            // { name: "i3 2017-2021" },
            // { name: "i3 REX 2017-2021" },
            // { name: "i4 2021+" },
            // { name: "i5 2024+" },
            // { name: "i7 2023+" },
            // { name: "i8 2016-2020" },
            // { name: "iX 2021+" },
            // { name: "M2 2016+" },
            // { name: "M3 2016+" },
            // { name: "M4 2016+" },
            // { name: "M5 2018+" },
            // { name: "M6 2016-2019" },
            // { name: "M8 2020+" },
            // { name: "X1 2016+" },
            // { name: "X2 2018+" },
            // { name: "X3 2016+" },
            // { name: "X3 PHEV 2020-2021" },
            // { name: "X3 M 2020+" },
            // { name: "X4 2016+" },
            // { name: "X4 M 2020+" },
            // { name: "X5 2016+" },
            // { name: "X5 PHEV 2016+" },
            // { name: "X5 M 2017+" },
            // { name: "X6 2016+" },
            // { name: "X6 M 2017+" },
            // { name: "X7 2019+" },
            // { name: "Z4 2016+" }
        ]
    },
    {
        brand: "Buick",
        brandLogo: Buick,
        year: "2014+",
        models: [
            { name: "Cascada 2016-2019" },
            { name: "Enclave 2015+" },
            // { name: "Encore 2015+" },
            // { name: "Encore GX 2020+" },
            // { name: "Encore GX ST 2020+" },
            // { name: "Envision 2016+" },
            // { name: "LaCrosse 2015-2019" },
            // { name: "Regal 2015-2017" },
            // { name: "Regal Sportback 2018-2020" },
            // { name: "Regal TourX 2018-2020" },
            // { name: "Verano 2014-2017" }
        ]
    },
    {
        brand: "Cadillac",
        brandLogo: Cadillac,
        year: "2014+",
        models: [
            { name: "ATS 2015-2019" },
            { name: "CT4 2020+" },
            // { name: "CT4 V 2020+" },
            // { name: "CT5 2020+" },
            // { name: "CT5 V 2020+" },
            // { name: "CT6 2016-2019" },
            // { name: "CT6 PHEV 2017-2018" },
            // { name: "CT6 2020" },
            // { name: "Escalade 2021+" },
            // { name: "XT4 2019+" },
            // { name: "XT5 2017+" },
            // { name: "XT6 2020+" }
        ]
    },
];

const pricingPlan: PricingPlan[] = [
    {
        name: "Smart Fleet",
        description: "Digital garage essentials",
        price: 299,
        features: [
            "Real-Time Cloud Based Telematics",
            "360-Degree Vehicle Profiles",
            "Vehicle Body Condition Diagram",
            "Limited AI Based Vehicle Body Inspection",
            "Dynamic Fleet Alerts",
            "Custom reminders",
            "Fleet Documents Management",
            "Daily Task Tracker (Smart Task Manager)",
            "AI- Powered Fleet Guide"
        ]
    },
    {
        name: "Smart Fleet Pro",
        description: "Start your rental business",
        compliment: "All under Smart Fleet with",
        price: "5,99",
        features: [
            "Fleet Analytics and Insights",
            "Device-Free Fleet Tracking",
            "Dynamic Fleet Control",
            "Comprehensive Maintenance Management",
            "Automated Expense Management",
            "Unlimited AI Based Vehicle Body Inspection",
            "Mileage Based Alerts",
            "Unlimited Fleet Locations",
            "AI- Based Fleet Manager",
        ]
    },
    {
        name: "Ecosystem Fleet",
        description: "Start your rental business",
        compliment: "All under Smart Fleet Pro with",
        price: "1,099",
        features: [
            "Fleet Analytics and Insights",
            "Device-Free Fleet Tracking",
            "Dynamic Fleet Control",
            "Comprehensive Maintenance Management",
            "Automated Expense Management",
            "Unlimited AI Based Vehicle Body Inspection",
            "Mileage Based Alerts",
            "Unlimited Fleet Locations",
            "AI- Based Fleet Manager",
        ]
    },
    {
        name: "Ecosystem Fleet",
        description: "Ultimate tools for rental success",
        compliment: "All under Ecosystem Fleet with",
        price: "1,599",
        features: [
            "Fleet Analytics and Insights",
            "Device-Free Fleet Tracking",
            "Dynamic Fleet Control",
            "Comprehensive Maintenance Management",
            "Automated Expense Management",
            "Unlimited AI Based Vehicle Body Inspection",
            "Mileage Based Alerts",
            "Unlimited Fleet Locations",
            "AI- Based Fleet Manager",
        ]
    },
]

const Deals = [
    {
        title: "Reduces Overall Operational Expenses",
        description: "Traditional solutions come with high installation and maintenance costs for hardware like GPS trackers. Cloud Garage, on the other hand, operates through a secure cloud platform, eliminating the need for expensive installations and reducing overall expenses."
    },
    {
        title: "Swift Scalability and Flexibility",
        description: "Cloud Garage enables easy scalability, letting you add or remove vehicles via a secure cloud platform. It ensures quick deployment, seamless integration, and lower expansion costs, unlike costly and cumbersome traditional solutions that require additional hardware and hinder growth."
    },
    {
        title: "Enhanced Efficiency and Reliability",
        description: "AI optimizes scheduling and minimizes downtime, ensuring smooth operations without physical maintenance. Traditional solutions are costly, requiring regular hardware upkeep, leading to inefficiencies and potential data loss."
    },
    {
        title: "Optimized Streamlined Operations",
        description: "Cloud Garage lets you manage everything from one cloud-based platform, ensuring efficient operations. Traditional solutions often require complex setups and disjointed processes, leading to inefficiencies and higher operational burdens"
    },
    {
        title: "Advanced Encrypted Cloud-Based Protection ",
        description: "Cloud Garage ensures data protection with advanced encryption. Unlike traditional manual systems without a dedicated platform or robust security measures, Cloud Garage offers a secure, cloud-based solution to safeguard your information."
    }
]

export { HeroSection, cars, countries, compatibleBrands, countryCodes, BrandCarList, pricingPlan, Deals }