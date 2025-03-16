"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  X,
  Home,
  DollarSign,
  PhoneCall,
  Layers,
} from "lucide-react";
import Logo from "../../../../public/images/logo.svg";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when path changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-[9999] mt-5 transition-all duration-200 ease-in-out py-[16px] px-[20px] rounded-[10px] mx-auto  w-full max-w-[1440px] ${
        isScrolled || mobileMenuOpen
          ? "bg-white shadow-md shadow-black/10 "
          : "bg-transparent"
      }`}
      style={
        isScrolled ? { boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.14)" } : {}
      }
    >
      <div className="flex items-center">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-10">
            <Link href="/">
              <Image src={Logo} alt="logo" className="h-[26px] w-[150px] " />
            </Link>
            <div className="flex items-center gap-[5px] text-[#04082C]">
              <div className="flex cursor-pointer items-center py-[10px] px-3 gap-[2px] text-[16px] font-openSans font-semibold leading-6 transition-all duration-300 ease-in-out hover:text-[#7D7D7D]">
                <h1>Products</h1>
                <div className="mt-[3px] flex items-center justify-center">
                  <ChevronDown size={18} />
                </div>
              </div>
              <div className="flex cursor-pointer items-center py-[10px] px-3 gap-[2px] text-[16px] font-openSans font-semibold leading-6 transition-all duration-300 ease-in-out hover:text-[#7D7D7D]">
                <h1>Solutions</h1>
                <div className="mt-[3px] flex items-center justify-center">
                  <ChevronDown size={18} />
                </div>
              </div>
              <div className="flex cursor-pointer items-center gap-[2px] py-[10px] px-3 text-[16px] font-openSans font-semibold leading-6 transition-all duration-300 ease-in-out hover:text-[#7D7D7D]">
                <h1>Resources</h1>
                <div className="mt-[3px] flex items-center justify-center">
                  <ChevronDown size={18} />
                </div>
              </div>
              <Link
                href="/pricings"
                className={`cursor-pointer text-[16px] font-semibold py-[10px] px-3 transition-all duration-300 ease-in-out text-[#04082C] hover:text-[#7D7D7D]  font-openSans  ${
                  pathname === "/pricings" ? "text-ti_grey" : ""
                }`}
              >
                Pricings
              </Link>
            </div>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex text-[#04082C] text-[14px] font-semibold items-center gap-[20px]">
            <Link
              href="#"
              className={`cursor-pointer text-[16px] transition-all duration-300 ease-in-out hover:text-[#7D7D7D0] py-[10px] px-5 text-[#04082C]  font-openSans`}
            >
              Request Demo
            </Link>
            <Link href="/getting-started">
              <button className="py-[10px] px-4 rounded-lg font-openSans bg-[#2D65F2] text-[#fff]">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center z-[1001]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} className="text-[#04082C]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} className="text-[#04082C]" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-[62px] left-0 right-0 bg-white z-[1000] shadow-lg"
          >
            <div className="flex flex-col px-4 py-3">
              <Link
                href="/"
                className={`flex items-center gap-2 py-3 px-2 rounded-md ${
                  pathname === "/"
                    ? "bg-blue-50 text-blue-600"
                    : "text-[#04082C]"
                }`}
              >
                <Home size={18} />
                <span className="text-[16px] font-medium">Home</span>
              </Link>

              <motion.div
                className="relative"
                initial={false}
                animate={{ height: "auto" }}
              >
                <div
                  className={`flex items-center justify-between gap-2 py-3 px-2 rounded-md cursor-pointer text-[#04082C]`}
                >
                  <div className="flex items-center gap-2">
                    <Layers size={18} />
                    <span className="text-[16px] font-medium">Solutions</span>
                  </div>
                  <ChevronDown size={16} />
                </div>
                <div className="ml-8 pl-2 border-l border-gray-200">
                  <Link
                    href="/solution-1"
                    className="block py-2 text-[14px] text-gray-600 hover:text-blue-600"
                  >
                    Fleet Management
                  </Link>
                  <Link
                    href="/solution-2"
                    className="block py-2 text-[14px] text-gray-600 hover:text-blue-600"
                  >
                    EV Management
                  </Link>
                  <Link
                    href="/solution-3"
                    className="block py-2 text-[14px] text-gray-600 hover:text-blue-600"
                  >
                    Maintenance Tracking
                  </Link>
                </div>
              </motion.div>

              <Link
                href="/pricings"
                className={`flex items-center gap-2 py-3 px-2 rounded-md ${
                  pathname === "/pricings"
                    ? "bg-blue-50 text-blue-600"
                    : "text-[#04082C]"
                }`}
              >
                <DollarSign size={18} />
                <span className="text-[16px] font-medium">Pricings</span>
              </Link>

              <Link
                href="/contact"
                className={`flex items-center gap-2 py-3 px-2 rounded-md ${
                  pathname === "/contact"
                    ? "bg-blue-50 text-blue-600"
                    : "text-[#04082C]"
                }`}
              >
                <PhoneCall size={18} />
                <span className="text-[16px] font-medium">Contact</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
