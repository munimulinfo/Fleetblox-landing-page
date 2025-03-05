import Image from "next/image";
import main_image from "../../../assets/blog_main_img.png";
import { blogs_data } from "@/static_data/data";
import Container from "@/components/ui/Container";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
const BlogSection = () => {
  // updated something
  // updated something
  return (
    <div className="bg-[#FAFAFF]">
      <Container>
        <section>
          <h2 className="md:hidden font-montserrat text-[28px] text-center font-bold text-[#04082C]">
            Latest Blogs
          </h2>
          <div className="hidden md:block w-1/2">
            <h1 className="font-openSans text-[22px] font-bold text-[#0336BC]">
              Latest Blogs
            </h1>
            {/* left side */}
            <h1 className="font-montserrat text-[36px] font-bold leading-normal text-[#04082C]">
              How to Build Your Perfect Fleet in 2025 (10-Step Guide)
            </h1>
            <h5 className="font-openSans text-[16px] font-semibold leading-[24px] text-[#7D7D7D] my-4">
              12 May 2024
            </h5>
          </div>
          <div className="hidden md:flex  flex-col items-center lg:items-start lg:flex-row justify-between gap-x-[40px]">
            <div className="w-1/2 overflow-hidden rounded-md">
              <Image
                src={main_image}
                alt="image"
                className="w-full overflow-hidden object-cover transition-all duration-500 hover:scale-110 hover:cursor-pointer"
              />
            </div>
            {/* right side */}
            <div className="space-y-[32px] w-1/2">
              {blogs_data.map((item, index) => (
                <div key={index} className="flex gap-x-[60px]">
                  <div className="flex-1 space-y-[10px] pt-[10px] hover:cursor-pointer">
                    <h1 className="font-openSans text-[18px] font-bold text-[#04082C] transition-all duration-500 hover:text-[#7D7D7D]">
                      {item.title}
                    </h1>
                    <h5 className="font-openSans xl:text-[14px] 2.5xl:text-[16px] font-semibold leading-[24px] text-[#7D7D7D]">
                      {item.date}
                    </h5>
                  </div>
                  <div className="overflow-hidden rounded-md">
                    <Image
                      src={item.image}
                      alt="image"
                      className="  transition-all duration-500 hover:scale-110"
                    />
                  </div>
                </div>
              ))}
              {/* <button className="text-[16px] group cursor-pointer font-openSans font-bold bg-[#2D65F2] px-5 py-3 rounded-md text-white transition-all duration-500">
                View All Blogs
              </button> */}
            </div>
          </div>

          {/* Mobile view */}

          <div className="block md:hidden mt-6">
            <div
              className="overflow-x-scroll pb-4 scrollbar-hide -mx-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div
                className="flex flex-nowrap gap-4 px-4"
                style={{ width: "max-content" }}
              >
                <div className="flex-shrink-0 w-[330px]">
                  <div className="bg-white rounded-[16px] shadow-[0_4px_12px_0px_#00000024] overflow-hidden h-[450px] flex flex-col">
                    <div className="h-[300px] w-full">
                      <Image
                        src={main_image}
                        alt="blog"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 flex flex-col justify-between flex-1">
                      <h3 className="font-openSans text-[18px] font-bold text-[#333] line-clamp-2 h-[54px]">
                        How to Build Your Perfect Fleet in 2025 (10-Step Guide)
                      </h3>
                      <p className="font-openSans text-[14px] font-semibold text-[#7D7D7D] mt-2">
                        12 May 2024
                      </p>
                    </div>
                  </div>
                </div>

                {blogs_data.map((blog, index) => (
                  <div key={index} className="flex-shrink-0 w-[400px]">
                    <div className="bg-white rounded-[16px] shadow-[0_4px_12px_0px_#00000024] overflow-hidden h-[450px] flex flex-col">
                      <div className="h-[300px] w-full">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 flex flex-col justify-between flex-1">
                        <h3 className="font-openSans text-[18px] font-bold text-[#333] line-clamp-2 h-[54px]">
                          {blog.title}
                        </h3>
                        <p className="font-openSans text-[14px] font-semibold text-[#7D7D7D] mt-2">
                          {blog.date}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center my-5">
              <button className="transition-all bg-[#2D65F2] hover:bg-[#0336BC] text-white-primary text-white duration-300 w-[95%] hover:w-[100%] md:hover:w-[144.16px] md:w-[122.16px] lg:hover:w-[144.16px] lg:w-[122.16px] flex items-center justify-center px-4 py-3 text-[16px] font-bold rounded-md group ">
                <div className="z-20 whitespace-nowrap font-openSans font-bold">
                  Start Today
                </div>
                <div className="z-10 transform transition-transform opacity-0 group-hover:opacity-100 -translate-x-4 duration-300 group-hover:translate-x-0">
                  <RightArrowIcon />
                </div>
              </button>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default BlogSection;
