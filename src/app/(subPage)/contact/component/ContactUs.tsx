"use client";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",

    phone: "",
  });
  const [focused, setFocused] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <section className="w-full bg-[#FAFAFF] pt-[140px] pb-[60px] flex flex-col justify-center items-center">
        <h1 className="text-center text-[32px] md:text-[52px] text-[#04082C] font-bold">
          Contact Us
        </h1>
        <p className="text-center font-[400] text-[14px] md:text-[16px] text-[#333] mt-[10px] font-openSans leading-6">
          {` Feel free to reach out to us with a message, and we'll get back to you
          promptly.`}
        </p>
      </section>
      <section className="flex justify-between max-w-[1120px] mx-auto w-full py-[100px] gap-[100px] items-start">
        <div className="flex flex-col justify-between gap-[60px] w-1/2 ">
          <div>
            <h1 className="text-[#04082C] text-[18px] font-openSans font-bold mb-[8px]">
              Customer Support
            </h1>
            <p className="text-[#333] text-[14px] font-openSans leading-5 mb-[5px]">
              {" "}
              +1 (888) 870 2004
            </p>
            <p className="text-[#333] text-[14px] font-openSans leading-5">
              info@fleetblox.com
            </p>
          </div>
          <div>
            <h1 className="text-[#04082C] text-[18px] font-openSans font-bold mb-[8px]">
              Connect with Fleetblox
            </h1>
            <p className="text-[#333] text-[14px] font-openSans leading-5 mb-[5px]">
              Fleetblox is an AI-powered, cloud-based fleet connectivity
              solution that reduces costs, minimizes downtime, and
              revolutionizes fleet management for smarter, more efficient
              operations.
            </p>
            <h1 className="text-[#04082C] text-[14px] font-openSans font-semibold leading-5 mt-4">
              Want to learn more? Contact us
            </h1>
          </div>
        </div>
        <div className="space-y-4 w-full">
          {/* Full Name Input */}
          <div className="relative">
            {/* Label */}
            <label
              htmlFor="first-name"
              className={`absolute left-2 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 transition-all duration-200 ${
                focused ? "text-blue-500 top-0 transform -translate-y-10" : ""
              }`}
            >
              First name
            </label>

            {/* Input */}
            <input
              id="first-name"
              type="text"
              className="peer w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder=" "
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              id="email"
              required
              name="email"
              maxLength={50}
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-12 rounded bg-[#F7F7F7] px-4 font-openSans text-[14px] text-[#04082C] outline-none placeholder:text-[#7D7D7D]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
