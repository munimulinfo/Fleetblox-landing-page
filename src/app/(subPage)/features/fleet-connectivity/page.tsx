import RightArrowIcon from "@/components/icons/RightArrowIcon";
import ReducedDowntime from "@/components/icons/solution/MaintenanceDiagnostics/ReducedDowntime";
import CentralizedControlIcon from "@/components/icons/solution/remoteScalability/CentralizedControlIcon";
import FeatureCard from "@/components/ui/FeatureCard";
import Image from "next/image";
import Link from "next/link";
import image1 from "../../../../../public/brand/Frame 1707481648.svg";
import image2 from "../../../../../public/brand/Frame 1707481652.svg";
import image3 from "../../../../../public/brand/Frame 1707481662.png";
import image4 from "../../../../../public/brand/Frame 1707481651.svg";
import image5 from "../../../../../public/brand/Frame 1707481669.svg";
import image6 from "../../../../../public/brand/Frame 1707481649.png";
import image7 from "../../../../../public/brand/Frame 1707481650.svg";
import image8 from "../../../../../public/brand/Frame 1707481653.svg";
import image9 from "../../../../../public/brand/Frame 1707481670.png";
import image10 from "../../../../../public/brand/Frame 1707481671.svg";
import image11 from "../../../../../public/brand/Frame 1707481655.svg";
import image12 from "../../../../../public/brand/Frame 1707481668.svg";
import image13 from "../../../../../public/brand/Frame 1707481656.svg";
import image14 from "../../../../../public/brand/Frame 1707481664.svg";
import image15 from "../../../../../public/brand/Frame 1707481654.svg";
import image16 from "../../../../../public/brand/Frame 1707481666.svg";
import image17 from "../../../../../public/brand/Frame 1707481672.svg";
import image18 from "../../../../../public/brand/Frame 1707481657.svg";
import image19 from "../../../../../public/brand/Frame 1707481658.svg";
import image20 from "../../../../../public/brand/Frame 1707481665.svg";
import image21 from "../../../../../public/brand/Frame 1707481659.svg";
import image22 from "../../../../../public/brand/Frame 1707481660.svg";
import image23 from "../../../../../public/brand/Frame 1707481663.svg";
import image24 from "../../../../../public/brand/Frame 1707481673.svg";
import image25 from "../../../../../public/brand/Frame 1707481674.svg";
import image26 from "../../../../../public/brand/Frame 1707481675.svg";
import image27 from "../../../../../public/brand/Frame 1707481667.svg";
import image28 from "../../../../../public/brand/Frame 1707481676.svg";
import image29 from "../../../../../public/brand/Frame 1707481677.svg";
import image30 from "../../../../../public/brand/Frame 1707481678.svg";
import image31 from "../../../../../public/brand/Frame 1707481679.svg";
import image32 from "../../../../../public/brand/Frame 1707481680.svg";
import image33 from "../../../../../public/brand/Frame 1707481661.svg";
const page = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
    image27,
    image28,
    image29,
    image30,
    image31,
    image32,
    image33,
  ];
  const whyFleetManager = [
    {
      icon: NoHardware,
      title: "No Hardware, No Hassle",
      description:
        "Manage your entire fleet with zero device installations — fast setup, no extra cost.",
    },
    {
      icon: RealtimeVisibility,
      title: "Full Real-Time Visibility",
      description:
        "Access vital vehicle stats and locations instantly, from anywhere.",
    },
    {
      icon: CentralizedControlIcon,
      title: "Smarter Fleet Control",
      description:
        "Take real-time action with remote lock/unlock and charge control.",
    },
    {
      icon: LowerOperation,
      title: "Lower Operational Overhead",
      description:
        "Eliminate hardware costs, reduce maintenance, and simplify fleet tech stacks.",
    },
    {
      icon: ReducedDowntime,
      title: "Stay Proactive, Not Reactive",
      description:
        "Receive alerts before issues escalate — reducing breakdowns and improving performance.",
    },
  ];
  return (
    <div>
      {/* hero section */}
      <section className="bg-[#FAFAFF] pt-[100px] lg:pt-[140px] pb-[30px] ">
        <div className="lg:max-w-[calc(100vw-30px)] xxl:max-w-[1440px] mx-auto w-full flex flex-col px-5 lg:flex-row items-center justify-between">
          <div className="lg:pl-[130px]">
            <h3 className="text-[#0336BC] font-openSans font-bold text-[22px]">
              Fleet Connectivity
            </h3>
            <h1 className="text-[#04082C] text-[36px] lg:text-[52px] font-bold leading-[1.1]">
              Smarter, Hardware-Free Vehicle Control in Real Time
            </h1>
            <p className="text-[#333] text-[16px] leading-6 mt-[10px] lg:mt-4 mb-5 font-openSans">
              Fleetblox’s real-time cloud connectivity delivers complete,
              real-time visibility and control over your fleet — without the
              need for additional hardware.
            </p>
            <Link
              aria-label="Get started with FleetBlox"
              href="/getting-started"
            >
              <button className="hidden transition-all bg-[#2D65F2] hover:bg-[#0336BC] font-openSans text-white-primary text-white duration-300 hover:w-[144.16px] w-[122.16px] lg:flex items-center px-4 py-3 text-base font-bold rounded-md group">
                <div className="z-20 whitespace-nowrap">Start today</div>
                <div className="z-10 transform transition-transform opacity-0 group-hover:opacity-100 -translate-x-4 duration-300 group-hover:translate-x-0">
                  <RightArrowIcon />
                </div>
              </button>
            </Link>
            <Link
              aria-label="Get started with FleetBlox"
              href="/getting-started"
            >
              <button className="lg:hidden bg-[#2D65F2] hover:bg-[#0336BC] text-white w-full flex px-4 py-3 text-[14px] font-openSans font-bold rounded-md justify-center">
                Start today
              </button>
            </Link>
          </div>
          <div className=" w-full py-10 lg:pl-[60px]">
            <Image
              src="/images/fleet-connectivity-hero.png"
              alt="Remote Scalability Hero"
              width={700}
              height={491}
              className="object-contain w-full"
            />
          </div>
        </div>
      </section>
      {/* Fleet management section */}
      <section className="py-[80px]">
        <div className="max-w-[840px] mx-auto w-full text-center">
          <h2 className="text-[#04082C] text-[28px] lg:text-[36px] font-bold text-center leading-[1.1] mb-[10px]">
            Simplify Fleet Management
          </h2>
          <p className="text-[#333] text-[16px] leading-6 font-openSans">
            Experience the advantages that simplify operations, reduce costs,
            and eliminate complexity.
          </p>
        </div>
        <div className="mt-[60px] grid grid-cols-1 lg:grid-cols-3 max-w-[1000px] mx-auto w-full px-5 gap-4">
          <div className="p-10 text-center flex flex-col items-center rounded-[16px] border border-[#DFDFDF]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="53"
              height="52"
              viewBox="0 0 53 52"
              fill="none"
            >
              <path
                d="M1.95062 11.0664C1.08906 11.0664 0.390625 11.7648 0.390625 12.6264V17.8062C0.390625 18.6678 1.08906 19.3662 1.95062 19.3662H50.7378C51.5993 19.3662 52.2978 18.6678 52.2978 17.8062V11.229C52.2978 11.2113 52.2949 11.1937 52.2892 11.1769C52.2668 11.1109 52.2049 11.0665 52.1353 11.0665L1.95062 11.0664ZM42.5965 14.838C41.9819 14.838 41.484 14.3308 41.484 13.706C41.484 13.0812 41.9813 12.574 42.5965 12.574C43.2111 12.574 43.709 13.0812 43.709 13.706C43.709 14.3314 43.2111 14.838 42.5965 14.838ZM46.1185 14.838C45.5039 14.838 45.006 14.3308 45.006 13.706C45.006 13.0812 45.5033 12.574 46.1185 12.574C46.7331 12.574 47.231 13.0812 47.231 13.706C47.231 14.3314 46.7337 14.838 46.1185 14.838ZM49.5796 14.838C48.965 14.838 48.4671 14.332 48.4671 13.706C48.4671 13.0812 48.9644 12.574 49.5796 12.574C50.1936 12.574 50.6921 13.0812 50.6921 13.706C50.6915 14.3325 50.1936 14.838 49.5796 14.838Z"
                fill="#2D65F2"
                fillOpacity="0.5"
              />
              <path
                d="M50.3412 9.68287C51.0524 9.68287 51.5537 8.98513 51.3269 8.31115L48.7682 0.708277C48.6258 0.285059 48.2291 0 47.7826 0H4.78676C4.3402 0 3.94349 0.285081 3.80107 0.708324L1.2428 8.3112C1.01602 8.98517 1.51739 9.68287 2.22849 9.68287H50.3412Z"
                fill="#2D65F2"
                fillOpacity="0.5"
              />
              <path
                d="M1.88815 21.9453C1.02657 21.9453 0.328125 22.6438 0.328125 23.5053V28.6851C0.328125 29.5467 1.02656 30.2451 1.88812 30.2451H50.676C51.5376 30.2451 52.236 29.5467 52.236 28.6851V22.1094C52.236 22.0917 52.2331 22.0741 52.2275 22.0573C52.2051 21.991 52.1429 21.9463 52.0729 21.9463L1.88815 21.9453ZM42.534 25.7175C41.9194 25.7175 41.4215 25.2103 41.4215 24.5855C41.4215 23.9607 41.9188 23.4535 42.534 23.4535C43.1486 23.4535 43.6465 23.9607 43.6465 24.5855C43.6465 25.2103 43.1492 25.7175 42.534 25.7175ZM46.0566 25.7175C45.442 25.7175 44.9441 25.2103 44.9441 24.5855C44.9441 23.9607 45.4414 23.4535 46.0566 23.4535C46.6712 23.4535 47.1691 23.9607 47.1691 24.5855C47.1685 25.2103 46.6712 25.7175 46.0566 25.7175ZM49.5171 25.7175C48.9025 25.7175 48.4046 25.212 48.4046 24.5855C48.4046 23.9607 48.9019 23.4535 49.5171 23.4535C50.1311 23.4535 50.6296 23.9607 50.6296 24.5855C50.6296 25.212 50.1311 25.7175 49.5171 25.7175Z"
                fill="#2D65F2"
                fillOpacity="0.5"
              />
              <path
                d="M1.98187 32.8203C1.12031 32.8203 0.421875 33.5187 0.421875 34.3803V39.5601C0.421875 40.4217 1.12031 41.1201 1.98187 41.1201H50.7698C51.6313 41.1201 52.3298 40.4217 52.3298 39.5601V32.9829C52.3298 32.9652 52.3269 32.9476 52.3212 32.9308C52.2988 32.8648 52.2369 32.8204 52.1673 32.8204L1.98187 32.8203ZM42.6277 36.5931C42.0137 36.5931 41.5152 36.0859 41.5152 35.4611C41.5152 34.8363 42.0137 34.3291 42.6277 34.3291C43.2429 34.3291 43.7402 34.8363 43.7402 35.4611C43.7402 36.0859 43.2435 36.5931 42.6277 36.5931ZM46.1503 36.5931C45.5363 36.5931 45.0378 36.0859 45.0378 35.4611C45.0378 34.8363 45.5363 34.3291 46.1503 34.3291C46.7655 34.3291 47.2628 34.8363 47.2628 35.4611C47.2622 36.0859 46.7655 36.5931 46.1503 36.5931ZM49.6114 36.5931C48.9963 36.5931 48.4989 36.0859 48.4989 35.4611C48.4989 34.8363 48.9957 34.3291 49.6114 34.3291C50.2255 34.3291 50.7239 34.8363 50.7239 35.4611C50.7239 36.0859 50.2255 36.5931 49.6114 36.5931Z"
                fill="#2D65F2"
                fillOpacity="0.5"
              />
              <path
                d="M1.91938 43.6992C1.05781 43.6992 0.359375 44.3977 0.359375 45.2592V50.439C0.359375 51.3006 1.05781 51.999 1.91937 51.999H50.7074C51.5689 51.999 52.2673 51.3007 52.2674 50.4392L52.2678 43.8626C52.2678 43.8448 52.265 43.8272 52.2593 43.8104C52.2369 43.7441 52.1747 43.6995 52.1048 43.6995L1.91938 43.6992ZM42.566 47.4708C41.9519 47.4708 41.4535 46.9636 41.4535 46.3388C41.4535 45.714 41.9519 45.2068 42.566 45.2068C43.1811 45.2068 43.6785 45.714 43.6785 46.3388C43.6779 46.9642 43.1812 47.4708 42.566 47.4708ZM46.088 47.4708C45.4739 47.4708 44.9755 46.9636 44.9755 46.3388C44.9755 45.714 45.4739 45.2068 46.088 45.2068C46.7031 45.2068 47.2005 45.714 47.2005 46.3388C47.1999 46.9642 46.7032 47.4708 46.088 47.4708ZM49.5491 47.4708C48.9339 47.4708 48.4366 46.9653 48.4366 46.3388C48.4366 45.714 48.9333 45.2068 49.5491 45.2068C50.1631 45.2068 50.6616 45.714 50.6616 46.3388C50.6616 46.9653 50.1631 47.4708 49.5491 47.4708Z"
                fill="#2D65F2"
                fillOpacity="0.5"
              />
            </svg>
            <h4 className="text-[#333] text-[22px] font-bold font-openSans mt-4">
              No Hardwares
            </h4>
          </div>
          <div className="p-10 text-center flex flex-col items-center rounded-[16px] border border-[#DFDFDF]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="52"
              viewBox="0 0 48 52"
              fill="none"
            >
              <path
                d="M40.4437 22.4589C40.4436 22.4589 40.4435 22.4589 40.4435 22.4588C40.1306 21.0624 39.6373 19.7105 38.973 18.426C38.7566 18.0077 38.326 17.7596 37.8576 17.7107C37.3691 17.6597 36.8713 17.8263 36.5546 18.2016L18.4728 39.632C18.1673 39.9942 18.0939 40.4965 18.2297 40.9504C18.3581 41.3797 18.667 41.7376 19.0964 41.8653C19.5291 41.9939 19.9628 42.1041 20.3934 42.195C20.7028 42.2599 20.9242 42.5321 20.9242 42.8475V44.7281C20.9242 45.5897 21.6227 46.2881 22.4842 46.2881H25.5129C26.3744 46.2881 27.0729 45.5897 27.0729 44.7281V42.8475C27.0729 42.5342 27.2918 42.2628 27.5991 42.1958C29.5485 41.7725 31.3994 41.0214 33.1012 39.9626C33.3641 39.7982 33.7046 39.8369 33.9248 40.0537L35.309 41.4177C35.9163 42.0162 36.8915 42.0162 37.4989 41.4178L39.6131 39.3346C40.2332 38.7236 40.2332 37.7232 39.6131 37.1122L38.2734 35.7921C38.0474 35.5695 38.0096 35.219 38.183 34.9535C39.262 33.3042 40.0225 31.4854 40.4426 29.5473C40.509 29.2402 40.7814 29.0217 41.0962 29.0217H43.0358C43.8973 29.0217 44.5958 28.3232 44.5958 27.4617V24.5404C44.5958 23.6788 43.8973 22.9804 43.0358 22.9804H41.0962C40.7835 22.9804 40.5119 22.7636 40.4439 22.4591C40.4439 22.459 40.4438 22.4589 40.4437 22.4589Z"
                fill="#2D65F2"
                fillOpacity="0.5"
              />
              <path
                d="M7.55764 29.5436C7.55758 29.5437 7.55754 29.5437 7.55756 29.5438C7.85816 30.8862 8.32627 32.1883 8.95272 33.4293C9.19688 33.913 9.69633 34.1991 10.2341 34.2651C10.4972 34.2974 10.7601 34.3406 11.0224 34.3951C11.6439 34.5243 12.3043 34.3475 12.7137 33.8623L29.8063 13.6037C30.2166 13.1175 30.2789 12.4349 30.0477 11.8422C29.9717 11.6473 29.9025 11.4506 29.8399 11.2523C29.6763 10.7343 29.3027 10.2943 28.781 10.1432C28.3899 10.0298 27.998 9.93157 27.6077 9.84964C27.2984 9.78472 27.0773 9.51253 27.0773 9.19707V7.27515C27.0773 6.41363 26.379 5.71521 25.5174 5.71515L22.4892 5.71495C21.6276 5.71489 20.9291 6.41334 20.9291 7.27495V9.15457C20.9291 9.46795 20.7098 9.73931 20.4029 9.80631C18.4539 10.2296 16.6026 10.9807 14.9012 12.0395C14.6379 12.2031 14.2974 12.1648 14.0776 11.9484L12.6935 10.5844C12.0862 9.98591 11.1109 9.98589 10.5036 10.5843L8.38937 12.6675C7.76926 13.2785 7.76926 14.2789 8.38936 14.8899L9.72905 16.21C9.95506 16.4327 9.9928 16.7831 9.81946 17.0486C8.74001 18.6979 7.9799 20.5167 7.55982 22.4548C7.49347 22.7619 7.22102 22.9804 6.90627 22.9804H4.96625C4.10469 22.9804 3.40625 23.6789 3.40625 24.5404V27.4626C3.40625 28.3241 4.10469 29.0226 4.96625 29.0226H6.90627C7.2185 29.0221 7.48968 29.2385 7.55773 29.5435C7.55774 29.5436 7.5577 29.5436 7.55764 29.5436Z"
                fill="#2D65F2"
                fillOpacity="0.5"
              />
              <path
                d="M46.9784 5.53552C46.9785 5.53556 46.9786 5.53569 46.9785 5.53578L42.8238 10.4595C42.6824 10.6272 42.468 10.7175 42.2495 10.6938L37.8919 10.2842C37.6182 10.2589 37.3884 10.0687 37.3121 9.80522L36.1104 5.65464C36.0486 5.44114 36.0975 5.21058 36.241 5.04036L38.6147 2.22711C39.4015 1.29457 38.837 -0.0812479 37.6365 0.136644C35.735 0.481772 33.9671 1.47158 32.6759 3.00231C31.0702 4.90591 30.44 7.37386 30.8347 9.71865C30.8426 9.74403 30.8538 9.76817 30.8583 9.79481C30.9864 10.5265 31.2062 11.2207 31.5106 11.8682C31.5164 11.8799 31.5206 11.892 31.5264 11.9044C31.6292 12.12 31.7412 12.3306 31.8627 12.535C32.0078 12.7788 31.9821 13.0876 31.7992 13.3045L12.7561 35.8766C12.715 35.9253 12.6665 35.9644 12.6151 35.9981C12.6014 36.0073 12.5869 36.0152 12.5724 36.0235C12.5288 36.0476 12.4841 36.0676 12.4368 36.0818C12.4248 36.0855 12.414 36.0905 12.4015 36.0934C12.3501 36.1059 12.297 36.1134 12.2435 36.1134C12.2386 36.1134 12.2336 36.1109 12.2282 36.1105C12.1535 36.1088 12.0781 36.0972 12.0055 36.0693C11.7737 35.981 11.5386 35.9049 11.3009 35.8387C11.2636 35.8283 11.2263 35.8208 11.189 35.8104C10.9742 35.7534 10.7581 35.7026 10.5391 35.6631C10.5267 35.661 10.5143 35.6589 10.5014 35.6568C10.0038 35.5698 9.49662 35.5282 8.98363 35.5336C8.96538 35.5328 8.94796 35.5274 8.93013 35.5257C6.5535 35.5607 4.25533 36.629 2.60442 38.5864C1.31276 40.1173 0.630573 41.9396 0.5952 43.7737C0.571859 44.9839 2.01227 45.2982 2.79286 44.3731L5.17808 41.5462C5.31949 41.3785 5.5314 41.287 5.75243 41.3119L10.11 41.721C10.3837 41.7464 10.6135 41.9366 10.6902 42.2001L11.8919 46.3511C11.9537 46.5646 11.9044 46.7951 11.7613 46.9653L9.39371 49.7715C8.60587 50.7053 9.17349 52.0803 10.3739 51.8531C12.2543 51.4972 14.0065 50.5042 15.2953 48.9776C16.9261 47.0446 17.578 44.5998 17.1665 42.264C17.1664 42.2635 17.1664 42.2631 17.1662 42.2627C17.166 42.2623 17.1659 42.2618 17.1658 42.2614C17.1372 42.1001 17.1041 41.9406 17.0664 41.783C17.0639 41.7735 17.0614 41.7635 17.059 41.7531C17.0237 41.6078 16.9847 41.4647 16.9416 41.3227C16.9275 41.2757 16.9109 41.2287 16.8956 41.1821C16.8603 41.0726 16.8247 40.9636 16.7848 40.8566C16.7243 40.6955 16.6608 40.5349 16.5891 40.3763C16.4838 40.1429 16.5223 39.8698 16.6874 39.6738L36.3006 16.4273C36.4636 16.2342 36.7211 16.1505 36.9675 16.208C37.1379 16.2488 37.3087 16.2812 37.4796 16.3112C37.6339 16.337 37.7898 16.359 37.9469 16.3765C37.9511 16.3769 37.9552 16.3778 37.9594 16.3782C38.2953 16.4148 38.6374 16.4315 38.9845 16.4286C38.9907 16.4281 38.9961 16.4302 39.0023 16.4302C41.4138 16.4007 43.7343 15.3244 45.3641 13.3925C47.3006 11.0995 47.8804 8.17086 46.9782 5.53573C46.9782 5.5356 46.9783 5.53547 46.9784 5.53552Z"
                fill="#2D65F2"
                fillOpacity="0.5"
              />
            </svg>
            <h4 className="text-[#333] text-[22px] font-bold font-openSans mt-4">
              No Installations
            </h4>
          </div>
          <div className="p-10 text-center flex flex-col items-center rounded-[16px] border border-[#DFDFDF]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="53"
              height="52"
              viewBox="0 0 53 52"
              fill="none"
            >
              <path
                d="M35.9769 17.3971C35.9769 18.357 36.7622 19.1364 37.7324 19.1364C38.7027 19.1364 39.488 18.3574 39.488 17.3971C39.488 16.4358 38.7027 15.6578 37.7324 15.6578C36.7622 15.6578 35.9769 16.4358 35.9769 17.3971ZM50.4614 6.66745L6.17213 6.6623C5.32768 6.6623 4.64314 5.98411 4.64314 5.14703C4.64314 4.31088 5.32768 3.63271 6.17213 3.63271L44.6809 3.62662C45.6919 3.62662 46.5112 2.81486 46.5112 1.81331C46.5112 0.811725 45.6919 0 44.6809 0H4.94288C2.58841 0 0.671875 1.89862 0.671875 4.23134V42.3897C0.671875 43.5974 1.66014 44.5779 2.88065 44.5779H7.57504C10.4382 49.0347 15.4646 52 21.1803 52C26.896 52 31.922 49.0351 34.7856 44.5779H50.4631C51.6836 44.5779 52.6719 43.5974 52.6719 42.3897L52.6714 8.8567C52.6714 7.64751 51.6831 6.66796 50.4626 6.66796L50.4614 6.66745ZM21.1799 48.9784C13.9754 48.9784 8.11349 43.1723 8.11349 36.0346C8.11349 35.497 8.14755 34.9557 8.21426 34.4242C9.02228 27.9628 14.5965 23.09 21.1789 23.09C22.8654 23.09 24.5046 23.403 26.0535 24.0198C31.0294 26.0023 34.2449 30.7187 34.2449 36.035C34.2449 43.1712 28.3835 48.9788 21.1785 48.9788L21.1799 48.9784ZM49.2915 21.4542H37.3269C35.065 21.4542 33.2315 19.6385 33.2315 17.3973C33.2315 15.156 35.0652 13.3395 37.3269 13.3395H49.2915V21.4542ZM22.5193 35.1299H19.9438C18.8108 35.1299 17.8883 34.216 17.8883 33.0935C17.8883 31.9709 18.8108 31.057 19.9438 31.057H24.6202C25.1254 31.057 25.5356 30.6506 25.5356 30.1501C25.5356 29.6495 25.1254 29.2432 24.6202 29.2432H22.1459V27.6834C22.1459 27.1828 21.7358 26.7765 21.2305 26.7765C20.7253 26.7765 20.3151 27.1828 20.3151 27.6834V29.2432H19.9438C17.8007 29.2432 16.0579 30.9703 16.0579 33.0929C16.0579 35.1796 17.7425 36.8837 19.835 36.9413C19.8525 36.9427 19.8705 36.9432 19.888 36.9432H22.5197C23.6527 36.9432 24.5752 37.8571 24.5752 38.9797C24.5752 40.1022 23.6527 41.0161 22.5197 41.0161H17.6526C17.1473 41.0161 16.7372 41.4225 16.7372 41.923C16.7372 42.4236 17.1473 42.8299 17.6526 42.8299H20.316V44.3897C20.316 44.8903 20.7261 45.2966 21.2314 45.2966C21.7366 45.2966 22.1468 44.8903 22.1468 44.3897V42.8299H22.5196C24.6626 42.8299 26.4055 41.1028 26.4055 38.9802C26.405 36.8571 24.6621 35.1299 22.5191 35.1299L22.5193 35.1299Z"
                fill="#2D65F2"
                fillOpacity="0.5"
              />
            </svg>
            <h4 className="text-[#333] text-[22px] font-bold font-openSans mt-4">
              No Added Costs
            </h4>
          </div>
        </div>
      </section>
      <section className="bg-[#FAFAFF] py-[100px]">
        <h3 className="text-[#04082C] text-[36px] font-bold leading-[1.1] text-center ">
          Connect Your Fleet In Just 3 Simple Steps
        </h3>
        <p className="text-[#333] text-[16px] mt-[10px] leading-6 text-center font-openSans">
          Gain full visibility and control over your vehicle across all
          locations from anywhere.
        </p>
        <div className="max-w-[1200px] w-full mx-auto mt-[60px] mb-10 px-5">
          <Image
            src="/images/features/connect-fleet-step.svg"
            alt="Remote Scalability Hero"
            width={700}
            height={491}
            className="object-contain w-full"
            quality={100}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 relative max-w-[1200px] mx-auto w-full gap-5 justify-items-center items-center px-5">
          <div className="absolute left-1/2 top-1/2 mt-[90px] max-w-[664px] max-h-[664px] h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FBEECA] opacity-40 blur-[200px]"></div>
          <div
            className={`relative z-[200] top-[0px] mx-auto transform flex-col h-[540px] w-full`}
          >
            <div className=" bg-white absolute z-50 rounded-[24px] py-10 px-[30px] flex flex-col gap-[10px] w-full h-full">
              {/* Card Header */}
              <div className="font-openSans">
                <h3 className="text-[#04082C] text-[22px] font-bold">
                  Scan The VIN
                </h3>
                <p className="text-[14px] text-[#7D7D7D] leading-5 mt-[5px]">
                  Add the vehicle using the VIN or scan it with the VIN scanner.
                </p>
              </div>
              <div className="w-full mt-10">
                <Image
                  src="/images/features/connect-step-1.svg"
                  alt="Remote Scalability Hero"
                  width={327}
                  height={344}
                  className="object-contain w-full"
                  quality={100}
                />
              </div>
            </div>
            <div className="absolute top-[1vh] z-[20] rounded-[2px] bg-black opacity-[0.07] blur-[20px] h-[573px] w-[370px] left-[8px]"></div>
          </div>
          <div
            className={`relative z-[200] top-[0px] mx-auto transform flex-col h-[540px] w-full`}
          >
            <div className=" bg-white absolute z-50 rounded-[24px] py-10 px-[30px] flex flex-col gap-[10px] max-w-[387px] w-full h-full">
              {/* Card Header */}
              <div className="font-openSans">
                <h3 className="text-[#04082C] text-[22px] font-bold">
                  Connect The Vehicle
                </h3>
                <p className="text-[14px] text-[#7D7D7D] leading-5 mt-[5px]">
                  Use your manufacturer credentials to link your vehicle.
                </p>
              </div>
              <div className="w-full mt-10">
                <Image
                  src="/images/features/connect-step-2.svg"
                  alt="Remote Scalability Hero"
                  width={700}
                  height={491}
                  className="object-contain w-full"
                  quality={100}
                />
              </div>
            </div>
            <div className="absolute top-[1vh] z-[20] rounded-[2px] bg-black opacity-[0.07] blur-[20px] h-[573px] w-[370px] left-[8px]"></div>
          </div>
          <div
            className={`relative z-[200] top-[0px] mx-auto transform flex-col h-[540px] w-full`}
          >
            <div className=" bg-white absolute z-50 rounded-[24px] pt-10 px-[30px] flex flex-col gap-[10px] max-w-[387px] w-full h-full">
              {/* Card Header */}
              <div className="font-openSans">
                <h3 className="text-[#04082C] text-[22px] font-bold">
                  Enable Access
                </h3>
                <p className="text-[14px] text-[#7D7D7D] leading-5 mt-[5px]">
                  Review and approve permissions to allow data streaming.
                </p>
              </div>
              <div className="w-full mt-10 overflow-hidden">
                <Image
                  src="/images/features/connect-step-3.svg"
                  alt="Remote Scalability Hero"
                  width={700}
                  height={491}
                  className="object-contain w-full rounded-3xl"
                  quality={100}
                />
              </div>
            </div>
            <div className="absolute top-[1vh] z-[20] rounded-[2px] bg-black opacity-[0.07] blur-[20px] h-[573px] w-[370px] left-[8px]"></div>
          </div>
        </div>
      </section>
      {/* how fleetblox connected section */}
      <section className="py-[100px] ">
        <div className="max-w-[840px] w-full mx-auto text-center px-5">
          <h3 className="text-[#04082C] text-[18px] md:text-[36px] font-bold leading-[1.1]">
            How Fleetblox’s Cloud Connectivity Works
          </h3>
          <p className="text-[#333] text-[16px] font-normal leading-6 font-openSans mt-[5px] ">
            By securely connecting to each vehicle via manufacturer credentials,
            Fleetblox pulls live diagnostic and location data directly from the
            cloud.
          </p>
        </div>
        <div className="max-w-[1200px] hidden md:block w-full mx-auto mt-[60px] px-5">
          <Image
            src="/images/features/Fleetblox-deals.svg"
            alt="Remote Scalability Hero"
            width={700}
            height={491}
            className="object-contain w-full"
            quality={100}
          />
        </div>
        <div className="max-w-[1200px] md:hidden block w-full mx-auto mt-[40px] px-5">
          <Image
            src="/images/features/cloud-connectivity-work-mobile.svg"
            alt="Remote Scalability Hero"
            width={700}
            height={491}
            className="object-contain w-full"
            quality={100}
          />
        </div>
      </section>
      {/* why fleet owner partner section*/}
      <section className="max-w-[1200px] mx-auto w-full mb-[60px] px-5">
        <h1 className="mb-[40px] lg:mb-[60px] text-center max-w-[840px] w-full mx-auto text-[#04082C] text-[28px] lg:text-[36px] font-bold">
          {`Every Fleet Owner’s Reliable Partner - Here's Why`}
        </h1>
        <div className="lg:grid hidden grid-cols-1 lg:grid-cols-3 justify-items-center items-center gap-[30px]">
          {whyFleetManager?.slice(0, 3).map((data, index) => (
            <FeatureCard
              key={index}
              icon={<data.icon />}
              title={data.title}
              description={data.description}
              // className="lg:max-w-[380px] lg:w-full"
            />
          ))}
        </div>
        <div className="grid lg:hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center lg:gap-[30px] gap-[20px]">
          {whyFleetManager?.map((data, index) => (
            <FeatureCard
              key={index}
              icon={<data.icon />}
              title={data.title}
              description={data.description}
              className={`w-full ${
                index === 4 && "md:col-span-2 md:max-w-[380px] mx-auto"
              }`}
            />
          ))}
        </div>
        <div className="lg:flex hidden flex-col items-center justify-items-center justify-center lg:flex-row mt-[30px] gap-[30px]">
          {whyFleetManager?.slice(3, 5).map((data, index) => (
            <FeatureCard
              key={index}
              icon={<data.icon />}
              title={data.title}
              description={data.description}
              className="lg:max-w-[380px] lg:w-full"
            />
          ))}
        </div>
      </section>
      {/* vehicle might be smarter section */}
      <section className="pt-[100px]">
        <div className="z-[100] mx-auto max-w-[1300px] lg:w-[1000px] 2xl:w-[1300px] space-y-[20px] overflow-hidden">
          <div className="relative z-[1000] px-5 max-w-[840px] w-full mx-auto text-center">
            <h1 className="font-montserrat text-[#04082C] text-[28px] md:text-[36px] font-bold  text-center leading-[1.1]">
              Your Vehicles Might Be Smarter <br /> Than You Think
            </h1>
            <p className="mt-[10px] text-[#333] text-[16px] font-normal leading-6 font-openSans mb-5">
              Check your fleet’s compatibility and take the first step toward
              smarter, cloud-powered solutions designed for greater efficiency,
              flexibility, and future readiness.
            </p>
            <button className="bg-[#2D65F2] rounded-[6px] px-5 py-3 text-white font-openSans text-[16px] font-bold">
              Check Compatibility
            </button>
          </div>
          <div className="flex relative h-[376px] w-full items-center justify-center overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute mt-[450px] h-[916px] object-cover"
            >
              <source src="/videos/global.webm" type="video/webm" />
              <source src="/videos/global.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        {/* brand logo animate */}
        <div className="mx-auto relative -mt-[88px] lg:-mt-[80px] xl:-mt-[90px] xxl:-mt-[100px] w-full lg:w-[1000px] 2xl:w-[1300px] overflow-hidden whitespace-nowrap">
          <div className="flex animate-scroll items-center space-x-3 md:space-x-8">
            {images.map((image, index) => (
              <div key={index} className="z-[1000] flex-shrink-0">
                <Image
                  src={image}
                  alt="image"
                  className="z-[1000] mix-blend-multiply w-[80px] xl:w-[80%] 2xl:w-[90%]"
                />
              </div>
            ))}
          </div>
          <div className="to-transparent absolute hidden md:block left-0 top-0 z-[1001] h-full w-32 bg-gradient-to-r from-white"></div>
          <div className="to-transparent absolute hidden md:block right-0 top-0 z-[1001] h-full w-32 bg-gradient-to-l from-white"></div>
        </div>
      </section>
    </div>
  );
};

export default page;

const LowerOperation = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
    >
      <g clipPath="url(#clip0_7466_31960)">
        <path
          d="M7.21433 12.853C7.4091 12.5057 7.67714 12.2727 8.01846 12.154C8.35976 12.0352 8.69989 12.0489 9.03885 12.195L12.5708 13.7671C12.725 13.6 13.0539 13.3552 13.5575 13.0326C14.061 12.71 14.663 12.3568 15.3635 11.9729L15.935 7.93779C15.9842 7.53989 16.1489 7.21707 16.429 6.96933C16.7091 6.72157 17.0345 6.58957 17.4053 6.57333L22.3958 6.54588C22.7609 6.53976 23.079 6.66911 23.3501 6.93391C23.6212 7.19868 23.7764 7.52738 23.8158 7.92003L24.1923 11.9974C24.425 12.0858 24.6482 12.1877 24.8619 12.3032C25.0756 12.4188 25.3068 12.5537 25.5554 12.7081C25.7433 12.8247 25.9438 12.9621 26.1569 13.1203C26.3699 13.2786 26.6129 13.4671 26.886 13.6858L30.4451 12.0348C30.7862 11.8783 31.132 11.8616 31.4826 11.9848C31.8331 12.1079 32.0936 12.3456 32.264 12.6978L34.6008 17.2465C34.7666 17.5958 34.8155 17.9568 34.7477 18.3294C34.6798 18.7021 34.4946 19.0087 34.192 19.2493L31.0663 21.7689C31.138 22.2994 31.1677 22.8558 31.1555 23.4382C31.1432 24.0206 31.0841 24.5985 30.9779 25.1719L34.0148 27.6975C34.2956 27.9361 34.4721 28.2431 34.5444 28.6186C34.6168 28.994 34.5555 29.3554 34.3608 29.7027L31.7955 34.2763C31.6036 34.6185 31.3355 34.8514 30.9914 34.9753C30.6472 35.0991 30.3066 35.0919 29.9694 34.9539L26.4165 33.3686C25.9744 33.7568 25.5345 34.0789 25.0967 34.3348C24.6589 34.5908 24.1726 34.8169 23.6377 35.0133L23.0073 39.1906C22.9563 39.5805 22.7975 39.9001 22.5309 40.1495C22.2644 40.3988 21.9458 40.5316 21.575 40.5479L16.6236 40.5832C16.251 40.5914 15.9287 40.4639 15.6568 40.2007C15.3848 39.9374 15.2315 39.6109 15.1968 39.2212L14.8255 34.9458C14.5609 34.8514 14.3321 34.7493 14.139 34.6398C13.9459 34.5302 13.7297 34.4011 13.4904 34.2526C13.2651 34.1128 13.0549 33.9754 12.8596 33.8405C12.6643 33.7056 12.4563 33.5327 12.2356 33.3218L8.59795 35.0082C8.25403 35.1699 7.9094 35.1934 7.56404 35.079C7.21867 34.9645 6.95936 34.7304 6.78612 34.3764L4.39602 29.7946C4.2256 29.4424 4.18038 29.0732 4.26034 28.6868C4.34031 28.3005 4.53249 27.991 4.83687 27.7583L7.95788 25.2809C7.88076 24.7443 7.8448 24.2142 7.84999 23.6904C7.8552 23.1666 7.90696 22.5834 8.00526 21.9408L4.97523 19.44C4.69264 19.1935 4.51966 18.8818 4.45629 18.505C4.39289 18.1282 4.45714 17.7688 4.64906 17.4266L7.21433 12.853ZM15.2932 20.8775C14.5779 22.1528 14.3809 23.4921 14.7021 24.8954C15.0233 26.2987 15.771 27.3647 16.945 28.0934C18.119 28.8221 19.3675 28.9951 20.6905 28.6123C22.0135 28.2296 23.0326 27.4006 23.7479 26.1253C24.4677 24.8419 24.6659 23.5006 24.3424 22.1014C24.0189 20.7022 23.2701 19.6382 22.0961 18.9095C20.922 18.1807 19.6747 18.0057 18.354 18.3844C17.0333 18.7631 16.013 19.5941 15.2932 20.8775Z"
          fill="#B8CBFC"
        />
        <path
          d="M36.1226 35.1984V30.7857C36.1226 30.6697 36.1565 30.5749 36.2244 30.5013C36.2925 30.4278 36.3846 30.3911 36.5007 30.3911C36.6168 30.3911 36.7146 30.4296 36.7939 30.5065C36.8732 30.5836 36.9129 30.6828 36.9129 30.804V35.1984L38.7382 33.356C38.8064 33.2878 38.894 33.2568 39.0011 33.263C39.1082 33.269 39.1967 33.3072 39.2667 33.3777C39.3367 33.448 39.3716 33.5357 39.3716 33.6409C39.3716 33.7459 39.337 33.8353 39.2677 33.9091L37.005 36.1698C36.8681 36.3003 36.7071 36.3655 36.5221 36.3655C36.337 36.3655 36.1792 36.3003 36.0488 36.1698L33.7752 33.8962C33.6957 33.8074 33.6575 33.7163 33.6605 33.623C33.6635 33.5297 33.7 33.448 33.7699 33.3777C33.8399 33.3072 33.9295 33.272 34.0386 33.272C34.1478 33.272 34.2384 33.3101 34.3104 33.3862L36.1226 35.1984ZM36.5055 25C35.3321 25 34.2292 25.2239 33.1967 25.6716C32.1642 26.1193 31.2632 26.7276 30.4937 27.4966C29.7241 28.2656 29.1161 29.1645 28.6697 30.1933C28.2232 31.2222 28 32.3226 28 33.4945C28 34.6703 28.2239 35.7765 28.6716 36.8131C29.1193 37.8496 29.7276 38.7512 30.4966 39.5182C31.2656 40.2851 32.1645 40.8904 33.1933 41.3341C34.2222 41.778 35.3226 42 36.4945 42C37.6703 42 38.7765 41.7769 39.8131 41.3306C40.8497 40.8843 41.7515 40.2786 42.5184 39.5134C43.2852 38.7484 43.8904 37.8494 44.3341 36.8164C44.778 35.7835 45 34.6798 45 33.5055C45 32.3321 44.7775 31.2292 44.3325 30.1967C43.8873 29.1642 43.2816 28.2632 42.5153 27.4937C41.749 26.7241 40.8494 26.1161 39.8164 25.6697C38.7835 25.2232 37.6798 25 36.5055 25Z"
          fill="#2D65F2"
          fillOpacity="0.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_7466_31960">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const RealtimeVisibility = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        d="M6.63875 41.1108C5.92681 41.1108 5.30903 40.849 4.78542 40.3254C4.26181 39.8018 4 39.184 4 38.4721V34.7567C4 34.3969 4.12889 34.0883 4.38667 33.8308C4.64444 33.5731 4.95694 33.4442 5.32417 33.4442C5.69139 33.4442 6.00222 33.5731 6.25667 33.8308C6.51139 34.0883 6.63875 34.3969 6.63875 34.7567V38.4721H10.3542C10.7139 38.4721 11.0225 38.6014 11.28 38.86C11.5378 39.1186 11.6667 39.4285 11.6667 39.7896C11.6667 40.1613 11.5378 40.4744 11.28 40.7292C11.0225 40.9836 10.7139 41.1108 10.3542 41.1108H6.63875ZM22.0312 33.5554C19.0612 33.5554 16.3506 32.7765 13.8992 31.2188C11.4478 29.6607 9.51139 27.509 8.09 24.7638C7.94667 24.4999 7.8425 24.2256 7.7775 23.9408C7.71278 23.6561 7.68042 23.3656 7.68042 23.0692C7.68042 22.7683 7.71514 22.4721 7.78458 22.1804C7.85403 21.8888 7.95583 21.611 8.09 21.3471C9.51 18.596 11.4439 16.4349 13.8917 14.8638C16.3392 13.2924 19.0489 12.5067 22.0208 12.5067C24.9858 12.5067 27.7039 13.2914 30.175 14.8608C32.6461 16.4303 34.5919 18.5918 36.0125 21.3454C36.1475 21.6104 36.2497 21.8888 36.3192 22.1804C36.3886 22.4721 36.4233 22.7638 36.4233 23.0554C36.4233 23.3471 36.3886 23.6388 36.3192 23.9304C36.2497 24.2221 36.1475 24.5008 36.0125 24.7667C34.5872 27.5003 32.6385 29.6485 30.1663 31.2113C27.6943 32.774 24.9826 33.5554 22.0312 33.5554ZM22.065 28.5346C23.5911 28.5346 24.8911 27.9988 25.965 26.9271C27.0392 25.8554 27.5763 24.5617 27.5763 23.0458C27.5763 21.5197 27.0401 20.2197 25.9679 19.1458C24.8954 18.0717 23.5956 17.5346 22.0683 17.5346C20.5411 17.5346 19.244 18.0707 18.1771 19.1429C17.1099 20.2154 16.5763 21.5153 16.5763 23.0425C16.5763 24.5697 17.1121 25.8668 18.1837 26.9338C19.2554 28.001 20.5492 28.5346 22.065 28.5346ZM22.0554 25.8958C21.2546 25.8958 20.581 25.6217 20.0346 25.0733C19.4882 24.525 19.215 23.8524 19.215 23.0554C19.215 22.2546 19.4892 21.574 20.0375 21.0138C20.5858 20.4535 21.2585 20.1733 22.0554 20.1733C22.8563 20.1733 23.5368 20.4515 24.0971 21.0079C24.6574 21.5643 24.9375 22.2468 24.9375 23.0554C24.9375 23.8563 24.6593 24.5299 24.1029 25.0763C23.5465 25.6226 22.864 25.8958 22.0554 25.8958ZM40.1108 7.63875V11.3333C40.1108 11.7036 39.981 12.0149 39.7213 12.2671C39.4613 12.5196 39.1497 12.6458 38.7867 12.6458C38.4236 12.6458 38.1138 12.5196 37.8571 12.2671C37.6004 12.0149 37.4721 11.7036 37.4721 11.3333V7.63875H33.7775C33.4072 7.63875 33.096 7.50875 32.8438 7.24875C32.5912 6.98903 32.465 6.67764 32.465 6.31458C32.465 5.95153 32.5912 5.64167 32.8438 5.385C33.096 5.12833 33.4072 5 33.7775 5H37.4721C38.184 5 38.8018 5.26181 39.3254 5.78542C39.849 6.30903 40.1108 6.92681 40.1108 7.63875ZM6.63875 5H10.3333C10.7036 5 11.0172 5.12931 11.2742 5.38792C11.5311 5.64625 11.6596 5.95597 11.6596 6.31709C11.6596 6.68903 11.5311 7.00222 11.2742 7.25667C11.0172 7.51139 10.7036 7.63875 10.3333 7.63875H6.63875V11.3333C6.63875 11.7036 6.50875 12.0149 6.24875 12.2671C5.98903 12.5196 5.67764 12.6458 5.31458 12.6458C4.95153 12.6458 4.64167 12.5196 4.385 12.2671C4.12833 12.0149 4 11.7036 4 11.3333V7.63875C4 6.92681 4.26181 6.30903 4.78542 5.78542C5.30903 5.26181 5.92681 5 6.63875 5Z"
        fill="#B8CBFC"
      />
      <path
        d="M32.4279 33.3882L30.8489 31.8373C30.6384 31.6359 30.3981 31.533 30.1281 31.5284C29.8581 31.5239 29.6178 31.6268 29.4073 31.8373C29.1968 32.0477 29.0892 32.2879 29.0846 32.5578C29.0801 32.8278 29.183 33.068 29.3936 33.2784L31.6865 35.5706C31.897 35.781 32.1418 35.8863 32.421 35.8863C32.7002 35.8863 32.945 35.781 33.1556 35.5706L37.5903 31.1373C37.7917 30.9268 37.8946 30.6843 37.8992 30.4098C37.9038 30.1353 37.8008 29.8928 37.5903 29.6824C37.3798 29.4719 37.1372 29.3667 36.8626 29.3667C36.588 29.3667 36.3455 29.4719 36.1349 29.6824L32.4279 33.3882ZM33.5674 41.1294C31.1784 41.1294 29.1533 40.299 27.492 38.6382C25.8307 36.9775 25 34.9529 25 32.5647C25 30.1765 25.8307 28.152 27.492 26.4912C29.1533 24.8304 31.1784 24 33.5674 24C35.9564 24 37.9793 24.8304 39.6361 26.4912C41.2928 28.152 42.1212 30.1765 42.1212 32.5647C42.1212 33.5712 41.9633 34.5206 41.6475 35.4127C41.3317 36.3049 40.8855 37.117 40.3088 37.849L44.4554 42.0588C44.6567 42.2601 44.7597 42.498 44.7643 42.7725C44.7689 43.0471 44.6659 43.2895 44.4554 43.5C44.2448 43.7105 44.0023 43.8157 43.7277 43.8157C43.4531 43.8157 43.2105 43.7105 43 43.5L38.8535 39.3039C38.1212 39.8804 37.3088 40.3288 36.4164 40.649C35.524 40.9693 34.5743 41.1294 33.5674 41.1294Z"
        fill="#2D65F2"
        fillOpacity="0.5"
      />
    </svg>
  );
};
const NoHardware = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        d="M9.64844 35.4769V27.8229H15.9268L22.6245 21.1223V15.7746C21.6734 15.4403 20.8959 14.8757 20.2919 14.0807C19.6879 13.2858 19.3859 12.3908 19.3859 11.3959C19.3859 10.1139 19.8351 9.02429 20.7336 8.12707C21.6324 7.22986 22.7236 6.78125 24.0071 6.78125C25.2908 6.78125 26.3784 7.22959 27.2697 8.12627C28.161 9.02295 28.6067 10.1119 28.6067 11.3931C28.6067 12.392 28.3091 13.2885 27.7139 14.0823C27.119 14.8762 26.346 15.4403 25.3949 15.7746V21.1223L32.0722 27.8229H38.3441V35.4769H30.6976V30.4777L23.9963 23.7971L17.295 30.4777V35.4769H9.64844Z"
        fill="#B8CBFC"
      />
      <path
        d="M24.0046 46C20.9588 46 18.1013 45.4171 15.432 44.2513C12.7627 43.0856 10.4355 41.5033 8.45057 39.5045C6.46562 37.5057 4.89429 35.1639 3.73658 32.4788C2.57886 29.7943 2 26.9216 2 23.8608C2 18.4866 3.68505 13.7555 7.05516 9.66745C10.4253 5.57896 14.7453 3.02727 20.0154 2.01239C20.4186 1.96237 20.7825 2.06385 21.1072 2.31685C21.4316 2.57026 21.5937 2.9078 21.5937 3.32947C21.5937 3.65481 21.5069 3.92827 21.3332 4.14985C21.1596 4.37102 20.9506 4.48532 20.7064 4.49276C16.0431 5.23936 12.184 7.44668 9.12919 11.1147C6.07438 14.7824 4.54698 19.0311 4.54698 23.8608C4.54698 29.2754 6.44263 33.8914 10.2339 37.7087C14.0249 41.5264 18.6151 43.4353 24.0046 43.4353C26.8685 43.4353 29.6232 42.8276 32.2687 41.6122C34.9138 40.3964 37.1644 38.6955 39.0204 36.5095C39.1867 36.2622 39.4162 36.1083 39.7089 36.0475C40.0016 35.9867 40.2648 36.0252 40.4984 36.1628C40.8436 36.3551 41.0218 36.6709 41.0329 37.1103C41.0444 37.5498 40.9026 37.9679 40.6074 38.3648C38.4939 40.8695 36.0178 42.7683 33.1789 44.061C30.3404 45.3537 27.2824 46 24.0046 46ZM43.4986 23.8515C43.4986 19.0817 41.9683 14.8715 38.9078 11.2208C35.8476 7.5705 31.9896 5.33423 27.3337 4.51198C27.0734 4.47726 26.8531 4.3551 26.6729 4.14551C26.4927 3.93592 26.4026 3.667 26.4026 3.33877C26.4026 2.93075 26.5639 2.60478 26.8866 2.36088C27.2093 2.11697 27.5825 2.01445 28.0061 2.05331C33.1424 2.91896 37.4255 5.4136 40.8555 9.53723C44.2852 13.6609 46 18.4089 46 23.7814C46 25.1167 45.8974 26.4104 45.6921 27.6626C45.4864 28.9152 45.1724 30.083 44.7499 31.1661C44.5898 31.5452 44.3406 31.8168 44.0023 31.9809C43.664 32.1446 43.304 32.1446 42.9222 31.9809C42.6295 31.8445 42.4256 31.6434 42.3107 31.3776C42.1962 31.1122 42.2134 30.8234 42.3624 30.5113C42.7061 29.4662 42.9813 28.3792 43.1882 27.2502C43.3951 26.1212 43.4986 24.9883 43.4986 23.8515Z"
        fill="#2D65F2"
        fillOpacity="0.5"
      />
    </svg>
  );
};
