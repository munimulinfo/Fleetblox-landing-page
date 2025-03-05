import blog_image_1 from "../assets/blog_img_1.png";
import blog_image_2 from "../assets/blog_img_2.png";
import blog_image_3 from "../assets/blog_img_3.png";
import icon_1 from "../../public/animation/icon1.svg";
import icon_2 from "../../public/animation/icon2.svg";
import icon_3 from "../../public/animation/icon3.svg";
import image_1 from "../../public/animation/image1.svg";
import image_2 from "../../public/animation/image2.svg";
import image_3 from "../../public/animation/image3.svg";
import image1 from "../assets/image-1.png";
import image2 from "../assets/image-2.png";
import image3 from "../assets/image-3.png";
import my_fleet_1 from "../assets/my-fleet-1.png";
import my_fleet_2 from "../assets/my-fleet-2.png";
import my_fleet_3 from "../assets/my-fleet-3.png";

const cards = [
  {
    number: 1,
    title: "Hardware Installation",
    fleetbloxText: "No hardware needed; fully cloud-based",
    traditionalText: "Requires costly, time-consuming hardware setups",
  },
  {
    number: 2,
    title: "Setup Time",
    fleetbloxText: "Minutes; intuitive, hassle-free setup",
    traditionalText: "Takes weeks or months for installation and configuration",
  },
  {
    number: 3,
    title: "Scalability",
    fleetbloxText: "Unlimited; scale up or down instantly without added costs",
    traditionalText: "Limited by physical hardware and infrastructure",
  },
  {
    number: 4,
    title: "Expenses",
    fleetbloxText: "Low, subscription-based model",
    traditionalText: "High upfront investment with ongoing maintenance fees",
  },
  {
    number: 5,
    title: "Real-Time Data Access",
    fleetbloxText:
      "Comprehensive, real-time access across all fleet operations",
    traditionalText: "Often delayed or partial due to outdated systems",
  },
  {
    number: 6,
    title: "EV Compatibility",
    fleetbloxText: "Seamless EV fleet connectivity and  management",
    traditionalText:
      "Requires separate, expensive integrations with limited functionality",
  },
  {
    number: 7,
    title: "Global Compatibility",
    fleetbloxText:
      "Operates in 20+ countries; supports 25+ Makes and 500+ wide range of vehicles models, including EVs",
    traditionalText: "Limited makes and models compatibility",
  },
];

const full_control_with_virtual_slot_data = [
  {
    id: "slot_1",
    icon: icon_1,
    title: "Remote Management",
    description:
      "Each Virtual Parking Slot acts as a dedicated virtual space, giving you the ability to monitor and manage your fleet from anywhere. With the Cloud Garage, all your fleet operations are centralized and accessible from a single dashboard, ensuring complete oversight at your fingertips.",
    link: "Read More",
    image: image_1,
    mobile: image1,
    absolute: my_fleet_1,
  },
  {
    id: "slot_2",
    icon: icon_2,
    title: "Diagnostics and Maintenance",
    description:
      "Perform detailed vehicle checks, unlock cars, and coordinate repairs remotely. Stay on top of maintenance needs without the need for physical intervention.",
    link: "Read More",
    image: image_2,
    mobile: image2,
    absolute: my_fleet_2,
  },
  {
    id: "slot_3",
    icon: icon_3,
    title: "Centralized Data and Insights",
    description:
      "Every Virtual Parking Slot provides a comprehensive profile for each vehicle, including performance metrics and maintenance history. Make smarter, data-driven decisions to prevent potential issues before they occur.",
    link: "Read More",
    image: image_3,
    mobile: image3,
    absolute: my_fleet_3,
  },
];

const cars = [
  { value: "25+", title: "Car Brands" },
  { value: "500+", title: "Car models" },
  { value: "20+", title: "Countries" },
];

const blogs_data = [
  {
    title:
      "Elevating Fleet Performance: The Cutting-Edge Technology of FleetBlox",
    date: "03 May 2024",
    image: blog_image_1,
  },
  {
    title: "How Reputation Management Helps Improve Brand Perception",
    date: "17 Jan 2024",
    image: blog_image_3,
  },
  {
    title: "What Is Product Distribution? How To Choose a Partner",
    date: "23 Nov 2023",
    image: blog_image_2,
  },
];
const faqData = {
  faq: [
    {
      question: "What is FleetBlox?",
      answer:
        "Effortlessly integrate and oversee your entire fleet. Stay connected with your vehicle's health status in real-time. Digitally manage your vehicle to prevent fraud and receive automated alerts for seamless management.",
    },
    {
      question: "How does FleetBlox work?",
      answer:
        "Effortlessly integrate and oversee your entire fleet. Stay connected with your vehicle's health status in real-time. Digitally manage your vehicle to prevent fraud and receive automated alerts for seamless management.",
    },
    {
      question: "What are the benefits of using FleetBlox?",
      answer:
        "Effortlessly integrate and oversee your entire fleet. Stay connected with your vehicle's health status in real-time. Digitally manage your vehicle to prevent fraud and receive automated alerts for seamless management.",
    },
    {
      question: "What kind of support does FleetBlox provide?",
      answer:
        "Effortlessly integrate and oversee your entire fleet. Stay connected with your vehicle's health status in real-time. Digitally manage your vehicle to prevent fraud and receive automated alerts for seamless management.",
    },
    {
      question: "Is FleetBlox suitable for both small and large businesses?",
      answer:
        "Effortlessly integrate and oversee your entire fleet. Stay connected with your vehicle's health status in real-time. Digitally manage your vehicle to prevent fraud and receive automated alerts for seamless management.",
    },
    {
      question: "Does FleetBlox offer a trial period or demo?",
      answer:
        "Yes, FleetBlox offers a free trial period along with a demo to help you understand the platform's features and capabilities.",
    },
  ],
};

export {
  faqData,
  blogs_data,
  cars,
  full_control_with_virtual_slot_data,
  cards,
};
