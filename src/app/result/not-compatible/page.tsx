'use client'
import Image from "next/image";
import failed from "@/../public/images/feild.svg";
import start from "@/../public/images/start-with-us.jpg";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/../public/images/Logo.png";
import { toast } from "react-hot-toast";
import axios from "axios";
import Link from "next/link";

const NotCompatible = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('brands');
      localStorage.removeItem('brandModels');
      localStorage.removeItem('country');
    }
  }, []);


  const handleSubscribe = async () => {
    setLoading(true);

    try {
      const response = await axios.post(`https://backend.illama360.com/api/newsLetter/create`, { email });
      const data = response.data; // `data` contains the response payload

      if (data.statusCode === 201) {
        toast.success('Subscription successful!');
        return router.push('/result/Successfull');
      } else {
        toast.error(data.message || 'Failed to subscribe');
      }
    } catch (error) {
      // Check if error is an AxiosError
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.error?.message || 'An unexpected error occurred';
        toast.error(errorMessage);
        console.error('Axios Error:', errorMessage);
      } else {
        // Handle other unexpected errors
        toast.error('An unexpected error occurred');
        console.error('Unexpected Error:', error);
      }
    } finally {
      setLoading(false); // Ensure loading is false regardless of success or failure
    }
  };


  return (
    <div className="relative h-screen w-screen">
      <Image
        src={start}
        alt="start with us"
        className="absolute inset-0 h-screen w-screen object-cover hidden xl:block"
      />
      <Link href={'/'}>
        <Image
          src={Logo}
          alt="start with us"
          className="absolute left-10 top-10 hidden xl:block"
        />
      </Link>


      <div className="z-[1000000] flex min-h-screen items-center justify-center overflow-auto bg-bg_white ">
        <div className="relative flex h-[780px] w-full max-w-[650px] flex-col rounded-lg bg-bg_white px-[20px] xs:px-[30px] sm:px-[60px] py-[20px] md:py-[60px] lg:shadow-lg">
          <div className="flex flex-shrink-0 flex-col items-center justify-center">
            <Image alt="failed image" className="mb-[10px]" src={failed} />
            <h2 className="pre_landing_page_title font-inter">
              Your fleet is not compatible!
            </h2>
            <p className="pre_landing_page_text font-inter">
              {` Unfortunately, your fleet isn’t compatible with our platform yet. We’re working to expand compatibility. Stay with us for all kind of future updates.`}
            </p>
          </div>
          <div className=" mt-[32px] md:mt-[60px]">
            <h1 className="font-inter text-[16px] font-semibold text-ti_dark_grey">
              Join our newsletter
            </h1>
            <div className="mt-[10px] flex flex-col sm:flex-row justify-between gap-[10px]">
              {/* Search Section */}
              <div className="mb-[16px] flex sm:w-2/3 w-full flex-shrink-0 items-center gap-[8px] rounded-md bg-bg_dusty_white px-[10px] py-[12px]">
                <input
                  type="email"
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  className="sm:w-2/4 w-full bg-bg_dusty_white font-inter text-[12px] leading-[16px] text-ti_black outline-none"
                />
              </div>
              <div className=" sm:w-2/4 w-full">
                <button disabled={loading} onClick={handleSubscribe} className="w-full rounded-md bg-p_blue px-[14px] py-[9.3px] font-inter text-[14px] font-semibold text-bg_white">
                  {loading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotCompatible;
